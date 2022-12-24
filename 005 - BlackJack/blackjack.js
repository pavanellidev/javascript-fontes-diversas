let player = {
   name: "Per",
   chips: 145
}

let cards = []
let sum = 0
let hasBlackJack = false;
let isAlive = true;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.querySelector("#sum-el");
let cardsEl = document.querySelector("#cards-el");
let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips
 

function getRandomCard() {
   let resultRandom = Math.floor(Math.random() * 13) + 1;
   
   if (resultRandom === 1){
      return 11
   } else if (resultRandom > 10) {
      return 10
   } else {
      return resultRandom
   }
}

function startGame() {
   isAlive = true
   let firstCard = getRandomCard();
   let secondCard = getRandomCard();
   cards = [firstCard, secondCard]
   sum = firstCard + secondCard
   renderGame();
}

function renderGame() {
   cardsEl.textContent = "Cards: "

   for (let i = 0; i < cards.length; i++) {
       cardsEl.textContent += cards[i] + " - ";
   }

   sumEl.textContent = `Sum: ${sum}`;

   if (sum <= 20) {
      message = ("Do you want to draw a new card?");
   }  else if (sum === 21) {
      message = ("Wohoo! BlackJack!");
      hasBlackJack = true
   } else {
      message = ("You loose.");
      isAlive = false
   } 
   messageEl.textContent = message;   
}

function newCard() {

   if (hasBlackJack === false && isAlive === true) {
      let card = getRandomCard();
      sum += card;
      cards.push(card);
      renderGame();
   }
   
}
