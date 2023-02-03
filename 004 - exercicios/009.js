let user = 
[{nome: 'João', email:'joao@email.com'},
 {nome: 'Daniel', email:'daniel@email.com'},
 {nome: 'Maria', email:'maria@email.com'}
]

for (let i = 0; i < user.length; i++) {
  document.querySelector('.output').innerHTML +=
  "Nome: " + user[i].nome + " email: " + user[i].email + "<br>"
}
