var h1Element = document.querySelectorAll("h1");
var pElement = document.querySelectorAll("p");
var olElement = document.querySelectorAll("ol");
// var button = document.querySelector("#button");
var answer1 = document.querySelector("#answer1");
var answer2 = document.querySelector("#answer2");
var answer3 = document.querySelector("#answer3");
var answer4 = document.querySelector("#answer4");

var h1 = document.querySelector("#h1");
h1.setAttribute("style", "color: blue");

var button = document.getElementsByTagName("button");

function firstSlide() {
  document.answer1.textcontent = "First Slide Question";
  document.answer2.textcontent = "Second Slide Question";
  document.answer3.textcontent = "Third Slide Question";
  document.answer4.textcontent = "Fourth Slide Question";
}
button.addEventListener("click", firstSlide);
