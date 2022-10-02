const inicio = document.querySelector(".container-btn")
const juego = document.querySelector(".container-inicioJuego")
const agregar = document.querySelector(".container-agregarPalabra")
const textoAgregar = document.querySelector(".texto")
const letra = document.querySelector(".cajaLetras1")
const guion = document.querySelector(".cajaLetras2")
const letraNo = document.querySelector(".cajaNo-es")
const limpiar = document.querySelector(".canvas")


var palabras = ["ESCUELA", "PERSONA", "HOLA", "CASA", "HERMANO", "JUAN", "BACALAOS", "ARMENIAS", "LAMPARAS", "LAGRIMAS", "SUEÑOS", "TALENTOS", "TECLADOS"]
var secreta = [];
var intentos = 0;
var ganaste = 0;
var tempSecreta = "";
var noLetra = "";
var teclaPresionada = ["",["A", 0], ["B", 0], ["C", 0], ["D", 0], ["E", 0], ["F", 0], ["G", 0], ["H", 0], ["I", 0],
["J", 0], ["K", 0], ["L", 0], ["M", 0], ["N", 0], ["Ñ", 0], ["O", 0], ["P", 0], ["Q", 0], ["R", 0],
["S", 0], ["T", 0], ["U", 0], ["V", 0], ["W", 0], ["X", 0], ["Y", 0], ["Z", 0]];

function init() {
    
    juego.style.display = "none";

    agregar.style.display = "none";

    inicio.style.display = "block";
}

init();

