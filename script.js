const inputs = document.querySelectorAll('.controls input');

    function handleUpdate() {
      const suffix = this.dataset.sizing || '';
      document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
    }

    inputs.forEach(input => input.addEventListener('change', handleUpdate));
    inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));


// ////
const video = document.querySelector('.player__video');
const toggleButton = document.querySelector('.player__button.toggle');
const rewindButton = document.querySelector('.rewind');
const skipButton = document.querySelector('.skip');
const volumeInput = document.querySelector('.volume');
const playbackSpeedInput = document.querySelector('.playbackSpeed');
const progress = document.querySelector('.progress__filled');

toggleButton.addEventListener('click', () => {
    if (video.paused) {
        video.play();
        toggleButton.textContent = '►';
    } else {
        video.pause();
        toggleButton.textContent = '❚ ❚';
    }
});

rewindButton.addEventListener('click', () => {
    video.currentTime -= 10;
});

skipButton.addEventListener('click', () => {
    video.currentTime += 25;
});

volumeInput.addEventListener('input', (e) => {
    video.volume = e.target.value;
});

playbackSpeedInput.addEventListener('input', (e) => {
    video.playbackRate = e.target.value;
});

video.addEventListener('timeupdate', () => {
    const percent = (video.currentTime / video.duration) * 100;
    progress.style.width = `${percent}%`;
});