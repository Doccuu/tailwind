document.getElementById('btn').addEventListener('click', function() {
    let audio = document.getElementById('dommeraudio');
    audio.play();
    const akuli = document.getElementById("akuli");
    akuli.classList.add('hidden');
    let imgegg = document.getElementById('imgegg');
    imgegg.classList.remove('hidden');
});

