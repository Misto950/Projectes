// Exercici 8
function sonIgualsEstricte(valor1, valor2) {
    return valor1 === valor2;
}
  
// Proves de la funció
console.log(sonIgualsEstricte(5, 5));          // true
console.log(sonIgualsEstricte(5, '5'));        // false
console.log(sonIgualsEstricte(true, 1));       // false
console.log(sonIgualsEstricte(null, undefined)); // false
console.log(sonIgualsEstricte('Hola', 'Hola'));  // true
