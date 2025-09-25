// F. addEventListeners i callback functions

// El mètode addEventListener és una part fonamental del DOM de JavaScript.
// Permet adjuntar una funció, coneguda com a controlador d'esdeveniments, a un element,
// de manera que quan es produeix un esdeveniment específic (com un clic, o prémer una tecla o un mouseover), s'executa la funció.

// Sintaxi:

// element.addEventListener(tipusEsdeveniment, funcioCallback);
// tipusEsdeveniment: Una cadena que representa l'esdeveniment a escoltar (per exemple, "click", "mouseover").
// funcioCallback: La funció que s'executa quan es produeix l'esdeveniment.

// Un cop s'ha afegit un eventListener, es manté fins que s'el.limina.

// Eliminació d'esdeveniments:
// Es pot eliminar un esdeveniment utilitzant el mètode removeEventListener, 
// però cal proporcionar la mateixa referència de funció que s'ha utilitzat amb addEventListener.

// Llista d'events possibles per un eventListener
// https://developer.mozilla.org/es/docs/Web/Events

// Anem a crear un event Listener al nostre botó de la pàgina HTML
// 1. Primer creem la funció que volem que s'executi quan passi l'event:

// function test () {
//     alert ("s'ha produït l'event clickar el botó");
// }

// 2. Ara seleccionem el botó i l'assignem a una variable:

const botoSel = document.querySelector(".boto");

// 3. I a aquesta variable (que conté el botó) li assignem el mètode addEventListener amb dos paràmetres:
//                  - l'event que volem que escolti (un click)
//                  - la funció que s'ha d'executar quan passi aquest event.

// botoSel.addEventListener("click", test);
// Ja podem comprovar el resultat ananat a la pàgina web i prement el botó que hi ha

// 4. La funció l apuc convertir en anònima (sense nom) i posar-la al mateix eventLIstener:

botoSel.addEventListener("click", function() {
    alert ("click2!");
});

// CALLBACK FUNCTIONS
// Les funcions que s'invoquen des d'un addEventListener s'anomenen funcions callback.
// En el context d'addEventListener, el callback és la funció que li passes com a argument i que s'executarà quan es produeixi l'esdeveniment especificat.
// Aquesta funció pot rebre un objecte d'esdeveniment com a paràmetre, el qual conté informació rellevant sobre l'esdeveniment (com ara l'objecte que va disparar l'esdeveniment).

// Per exemple, quan fas servir addEventListener per escoltar un clic, el callback és la funció que s'executarà cada vegada que l'usuari faci clic sobre l'element associat.
// Així, el callback defineix el comportament que vols que s'activi en resposta a l'esdeveniment.






