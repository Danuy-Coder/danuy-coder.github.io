/* ===== EFEK: langit (salju/hujan/angin/pagi), musik, dan suara latar =====
   Semua suara dibuat langsung oleh browser (tanpa file). Lagu sendiri: folder music/ (SITE.music atau music di episode).
   Suara latar sendiri: folder sounds/, lalu tulis nama file di sound: "hujan.mp3" */
const Sky = (() => {
  const c = document.getElementById('snow'), x = c.getContext('2d');
  let w, h, P = [], mode = 'snow';
  const CFG = { snow: 1, rain: 1.6, wind: .7, morning: .6 };
  const rs = () => { w = c.width = innerWidth; h = c.height = innerHeight; };
  rs(); addEventListener('resize', rs);
  const mk = top => ({ x: Math.random() * w, y: top ? -20 : Math.random() * h, r: Math.random() * 2.2 + .8, v: Math.random() * .6 + .25, s: Math.random() * 6.28, heart: mode === 'snow' && Math.random() < .09 });
  const seed = () => { P = Array.from({ length: Math.round(Math.min(90, innerWidth / 14) * CFG[mode]) }, () => mk(false)); };
  function frame() {
    x.clearRect(0, 0, w, h);
    for (const p of P) {
      if (mode === 'rain') {
        p.y += 10 + p.v * 10; p.x -= 1.5; if (p.y > h) { p.y = -20; p.x = Math.random() * w + 40; }
        x.globalAlpha = .45; x.strokeStyle = '#bcd6ff'; x.lineWidth = 1; x.beginPath(); x.moveTo(p.x, p.y); x.lineTo(p.x - 1.5, p.y + 14); x.stroke();
      } else if (mode === 'wind') {
        p.x += 4 + p.v * 8; p.y += Math.sin(p.s += .03) * .6; if (p.x > w + 60) { p.x = -60; p.y = Math.random() * h; }
        x.globalAlpha = .35; x.strokeStyle = '#fff'; x.lineWidth = 1.5; x.beginPath(); x.moveTo(p.x, p.y); x.lineTo(p.x - 30 - p.r * 12, p.y); x.stroke();
      } else if (mode === 'morning') {
        p.y -= p.v * .5; p.x += Math.sin(p.s += .01) * .3; if (p.y < -10) { p.y = h + 10; p.x = Math.random() * w; }
        x.globalAlpha = .6; x.fillStyle = '#fff6d6'; x.beginPath(); x.arc(p.x, p.y, p.r, 0, 6.283); x.fill();
      } else {
        p.y += p.v; p.s += .01; p.x += Math.sin(p.s) * .4; if (p.y > h + 12) Object.assign(p, mk(true));
        x.globalAlpha = .45 + p.r / 6; x.fillStyle = p.heart ? '#9fcbff' : '#fff';
        if (p.heart) { x.font = p.r * 7 + 'px serif'; x.fillText('♡', p.x, p.y); } else { x.beginPath(); x.arc(p.x, p.y, p.r, 0, 6.283); x.fill(); }
      }
    }
    requestAnimationFrame(frame);
  }
  seed();
  if (!matchMedia('(prefers-reduced-motion: reduce)').matches) frame();
  return { set(m) { if (m !== mode) { mode = m; seed(); } } };
})();

