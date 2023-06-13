var ajax = {
    fileLoad: function(route, manipulateData) {
        // se solicita una peticion de xml o html
        let petition = new XMLHttpRequest();

        petition.onreadystatechange = function () {
            /*
            0 - UNSENT - no iniciada
            1 - OPENED - conectado al servidor
            2 - HEADERS_RECEIVED - peticion aceptada
            3 - LOADING - procesando peticion
            4 - DONE - peticion finalizada
            */
           if (petition.readyState == XMLHttpRequest.DONE) {
                if (petition.status == 200) {
                    manipulateData(JSON.parse(petition.responseText));
                } else if (petition.status == 400){
                    console.log("error");
                } else {
                    console.log("resultado inesperado");
                }
           }
        };

        petition.open('GET', route, true);
        petition.send();
    }
}