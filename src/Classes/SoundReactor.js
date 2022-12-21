import RAF from "../Utils/RAF";

class SoundReactor {
  constructor(audioUrl) {
    this.ctx = null;
    this.audio = null;
    this.audioSource = null;
    this.analyser = null;
    this.fdata = null;
    this.url = audioUrl;
    this.playFlag = false;
    this.initFlag = false;
    this.bind();
  }

  init() {
    this.ctx = new AudioContext();
    this.audio = new Audio(this.url);
    this.audioSource = this.ctx.createMediaElementSource(this.audio);
    this.analyser = this.ctx.createAnalyser();
    this.analyser.smoothingTimeConstant = 0.8;

    this.audioSource.connect(this.analyser);
    this.audioSource.connect(this.ctx.destination);
    this.fdata = new Uint8Array(this.analyser.frequencyBinCount);
    this.audio.currentTime = 0;
    this.audio.volume = 0.15;
    this.audio.loop = true;
    this.initFlag = true;
  }

  play() {
    if (this.initFlag) {
      this.audio.play();
      this.playFlag = true;
      RAF.subscribe("audioReactorUpdate", this.update);
    }
  }

  pause() {
    if (this.initFlag) {
      this.audio.pause();
      this.playFlag = false;
      RAF.unsubscribe("audioReactorUpdate");
    }
  }

  update() {
    this.analyser.getByteFrequencyData(this.fdata);
  }

  bind() {
    this.update = this.update.bind(this);
    this.init = this.init.bind(this);
    this.pause = this.pause.bind(this);
    this.play = this.play.bind(this);
  }
}

const _instance = new SoundReactor("./music/argentinaSong.mp3");
export default _instance;
