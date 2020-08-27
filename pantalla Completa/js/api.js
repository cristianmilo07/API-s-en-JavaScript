const abriBtn = document.querySelector('#abrir-pantalla-completa');
const cerrarBtn = document.querySelector('#cerrar-pantalla-completa');

abriBtn.addEventListener('click', pantallaCompleta);
cerrarBtn.addEventListener('click', cerrarPantallaCompleta);

function pantallaCompleta(){
    document.documentElement.requestFullscreen();
}

function cerrarPantallaCompleta(){
    document.exitFullscreen();
}
