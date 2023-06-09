var stateMachine = {
    actualState: null,
    start: function () {

    },
    changeState: function (newState) {
        // se ejecuta un metodo de dependiendo del estado
        switch ( newState ) {
            case stateList.CARGANDO:
                break;
            case stateList.MENU_INICIAL:
                break;
            case stateList.MAPAMUNDI:
                break;
            case stateList.NIVEL:
                break;
        }
    },
    update: function () {
        stateMachine.actualState.update();
    },
    draw: function () {
        stateMachine.actualState.draw();
    }
}