document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('click', () => {
    const innerCard = card.querySelector('.card-inner');
    innerCard.classList.toggle('flipped');
  });
});
