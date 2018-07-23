window.addEventListener('keydown', function (e) {
    // console.log(e.keyCode);
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!audio) return; // stop the function
    console.log(audio);
    audio.currentTime = 0; // rewind audio file to start
    audio.play();
    console.log(key);
});


