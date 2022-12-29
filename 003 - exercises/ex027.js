let data = [
   {
      player: "Jane",
      score: 52
   },

   {
      player: "Mark",
      score: 41
   }
]

let scoreBtn = document.getElementById("score-btn");

scoreBtn.addEventListener("click", function(){
   console.log("Jane has " + data[0].score + " points")
})

let message = "The best fruits"
let fruits = ["Banana", "Apple", "Orange"]

function generateSentence (desc, arr) {
   console.log(desc + " are: ")
   for (let i = 0; i < arr.length; i++){
      console.log(arr[i])
   }
}

generateSentence(message, fruits)