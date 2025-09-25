// Exercici 2
let nom2 = prompt("Introdueix el teu nom:");
nom2 = nom2.trim();
let nomNormalitzat2 = nom2.charAt(0).toUpperCase() + nom2.slice(1).toLowerCase();
console.log("El nom normalitzat és: " + nomNormalitzat2);
console.log("El nombre de lletres és: " + nom2.length);
