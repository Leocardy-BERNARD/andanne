console.log('Site prêt');
const cards = document.querySelectorAll('.service-card');
let current = 0;
function rotateCards() {

    cards.forEach(card => {
        card.classList.remove('active');
    });
    cards[current].classList.add('active');
    current++;
    if(current >= cards.length){
        current = 0;
    }
}
if(cards.length > 0){
    rotateCards();
    setInterval(rotateCards,3000);
}

const menuBtn = document.querySelector(".menu-toggle");
const sideMenu = document.querySelector(".side-menu");

if(menuBtn && sideMenu){
    menuBtn.addEventListener("click", () => {
        console.log("clic détecté");
        sideMenu.classList.toggle("active");
    });
}
