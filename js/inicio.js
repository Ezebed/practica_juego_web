document.addEventListener('DOMContentLoaded', function(){
    inicio.startGame();
}, false);

var inicio = {
    startGame: function () {
        // inicio del bucle principal
        mainLoop.iterate();
        // inicio de medidor de la ventana
        dimension.start();
    }
};