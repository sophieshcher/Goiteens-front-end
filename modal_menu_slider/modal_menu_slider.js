// function onClickSlide() {
//     document.body.classList.toggle('show-nav');

// }

document.getElementById("toggle").addEventListener("click", onClickSlide);
function onClickSlide() {
    document.body.classList.toggle('show-nav');
}

// document.getElementById("my_button").addEventListener("click", onAllClick);
// document.getElementById("toggle").addEventListener("click", onClickSlide);

// document.getElementById("open").addEventListener("click", showForm);

// function showForm() {
//     document.getElementById("modal").classList.add('show-modal');
// }

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


    // let textArray = ["M","y"," ", "p", "a", "g", "e"];
    // let check = 0;
    // setInterval(function typing( ) {
    //     if (check < textArray.length){
    //        document.getElementById("textH1").textContent += (textArray[check])
    //    check++
    //     }
        
    // }, 200)
    let text = 'My page';

    let check = 0;

   function slow(){
        if(check < text.length) {
        document.getElementById("textH1").textContent += text[check];
        document.getElementById("textH1").style.fontSize = "38px";
        check++;
        setTimeout(slow, 100);
        }
    }
    setTimeout(slow(), 10)
