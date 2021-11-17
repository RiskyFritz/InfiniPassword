export const strengthScore = (password: string): number => {
	// if password is less than 8 characters, score is 0
	let passwordScore = password.length < 8 ? 0 : password.length;

	function makeUnique(str: string) {
		return String.prototype.concat(...new Set(str));
	}

	const uniquePassword: string = makeUnique(password);

	// for each number in uniquePassword, add 4 to passwordScore for each symbol add 8 to passwordScore for each letter add 1 to passwordScore
	passwordScore += password.match(/[0-9]/g)
		? 9 * password.match(/[0-9]/g).length
		: 0;
	passwordScore += password.match(/[!@#$%^&*()]/g)
		? 9 * password.match(/[!@#$%^&*()]/g).length
		: 0;
	passwordScore += password.match(/[a-z]/g)
		? 7 * password.match(/[a-z]/g).length
		: 0;
	passwordScore += uniquePassword.match(/[A-Z]/g)
		? 9 * password.match(/[A-Z]/g).length
		: 0;

	if (uniquePassword.length === 0) {
		passwordScore = 0;
	} else if (uniquePassword.length < 3) {
		passwordScore = 2;
	}

	if (passwordScore > 100) {
		passwordScore = 100;
	}

	return passwordScore;
};
