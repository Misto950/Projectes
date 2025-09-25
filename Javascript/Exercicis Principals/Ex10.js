// Exercici 10

function calcularConsum(litres, distancia) {
    let consum = (litres / distancia) * 100;
    let consumArrodonit = parseFloat(consum.toFixed(2));
    

    let classificacio;
    if (consum < 5) {
      classificacio = "Molt eficient";
    } else if (consum <= 8) {
      classificacio = "Eficient";
    } else {
      classificacio = "Consum elevat";
    }
    
    return { consum: consumArrodonit, classificacio: classificacio };
}
  
let litresInput = prompt("Introdueix els litres de benzina utilitzats:");
let distanciaInput = prompt("Introdueix la distància recorreguda (km):");
  

let litres = parseFloat(litresInput);
let distancia = parseFloat(distanciaInput);
  

let resultat = calcularConsum(litres, distancia);
  

let missatge = "El cotxe ha consumit " + resultat.consum + " L/100 km - " + resultat.classificacio;
  

alert(missatge);
console.log(missatge);
  