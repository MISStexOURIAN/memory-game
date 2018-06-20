var parentContainer = document.getElementById('game-container');
var cards = document.querySelectorAll('.card');
var countClicks = 0;
var clickedCards = [];
var clickedCardsIcons = [];
var clickedCardsClass = [];
var matches = 0;
var player1Matches = document.getElementById('player1Matches');
var player2Matches = document.getElementById('player2Matches');
var countDownDate = localStorage.getItem('startDate');
var guesses = 1;

// set timer and reset on page load
if (countDownDate) {
    countDownDate = new Date(countDownDate);
} else {
    countDownDate = new Date();
    localStorage.setItem('startDate', countDownDate);
}

var x = setInterval(function() {
    var now = new Date().getTime();
    var distance = now - countDownDate.getTime();
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    document.getElementById('time').innerHTML = minutes + ":" + seconds;
}, 1000);

countDownDate = new Date();
localStorage.setItem('startDate', countDownDate);
 


// randomly place cards on page load
for (var i = parentContainer.children.length; i >= 0; i--) {
    parentContainer.appendChild(parentContainer.children[Math.random() * i | 0]);
}
 
// attach click even to cards
for (var j = 0; j < cards.length; j++) {
    cards[j].addEventListener('click', function () {
        clickedCards.push(this);
        icon = this.firstChild;
        icon.classList.toggle('hide');
        countClicks += 1;        
        clickedCardsIcons.push(icon);
        clickedCardsClass.push(this.className);

        // after 2 card clicks, update guesses, toggle active player, check cards for matches
        if (countClicks === 2) {
            countClicks = 0;
            document.getElementById('guesses').innerHTML = guesses++;

            setTimeout(function () {
                var player1 = document.getElementById('playerOne');
                var player2 = document.getElementById('playerTwo');
                player1.classList.toggle('underline');
                player2.classList.toggle('underline');
            }, 1200);
            
            var firstCard = clickedCardsIcons[0];
            var secondCard = clickedCardsIcons[1];
    

            if (clickedCardsClass[0] == clickedCardsClass[1]) {
                var player1 = document.getElementById('playerOne');
                var player2 = document.getElementById('playerTwo');
                if (player1.classList.contains('underline')) {
                    var newScore = parseInt(player1Matches.innerText) + 1;
                    player1Matches.innerText = newScore;
                } else if (player2.classList.contains('underline')) {
                    var newScore = parseInt(player2Matches.innerText) + 1;
                    player2Matches.innerText = newScore;
                }
                

            } else {
                setTimeout(function (icon) {                    
                    firstCard.classList.toggle('hide');
                    secondCard.classList.toggle('hide');
                }, 1200);
            }

            clickedCardsClass = [];
            clickedCardsIcons = []; 
            clickedCards = [];
                
    
        };
    });
};    