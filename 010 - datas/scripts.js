let data = new Date();
console.log(data);

let ano = data.getFullYear();
console.log(ano);

let mes = data.getMonth();
console.log(mes);

const mesesDoAno = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]
let mesEscrito = mesesDoAno[data.getMonth()];
console.log(mesEscrito);

let diaMes = data.getDate();
console.log(diaMes);

let diaSemana = data.getDay();
const diasDaSemana = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
let diaEscrito = diasDaSemana[data.getDay()];
console.log(diaEscrito);

let hora = data.getHours();
console.log(hora);

let dataBr = data.toLocaleString('pt-BR', {dateStyle: 'short'});
console.log(dataBr);

var hoje = new Date();
var vencimento = new Date(2022, 11, 20);

if (hoje > vencimento) {
   console.log("Sua conta está vencida!");
} else {
   console.log("Ainda não venceu.");
}