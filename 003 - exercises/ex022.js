const containerEl = document.getElementById("container");

containerEl.innerHTML = "<button id='botao'> Buy! </button>" 

document.getElementById("botao").addEventListener("click", function() {containerEl.innerHTML += "<p>Thanks for buying</p>"})
