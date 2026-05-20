
var questions = [

    {

        question: '1. Which keyword is used to declare variables in JavaScript?',

        option1: 'A) int',
        option2: 'B) var, let, const',
        option3: 'C) string',
        option4: 'D) none',

        correctAnswer: 'B) var, let, const'
    },


    {

        question: '2. Which method is used to select an element from the DOM?',
        option1: 'A) getHTML()',
        option2: 'B) selectTag()',
        option3: 'C) querySelector()',
        option4: 'D) findElement()',

        correctAnswer: 'C) querySelector()'

    },



    {

        question: '3. What is the first index of an array in JavaScript?',
        option1: 'A) 0',
        option2: 'B) 1',
        option3: 'C) -1',
        option4: 'D) 10',

        correctAnswer: 'A) 0'

    },



    {

        question: '4. What does the === operator check?',
        option1: 'A) Only value',
        option2: 'B) Value and data type',
        option3: 'C) Only data type',
        option4: 'D) Nothing',

        correctAnswer: 'B) Value and data type'

    },



    {

        question: '5. What is the main purpose of a function?',
        option1: 'A) To style a webpage',
        option2: 'B) To make code reusable',
        option3: 'C) To create HTML',
        option4: 'D) To close the browser',

        correctAnswer: 'B) To make code reusable'

    },



    {

        question: '6. Which method is used to attach an event to an element?',
        option1: 'A) addEventListener()',
        option2: 'B) listenEvent()',
        option3: 'C) clickEvent()',
        option4: 'D) onClickAdd()',

        correctAnswer: 'A) addEventListener()'

    },




    {

        question: '7. What does the push() method do in an array?',
        option1: 'A) Removes the first element',
        option2: 'B) Adds an element to the end',
        option3: 'C) Reverses the array',
        option4: 'D) Sorts the array',

        correctAnswer: 'B) Adds an element to the end'

    },




    {

        question: '8. What is innerHTML used for?',
        option1: 'A) Applying CSS',
        option2: 'B) Changing HTML content',
        option3: 'C) Creating variables',
        option4: 'D) Creating functions',

        correctAnswer: 'B) Changing HTML content'

    },



    {

        question: '9. What is the purpose of setInterval()?',
        option1: 'A) Runs code once',
        option2: 'B) Runs code repeatedly after a time interval',
        option3: 'C) Creates an array',
        option4: 'D) Removes an event',

        correctAnswer: 'B) Runs code repeatedly after a time interval'

    },


    {

        question: '10. What does querySelectorAll() return?',
        option1: 'A) Single element',
        option2: 'B) Number',
        option3: 'C) Collection of element',
        option4: 'D) Boolean',

        correctAnswer: 'C) Collection of element'

    }



]


var question = document.querySelector('#question')
var options = document.querySelector('#options')
var nextBtn = document.querySelector('#next')
var scoreText = document.querySelector('#score')

var currentQuestion = 0
var score = 0

function showQuestion() {

    question.innerHTML = questions[currentQuestion].question

    options.innerHTML =

        `
    <button class = 'optionBtn' onclick = 'checkAnswer(this)'>
            ${questions[currentQuestion].option1}
    </button>
   
    <button class = 'optionBtn' onclick = 'checkAnswer(this)'>
            ${questions[currentQuestion].option2}
    </button>

    <button class = 'optionBtn' onclick = 'checkAnswer(this)'>
            ${questions[currentQuestion].option3}
    </button>


    <button class = 'optionBtn' onclick = 'checkAnswer(this)'>
            ${questions[currentQuestion].option4}
    </button>

    `


}



function checkAnswer(element) {

    var allOptionBtn = document.querySelectorAll('.optionBtn')

    for (var i = 0; i < allOptionBtn.length; i++) {

        allOptionBtn[i].disabled = true

    }

    if (element.innerText === questions[currentQuestion].correctAnswer) {

        element.style.backgroundColor = 'green'
        element.style.color = 'white'

        score++

    } else {

        element.style.backgroundColor = 'red'
        element.style.color = 'white'

    }


}


nextBtn.addEventListener('click', function () {

    currentQuestion++

    if (currentQuestion < questions.length) {

        showQuestion()


    } else {

        question.innerText = 'Quiz Finished'

        options.innerHTML = ''

        scoreText.innerHTML = 'Your Score: ' + score

        nextBtn.style.display = 'none'
    }



})


showQuestion()