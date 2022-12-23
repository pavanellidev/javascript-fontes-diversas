const numeros = [01, 07, 45, 72, 101, 114];
const maior20 = numeros.filter(filtragem);

numeros.sort(function(a, b){return a - b });

document.getElementById("teste").innerHTML = numeros.join(", ");

function filtragem(value, index, array) {
   return value > 20; 
}

console.log(maior20);