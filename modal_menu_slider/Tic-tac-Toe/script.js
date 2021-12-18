const area = document.getElementById('area');
let arrayO = [];
let arrayX = [];
let winner = [[1,5,9],[3,5,7],[1,2,3],[4,5,6],[9,8,7],[2,5,8],[3,6,9],[7,8,9],[1,4,7]]
let move = 0;
let firstX
let secondX
let thirdXLTRthirdX
let firstO
let secondO
let thirdO

 

area.addEventListener('click', e => {
    if(e.target.innerHTML == ""){
        if (e.target.className = 'box') {
            e.target.style.cursor = 'not-allowed';
            if(move % 2 === 0) {
              e.target.innerHTML = "X";
              arrayX.push(e.target.id * 1);
              for (let i = 0; i < winner.length; i++) {
                firstX = winner[i][0];
                secondX = winner[i][1];
                thirdX = winner[i][2];
                if (
                  arrayX.includes(secondX) &&
                  arrayX.includes(firstX) &&
                  arrayX.includes(thirdX)
                ) {
                  e.target.innerHTML = "X";
                  document.getElementById("XWon").style.display = "block";
                } 
                else if (arrayX.length == 5) {
                  if(arrayX.includes(firstX) &&
                  arrayX.includes(secondX) &&
                  arrayX.includes(thirdX)) {
                    document.getElementById("XWon").style.display = "block";
                    console.log("dfghjk");
                  }
                  else  {
                  document.getElementById("NobodyWon").style.display = "block"
                  
                }
                }

              }

            }


                 else{
              e.target.innerHTML = "O";
              arrayO.push(e.target.id * 1);
              for (let f = 0; f < winner.length; f++) {
                firstO = winner[f][0];
                secondO = winner[f][1];
                thirdO = winner[f][2];
                if (
                  arrayO.includes(secondO) &&
                  arrayO.includes(firstO) &&
                  arrayO.includes(thirdO)
                ) {
                  document.getElementById("OWon").style.display = "block";
                }
              }
            }

            move++;
        }
    }

})



