let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/Firefox_logo.png') {
        myImage.setAttribute('src', 'images/Firefox_logo1.png');
    } else {
        myImage.setAttribute('src', 'images/Firefox_logo.png');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    localStorage.setItem('name', 'myName');
    myHeading.textContent = 'Mozilla is awesome,' + myName;
}
if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla is awesome', + storedName;
}

myButton.onclick = function() {
    setUserName();
}