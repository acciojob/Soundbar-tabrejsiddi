const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"];

let currentAudio = null;
document.querySelectorAll(".btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const soundName = btn.dataset.sound;
    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    }

    currentAudio = new Audio(`sounds/${soundName}.mp3`);
    currentAudio.play();
  });
});

document.querySelector(".stop").addEventListener("click", () => {
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
  }
});