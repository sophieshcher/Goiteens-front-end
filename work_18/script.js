for( let i = 0; i < 5; i++) {
    document.querySelector("card" + i)
}
let arrayMoon = []
let arrayStar = []

document.querySelector(".card_wrapper").addEventListener("click", function(e){
    console.log(e.target.id)
    let id = e.target.id
   if (id == "card1") {
    document.getElementById("card1").style.backgroundImage = "url(./moon.png)";
    arrayMoon.push(id)

   }
  else if  (id == "card2") {
    document.getElementById("card2").style.backgroundImage = "url(./star.png)";
    arrayStar.push(id)
   }
  else if (id == "card3") {
    document.getElementById("card3").style.backgroundImage = "url(./star.png)";
    arrayStar.push(id)
   }
 else if (id == "card4") {
    document.getElementById("card4").style.backgroundImage = "url(./moon.png)";
    arrayMoon.push(id)
   }

//    if()
})




// document.querySelector('#drag').addEventListener('click', function(e){ // Вешаем обработчик клика на UL, не LI
//     var id = e.target.id; // Получили ID, т.к. в e.target содержится элемент по которому кликнули
//     document.querySelector('#test strong').innerHTML = id; // For example
//   });