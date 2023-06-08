<?php

$date = new DateTime();

$jsFiles = array (
    "Point.js",
    "Sprite.js",
    "js/ajax.js",
    "js/gamepad.js",
    "js/keyboard.js",
    "js/Rectangle.js",
    "js/dimension.js",
    "js/mainLoop.js",
    "js/inicio.js"
);


foreach ($jsFiles as $file) {
    echo '<script src="' . $file . '?' . $date->getTimestamp() . '" ></script>';
}