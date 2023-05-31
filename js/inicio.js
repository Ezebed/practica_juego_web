document.addEventListener('DOMContentLoaded', function(){
    inicio.startGame();
}, false);

var inicio = {
    startGame: function () {
        // inicio del bucle principal
        mainLoop.iterate();
        // inicio de medidor de la ventana
        dimension.start();
        // agregando rectangulos al DOM
        let rectangle = new Rectangle(10,10,100,100);
        // inicio del reconocimiento de teclado
        keyboard.start();
    }
};