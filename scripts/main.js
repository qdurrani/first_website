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
