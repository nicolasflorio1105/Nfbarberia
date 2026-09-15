/**
 * reveal.js
 * ---------------------------------------------------------
 * Hace que cada sección aparezca con una entrada suave (opacidad +
 * un pequeño desplazamiento) la primera vez que entra en pantalla
 * al hacer scroll. Se dispara UNA sola vez por sección — no es un
 * efecto en loop ni continuo, así no distrae ni resulta pesado.
 *
 * Si la persona desactivó las animaciones en su sistema operativo
 * (prefers-reduced-motion), esto no hace nada: las secciones ya
 * quedan visibles de entrada por una regla en base.css.
 */

export function initScrollReveal(){
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) return;

  const targets = document.querySelectorAll('.reveal');
  if (!targets.length) return;

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  targets.forEach(function (el) { observer.observe(el); });
}
