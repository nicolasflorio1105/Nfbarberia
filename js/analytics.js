/**
 * analytics.js
 * ---------------------------------------------------------
 * Centraliza el tracking de conversiones. Antes esto estaba
 * mezclado suelto al final del HTML; ahora vive en un solo
 * lugar así, si mañana se agrega otro botón de reserva o
 * de WhatsApp en cualquier sección, con solo agregarle la
 * clase correspondiente (ver abajo) ya queda trackeado.
 *
 * Clases que este módulo escucha:
 *   .js-track-reservar  -> click en cualquier link de reserva (Fresha)
 *   .js-track-whatsapp  -> click en cualquier link de WhatsApp
 *
 * Cada click dispara DOS cosas:
 *   1) un evento al dataLayer de Google Tag Manager
 *      (para que GTM arme la conversión en GA4)
 *   2) un evento estándar del Píxel de Meta
 *      (para que las campañas de Instagram/Facebook Ads
 *      optimicen contra la acción correcta)
 */

export function initAnalyticsTracking(){
  window.dataLayer = window.dataLayer || [];

  document.querySelectorAll('.js-track-reservar').forEach(function (el) {
    el.addEventListener('click', function () {
      // GTM / GA4
      window.dataLayer.push({ event: 'clic_reserva', origen: el.dataset.origen || 'desconocido' });
      // Meta Pixel: "Schedule" es el evento estándar para reservas/turnos
      if (typeof fbq === 'function') {
        fbq('track', 'Schedule', { content_name: 'Reservar turno - Fresha' });
      }
    });
  });

  document.querySelectorAll('.js-track-whatsapp').forEach(function (el) {
    el.addEventListener('click', function () {
      window.dataLayer.push({ event: 'clic_whatsapp', origen: el.dataset.origen || 'desconocido' });
      // Meta Pixel: "Contact" es el evento estándar para consultas/contacto directo
      if (typeof fbq === 'function') {
        fbq('track', 'Contact', { content_name: 'Contacto - WhatsApp' });
      }
    });
  });
}
