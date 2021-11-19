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

let bottonCounter = 0;

document.getElementById("nightDay").addEventListener("click", nightDayFunction);
let dGEBI = document.getElementById
function nightDayFunction() { 
    if(bottonCounter === 0){
        document.getElementById("menu").style.background = "rgb(79, 83, 163)"
        document.getElementById("main").style.background = "rgb(56, 54, 63)"
        document.getElementById("text").style.color = "#444"
        document.getElementById("text1").style.color = "#fff"
        document.getElementById("text2").style.color = "#fff"
        document.getElementById("text3").style.color = "#fff"
        document.getElementById("text4").style.color = "#fff"
        document.getElementById("text5").style.color = "#fff"
        document.getElementById("text6").style.color = "#fff"
        document.getElementById("header").style.background = "rgb(160, 164, 240)"
        document.getElementById("textH1").style.color = '#333'
        document.getElementById("nightDay").style.color = '#fff'
        document.getElementById("nightDayText").textContent = "Day"
        bottonCounter++
    } else {
        document.getElementById("menu").remove.style.background = "rgb(79, 83, 163)"
        bottonCounter--
    }

    // document.getElementById("nightDayText:hover").style.textShadow = "1px 1px 20px rgb(240, 166, 255),1px 1px 40px #e3cee7,1px 1px 60px #e3cee7,1px 1px 80px #e3cee7,1px 1px 100px #e3cee7,1px 1px 120px #e3cee7,1px 1px 150px #e3cee7;"
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
