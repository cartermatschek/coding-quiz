// Quiz Questions
var questions = [{
    question: "Commonly used data types DO NOT include:",
    answers: [ "Strings", "Booleans", "Alerts", "Numbers"],
    correctAnswer: "Alerts",
    submittedAnswer: "",
}, {
    question: "The condition in an if/else statement is enclosed within _______.",
    answers: [ "Quotes", "Curly Brackets", "Parentheses", "Square Brackets"],
    correctAnswer: "Parentheses",
    submittedAnswer: "",
}, {
    question: "Arrays in JavaScript can be used to store _______.",
    answers: [ "Numbers and Strings", "Other Arrays", "Booleans", "All of the Above"],
    correctAnswer: "All of the Above",
    submittedAnswer: "",
}, {
    question: "String Values must be enclosed within _______ when being assigned to variables",
    answers: [ "Commas", "Curly Brackets", "Quotes", "Parentheses"],
    correctAnswer: "Quotes",
    submittedAnswer: "",
}, {
    question: "A very useful tool used during development and debugging for printing content to the debugger is:",
    answers: [ "JavaScript", "Terminal/Bash", "For Loops", "Console Log"],
    correctAnswer: "Alerts",
    submittedAnswer: "",
}];

var timerEl = document.getElementById("timer")

var startingContainer = document.getElementById("starting-container")
var startButton = document.getElementById("start-btn")

var questionContainer = document.getElementById("question-container")
var questionTitle = document.getElementById("question")
var answerButtons = document.getElementById("answer-buttons")

var timeLeft = 75
var questionIndex = 0
var timerState;
var points = 0;


function timerInterval() {
    if(timeLeft > 0){
        timeLeft--
        timerEl.textContent = "Timer:  " + timeLeft;
    }
    else {
        timerEl.textContent = "Timer:  " + timeLeft; 
        clearInterval(timerState)
        endGame();
    }
}

function startQuiz() {
    timerState = setInterval(timerInterval, 1000)
    startingContainer.setAttribute("class", "hide")
    questionContainer.removeAttribute("class")
    displayQuestion()
}

function displayQuestion() {
    var currentQuestion = questions[questionIndex]
    questionTitle.textContent = currentQuestion.question
    answerButtons.innerHTML = ""
    currentQuestion.answers.forEach(function(index){
        var answerBtn = document.createElement("button")
        answerBtn.textContent = index
        answerBtn.setAttribute("class", "btn")
        answerBtn.setAttribute("value", index)
        // answerBtn.onclick(selectAnswer)
// add click event to each button created that checks value against correct answer
        answerButtons.append(answerBtn)
    })
}

function selectAnswer(event) {
    console.log(selectAnswer());
    var answer = event.target.innertext
    storeAnswer(answer)
    // if anwswer is correct displayCorrect
    // if answer is wrong displayIncorrect
    questionIndex++;
    // displayTheNextQuestion())
}

function storeAnswer(answer) {
    questions[questionIndex]["submittedAnswer"] = answer
    if (answer == questions[questionIndex]['answer']) {
        points++;
    } else {
        timeLeft--
    }
}









startButton.onclick = startQuiz