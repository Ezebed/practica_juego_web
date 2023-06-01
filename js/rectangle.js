function Rectangle (coordX, coordY, width, height) {
    this.coordX = coordX;
    this.coordY = coordY;
    this.width = width;
    this.heigth = height;
    this.id = coordX + "r" + coordY;
    this.insertInDOM();
}

// funcion prototipo de la clase rectanulo para insertar en el DOM
Rectangle.prototype.insertInDOM = function () {
    // div del objeto rectangulo
    let rectangleDiv = "<div id='" + this.id + "'></div>";
    // obtenemos el html de la estiqueta donde insertaresmos el rectangulo
    let html = document.getElementById("game").innerHTML;
    // insercion del rectangle div en el html
    document.getElementById("game").innerHTML = html + rectangleDiv;
    // agregando estilos al rectangle div
    document.getElementById(this.id).style.position = "absolute";
    document.getElementById(this.id).style.left = this.coordX + "px";
    document.getElementById(this.id).style.top = this.coordY + "px";
    document.getElementById(this.id).style.width = this.width + "px";
    document.getElementById(this.id).style.height = this.heigth + "px";
    document.getElementById(this.id).style.backgroundColor = "#" + Math.floor(Math.random() * 16777215).toString(16);

}