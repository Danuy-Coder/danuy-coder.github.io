/* ===== EFEK: salju + musik ambient =====
   Musik dibuat langsung oleh browser (tanpa file). Kalau mau lagu sendiri: taruh mp3 di folder music/
   lalu isi SITE.music di episodes.js, misalnya music: "lagu.mp3" */
(function () { /* salju & hati jatuh */
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const c = document.getElementById('snow'), x = c.getContext('2d'); let w, h; const P = [];
  const rs = () => { w = c.width = innerWidth; h = c.height = innerHeight; };
  rs(); addEventListener('resize', rs);
  const mk = top => ({ x: Math.random() * w, y: top ? -12 : Math.random() * h, r: Math.random() * 2.2 + .8, v: Math.random() * .6 + .25, s: Math.random() * 6.28, heart: Math.random() < .09 });
  for (let i = 0, n = Math.round(Math.min(90, innerWidth / 14)); i < n; i++) P.push(mk(false));
  (function f() {
    x.clearRect(0, 0, w, h);
    for (const p of P) {
      p.y += p.v; p.s += .01; p.x += Math.sin(p.s) * .4;
      if (p.y > h + 12) Object.assign(p, mk(true));
      x.globalAlpha = .45 + p.r / 6; x.fillStyle = p.heart ? '#f5c2c7' : '#fff';
      if (p.heart) { x.font = p.r * 7 + 'px serif'; x.fillText('♡', p.x, p.y); }
      else { x.beginPath(); x.arc(p.x, p.y, p.r, 0, 6.283); x.fill(); }
    }
    requestAnimationFrame(f);
  })();
})();

const FX = (() => {
  let ctx, master, rev, dly, playing = false, timer, nextChord = 0, step = 0, pos = 2, el = null;
  const CH = [[130.81, 164.81, 196, 246.94], [110, 130.81, 164.81, 196], [87.31, 110, 130.81, 164.81], [98, 123.47, 146.83, 164.81]];
  const MEL = [523.25, 587.33, 659.25, 783.99, 880, 1046.5];
  const want = () => { try { return localStorage.getItem('music') !== 'off'; } catch (e) { return true; } };
  const save = v => { try { localStorage.setItem('music', v ? 'on' : 'off'); } catch (e) {} };

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
  function start() {
    if (playing) return; playing = true;
    if (typeof SITE !== 'undefined' && SITE.music) {
      el = el || Object.assign(new Audio('music/' + SITE.music), { loop: true, volume: .5 }); el.play().catch(() => {}); return;
    }
    if (!ctx) init();
    ctx.resume(); master.gain.cancelScheduledValues(ctx.currentTime);
    master.gain.linearRampToValueAtTime(.55, ctx.currentTime + 3); tick();
  }
  function stop() {
    playing = false; clearTimeout(timer);
    if (el) el.pause();
    if (ctx) { master.gain.cancelScheduledValues(ctx.currentTime); master.gain.linearRampToValueAtTime(0, ctx.currentTime + 1); }
  }
  document.addEventListener('visibilitychange', () => {
    if (!ctx) return;
    if (document.hidden) ctx.suspend(); else if (playing) ctx.resume();
  });
  return { want, start, stop, get on() { return playing; }, toggle() { playing ? stop() : start(); save(playing); } };
})();
