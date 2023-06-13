function GameMap (jsonObject) {
    this.position = new Point(0,0);
    this.actualPosition = new Point(0,0);

    this.layerWidth = parseInt(jsonObject.width); //anchoMedidoEnTiles
    this.layerHeight = parseInt(jsonObject.height); //altoMedidoEnTiles
    this.tileWidth = parseInt(jsonObject.tilewidth);
    this.tileHeight = parseInt(jsonObject.tileheight);
    console.log("len -> "+ parseInt(jsonObject.width) );
    this.tilesPalette = [];
    this.startTilesPalette(jsonObject.tilesets);

    this.tilesLayer = [];
    this.startLayers(jsonObject.layers);

    this.startGrid();
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

GameMap.prototype.startGrid = function () {
    // obtenemos la medida del mapa en pixeles
    let mapPixelWidth = this.layerWidth * this.tilewidth;
    let mapPixelHeight = this.layerHeight * this.tileheight;

    let html = "";
    
    // recolectamos los html de cada tile
    for (i = 0 ; i < this.tilesLayer.length ; i++) {
        for ( j = 0 ; j < this.tilesLayer[i].tiles.length ; j++ ) {
            // comprobamos si el tile actual es nulo
            if (this.tilesLayer[i].tiles[j] == null) {
                continue;
            }

            // agregamos el tile actual al DOM
            html += this.tilesLayer[i].tiles[j].html;

            console.log("->><> "+this.tilesLayer[i].tiles[j].html);
        }
    }

    document.getElementById("mapaJuego").innerHTML = html;

    // ptprgamos estilos a cada tile
    for (i = 0 ; i < this.tilesLayer.length ; i++) {
        for ( j = 0 ; j < this.tilesLayer[i].tiles.length ; j++ ) {
            // comprobamos si el tile actual es nulo
            if (this.tilesLayer[i].tiles[j] == null) {
                continue;
            }

            // agregamos el tile actual al DOM
            this.tilesLayer[i].tiles[j].applyStyles;
        }
    }

    document.getElementsByTagName("body")[0].style.overflow = "hidden";
}

GameMap.prototype.update = function () {

}

GameMap.prototype.draw = function () {

}