function reinicioVariables() {
    noLetra = "";
    secreta = [];
    ganaste = 0;
    intentos = 0;
    tempSecreta = "";
    limpiar.with = 688;
    limpiar.height = 300;
    for (let x = 0; x < teclaPresionada.length; x++) {
        teclaPresionada[x][1] = 0;
        console.log(teclaPresionada[x][1]);
    }
    letraNo.innerHTML = "<li class='no-es'></li>";
    console.log(noLetra);
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function Jugando() {
    var string2 = "";
    var string3 = "";
    var string = "";

    string = palabras[getRandomInt(palabras.length)];

    while (string == tempSecreta) {
        string = 0;
        string = palabras[getRandomInt(palabras.length)];
    }

    tempSecreta = string;

    for (let index = 0; index < string.length; index++) {
        secreta.push(string.substr((string.length - index) * -1, 1));
        console.log(string.substr((string.length - index) * -1, 1) + " --> secreta :" + secreta[index]);
        console.log(string);
        string2 = string2 + "<li class='letra l" + index + "'></li>";
        string3 = string3 + "<li class='guionBajo'></li>";
        letra.innerHTML = string2;
        guion.innerHTML = string3;
    }
}

function iniciarJuego() {
    reinicioVariables();
    inicio.style.display = "none";
    juego.style.display = "block";
    Jugando();
}



function agregarPalabra() {
    inicio.style.display = "none";
    agregar.style.display = "block";
}

function botonNuevo() {
    Swal.fire({
        title: '¿Estas seguro que deseas un Nuevo Juego?',
        text: "¡Ya casi lo lograste! ¡sigue intentando!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Nuevo Juego!',
        cancelButtonText: 'Seguir intentando',
    }).then((result) => {
        if (result.isConfirmed) {
            reinicioVariables();
            Swal.fire({
                icon: 'success',
                title: '¡Suerte en tu nuevo intento!',
                showConfirmButton: false,
                timer: 2000
            });
            Jugando();
        }
    })

}

function botonDisistir() {
    Swal.fire({
        title: '¿Estas Seguro de que quieres rendirte...?',
        showDenyButton: true,
        confirmButtonText: 'Si',
        denyButtonText: 'No',
    }).then((result) => {
        if (result.isConfirmed) {
            reinicioVariables();
            Swal.fire({ icon: 'success', title: 'Suerte para la proxima', timer: 2000 })
            init();
        }
    })
}

function guardar() {
    Swal.fire({
        title: '¿Estas seguro que deseas añadir esa palabra?',
        showDenyButton: true,
        confirmButtonText: 'Guardar',
    }).then((result) => {
        if (result.isConfirmed) {
            palabras.push(textoAgregar.value);
            textoAgregar.value = null;
            init();
            Swal.fire('Se guardo Sactifactoriamente', '', 'success')
        }
    })
}

function botonCancelar() {
    Swal.fire({
        title: '¿Estas Seguro de que deseas cancelar?',
        showDenyButton: true,
        confirmButtonText: 'Continuar',
        denyButtonText: 'Cancelar',
    }).then((result) => {
        if (result.isConfirmed) {
            textoAgregar.value = null;
            Swal.fire({ icon: 'success', title: 'Hasta la proxima', timer: 2000 })
            init();
        }
    })
}


function NumText(string) { //solo letras y numeros
    var out = '';
    //Se añaden las letras validas


    var filtro =
        'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ'; //Caracteres validos
    string = string.toUpperCase();
    for (var i = 0; i < string.length; i++)
        if (filtro.indexOf(string.charAt(i)) != -1)
            out += string.charAt(i);
    return out;
}

function esTeclaValida(string) {
    var out = '';
    //Se añaden las letras validas
    var filtro =
        'ABCDEFGHIJKLMNÑOPQRSTUVWXYZabcdefghijklmnñopqrstuvwxyz'; //Caracteres validos
    string = string.toUpperCase();
    for (var i = 0; i < string.length; i++)
        if (filtro.indexOf(string.charAt(i)) != -1) {
            return true;
        } else {
            return false;
        }
}

document.addEventListener('keydown', (event) => {
    var keyValue = NumText(event.key);
    var Mayuscula = "";
    var posicionLetra = 0;
    var b = 0;


    Mayuscula = keyValue.toUpperCase();
    // Mayuscula = NumText(Mayuscula);



    console.log("VALOR --> " + Mayuscula);

    console.log(secreta.length);




    for (let j = 0; j < teclaPresionada.length; j++) {
        if (Mayuscula == teclaPresionada[j][0]) {
            posicionLetra = j;
        }
    }

    console.log(teclaPresionada[posicionLetra][0] + "encontre --> " + teclaPresionada[posicionLetra][1]);

    if (esTeclaValida(Mayuscula) == true) {
        console.log("Si es :" + Mayuscula);
        for (let i = 0; i < secreta.length; i++) {
            if (secreta[i] == Mayuscula && teclaPresionada[posicionLetra][1] == 0) {
                b = 1;
                const temp = document.querySelector(".l" + i);
                temp.textContent = secreta[i];
                console.log(i + " --> " + secreta[i]);
                ganaste = ganaste + 1;
                console.log("conteo --> " + ganaste);
                if (ganaste == secreta.length) {
                    Swal.fire({
                        title: 'Muchas Felicidades has Ganado',
                        text: "¿Te gustaría volver a Jugar?",
                        showDenyButton: true,
                        confirmButtonText: 'Si',
                        denyButtonText: 'No',
                    }).then((result) => {
                        if (result.isConfirmed) {
                            reinicioVariables();
                            Jugando();
                        } else if (result.isDenied) {
                            reinicioVariables();
                            Swal.fire({
                                icon: 'success',
                                title: 'Muchas gracias por jugar',
                                text: "¡Hasta la Proxima!",
                                showConfirmButton: false,
                                timer: 2000
                            });
                            init();
                        }
                    })
                }
            }
        }
        if (teclaPresionada[posicionLetra][1] == 0 && b == 0) {
            b = 0;
            intentos = intentos +1;
            switch (intentos) {
                case 1:
                    line(187, 280, 481, 280, 4, "#0A3871"); //base
                    break;            
                case 2:
                    line(271, 280, 271, 20, 4, "#0A3871");  //poste
                    break;
                case 3:
                    line(269, 20, 409, 20, 4, "#0A3871");   //poste-brazo
                    break;
                case 4:
                    line(408, 18, 408 , 108, 4, "#0A3871");  //zoga
                    break;
                case 5:
                    circle(408,128 , 20, 6, "#E5E5E5", "#0A3871"); //cabeza
                    break;
                case 6:
                    line(408, 148, 408, 220, 4, "#0A3871"); //cuerpo
                    break;
                case 7:
                    line(408, 150, 358, 178, 4, "#0A3871"); //brazo-derecho
                    break;
                case 8:
                    line(408, 150, 458, 178, 4, "#0A3871"); //brazo-izquierdo
                    break;
                case 9:
                    line(408, 218, 358, 248, 4, "#0A3871"); //pierna-derecho
                    break;
                case 10:
                    line(408, 218, 458, 248, 4, "#0A3871"); //pierna-izquierda
                    break;
            }
            noLetra = noLetra + "<li class='no-es'>" + teclaPresionada[posicionLetra][0] + "</li>";
            letraNo.innerHTML = noLetra;
            if (intentos == 10) {
                Swal.fire({
                    position: 'top-end',
                    title: 'Ups, se te acabaron los intentos',
                    text: "¿Te gustaría volver a Jugar?",
                    showDenyButton: true,
                    confirmButtonText: 'Si',
                    denyButtonText: 'No',
                }).then((result) => {
                    if (result.isConfirmed) {
                        reinicioVariables();
                        Jugando();
                    } else if (result.isDenied) {
                        reinicioVariables();
                        Swal.fire({
                            icon: 'success',
                            title: 'Muchas gracias por jugar',
                            text: "¡Hasta la Proxima!",
                            showConfirmButton: false,
                            timer: 2000
                        });
                        init();
                    }
                })
            }
        }
        teclaPresionada[posicionLetra][1] = 1;
    }
}, false);
