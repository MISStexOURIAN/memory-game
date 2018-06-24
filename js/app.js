{
    let cards = document.querySelectorAll('.card');
    let cardClicks = 0;
    let clickedCardClass = [];
    let clickedCard = [];
    let matches = 0;
    let guesses = 0;
    let icon;
    var parentContainer = document.getElementById('game-container');
    let timerVar = setInterval(countTimer, 1000);
    let totalSeconds = 0;

    // randomize cards and start timer on page load
    randomizeCards();

    // function to reset game when button is clicked
    function resetGame() {
        location.reload();
    }
    
    // timer function...thanks to w3schools!
    function countTimer() {
        ++totalSeconds;
        let hour = Math.floor(totalSeconds /3600);
        let minute = Math.floor((totalSeconds - hour*3600)/60);
        let seconds = totalSeconds - (hour * 3600 + minute * 60);
        let formattedSeconds = (`0${seconds}`).slice(-2);
        document.getElementById('time').innerHTML = `${minute}:${formattedSeconds}`;
    }
    
    // randomly place cards on page load
    function randomizeCards () {
        for (let i = parentContainer.children.length; i >= 0; i--) {            
            parentContainer.appendChild(parentContainer.children[Math.random() * i | 0]);
        };
    }

    // function to run when all matches have been found
    function win() {
        // grab time and display it in modal
        document.getElementById('total-time').innerHTML = document.getElementById('time').innerHTML;
        //stop clock
        clearInterval(timerVar);
        //display modal
        let modal = document.getElementById('modal');
        modal.style.display = 'block';
    }

    // function to run when cards don't match
    function noMatch() {
        let firstCard = clickedCard[0];
        let secondCard = clickedCard[1];
        // turn over unmatching cards after delay
        setTimeout(function() {
            firstCard.classList.toggle('hide');
            secondCard.classList.toggle('hide');
        }, 1200);
    }

    function resetItems() {
        clickedCardClass = []; // reset icon class array to empty
        clickedCard = []; // reset clicked cards array to empty
        guesses += 1; // increase number of guesses by 1
        document.getElementById('guesses').innerHTML = guesses;
    }

    function stars() { // decrease star rating according to total guesses
        if (guesses == 9) {
            document.getElementById('star-three').style.visibility = 'hidden';
            document.getElementById('modal-star-three').style.visibility = 'hidden';
        } else if (guesses == 18) {
            document.getElementById('star-two').style.visibility = 'hidden';
            document.getElementById('modal-star-two').style.visibility = 'hidden';
        };
    }

    for (let j = 0; j < cards.length; j++) { // attach click event to cards
        cards[j].addEventListener('click', function () {
            icon = this.firstChild;
            icon.classList.toggle('hide'); // turn card over
            clickedCardClass.push(this.className); // store card class to test for matching
            clickedCard.push(icon); // store card that was clicked to enable hiding in noMatch function
            cardClicks++; // track number of clicks

            if (cardClicks === 2) { // when two cards are clicked      
    
                if (clickedCardClass[0] != clickedCardClass[1]) { // if the icons don't match
                    noMatch(); // run the noMatch function
                    resetItems();        
                } else { // if cards match
                    matches += 1; // increase number of matches by 1
                    resetItems();
                    if (matches === 8) { // if all cards have been matched
                        win(); // run the win function
                    };
                };

                cardClicks = 0; // reset card clicks counter to 0
            };

            stars(); // change star rating accoring to number of guesses
        });    
    };    
}