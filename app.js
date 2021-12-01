var inputs = document.querySelectorAll(".angle-input")
var outputResult = document.querySelector("#output")
var checkBtn = document.querySelector("#is-triangle")

console.log(inputs)

function calculateSumOfAngles(angle1, angle2, angle3) {
    var sumOfAngles = angle1 + angle2 + angle3
    return sumOfAngles
}

function isTriangle() {

    if ((Number(inputs[0].value) < 0) || (Number(inputs[0].value) == "") ||
        (Number(inputs[1].value) < 0) || (Number(inputs[1].value) == "") ||
        (Number(inputs[2].value) < 0) || (Number(inputs[2].value) == "")) {
        outputResult.innerText = "Please enter valid inputs"
    } else {
        var sumOfAngles = (calculateSumOfAngles(Number(inputs[0].value), Number(inputs[1].value), Number(inputs[2].value)))
        if (sumOfAngles === 180) {
            outputResult.innerText = "Yayy! This is a triangle!"
        } else {
            outputResult.innerText = "The angles don't form a triangle!"
        }

    }
}

checkBtn.addEventListener("click", isTriangle)