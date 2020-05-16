document.addEventListener('keydown', function(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    document.querySelector(`div[data-key="${e.keyCode}"]`).classList.add('playing');
    audio.currentTime=0;
    audio.play();
  });

  const keyNodes = document.querySelectorAll('.key');

  keyNodes.forEach(key =>  key.addEventListener('transitionend', (e) => {
    if(e.propertyName !== 'transform') return;
    key.classList.remove('playing');
  }));