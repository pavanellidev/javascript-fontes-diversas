for (let i = 0; i < 301; i++) {
   console.log(i);
   document.getElementById("teste").innerHTML += i + ", ";
}

var ano = new Date().getFullYear();

for (let i = ano; i > 1800; i--) {
   document.getElementById("ano").innerHTML += "<option value='" + i + "'>" + i + "</option>";
}

const carros = ["Gol", "Fusca", "Palio", "Celta", "Monza", "Kadett"];

for (let i = 0; i < carros.length; i++){
   console.log(carros[i] + " - ");
}