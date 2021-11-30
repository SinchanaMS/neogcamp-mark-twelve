var sidesLength = document.querySelectorAll(".sides-length")


var calcHypotenuseBtn = document.querySelector("#calc-hypotenuse")

var hypotenuseLength = document.querySelector("#output")

function calculateSumOfSquares(a,b){
    var sumOfSquares = a*a + b*b
    return sumOfSquares
}

function calculateHypotenuse(){
    for (var i=0; i<sidesLength.length; i++){
    if (Number(sidesLength[i].value)==" " || Number(sidesLength[i].value)<=0 ){
        hypotenuseLength.innerText= "Please enter valid inputs"}
        else {
    var sumOfSquares = calculateSumOfSquares((sidesLength[0].value), (sidesLength[1].value));
    
    var hypotenuse = Math.sqrt(sumOfSquares)

    hypotenuseLength.innerText = "The length of the hypotenuse is: " + hypotenuse
        }
    }
}

calcHypotenuseBtn.addEventListener("click", calculateHypotenuse) 