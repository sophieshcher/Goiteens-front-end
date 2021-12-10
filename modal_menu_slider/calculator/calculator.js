


let firstValue, operator;



document.getElementById("one").addEventListener("click", oneFunction);

function oneFunction() {
  document.getElementById("screen").textContent += "1";
}

document.getElementById("two").addEventListener("click", twoFunction);

function twoFunction() {
  document.getElementById("screen").textContent += "2";
}

document.getElementById("three").addEventListener("click", threeFunction);

function threeFunction() {
  document.getElementById("screen").textContent += "3";
}

document.getElementById("four").addEventListener("click", fourFunction);

function fourFunction() {
  document.getElementById("screen").textContent += "4";
}

document.getElementById("five").addEventListener("click", fiveFunction);

function fiveFunction() {
  document.getElementById("screen").textContent += "5";
}

document.getElementById("six").addEventListener("click", sixFunction);

function sixFunction() {
  document.getElementById("screen").textContent += "6";
}

document.getElementById("seven").addEventListener("click", sevenFunction);

function sevenFunction() {
  document.getElementById("screen").textContent += "7";
}

document.getElementById("eight").addEventListener("click", eightFunction);

function eightFunction() {
  document.getElementById("screen").textContent += "8";
}

document.getElementById("nine").addEventListener("click", nineFunction);

function nineFunction() {
  document.getElementById("screen").textContent += "9";
}

document.getElementById("zero").addEventListener("click", zeroFunction);

function zeroFunction() {
  document.getElementById("screen").textContent += "0";
}





document.getElementById("AC").addEventListener("click", ACFunction);

function ACFunction() {
  document.getElementById("screen").textContent = "";
  firstValue = undefined;
}



document.getElementById("plus").addEventListener("click", plusFunction);

function plusFunction() {
  operator = "plus";
  firstValue = document.getElementById("screen").textContent;
  document.getElementById("screen").textContent = "";
}

document.getElementById("minus").addEventListener("click", minusFunction);

function minusFunction() {
  operator = "minus";
  firstValue = document.getElementById("screen").textContent;
  document.getElementById("screen").textContent = "";
}

document.getElementById("multiplication").addEventListener("click", multiplicationFunction);

function multiplicationFunction() {
  operator = "multiplication";
  firstValue = document.getElementById("screen").textContent;
  document.getElementById("screen").textContent = "";
}

document.getElementById("division").addEventListener("click", divisionFunction);

function divisionFunction() {
  operator = "division";
  firstValue = document.getElementById("screen").textContent;
  document.getElementById("screen").textContent = "";
}

document.getElementById("squared").addEventListener("click", squaredFunction);

function squaredFunction() {
    firstValue = document.getElementById("screen").textContent;
    document.getElementById("screen").textContent =
    parseInt(firstValue) * parseInt(firstValue)
    
}

document.getElementById("cubed").addEventListener("click", cubedFunction);

function cubedFunction() {
    firstValue = document.getElementById("screen").textContent;
    document.getElementById("screen").textContent =
    parseInt(firstValue) * parseInt(firstValue) * parseInt(firstValue)
    
}

document.getElementById("dot").addEventListener("click", dotFunction);



function dotFunction() {
  let screenInfo = document.getElementById('screen').textContent;
 if (screenInfo.includes(".") == false && document.getElementById('screen').textContent !== ''){
    document.getElementById("screen").textContent += "."
    parseInt(document.getElementById("screen").textContent)
 }
    
}



// document.getElementById("dot").addEventListener("click", dotFunction);

// function dotFunction() {
//     let v = document.getElementById("screen").textContent;
//     console.log((document.getElementById("screen").textContent).includes("."))
//     if (v.includes('.') == false && document.getElementById("screen").textContent !== '') {
//         document.getElementById("screen").textContent += '.';
//     }
// }



document.getElementById("remove").addEventListener("click", removeFunction);

function removeFunction() {
    var scrnPch = document.getElementById("screen").textContent;
    if(scrnPch.length > 0){
        scrnPch = scrnPch.substring(0, scrnPch.length - 1);
    document.getElementById("screen").textContent = scrnPch;
    }
  }


document.getElementById("equals").addEventListener("click", equalsFunction);

function equalsFunction() {
    let secondValue = document.getElementById("screen").textContent;
    if (operator === "plus") {
        document.getElementById("screen").textContent = parseFloat(firstValue) + parseFloat(secondValue);
        operator = 0;
    } else if(operator === "minus") {
        document.getElementById("screen").textContent = parseFloat(firstValue) - parseFloat(secondValue);
        operator = 0;
    } else if (operator === "multiplication") {
        document.getElementById("screen").textContent = parseFloat(firstValue) * parseFloat(secondValue);
        operator = 0;
    } else if (operator === "division") {
        document.getElementById("screen").textContent = parseFloat(firstValue) / parseFloat(secondValue);
        operator = 0;
    }

}