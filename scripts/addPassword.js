//I want strength meter blank after submit
function clearStrength() {
        meter1.style.background = "#dddfe2";
        meter2.style.background = "#dddfe2";
        meter3.style.background = "#dddfe2";
        meter4.style.background = "#dddfe2";
        meter5.style.background = "#dddfe2";
}

document.addEventListener(
	'DOMContentLoaded',
	function () {
        const addPasswordButton = document.getElementById('submitButton');
        const passwordInput = document.getElementById('passwordInput');
        const url = document.getElementById('urlInput');
        const name = document.getElementById('nameInput');
        const folder = document.getElementById('folderInput');
        const username = document.getElementById('usernameInput');
        const notes = document.getElementById('notesInput');
        const endpoint = "http://localhost:3000/password";
        const errorPopup = document.getElementById('error');
        const successPopup = document.getElementById('success');

        let date = new Date()
        let day = date.getDate();
        let month = date.getMonth()+1;
        let year = date.getFullYear();

        //Get date in format I want
        let fullDate = `${month}/${day}/${year}`;

        //Clear the form of all fields
        function clearForm() {
            setTimeout(function() {
                url.value = "";
                name.value = "";
                folder.value = "";
                username.value = "";
                passwordInput.value = "";
                notes.value = "";
            }, 2000);
        }

        //Success popup  
        function showSuccess() {
            successPopup.classList.toggle("show");
            setTimeout(function() {
                successPopup.classList.toggle("show");
            }, 2000);
            console.log('hi')
            alert('form submitted')
        }
        
        //Error popup that says something is wrong with request
        function showError() {
            errorPopup.classList.toggle("show");
            setTimeout(function() {
                errorPopup.classList.toggle("show");
            }, 2000);
        }
        
        //When inputting password we want strength meter to be responsive
        passwordInput.addEventListener("input", function () {
			strengthScore(passwordInput.value);
			if (passwordInput.value.length === 0) {
				meter1.style.background = "#dddfe2";
        		meter2.style.background = "#dddfe2";
        		meter3.style.background = "#dddfe2";
        		meter4.style.background = "#dddfe2";
        		meter5.style.background = "#dddfe2";
			}
		})

        //On Submit Create Post Request and Check for password strength
        addPasswordButton.addEventListener('submit', function() {
            if (strengthScore(passwordInput.value) > 0) {
                fetch(endpoint, {
                method: 'post',
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({url: url.value, name: name.value, 
                    folder: folder.value, username: username.value, password: password.value, 
                    notes: notes.value, strength: strengthScore(passwordInput.value), date: fullDate })
                }).then(res => {
                    res.json()
                    showSuccess();
                    clearForm();
                    clearStrength();
                    myFunction();
                })
                .then(res => {
                    console.log(res);
                })
                .catch(function(error) {
                    console.log(error);
                    showError();
                });
            } else {
                showError();
            }
        });

		// --- listen for dark mode toggle ---
		darkModeLS = localStorage.getItem('darkModeStorage');
		console.log(darkModeLS);
		if (darkModeLS === 'dark') {
			document.body.classList = 'dark';
		} else {
			document.body.classList = "";
		}
	},
	false
);