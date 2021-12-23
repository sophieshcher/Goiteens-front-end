let quiz = [
    {    
    "question" : "Do you like New Year's (Christmas) films?",
    "answer" : {
        "homeAlone": "Yes very",
        "harryPotter": "By mood",
        "lastChristmas":"I do not like it, it becomes sad from the understanding that another year has passed.",
        "Grinch": "I don't like at all"
    }
},    {    
    "question" : "How do you prefer to conduct NY?",
    "answer" : {
        "homeAlone": "Himself with tasty treats",
        "harryPotter": "Having fun with friends",
        "lastChristmas": "In the family",
        "Grinch": "Eat and go to bed"
    }
},
  {    
    "question" : "What do you like to do on New Year's Eve",
    "answer" : {
        "homeAlone": "Watch movies",
        "harryPotter": "Launch fireworks",
        "lastChristmas": "Making a lot of wishes",
        "Grinch": "Eat all the salads"

  
    }
},
{    
    "question" : "What do you like to do with gifts?",
    "answer" : {
        "homeAlone":"Receive",
        "harryPotter": "Present",
        "lastChristmas": "By mood",
        "Grinch": "I don't like gifts at all, I like money"

    }
},
{    
    "question" : "What's your favorite NY dish?",
    "answer" : {
        "homeAlone": "Pizza, sushi",
        "harryPotter": "Caviar",
        "lastChristmas":"Candy",
        "Grinch": "Salads"

    }
},
{    
    "question" : "Have you put a Christmas tree in your house?",
    "answer" : {
        "homeAlone":"Yes, it's amazing",
        "harryPotter": "Yes! And  decorated",
        "lastChristmas": "No, it's still early.",
        "Grinch": "No, it will crumble, I do not like to clean up"

    }
},
{    
    "question" : "Have you already written a letter to Santa Claus?",
    "answer" : {
        "homeAlone": "Yes, sure!",
        "harryPotter":"Yes, I want to be a magician and print money",
        "lastChristmas": "All three hundred points in place",
        "Grinch": "No, I don't believe in him."

    }
},
{    
    "question" :"Do you send greeting cards?",
    "answer" : {
        "homeAlone": "Yes, to all the contacts I have",
        "harryPotter": "Yes, to relatives and friends",
        "lastChristmas": "Yes, only to the closest ones",
        "Grinch": "No, why?"

    }
},
{    
    "question" : "Do you give NY gifts?",
    "answer" : {
        "homeAlone": "Yes, I try to everyone I know",
        "harryPotter":"Yes, only to the family",
        "lastChristmas":"Yes, only to the closest ones",
        "Grinch": "No, I only like to receive"

    }
},
{    
    "question" : "What do you like to do for Christmas?",
    "answer" : {
        "homeAlone":"Go to church",
        "harryPotter": "To wear suppers",
        "lastChristmas": "Carol",
        "Grinch":"All of the above"

    }
}
]

let answers = {
    "homeAlone" : {
        "description" : "If you got the movie 'Home Alone', then you are still a child at heart. New Year is a very important holiday for you, which you are looking forward to. You are always ready for new adventures, believe that all dreams come true, especially on New Year's Eve, and of course you love gifts. You are not afraid of difficulties and you will always find advantages in a difficult situation.",
        "img" : "./img/homeAlone.jpeg"
    },
    "harryPotter" : {
        "description" : "If you have the movie 'Harry Potter', New Year for you it is always something magical and mysterious. You are waiting for Santa Claus at any age and make a bunch of wishes, because you believe that they will all come true. You believe that as you celebrate the New Year, you will spend it, so you try to have a good time.",
        "img" : "./img/harryPotter.jpeg"
    },
    "lastChristmas" : {
        "description" : "If you got the movie 'Last Christmas', then you prefer to spend the New Year in a romantic setting or with those closest to you. You adore giving gifts, and the best gratitude for you is the happy faces of those who receive them. If all the salads are not on the table, then the New Year will not be the New Year for you.",
        "img" : "./img/lastChristmas.jpeg"
    },
    "Grinch" : {
        "description" : "If you got the movie 'The Grinch', then most likely outwardly you are trying not to show your New Year's mood, pretending that for you these are just new numbers in the calendar. But in fact, you are looking forward to the new year to share the joy with the people closest to you. Our advice is to be sincere and remain a child at heart.",
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

        let paragraph = document.createElement("div");
        paragraph.classList.add("results");
        paragraph.innerHTML = "Your result";
        document.querySelector(".test").appendChild(paragraph)

        let letete = document.createElement("div");
        letete.classList.add("tetsdf");
        letete.innerHTML = "According to the test results, the film suits you:";
        document.querySelector(".test").appendChild(letete)

        let img = document.createElement("img");
        img.classList.add("resultImg");
        img.src = answers[inspect]["img"];
        document.querySelector(".test").appendChild(img)

        let div = document.createElement("div");
        div.classList.add("resultDiv");
        div.innerHTML = answers[inspect]["description"];
        document.querySelector(".test").appendChild(div)

        document.getElementById("wrapper").style.display = "block"
    }
       showQuestion(step)
    
    
}






