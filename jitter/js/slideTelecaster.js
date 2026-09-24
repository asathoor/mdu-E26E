  /**
   * fil: slideTelecaster.js
   * formål: hvordan lyd kan lægges ind og styres med script
   */
  
  const lyd = document.getElementById("baggrundslyd");
  const knap = document.getElementById("startLyd");

  knap.addEventListener("click", () => {
    //lyd.play();
    //knap.style.display = "none";
    if (lyd.paused) {
      lyd.play();
      knap.textContent = "Silentio";
    } else {
      lyd.pause();
      knap.textContent = "Slide-larm";
    }
  });
