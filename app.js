const app = document.getElementById('app');
const IMG = f => 'images/' + f;
const esc = s => String(s).replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const LANGS = { id: 'Indonesia', en: 'English', ar: 'العربية' };
const UI = {
  id: { title: 'Dongeng {A} & {B}', tag: 'Cerita kecil tentang kita berdua, serigala dan kelinci yang berbagi satu bulan.', music: 'Musik', to: 'Untuk {B}', open: 'Buka', made: 'Dibuat dengan ♡ oleh {A}, untuk {B}', pick: '♡ pilih ceritamu ♡', soon: 'Segera hadir', pages: n => n + ' halaman', ep: 'Episode', all: 'Daftar episode', prev: 'Kembali', next: 'Lanjut', fin: 'Selesai', done: n => `Episode ${n} selesai`, more: 'Mau lanjut ke episode berikutnya?', none: 'Episode berikutnya segera hadir.', nx: 'Episode berikutnya', alt: 'Serigala dan kelinci menatap bulan' },
  en: { title: 'The Tale of {A} & {B}', tag: 'A little story about the two of us, a wolf and a rabbit sharing one moon.', music: 'Music', to: 'For {B}', open: 'Open', made: 'Made with ♡ by {A}, for {B}', pick: '♡ pick your story ♡', soon: 'Coming soon', pages: n => n + ' pages', ep: 'Episode', all: 'All episodes', prev: 'Back', next: 'Next', fin: 'Finish', done: n => `Episode ${n} finished`, more: 'Ready for the next episode?', none: 'The next episode is coming soon.', nx: 'Next episode', alt: 'A wolf and a rabbit looking at the moon' },
  ar: { title: 'حكاية {A} و{B}', tag: 'قصة صغيرة عنّا نحن الاثنين، ذئب وأرنب يتشاركان قمرًا واحدًا.', music: 'الموسيقى', to: 'إلى {B}', open: 'افتح', made: 'صُنع بحب ♡ من {A} إلى {B}', pick: '♡ اختر حكايتك ♡', soon: 'قريبًا', pages: n => n + ' صفحات', ep: 'الحلقة', all: 'كل الحلقات', prev: 'السابق', next: 'التالي', fin: 'إنهاء', done: n => `انتهت الحلقة ${n}`, more: 'هل تريد الانتقال إلى الحلقة التالية؟', none: 'الحلقة التالية قريبًا.', nx: 'الحلقة التالية', alt: 'ذئب وأرنب ينظران إلى القمر' }
};
let lang = 'id', ep = 0, pg = 0, done = false, opened = false;
try { const s = localStorage.getItem('lang'); if (UI[s]) lang = s; } catch (e) {}
const t = x => (x && typeof x === 'object') ? (x[lang] || x.id || '') : (x || '');
const sub = v => v.replace(/\{A\}/g, t(SITE.from)).replace(/\{B\}/g, t(SITE.for));
const u = () => { const o = {}; for (const k in UI[lang]) { const v = UI[lang][k]; o[k] = typeof v === 'string' ? sub(v) : v; } return o; };
const isRead = () => /^#\/\d+$/.test(location.hash);

function applyLang() {
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  document.title = u().title;
}
const LB = () => `<div class="lang"><button class="pill" id="mus" aria-pressed="${FX.on}">♪ ${esc(u().music)}</button>${Object.keys(LANGS).map(k => `<button class="pill" data-lang="${k}" aria-pressed="${k === lang}">${LANGS[k]}</button>`).join('')}</div>`;
function bindLang() {
  const m = $('mus'); if (m) m.onclick = () => { FX.toggle(); m.setAttribute('aria-pressed', FX.on); };
  app.querySelectorAll('[data-lang]').forEach(b => b.onclick = () => {
    lang = b.dataset.lang;
    try { localStorage.setItem('lang', lang); } catch (e) {}
    applyLang(); done ? finish() : isRead() ? reader() : home();
  });
}
const $ = id => document.getElementById(id);

function cover() {
  const L = u();
  app.innerHTML = `<div class="wrap cover">${LB()}<div class="letter">
    <div class="halo"><img src="${IMG('berdua-bulan.png')}" alt="${esc(L.alt)}"><span class="hearts" aria-hidden="true"><i>♡</i><i>♡</i><i>♡</i><i>♡</i><i>♡</i></span></div>
    <p class="to">${esc(L.to)}</p><h1>${esc(L.title)}</h1>
    <p class="note">${esc(t(SITE.letter))}</p><p class="from">— ${esc(t(SITE.from))}</p>
    <button class="pill big" id="open">${esc(L.open)} ♡</button></div></div>`;
  $('open').onclick = () => { opened = true; if (FX.want()) FX.start(); home(); scrollTo(0, 0); };
  bindLang();
}

