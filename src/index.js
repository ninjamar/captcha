/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */


import { Router } from "@tsndr/cloudflare-worker-router";
import { ImageResponse } from "workers-og";
import { randomUUID } from "node:crypto";
import { Buffer } from "node:buffer";
import { CAPTCHA_WIDTH, CAPTCHA_HEIGHT, CAPTCHA_CHARS, FONT } from "./config.js";
import { getRandomInt } from "./utils.js";

const router = new Router();

// Generate random effects for character
function makeEffect(char){
	let randItem = (arr) => arr[getRandomInt(0, arr.length - 1)];
	let colors = ["red", "blue", "green", "black"];
	let decoration = ["underline", "line-through"];
	return `<span style="color: ${randItem(colors)}; text-decoration: ${randItem(decoration)}; transform: rotate(${getRandomInt(-20, 20)}deg);">${char}</span>`
}


// TODO: Find better way to block origins
router.cors();
// Block origins that don't match regex (wrangler.toml)
router.use(({env, req}) => {
	if (req.method == "POST"){
		let origin = req.headers.get("origin");
		if (origin){
			origin = new URL(origin);
			if (new RegExp(env.ALLOWED_URLS_REGEX, "m").test(origin.hostname + ":" + origin.port)){
				return new Response(null, {status: 400});
			}
		}
	}
});

// Landing page
router.get("/", ({req}) => {
	return new Response("Hello, World!");
});


/* 
	{
		captchaURL: "data:image/png...",
		id: "uuid",
		width: width,
		height: height
	}
*/
router.post("/v1/create_captcha", async ({env, req}) => {
	let captcha = Array(8).fill(0).map(x => CAPTCHA_CHARS[Math.floor(Math.random() * CAPTCHA_CHARS.length)]).join("");
	let token = randomUUID();

	// id -> captcha
	await env.KV.put(token, captcha, {expirationTtl: 300}); // Expire captchas in 5 mins
	
	let fmt = Array.from(captcha).map(x => makeEffect(x));
	let image = new ImageResponse(
		`<div style="display:flex; background: white; align-items: center; font-size: 32px; font-family: "Source Code Pro";>${fmt.join("")}</div>`, 
		{
			width: CAPTCHA_WIDTH, 
			height: CAPTCHA_HEIGHT,
			fonts: [
				{
					name: "Source Code Pro",
					data: FONT,
					// Since we load font using weight = 600, I think the font will appear sharper when we use a lower weight
					weight: 300, 
					style: "normal"
				}
			]
		}
	);
	let buf = await image.clone().arrayBuffer();
	return Response.json({
		captchaURL: "data:image/png;base64," + Buffer.from(buf).toString("base64"), 
		token: token,
		width: CAPTCHA_WIDTH,
		height: CAPTCHA_HEIGHT
	});
});

/* 
	{
		success: true ? false
	}
*/
router.post("/v1/verify_captcha", async ({env, req}) => {
	let json = await req.json();
	let response = json["response"];
	let token = json["token"];
	
	if (!response || !token){
		return new Response(null, {status: 400});
	}
	let storedCaptcha = await env.KV.get(token);
	if (storedCaptcha == response){
		return Response.json({"success": true});
	}
	return Response.json({"success": false});
});


export default {
	async fetch(request, env, ctx) {
		return router.handle(request, env, ctx);
	},
};
