// Variables to track the playing states
let isPlayingFirst = false;
let isPlayingSecond = false;

// Get the button elements
const firstButton = document.getElementById('fixSpeakerBtn');
const secondButton = document.getElementById('vibrationBtn');

// Load the first audio file
const firstAudio = new Audio('/asset/Wateroutspeakers.mp3');
firstAudio.loop = true;

// Load the second audio file
const secondAudio = new Audio('/asset/Vibration Sound.mp3');
secondAudio.loop = true;

// Click event for first button
firstButton.addEventListener('click', () => {
  if (!isPlayingFirst) {
    // Stop second audio if it's playing
    if (isPlayingSecond) {
      secondAudio.pause();
      secondAudio.currentTime = 0;
      isPlayingSecond = false;
      secondButton.classList.remove('blink');
    }

    // Play first audio
    firstAudio.play().catch((error) => console.error('Audio play error:', error));
    isPlayingFirst = true;
    firstButton.classList.add('blink');
  } else {
    // Stop first audio
    firstAudio.pause();
    firstAudio.currentTime = 0;
    isPlayingFirst = false;
    firstButton.classList.remove('blink');
  }
});

// Click event for second button
secondButton.addEventListener('click', () => {
  if (!isPlayingSecond) {
    // Stop first audio if it's playing
    if (isPlayingFirst) {
      firstAudio.pause();
      firstAudio.currentTime = 0;
      isPlayingFirst = false;
      firstButton.classList.remove('blink');
    }

    // Play second audio
    secondAudio.play().catch((error) => console.error('Audio play error:', error));
    isPlayingSecond = true;
    secondButton.classList.add('blink');
  } else {
    // Stop second audio
    secondAudio.pause();
    secondAudio.currentTime = 0;
    isPlayingSecond = false;
    secondButton.classList.remove('blink');
  }
});