function home() {
  if (!opened) return cover();
  const L = u();
  app.innerHTML = `<div class="wrap">${LB()}
    <header class="hero">
      <div class="halo"><img src="${IMG('berdua-bulan.png')}" alt="${esc(L.alt)}"><span class="hearts" aria-hidden="true"><i>♡</i><i>♡</i><i>♡</i><i>♡</i><i>♡</i></span></div>
      <h1>${esc(L.title)}</h1>
      <p>${esc(L.tag)}</p>
    </header>
    <p class="sep" aria-hidden="true">${esc(L.pick)}</p>
    <ol class="trail">${EPISODES.map((e, i) => `<li style="--i:${i}"><button class="stop ${e.soon ? 'soon' : ''}" ${e.soon ? 'disabled' : `data-ep="${i}"`}>
      <span class="bubble"><img src="${IMG(e.cover)}" alt="" loading="lazy"><b class="no">${i + 1}</b></span>
      <span class="lbl"><h3>${esc(t(e.title))}</h3><small>${e.soon ? esc(L.soon) : esc(L.pages(e.pages.length))}</small></span></button></li>`).join('')}</ol><p class="foot">${esc(L.made)}</p></div>`;
  app.querySelectorAll('[data-ep]').forEach(b => b.onclick = () => { location.hash = '#/' + (+b.dataset.ep + 1); });
  bindLang();
}

function reader() {
  const L = u(), e = EPISODES[ep], p = e.pages[pg], last = pg === e.pages.length - 1;
  app.innerHTML = `<div class="wrap">${LB()}
    <div class="top"><button class="pill" id="back">${esc(L.all)}</button><h2 class="ttl">${esc(L.ep)} ${ep + 1}: ${esc(t(e.title))}</h2></div>
    <section class="stage"><div class="art"><img src="${IMG(p.img)}" alt=""></div><p class="say" aria-live="polite">${esc(t(p.text))}</p></section>
    <div class="nav"><button class="pill" id="prev" ${pg ? '' : 'disabled'}>${esc(L.prev)}</button>
      <div class="dots">${e.pages.map((_, i) => `<i class="${i === pg ? 'on' : ''}"></i>`).join('')}</div>
      <button class="pill" id="next">${esc(last ? L.fin : L.next)}</button></div></div>`;
  $('back').onclick = () => location.hash = '#/';
  $('prev').onclick = () => go(-1);
  $('next').onclick = () => go(1);
  bindLang();
}

function finish() {
  const L = u(), n = EPISODES[ep + 1] && !EPISODES[ep + 1].soon;
  app.innerHTML = `<div class="wrap">${LB()}<div class="hero end">
    <img src="${IMG('pelukan.png')}" alt=""><h1>${esc(L.done(ep + 1))}</h1>
    <p>${esc(n ? L.more : L.none)}</p>
    ${n ? `<button class="pill" id="nx">${esc(L.nx)}</button>` : ''}
    <button class="pill" id="hm">${esc(L.all)}</button></div></div>`;
  if (n) $('nx').onclick = () => location.hash = '#/' + (ep + 2);
  $('hm').onclick = () => location.hash = '#/';
  bindLang();
}

function go(d) {
  if (pg + d >= EPISODES[ep].pages.length) { done = true; finish(); return; }
  pg = Math.max(0, pg + d); reader();
}

function route() {
  const m = location.hash.match(/^#\/(\d+)$/), i = m ? +m[1] - 1 : -1;
  done = false; applyLang();
  if (EPISODES[i] && !EPISODES[i].soon) { ep = i; pg = 0; reader(); scrollTo(0, 0); } else home();
}
window.addEventListener('hashchange', route);

const flip = () => lang === 'ar' ? -1 : 1; /* di bahasa Arab arah baca dibalik */
document.addEventListener('keydown', e => {
  if (!isRead() || done) return;
  if (e.key === 'ArrowRight') go(flip());
  if (e.key === 'ArrowLeft') go(-flip());
});
let sx = null;
document.addEventListener('touchstart', e => sx = e.touches[0].clientX, { passive: true });
document.addEventListener('touchend', e => {
  if (sx === null || !isRead() || done) return;
  const dx = e.changedTouches[0].clientX - sx; sx = null;
  if (Math.abs(dx) > 60) go((dx < 0 ? 1 : -1) * flip());
}, { passive: true });
route();
