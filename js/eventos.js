var botonIniciar = document.querySelector("#iniciar-juego");
var div = document.querySelector("#tablero-canvas");

botonIniciar.addEventListener("click", comenzarJuego);
    
function comenzarJuego(event) {

    event.preventDefault();

    document.removeEventListener("keydown",comenzarJuego);

    scroll("#tablero-canvas");

    div.classList.add("vh-100");
    document.body.classList.add("overflow-off");

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
        document.removeEventListener("keydown",presionarTecla); 
        pincel.beginPath();
        pincel.fillStyle = "#23231D";
        pincel.fillRect(200,525,800,50);
        pincel.fillStyle = "white";
        pincel.font = "normal small-caps bold 36px Dancing Script";
        pincel.fillText("has finalizado el juego, la palabra era: " + palabraSecreta, 215, 555);
        setTimeout(function(){
            canvas.classList.add("canvas");
            div.classList.remove("vh-100");
            document.body.classList.remove("overflow-off");
        },3000);
        setTimeout(function(){
            scroll("nav");
        },2500);
        pincel.closePath();

    } else {
        if (letraTeclado == "Tab") {
            pincel.beginPath();
            pincel.fillStyle = "white";
            pincel.font = "normal small-caps bold 36px Dancing Script";
            pincel.fillText("has cambiado de palabra, la palabra era: " + palabraSecreta, 215, 555);
            pincel.fillText("--Presiona cualquier tecla para continuar--", 500, 300);
            pincel.closePath();
            document.addEventListener("keydown",comenzarJuego);
        } else {
            if(verificarLetra(letraTeclado)) {

                if(verificarLetraCorrecta(palabraSecreta,letraTeclado)) {
    
                    dibujarLetrasCorrectas(palabraSecreta,letraTeclado);
                    verificarGanador(palabraSecreta,letraTeclado);
    
                } else {

                    if (!(letraIncorrecta.includes(letraTeclado))) {
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
                        pincel.fillStyle = "#23231D";
                        pincel.fillRect(200,525,800,50);
                        pincel.fillStyle = "white";
                        pincel.fillText("Ya ingresaste esa letra", 400, 555);
                        setTimeout(function(){
                        pincel.beginPath();
                        pincel.fillStyle = "#23231D";
                        pincel.fillRect(250,520,700,50);
                        pincel.fill();
                        pincel.closePath();
                        },1000);
                    }
                }
            } else {
                    if(letraTeclado != "CapsLock") {
                    pincel.beginPath();
                    pincel.fillStyle = "#23231D";
                    pincel.fillRect(200,525,800,50);
                    pincel.fillStyle = "white";
                    pincel.font = "normal small-caps bold 36px Dancing Script";
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
}


    
