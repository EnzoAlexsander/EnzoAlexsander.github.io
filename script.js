let music = document.getElementById('song');

function retroceder() {
    music.currentTime -= 15;
}

function avancar() {
    music.currentTime += 15;
}

function diminuir_vel() {
    music.playbackRate -= 0.1;
}

function aumentar_vel() {
    music.playbackRate += 0.1;
}

function play() {
    music.play();
}

function pause() {
    music.pause();
}

function stop() {
    music.pause();
    music.currentTime = 0;
}
