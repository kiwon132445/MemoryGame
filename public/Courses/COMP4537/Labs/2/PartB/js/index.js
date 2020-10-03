
let questionJSON = {
    "questions" : {
        "1" : {
            "question" : "What are the enclosement tags that javascript are written into in html files?",
            "answer" : {
                "a" : "script",
                "b" : "javascript",
                "c" : "js",
                "d" : "none of the above"
            }
        },
        "2" : {
            "question" : "javascript is case sensitive",
            "answer" : {
                "a" : "True",
                "b" : "False"
            }
        },
        "3" : {
            "question" : "For javascript datatypes, integers variables are created by:",
            "answer" : {
                "a" : "int",
                "b" : "num",
                "c" : "var",
                "d" : "dec"
            }
        },
        "4" : {
            "question" : "What would be the value of 'x' if the following is applied?</br> x = 14 + 6 + dragonove",
            "answer" : {
                "a" : "20",
                "b" : "20dragonove",
                "c" : "nothing because integers cannot be added with strings",
                "d" : "dc4dragonove"
            }
        },
        "5" : {
            "question" : "For the following code, if 'x' was 4, what would the output be?<br>\
            <span class='reserved'>if</span> (x==0) {<br/>\
                return 1<br/>\
            } <span class='reserved'>else if</span> (x==1) {<br/>\
                return 4<br/>\
            } <span class='reserved'>else if</span> (x==2) {<br/>\
                return 3<br/>\
            } <span class='reserved'>else</span> {<br/>\
                return 0<br/>\
            }",
            "answer" : {
                "a" : "4",
                "b" : "0",
                "c" : "nothing because it is using the wrong command to get the output",
                "d" : "error"
            }
        }
    }
}
//let questionStringify = JSON.stringify(questionJson);
let choices = ['a', 'b', 'c', 'd'];
//let questionJSON = JSON.parse(questionStringify);
window.addEventListener("load", () => {
    let userInput = prompt("How many questions do you wish to have between 0-5");
    let quiz = document.createElement("ol");

    //adding question to quiz list
    for(let i = 1; i <= userInput; i++) {
        let list = document.createElement("li")
        let questionElement = document.createElement("p")
        questionElement.innerHTML = questionJSON.questions[i].question;

        list.appendChild(questionElement);

        for (let j = 0; j < choices.length; j++) {
            if (questionJSON.questions[i].answer[choices[j]] == null) {
                continue;
            }
            let div = document.createElement("div");

            let radio = document.createElement("input");
            radio.type = "radio";
            radio.id = i + choices[j];
            radio.name = "question" + i;
            radio.value = questionJSON.questions[i].answer[choices[j]]

            let label = document.createElement("label")
            label.innerHTML = questionJSON.questions[i].answer[choices[j]];
            label.for = i + choices[j];

            div.appendChild(radio);
            div.appendChild(label);
            list.appendChild(div);
        }
        quiz.appendChild(list);
    }
    document.getElementById("quiz-page").insertBefore(quiz, document.body.childNodes[0]);
});
