import { Buffer } from "node:buffer";
import { toArrayBuffer } from "./utils.js";
import { FONTDATA } from "./fontdata.js";


export const CAPTCHA_WIDTH = 160;
export const CAPTCHA_HEIGHT = 40;
export const CAPTCHA_CHARS = "abcdefghijklmnopqrstuvwxyz1234567890";
// I have to do this because workers-og doesn't support custom fonts out of the box, see fonthelper.js, and https://github.com/kvnang/workers-og/issues/13
export const FONT = toArrayBuffer(Buffer.from(FONTDATA, "base64"));