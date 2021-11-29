var quizForm = document.querySelector(".quiz-form")
var checkScoreBtn = document.querySelector("#check-score-btn")
var outputScore = document.querySelector("#output")

const correctAnswers = ["45°","Isosceles triangle","60°"]

function calculateScore() {
    let score = 0;
    let index=0;

    const formResults = new FormData(quizForm)
    for(let value of formResults.values()){
        if (value === correctAnswers[index]){
            score = score+1
        } 
        index = index+1         
    }

    outputScore.innerText = "your score is: " + score
}

checkScoreBtn.addEventListener('click', calculateScore)