/*concepts: 
1. addEventListener is like waiting for a notification from someone
2. anonymous functions don't have a name, and can still execute code
3. higher-order functions: passing in a function into a method [i.e., .addEventListener('click', handleClick)]


/*obstacles:
1. forgot ); at end of for loop
2. using '.drum' vs 'button' for querySelectorAll
3. using querySelectorAll vs querySelector 
4. forgot [i] after .querySelectorAll() to select index #
5. forgot ; in for loop
*/

//this allows each button to display 'I got clicked!' message when clicked
var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i<numberOfDrumButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        alert("I got clicked!");
    });
}

