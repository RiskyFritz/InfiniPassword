//select file from user's computer, parse it as a csv file, and add each password to the database
        uploadButton.addEventListener('click', async function() {
            console.log('upload button clicked');
            let file = document.getElementById('file').files[0];
            let reader = new FileReader();
            reader.readAsText(file);
            reader.onload = async function(e) {
                let csv = e.target.result;
                let rows = csv.split('\n');
                rows.forEach(async function(row) {
                    let rowArray = row.split(',');
                    let name = rowArray[0];
                    let url = rowArray[1];
                    let username = rowArray[2];
                    let password = rowArray[3];
                    let endpoint = "http://localhost:3000/password";
                    let data = {
                        name: name,
                        url: url,
                        username: username,
                        password: password
                    };
                    try {
                        let res = await fetch(endpoint, {
                            method: 'POST',
                            body: JSON.stringify(data),
                            headers: {
                                'Content-Type': 'application/json'
                            }
                        });
                        if (res.ok) {
                            console.log('added');
                            window.location.reload();
                        }
                    } catch (error) {
                        console.log(error);
                    }
                });
            };
        });