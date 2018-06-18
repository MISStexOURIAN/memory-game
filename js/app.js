var parentContainer = document.getElementById('game-container');
var cards = document.querySelectorAll('.card');
var countClicks = 0;
var cardValue;
var player1Matches = document.getElementById('player1Matches').innerHTML;
var player2Matches = document.getElementById('player2Matches').innerHTML;

for (var i = parentContainer.children.length; i >= 0; i--) {
    parentContainer.appendChild(parentContainer.children[Math.random() * i | 0]);
}
 
for (var j = 0; j < cards.length; j++) {
    cards[j].addEventListener('click', function () {
        icon = this.firstChild;
        icon.classList.toggle('hide');
        cardValue = this.value;
        countClicks += 1;
        if (countClicks == 2) {
            countClicks = 0;
            var player1 = document.getElementById('playerOne');
            var player2 = document.getElementById('playerTwo');
            player1.classList.toggle('underline');
            player2.classList.toggle('underline');
            if (cardValue == cardValue) {
                // add one to 'matches' for the current player
                
                // keep cards turned over
            } else {
                // turn cards back over
                
            }
        }
    });
};    