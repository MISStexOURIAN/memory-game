var parentContainer = document.getElementById('game-container');
var cards = document.querySelectorAll('.card');
var countClicks = 0;
var clickedCardsIcons = [];
var clickedCardsClass = [];
var activePlayer = document.getElementsByClassName('underline');




for (var i = parentContainer.children.length; i >= 0; i--) {
    parentContainer.appendChild(parentContainer.children[Math.random() * i | 0]);
}
 
for (var j = 0; j < cards.length; j++) {
    cards[j].addEventListener('click', function () {
        icon = this.firstChild;
        icon.classList.toggle('hide');
        countClicks += 1;        
        clickedCardsIcons.push(icon);
        clickedCardsClass.push(this.className);

        if (countClicks === 2) {
            countClicks = 0;
            var player1 = document.getElementById('playerOne');
            var player2 = document.getElementById('playerTwo');
            player1.classList.toggle('underline');
            player2.classList.toggle('underline');
            var firstCard = clickedCardsIcons[0];
            var secondCard = clickedCardsIcons[1];
    

            if (clickedCardsClass[0] == clickedCardsClass[1]) {
                // var matches = activePlayer.nextSibling.firstChild.innerHTML;
                // matches += 1;
            } else {
                setTimeout(function (icon) {
                    
                    firstCard.classList.toggle('hide');
                    secondCard.classList.toggle('hide');
                }, 2000);
            }

            clickedCardsClass = [];
            clickedCardsIcons = [];

            
            
                // add one to 'matches' for the current player
                
                // keep cards turned over
        
                // turn cards back over
                
    
        };
    });
};    