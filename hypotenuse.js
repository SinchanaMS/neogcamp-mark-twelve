var sidesLength = document.querySelectorAll(".sides-length")


var calcHypotenuseBtn = document.querySelector("#calc-hypotenuse")

var hypotenuseLength = document.querySelector("#output")

function calculateSumOfSquares(a,b){
    var sumOfSquares = a*a + b*b
    return sumOfSquares
}

function calculateHypotenuse(){
    var sumOfSquares = calculateSumOfSquares((sidesLength[0].value), (sidesLength[1].value));
    
    var hypotenuse = Math.sqrt(sumOfSquares)

    hypotenuseLength.innerText = "The length of the hypotenuse is: " + hypotenuse
}

calcHypotenuseBtn.addEventListener("click", calculateHypotenuse) 