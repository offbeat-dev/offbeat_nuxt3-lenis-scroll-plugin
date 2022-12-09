import Lenis from '@studio-freight/lenis';

const lenis = new Lenis({
  duration: 5,
  smooth: true,
  direction: 'vertical',
});

lenis.on('scroll', ({ scroll, limit }) => {
  console.table({ scroll, limit });
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.provide('lenis', lenis);
});
