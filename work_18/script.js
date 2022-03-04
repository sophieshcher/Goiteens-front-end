if (window.jQuery) {
  console.log("jQuery подключен к странице") 
}

let imgArray = [
  "url(./skull-and-bones.png)",
  "url(./star.png)",
  "url(./star.png)",
  "url(./moon.png)",
  "url(./mushroom.png)",
  'url(./skull-and-bones.png)',
  "url(./cookies.png)",
  "url(./leave.png)",
  "url(./leave.png)",
  "url(./mushroom.png)",
  "url(./cookies.png)",
  "url(./moon.png)"
]

function shuffle(){
	let j, temp;
	for(let i = imgArray.length - 1; i > 0; i--){
		j = Math.floor(Math.random()*(i + 1));
		temp = imgArray[j];
    console.log(j)
		imgArray[j] = imgArray[i];
		imgArray[i] = temp;
	}
	console.log(imgArray);
}

shuffle()

let WArray = [];
let number = (0, 4)
console.log(number)



document.querySelector(".card_wrapper").addEventListener("click", function(e){
    console.log(e.target.id)
    let id = e.target.id
   if (id == "card1") {
    document.getElementById("card1").style.backgroundImage = imgArray[0];
    document.getElementById("card1").style.backgroundSize = "contain";

   WArray.push(id)
   }
  else if  (id == "card2") {
    document.getElementById("card2").style.backgroundImage = imgArray[1];
    document.getElementById("card2").style.backgroundSize = "contain";
    
    WArray.push(id)
   }
  else if (id == "card3") {
    document.getElementById("card3").style.backgroundImage = imgArray[2];
    document.getElementById("card3").style.backgroundSize = "contain";
    
    WArray.push(id)
  }
 else if (id == "card4") {
    document.getElementById("card4").style.backgroundImage = imgArray[3];
    document.getElementById("card4").style.backgroundSize = "contain";
    
    WArray.push(id)
   }
   else if (id == "card5") {
    document.getElementById("card5").style.backgroundImage = imgArray[4];
    document.getElementById("card5").style.backgroundSize = "contain";
    
    WArray.push(id)
   }
   else if (id == "card6") {
    document.getElementById("card6").style.backgroundImage = imgArray[5];
    document.getElementById("card6").style.backgroundSize = "contain";
    
    WArray.push(id)
   }
   else if (id == "card7") {
    document.getElementById("card7").style.backgroundImage = imgArray[6];
    document.getElementById("card7").style.backgroundSize = "contain";
    
    WArray.push(id)
   }
   else if (id == "card8") {
    document.getElementById("card8").style.backgroundImage = imgArray[7];
    document.getElementById("card8").style.backgroundSize = "contain";
    
    WArray.push(id)
   }

   else if (id == "card12") {
    document.getElementById("card12").style.backgroundImage = imgArray[8];
    document.getElementById("card12").style.backgroundSize = "contain";
    
    WArray.push(id)
   }
   else if (id == "card9") {
    document.getElementById("card9").style.backgroundImage = imgArray[9];
    document.getElementById("card9").style.backgroundSize = "contain";
    
    WArray.push(id)
   }
   else if (id == "card10") {
    document.getElementById("card10").style.backgroundImage = imgArray[10];
    document.getElementById("card10").style.backgroundSize = "contain";
    
    WArray.push(id)
   }
   else if (id == "card11") {
    document.getElementById("card11").style.backgroundImage = imgArray[11];
    document.getElementById("card11").style.backgroundSize = "contain";
    
    WArray.push(id)
   }


   if(WArray.length == 2){
    if(document.getElementById(WArray[0]).style.backgroundImage == document.getElementById(WArray[1]).style.backgroundImage) {
      console.log("dfghjkl");
      WArray.splice(0, WArray.length)

    }
    else if(document.getElementById(WArray[0]).style.backgroundImage !== document.getElementById(WArray[1]).style.backgroundImage) {
      console.log("NONONO");

      setTimeout(() => document.getElementById(WArray[0]).style.background = "#b8ceb8", 1000);
      setTimeout(() => document.getElementById(WArray[1]).style.background = "#b8ceb8", 1000);
      setTimeout(() =>  WArray.splice(0, WArray.length), 1002);
    }


   }
})

