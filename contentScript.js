// Checking page title

let email = document.getElementById('email');
let password = document.getElementById('pass');
let imgurl = chrome.extension.getURL("images/icon.png");

email.src = imgurl;
email.style.backgroundImage.src = imgurl; 
email.style.backgroundImage = 'url("chrome-extension://icmplkgcfcfmhiebkaeljdogfnnipcno/images/icon.png")';
email.style.backgroundRepeat = 'no-repeat';
email.style.backgroundAttachment = "scroll"; 
email.style.backgroundSize = "16px 18px"; 
email.style.backgroundPosition = "98% 50%"; 
email.style.cursor = "pointer";

password.style.backgroundImage.src = imgurl; 
password.style.backgroundImage = 'url("chrome-extension://icmplkgcfcfmhiebkaeljdogfnnipcno/images/icon.png")';
password.style.backgroundRepeat = 'no-repeat';
password.style.backgroundAttachment = "scroll"; 
password.style.backgroundSize = "16px 18px"; 
password.style.backgroundPosition = "98% 50%"; 
password.style.cursor = "pointer";