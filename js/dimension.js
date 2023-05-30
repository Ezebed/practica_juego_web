var dimension = {
    // obtener la altura y anchura de las ventanas
    witdh: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
    height: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight,
    // actualizacion de el tamaño de la ventana
    start: function (){
        window.addEventListener("resize", function(event){
            // obteniendo el nuevo tamaño de la ventana actual
            dimension.witdh = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
            dimension.height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
        });
    }
}