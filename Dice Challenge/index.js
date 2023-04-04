//FIRST DICE

var randomNumber1 = Math.floor(Math.random() * 6) + 1; // 1-6

var randomImgSource1 = "images/dice" + randomNumber1 + ".png";

var img1 = document.querySelectorAll("img")[0];
img1.setAttribute("src", randomImgSource1);

//SECOND DICE

var randomNumber2 = Math.floor(Math.random() * 6) + 1; // 1-6

var randomImgSource2 = "images/dice" + randomNumber2 + ".png";

var img2 = document.querySelectorAll("img")[1].setAttribute("src", randomImgSource2);

//TITLE

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 1 wins!";
} else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 2 wins!";
} else {
  document.querySelector("h1").innerHTML = "It's a draw!";
}
