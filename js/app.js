{
    var parentContainer = document.getElementById('game-container');
    const cards = document.querySelectorAll('.card');
    let countClicks = 0;
    let totalCardClicks = 0;
    let clickedCards = [];
    let clickedCardsIcons = [];
    let clickedCardsClass = [];
    let matches = 0;
    let player1Matches = document.getElementById('player-1-matches');
    let player2Matches = document.getElementById('player-2-matches');
    let totalMatches = [];
    let guesses = 1;


    // Thanks to w3schools for this variation of a timer!
    const countDownDate = new Date().getTime();
    const x = setInterval(() => {
        const now = new Date().getTime();
        const distance = now - countDownDate;
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        const formattedSeconds = (`0${seconds}`).slice(-2);
        document.getElementById('time').innerHTML = `${minutes}:${formattedSeconds}`;
    }, 1000);

    // randomly place cards on page load
    for (let i = parentContainer.children.length; i >= 0; i--) {
        const parentContainer = document.getElementById('game-container');
        parentContainer.appendChild(parentContainer.children[Math.random() * i | 0]);
    };

    // attach click event to cards
    for (let j = 0; j < cards.length; j++) {
        cards[j].addEventListener('click', function () {
            let icon = this.firstChild;
            totalCardClicks += 1;
            clickedCards.push(this);                        
            icon.classList.toggle('hide');
            countClicks += 1;
            clickedCardsIcons.push(icon);
            clickedCardsClass.push(this.className);

            // after 2 card clicks, update guesses, toggle active player, check cards for matches
            if (countClicks === 2) {
                countClicks = 0;
                document.getElementById('guesses').innerHTML = guesses++;

                setTimeout(() => {
                    let player1 = document.getElementById('player-one');
                    let player2 = document.getElementById('player-two');
                    player1.classList.toggle('underline');
                    player2.classList.toggle('underline');
                }, 1200);

                let firstCard = clickedCardsIcons[0];
                let secondCard = clickedCardsIcons[1];
            
                if (clickedCardsClass[0] == clickedCardsClass[1]) {
                    let player1 = document.getElementById('player-one');
                    let player2 = document.getElementById('player-two');
                    if (player1.classList.contains('underline')) {
                        let newScore = parseInt(player1Matches.innerText) + 1;
                        player1Matches.innerText = newScore;
                    } else if (player2.classList.contains('underline')) {
                        let newScore = parseInt(player2Matches.innerText) + 1;
                        player2Matches.innerText = newScore;
                    };
                    totalMatches.push('1');

                    if (totalMatches.length === 8) {
                        modal.style.display = 'block';
                        document.getElementById('total-time').innerHTML = document.getElementById('time').innerHTML;
                        clearInterval(x);
                        if (parseInt(player1Matches.innerHTML) > parseInt(player2Matches.innerHTML)) {
                            document.getElementById('winner').innerHTML = 'Player 1';
                        } else if (parseInt(player1Matches.innerHTML) < parseInt(player2Matches.innerHTML)) {
                            document.getElementById('winner').innerHTML = 'Player 2';
                        } else if (parseInt(player1Matches.innerHTML) == parseInt(player2Matches.innerHTML)) {
                            document.getElementById('congratulations').innerHTML = 'You have tied!';
                        };
                    };
                } else {
                    
                    setTimeout(icon => {
                        firstCard.classList.toggle('hide');
                        secondCard.classList.toggle('hide');
                    }, 1200);
                };

                clickedCardsClass = [];
                clickedCardsIcons = [];
                clickedCards = [];
    
            };

            if (totalCardClicks == 18) {
                document.getElementById('star-three').style.visibility = 'hidden';
                document.getElementById('modal-star-three').style.visibility = 'hidden';
            } else if (totalCardClicks == 36) {
                document.getElementById('star-two').style.visibility = 'hidden';
                document.getElementById('modal-star-two').style.visibility = 'hidden';
            };
        });
    };

    // When the user clicks on <span> (x), close the modal
    document.getElementsByClassName('close')[0].onclick = () => {
        const modal = document.getElementById('modal');
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = event => {
        if (event.target == modal) {
            const modal = document.getElementById('modal');
            modal.style.display = 'none';
        };
    };
};