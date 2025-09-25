// B. querySelector

// B.1 querySelector ("")

// El mètode querySelector permet seleccionar el primer element que coincideixi amb un selector CSS.
// Accepta qualsevol selector CSS (#id, .classe, tag, atributs, combinacions, etc.).
// Només retorna el primer element que compleixi el selector.

// ? Fent servir querySelector, selecciona l'alement h1 i assigna'l a una variable const que es digui títol.
// ? Canvia-li el contingut de l'element h1 per "Bon dia" i canvia-li el color a "grey"


// console.log(document.querySelector ("h1"));
const titol = document.querySelector ("h1");
titol.innerHTML = "Bon dia";
titol.style.color = "grey";


// ? Fent servir querySelector, selecciona l'alement que té la classe "boto"  i assigna'l a una variable const que es digui boto.
// ? Canvia-li el color del text per color verd.

const boto = document.querySelector (".boto");
boto.style.color = "green";

// Puc utilitzar qualsevol selector amb QuerySelector
// Per seleccionar l'element <a> que està dins d'aquesta llista

/* <ul id="llista">
<li class="item">
    <a href="https://www.google.com">Google</a>
</li>
<li class="item">Segon</li>
<li class="item">Tercer</li>
</ul> */

// puc fer:
// document.querySelector ("li a").style.color = "green";
// Per seleccionar un element que està jeràrquicament per sota d'un altre, deixem un espai entre el primer element i el segon
// Per seleccionar un element que està jeràrquicament al mateix nivell que un altre , posem un punt (.) entre el primer element i el segon

// ? Selecciona l'elemnt <a> que està dins de la llista li i aplica-li el color de text vermell.
// ? Canvia-li el color del text per color verd.

document.querySelector ("li a").style.color = "red";

// B.2 querySelectorAll ("")

// El mètode querySelectorAll selecciona tots els elements que coincideixen amb un selector CSS i els retorna com un array
// Accepta qualsevol selector CSS (#id, .classe, tag, atributs, combinacions, etc.).
// Permet recorre l'array amb forEach()

// ? Seleccioneu tots els elements de la classe "item" que estan dins d'un element pare que conté el id "llista".

console.log(document.querySelectorAll ("#llista .item"));

// ? D'aquesta llista, selecciona el segon element i pinta'l de color verd.

document.querySelectorAll ("#llista .item")[1].style.color = "green";








