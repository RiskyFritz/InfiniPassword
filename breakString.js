function breakString(string) {
	const split = string.split('');
	const makeRandomRgb = () => Math.floor(Math.random() * 255);
	const spanArr = split.map(
		(letter) =>
			`<span style="color: rgba(${makeRandomRgb()},${makeRandomRgb()},${makeRandomRgb()});">${letter}</span>`
	);
	return spanArr.join('');
}
