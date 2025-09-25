// Exercici 14
const llibre = {
    titol: "L’ombra del vent",
    autor: "Carlos Ruiz Zafón",
    anyPublicacio: 2006,
    disponible: true,

    mostrarInformacio: function() {
      console.log("Títol: " + this.titol);
      console.log("Autor: " + this.autor);
      console.log("Any de publicació: " + this.anyPublicacio);
      console.log("Disponible: " + (this.disponible ? "Sí" : "No"));

      if (this.categoria) {
        console.log("Categoria: " + this.categoria);
      }
    }
};
  
console.log("Informació inicial:");
llibre.mostrarInformacio();

llibre.anyPublicacio = 2006;

llibre.disponible = false;

llibre.categoria = "Intriga";
  
console.log("\nDesprés de la modificació:");
llibre.mostrarInformacio();
  