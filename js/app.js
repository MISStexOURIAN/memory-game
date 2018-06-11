var parentContainer = document.getElementById('game-container');
var cards = document.querySelectorAll('.card');

for (var i = parentContainer.children.length; i >= 0; i--) {
    parentContainer.appendChild(parentContainer.children[Math.random() * i | 0]);
}
 
for (var j = 0; j < cards.length; j++) {
    cards[j].addEventListener('click', function () {
        icon = this.firstChild;
        icon.classList.toggle('hide');
    });
};
 