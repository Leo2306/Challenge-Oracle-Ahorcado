
var letrasIngresadas = [];
var letraIncorrecta = [];
var letraCorrecta = [];
var palabraSecreta = "";
var errores = 0;
var vidas = "";
var posicionTextoIncorrecto = 0;
var posicionTextoCorrecto = 0;
var posicionCorrecta = 0;
var contadorLetrasI = 0;
var contadorLetrasC = 0;
var y = 0;

var canvas = document.querySelector("#canvas");
var tablero = document.querySelector("canvas");
var pincel = tablero.getContext("2d");



var lista = ["san martin", "boca juniors", "river plate", "racing","independiente"];

function dibujarTablero() {

    canvas.classList.remove("canvas");

	for(var i = 0; i < 25; i = i + 5) {
        pincel.fillStyle = "#C79960";
        pincel.beginPath();
        pincel.moveTo(i,i);
        pincel.lineTo(i,800-i); 
        pincel.lineTo(1200-i,800-i);
        pincel.lineTo(1200-i,i);
        pincel.lineTo(i,i);
        pincel.fill();
        pincel.strokeStyle = "black";
        pincel.stroke();

    if(i == 20) {
        pincel.beginPath();
        pincel.fillStyle = "#23231D";
        pincel.fillRect(i,i,1200-i*2,800-i*2);
    }
}

    pincel.beginPath();
    pincel.strokeStyle = "white";
    pincel.font = "48px Dancing Script";
    pincel.strokeText("Presiona una letra :", 450, 75);


    pincel.beginPath();
    pincel.fillStyle = "white";
    pincel.font = "36px arial"
    pincel.fillText("letras incorrectas:", 275, 650);


    pincel.strokeStyle = "red"
    pincel.beginPath();
    pincel.moveTo(1075,75);
    pincel.bezierCurveTo(1075,72,1070,60,1050,60);
    pincel.bezierCurveTo(1020,60,1020,97.5,1020,97.5);
    pincel.bezierCurveTo(1020,115,1040,137,1075,155);
    pincel.bezierCurveTo(1110,137,1130,115,1130,97.5);
    pincel.bezierCurveTo(1130,97.5,1130,60,1100,60);
    pincel.bezierCurveTo(1085,60,1075,72,1075,75);
    pincel.stroke();

    pincel.fillStyle = "yellow";
    pincel.font = "24px arial";
    pincel.fillText("**Presiona la tecla ESC si quiere salir",400,750);

}


function escogerPalabra(lista) {
var palabra = "";
    for(var i = 0; i < lista.length; i++) {
      palabra = lista[Math.round(Math.random()*(lista.length-1))];
    }
    return palabra; 
}

function dibujarLineas(palabra) {

    var posicionMoveTo = 530;  
    var posicionLineTo = 560;

  var palabraNueva = palabra.split("");

  pincel.beginPath();
    pincel.strokeStyle = "white";
    pincel.lineWidth = 5;

  for(var i = 0; i < palabraNueva.length; i++) {

      if(!(palabraNueva[i] == " ")) {
          pincel.moveTo(posicionMoveTo,475); // 
          pincel.lineTo(posicionLineTo,475); // 
          pincel.stroke();
          posicionMoveTo = posicionMoveTo + 45;
          posicionLineTo = posicionLineTo + 45;
      }  else {
          posicionMoveTo = posicionMoveTo + 45;
          posicionLineTo = posicionLineTo + 45;
      }  
  }
}

function verificarLetra(letra) {

    var comparar = new RegExp(/[A-Z]/);

    if(comparar.test(letra)) {
        resultado = true;
    } else {
        resultado = false;
    }
    return resultado;
}

function verificarLetraCorrecta(palabra,letraTeclado) {

    for (var i = 0; i < palabra.length; i++) {

        if(palabra.includes(letraTeclado)) {
            resultado = true;
            if(!(letraCorrecta.includes(letraTeclado))) {
                letraCorrecta.push(letraTeclado);
            }
        } else {  
            resultado = false;
        }
    }
    return resultado;
}

function dibujarLetrasCorrectas(palabra,letraTeclado) {

    var posicionCorrecta = 370;

      for(var i = 0; i < palabra.length; i++) {

          var letra = palabra[i];

    
          if (letra == letraTeclado) {
            
              pincel.fillStyle = "white";
              pincel.beginPath();
              pincel.font = "normal small-caps bold 48px arial";
              pincel.fillText(letraTeclado,posicionCorrecta,570);
              posicionCorrecta = posicionCorrecta + 45;

          } else {
                posicionCorrecta = posicionCorrecta + 45;
          }
      }
}

