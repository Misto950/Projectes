// Exerici 12
function esDeTraspas(any) {
    if ((any % 4 === 0 && any % 100 !== 0) || (any % 400 === 0)) {
      return "Any de traspàs";
    } else {
      return "no any de traspàs";
    }
}

let anyInput = prompt("Introdueix un any per determinar si és de traspàs:");
let any = parseInt(anyInput, 10);
  
let resultat = esDeTraspas(any);
  
alert(resultat);
console.log(resultat);
  