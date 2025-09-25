// Exercici 9
let total = 0;


function agregarCarret(preu) {
  total += preu;
  return total;
}


function calcularImpost(totalAcumulat) {
  let totalAmbImpost = totalAcumulat + (totalAcumulat * 0.21);
  return totalAmbImpost;
}


agregarCarret(200);
agregarCarret(300);
agregarCarret(400);


console.log("Total acumulat després d'afegir els productes -> " + total);

let totalAPagar = calcularImpost(total);

console.log("El total a pagar és de " + totalAPagar + ".");
