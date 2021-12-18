let cookiArray = []

document.getElementById("toggle").addEventListener("click", onClickSlide);
function onClickSlide() {
    document.body.classList.toggle('show-nav');
}



function onClickFixed() {
    document.getElementById("fixed_block").style.display = "initial"
    // document.getElementById("fade").style.display = "block"
}

function onClickClose1() {
    document.getElementById("fixed_block").style.display = "none"
}


let bottonCounter = 0
document.getElementById("nightDay").addEventListener("click", nightDayFunction);
function nightDayFunction() { 

    if(bottonCounter == 0){
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
        document.getElementById("fixed_block_head").style.background = 'rgb(160, 164, 240)'
        document.getElementById("fixed_block").style.background = 'rgb(56, 54, 63)'
        document.getElementById("formText").style.color = 'rgb(230, 230, 230)'
        document.getElementById("formText1").style.color = 'rgb(230, 230, 230)'
        document.getElementById("formText2").style.color = 'rgb(230, 230, 230)'
        document.getElementById("formText3").style.color = 'rgb(230, 230, 230)'
        document.getElementById("formMainText").style.color = 'rgb(230, 230, 230)'
        document.getElementById("fixed_block_head_h2").style.color = 'rgb(56, 54, 63)'

        document.cookie = "dark_mode=" + bottonCounter;

        bottonCounter++

    } else {
        document.getElementById("nightDayText").textContent = "Night"
        document.getElementById("menu").style.background = "rgb(48, 51, 107)"
        document.getElementById("main").style.background = "#fff"
        document.getElementById("text").style.color = "#fff"
        document.getElementById("text1").style.color = "#333"
        document.getElementById("text2").style.color = "#333"
        document.getElementById("text3").style.color = "#333"
        document.getElementById("text4").style.color = "#333"
        document.getElementById("text5").style.color = "#333"
        document.getElementById("text6").style.color = "#333"
        document.getElementById("header").style.background = "rgb(48, 51, 107)"
        document.getElementById("textH1").style.color = '#fff'
        document.getElementById("nightDay").style.color = '#fff'

        document.getElementById("fixed_block_head").style.background = 'rgb(48, 51, 107)'
        document.getElementById("fixed_block").style.background = '#fff'
        document.getElementById("formText").style.color = '#333'
        document.getElementById("formText1").style.color = '#333'
        document.getElementById("formText2").style.color = '#333'
        document.getElementById("formText3").style.color = '#333'
        document.getElementById("formMainText").style.color = '#333'
        document.getElementById("fixed_block_head_h2").style.color = '#fff'

        bottonCounter--

        console.log(bottonCounter)
    }

    // document.getElementById("nightDayText:hover").style.textShadow = "1px 1px 20px rgb(240, 166, 255),1px 1px 40px #e3cee7,1px 1px 60px #e3cee7,1px 1px 80px #e3cee7,1px 1px 100px #e3cee7,1px 1px 120px #e3cee7,1px 1px 150px #e3cee7;"
}



        
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
