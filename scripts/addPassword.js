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
        let date = new Date()
        let day = date.getDate();
        let month = date.getMonth()+1;
        let year = date.getFullYear();

        let fullDate = `${month}/${day}/${year}`;
        console.log(fullDate);

        passwordInput.addEventListener("input", function () {
			strengthScore(passwordInput.value);
			if (passwordInput.value.length === 0) {
				meter1.style.background = "#dddfe2";
        		meter2.style.background = "#dddfe2";
        		meter3.style.background = "#dddfe2";
        		meter4.style.background = "#dddfe2";
        		meter5.style.background = "#dddfe2";
			}
            console.log(passwordInput.value.length);
		})

        addPasswordButton.addEventListener('click', function() {
            fetch(endpoint, {
            method: 'post',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({url: url.value, name: name.value, folder: folder.value, username: username.value, password: password.value, notes: notes.value, strength: strengthScore(passwordInput.value), date: fullDate })
            }).then(res => res.json())
            .then(res => console.log(res));
        })

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