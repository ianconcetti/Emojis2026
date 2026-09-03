document.addEventListener("DOMContentLoaded", loadEmojis);


// Carga un emoji en forma aleatoria
function loadEmojis() {
    // PASO 1: Crear la lista de opciones
    let allEmojis = ["✌", "😂", "😝", "😁", "😱", "👉", "🙌", "🍻", "🔥", "🌈", "☀", "🎈", "🌹", "💄", "🎀", "⚽", "🎾", "🏁", "😡", "👿", "🐻", "🐶", "🐬", "🐟", "🍀", "👀", "🚗", "🍎", "💝", "💙", "👌", "❤", "😍", "😉", "😓", "😳", "💪", "💩", "🍸", "🔑", "💖", "🌟", "🎉", "🌺", "🎶", "👠", "🏈", "⚾", "🏆", "👽", "💀", "🐵", "🐮", "🐩", "🐎", "💣", "👃", "👂", "🍓", "💘", "💜", "👊", "💋", "😘", "😜", "😵", "🙏", "👋", "🚽", "💃", "💎", "🚀", "🌙", "🎁", "⛄", "🌊", "⛵", "🏀", "🎱", "💰", "👶", "👸", "🐰", "🐷", "🐍", "🐫", "🔫", "👄", "🚲", "🍉", "💛", "💚"];

    // PASO 2: Elegir una posición al azar
    let position = randomInteger(0, allEmojis.length-1);

    // PASO 3: Buscar el elemento HTML (id emojis)y mostrar el emoji
    document.getElementById("emojis").innerHTML = allEmojis[position];
}

//Devuelve un número aleatorio dentro de un rango de valores definido por min y max.
function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}