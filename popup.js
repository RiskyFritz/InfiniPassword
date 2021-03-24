//popup.js

let password = "";
const letters = ['A','B','C', 'D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','o','p','q','r','s','t','u','v','w','x','y','z']
const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const symbols = ['!','#','$','%','^','&','?'];
let charSet = [];

function createCharSet () {
    charSet = [...new Set([...letters ,...numbers ,...symbols])];

    return charSet;
}

function generatePassword(length, characterSet) {
    password = "";

    for (let i = 0; i < length; i ++) {
        password += characterSet[Math.floor(Math.random() * characterSet.length)];
    }

    return password;
}

document.addEventListener('DOMContentLoaded', function() {
    const generatePasswordButton = document.getElementById('generatePassword');
    const slider = document.getElementById('length');
    const sliderValue = document.getElementById('lengthValue');
    const newPassword = document.getElementById('password');
    const copyPassword = document.getElementById('copyPassword');
    const copyPop = document.getElementById('copyPop');

    sliderValue.innerHTML = slider.value;

    slider.oninput = function() {
        sliderValue.innerHTML = this.value;
    }
    
    function updateClipboard(clipboardText) {
        navigator.clipboard.writeText(clipboardText).then(function() {
          /* clipboard successfully set */
          copyPassword.classList.add('active');
          setTimeout(() => {
              copyPassword.classList.remove('active');
          }, 1500)
        }, function() {
          /* clipboard write failed */
        });
    }

    copyPassword.addEventListener('click', function() {
        updateClipboard(password);
    })
    generatePasswordButton.addEventListener('click', function() {
        
        createCharSet();
        generatePassword(slider.value, charSet);
        newPassword.value = password;
        
    }, false);
  }, false);
