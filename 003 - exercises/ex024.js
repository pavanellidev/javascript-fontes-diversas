const welcomeEl = document.getElementById("welcome-el")

function greetUser(name) {
   welcomeEl.textContent = "Welcome back, " + name + " 👋"
}

greetUser(name = prompt("Qual é o seu nome?"))

function add(a, b) {
   let soma = a + b;
   console.log (`A soma de ${a} e ${b} é ${soma}`)
}

add(3, 4)