/**
 * reviews.js
 * ---------------------------------------------------------
 * Carrusel simple y automático para la sección "Reseñas".
 * Para agregar una reseña nueva NO hace falta tocar este
 * archivo: alcanza con agregar otro <div class="review-slide">
 * en el HTML (ver sección "Reseñas" en index.html).
 */

export function initReviewCarousel(){
  const carousel = document.getElementById('reviewCarousel');
  if (!carousel) return;

  const track = carousel.querySelector('.review-track');
  const slides = carousel.querySelectorAll('.review-slide');
  const dotsWrap = document.getElementById('reviewDots');
  if (!track || slides.length < 2) return;

  let current = 0;
  let timer;

  slides.forEach(function (_, i) {
    const dot = document.createElement('div');
    dot.className = 'review-dot' + (i === 0 ? ' active' : '');
    dot.setAttribute('role', 'button');
    dot.setAttribute('tabindex', '0');
    dot.setAttribute('aria-label', 'Ver reseña ' + (i + 1));
    dot.addEventListener('click', function () { goTo(i); resetTimer(); });
    dot.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); goTo(i); resetTimer(); }
    });
    dotsWrap.appendChild(dot);
  });
  const dots = dotsWrap.querySelectorAll('.review-dot');

  function goTo(i){
    current = i;
    track.style.transform = 'translateX(-' + (i * 100) + '%)';
    dots.forEach(function (d, j) { d.classList.toggle('active', j === i); });
  }
  function next(){ goTo((current + 1) % slides.length); }
  function resetTimer(){
    clearInterval(timer);
    // Se detiene solo si la persona prefiere menos movimiento en pantalla
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    timer = setInterval(next, 5000);
  }
  resetTimer();
}
