/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

import { ImageResponse } from "workers-og";
import { randomUUID } from "node:crypto";
import { Buffer } from "node:buffer";
import { FONTDATA } from "./fontdata.js";

function toArrayBuffer(buffer){
	// https://stackoverflow.com/a/12101012/21322342
	const arrayBuffer = new ArrayBuffer(buffer.length);
	const view = new Uint8Array(arrayBuffer);
	for (let i = 0; i < buffer.length; ++i) {
		view[i] = buffer[i];
	}
	return arrayBuffer;
}

const CAPTCHA_WIDTH = 160;
const CAPTCHA_HEIGHT = 40;
const CAPTCHA_CHARS = "abcdefghijklmnopqrstuvwxyz1234567890";
// I have to do this because workers-og doesn't support custom fonts out of the box, see fonthelper.js, and https://github.com/kvnang/workers-og/issues/13
const FONT = toArrayBuffer(Buffer.from(FONTDATA, "base64"));


function error400(){
	return new Response("400 Error", {status: 400});
}
function error404(){
	return new Response("404 Page Not Found", {status: 404});
}
function error405(){
	return new Response("405 Invalid Method", {status: 405});
}
function cors(res){
	res.headers.set("Access-Control-Allow-Origin", "*");
	return res;
}

function getRandomInt(min, max){
	// https://stackoverflow.com/a/1527820/21322342
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function makeEffect(char){
	let randItem = (arr) => arr[getRandomInt(0, arr.length - 1)];
	let colors = ["red", "blue", "green", "black"];
	let decoration = ["underline", "line-through"];
	return `<span style="color: ${randItem(colors)}; text-decoration: ${randItem(decoration)}; transform: rotate(${getRandomInt(-20, 20)}deg);">${char}</span>`
}

export default {
	async fetch(request, env, ctx) {
		// TODO: Create a mini router
		const url = new URL(request.url);
		if (request.method == "POST"){
			let origin = request.headers.get("origin");
			if (origin){
				origin = new URL(origin);
				if (new RegExp(env.ALLOWED_URLS_REGEX, "m").test(origin.hostname + ":" + origin.port)){
					return error400();
				}
			}
		}

		if (url.pathname == "/v1/create_captcha"){
			if (request.method != "POST"){
				return error405();
			}

			const captcha = Array(8).fill(0).map(x => CAPTCHA_CHARS[Math.floor(Math.random() * CAPTCHA_CHARS.length)]).join("");
			const id = randomUUID();

			// id -> captcha
			await env.KV.put(id, captcha, {expirationTtl: 300}); // Expire captchas in 5 mins
			
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

			return cors(Response.json({
				captchaURL: "data:image/png;base64," + Buffer.from(buf).toString("base64"), 
				id: id,
				width: CAPTCHA_WIDTH,
				height: CAPTCHA_HEIGHT
			}));

		} else if (url.pathname == "/v1/verify_captcha"){
			if (request.method != "POST"){
				return error405();
			}

			let json = await request.json();
			let response = json["response"];
			let id = json["id"];
			
			if (!response || !id){
				return error400();
			}
			let storedCaptcha = await env.KV.get(id);
			if (storedCaptcha == response){
				return cors(Response.json({"success": true}));
			}
			return cors(Response.json({"success": false}));
		}
		return cors(new Response('Hello World!'));
	},
};