const FX = (() => {
  const pref = k => { try { return localStorage.getItem(k) !== 'off'; } catch (e) { return true; } };
  const setPref = (k, v) => { try { localStorage.setItem(k, v ? 'on' : 'off'); } catch (e) {} };
  let ctx, master, rev, dly, playing = false, timer, nextChord = 0, step = 0, pos = 2, el = null, track = '';
  let wantM = pref('music'), wantS = pref('sfx'), unlocked = false, desired = [], act = {}, nbuf, curScene = '';
  const CH = [[130.81, 164.81, 196, 246.94], [110, 130.81, 164.81, 196], [87.31, 110, 130.81, 164.81], [98, 123.47, 146.83, 164.81]];
  const MEL = [523.25, 587.33, 659.25, 783.99, 880, 1046.5];
  const SCENES = { night: 'snow', morning: 'morning', rain: 'rain', wind: 'wind' };

  function init() {
    ctx = new (window.AudioContext || window.webkitAudioContext)();
    master = ctx.createGain(); master.gain.value = 0; master.connect(ctx.destination);
    const len = ctx.sampleRate * 3, buf = ctx.createBuffer(2, len, ctx.sampleRate);
    for (let c = 0; c < 2; c++) { const d = buf.getChannelData(c); for (let i = 0; i < len; i++) d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / len, 2.5); }
    rev = ctx.createConvolver(); rev.buffer = buf;
    const wet = ctx.createGain(); wet.gain.value = .7; rev.connect(wet); wet.connect(master);
    dly = ctx.createDelay(); dly.delayTime.value = .45;
    const fb = ctx.createGain(); fb.gain.value = .35; dly.connect(fb); fb.connect(dly); dly.connect(rev);
  }
  /* ---------- musik ---------- */
  function pad(fs, t, d) {
    fs.forEach(f => [-4, 4].forEach(det => {
      const o = ctx.createOscillator(), g = ctx.createGain(), lp = ctx.createBiquadFilter();
      o.frequency.value = f; o.detune.value = det; lp.type = 'lowpass'; lp.frequency.value = 900;
      g.gain.setValueAtTime(0, t); g.gain.linearRampToValueAtTime(.05, t + d * .4); g.gain.linearRampToValueAtTime(0, t + d + 1.5);
      o.connect(lp); lp.connect(g); g.connect(master); g.connect(rev); o.start(t); o.stop(t + d + 1.6);
    }));
  }
  function bell(f, t) {
    [[f, .12], [f * 2, .03]].forEach(([fr, a]) => {
      const o = ctx.createOscillator(), g = ctx.createGain();
      o.frequency.value = fr; g.gain.setValueAtTime(0, t); g.gain.linearRampToValueAtTime(a, t + .01); g.gain.exponentialRampToValueAtTime(.0001, t + 3);
      o.connect(g); g.connect(master); g.connect(dly); g.connect(rev); o.start(t); o.stop(t + 3.1);
    });
  }
  function tick() {
    if (!playing) return;
    const now = ctx.currentTime;
    if (now + 3 > nextChord) { nextChord = Math.max(now, nextChord); pad(CH[step++ % 4], nextChord, 8); nextChord += 8; }
    if (Math.random() < .75) { pos = Math.max(0, Math.min(5, pos + [-2, -1, -1, 1, 1, 2][Math.random() * 6 | 0])); bell(MEL[pos], now + .05); }
    timer = setTimeout(tick, 1100 + Math.random() * 1500);
  }
  const fade = (a, up, done) => {
    const i = setInterval(() => {
      a.volume = Math.max(0, Math.min(.5, a.volume + (up ? .02 : -.04)));
      if (up ? a.volume >= .5 : a.volume <= 0) { clearInterval(i); done && done(); }
    }, 60);
  };
  function ambientOn() { if (!ctx) init(); ctx.resume(); master.gain.cancelScheduledValues(ctx.currentTime); master.gain.linearRampToValueAtTime(.55, ctx.currentTime + 3); tick(); }
  function ambientOff() { clearTimeout(timer); if (ctx) { master.gain.cancelScheduledValues(ctx.currentTime); master.gain.linearRampToValueAtTime(0, ctx.currentTime + 1); } }
  function begin() {
    if (!track) return ambientOn();
    const a = el = new Audio('music/' + track); a.loop = true; a.volume = 0;
    a.onerror = () => { if (el === a) { el = null; ambientOn(); } }; /* file tidak ada: pakai musik bawaan */
    a.play().catch(() => {}); fade(a, true);
  }
  function end() { if (el) { const old = el; el = null; old.onerror = null; fade(old, false, () => old.pause()); } ambientOff(); }
  const start = () => { if (playing) return; playing = true; begin(); };
  const stop = () => { playing = false; end(); };

  /* ---------- suara latar (hujan, angin, burung, dll) ---------- */
  const noise = () => {
    if (!nbuf) { nbuf = ctx.createBuffer(1, ctx.sampleRate * 2, ctx.sampleRate); const d = nbuf.getChannelData(0); for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1; }
    const s = ctx.createBufferSource(); s.buffer = nbuf; s.loop = true; return s;
  };
  const filt = (type, f, q = 1) => { const b = ctx.createBiquadFilter(); b.type = type; b.frequency.value = f; b.Q.value = q; return b; };
  const amp = v => { const g = ctx.createGain(); g.gain.value = v; return g; };
  const chain = (src, nodes, out) => { let n = src; nodes.forEach(m => { n.connect(m); n = m; }); n.connect(out); };
  const lfo = (rate, depth, param) => { const o = ctx.createOscillator(), g = amp(depth); o.frequency.value = rate; o.connect(g); g.connect(param); o.start(); return o; };
  function tone(bus, t, f0, f1, peak, dur) {
    const o = ctx.createOscillator(), g = ctx.createGain();
    o.frequency.setValueAtTime(f0, t); o.frequency.exponentialRampToValueAtTime(f1, t + dur);
    g.gain.setValueAtTime(0, t); g.gain.linearRampToValueAtTime(peak, t + .01); g.gain.linearRampToValueAtTime(0, t + dur);
    chain(o, [g], bus); o.start(t); o.stop(t + dur + .02);
  }
  const SOUNDS = {
    rain(bus) { const a = noise(), b = noise(); chain(a, [filt('highpass', 800), filt('lowpass', 7000), amp(.3)], bus); chain(b, [filt('lowpass', 500), amp(.15)], bus); a.start(); b.start(); return [a, b]; },
    wind(bus) { const n = noise(), bp = filt('bandpass', 500, 1.5), g = amp(.35); chain(n, [bp, g], bus); n.start(); return [n, lfo(.12, 300, bp.frequency), lfo(.09, .2, g.gain)]; },
    water(bus, T) { const n = noise(); chain(n, [filt('bandpass', 1200, .8), amp(.14)], bus); n.start(); T.ids.push(setInterval(() => { if (Math.random() < .6) { const f = 300 + Math.random() * 500; tone(bus, ctx.currentTime, f, f * 2, .05, .1); } }, 240)); return [n]; },
    birds(bus, T) {
      const go = () => {
        if (T.dead) return;
        let t = ctx.currentTime + .02; const base = 2800 + Math.random() * 1800;
        for (let i = 0, n = 2 + (Math.random() * 3 | 0); i < n; i++, t += .11) tone(bus, t, base, base * (.8 + Math.random() * .6), .06, .09);
        T.ids.push(setTimeout(go, 500 + Math.random() * 2200));
      };
      go(); return [];
    },
    crickets(bus, T) { T.ids.push(setInterval(() => { for (let i = 0; i < 3; i++) tone(bus, ctx.currentTime + i * .09, 4400, 4400, .02, .03); }, 1100)); return []; }
  };
  function make(k) {
    if (/\.(mp3|ogg|wav|m4a)$/i.test(k)) {
      const a = new Audio('sounds/' + k); a.loop = true; a.volume = 0; a.play().catch(() => {}); fade(a, true);
      act[k] = { media: a, stop() { fade(a, false, () => a.pause()); } }; return;
    }
    if (!SOUNDS[k]) return;
    const T = { ids: [], dead: false }, bus = ctx.createGain();
    bus.gain.value = 0; bus.gain.linearRampToValueAtTime(1, ctx.currentTime + 1.5); bus.connect(ctx.destination);
    const nodes = SOUNDS[k](bus, T);
    act[k] = { stop() {
      T.dead = true; T.ids.forEach(id => { clearTimeout(id); clearInterval(id); });
      bus.gain.cancelScheduledValues(ctx.currentTime); bus.gain.linearRampToValueAtTime(0, ctx.currentTime + 1);
      setTimeout(() => nodes.forEach(n => { try { n.stop(); } catch (e) {} bus.disconnect(); }), 1300);
    } };
  }
  function applySfx() {
    const want = unlocked && wantS ? desired : [];
    if (!want.length && !Object.keys(act).length) return;
    if (!ctx) init();
    ctx.resume();
    Object.keys(act).forEach(k => { if (!want.includes(k)) { act[k].stop(); delete act[k]; } });
    want.forEach(k => { if (!act[k]) make(k); });
  }

  document.addEventListener('visibilitychange', () => {
    const hid = document.hidden;
    if (ctx) hid ? ctx.suspend() : ctx.resume();
    if (el) hid ? el.pause() : playing && el.play().catch(() => {});
    Object.values(act).forEach(a => a.media && (hid ? a.media.pause() : a.media.play().catch(() => {})));
  });

  return {
    want: () => wantM, wantSfx: () => wantS,
    unlock() { if (unlocked) return; unlocked = true; if (wantM) start(); applySfx(); },
    setMusic(v) { wantM = v; setPref('music', v); if (unlocked) v ? start() : stop(); },
    setSfx(v) { wantS = v; setPref('sfx', v); applySfx(); },
    setTrack(n) { n = n || ''; if (n === track) return; track = n; if (playing) { end(); begin(); } },
    sound(spec) { desired = [].concat(spec || []).flatMap(s => String(s).split(',')).map(s => s.trim()).filter(Boolean); applySfx(); },
    scene(n) { if (!SCENES[n]) n = 'night'; if (n === curScene) return; curScene = n; document.body.dataset.scene = n; Sky.set(SCENES[n]); }
  };
})();
