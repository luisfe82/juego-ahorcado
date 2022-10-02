
function line(x_inicio, y_inicio, x_fin, y_fin, grozorLine, colorLinea) {

    var pantalla = document.querySelector("canvas");
    var pincel = pantalla.getContext("2d");

    pincel.lineWidth = grozorLine;
    pincel.strokeStyle = colorLinea;
    pincel.beginPath();
    pincel.moveTo(x_inicio, y_inicio);
    pincel.lineTo(x_fin, y_fin);
    pincel.stroke();

}

function circle(x_inicio, y_inicio, radio, grozorLine, colorFondo, colorLinea) {

    var pantalla = document.querySelector("canvas");
    var pincel = pantalla.getContext("2d");

    var X = x_inicio;
    var Y = y_inicio;
    var r = radio;
    pincel.fillStyle = colorFondo;
    pincel.strokeStyle = colorLinea;
    pincel.lineWidth = grozorLine;
    pincel.beginPath();
    pincel.arc(X, Y, r, 0, 2 * Math.PI);
    pincel.stroke();
    pincel.fill();

}


// line(187, 280, 481, 280, 4, "#0A3871"); //base
// line(271, 280, 271, 20, 4, "#0A3871");  //poste
// line(269, 20, 409, 20, 4, "#0A3871");   //poste-brazo
// line(408, 18, 408 , 108, 4, "#0A3871");  //zoga
// circle(408,128 , 20, 6, "#E5E5E5", "#0A3871"); //cabeza
// line(408, 148, 408, 220, 4, "#0A3871"); //cuerpo
// line(408, 150, 358, 178, 4, "#0A3871"); //brazo-derecho
// line(408, 150, 458, 178, 4, "#0A3871"); //brazo-izquierdo
// line(408, 218, 358, 248, 4, "#0A3871"); //pierna-derecho
// line(408, 218, 458, 248, 4, "#0A3871"); //pierna-izquierda



// ?var pincel = pantalla.getContext("2d");
// *Devuelve un objeto que proporciona todos los métodos y propiedades para dibujar en el canvas.

// ?pincel.lineWidth = 6;
// *Determina (sets) o devuelve (returns) la grosor de la línea. por defecto=1

// ?pincel.strokeStyle = colorLinea;
// *Determina (sets) o devuelve (returns) el color, gradiente o patrón de la línea. por defecto=negro

// ?pincel.beginPath();
// *Empezamos a dibujar

// ?pincel.moveTo(x_inicio, y_inicio);
// *Mueve el "lapiz" a un punto en el canvas, especificado por sus coordenadas "x" e "y". NO DIBUJA ninguna línea.

// ?pincel.lineTo(x_fin, y_fin);
// *Define una línea desde un punto hasta otro punto por sus coordenadas "x" e "y". Mueve el "lapiz" a este punto.

// ?pincel.stroke();
// *Dibuja una línea ya definida. ¡OJO! Sin stroke() no hay línea. 
