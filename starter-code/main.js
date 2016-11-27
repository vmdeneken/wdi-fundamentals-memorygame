console.log("JS file is connected to HTML! Woo!")


// cards of the game
var cards = ['queen', 'queen', 'king', 'king'];

//cards in play 
var cardsInPlay = [];





//find the board and set it to a variable
var board = document.getElementById('game-board')
// function that will create the board
function createBoard() {

   for (var i=0; i<cards.length; i++) {
	var cardElement = document.createElement('div');
	//add a class tot he card element which wil help link styling
	cardElement.className = 'card';

    //this will set the card's 'data-card' to be the element of the array
    //data- attributes are meant to store data about an element that is not 
    //tied to a style.
    //i.e. "king"
    cardElement.setAttribute('data-card', cards[i]);
    //when a card is clicked the function isTwoCards will be executed
    cardElement.addEventListener('click', isTwoCards);

    //append the card to the board
   board.appendChild(cardElement);
   board.appendChild(cardElement);
   } 

}



//check to see if there are cards in play
function isTwoCards () {
	// add card to array of cards in play
  // 'this' hasn't been covered in this prework, but
  // for now, just know it gives you access to the card the user clicked on
   cardsInPlay.push(this.getAttribute('data-card'));
	//show the card's image
	console.log(this.getAttribute('data-card'));
    if (this.getAttribute('data-card') === 'king') {
    	this.innerHTML = "<img src='http://i.imgur.com/V5TuCDa.png'>" ; //king
    } else {
    	this.innerHTML = "<img src='http://i.imgur.com/VZcxky0.png'>"; //queen
    }

    //if you have two cards in play check for a match
	if (cardsInPlay.length === 2) {
		//pass the cardsInPlay as an argument to isMatch function
		isMatch(cardsInPlay);
		//clear cards in play array for next try
		cardsInPlay = [];
	}

}
    function isMatch(cards) {
    	//alert winning message
 if (cards[0] === cards[1]) {
    alert("You found a match!");
} else {
    alert("Sorry, try again.");
  }
}




 createBoard();

