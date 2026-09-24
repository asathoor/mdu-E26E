/** 
 * fil: loop-demo.js
 * formål: demo af loop
 */

console.log("Loopdemo kører ...") // tjek om det virker

// nu laver vi et loop
for (let i=0;i<100;i++){
    console.log("Jeg må ikke tjekke mobil mens Per underviser " + i);

    // nu skal vi skrive til html'en
    resultat.innerHTML += "<li>" 
    + "Jeg har nu talt til: " 
    + i 
    + "</li>";
}

let husk = [
    "Fløde (Lactro Free)",
    "Kaffe",
    "Hindbærsnitter",
    "Vegansk leverpostej",

    "Dåseleverpostej fra Faaborg",
    "Strenge til guitaren"
]

console.log(husk[0]);

for (let i=0;i<husk.length;i++){
    console.log(husk[i]);
    glemikke.innerHTML += "<li>"
    + husk[i]
    + "</li>";
}









