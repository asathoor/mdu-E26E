# Øvelse: Responsiv Menu med JavaScript

Denne øvelse lærer dig at lave en menu, der skjules og vises på små skærme, men altid er synlig på store skærme. Det er en grundlæggende og meget brugt teknik på moderne websites.

Øvelsen er udviklet med lidt hjælp fra Claude AI på DuckDuckGo. Koden virker; men den kan optimeres på flere måder. 

Overvej hvordan denne kode kunne optimeres ud fra det du bl.a. har lært i Landingpage-casen.

---

## Formål

**Du skal lære at:**
- Manipulere HTML-elementer med JavaScript
- Bruge `classList` til at tilføje og fjerne CSS-klasser
- Implementere responsive design med media queries
- Forstå hvordan events (som klik) udløser JavaScript-funktioner

---

## Opgavebeskrivelse

Lav en navigation-bar med:
- Et logo/hjemmeside-navn
- En burgerikon (☰) som kun vises på små skærme
- En navigationsmenu med links
- Et JavaScript-script der toggler menuen åben/lukket

---

## Kodeeksempel

### HTML-struktur

```html
<!DOCTYPE html>
<html lang="da">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Responsiv Menu</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <nav class="navbar">
        <div class="navbar-container">
            <!-- Logo -->
            <div class="logo">Min Hjemmeside</div>

            <!-- Burgerikon -->
            <button class="burger" id="burgerBtn">
                <span></span>
                <span></span>
                <span></span>
            </button>

            <!-- Navigationsmenu -->
            <ul class="nav-menu" id="navMenu">
                <li><a href="#home">Hjem</a></li>
                <li><a href="#om">Om</a></li>
                <li><a href="#tjenester">Tjenester</a></li>
                <li><a href="#kontakt">Kontakt</a></li>
            </ul>
        </div>
    </nav>

    <!-- Eksempel-indhold -->
    <main>
        <h1>Velkommen!</h1>
        <p>Klik på burgerikonen på små skærme for at åbne menuen.</p>
    </main>

    <script src="script.js"></script>
</body>
</html>
```

---

### CSS-styling

```css
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Arial, sans-serif;
    background-color: #f4f4f4;
}

/* ===== NAVBAR ===== */
.navbar {
    background-color: #333;
    padding: 0;
    position: sticky;
    top: 0;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

.navbar-container {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
}

.logo {
    color: white;
    font-size: 24px;
    font-weight: bold;
    padding: 20px 0;
}

/* ===== NAVIGATIONSMENU ===== */
.nav-menu {
    list-style: none;
    display: flex;
    gap: 40px;
}

.nav-menu a {
    color: white;
    text-decoration: none;
    font-size: 16px;
    transition: color 0.3s ease;
}

.nav-menu a:hover {
    color: #4CAF50;
}

/* ===== BURGERIKON ===== */
.burger {
    display: none;
    flex-direction: column;
    background: none;
    border: none;
    cursor: pointer;
    padding: 10px;
}

.burger span {
    width: 25px;
    height: 3px;
    background-color: white;
    margin: 5px 0;
    transition: 0.3s;
    display: block;
}

/* Burgerikonen animerer når menuen er åben */
.burger.active span:nth-child(1) {
    transform: rotate(-45deg) translate(-5px, 6px);
}

.burger.active span:nth-child(2) {
    opacity: 0;
}

.burger.active span:nth-child(3) {
    transform: rotate(45deg) translate(-5px, -6px);
}

/* ===== RESPONSIVE DESIGN ===== */
/* Små skærme (mobil) */
@media (max-width: 768px) {
    .burger {
        display: flex;
    }

    .nav-menu {
        position: absolute;
        top: 60px;
        left: 0;
        width: 100%;
        background-color: #222;
        flex-direction: column;
        gap: 0;
        padding: 20px 0;
        max-height: 0;
        overflow: hidden;
        transition: max-height 0.3s ease;
    }

    .nav-menu.active {
        max-height: 300px;
    }

    .nav-menu li {
        padding: 15px 20px;
        border-bottom: 1px solid #444;
    }

    .nav-menu a {
        font-size: 18px;
    }
}

/* ===== INDHOLD ===== */
main {
    max-width: 1200px;
    margin: 40px auto;
    padding: 0 20px;
}

h1 {
    color: #333;
    margin-bottom: 20px;
}

p {
    color: #666;
    line-height: 1.6;
}
```

---

### JavaScript-script

```javascript
// Hent elementerne fra HTML
const burgerBtn = document.getElementById('burgerBtn');
const navMenu = document.getElementById('navMenu');

// Tilføj en "click"-event-listener til burgerikonen
burgerBtn.addEventListener('click', function() {
    // Toggle betyder: tilføj klassen hvis den ikke findes, 
    // fjern den hvis den findes
    navMenu.classList.toggle('active');
    burgerBtn.classList.toggle('active');
});

// Luk menuen når brugeren klikker på et link
const navLinks = navMenu.querySelectorAll('a');
navLinks.forEach(link => {
    link.addEventListener('click', function() {
        navMenu.classList.remove('active');
        burgerBtn.classList.remove('active');
    });
});
```

---

## Forklaring af JavaScript-koden

### `document.getElementById()`

**Henter HTML-elementer**: Finder elementer ved deres `id`-attribut.

```javascript
const burgerBtn = document.getElementById('burgerBtn');
```

Dette finder knappen med `id="burgerBtn"`.

### `addEventListener()`

**Lytter efter brugeraktioner**: Venter på at noget sker (her: klik).

```javascript
burgerBtn.addEventListener('click', function() {
    // Noget sker her...
});
```

### `classList.toggle()`

**Tilføjer eller fjerner CSS-klasser**: 

```javascript
navMenu.classList.toggle('active');
```

- Hvis klassen `active` findes → **fjern den**
- Hvis klassen `active` ikke findes → **tilføj den**

Dette får CSS'en til at animere menuen åben eller lukket.

---

## Sådan tester du øvelsen

1. **Gem filerne**:
   - `index.html`
   - `style.css`
   - `script.js`

2. **Åbn HTML-filen i browser**

3. **Test på stor skærm**: Menuen er altid synlig

4. **Test på lille skærm** (ændre browservinduets størrelse eller bruge mobilvisning):
   - Burgerikonen vises
   - Klik på ikonen → menuen vises/skjules
   - Burgerikonen animerer

---

## Udfordringer for videre læring

| Udfordring | Sværhedsgrad | Beskrivelse |
|-----------|-------------|-------------|
| Luk menuen automatisk når man klikker udenfor | Let | Brug `addEventListener('click')` på hele dokumentet |
| Tilføj en active-state på nuværende side | Let | Markér hvilket link brugeren er på |
| Animér menuen ind fra siden | Mellem | Brug CSS `transform: translateX()` |
| Tilføj undermenu (dropdown) | Svært | Kræver nestet JavaScript-logik |
| Dark mode toggle | Mellem | Gem brugerens præference i `localStorage` |

---

## Vigtige begreber

**Responsive design**: Siden ser anderledes ud på forskellige skærmstørrelser via `@media` queries.

**CSS-klasser**: JavaScript kan tilføje/fjerne CSS-klasser, som ændrer stillingen.

**Event listeners**: JavaScript venter på brugeraktioner (klik, scroll osv.).

**classList-metoden**: En nem måde at manipulere CSS-klasser fra JavaScript.