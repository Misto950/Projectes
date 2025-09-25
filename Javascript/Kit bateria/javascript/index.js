let numeroBotons = document.querySelectorAll("button").length;
let botons = document.querySelectorAll("button");

function emetreSo (tecla) {
    if(tecla == 'w'){
        var audio = new Audio("./sounds/crash.mp3");
        audio.play();
    }
    else if(tecla == 'a'){
        var audio = new Audio("./sounds/kickbass.mp3");
        audio.play();
    }
    else if(tecla == 's'){
        var audio = new Audio("./sounds/snare.mp3");
        audio.play(); 
    }
    else if(tecla == 'd'){
        var audio = new Audio("./sounds/tom1.mp3");
        audio.play();
    }
    else if(tecla == 'j'){
        var audio = new Audio("./sounds/tom2.mp3");
        audio.play();
    }
    else if(tecla == 'k'){
        var audio = new Audio("./sounds/tom3.mp3");
        audio.play();
    }
    else if(tecla == 'l'){
        var audio = new Audio("./sounds/tom4.mp3");
        audio.play();
    }
}
for (let i=0; i<numeroBotons; i++){
    botons[i].addEventListener("click", function () {emetreSo(this.innerHTML)}
);
}



document.addEventListener("keydown", function(event){
    emetreSo(event.key);
})
    

