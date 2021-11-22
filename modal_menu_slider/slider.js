// 1.include script.js in your HTML document
let divLength = document.getElementById("slider").children.length;

let sliderImgs = [];

for (i = 0; i < divLength; i++) {
  let sliderImgName = "sliderImg" + i;
  sliderImgs.push(document.getElementById(sliderImgName).src);
  // let newSrc = "." + sliderImgs[i].slice(68, sliderImgs[i].length)
  // sliderImgs.pop()
  // sliderImgs.push(newSrc)
  // console.log(newSrc)
}



// 2.Please, in your  HTML document create div with class slider and it children:
// 2.1 img with id named sliderImg and src with value of path of your first img
// 2.2 button with id left_button and make function moveLeftFunction like this: document.getElementById("left_button").addEventListener("click", moveLeftFunction);
//

let currentImg = 0;
var button = document.createElement("button");
button.innerHTML = "Left";

var body = document.getElementsByTagName("body")[0];
body.appendChild(button);

button.addEventListener("click", function () {
  document.getElementById("sliderImg0").src = sliderImgs[currentImg];

  if (currentImg <= sliderImgs.length && currentImg > 0) {
    currentImg--;
    document.getElementById("sliderImg0").src = sliderImgs[currentImg];
  } else {
    currentImg = sliderImgs.length - 1;
    document.getElementById("sliderImg0").src = sliderImgs[currentImg];
  }
});

var button = document.createElement("button");
button.innerHTML = "Right";

var body = document.getElementsByTagName("body")[0];
body.appendChild(button);

button.addEventListener("click", function () {
  if (currentImg <= sliderImgs.length - 2) {
    currentImg++;
    document.getElementById("sliderImg0").src = sliderImgs[currentImg];
  } else {
    currentImg = 0;
    document.getElementById("sliderImg0").src = sliderImgs[currentImg];
  }
});
