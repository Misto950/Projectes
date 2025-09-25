// Exercici 11
function zodiacXines(any) {
    const zodiacAnimals = [
      "Mico 🐒",    // 0
      "Gall 🐔",    // 1
      "Gos 🐶",     // 2
      "Porc 🐷",    // 3
      "Rata 🐀",    // 4
      "Bou 🐂",     // 5
      "Tigre 🐯",   // 6
      "Conill 🐇",  // 7
      "Drac 🐉",    // 8
      "Serp 🐍",    // 9
      "Cavall 🐎",  // 10
      "Cabra 🐐"    // 11
    ];
    
    let index = any % 12;
    return zodiacAnimals[index];
}

let anyInput = prompt("Introdueix un any per saber el seu signe del zodíac xinès:");
let any = parseInt(anyInput, 10);
 
let signe = zodiacXines(any);
  
let missatge = "L'any " + any + " correspon al signe del zodíac xinès: " + signe;
  

alert(missatge);
console.log(missatge);
  