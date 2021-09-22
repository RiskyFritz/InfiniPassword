// Checking page title

let email = document.getElementById('email');
console.log(email)

email.style.backgroundRepeat = 'no-repeat';
email.style.backgroundImage = "url('https://sebhastian.com/img/default.png')"; 
email.style.background = 'red';
email.style.backgroundAttachment = "scroll"; 
email.style.backgroundSize = "16px 18px"; 
email.style.backgroundPosition = "98% 50%"; 
email.style.cursor = "pointer";
console.log(email.style);
console.log(email.style.backgroundImage);