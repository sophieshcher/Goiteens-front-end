// document.getElementById("my_button").addEventListener("click", onAllClick);

// // document.getElementById("my_button").addEventListener("click", onAllClick);
// document.getElementById("toggle").addEventListener("click", onClickSlide);

// document.getElementById("open").addEventListener("click", showForm);

// function showForm() {
//     document.getElementById("modal").classList.add('show-modal');
// }



document.getElementById("toggle").addEventListener("click", onClickSlide);
function onClickSlide() {
    document.body.classList.toggle('show-nav');
}

document.getElementById("open").addEventListener("click", showForm);
function showForm() {
    document.getElementById("modal").classList.add('show-modal');
}