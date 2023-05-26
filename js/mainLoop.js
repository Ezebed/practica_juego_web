/*
 1 sg = 1000 mls
*/

var mainLoop = {
    ejecutionID : null,
    lastRecord : 0,
    aps : 0,
    fps : 0,
    iterate (temporalRecord) {
        mainLoop.ejecutionID = window.requestAnimationFrame(mainLoop.iterate);

        //aumentar contadores
        mainLoop.update(temporalRecord);
        mainLoop.draw();

        //mostrar contador
        if(temporalRecord - mainLoop.lastRecord > 999){
            // update el ultimo registro
            mainLoop.lastRecord = temporalRecord;

            // dibujado de los contadores
            console.log("APS : " + mainLoop.aps + " | FPS: " + mainLoop.fps);

            //reinicio de los contadores
            mainLoop.aps = 0;
            mainLoop.fps = 0;
        }
    },
    stop () {

    },
    draw (temporalRecord) {
        // aumentando los fps
        mainLoop.fps++
    },
    update (temporalRecord) {
        // aumentando los aps
        mainLoop.aps++
    }
};