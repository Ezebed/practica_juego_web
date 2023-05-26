document.addEventListener('DOMContentLoaded', function(){
    inicio.startGame();
}, false);

var inicio = {
    startGame: function () {
        mainLoop.iterate();
    }
};