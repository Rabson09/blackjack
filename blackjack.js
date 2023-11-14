let cards = [];

 let sum2 = 0;
 let hasBlackJack = false; 
 let isalive = false;
 let message = "";

 
let messageEl = document.getElementById("message-el");
let sumEl = document.querySelector("#sum-el");
let cardEl = document.querySelector('#cards-el');

console.log(cards);

function getRandomCard() {
   const randomNum =  Math.floor( Math.random() * 13 ) + 1;
if (randomNum > 10) {
     return 10;
} else if (randomNum === 1) {
     return 11;
} else {
     return randomNum;
}
    return randomNum
}



function startGame() {
     isalive = true;
     let firstCard = getRandomCard()
     let secondCard = getRandomCard();
     cards = [firstCard, secondCard];
     sum2 = firstCard + secondCard
     renderGame();
}
function renderGame() {
cardEl.textContent = "Cards: ";

for (let i = 0; i < cards.length; i++) {
     cardEl.textContent += cards[i] + " ";
}




sumEl.textContent = "Sum:" + sum2;

   
 if (sum2 <= 20) {
     message = "Do you want draw a new card? 🙂";
   
 } else if (sum2 === 21) {
     message = "Wohoo You'v got Blockjack! 🥳";
     hasBlackJack = true;
 } else {
     message = "You're out of the game! 😭";
     isalive = false;
 }

messageEl.textContent = message;

}


function newCard() {
     if (isalive === true && hasBlackJack ===  false) {
let card = getRandomCard();
  sum2 += card;
  cards.push(card);

  console.log(cards);
  
  renderGame();
     }  
}

 
  