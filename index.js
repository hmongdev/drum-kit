/*concepts: 
1. addEventListener is like waiting for a notification from someone
2. anonymous functions don't have a name, and can still execute code
3. higher-order functions: passing in a function into a method [i.e., .addEventListener('click', handleClick)]
4. var audio = new Audio('url'); audio.play();
5. 'this' keyword gives us the identity of the object; this is really useful because we can change the style.color of the object by calling this


/*obstacles:
1. forgot ); at end of for loop
2. using '.drum' vs 'button' for querySelectorAll
3. using querySelectorAll vs querySelector 
4. forgot [i] after .querySelectorAll() to select index #
5. forgot ; in for loop
*/


var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function () {

        var buttonInnerHTML = this.innerHTML;

        switch (buttonInnerHTML) {
            case "w":
                var crash = new Audio('sounds/crash.mp3');
                crash.play();
                break;

            case "a":
                var kickBass = new Audio('sounds/kick-bass.mp3');
                kickBass.play();
                break;
            case "s":
                var snare = new Audio('sounds/snare.mp3');
                snare.play();
                break;
            case "d":
                var tom1 = new Audio('sounds/tom-1.mp3');
                tom1.play();
                break;
            case "j":
                var tom2 = new Audio('sounds/tom-2.mp3');
                tom2.play();
                break;
            case "k":
                var tom3 = new Audio('sounds/tom-3.mp3');
                tom3.play();
                break;
            case "l":
                var tom4 = new Audio('sounds/tom-4.mp3');
                tom4.play();
                break;

            default:
                break;
        }
    });
}