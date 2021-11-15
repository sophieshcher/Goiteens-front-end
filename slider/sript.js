let sliderImgs = [
   "./img/zero.png",
   "./img/ONE.png", 
   "./img/TWO.png",
   "./img/THREE.png",
   "./img/FOUR.png",
   "./img/FIVE.png",
   "./img/SIX.png",
   "./img/SEVEN.png",
   "./img/EIGHT.png",
   "./img/NINE.png",
]

let currentImg = 0;

document.getElementById("right_button").addEventListener("click", moveRightFunction);

function moveRightFunction() {

   if(currentImg <= sliderImgs.length - 2) {
      currentImg++;
      document.getElementById("sliderImg").src = sliderImgs[currentImg];
    }else {
      currentImg = 0;
      document.getElementById("sliderImg").src = sliderImgs[currentImg];
    }
}

document.getElementById("left_button").addEventListener("click", moveLeftFunction);

function moveLeftFunction() {
    document.getElementById("sliderImg").src = sliderImgs[currentImg];

    if(currentImg <= sliderImgs.length && currentImg > 0) {
      currentImg--;
      document.getElementById("sliderImg").src = sliderImgs[currentImg];
    }else {
      currentImg = sliderImgs.length - 1
      document.getElementById("sliderImg").src = sliderImgs[currentImg];
    }
 }



 let text = "Hello November";
 let counter = 0;

 setInterval(() => {
    if(counter >= text.length){
      clearInterval(counter);
    }else {
         //   console.log(counter);
         document.getElementById("h1Id").textContent += text[counter]
       counter++;
    }

 }, 500);