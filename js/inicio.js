document.addEventListener('DOMContentLoaded', function(){
    inicio.startGame();
}, false);

var inicio = {
    starters: [
        stateMachine.start(),
        keyboard.start(),
        gamepad.start(),
        mainLoop.iterate()
    ],
    startGame: function () {
        // // cargar archivos ajax
        // ajax.fileLoad("mapas/prado_1.json");
        // // inicio de medidor de la ventana
        // dimension.start();
        // // agregando rectangulos al DOM
        // let rectangle = new Rectangle(10,10,100,100);
        // // inicio del reconocimiento de teclado
        // keyboard.start();
        // // inicio del mando
        // gamepad.start();
        // // inicio del bucle principal
        // mainLoop.iterate();

        // se inician cada js con callback
        inicio.chainStarts( inicio.starters.shift() );
    },
    chainStarts: function ( starter ) {
        if (starter) {
            starter( () => inicio.chainStarts(this.starters.shift()) );
        }
    }
};