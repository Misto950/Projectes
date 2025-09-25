let boto = document.getElementById("calculBtn");
const resultat = document.getElementById("resultat");
const image = document.getElementById("imatgePlaneta");

boto.addEventListener("click", function () {
    let pes = document.getElementById("entradaPes").value;
    if (pes < 0) {
        alert("El pes te que ser positiu")
    }
    else {
        let planeta = document.getElementsByClassName().value;
    
        if (planeta == "venus") {
            pesPlaneta = pes * 0,91;
            resultat.innerHTML = "El pes d'aquest element a" + planeta + "és:" + pesplaneta + "kg";
            image.src ="./images" + planeta + ".png";
        }
        else if (planeta == "terra") {
            pesPlaneta = pes * 1;
            resultat.innerHTML = "El pes d'aquest element a" + planeta + "és:" + pesplaneta + "kg";
            image.src ="./images" + planeta + ".png";
        }
        else if (planeta == "mart") {
            pesPlaneta = pes * 0,38;
            resultat.innerHTML = "El pes d'aquest element a" + planeta + "és:" + pesplaneta + "kg";
            image.src ="./images" + planeta + ".png";
        }
        else if (planeta == "jupiter") {
            pesPlaneta = pes * 2,34;
            resultat.innerHTML = "El pes d'aquest element a" + planeta + "és:" + pesplaneta + "kg";
            image.src ="./images" + planeta + ".png";
        }
    }
    

    
})