function MapTileLayers (layerData, zIndex, layerWidhth, layerHeight, tilePalette) {
    this.layerWidhth = parseInt(layerData.width);
    this.layerHeight = parseInt(layerData.height);
    this.x = parseInt(layerData.x);
    this.y = parseInt(layerData.y);
    this.zIndex = zIndex;
    this.tiles = [];

    // recorrer la capa en filas
    for (j = 0 ; j < this.layerHeight ; j++) {
        // recorrer la capa en columnas
        for (k = 0 ; k < this.layerWidhth ; k++) {
            // obtenemos la id del tile actual
            let actualTileID = layerData.data[j + k * thid.layerWidhth];

            // verificamos si el tile actual no es uno vacio
            if (actualTileID == 0) {
                // si esta vacio agregamos null al vector de tiles
                this.tiles.push(null);
            } else {
                // encontramos el tile actual en la lista de tiles de layerDate
                let actualTile = this.findTileInPalette(actualTileID - 1 , tilePalette);
                // agregamos la posicion del tile al vector de tiles
                this.tiles.push(new Tile(i, j, this.zIndex, this.layerWidhth, this.layerHeight, actualTile));
            }
        }
    }
}

// devuelve la posicion del tile en la lsita de layerData
MapTileLayers.prototype.findTileInPalette = function (tileID, tilePalette){
    // recorremos la paleta
    for (i = 0 ; i < tilePalette.lenght ; i++ ) {
        if( tileID >= tilePalette[i].firstTileSobreUno - 1 && 
            tileID < tilePalette[i].totalTiles + tilePalette[i].firstTileSobreUno + 1 ){
                return tilePalette[i].Tiles[Math.abs(tilePalette[i].firstTileSobreUno - 1 - tileID)];
        }
    }
    throw("el tile con el ID "+tileID+"no existe en la paleta");
}