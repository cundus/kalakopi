// Real Web Audio API ambient sound generator for KALA Atmosphere Radio
// Produces relaxing cafe warmth: vinyl soft crackle + mellow lo-fi chords

class AmbientSoundEngine {
  private ctx: AudioContext | null = null;
  private isPlaying = false;
  private masterGain: GainNode | null = null;
  private timer: number | null = null;
  private listeners: Array<(playing: boolean) => void> = [];

  public subscribe(fn: (playing: boolean) => void) {
    this.listeners.push(fn);
    return () => {
      this.listeners = this.listeners.filter(l => l !== fn);
    };
  }

  private notify() {
    this.listeners.forEach(fn => fn(this.isPlaying));
  }

  public getStatus() {
    return this.isPlaying;
  }

  public async toggle(): Promise<boolean> {
    if (this.isPlaying) {
      this.stop();
      return false;
    } else {
      await this.start();
      return true;
    }
  }

  public async start() {
    if (this.isPlaying) return;

    const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!AudioContextClass) return;

    if (!this.ctx) {
      this.ctx = new AudioContextClass();
    }

    if (this.ctx.state === 'suspended') {
      await this.ctx.resume();
    }

    const now = this.ctx.currentTime;
    this.masterGain = this.ctx.createGain();
    this.masterGain.gain.setValueAtTime(0.001, now);
    this.masterGain.gain.exponentialRampToValueAtTime(0.22, now + 1.5);
    this.masterGain.connect(this.ctx.destination);

    // 1. Vinyl Atmosphere Pink Noise & Room Warmth
    this.startVinylNoise(this.masterGain);

    // 2. Chilled Lo-Fi Chord Sequence (Dmaj7 -> F#m7 -> Gmaj7 -> A7sus4)
    this.startLofiHarmonics(this.masterGain);

    this.isPlaying = true;
    this.notify();
  }

  private startVinylNoise(destination: GainNode) {
    if (!this.ctx) return;
    const bufferSize = this.ctx.sampleRate * 2;
    const noiseBuffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const output = noiseBuffer.getChannelData(0);

    let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;
    for (let i = 0; i < bufferSize; i++) {
      const white = Math.random() * 2 - 1;
      b0 = 0.99886 * b0 + white * 0.0555179;
      b1 = 0.99332 * b1 + white * 0.0750759;
      b2 = 0.96900 * b2 + white * 0.1538520;
      b3 = 0.86650 * b3 + white * 0.3104856;
      b4 = 0.55000 * b4 + white * 0.5329522;
      b5 = -0.7616 * b5 - white * 0.0168980;
      output[i] = (b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362) * 0.02;
      b6 = white * 0.115926;
      // Occasional gentle vinyl needle tick
      if (Math.random() < 0.0003) {
        output[i] += (Math.random() - 0.5) * 0.25;
      }
    }

    const whiteNoise = this.ctx.createBufferSource();
    whiteNoise.buffer = noiseBuffer;
    whiteNoise.loop = true;

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(800, this.ctx.currentTime);

    const noiseGain = this.ctx.createGain();
    noiseGain.gain.setValueAtTime(0.08, this.ctx.currentTime);

    whiteNoise.connect(filter);
    filter.connect(noiseGain);
    noiseGain.connect(destination);
    whiteNoise.start();
  }

  private startLofiHarmonics(destination: GainNode) {
    if (!this.ctx) return;

    // Chord progressions in frequency (Hz)
    // Warm Lo-Fi jazz chords: Dmaj9, F#m7, Gmaj7, A6
    const chords = [
      [146.83, 220.00, 277.18, 329.63], // D, A, C#, E
      [185.00, 220.00, 277.18, 369.99], // F#, A, C#, F#
      [196.00, 246.94, 293.66, 369.99], // G, B, D, F#
      [220.00, 277.18, 329.63, 440.00], // A, C#, E, A
    ];

    let chordIdx = 0;

    const playChordStep = () => {
      if (!this.isPlaying || !this.ctx || !this.masterGain) return;

      const chord = chords[chordIdx];
      chordIdx = (chordIdx + 1) % chords.length;

      chord.forEach((freq, i) => {
        if (!this.ctx || !this.masterGain) return;
        const osc = this.ctx.createOscillator();
        const noteGain = this.ctx.createGain();
        const filter = this.ctx.createBiquadFilter();

        osc.type = i === 0 ? 'triangle' : 'sine';
        osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(750, this.ctx.currentTime);

        const now = this.ctx.currentTime;
        const noteDuration = 4.0;
        noteGain.gain.setValueAtTime(0.0001, now);
        noteGain.gain.linearRampToValueAtTime(0.045 / (i + 1), now + 0.8);
        noteGain.gain.exponentialRampToValueAtTime(0.0001, now + noteDuration);

        osc.connect(filter);
        filter.connect(noteGain);
        noteGain.connect(destination);

        osc.start(now);
        osc.stop(now + noteDuration);
      });

      this.timer = window.setTimeout(playChordStep, 4200);
    };

    playChordStep();
  }

  public stop() {
    if (!this.isPlaying) return;
    if (this.timer) {
      clearTimeout(this.timer);
      this.timer = null;
    }

    if (this.ctx && this.masterGain) {
      const now = this.ctx.currentTime;
      this.masterGain.gain.setValueAtTime(this.masterGain.gain.value, now);
      this.masterGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.8);
      setTimeout(() => {
        if (this.ctx && !this.isPlaying) {
          this.ctx.suspend().catch(() => {});
        }
      }, 850);
    }

    this.isPlaying = false;
    this.notify();
  }
}

export const ambientSound = new AmbientSoundEngine();
