// Переключение "Почему CROCOS"
const crocosHeader = document.getElementById('crocosHeader');
const crocosText = document.getElementById('crocosText');

crocosHeader.addEventListener('click', () => {
  crocosText.classList.toggle('expanded');
});
