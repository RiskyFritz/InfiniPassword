let password = '';
const letters = ['A','B','C', 'D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','o','p','q','r','s','t','u','v','w','x','y','z']
const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const symbols = ['!', '#', '$', '%', '^', '&', '?', '@', '(', ')', '-', '_', '=', '+', ',',  '<', '>'];
const letNum = [...new Set([...letters, ...numbers])];
const letSym = [...new Set([...letters, ...symbols])];
const numSym = [...new Set([...numbers, ...symbols])];
const numSymLet = [...new Set([...letters, ...numbers, ...symbols])];


function generatePassword(length, characterSet) {
	password = '';

	for (let i = 0; i < length; i++) {
		password += characterSet[Math.floor(Math.random() * characterSet.length)];
	}

	return password;
}

document.addEventListener(
	'DOMContentLoaded',
	function () {
		const generatePasswordButton = document.getElementById('generatePassword');
		const slider = document.getElementById('length');
		const sliderValue = document.getElementById('lengthValue');
		const newPassword = document.getElementById('password');
		const copyPassword = document.getElementById('copyPassword');
		const faCopy = document.querySelector('.fa.fa-clone');
		const darkModeToggle = document.getElementById('darkModeToggle');
		let charSet = [];

		sliderValue.innerHTML = slider.value;

		slider.oninput = function () {
			sliderValue.innerHTML = this.value;
		};

		// --- add password to user's clipboard ---
		function updateClipboard(clipboardText) {
			navigator.clipboard.writeText(clipboardText).then(
				function () {
					/* clipboard successfully set */
					faCopy.style.animation = 'scale 500ms ease';
					setTimeout(() => {
						faCopy.style.animation = '';
					}, 500);
					console.log(breakString(password));
				},
				function () {
					/* clipboard write failed */
				}
			);
		}
		// --- listen for copy to clipboard ---
		copyPassword.addEventListener('click', function () {
			updateClipboard(password);
		});

		// --- function to check password options and create character Set ---
		function createCharSet() {
			let lettersCheck = document.getElementById('checkLetters').checked;
			let numbersCheck = document.getElementById('checkNumbers').checked;
			let symbolsCheck = document.getElementById('checkSymbols').checked;
			charSet = [];

			if (lettersCheck === true && numbersCheck === true && symbolsCheck === true) {
				charSet = numSymLet;
			} else if (lettersCheck === true && numbersCheck === true && symbolsCheck === false) {
				charSet = letNum;
			} else if (lettersCheck === true && numbersCheck === false && symbolsCheck == true) {
				charSet = letSym;
			} else if (lettersCheck === false && numbersCheck === true && symbolsCheck === true) {
				charSet = numSym;
			} else if (lettersCheck === true && numbersCheck === false && symbolsCheck === false) {
				charSet = letters;
			} else if (lettersCheck === false && numbersCheck === true && symbolsCheck === false) {
				charSet = numbers;
			} else if (lettersCheck === false && numbersCheck === false && symbolsCheck === true) {
				charSet = symbols;
			} 
			
			return charSet;
		}
		
		// --- listen for generate password click ---
		generatePasswordButton.addEventListener(
			'click',
			function () {
				createCharSet();
				generatePassword(slider.value, charSet);
				newPassword.value = password;
				newPassword.style.animation = 'fade-color 500ms ease';
				generatePasswordButton.style.animation = 'rotate360 500ms linear';
				setTimeout(() => {
					generatePasswordButton.style.animation = '';
					newPassword.style.animation = '';
				}, 500);
			},
			false
		);
		// --- listen for dark mode toggle ---
		darkModeToggle.addEventListener('click', () => {
			document.body.classList.toggle('dark');
		});
	},
	false
);
