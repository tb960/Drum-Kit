// Detecting button press

var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

        var buttonInnerHTML = this.innerHTML; // this refers to the button that triggered the Event Listener

        makeSound(buttonInnerHTML);

        addButtonAnimation(buttonInnerHTML);

      }
)};

// Detecting keyboard presses
// Add Event Listener to the entire web page
// The entire web page then listens for key presses

document.addEventListener("keydown", function(event) { // event refers to the keyboard event that triggered the Event Listener

  makeSound(event.key);

  addButtonAnimation(event.key);

})

function makeSound(key) {

  switch(key) {
    case "w":
    var tom1 = new Audio("sounds/tom-1.mp3");
    tom1.play();
    break;
    case "a":
    var tom2 = new Audio("sounds/tom-2.mp3");
    tom2.play();
    break;
    case "s":
    var tom3 = new Audio("sounds/tom-3.mp3");
    tom3.play();
    break;
    case "d":
    var tom4 = new Audio("sounds/tom-4.mp3");
    tom4.play();
    break;
    case "j":
    var snare = new Audio("sounds/snare.mp3");
    snare.play();
    break;
    case "k":
    var crash = new Audio("sounds/crash.mp3");
    crash.play();
    break;
    case "l":
    var kick = new Audio("sounds/kick-bass.mp3");
    kick.play();
    break;
    default: console.log(this.innerHTML);
  }

};


function addButtonAnimation(currentKey) {

  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function() {

    activeButton.classList.remove("pressed")
  }, 100);

};
