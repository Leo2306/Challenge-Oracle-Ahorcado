var lista = ["FOSIL", "DEBIL", "HOMICIDIO", " PROBAR", "EVITAR", "NIÑOS", "HIBERNACION", "CORRECTO", "APOCALIPSIS", "COLISIONADOR", "IMPUESTOS", "TASA", "SIASTICA", "DISCRETO", "COSA", "CONSPIRAR", "ETICO", "ALFABETICO", "AJEDREZ", "INTENTO", "ONDA DE SUELO", "CASTOR", "QUEJIDO", "FIESTA", "INMOLAR", "TONTO", "PROHIBIR", "BOMBARDERO", "GRABAR", "GRANDE", "INFIEL", "SEGUIR", "CRUZAR", "DESEQUILIBRADO", "COMBUSTIBLE", "PIROMANO", "ERROR", "IMPULSAR", "ALGODON", "PINTURA", "ESTRELLA FUGAZ"];

var botonAgregar = document.querySelector("#nueva-palabra");

var error = document.querySelector("#span-error");

botonAgregar.addEventListener("click", function(event) {

    console.log(lista);

    let input = document.querySelector("#input-nueva-palabra");

    event.preventDefault();

    setTimeout(function(){error.innerHTML = "";},3000);

    if(lista.includes(input.value)) {
        error.innerHTML = "*Ya existe la palabra";
        error.classList.add("mensaje-error");
    } else {
        if(verificarPalabra(input)) {
            recibirPalabra(input);

        }        
    }

    
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

function verificarPalabra(input,lista) {

    let resultado;

    if(input.value.length > 14 || input.value.length < 2 && input.value.length != 0) {
        error.innerHTML = "*La palabra es muy larga o muy corta";
        error.classList.add("mensaje-error");
        resultado = false;
    } else {
        if(input.value == "") {
            error.innerHTML = "*Debes ingresar una palabra";
            error.classList.add("mensaje-error");
            resultado = false;
        } else {
            resultado = true;
        }
    }
    return resultado;
}

