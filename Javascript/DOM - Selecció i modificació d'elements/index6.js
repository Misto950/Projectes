// E. MANIPULANT ATRIBUTS

// .attributes llista els atributs d'un element.

// ? llista els agtributs que té el tercer element <a> que estan dins de l'element pare que té el id "links"

// console.log(document.querySelectorAll("#links a")[2].attributes);


// .getAttribute extreu l'atribut indicat de l'element seleccionat.
// Se li ha de passar com a paràmetre el nom de l'atribut del que vull extreure el seu valor

// ? extreu l'atribut href que té el tercer element <a> que estan dins de l'element pare que té el id "links"


// console.log(document.querySelectorAll("#links a")[2].getAttribute ("href"));


// .setAttribute insereix el contingut de l'atribut indicat d'un element seleccionat.
// Necessita dos paràmetres:
// a) el de l'atribut que vull modificar
// b) el contingut de l'atribut que vull modificar.

// ? canvia el valor de l'atribut href que té el tercer element <a> que estan dins de l'element pare que té el id "links" per https://bing.com"

document.querySelectorAll("#links a")[2].setAttribute ("href","https://bing.com");
