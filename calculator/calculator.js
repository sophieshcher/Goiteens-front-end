


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

document.getElementById("equals").addEventListener("click", equalsFunction);

function equalsFunction() {
  if (operator === "plus") {
    document.getElementById("screen").textContent =
      parseInt(firstValue) +
      parseInt(document.getElementById("screen").textContent);
  } else if(operator === "minus"){
    document.getElementById("screen").textContent =
      parseInt(firstValue) -
      parseInt(document.getElementById("screen").textContent);
  } else if(operator === "multiplication"){
    document.getElementById("screen").textContent =
      parseInt(firstValue) * parseInt(document.getElementById("screen").textContent);
  } else{
    document.getElementById("screen").textContent =
      parseInt(firstValue) / parseInt(document.getElementById("screen").textContent);
  }
}