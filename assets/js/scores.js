// Define quiz questions
const quizQuestions = [
{
    question: "What is JavaScript?", 
    options: ["A programming language", "A type of coffeee", "A new dance move"],
    correctAnswer: "A programming language", 
},
//Add more questions 
{
    question: "Commonly used data types DO NOT include:",
    options: ["strings", "booleans","alerts","numbers"],
    correctAnswer: "booleans"
},

{
    question: "The condition in an if/else statement is enclosed within",
    options: ["quotes", "curly brackets", "parentheses", "sqaure brackets"],
    correctAnswer: "parentheses",
},

{
    question: "Arrays in JavaScript can be used to store",
    options: ["numbers and strings", "other arrays", "booleans", "all of the above"],
    correctAnswer: "all of the above", 
},

{
    question: "String values must be enclosed within when being assigned to variables",
    options: ["commas", "curly brackets", "quotes", "parentheses"],
    correctAnswer: "curly brackets",
},

{
    question: "A very useful tool during development and debugging for printing content to the debugger is:",
    options: ["JavaScript", "terminal/bash", "for loops", "console.log"],
    correctAnswer: "console.log", 
}

];

//Other global variables
let currentQuestionIndex = 0;
let timer;
let timeLeft = 60; //set initial time

//Function to start the quiz
function startQuiz() {
// Start the timer
timer = setInterval(function () {
    timeLeft--; 

    // Check if the game is over
    if (timeLeft <=0 || currentQuestionIndex === quizQuestions.length) {
        endgame();
     }
    }, 1000); 