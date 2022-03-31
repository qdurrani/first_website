//
// https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics
//

//===
// function
//===
function updateTitleAndHeading() {
	// grab the title/h1 selector
	const myTitle = document.querySelector('title');
	const myHeading = document.querySelector('h1');

	// change the contents of the title/heading dynamically
	myTitle.textContent = 'Fun Times Inc.!';
	myHeading.textContent = 'Fun Times Inc.!';
}

// call the function
updateTitleAndHeading();

//===
// Events
//===
// on click on the image change the image to a different image
let myImage = document.querySelector('img');

myImage.onclick = function() {
	let mySrc = myImage.getAttribute('src');
	if(mySrc === 'images/funTime.jpg') {
		myImage.setAttribute('src', 'images/funTime2.jpg');
	} else {
		myImage.setAttribute('src', 'images/funTime.jpg');
	}
}

//===
// button; to modify the user
//===
let myButton = document.querySelector('button');
let myUserName = document.querySelector('h2');

/*
	API localStorage, which allows us to store data in the
	browser and retrieve it later. We use localStorage's setItem()
	function to create and store a data item called 'name',
	setting its value to the myName variable which contains
	the user's entry for the name.
*/

/*
	ask the user to input a name, that will be used in
	the welcome message
*/
function setUserName() {
	let myName = prompt('Please enter your name.');

	//make sure that user has entered something
	if(!myName) {
		setUserName();
	} else {
		localStorage.setItem('name', myName);
		myUserName.textContent = 'Welcome! ' + myName;
	}
}

/*
	if the name has not been entered then ask the user
	to enter it else, change the welcome message
*/
if(!localStorage.getItem('name')) {
	setUserName();
} else {
	let storedName = localStorage.getItem('name');
	myUserName.textContent = 'Welcome! ' + storedName;
}

/*
	when the button is clicked do this operation
*/
myButton.onclick = function() {
	setUserName();
}
