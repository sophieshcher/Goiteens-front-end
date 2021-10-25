function onClickSlide() {
    document.body.classList.toggle('show-nav');

}

function onClickFixed() {
    document.getElementById("fixed_block").style.display = "initial"
    document.getElementById("fade").style.display = "block"
}

function onClickClose1() {
    document.getElementById("fixed_block").style.display = "none"
}

// function onClickClose2() {
//     document.getElementById("fixed_block").style.display = "none"

// }