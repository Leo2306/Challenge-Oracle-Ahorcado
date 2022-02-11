var botonIniciar = document.querySelector("#iniciar-juego");

var botonReinicio = document.createElement("button");

botonIniciar.addEventListener("click", comenzarJuego);
    
botonReinicio.addEventListener("click",comenzarJuego);

function comenzarJuego(event) {

    event.preventDefault();

    botonReinicio.classList.add("btn-off");

    letraCorrecta = [];
    letraIncorrecta = [];
    letrasIngresadas = [];
    vidas = "9";
    posicionTextoCorrecto = 100;
    posicionTextoIncorrecto = 575;
    contadorLetrasI = 0;
    posicionCorrecta = 100;
    contadorLetrasC = 0;
    y = 655;
    
    palabraSecreta = escogerPalabra(lista);

    dibujarTablero();

    dibujarLineas(palabraSecreta);    

    dibujarBase();

    scroll("#canvasito");

    document.addEventListener("keydown", presionarTecla);

    
    pincel.fillStyle = "white";

    pincel.beginPath();
    pincel.font = "48px arial"
    pincel.fillText(vidas,1060,125);
    

}

function presionarTecla(event) {

    event.preventDefault();

    var letraTeclado = event.key;

    if(letraTeclado == "Escape") {

        pincel.fillText("Has finalizado el juego", 600, 400);
        setTimeout(function(){canvas.classList.add("canvas")},2500);
        setTimeout(function(){scroll("nav")},2000);
    }

        if(verificarLetra(letraTeclado)) {

            if(verificarLetraCorrecta(palabraSecreta,letraTeclado)) {

                dibujarLetrasCorrectas(palabraSecreta,letraTeclado);
                verificarGanador(palabraSecreta,letraTeclado);

            } else if (!(letraIncorrecta.includes(letraTeclado))) {

                    letraIncorrecta.push(letraTeclado) 
                    errores += 1;
                    vidas = vidas.replace(vidas,String(parseInt(vidas) - 1));
                    dibujarLetraIncorrecta(letraTeclado);
                    dibujarAhorcado(errores);
                    pincel.fillStyle = "#23231D";
                    pincel.beginPath();
                    pincel.fillRect(1050,80,50,50);
                    pincel.font = "normal small-caps bold 48px arial";
                    pincel.fillStyle = "red";
                    pincel.fillText(vidas,1060,125);
                    pincel.closePath();

            } else {

                console.log("ya ingresaste esa letra");

            }
        } else {
            setTimeout(function(){
                pincel.fillText("Debes ingresar una letra mayúscula",300,635)
            },3000);
        }
}


    
