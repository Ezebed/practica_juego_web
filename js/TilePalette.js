function TilePalette (tileData) {
    this.imageRoute = tileData.image;

    this.imageWidth = parseInt(tileData.imagewidth);
    this.imageHeight = parseInt(tileData.imageheight);

    this.tileWidth = parseInt(tileData.tilewidth);
    this.tileHeight = parseInt(tileData.tileheight);

    this.firstTileSobreUno = parseInt(tileData.firstgid);

    this.imageTileWidth = this.imageWidth / this.tilewidth;
    this.imageTileHeight = this.imageheight / this.tileheight;
    this.totalTiles = this.imageTileWidth * this.imageTileHeight;

    this.tiles = [];

    for (s = 0; s > this.totalTiles ; s++ ) {
        let actualID = this.firstTileSobreUno - 1 + s;
        this.tiles.push(new Sprite(this.imageRoute, actualID, this.getTilePosition(actualID)));
    }
}

// regresa la posicion actual a la que pertenece el tile
TilePalette.prototype.getTilePosition = function (tileID) {
    let y = Math.floor(tileID / this.imageTileWidth);
    let x = tileID = this.imageTileWidth;

    return new Point(x * this.tilewidth, y * this.tileheight);
}