var teclas = { UP: 38, DOWN: 40, LEFT: 37, RIGHT: 39 };

document.addEventListener("keydown", dibujarTeclado);

var cuadrito = document.getElementById("area");
var papel = cuadrito.getContext("2d");
var x = (cuadrito.width)/2;
var y = (cuadrito.height)/2;


dibujarLinea("red", x-1, y-1, x, y, papel);

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo) {
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = 2;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}

function dibujarTeclado(evento) {
    var color = "blue";
    var movimiento = 10;
    console.log(evento);
    switch (evento.keyCode) {
        case teclas.UP: 
            dibujarLinea(color, x, y, x, y - movimiento, papel);
            y-= movimiento;
        break;
        case teclas.DOWN: 
            dibujarLinea(color, x, y, x, y + movimiento, papel);
            y+= movimiento; 
        break;
        case teclas.LEFT: 
            dibujarLinea(color, x, y, x - movimiento, y, papel);
            x-= movimiento;
        break;
        case teclas.RIGHT: 
            dibujarLinea(color, x, y, x + movimiento, y, papel);
            x+= movimiento;
        break;
        default: 
            console.log("otra tecla");
        break;
    }
}