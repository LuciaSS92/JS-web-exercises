//Detecting Button Press
var amountDrumButtons = document.querySelectorAll(".drum").length; // document.querySelector("button").addEventListener("click", handleClick)

for (var i = 0; i < amountDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
}

//Detecting Keyboard press
document.addEventListener("keydown", function (event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});

function makeSound(key) {
  switch (key) {
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

    default:
      break;
  }
}

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}

//Minified
// for(var amountDrumButtons=document.querySelectorAll(".drum").length,i=0;i<amountDrumButtons;i++)document.querySelectorAll(".drum")[i].addEventListener("click",function(){var e=this.innerHTML;makeSound(e),buttonAnimation(e)});function makeSound(e){switch(e){case"w":new Audio("sounds/tom-1.mp3").play();break;case"a":new Audio("sounds/tom-2.mp3").play();break;case"s":new Audio("sounds/tom-3.mp3").play();break;case"d":new Audio("sounds/tom-4.mp3").play();break;case"j":new Audio("sounds/snare.mp3").play();break;case"k":new Audio("sounds/crash.mp3").play();break;case"l":new Audio("sounds/kick-bass.mp3").play()}}function buttonAnimation(e){var n=document.querySelector("."+e);n.classList.add("pressed"),setTimeout(function(){n.classList.remove("pressed")},100)}document.addEventListener("keydown",function(e){makeSound(e.key),buttonAnimation(e.key)});
