let cards = document.querySelectorAll(".card");
function rotatecard () {
    let angle  = 0;
    cards.forEach((card, index) => {
        card.style.transform = `rotate(${angle}deg)`;
        angle = angle - 10;
        card.style.zIndex = cards.length - index;
    })
}

rotatecard();