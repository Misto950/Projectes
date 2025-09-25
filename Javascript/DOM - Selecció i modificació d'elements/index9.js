// G. EVENTS dins del context de les callback functions

// ELS EVENTS FAN REFERÊNCIA A l'ESDEVENIMENT QUE HA OCASIONAT LA CRIDA A LA CALLBACK FUNCTION

// L'objecte event és un paràmetre que conté informació detallada sobre l'esdeveniment que s'ha produït. Això inclou propietats com ara:

// event.type: el tipus d'esdeveniment (per exemple, "click").
// event.target: l'element que va originar l'esdeveniment.
// event.currentTarget: l'element al qual s'ha afegit l'escoltador (que normalment coincideix amb this en funcions normals).
// Altres propietats específiques segons el tipus d'esdeveniment (com coordenades del ratolí, etc.).

document.querySelector(".boto").addEventListener("click", function(event){
    console.log (event);
    console.log(event.type);
    console.log(event.target);
    console.log(event.target.innerHTML);
})

document.querySelector(".boto2").addEventListener("click", function(event){
    console.log (event);
    console.log(event.type);
    console.log(event.target);
    console.log(event.target.innerHTML);
})

// Fixa't amb la diferència entre EVENT i el THIS de l'apartat anterior quan apretes el botó.