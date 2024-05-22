"use strict";
let timeID;
let quizSubmitted = false; 

const quizTime = 60;
const correctAnswers = ["c", "a", "d", "a", "b"];

let startQuiz = document.getElementById("startquiz");
let quizClock = document.getElementById("quizclock");
let overlay = document.getElementById("overlay");
let submitQuiz = document.getElementById("submitquiz");
let questionList = document.querySelectorAll("#quiz input");

quizClock.value = quizTime;
let timeLeft = quizTime;

function checkAnswers() {
   let correctCount = 0;
   
   for (let i = 0; i < questionList.length; i++) {
      if (questionList[i].value === correctAnswers[i]) {
         correctCount++;
         questionList[i].className = "rightanswer";
      } else {
         questionList[i].className = "wronganswer";
      }      
   }
   return correctCount;
}

startQuiz.onclick = function() {
   overlay.className = "showquiz";
   timeID = setInterval(countdown, 1000);
};

submitQuiz.onclick = function () {
   clearInterval(timeID); 
   quizSubmitted = true; 

   let correctCount = 0;
   for (let i = 0; i < questionList.length; i++) {
      if (questionList[i].value.toLowerCase() === correctAnswers[i]) {
         correctCount++;
         questionList[i].className = "rightanswer";
      } else {
         questionList[i].className = "wronganswer";
      }      
   }

   if (correctCount === correctAnswers.length) {
      alert("Congrats! You got 100% on the quiz.");
   } else {
      alert("You answered " + correctCount + " out of " + correctAnswers.length + " questions correctly.");
   }
};

function countdown() {
   if (timeLeft === 0 || quizSubmitted) {
       clearInterval(timeID);
       submitQuiz.click(); 
   } else {
       timeLeft--;
       quizClock.value = timeLeft;
   }
}
