// a. Please, include slider.js in you HTML document
// b. Please, connect css file 'style.css' into your HTML document
// b. Please, in your HTML document create div with id slider and it's children elements:
// 1. img with id named sliderImg0, sliderImg1, sliderImg2 ... 

let divLength = document.getElementById("slider").children.length;
let sliderImgs = [];

for (i = 0; i < divLength; i++) {
  sliderImgs.push(document.getElementById("sliderImg" + i).src);
}

let currentImg = 0;
let sliderButtons = document.getElementById("slider");
let buttonLeft = document.createElement("button");

buttonLeft.innerHTML = "Left";


sliderButtons.appendChild(buttonLeft);

buttonLeft.addEventListener("click", function () {
  document.getElementById("sliderImg0").src = sliderImgs[currentImg];

  if (currentImg <= sliderImgs.length && currentImg > 0) {
    currentImg--;
    document.getElementById("sliderImg0").src = sliderImgs[currentImg];
  } else {
    currentImg = sliderImgs.length - 1;
    document.getElementById("sliderImg0").src = sliderImgs[currentImg];
  }
});

let buttonRight = document.createElement("button");
buttonRight.innerHTML = "Right";

sliderButtons.appendChild(buttonRight);

buttonRight.addEventListener("click", function () {
  if (currentImg <= sliderImgs.length - 2) {
    currentImg++;
    document.getElementById("sliderImg0").src = sliderImgs[currentImg];
  } else {
    currentImg = 0;
    document.getElementById("sliderImg0").src = sliderImgs[currentImg];
  }
});

