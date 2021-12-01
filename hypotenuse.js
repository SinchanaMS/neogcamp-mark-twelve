var sidesLength = document.querySelectorAll(".sides-length")


var calcHypotenuseBtn = document.querySelector("#calc-hypotenuse")

var hypotenuseLength = document.querySelector("#output")

function calculateSumOfSquares(a, b) {
    var sumOfSquares = a * a + b * b
    return sumOfSquares
}

function calculateHypotenuse() {
    if ((Number(sidesLength[0].value) < 0) || (Number(sidesLength[0].value) == "") ||
        (Number(sidesLength[1].value) < 0) || (Number(sidesLength[1].value) == "")) {
        hypotenuseLength.innerText = "Please enter valid inputs"
    } else {
        var sumOfSquares = calculateSumOfSquares((sidesLength[0].value), (sidesLength[1].value));

        var hypotenuse = Math.sqrt(sumOfSquares)

        hypotenuseLength.innerText = "The length of the hypotenuse is: " + hypotenuse.toFixed(2)
    }
}


calcHypotenuseBtn.addEventListener("click", calculateHypotenuse)