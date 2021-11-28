export const generatePassword = (
	length: number,
	options: {
		letters: boolean;
		symbols: boolean;
		numbers: boolean;
	},
): string => {
	// generate a password of length characters
	const optionsValues: Record<keyof typeof options, string> = {
		letters: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
		symbols: '!@#$%^&+',
		numbers: '0123456789',
	};

	let charSet = '';

	if (options.letters) {
		charSet += optionsValues.letters;
	}
	if (options.symbols) {
		charSet += optionsValues.symbols;
	}
	if (options.numbers) {
		charSet += optionsValues.numbers;
	}

	let result = '';
	for (let i = 0; i < length; i += 1) {
		result += charSet.charAt(Math.floor(Math.random() * charSet.length));
	}
	return result;
};
