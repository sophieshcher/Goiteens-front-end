// include script.js in your HTML document




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

// 1.Initiate into array named sliderImgs[] with all paths your img files

// let newPage = document.getElementById("slider").classList.add("leftButton")
// newPage



// 2.Please, in your  HTML document create div with class slider and it children: 
// 2.1 img with id named sliderImg and src with value of path of your first img
// 2.2 button with id left_button and make function moveLeftFunction like this: document.getElementById("left_button").addEventListener("click", moveLeftFunction);
// 

let currentImg = 0;
var button = document.createElement("button");
button.innerHTML = "Left";

var body = document.getElementsByTagName("body")[0];
body.appendChild(button);

button.addEventListener ("click", function() {
  document.getElementById("sliderImg").src = sliderImgs[currentImg];

  if(currentImg <= sliderImgs.length && currentImg > 0) {
    currentImg--;
    document.getElementById("sliderImg").src = sliderImgs[currentImg];
  }else {
    currentImg = sliderImgs.length - 1
    document.getElementById("sliderImg").src = sliderImgs[currentImg];
  }

});

var button = document.createElement("button");
button.innerHTML = "Right";

var body = document.getElementsByTagName("body")[0];
body.appendChild(button);

button.addEventListener ("click", function() {
   if(currentImg <= sliderImgs.length - 2) {
  currentImg++;
  document.getElementById("sliderImg").src = sliderImgs[currentImg];
}else {
  currentImg = 0;
  document.getElementById("sliderImg").src = sliderImgs[currentImg];
}
});

// document.getElementsByClassName("leftButton").addEventListener("click", moveLeftFunction);

// function moveLeftFunction() {
//     document.getElementById("sliderImg").src = sliderImgs[currentImg];

//     if(currentImg <= sliderImgs.length && currentImg > 0) {
//       currentImg--;
//       document.getElementById("sliderImg").src = sliderImgs[currentImg];
//     }else {
//       currentImg = sliderImgs.length - 1
//       document.getElementById("sliderImg").src = sliderImgs[currentImg];
//     }
//  }



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