var botonIniciar = document.querySelector("#iniciar-juego");

var botonReinicio = document.createElement("button");

botonIniciar.addEventListener("click", comenzarJuego);
    
botonReinicio.addEventListener("click",comenzarJuego);

function comenzarJuego(event) {

    event.preventDefault();

    document.removeEventListener("keydown",comenzarJuego);

    letraCorrecta = [];
    letraIncorrecta = [];
    letrasIngresadas = [];
    vidas = "9";
    posicionTextoCorrecto = 100;
    posicionTextoIncorrecto = 575;
    contadorLetrasI = 0;
    posicionCorrecta = 100;
    contadorLetrasC = 0;
    errores = 0;
    y = 630;
    
    palabraSecreta = escogerPalabra(lista);

    dibujarTablero();

    dibujarLineas(palabraSecreta);    

    dibujarBase();

    scroll("#canvasito");

    document.addEventListener("keydown", presionarTecla);

    
    pincel.beginPath();
    pincel.fillStyle = "white";
    pincel.font = "normal small-caps bold 48px Dancing Script";
    pincel.fillText(vidas,1060,125);
    pincel.closePath();
    

}

function presionarTecla(event) {

    event.preventDefault();

    var letraTeclado = event.key;
    console.log(event.key)

    if(letraTeclado == "Escape") {

        pincel.beginPath();
        pincel.fillStyle = "white";
        pincel.font = "normal small-caps bold 36px Dancing Script";
        pincel.fillText("has finalizado el juego", 450, 555);
        setTimeout(function(){canvas.classList.add("canvas")},2000);
        setTimeout(function(){scroll("nav")},1500);
        pincel.closePath();

    } else {
        if (letraTeclado == "Tab") {
            document.addEventListener("keydown",comenzarJuego);
        } else {
            if(verificarLetra(letraTeclado)) {

                if(verificarLetraCorrecta(palabraSecreta,letraTeclado)) {
    
                    dibujarLetrasCorrectas(palabraSecreta,letraTeclado);
                    verificarGanador(palabraSecreta,letraTeclado);
    
                } else if (!(letraIncorrecta.includes(letraTeclado))) {
                        console.log("letraincorrecta")
                        letraIncorrecta.push(letraTeclado) 
                        errores += 1;
                        vidas = vidas.replace(vidas,String(parseInt(vidas) - 1));
                        dibujarLetraIncorrecta(letraTeclado);
                        dibujarAhorcado(errores);
                        pincel.fillStyle = "#23231D";
                        pincel.beginPath();
                        pincel.fillRect(1050,80,50,50);
                        pincel.font = "normal small-caps bold 48px Dancing Script";
                        pincel.fillStyle = "red";
                        pincel.fillText(vidas,1060,125);
                        pincel.closePath();
    
                } else {
    
                    console.log("ya ingresaste esa letra");
    
                }
            } else {
                    pincel.beginPath();
                    pincel.fillStyle = "white";
                    pincel.font = "normal small-caps bold 32px Dancing Script";
                    pincel.fillText("** debes ingresar una letra mayúscula **",350,555);
                    setTimeout(function(){
                        pincel.beginPath();
                        pincel.fillStyle = "#23231D";
                        pincel.fillRect(250,525,700,50);
                        pincel.fill();
                        pincel.closePath();
                        },1000);
                    pincel.closePath();
            }
        }
    }
}


    
