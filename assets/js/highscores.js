highScoreArea = document.querySelector("#highScores");
//command for user
var UserArray = ["HI", "byt"];
console.log(localStorage.getItem("UserInitials"));
var UserArray = JSON.parse(localStorage.getItem("UserInitials"));
var UserArray = JSON.parse(localStorage.getItem("UserInitials"));

for (var i = 0; i <UserArray.length; i++) {
    var scoreAndName = document.createElement("h4");
    scoreAndName.classList.add("quizOver");
    scoreAndName.classList.add("purpleText");
    scoreAndName.textContent = UserArray[i].name + " " + UserArray[i].score;
    highScoreArea.appendChild(scoreAndName); 

    var UserScoreAndName = localStorage.setItem("scoreAndName", scoreAndName);
}