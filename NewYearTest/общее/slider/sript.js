let sliderImgs = [ "./img/mountain.jpeg", "./img/photo4.jpeg", "./img/photo.jpeg", "./img/photo8.jpeg", "./img/photo3.jpeg"];
// let slides = document.getElementsByClassName("img");

// for (let i = 0; i < slides.length; i++) {
//   sliderImgs.push(document.getElementsByClassName("img")[i]);
// }
// document.querySelector(".invisible").style.display = "block";
let currentImg = 0;

function moveToRight() {
  document.getElementById("sliderImg").src = sliderImgs[currentImg];
  if (currentImg < sliderImgs.length - 1 && currentImg >= 0) {
    currentImg++;
    document.getElementById("sliderImg").src = sliderImgs[currentImg];
  } else {
    currentImg = 0;
    document.getElementById("sliderImg").src = sliderImgs[currentImg];
  }
}

function moveToLeft() {
  document.getElementById("sliderImg").src = sliderImgs[currentImg];

  if (currentImg <= sliderImgs.length && currentImg > 0) {
    currentImg--;
    document.getElementById("sliderImg").src = sliderImgs[currentImg];
  } else {
    currentImg = sliderImgs.length - 1;
    document.getElementById("sliderImg").src = sliderImgs[currentImg];
  }
}