/**
 * fil: js.js
 * formål: vis flere produktkort med samme kode
 */

// funktion, der tegner kortene
function prodKort(titel,billede,beskrivelse){
    let kort = `
        <article class="prodCard">
            <!-- billedet placeres i figure -->
            <figure class="prodImg">
                <img src="${billede}" alt="">
            </figure>

            <!-- overskrift -->
            <h3> ${titel} </h3>
            <p>
                ${beskrivelse}
            </p>
            <button> Læg i kurv </button>
        </article>
    `;
    return kort;
}

// test
console.log(prodKort('Hovedtelefon','billeder/headphones.jpeg','Diana er lykkelig, for hun har lige købt vores nyeste headphones.'))

// for et produkt er det her måske lidt bøvlet
produkter.innerHTML += prodKort(
    'Hovedtelefon',
    'billeder/prodimg.jpeg',
    'Diana har lige købt vores nyeste headphones.');

// men funktionen kan genbruges med andre produkter
produkter.innerHTML += prodKort(
    'Klar til HCA Maraton?',
    'billeder/sko.jpeg',
    'Så er de nye løbesko ankommet. Er du også klar til HCA Maraton?');

function prodKort(titel){
    let kort = `
        <article class="prodCard">
            <!-- overskrift -->
            <h3> ${titel} </h3>
            <!-- etc. -->
        </article>
    `;
    return kort;
}