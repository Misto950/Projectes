// D. MANIPULACIÓ DE TEXT

// Quan volem modificar o obtenir el contingut d’un element HTML amb JavaScript,
// tenim dues opcions principals: innerHTML i textContent.
// A continuació, veurem les diferències clau entre ells i quan utilitzar cadascun.

// D1. textContent

// TextContent permet extreure o NOMÉS el text d'un element o inserir un literal nomñes com a text :

// ? Extreu el text que conté el primer element <a> fill de l'element <div>

// console.log(document.querySelector("div a").textContent);

//   ? Modifica el text que conté l'element h1 per "<em>Nou text!</em>"

document.querySelector("h1").textContent = "<em>Nou text!</em>";

// D2. innerHTML
// innerHTML és una propietat que permet llegir o modificar el contingut HTML d’un element.
// Amb innerHTML, és possible afegir o recuperar TANT text COM etiquetes HTML dins d'un element del DOM.

// ? Extreu el text que conté l'element h1 amb innerHTML

// console.log(document.querySelector("h1").innerHTML);

//   ? Modifica el text que conté l'element h1 amb innerHTML per "<em>Nou text!</em>"

// document.querySelector("h1").innerHTML = "<em>Nou text!</em>";

// textContent només insereix i extreu Text mentes que innerHTML extreu i insereix codi HTML