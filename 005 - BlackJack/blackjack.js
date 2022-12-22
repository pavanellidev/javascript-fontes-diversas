let firstCard = 2 + Math.random() * 11; 

let secondCard = 2 + Math.random() * 11; 

let sum = Math.floor(firstCard) + Math.floor(secondCard);

let hasBlackJack = false

let isAlive = true


if (sum <= 20) {
   console.log("Do you want to draw a new card?")
}  else if (sum === 21) {
   console.log("Wohoo! BlackJack!");
   hasBlackJack = true
} else {
   console.log("You loose.");
   isAlive = false
} 

for (let i = 1; i <= 5; i++) {
   alert(sum);
}

console.log(hasBlackJack);