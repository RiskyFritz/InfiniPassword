export const meterColor = (strength: number): string => {
	// set the color of the strength meter
	let color = '#aaa';

	if (strength === 0) {
		color = '#aaa';
	}
	if (strength >= 1 && strength <= 20) {
		color = '#f00';
	}
	if (strength > 20 && strength <= 40) {
		color = '#f90';
	}
	if (strength > 40 && strength <= 60) {
		color = '#fbff00';
	}
	if (strength > 60 && strength <= 80) {
		color = '#9dff00';
	}
	if (strength > 80) {
		color = '#0f0';
	}

	return color;
};
