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