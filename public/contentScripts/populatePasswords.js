// Code for displaying <extensionDir>/images/myimage.png:
var imgURL = chrome.runtime.getURL('images/icon.png');
document.getElementById('landingImage').src = imgURL;
