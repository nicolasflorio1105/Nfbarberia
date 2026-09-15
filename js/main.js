/**
 * main.js
 * Punto de entrada unico. Importa cada modulo desde /js.
 */

import { initAnalyticsTracking } from './analytics.js';
import { initReviewCarousel } from './reviews.js';
import { initScrollReveal } from './reveal.js';

document.addEventListener('DOMContentLoaded', function () {
  initAnalyticsTracking();
  initReviewCarousel();
  initScrollReveal();
});
