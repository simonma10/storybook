


export function playMusic () {
  if(musicEnabled) {
    music = this.game.add.audio('music', 0.10, true);
    music.play();
  }
}

export function stopMusic() {
  if(music !== undefined && music.isPlaying)
    music.stop();
}

export function playSpeech(sampleName) {
  sample = sampleName;

  if(speech !== undefined && speech.isPlaying)
    speech.stop();

  if(speechEnabled) {
    window.setTimeout(function () {
      speech = this.game.add.audio(sample);
      speech.play();
    }, 1000);
  }
}

export function stopSpeech () {
  if(speech !== undefined && speech.isPlaying)
    speech.stop();
}

export function playSound(sampleName, loop) {
  if(sound !== undefined && sound.isPlaying)
    sound.stop();

  if(sfxEnabled) {
    if(loop === true)
      sound = game.add.audio(sampleName, 0.9, true);
    else
      sound = game.add.audio(sampleName);

    sound.play()
  }
}

export function stopSound () {
  if(sound !== undefined && sound.isPlaying)
    sound.stop();
}
