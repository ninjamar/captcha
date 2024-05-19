export function getRandomInt(min, max){
	// https://stackoverflow.com/a/1527820/21322342
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function toArrayBuffer(buffer){
	// https://stackoverflow.com/a/12101012/21322342
	const arrayBuffer = new ArrayBuffer(buffer.length);
	const view = new Uint8Array(arrayBuffer);
	for (let i = 0; i < buffer.length; ++i) {
		view[i] = buffer[i];
	}
	return arrayBuffer;
}

export function cors(res){
	res.headers.set("Access-Control-Allow-Origin", "*");
	return res;
}