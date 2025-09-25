var numInents = 1

function endevinaNumero() {
    let numero = Math.floor(Math.random * 100) + 1;
    while(intent  numero){
        let intent = prompt("Quin es el numero?");
        if (intent > 100 || intent < 1) {
            alert("Número fora de rang, torna a emprar-l'ho");
        }
        else {
            if (intent == numero) {
                alert("Correcte! Has endevinat el numero en");
            } 
            else if (intent > nuemro){
                alert("El número secret és més gran!");
            }
            else {
                alert("El número secret és més petit!")
            }
        numIntents = numIntents + 1
        }
    }
}
endevinaNumero()