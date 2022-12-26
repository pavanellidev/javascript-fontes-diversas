let age = Math.floor(Math.random() * 85) + 1

if (age < 6) {
   console.log("Você pode entrar de graça")
} else if (age >= 6 && age <= 17 ) {
   console.log ("Você tem um desconto juvenil")
} else if (age >= 18 && age <= 26) {
   console.log("Você tem desconto de estudante")
}  else if (age >= 27 && age <= 66) {
   console.log("Você paga o preço normal")
} else {
   console.log("Você tem desconto de idoso")
}

let largestCountries = ["China", "India", "USA", "Indonesia", "Pakistan"]

console.log("The 5 largest countries in the world:\n")

for (let i = 0; i < largestCountries.length; i++) {
   console.log("- " + largestCountries[i] + "\n")
}

let largeCountries = ["Tuvalu", "India", "USA", "Indonesia", "Monaco"]

largeCountries.pop();
largeCountries.push("Pakistan");
largeCountries.shift();
largeCountries.unshift("China");

console.log(largeCountries);

let dayOfMonth = 14
let weekDay = "Friday"

if (dayOfMonth === 13 && weekDay === "Friday") {
   console.log("😱")
} else {
   console.log("It's a normal day")
}

let hands = ["rock", "paper", "scissor"]

function aleatory () {
   let randomIndex = Math.floor(Math.random() * 3)
   return hands[randomIndex]
}

console.log( aleatory() )