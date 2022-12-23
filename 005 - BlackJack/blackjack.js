let firstCard = getRandomCard(); 
let secondCard = getRandomCard(); 
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.querySelector("#sum-el");
let cardsEl = document.querySelector("#cards-el");


function getRandomCard() {
   return Math.round(Math.random() * 13);
}

function startGame() {
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
   console.log("Drawing a new card")
   let card = getRandomCard();
   sum += card;
   cards.push(card);
   console.log(cards);
   renderGame();
}
