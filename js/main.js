/**
 * main.js
 * ---------------------------------------------------------
 * Punto de entrada único. Cada funcionalidad vive en su
 * propio archivo (módulo) adentro de /js — esto es lo que
 * pediste como "modulado para poder escalar": para agregar
 * una función nueva mañana (por ej. un formulario, un mapa
 * interactivo, etc.) se crea un archivo nuevo en /js y se
 * importa acá abajo, sin tocar el resto.
 *
 * Al ser type="module" en el HTML, el navegador entiende
 * los imports/exports nativamente: no hace falta ningún
 * empaquetador (webpack/vite) ni build step para que esto
 * funcione en GitHub Pages.
 *
 * (gallery.js se sacó del proyecto junto con la sección
 * "Selección de trabajos" — si en algún momento la volvés
 * a sumar, ese módulo había quedado listo en versiones
 * anteriores del proyecto)
 */

import { initAnalyticsTracking } from './analytics.js';
import { initReviewCarousel } from './reviews.js';
import { initShowreel } from './showreel.js';

document.addEventListener('DOMContentLoaded', function () {
  initAnalyticsTracking();
  initReviewCarousel();
  initShowreel();
});
