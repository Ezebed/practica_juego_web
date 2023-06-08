<?php

$date = new DateTime();

$jsFiles = array (
    "js/Rectangle.js",
    "Point.js",
    "Sprite.js",
    "TilePalette.js",
    "Tile.js",
    "mapTileLayers.js",
    "js/ajax.js",
    "js/gamepad.js",
    "js/keyboard.js",
    "js/dimension.js",
    "js/mainLoop.js",
    "js/inicio.js"
);


foreach ($jsFiles as $file) {
    echo '<script src="' . $file . '?' . $date->getTimestamp() . '" ></script>';
}