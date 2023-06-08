function Sprite (route, idSobreZero, sheetPosition) {
    let routeElements = route.split("/");
    this.routeOrigenSheet = "img/" + routeElements[routeElements.length -1];
    this.idSobreZero = idSobreZero;
    this.idSobreUno = idSobreZero + 1;
    this.sheetPosition = sheetPosition; //es un punto de la clase point
}