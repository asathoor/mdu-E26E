# Jitter og JavaScript

Animation af en Jitter-json fil via JavaScript. Virker det?

----

## Ideer fra Claude Haiku

Denne tutorial er lavet med lidt hjælp fra Claude AI på DuckDuckGo. Claude er ikke så god til dansk, og den blander de skandinaviske sprog sammen ...

### Eksport fra Jitter/Figma

Når du eksporterer din JSON må der ikke være mellemrum til filnavnet. Danske specialtegn bør også undgås. 

Jeg måtte omdøbe fra: `Jitter Frame 1.json` til `jitterframe.json`. Så virkede koden.

Så undgå mellemrum i filnavnet.

### HTML

Indsæt dette script i filens `<head>` afdeling:

~~~~ 
<script src="https://cdnjs.cloudflare.com/ajax/libs/bodymovin/5.10.2/lottie.min.js"></script>
~~~~

Et passende sted i `<body>` skal der være en HTML-container til animationen:

~~~~
<div id="jitter-container"></div>
~~~~



### JavaScript

~~~~
const animation = lottie.loadAnimation({
  container: document.getElementById('jitter-container'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: 'jitterframe.json' // Stien til din jitter-json fil
});
~~~~

### Eksempel: Knapper

Herunder er nogen eksempler på styring af animationen ved hjælp af knapper. Knapperne behøver ikke at være kedelige grå firkanter. Læg grafik ind i stedet for, og læg en eventlistener på grafikken. 

* Prøv også at lave en knap, der skriver information om fisken i en eller anden faktabox, her bruges typisk den semantiske `<aside>`-tag.

----

~~~~
<div id="jitter-container"></div>

<button id="play-btn">Spill</button>
<button id="pause-btn">Pause</button>
<button id="stop-btn">Stopp</button>

<script src="https://cdnjs.cloudflare.com/ajax/libs/bodymovin/5.10.2/lottie.min.js"></script>

<script>
  const animation = lottie.loadAnimation({
    container: document.getElementById('jitter-container'),
    renderer: 'svg',
    loop: true,
    autoplay: false, // Start ikke automatisk
    path: 'jitterframe.json'
  });

  // Knapper

  // play
  document.getElementById('play-btn').addEventListener('click', () => {
    animation.play();
  });

  // pause
  document.getElementById('pause-btn').addEventListener('click', () => {
    animation.pause();
  });

  // stop
  document.getElementById('stop-btn').addEventListener('click', () => {
    animation.stop();
  });
</script>
~~~~

Læg mærke til at knapperne adresserer animationen ved hjælp af dens navn. I dette tilfælde er det:

`animation`

Hvis du har flere animationer, så giv dem forskellige navne. På den måde kan du lave knapper til de forskellige fisk og sætstykker. 