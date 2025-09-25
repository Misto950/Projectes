// Aquest codi és opcional i no entra a examen.
// És una solució avançada en que el valor del sortei del dau es passa com a atribut del dau
// I es crea una funció que fa "sortegar" el dau 10 vegades i canviar la imatge en intervals de 100ms


//assogno a variables esl elements del DOM que utilitzaré
const text = document.querySelector("h1");
const dau1 = document.getElementsByClassName('img1')[0];
const dau2 = document.getElementsByClassName('img2')[0];



function rodar (dau) {
    let girs = 10;
    let intervals = 100;
    text.textContent = "Dau girant..."
    let intervalRodar = setInterval(() => {

        let randomNum = Math.floor(Math.random() * 6) + 1;
        let nomDau = `../images/dau${randomNum}.png`;
        dau.setAttribute("src",nomDau);
        dau.setAttribute("valor",randomNum);
        girs--;
    
        if (girs === 0) {
            clearInterval(intervalRodar);
            compara ();
        }
       
    }, intervals);

}


function compara () {

    first = dau1.getAttribute('valor');
    second = dau2.getAttribute('valor');

    if (first > second) {
        text.textContent="🚩 Guanya l' 1!";
    }
    else if (first < second) {
        text.textContent="Guanya el 2! 🚩";
    }
    else {
        text.textContent="Empat... 🚩🚩";
    } 
}

rodar(dau1);
rodar(dau2);


