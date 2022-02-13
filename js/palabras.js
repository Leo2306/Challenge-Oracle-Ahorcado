var lista = ["FOSIL", "DEBIL", "HOMICIDIO", " PROBAR", "EVITAR", "NIÑOS", "HIBERNACION", "CORRECTO", "APOCALIPSIS", "COLISIONADOR", "IMPUESTOS", "TASA", "SIASTICA", "DISCRETO", "COSA", "CONSPIRAR", "ETICO", "ALFABETICO", "AJEDREZ", "INTENTO", "ONDA DE SUELO", "CASTOR", "QUEJIDO", "FIESTA", "INMOLAR", "TONTO", "PROHIBIR", "BOMBARDERO", "GRABAR", "GRANDE", "INFIEL", "SEGUIR", "CRUZAR", "DESEQUILIBRADO", "COMBUSTIBLE", "PIROMANO", "ERROR", "IMPULSAR", "ALGODON", "PINTURA", "ESTRELLA FUGAZ"];

var botonAgregar = document.querySelector("#nueva-palabra");

var error = document.querySelector("#span-error")

botonAgregar.addEventListener("click", function(event) {

    let input = document.querySelector("#input-nueva-palabra");

    event.preventDefault();

    setTimeout(function(){error.innerHTML = "";},3000);

    recibirPalabra(input);

    
})

function recibirPalabra(input) {


    let palabraNueva = input.value;

    const verificacion = new RegExp(/[^a-zA-Z]/);
   
    const comparacionMin = new RegExp(/[a-z]/);

    if(verificacion.test(palabraNueva)) {
        error.innerHTML = "*Debe ingresar una palabra solo con letras";
        error.classList.add("mensaje-error");
    } else {
        if(comparacionMin.test(palabraNueva)) {
            error.innerHTML = "*Solo letras mayúsculas";
            error.classList.add("mensaje-error");
        } else {
            lista.push(palabraNueva);
            error.innerHTML = "*Palabra adicionada, Muchas gracias!!";
            error.classList.add("mensaje-correcto");
            input.value = "";
        }

    }

}

