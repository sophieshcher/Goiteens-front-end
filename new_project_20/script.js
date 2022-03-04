let balls = 30
let balb = document.querySelector("#bosWrapper")
for( let i = 0; i < balls; i++ ) {
   
   let divBlue = document.createElement("div")
   divBlue.classList.add("BlueBall")
   balb.appendChild(divBlue)
   divBlue.classList.add("Ballb")
}

for( let i = 0; i < balls; i++ ) {
   let divGreen = document.createElement("div")
   divGreen.classList.add("GreenBall")
   balb.appendChild(divGreen)
   divGreen.classList.add("Ballb")
}
for( let i = 0; i < balls; i++ ) {
   let divYell = document.createElement("div")
   divYell.classList.add("YellowBall")
   balb.appendChild(divYell)
  divYell.classList.add("Ballb")
}

for( let i = 0; i < balls; i++ ) {
   let divPink = document.createElement("div")
   divPink.classList.add("PinkBall")
   balb.appendChild(divPink)
  divPink.classList.add("Ballb")
}

//  ballsPosition()




 function ballsPosition(Number) {
   let Top, Right
   // let ballElementsB = document.querySelectorAll(".GreenBall")
   let thatMomentTop = document.querySelectorAll(".BlueBall")[Number].style.top
   let thatMomentRight = document.querySelectorAll(".BlueBall")[Number].style.right
   for(let i = 0; i < 30; i++) {
      Top = Math.floor(Math.random() * 800)
      Right = Math.floor(Math.random() * 1200)
      let ballElementsB = document.querySelectorAll(".BlueBall")
      
      ballElementsB[i].style.position = "absolute"
      ballElementsB[i].style.top =  Top + "px"
      ballElementsB[i].style.right =  Right + "px"
  
     }

      function randomInteger(min, max) {
         let rand = min - 0.5 + Math.random() * (max - min + 1);
         console.log(Math.round(rand)); 
      }

      if(randomInteger(1, 2) > thatMomentRight) {
         document.querySelectorAll(".BlueBall")[i].style.top = thatMomentRight + randomInteger(0, 10) + "px"
      }

 }
 
 setInterval(() => {
    for( let m = 0; m < document.querySelectorAll(".BlueBall").length; i++) {
      ballsPosition(Number)
    }
 }, 500);
// var btn = document.createElement("BUTTON");   // Create a <button> element
// btn.innerHTML = "CLICK ME";                   // Insert text
// document.body.appendChild(btn);







