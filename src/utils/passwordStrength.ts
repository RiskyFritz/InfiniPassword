export const strengthScore = (password: string): number => {
	// if password is less than 8 characters, score is 0
	let passwordScore = password.length < 8 ? 0 : password.length;

	function makeUnique(str: string) {
		return String.prototype.concat(...new Set(str));
	}

	const uniquePassword: string = makeUnique(password);
	const numberScore = (password.match(/[0-9]/g) || []).length * 9;
	const symbolScore = (password.match(/[!@#$%^&*()]/g) || []).length * 9;
	const upperCaseScore = (password.match(/[A-Z]/g) || []).length * 9;
	const lowerCaseScore = (password.match(/[a-z]/g) || []).length * 9;

	passwordScore +=
		numberScore + symbolScore + upperCaseScore + lowerCaseScore;

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
