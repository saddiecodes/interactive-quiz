var startButton = document.querySelector("#start-button");
var quizTimerCount = document.querySelector("#quiz-timer");
var quizQuestions = document.querySelector("#quizQuestions");
var intro = document.querySelector("#intro");
var quizQuestionsArea = document.querySelector("#question-container");
var questionElement = document.getElementById("quizQuestions");
var answerButtons = document.getElementById("multiple-choice-answers"); 
var gameOverArea = document.getElementById("quizResult");
var inputFromUser = document.querySelector("inputFromUser"); //for the user input

var timeLeft = 75;
var currentQuestionIndex = 0; // current question
var correctUserAnswers = 0;
var wrongUserAnswers = 0;
var answerBtn;
var state;

startButton.addEventListener("click", function () {
  console.log("It works! button pressed"); //making sure it works
  intro.classList.add("hide");
  quizQuestionsArea.classList.remove("hide");

  quizTime(); //calling the timer
  setNextQuestion();
});

function quizTime() {

}
  // this is the timer
  
// Define quiz questions with code below

// const quizQuestions = [
//     {
//         question: "What is JavaScript?",
//         options: ["A programming language", "A type of coffeee", "A new dance move"],
//         correctAnswer: "A programming language",
//     },
//     //Add more questions 
//     {
//         question: "Commonly used data types DO NOT include:",
//         options: ["strings", "booleans", "alerts", "numbers"],
//         correctAnswer: "booleans"
//     },

//     {
//         question: "The condition in an if/else statement is enclosed within",
//         options: ["quotes", "curly brackets", "parentheses", "sqaure brackets"],
//         correctAnswer: "parentheses",
//     },

//     {
//         question: "Arrays in JavaScript can be used to store",
//         options: ["numbers and strings", "other arrays", "booleans", "all of the above"],
//         correctAnswer: "all of the above",
//     },

//     {
//         question: "String values must be enclosed within when being assigned to variables",
//         options: ["commas", "curly brackets", "quotes", "parentheses"],
//         correctAnswer: "curly brackets",
//     },

//     {
//         question: "A very useful tool during development and debugging for printing content to the debugger is:",
//         options: ["JavaScript", "terminal/bash", "for loops", "console.log"],
//         correctAnswer: "console.log",
//     }







