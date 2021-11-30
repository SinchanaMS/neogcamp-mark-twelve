var sides = document.querySelectorAll(".sides")
var checkAreaBtn = document.querySelector("#check-area")
var areaOfTriangle = document.querySelector("#output")


function calculateProdOfBaseAndHeight(a,b){
    var prodOfBaseAndHeight = a*b

    return prodOfBaseAndHeight
}

function calculateArea(){
    var prodOfBaseAndHeight = calculateProdOfBaseAndHeight(Number(sides[0].value), Number(sides[1].value))
    var triangleArea = prodOfBaseAndHeight/2

    areaOfTriangle.innerText = "The area of the triangle is: " +triangleArea + " squared cm"
}

checkAreaBtn.addEventListener("click", calculateArea)