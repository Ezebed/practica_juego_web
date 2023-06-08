function Tile (xTiles, yTiles, z, width, height, sprite) {
    this.rectangle = new Rectangle(xTiles, yTiles, width, height);
    this.zIndex = z;
    this.sprite = sprite; // es un sprite de la clase Sprie
    this.idHTML = "x"+xTiles+"y"+yTiles+"z"+z;
    this.htlm = '<div id="'+this.idHTML+'" ></div>';
}

// agrega los estilos necesarios del tile en el DOM
Tile.prototype.applyStyles = function() {
    // comprobamos si el tile existe en el documento
    if(!document.getElementById(this.idHTML)){
        throw("el elemento "+this.idHTML+" no existe en la hoja");
    }

    // agregando los estilos al tile
    document.getElementById(this.idHTML).style.position = "absolute";
    document.getElementById(this.idHTML).style.left = (this.rectangle.x * this.rectangle.width)+"px";
    document.getElementById(this.idHTML).style.top = (this.rectangle.y * this.rectangle.height)+"px";
    document.getElementById(this.idHTML).style.width = this.rectangle.width+"px";
    document.getElementById(this.idHTML).style.height = this.rectangle.height+"px";
    document.getElementById(this.idHTML).style.zIndex = ""+this.zIndex;
    document.getElementById(this.idHTML).style.background = "url('"+this.sprite.routeOrigenSheet+"')";

    let x = this.sprite.sheetPosition.x;
    let y = this.sprite.sheetPosition.y;

    document.getElementById(this.idHTML).style.backgroundPosition = "-"+x+"px -"+y+"px";
    document.getElementById(this.idHTML).style.backgroundClip = "border-box";
    document.getElementById(this.idHTML).style.outline = "1px solid transparent";
}