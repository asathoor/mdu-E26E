/**
 * fil: jitterAnimation.js
 * formål: eksperiment - kan Js styre en Jitter-json?
 */

// er vi på?
console.log("Der er kontakt til jitterAnimation.js");

/**
 * Animation af en Lottie (json)
 * Denne konstant indeholder instrukserne til lottie-json-filen.
 * container: peger på den container-tag, som indeholder lottie
 * renderer: definerer indholdet som svg
 * loop: at animationen skal køre i loop
 * autoplay: at den kører automatisk
 * path: er stien hen til din jitter-fil
 */
const animation = lottie.loadAnimation({
  container: document.getElementById('jitter-container'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: '../billeder/jitterframe.json' // Stien til din jitter-json fil
});

// sæt størrelsen på din lottie
const container = document.getElementById('jitter-container');

container.style.width = '250px'; // kunne også sættes i CSS-filen
container.style.height = '250px';


/**
 * Kontrolpanel
 *    Her kommer nogen knaapper, hvor brugen kan starte, pause og stoppe jitter'ens animation.
 */

  document.getElementById('play-btn').addEventListener('click', () => {
    animation.play(); // play
  });

  document.getElementById('pause-btn').addEventListener('click', () => {
    animation.pause(); // pause
  });

  document.getElementById('stop-btn').addEventListener('click', () => {
    animation.stop(); // stop
  });

  /**
   * Eventlistener
   * Denne funktion fyres af når brugeren klikker på container.
   */
  container.addEventListener("click", 
      function(){ 
        container.classList.toggle("svoem");
        info.innerHTML = "Nu skal du bare høre ...";
      }
    );