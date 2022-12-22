let num1 = 30
let num2 = 12

document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2

function add() {
   let sumEl = num1 + num2;
   document.getElementById("sum-el").textContent = "Sum: " + sumEl;
}

function sub() {
   let sumEl = num1 - num2;
   document.getElementById("sum-el").textContent = "Sum: " + sumEl;
}

function div() {
   let sumEl = num1 / num2;
   document.getElementById("sum-el").textContent = "Sum: " + sumEl;
}

function mul() {
   let sumEl = num1 * num2;
   document.getElementById("sum-el").textContent = "Sum: " + sumEl;
}