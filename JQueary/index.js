// $("h1") = document.querySelectorAll()

// GETTING THE VALUE $("h1").css("color");

// SETTING THE VALUE $("h1").css("color", "red");

// $("h1").css("color", "red");
// $("h1").css("font-size", "2rem");

// TO CHANGE CLASSES
// $("h1").addClass("big-title");
// $("h1").removeClass("big-title");

$("h1").addClass("big-title margin-50");
// $("h1").hasClass("margin-50")

$("h1").text("Bye.");
$("button").html("<em>Hey</em>"); //to include html tags

//TO GET THE ATTRIBUTES OR CHANGE THEM
$("a").attr("href", "https://www.yahoo.com");
$("h1").attr("class");

$("button").click(function () {
  $("h1").css("color", "pink");
});

//TO DETECT KEY PRESS
$("input").keypress(function (event) {
  console.log(event.key);
});

$("body").keypress(function (event) {
  console.log(event.key);
});

$(document).keypress(function (event) {
  $("h1").text(event.key);
});

// MOUSEOVER OR CLICK
$("h1").on("mouseover", function () {
  $("h1").css("color", "purple");
});

$("h1").on("click", function () {
  $("h1").css("color", "green");
});

//ADDING NEW ELEMENTS
$("h1").before("<button>New</button>"); //or after
$("h1").append("<button>New</button>"); //or prepend (is part of h1)

//REMOVE ELEMENTS
$("input").remove();

//ANIMATIONS
$("button").on("click", function () {
  // $("h1").hide()
  // $("h1").toggle()
  // $("h1").fadeOut()
  // $("h1").fadeIn()
  // $("h1").fadeToggle();
  // $("h1").slideToggle();
  // $("h1").animate({opacity: 0.5}) //ONLY WITH NUMERIC NUMBER (margin, size...)
  $("h1").slideUp().slideDown().animate({ opacity: 0.5 });
});
