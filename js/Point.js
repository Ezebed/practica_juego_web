function Point (x,y) {
    this.x = x;
    this.y = y;
}

//compara si dos puntos se encuentran en la misma posicion
Point.prototype.coincide = function (point) {
    return this.x == point.x && this.y == point.y;
}