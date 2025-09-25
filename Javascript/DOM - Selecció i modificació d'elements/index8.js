// F. THIS dins del context de les callback functions

// En una funció callback definida amb una funció normal, this apunta a l'element del DOM al qual s'ha afegit l'escoltador d'esdeveniments.
// És una referència directa a l'element que ha disparat l'esdeveniment (o més exactament, a l'element al qual s'ha associat el listener).

// 1. Afegirem un addEventListener a cadascun dels dos botons

document.querySelector(".boto").addEventListener("click", function(event){
    console.log (this);
    console.log("has clickat el botó " + this.innerHTML);
})

document.querySelector(".boto2").addEventListener("click", function(){
    console.log (this);
    console.log ("has clickat el botó " + this.innerHTML);
})

// Fixa't com THIS retorna el botó que ha desencadenat l'esdeveniment i this.innerHTML el contiongut d'aquest element.


// IMPORTANT: A les funcions fletxa (ARROW) This no es comporta tal i com hem descrit.

// G. EVENTS dins del context de les callback functions

// ELS EVENTS FAN REFERÊNCIA A l'ESDEVENIMENT QUE HA OCASIONAT LA CRIDA A LA CALLBACK FUNCTION

// L'objecte event és un paràmetre que conté informació detallada sobre l'esdeveniment que s'ha produït. Això inclou propietats com ara:

// event.type: el tipus d'esdeveniment (per exemple, "click").
// event.target: l'element que va originar l'esdeveniment.
// event.currentTarget: l'element al qual s'ha afegit l'escoltador (que normalment coincideix amb this en funcions normals).
// Altres propietats específiques segons el tipus d'esdeveniment (com coordenades del ratolí, etc.).
