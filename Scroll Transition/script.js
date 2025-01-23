let cards = document.querySelectorAll(".card");

function rotatecard() {
    let angle = 0;
    cards.forEach((card, index) => {
        if (card.classList.contains("away")) {
            card.style.transform = `translateY(-50vh) rotate(-48deg)`;  
            card.style.opacity = "0";  
        } else {
            card.style.transform = `rotate(${angle}deg)`;
            angle -= 10; 
            card.style.zIndex = cards.length - index;
            card.style.opacity = "1";  
        }
    });
}

let stackArea = document.querySelector(".stack-area");

window.addEventListener("scroll", () => {
    let distance = window.innerHeight / 2;
    let top = stackArea.getBoundingClientRect().top;
    let index = Math.floor(-1 * (top / distance + 1));

    for (let i = 0; i < cards.length; i++) {
        if (i <= index) {
            cards[i].classList.add("away");
        } else {
            cards[i].classList.remove("away");
        }
    }
    rotatecard();
});
