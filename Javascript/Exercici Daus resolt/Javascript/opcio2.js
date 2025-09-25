//genero un número al.leatori entre 1 i 6
let randomNum1 = Math.floor(Math.random()*6) + 1;
let randomNum2 = Math.floor(Math.random()*6) + 1;
let text = document.querySelector("h1");

//creo els noms dels arxius que haig de posar segons els numeros al.leatoris que han sortit
let nom1 = `../images/dau${randomNum1}.png`;
let nom2 = `../images/dau${randomNum2}.png`;

//selecciono els elements imatge i els canvio els atributs
document.querySelector(".img1").setAttribute("src",nom1);
document.querySelector(".img2").setAttribute("src",nom2);

//creo una funció que mira  qui és el guanyador i canvia el text en funció d'això

function compara (num1, num2) {

    if (randomNum1 > randomNum2) {
        text.innerText="🚩 Guanya l' 1!";
    }
    else if (randomNum1 < randomNum2) {
        text.innerText="Guanya el 2! 🚩";
    }
    else {
        text.innerText="Empat... 🚩🚩";
    } 
}

compara (randomNum1, randomNum2);
