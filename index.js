const cards = document.querySelectorAll('.individual-card');
function flipCard(){
    this.classList.toggle('flip');
}
cards.forEach(card=>card.addEventListener('click',flipCard));