function rain() {
    let cloud = document.querySelector('.cloud');
    let e = document.createElement('div');

    e.classList.add('drop');
    cloud.appendChild(e);

    let left = Math.floor(Math.random() * 290);
    let size = Math.round(Math.random() * 2) * 1.5;
    let duration = Math.random() * 1;

    e.innerText = '❤';
    e.style.left = left + 'px';
    e.style.fontSize = 0.5 + size + 'em';
    e.style.animationDuration = 1 + duration + 's';

    setTimeout(function () {
        cloud.removeChild(e)
    }, 2000)
}

setInterval(function () {
    rain()
}, 20)

// Reproducir la música al tocar/hacer click en la nube
const cloudEl = document.querySelector('.cloud');
const musica = document.getElementById('musica');

cloudEl.addEventListener('click', function () {
    if (musica.paused) {
        musica.play().catch(function (err) {
            console.log('No se pudo reproducir el audio:', err);
        });
    } else {
        musica.pause();
    }
});
