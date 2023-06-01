var gamepad = {
    object: null,
    eventsAvailable:  'ongamepadconnected' in window,
    connected: false,
    start: function () {
        // verificamos si se a conectado algun mando
        if(gamepad.eventsAvailable){
            window.addEventListener("gamepadconnected", gamepad.toConnect);
            window.addEventListener("gamepaddisconnected", gamepad.disconnect);
        }else{ // si se conecto alguno se actualiza su informacion
            gamepad.update();
        }
    },
    toConnect: function (event) {
        // registramos el mando y lo actualizamos
        gamepad.object = event.gamepad;
        gamepad.identify()
    },
    disconnect: function (event) {
        // en caso de que se desconecte envia un mensaje de alerta
        console.log("Desconneccion del Gamepad del indice "+event.gamepad.index+" : "+event.gamepad.id);
    },
    update: function () {
        // verificamos si existen algun mando en funcionamiento
        if(!gamepad.eventsAvailable){
            let gamepads = null;

            // intentamos obtener el mando del navegador
            try {
                gamepads = navigator.getGamepads ? navigator.getGamepads() : (navigator.webkitGetGamepads ? navigator.webkitGetGamepads : []);
                gamepad.object = gamepads[0];
                // comprobamos si el mando ya se encontraba conectado
                if(gamepad.connected){
                    gamepad.connected = true;
                    gamepad.identify();
                }

                // verificamos si existe el mando
                if(gamepad.object) {
                    return;
                }

                // si existe el mado comprobamos algun boton
                if(gamepad.buttonPressed(gamepad.object.buttons[0])){
                    console.log("Mando: A");
                }
            }catch(error){
                console.log(error.message);
            }
        }
    },
    buttonPressed: function (button) {
        // comprobamos si el boton es un objecto
        if (typeof(button) == "object"){
            return button.buttonPressed;
        }

        return button == 1.0;
    },
    idetify: function () {
        console.log("Mando conectado en el indice %d: %s %d botones, %d ejes", gamepad.object.index, gamepad.object.id, gamepad.object.buttons.length, gamepad.object.axes.length);
    }
}