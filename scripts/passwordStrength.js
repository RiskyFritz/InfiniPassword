function strengthScore(string) {
	let length = string.length;
	let lengthScore = 0;
	let symbolScore = 0;
	let numberScore = 0;
	let passwordScore = 0;
	let uniquePassword = "";
	let meter1 = document.getElementById("meter1");
	let meter2 = document.getElementById("meter2");
	let meter3 = document.getElementById("meter3");
	let meter4 = document.getElementById("meter4");
	let meter5 = document.getElementById("meter5");
	let password = document.getElementById("password");

	function makeUnique(str) {
		return String.prototype.concat(...new Set(str));
	}

	uniquePassword = makeUnique(string);

	if (uniquePassword.length < 6) {
		lengthScore = 0;
	} else {
		lengthScore = length / 25;
	}

	for (var i = 0; i < symbols.length; i++) {
		if (uniquePassword.indexOf(symbols[i]) > -1) {
			symbolScore += 0.15;
		}
		if (uniquePassword.indexOf(numbers[i]) > -1) {
			numberScore += 0.1;
		}
	}

	if (symbolScore > 0.3) {
		symbolScore = 0.3;
	}

	if (numberScore > 0.2) {
		numberScore = 0.2;
	}

	passwordScore = lengthScore + symbolScore + numberScore;

	if (passwordScore >= 1) {
		passwordScore = 1;
		meter1.style.background = "#79CC97";
		meter2.style.background = "#79CC97";
		meter3.style.background = "#79CC97";
		meter4.style.background = "#79CC97";
		meter5.style.background = "#79CC97";
	} else if (passwordScore >= 0.8 && passwordScore < 1) {
		meter1.style.background = "#9DC96E";
		meter2.style.background = "#9DC96E";
		meter3.style.background = "#9DC96E";
		meter4.style.background = "#9DC96E";
		meter5.style.background = "#dddfe2";
	} else if (passwordScore >= 0.6 && passwordScore < 0.8) {
		meter1.style.background = "#9DC96E";
		meter2.style.background = "#9DC96E";
		meter3.style.background = "#9DC96E";
		meter4.style.background = "#F39C12";
		meter5.style.background = "#dddfe2";
	} else if (passwordScore >= 0.4 && passwordScore < 0.6) {
		meter1.style.background = "#9DC96E";
		meter2.style.background = "#9DC96E";
		meter3.style.background = "#F39C12";
		meter4.style.background = "#dddfe2";
		meter5.style.background = "#dddfe2";
	} else if (passwordScore >= 0.2 && passwordScore < 0.4) {
		meter1.style.background = "#F39C12";
		meter2.style.background = "#F39C12";
		meter3.style.background = "#dddfe2";
		meter4.style.background = "#dddfe2";
		meter5.style.background = "#dddfe2";
	} else if (passwordScore > 0.0 && passwordScore < 0.2) {
		meter1.style.background = "red";
		meter2.style.background = "#dddfe2";
		meter3.style.background = "#dddfe2";
		meter4.style.background = "#dddfe2";
		meter5.style.background = "#dddfe2";
	}

	return passwordScore;

}
