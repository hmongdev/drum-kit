/*concepts: 
1. addEventListener: 'click' and 'keydown'
2. anonymous functions:
3. higher-order functions: passing in a function into a method [i.e., .addEventListener('click', handleClick)]
4. constructor functions: var audio = new Audio('url'); audio.play();
5. 'this.property' keyword gives us the identity of the object; this is really useful because we can change the style.color of the object by calling this.style.color


/*obstacles:
1. syntax: forgot ); at end of for loop
2. specificity: using '.drum' vs 'button' for querySelectorAll
3. logic: creating a variable as input for for-loop
4. array: using [i] with .querySelectorAll('.drum') to select index #
5. 
*/

//Detecting Button Press
var numberOfDrumButtons = document.querySelectorAll(".drum").length;

// this is a for loop, but what exactly is it doing?
for (var i = 0; i < numberOfDrumButtons; i++) {
    // this is adding an eventListener to ALL buttons
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        // whenever button is CLICKED, retrieves text of that button with 'this.innerHTML'
        var buttonInnerHTML = this.innerHTML;
        //returns 'a' or whatever button is CLICKED
        makeSound(buttonInnerHTML);
    });
}

//Detecting Keyboard Press
//this is listening for keypress, then playing the sound upon keypress
document.addEventListener("keypress", function (event) {
    //returns 'a' or whatever button is PRESSED
    makeSound(event.key);
});

//Function that recieves both mouse and keyboard INPUTS
function makeSound(key) {
    switch (key) {
        case "a":
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;
        case "s":
            var tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;
        case "d":
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;
        case "f":
            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;
        case "j":
            var crash = new Audio('sounds/crash.mp3');
            crash.play();
            break;

        case "k":
            var kick = new Audio('sounds/kick-bass.mp3');
            kick.play();
            break;
        case "l":
            var snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;

        default:
            console.log(buttonInnerHTML);
    }
}