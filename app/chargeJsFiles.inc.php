<?php

$date = new DateTime();

$jsFiles = array (
    "js/stateList.js",
    "js/StateWorldMap.js",
    "js/Rectangle.js",
    "js/Point.js",
    "js/Sprite.js",
    "js/TilePalette.js",
    "js/Tile.js",
    "js/ajax.js",
    "js/mapTileLayers.js",
    "js/stateMachine.js",
    "js/GameMap.js",
    "js/gamepad.js",
    "js/keyboard.js",
    "js/dimension.js",
    "js/mainLoop.js",
    "js/inicio.js"
);


foreach ($jsFiles as $file) {
    echo '<script src="' . $file . '?' . $date->getTimestamp() . '" ></script>';
}