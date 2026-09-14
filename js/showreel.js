/**
 * showreel.js
 * ---------------------------------------------------------
 * Controla el video principal (showreel):
 *  - Si la persona desactivó las animaciones en su sistema
 *    (prefers-reduced-motion), el video NO se reproduce solo;
 *    queda pausado en el poster hasta que lo toquen.
 *  - Botón de sonido: el video arranca mudo (así lo permiten
 *    todos los navegadores) y esta función deja activar/
 *    desactivar el audio con un toque.
 */

export function initShowreel(){
  const frame = document.querySelector('.showreel__frame');
  if (!frame) return;

  const video = frame.querySelector('video');
  const soundBtn = frame.querySelector('.showreel__sound');
  if (!video) return;

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) {
    video.removeAttribute('autoplay');
    video.pause();
  }

  if (soundBtn) {
    soundBtn.addEventListener('click', function () {
      video.muted = !video.muted;
      soundBtn.setAttribute('aria-label', video.muted ? 'Activar sonido' : 'Silenciar');
      soundBtn.textContent = video.muted ? '🔇' : '🔊';
    });
  }
}