function dibujarLetraIncorrecta(letraTeclado) {

                pincel.fillStyle = "red";
                pincel.beginPath()
                pincel.font = "normal small-caps bold 48px arial";
                pincel.fillText(letraTeclado,posicionTextoIncorrecto,y);
                posicionTextoIncorrecto = posicionTextoIncorrecto + 40;

}

function dibujarBase() {

    pincel.beginPath();
    pincel.strokeStyle = "white";

    var x = 110;
    var y = 475;

    for(var i = 0; i < 3; i++) {
        pincel.moveTo(x,y);
        x = x + 100;
        if(x == 210) {
            y = 425;
            pincel.lineTo(x,y);
    }   else if (x == 310) {
            y = 475;
            pincel.lineTo(x,y);
        }
    }
    x = x - 300;
    pincel.lineTo(x,y);
    pincel.stroke();
} 

function dibujarHorca(num) {

    pincel.strokeStyle = "white";

    if(num == 1) {
        pincel.moveTo(210,425);
        pincel.lineTo(210,120);
    } else {
        if (num == 2) {
            pincel.moveTo(210,120);
            pincel.lineTo(410,120);
        } else {
            pincel.moveTo(410,120);
            pincel.lineTo(410,175);
        } 
    } 
    pincel.stroke();
}

function dibujarAhorcado(errores) {

    pincel.beginPath();

    if(errores == 1) {
        dibujarHorca(1);
        console.log("tienes 1 error")
    }
    if(errores == 2) {
        dibujarHorca(2);
        console.log("tienes 2 error")
    }

    if(errores == 3) {
        dibujarHorca(3);
        console.log("tienes 3 error")
    }
    if(errores == 4) {
        dibujarCabeza();
        console.log("tienes 4 errores")
    }
    if (errores == 5) {
        dibujarTronco();
        console.log("tienes 5 errores")
    }
    if(errores == 6) {
        dibujarBrazoIzquierdo();
        console.log("tienes 6 errores")
    }
    if(errores == 7) {
        dibujarBrazoDerecho();
        console.log("tienes 7 errores")
    }
    if(errores == 8) {
        dibujarPiernaIzquierda();
        console.log("tienes 8 errores")
    }
    if(errores == 9) {
        dibujarPiernaDerecha();
        dibujarFraseFin();
        finalizarJuego();
        console.log("tienes 9 errores");
    }
}

function dibujarCabeza() {
    pincel.beginPath();
    pincel.arc(410,215,40,0,(2*Math.PI));
    pincel.strokeStyle = "white";
    pincel.stroke();
}

function dibujarTronco() {
    pincel.beginPath();
    pincel.moveTo(410,255);
    pincel.lineTo(410,390);
    pincel.stroke();
}

function dibujarBrazoIzquierdo() {
    pincel.beginPath();
    pincel.moveTo(410,300);
    pincel.lineTo(335,260);
    pincel.stroke();
}

function dibujarBrazoDerecho() {
    pincel.beginPath();
    pincel.moveTo(410,300);
    pincel.lineTo(485,260);
    pincel.stroke();
}

function dibujarPiernaIzquierda() {
    pincel.beginPath();
    pincel.moveTo(410,390);
    pincel.lineTo(340,445);
    pincel.stroke();
}

function dibujarPiernaDerecha() {
    pincel.beginPath();
    pincel.moveTo(410,390);
    pincel.lineTo(480,445);
    pincel.stroke();
}

function eliminarTablero() {
    canvas.classList.add("canvas");
}


function finalizarJuego() {

        document.removeEventListener("keydown",presionarTecla);
        /*
        botonReinicio.classList.remove("btn-off");  
        var div = document.querySelector("#canvasito");
        botonReinicio.textContent = "Reiniciar";
        setTimeout(function() {div.appendChild(botonReinicio);
        div.classList.add("div");},5000);
*/
}

function dibujarFraseFin() {

    pincel.fillStyle = "red";
    pincel.font = "normal small-caps bold 24px arial";
    pincel.fillText("Fin del juego!. La palabra correcta era: " + palabraSecreta, 275, 565);

}

function verificarGanador(palabra,letraTeclado) {

    if(letrasIngresadas.length == 0) {
        for(var i = 0; i < palabra.length; i++) {
            letrasIngresadas.push(" ");
        }
    } 

    for (var i = 0; i < palabra.length; i++) {
            var letra = palabra[i];
            if(letra == letraTeclado) {
            letrasIngresadas[i] = letraTeclado;
        }
    }

    var palabraIngresada = letrasIngresadas.join("");
    
    if(palabraIngresada == palabra) {

        document.removeEventListener("keydown",presionarTecla); 
        pincel.fillStyle = "green";
        pincel.font = "normal small-caps bold 24px arial";
        pincel.fillText("Ganaste, felicitaciones!!",450,635);

    }

}

function scroll(element) {
    const a = document.querySelector(element);
    a.scrollIntoView({
        behavior: "smooth"
    })
}

