let currentAudio = null;

document.querySelectorAll(".btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const soundName = btn.dataset.sound;
    if (currentAudio) {
      currentAudio.pause();
      currentAudio.remove();
    }
    const audio = document.createElement("audio");
    audio.src = `sounds/${soundName}.mp3`;
    audio.autoplay = true;

    document.body.appendChild(audio);

    currentAudio = audio;
  });
});

document.querySelector(".stop").addEventListener("click", () => {
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.remove();
    currentAudio = null;
  }
});