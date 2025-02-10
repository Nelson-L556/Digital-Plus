// Seleccionar elementos
const cards = document.querySelectorAll('.testimonios__card');
const btnNext = document.querySelector('.testimonio__anterior');
const btnPrev = document.querySelector('.testimonio__siguiente');

// Variable para rastrear la tarjeta actual
let currentIndex = 0;


//* EVENTOS
// Eventos de clic para los botones
btnNext.addEventListener('click', nextCard);
btnPrev.addEventListener('click', prevCard);

// Mostrar la primera tarjeta al cargar
showCard(currentIndex);


// Función para mostrar la tarjeta activa
function showCard(index) {
  // Ocultar todas las tarjetas
  cards.forEach((card) => {
    card.style.visibility = 'hidden';
    card.style.opacity = '0';
    card.style.transition = 'opacity 0.6s ease';
  });

  // Mostrar la tarjeta activa
  cards[index].style.visibility = 'visible';
  cards[index].style.opacity = '1';
}

// Función para ir a la siguiente tarjeta
function nextCard() {
  currentIndex = (currentIndex + 1) % cards.length; // Moverse al siguiente índice, en bucle
  showCard(currentIndex);
}

// Función para ir a la tarjeta anterior
function prevCard() {
  currentIndex = (currentIndex - 1 + cards.length) % cards.length; // Moverse al índice anterior, en bucle
  showCard(currentIndex);
}
