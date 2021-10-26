document.addEventListener(
	'DOMContentLoaded',
	function () {

        function createNode(element) {
            return document.createElement(element);
        }
        
        function append(parent, el) {
          return parent.appendChild(el);
        }

        const ul = document.getElementById('credentials');
        

        async function getPasswords() {
            let endpoint = "http://localhost:3000/password";
            try {
                let res = await fetch(endpoint);
                return await res.json();
            } catch (error) {
                console.log(error);
            }
        }

        async function renderPasswords() {
            let credentials = await getPasswords();
            let html = '';
            credentials.forEach(credential => {
                let htmlSegment = 
                `<a id="anchor" href="viewPassword.html">
                    <div class="password">
                        <div class="metaData">
                            <div class="site">
                                <span>${credential.name}</span>
                                <span>${credential.url}</span>
                            </div>
                            <div class="userInfo">
                                <span>${credential.username}</span>
                            </div>
                        </div>
                        <div class="options">
                            <button id="copyPassword">
                                <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
                            </button>
                            <button id="copyPassword">
                                <i class="fa fa-trash-o" aria-hidden="true"></i>
                            </button>
                        </div>
                    </div>
                </a>`;
        
                html += htmlSegment;
            });
        
            let container = document.querySelector('.container');
            container.innerHTML = html;
        }
        
        renderPasswords();

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