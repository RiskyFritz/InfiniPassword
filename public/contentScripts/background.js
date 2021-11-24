//// background.js ////
// ignore es linting for this file
// Language: javascript
// Path: public\contentScripts\background.js
function injectedFunction() {
	document.body.style.backgroundColor = 'orange';
	console.log('injectedFunction');
}

chrome.action.onClicked.addListener((tab) => {
	chrome.scripting.executeScript({
		target: { tabId: tab.id },
		function: injectedFunction,
	});
});
