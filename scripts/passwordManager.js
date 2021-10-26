document.addEventListener(
	'DOMContentLoaded',
	function () {
        const downloadButton = document.getElementById("downloadButton");
        const uploadButton = document.getElementById("uploadButton");
        const addButton = document.getElementById("addButton");
        const insightButton = document.getElementById("insightsButton");
        const deletePassword = document.getElementById("deletePassword");

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
                            <button id="deletePassword">
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

        //make download button async function that downloads csv file -- download button is not working
        downloadButton.addEventListener('click', async function() {
            let credentials = await getPasswords();
            let csvContent = "data:text/csv;charset=utf-8,";
            credentials.forEach(credential => {
                csvContent += `${credential.name},${credential.url},${credential.username},${credential.password}\n`;
            });
            let encodedUri = encodeURI(csvContent);
            let link = document.createElement("a");
            link.setAttribute("href", encodedUri);
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        });

        //open window to filesystem and allow user to choose a file  
        uploadButton.addEventListener('click', function() {
            let fileInput = document.getElementById("fileInput");
            fileInput.click();
        });
        
        //make upload button async function that lets user upload csv file from their computer and adds it to the database
        uploadButton.addEventListener('click', async function() {
            let file = document.getElementById("file").files[0];
            let reader = new FileReader();
            reader.readAsText(file);
            reader.onload = async function(event) {
                let csv = event.target.result;
                let credentials = await getPasswords();
                let lines = csv.split("\n");
                lines.forEach(line => {
                    let credential = line.split(",");
                    let newCredential = {
                        name: credential[0],
                        url: credential[1],
                        username: credential[2],

                        password: credential[3]
                    };
                    credentials.push(newCredential);
                });
                let endpoint = "http://localhost:3000/password";
                try {
                    let res = await fetch(endpoint, {
                        method: "POST",
                        body: JSON.stringify(credentials),
                        headers: {
                            "Content-Type": "application/json"
                        }
                    });
                    renderPasswords();
                } catch (error) {

                }
            }
        });

        //make deletepassword button delete password from database using id from credential
        // deletePassword.addEventListener('click', async function() {
        //     let credentials = await getPasswords();
        //     let id = credentials[0].id;
        //     let endpoint = `http://localhost:3000/password/${id}`;
        //     try {
        //         let res = await fetch(endpoint, {
        //             method: 'DELETE'
        //         });
        //         console.log(res);
        //     } catch (error) {
        //         console.log(error);
        //     }
        // });
  
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