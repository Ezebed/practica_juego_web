var keyboard = {
    keys: new Array(),
    start: function () {
        document.onkeydown = keyboard.saveKeyboard;
    },
    saveKeyboard: function (event) {
        keyboard.keys.push(event.key);
        console.log(event.key);
    },
    keyPressed: function (keyCode) {
        return (keyboard.keys.indexOf(keyCode) !== -1) ? true : false;
    },
    restart: function () {
        keyboard.keys = new Array();
    }
}