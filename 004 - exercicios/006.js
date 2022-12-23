var interruptor = "off";

if (interruptor == "on") {
   alert("A lampada está ligada.");
} else {
   alert("A lampada está desligada");
}

var hora = new Date().getHours();
console.log(hora);

if (hora < 12) {
   console.log("Bom dia!");
} else if (hora < 18) {
   console.log("Boa tarde!");
} else {
   console.log("Boa noite!");
}

function verificar() {
   let nome = document.getElementById("nome").value;

   if (nome == "" || nome == null) {
      let p = document.getElementById("teste");
      p.innerHTML = "O campo não pode ser vazio";
      p.style.color = "red";
   } else {
      let p = document.getElementById("teste");
      p.innerHTML = "Bem vindo" + " " + nome;
      p.style.color = "green";
   }
}