// C. MODIFICANT ESTILS

// C1. AMB LA PROPIETAT STYLE EN LÍNIA

// Un cop he seleccionat els ElementInternals, puc modificar els seus estils.

// Per modificar els estils directament, podem utilitzar la propietat .style dels elements:

// document.getElementById("myElement").style.color = "red";
// document.getElementById("myElement").style.fontSize = "20px";

// Regles importants:

// El nom de la propietat CSS en JAVASCRIPT serà en notació camelCase: Per exemple, background-color es converteix en backgroundColor.
// Els valors de les propietats els posarem com a strings: Cal posar el valor entre cometes (" " o ' ').

// WEB AMB LES PROPIETATS D'ESTIL D'OBJECTES

// https://www.w3schools.com/jsref/dom_obj_style.asp

// ? Selecciona l'elemnt que pertantany a l aclasse "boto" i posa-li el color de fons "yellow"

// document.querySelector(".boto").style.backgroundColor="yellow";



// C2. MODIFICANT CLASSES: CLASSLIST

// És molt millor pràctica per a modificar estils amb Javascript fer servir classList.
// classList permet afegir, eliminar i activar classes en un element HTML. I els estils, aleshores, es defineixen 
// al document CSS vinculats a aquella classe. D'aquesta forma: manipulem els estils allà on toca (arxiu CSS) i no a l'arxiu JS.

// classList.add("")
// Afegeix una classe a l’element. Si la classe ja hi és, no la duplica.

// classList.remove("")
// Elimina una classe de l’element. Si la classe no existeix, no passa res.

// classList.toggle("")
// - Si la classe no existeix, l’afegeix.
// - Si la classe existeix, l’elimina.
// - Opcionalment, pots forçar l’afegit (true) o l’eliminació (false).

// ? Crea al full d'estiuls .CSS una classe que es digui "invisible" i que contingui aquesta propietat: visibility:hidden;
// ? Afegeix a l'element botó lal classe "invisible"
// ? Activa i desactiva la classe amb e classList.toggle



document.querySelector("button").classList.add("invisible");
document.querySelector("button").classList.toggle("invisible");
document.querySelector("button").classList.toggle("invisible");

document.querySelector("h1").classList.toggle("gran");
// document.querySelector("h1").classList.toggle("gran");



