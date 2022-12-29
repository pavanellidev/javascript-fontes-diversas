const player = "Per"
const opponent = "Nick"
const game = "AmazingFighter"
let points = 0
let hasWon = false

points += 100
hasWon = false

if (hasWon){
   console.log(`${player} got ${points} points and won the ${game} game!`)
} else {
   console.log(`The winner is ${opponent}! ${player} lost the game.`)
}

let myCourses = ["Learn CSS Animations", "UI Design Fundamentals", "Intro to Clean Code"]

function algo(arr) {
   console.log("My courses are: ")
   for(let i = 0; i < arr.length; i++) { 
      console.log([i + 1] + " - " + arr[i])
   }
}

algo(myCourses)