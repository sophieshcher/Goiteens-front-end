let quiz = [
    {    
    "question" : "Любишь ли ты Новогодние(Рождественские) фильмы?",
    "answer" : {
        "homeAlone": "Да очень",
        "harryPotter": "По настроению",
        "lastChristmas": "Не люблю, грусно становится от понимания, что прошел еще один год",
        "Grinch": "Не люблю вообще"
    }
},    {    
    "question" : "Как ты предпочитаешь проводить НГ?",
    "answer" : {
        "homeAlone": "Самому с вкусняшками",
        "harryPotter": "Веселится в кругу друзей",
        "lastChristmas": "В кругу семьи",
        "Grinch": "Поесть и лечь спать"
    }
},
  {    
    "question" : "Что ты любишь делать в новогоднюю ночь",
    "answer" : {
        "homeAlone": "Посмотреть фильмы",
        "harryPotter": "Запускать салюты",
        "lastChristmas": "Позагадывать много желаний",
        "Grinch": "Съедать все салаты"

  
    }
},
{    
    "question" : "Что ты любишь делать с подарками?",
    "answer" : {
        "homeAlone": "Получать",
        "harryPotter": "Дарить",
        "lastChristmas": "По настроению",
        "Grinch": "Вообще не люблю подарки, денги люблю"

    }
},
{    
    "question" : "Твое любимое НГ блюдо?",
    "answer" : {
        "homeAlone": "Пицца, суши",
        "harryPotter": "Конфеты",
        "lastChristmas": "Красная икра",
        "Grinch": "Салаты"

    }
},
{    
    "question" : "Поставили ли у тебя дома елку?",
    "answer" : {
        "homeAlone": "Да очень",
        "harryPotter": "Да! И украсил/ла",
        "lastChristmas": "Нет, еще рано.",
        "Grinch": "Нет, она будет осыпаться не люблю убирать"

    }
},
{    
    "question" : "Ты  уже писал(а) письмо Деду Морозу?",
    "answer" : {
        "homeAlone": "Да, конечно!",
        "harryPotter": "Да, хочу быть волшебником и печатать деньги",
        "lastChristmas": "Все триста пунктов на месте",
        "Grinch": "Нет, я не верю в него."

    }
},
{    
    "question" : "Отправляете ли вы поздравительные открытки?",
    "answer" : {
        "homeAlone": "Да, всем контактам которые у меня есть",
        "harryPotter": "Да, родственникам и друзьям",
        "lastChristmas": "Да, только самым близким",
        "Grinch": "Нет, а зачем?"

    }
},
{    
    "question" : "Дарите ли вы НГ подарки?",
    "answer" : {
        "homeAlone": "Да, стараюсь всем кого знаю",
        "harryPotter": "Да, стараюсь всем кого знаю",
        "lastChristmas": "Да, только самым близким",
        "Grinch": "Нет, люблю только получать"

    }
},
{    
    "question" : "Что ты любишь делать на Рождество?",
    "answer" : {
        "homeAlone": "Ходить в церковь",
        "harryPotter": "Носить вечери",
        "lastChristmas": "Колядовать",
        "Grinch": "Все перечисленное"

    }
}
]

let answers = {
    "homeAlone" : {
        "description" : "homeAlonehomeAlonehomeAlonehomeAlonehomeAlonehomeAlonehomeAlonehomeAlone",
        "img" : "./img/homeAlone.jpeg"
    },
    "harryPotter" : {
        "description" : "harryPotterharryPotterharryPotterharryPotterharryPotterharryPotterharryPotter",
        "img" : "./img/harryPotter.jpeg"
    },
    "lastChristmas" : {
        "description" : "lastChristmaslastChristmaslastChristmaslastChristmaslastChristmaslastChristmas",
        "img" : "./img/lastChristmas.jpeg"
    },
    "Grinch" : {
        "description" : "GrinchGrinchGrinchGrinchGrinchGrinchGrinchGrinchGrinchGrinchGrinch",
        "img" : "./img/Grinch.jpeg"
    }
}


window.onload = function() {
    let result = {};
     let step = 0;

    function showQuestion(qNumber){
        document.querySelector(".question").textContent = quiz[step]["question"]
        document.querySelector(".stepCounterNamber").textContent = step
        let answer = "";
        for(let key in quiz[step]["answer"]) {
            answer += `<button class="button-answer" data-v="${key}">${quiz[step]["answer"][key]}</batton>`;
        }
        document.querySelector(".answer").innerHTML = answer;
    }



    document.onclick = function (event) {
        event.stopPropagation();
        if(event.target.classList.contains("button-answer") && step < quiz.length) {
            console.log(event.target.data);
            if(result[event.target.dataset.v] != undefined) {
                result[event.target.dataset.v]++;
            } else {
                result[event.target.dataset.v] = 0
            }
            step++;
            if(step == quiz.length) {
                document.querySelector(".question").remove();
                document.querySelector(".answer").remove();
                document.querySelector(".stepCounter").remove();
                showResult()
            }
            else {
                showQuestion(step)
            }
        }
        console.log(result)
        
       
    }

    function showResult() {
        let inspect = Object.keys(result).reduce(function(first, second){
            return result[first] > result[second] ? first : second;
        });
        console.log(inspect)
        let div = document.createElement("div");
        div.classList.add("result");
        div.innerHTML = answers[inspect]["description"];
        document.querySelector(".test").appendChild(div)

        let img = document.createElement("img");
        img.classList.add("resultImg");
        img.src = answers[inspect]["img"];
        document.querySelector(".test").appendChild(img)
    }
       showQuestion(step)
    
    
}






