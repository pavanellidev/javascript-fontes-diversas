const pessoa = {
   nome: "André",
   idade: 35,
   profissao: "programador",
   time: "Palmeiras"
}

const outraPessoa = ["Ricardo", 33, "vendedor", "Flamengo"];


const lista1 = ["carne", "frango", "peixe"];
const lista2 = ["arroz", "feijão", "macarrão"];

const superLista = lista1.concat(lista2);

document.getElementById("teste").innerHTML = superLista.join(", ");

