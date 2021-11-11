export const strengthScore = (password: string): number => {
	// if password is less than 8 characters, score is 0
	let passwordScore = password.length < 8 ? 0 : password.length;

	function makeUnique(str: string) {
		return String.prototype.concat(...new Set(str));
	}

	const uniquePassword = makeUnique(password);

	// for each number in uniquePassword, add 4 to passwordScore for each symbol add 8 to passwordScore for each letter add 1 to passwordScore
	passwordScore += uniquePassword.match(/[0-9]/g)
		? 9 * uniquePassword.match(/[0-9]/g).length
		: 0;
	passwordScore += uniquePassword.match(/[!@#$%^&*()]/g)
		? 10 * uniquePassword.match(/[!@#$%^&*()]/g).length
		: 0;
	passwordScore += uniquePassword.match(/[a-z]/g)
		? 7 * uniquePassword.match(/[a-z]/g).length
		: 0;
	passwordScore += uniquePassword.match(/[A-Z]/g)
		? 9 * uniquePassword.match(/[A-Z]/g).length
		: 0;

	if (uniquePassword.length < 6) {
		passwordScore = 2;
	}

	return passwordScore;
};
