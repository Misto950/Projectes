let numeroBotons = document.querySelectorAll("button").length;
let botons = document.querySelectorAll("button");



function canviarFons(color) {
    const body = document.querySelector("body");
        body.style.backgroundColor = color;
}


function generarColor() {
    canviarFons("#" + Math.floor(Math.random() * 16777215).toString(16))
}

function detectarBoto(boto) {
    if (color == "Color aleatori") {
        generarColor()
    }
    else {
        canviarFons(boto)
    }
}


for (let i=0; i<numeroBotons; i++){
    botons[i].addEventListener("click", function () {detectarBoto(this.innerHTML)}
);
}