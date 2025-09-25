// A. QUÈ ÉS EL DOM?

// El DOM (Document Object Model) és una representació estructurada d'un document HTML o XML en forma d'arbre,
// on cada element del document es converteix en un node dins d'aquesta estructura.
// Permet als llenguatges de programació com JavaScript accedir i modificar dinàmicament el contingut, 
// 'estructura i l'estil del document.

// Característiques del DOM:
// a) Representació en arbre: Cada element HTML és un node dins d'un arbre jeràrquic.
// b) Interactivitat: Permet modificar el contingut (innerHTML), atributs (setAttribute), estils (style), entre altres.
// c) Events: Facilita la gestió d'interaccions amb l'usuari mitjançant event listeners (com click, mouseover, keydown, etc.).


// EXEMPLES DE MANIPULACIÓ AMB EL DOM

//DOCUMENT: Seleccionem tot el document
console.log(document);

// A1. firstElementChild és una propietat del DOM que retorna el primer element fill (element node) d'un node pare.

// ? Seleccionem el primer element: HTML
console.log(document.firstElementChild);


// A2. lastElementChild és una propietat del DOM que retorna l'últim element fill d'un node pare,
// ignorant nodes de text, comentaris o espais en blanc.

//? Seleccionem el body

// console.log(document.firstElementChild.lastElementChild);

// console.log(document.body);

// console.log(document.head);


// A.3 childNodes retorna una NodeList de tots els nodes fills d'un element.
// Això inclou elements HTML, nodes de text (com espais en blanc i salts de línia) i comentaris.

// ?Seleccioneu tots els nodes fills del BODY

// console.log(document.firstElementChild.lastElementChild.childNodes);

// ?Seleccioneu el node fill DIV del BODY

// console.log(document.body.childNodes[3].childNodes[3]);

// ?Seleccioneu el node (link del HTML Generator) del node fill DIV del BODY

// console.log(document.body.childNodes[3].childNodes[1]);


//? Seleccionem l'element h1
// console.log(document.body.firstElementChild);

// ?L'assignem a una variable
// const titol = document.firstElementChild.lastElementChild.firstElementChild;
// console.log(titol);

// Li canviem el contingut
// titol.innerHTML="Javascript aplicat a HTML";

// Li canviem el color
// titol.style.color="green";

// Seleccinem el checkbox i li donem al click
// document.querySelector("input").click();

// ? Seleccionem el darrer element de la ul i li canviem el valor

// document.firstElementChild.lastElementChild.querySelector("ul").lastElementChild.innerHTML = "ASIX";