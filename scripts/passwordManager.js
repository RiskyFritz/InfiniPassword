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
    let credentials = {};
    credentials = await getPasswords();
    credentials.forEach(credential => {
        if (document.getElementById(credential.id) === null) {
            console.log(credential.id);
            let element = document.createElement('div');
            let element2 = document.createElement('div');
            let element3 = document.createElement('div');
            let element4 = document.createElement('span');
            let element5 = document.createElement('span');
            let element6 = document.createElement('div');
            let element7 = document.createElement('span');
            let element8 = document.createElement('div');
            let element9 = document.createElement('button');
            let element10 = document.createElement('i');
            let element11 = document.createElement('button');
            let element12 = document.createElement('i');
            let element13 = document.createElement('a');
            let element14 = document.createElement('a');
            let element15 = document.createElement('a');
            let container = document.querySelector('.container');
            
            element.className = 'password';
            element2.className = 'metaData';
            element3.className = 'site';
            element4.textContent = `${credential.name}   `;
            element5.textContent = `  ${credential.url}`;
            element6.className = 'userInfo';
            element7.textContent = `${credential.username}`;
            element8.className = 'options';
            element9.id = 'updateButton';
            element10.className = 'fa fa-pencil-square-o';
            element11.id = 'deletePassword';
            element11.className = `${credential.id}`;
            element12.className = 'fa fa-trash-o';
            element13.id = 'anchor';
            element13.className = `${credential.id}`;

            element11.appendChild(element12);
            element9.appendChild(element10);
            element8.appendChild(element9);
            element8.appendChild(element11);
            element6.appendChild(element7);
            element3.appendChild(element4);
            element3.appendChild(element5);
            element2.appendChild(element3);
            element2.appendChild(element6);
            element.appendChild(element2);  
            element.appendChild(element8);
            element13.appendChild(element);
            container.appendChild(element13);
        }
    });
}

//make dynamically created deletePassword element async function that deletes password from database
document.addEventListener('click', async function(e) {
    if (e.target && (e.target.id === 'deletePassword')) {
        let id = e.target.className;
        console.log(id);
        let endpoint = `http://localhost:3000/password/${id}`;
        try {
            let res = await fetch(endpoint, {
                method: 'DELETE'
            });
            if (res.ok) {
                console.log('deleted');
                window.location.reload();
            }
        } catch (error) {
            console.log(error);
        }
    }
});

renderPasswords();

//function that takes newCredential object and sends it to database
async function addCredential(newCredential) {
    let endpoint = "http://localhost:3000/password";
    try {
        let res = await fetch(endpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newCredential)
        });
        if (res.ok) {
            console.log('added');
            window.location.reload();
        }
    } catch (error) {
        console.log(error);
    }
}

//when popup button is clicked, upload the file and delete the popup element
document.addEventListener('click', async function(e) {
    if (e.target && (e.target.id === 'uploadFileButton')) {
        let file = document.getElementById('fileInput').files[0];
        let reader = new FileReader();
        let credentials = await getPasswords();

        reader.readAsText(file);
         reader.onload = async function(e) {
             let csv = e.target.result;
             let lines = csv.split('\n');
             lines.forEach(line => {
                 let credential = line.split(',');
                  let name = credential[0];
                  let url = credential[1];
                  let folder = credential[2];
                  let username = credential[3];
                  let password = credential[4];
                  let notes = credential[5];
                  let newCredential = {
                     name: name,
                     url: url,
                     folder: folder,
                     username: username,
                     password: password,
                     notes: notes
                 };
                addCredential(newCredential);
             });
        };
        reader.onerror = function() {
            console.log('error reading file');
        };
    }
});

document.addEventListener(
	'DOMContentLoaded',
	function () {

        const downloadButton = document.getElementById("downloadButton");
        const uploadButton = document.getElementById("uploadButton");
        const addButton = document.getElementById("addButton");
        const insightButton = document.getElementById("insightsButton");

        //add event listener to download button and download the password as a csv file to the user's computer
        downloadButton.addEventListener('click', async function() {
            console.log('download button clicked');
            let credentials = await getPasswords();
            let csvContent = "data:text/csv;charset=utf-8,";
            credentials.forEach(credential => {
                csvContent += `${credential.name},${credential.url},${credential.username},${credential.password}\n`;
            });
            let encodedUri = encodeURI(csvContent);
            let link = document.createElement("a");
            link.setAttribute("href", encodedUri);
            link.setAttribute("download", "passwords.csv");
            document.body.appendChild(link); // Required for FF
            link.click();
        });

        //add event listener to upload button, which opens popup window to upload csv file
        uploadButton.addEventListener('click', function() {
            console.log('upload button clicked');
            let container = document.querySelector('.fileSelect');
            //create popup element with input and button to choose file and append to body
            if (document.querySelector('.popup') === null) {
                let popup = document.createElement('div');
                popup.className = 'popup';
                let popupInput = document.createElement('input');
                popupInput.type = 'file';
                popupInput.id = 'fileInput';
                let popupButton = document.createElement('button');
                popupButton.id = 'uploadFileButton';
                popupButton.className = 'uploadFileButton';
                popupButton.textContent = 'Upload';
                let popUpDiv = document.createElement('div');
                popUpDiv.className = 'popUpDiv';
                popup.appendChild(popupInput);
                popup.appendChild(popupButton);
                popUpDiv.appendChild(popup);
                container.appendChild(popUpDiv);
            } else {
                //remove popup element if it already exists
                container.removeChild(document.querySelector('.popUpDiv'));
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