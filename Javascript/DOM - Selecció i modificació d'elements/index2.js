// A. SELECTORS GET

// A.1 GetElementsByTagName("")

// Selecciona tots els elements d'un tipus específic (una determinada etiqueta HTML).
// Retorna un HTMLCollection, que és semblant a un array.
// No admet selectores CSS avançats (id, class...), només noms de tags (div, p, span, etc.).

// ? Selecciona tots els elements amb etiqueta "li"

// console.log(document.getElementsByTagName("li"));


// Com que retorna una matriu, per seleccionar l'element al que aplicar-li una propietat, hem de seleccionar l'element de la matriu
// console.log(document.getElementsByTagName("li")[2]);


// ? Selecciona el tercer element de la llista (lips "li" i canvia-li el color a blau
document.getElementsByTagName("li")[2].style.color = "blue";

// Per saber quants elements tinc a la matriu, puc fer servir la propietat length

// ? Extreu quante elements tens a la llista que conté eles elements amb etiqueta "li"
console.log(document.getElementsByTagName("li").length);

// A.2 GetElementsByClassName("")

// Selecciona tots els elements que tenen la classe especificada.
// Retorna un HTMLCollection, que és semblant a un array. Cal seleccionar els elements com un array (encara que només n'hi hagi un)

// ? Selecciona le'elemnt que té la classe "boto" i canvia-li el color a vermell

document.getElementsByClassName("boto")[0].style.color = "red";

// A.3 GetElementById("")

// serveix per seleccionar un sol element del DOM basant-se en el seu id únic.
// Retorna un sol element, perquè els IDs han de ser únics dins del document.
// És el mètode més ràpid per seleccionar un element, ja que busca directament per ID.
// No retorna una col·lecció com getElementsByClassName o getElementsByTagName.
// No admet selectores CSS, només IDs.

// ? Selecciona l'element que té el id "llista" i assigna-li el color taronja
document.getElementById("llista").style.color = "orange";


// ? Selecciona l'element que té el id "titol" i canvia-li el text per "Aquí, modificant documents HTML"
// document.getElementById("titol").innerHTML="Aquí, modificant documents HTML";
// document.getElementById("titol").style.color="red";

