/**
 * fil: jitterAnimation.js
 * formål: eksperiment - kan Js styre en Jitter-json?
 */

// er vi på?
console.log("Der er kontakt til jitterAnimation.js");

// dette script loader filen
const animation = lottie.loadAnimation({
  container: document.getElementById('jitter-container'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: '../billeder/jitterframe.json' // Stien til din jitter-json fil
});

// sæt størrelsen på containeren
const container = document.getElementById('jitter-container');
container.style.width = '250px';
container.style.height = '250px';

// Knapper
  document.getElementById('play-btn').addEventListener('click', () => {
    animation.play();
  });

  document.getElementById('pause-btn').addEventListener('click', () => {
    animation.pause();
  });

  document.getElementById('stop-btn').addEventListener('click', () => {
    animation.stop();
  });