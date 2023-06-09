function GameMap (jsonObject) {
    this.position = new PointerEvent(0,0);
    this.actualPosition = new PointerEvent(0,0);

    this.layerWidth = parseInt(jsonObject.width);
    this.layerHeight = parseInt(jsonObject.height);
    this.tileWidth = parseInt(jsonObject.tilewidth);
    this.tileHeight = parseInt(jsonObject.tileheight);

    this.tilesPalette = [];
    this.startTilesPalette(jsonObject.tileset);

    this.tilesLayer = [];
    this.startLayers(jsonObject.layers);
}

GameMap.prototype.startTilesPalette = function (tilesData) {
    for ( i = 0 ; i < tilesData.length ; i++ ) {
        this.tilesPalette.push(new TilePalette(tilesData[i]));
    }
}

GameMap.prototype.startLayers = function (layersData) {
    for ( i = 0 ; i < layersData.length ; i++ ) {
        switch ( layersData.type ) {
            case "tilelayer":
                this.tilesLayer.push(new MapTileLayer( layersData[i], i, this.tilewidth, this.tileHeight,
                    this.tilesPalette ));
                break;
            case "objectgroup":
                break;
        }
    }
}

GameMap.prototype.update = function () {

}

GameMap.prototype.draw = function () {

}