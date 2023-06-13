function StateWorldMap (IdState) {
    let that = this;
    this.mapReady = false;
    this.map = null;
    ajax.fileLoad("mapas/prado_1.json", function (jsonObject) {
        that.map = new GameMap(jsonObject);
        console.log("mapa cargado");
    });
}

StateWorldMap.prototype.update = function () {
    if (!this.mapReady) {
        return;
    }
    this.map.update();
}

StateWorldMap.prototype.draw = function () {
    if (!this.mapReady) {
        return;
    }
    this.map.draw();
}