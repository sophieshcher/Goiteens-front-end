// document.getElementById("toggle").addEventListener("click", onClickSlide);
// function onClickSlide() {
//     document.body.classList.toggle('show-nav');
// }

// document.getElementById("easy_btn").addEventListener("click", onClickColorFirst);
// function onClickColorFirst() {
//     document.body.classList.easy_btn("first_text");
// }

// function onClickFixed() {
//     document.getElementById("fixed_block").style.display = "initial"
//     document.getElementById("fade").style.display = "block"
// }

// function onClickColorFirst() {
//     document.getElementById("first_paragraph").style.color = "lightseagreen"
// }

let button_counter = 0;
let first_paragraph = document.getElementById("first_paragraph");
function onClickColorFirst() {
    // if (button_counter === 0) {
    //     first_paragraph.classList.add("first_text");
    //     button_counter++
    // } else {
    //     first_paragraph.classList.remove("first_text");
    //     button_counter--
    // }
    first_paragraph.classList.add("first_text");
}

// let color;
// let rgbColor;
// function randomColor() {
//      color = Math.floor(Math.random()*256) + ", " + Math.floor(Math.random()*256) + ", " + Math.floor(Math.random()*256);
//      rgbColor = "rgb(" + color + ")";
//      return rgbColor;
// }

// randomColor();

// let a = document.getElementById("second_peragraphs").style;
// a.color = randomColor();

// (Math.floor(Math.random()*9))

// function onClickColorSecond() {
//     document.getElementById("second_paragraph1").style.color = randomColor();
//     document.getElementById("second_paragraph2").style.color = randomColor();
// }

// var a = document.getElementById("second_peragraphs").style;
// a.color = randomColor();




// var a = document.getElementById("id1").style.color = randomColor();





// function randomColor() {
//     var c = "#";
//     for (var i = 0; i < 6; i++) {
//         c += (Math.random() * 16 | 0).toString(16);
//     } 
//     return c;
// }

// var a = document.getElementById("id1").style;
// a.color = randomColor();
