let randomNumbers = Math.floor(Math.random()*100)
alert(randomNumbers)
let array = [];
for (i = 0; i < randomNumbers; i++){
    array.push(Math.floor(Math.random()*2001)-1000)
 
}

console.log(array)




 for(l = 1; l < array.length; l+=2){
    console.log(array[l])
}

// console.log(arrayHGT)
// arrayFunction()