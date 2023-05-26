var dimension = {
    witdh: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
    height: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight,
    start: function (){
        window.addEventListener("resize", function(event){
            dimension.witdh = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
            dimension.height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
        });
    }
}