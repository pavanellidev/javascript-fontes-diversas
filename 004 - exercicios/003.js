let nome = "André";

document.getElementById("texto").innerHTML = nome;

var valor1, valor2, total;

valor1 = 5;
valor2 = 2;

total = valor1 + valor2;

console.log(total);

function realParaDolar(valorReal, cotacaoDolar) {
  return valorReal * cotacaoDolar;
}

let valorReal = 12;
let cotacaoDolar = 5.8;

let resultado = realParaDolar(valorReal, cotacaoDolar);

alert(
  "O valor em reais é: " + valorReal + ", o valor em dólar é: " + resultado
);

function alertaHello() {
  alert("Olá, pessoal!");
}

var valorFahrenheit = prompt("Digite o valor Fahrenheit:");

function paraCelsius(valorFahrenheit) {
  return (5 / 9) * (valorFahrenheit - 32);
}

var x = paraCelsius(valorFahrenheit);
x = Math.floor(x);

alert("A temperatura é de " + x + " graus celsius");
