# djounagalerie
E-commerce d'art - Plateforme de galerie en ligne
<!DOCTYPE html>

<html lang="fr">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Galerie d'Art — Côte d'Ivoire</title>
  <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Jost:wght@300;400;500;600&display=swap" rel="stylesheet"/>
  <style>
    :root {
      --peach: #FFC5AB;
      --peach-light: #FFE8DC;
      --peach-dark: #E8A488;
      --white: #FFFCFA;
      --off-white: #FFF5F0;
      --dark: #1A1210;
      --mid: #5C3D2E;
      --light-text: #9C7060;
      --border: rgba(255,197,171,0.4);
    }

```
* { margin: 0; padding: 0; box-sizing: border-box; }

body {
  font-family: 'Jost', sans-serif;
  background: var(--white);
  color: var(--dark);
  min-height: 100vh;
  overflow-x: hidden;
}

/* ─── OVERLAY MODAL ─── */
#overlay {
  position: fixed; inset: 0;
  background: rgba(26,18,16,0.72);
  backdrop-filter: blur(6px);
  z-index: 1000;
  display: flex; align-items: center; justify-content: center;
  animation: fadeIn .4s ease;
}
#overlay.hidden { display: none; }

.modal {
  background: var(--white);
  border-radius: 4px;
  padding: 52px 56px;
  max-width: 520px; width: 90%;
  text-align: center;
  position: relative;
  border-top: 5px solid var(--peach);
  box-shadow: 0 32px 80px rgba(26,18,16,0.28);
  animation: slideUp .45s cubic-bezier(.22,.9,.36,1);
}

.modal-logo {
  font-family: 'Cormorant Garamond', serif;
  font-size: 13px; letter-spacing: 5px;
  text-transform: uppercase; color: var(--light-text);
  margin-bottom: 28px;
}

.modal h1 {
  font-family: 'Cormorant Garamond', serif;
  font-size: 38px; font-weight: 300;
  line-height: 1.15; margin-bottom: 10px;
}
.modal h1 em { font-style: italic; color: var(--peach-dark); }

.modal p {
  font-size: 14px; color: var(--light-text);
  line-height: 1.7; margin-bottom: 40px;
}

.modal-btns {
  display: flex; gap: 16px; justify-content: center; flex-wrap: wrap;
}

.btn-primary {
  background: var(--peach);
  color: var(--dark);
  border: none; padding: 14px 32px;
  font-family: 'Jost', sans-serif;
  font-size: 13px; font-weight: 600;
  letter-spacing: 2px; text-transform: uppercase;
  cursor: pointer; border-radius: 2px;
  transition: all .25s;
}
.btn-primary:hover { background: var(--peach-dark); transform: translateY(-2px); box-shadow: 0 8px 20px rgba(255,197,171,.5); }

.btn-secondary {
  background: transparent;
  color: var(--mid);
  border: 1.5px solid var(--border);
  padding: 14px 32px;
  font-family: 'Jost', sans-serif;
  font-size: 13px; font-weight: 500;
  letter-spacing: 2px; text-transform: uppercase;
  cursor: pointer; border-radius: 2px;
  transition: all .25s;
}
.btn-secondary:hover { border-color: var(--peach); color: var(--dark); transform: translateY(-2px); }

/* ─── REGISTER MODAL ─── */
#register-modal {
  position: fixed; inset: 0;
  background: rgba(26,18,16,0.75);
  backdrop-filter: blur(8px);
  z-index: 1100;
  display: flex; align-items: center; justify-content: center;
}
#register-modal.hidden { display: none; }

.register-box {
  background: var(--white);
  border-radius: 4px;
  width: min(600px, 94vw);
  max-height: 90vh; overflow-y: auto;
  border-top: 5px solid var(--peach);
  box-shadow: 0 40px 100px rgba(26,18,16,0.3);
  animation: slideUp .4s cubic-bezier(.22,.9,.36,1);
}

.register-header {
  padding: 40px 48px 24px;
  border-bottom: 1px solid var(--border);
}
.register-header h2 {
  font-family: 'Cormorant Garamond', serif;
  font-size: 30px; font-weight: 400;
}
.register-header p { font-size: 13px; color: var(--light-text); margin-top: 6px; }

.register-form { padding: 32px 48px 44px; }

.form-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
.form-full { grid-column: 1/-1; }

.field { display: flex; flex-direction: column; gap: 6px; }
.field label {
  font-size: 11px; font-weight: 600;
  letter-spacing: 2px; text-transform: uppercase;
  color: var(--light-text);
}
.field input, .field select, .field textarea {
  border: 1px solid var(--border);
  border-radius: 2px;
  padding: 11px 14px;
  font-family: 'Jost', sans-serif;
  font-size: 14px; color: var(--dark);
  background: var(--off-white);
  outline: none;
  transition: border-color .2s;
}
.field input:focus, .field select:focus, .field textarea:focus {
  border-color: var(--peach-dark);
  background: var(--white);
}
.field textarea { resize: vertical; min-height: 80px; }

.register-actions {
  display: flex; gap: 14px; align-items: center;
  margin-top: 28px;
}
.btn-close {
  background: none; border: none;
  font-size: 13px; color: var(--light-text);
  cursor: pointer; text-decoration: underline;
  font-family: 'Jost', sans-serif;
}

/* ─── WELCOME TOAST ─── */
#toast {
  position: fixed; bottom: 40px; left: 50%;
  transform: translateX(-50%) translateY(20px);
  background: var(--dark);
  color: var(--peach-light);
  padding: 16px 40px;
  border-radius: 100px;
  font-size: 15px; font-family: 'Cormorant Garamond', serif;
  font-style: italic; letter-spacing: 1px;
  z-index: 2000;
  opacity: 0;
  transition: all .4s cubic-bezier(.22,.9,.36,1);
  pointer-events: none;
}
#toast.show {
  opacity: 1;
  transform: translateX(-50%) translateY(0);
}

/* ─── MAIN APP ─── */
#app { opacity: 0; transition: opacity .6s ease; }
#app.visible { opacity: 1; }

/* ─── HEADER ─── */
header {
  display: flex; align-items: center; justify-content: space-between;
  padding: 24px 60px;
  border-bottom: 1px solid var(--border);
  position: sticky; top: 0; background: rgba(255,252,250,.94);
  backdrop-filter: blur(12px); z-index: 100;
}

.site-logo {
  font-family: 'Cormorant Garamond', serif;
  font-size: 22px; font-weight: 300; letter-spacing: 1px;
}
.site-logo span { color: var(--peach-dark); font-style: italic; }

.header-nav { display: flex; gap: 32px; align-items: center; }
.header-nav a {
  text-decoration: none; color: var(--mid);
  font-size: 12px; letter-spacing: 2px; text-transform: uppercase;
  font-weight: 500; transition: color .2s;
}
.header-nav a:hover { color: var(--dark); }

.btn-artist-login {
  background: var(--peach);
  border: none; padding: 10px 22px;
  font-family: 'Jost', sans-serif;
  font-size: 11px; font-weight: 600;
  letter-spacing: 2px; text-transform: uppercase;
  cursor: pointer; border-radius: 2px;
  transition: all .2s;
}
.btn-artist-login:hover { background: var(--peach-dark); }

/* ─── HERO ─── */
.hero {
  padding: 80px 60px 60px;
  display: grid; grid-template-columns: 1fr 1fr;
  gap: 60px; align-items: center;
  max-width: 1400px; margin: 0 auto;
}

.hero-text h2 {
  font-family: 'Cormorant Garamond', serif;
  font-size: clamp(42px, 5vw, 72px);
  font-weight: 300; line-height: 1.08;
  margin-bottom: 20px;
}
.hero-text h2 em { font-style: italic; color: var(--peach-dark); }

.hero-text p {
  font-size: 15px; color: var(--light-text);
  line-height: 1.8; max-width: 420px;
}

.hero-stats {
  display: flex; gap: 40px; margin-top: 44px;
}
.stat { border-left: 3px solid var(--peach); padding-left: 16px; }
.stat-num {
  font-family: 'Cormorant Garamond', serif;
  font-size: 32px; font-weight: 600;
}
.stat-label { font-size: 11px; color: var(--light-text); letter-spacing: 1px; text-transform: uppercase; }

.hero-visual {
  position: relative; height: 420px;
}
.hero-card {
  position: absolute;
  border-radius: 3px;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(26,18,16,.18);
}
.hero-card-main {
  width: 280px; height: 340px; top: 0; right: 40px;
  background: linear-gradient(135deg, #c4956a, #8b5e3c, #4a2c1a);
}
.hero-card-accent {
  width: 200px; height: 240px; top: 100px; right: 260px;
  background: linear-gradient(135deg, var(--peach), #e8956a, #b5604a);
  opacity: .85;
}

/* ─── FILTERS ─── */
.filters-bar {
  display: flex; align-items: center; gap: 12px;
  padding: 20px 60px;
  background: var(--off-white);
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
  flex-wrap: wrap;
  max-width: 100%;
}
.filter-label {
  font-size: 11px; font-weight: 600;
  letter-spacing: 2px; text-transform: uppercase;
  color: var(--light-text); margin-right: 4px;
}
.filter-btn {
  border: 1px solid var(--border);
  background: var(--white);
  padding: 7px 18px; border-radius: 100px;
  font-family: 'Jost', sans-serif;
  font-size: 12px; cursor: pointer;
  transition: all .2s; color: var(--mid);
}
.filter-btn.active, .filter-btn:hover {
  background: var(--peach); border-color: var(--peach);
  color: var(--dark); font-weight: 600;
}

/* ─── CATALOG ─── */
.catalog-section {
  max-width: 1400px; margin: 0 auto;
  padding: 60px 60px 80px;
}

.section-title {
  font-family: 'Cormorant Garamond', serif;
  font-size: 13px; letter-spacing: 5px;
  text-transform: uppercase; color: var(--light-text);
  margin-bottom: 40px;
  display: flex; align-items: center; gap: 16px;
}
.section-title::after {
  content: ''; flex: 1; height: 1px; background: var(--border);
}

.catalog-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 40px;
}

/* ─── ARTWORK CARD ─── */
.artwork-card {
  cursor: pointer;
  transition: transform .3s;
}
.artwork-card:hover { transform: translateY(-6px); }

.artwork-image {
  width: 100%; aspect-ratio: 4/5;
  border-radius: 3px; overflow: hidden;
  position: relative;
  box-shadow: 0 8px 30px rgba(26,18,16,.12);
}
.artwork-image img {
  width: 100%; height: 100%; object-fit: cover;
  transition: transform .5s;
}
.artwork-card:hover .artwork-image img { transform: scale(1.04); }

.artwork-badge {
  position: absolute; top: 14px; right: 14px;
  background: rgba(255,252,250,.92);
  backdrop-filter: blur(6px);
  border-radius: 100px; padding: 5px 14px;
  font-size: 12px; font-weight: 600; color: var(--mid);
}
.artwork-badge.sold { background: var(--dark); color: var(--peach-light); }

.artwork-overlay {
  position: absolute; inset: 0;
  background: linear-gradient(to top, rgba(26,18,16,.65) 0%, transparent 55%);
  opacity: 0; transition: opacity .3s;
}
.artwork-card:hover .artwork-overlay { opacity: 1; }
.overlay-cta {
  position: absolute; bottom: 18px; left: 0; right: 0;
  text-align: center;
  color: #fff; font-size: 12px; font-weight: 600;
  letter-spacing: 2px; text-transform: uppercase;
  opacity: 0; transition: opacity .3s;
}
.artwork-card:hover .overlay-cta { opacity: 1; }

.artwork-info { padding: 18px 4px 0; }

.artwork-author {
  font-weight: 700; font-size: 15px;
  letter-spacing: .5px; color: var(--dark);
  margin-bottom: 2px;
}
.artwork-title {
  font-family: 'Cormorant Garamond', serif;
  font-size: 18px; font-style: italic;
  color: var(--mid); margin-bottom: 8px;
}
.artwork-meta {
  display: flex; gap: 10px; flex-wrap: wrap;
  font-size: 11px; color: var(--light-text);
  letter-spacing: .5px; margin-bottom: 12px;
}
.artwork-meta span { display: flex; align-items: center; gap: 4px; }
.artwork-price-row {
  display: flex; align-items: center; justify-content: space-between;
}
.artwork-price {
  font-family: 'Cormorant Garamond', serif;
  font-size: 22px; font-weight: 600;
  color: var(--dark);
}
.artwork-price small { font-size: 13px; color: var(--light-text); font-family: 'Jost', sans-serif; font-weight: 400; }

.btn-contact {
  background: var(--off-white);
  border: 1px solid var(--border);
  padding: 8px 16px; border-radius: 2px;
  font-family: 'Jost', sans-serif;
  font-size: 11px; font-weight: 600;
  letter-spacing: 1.5px; text-transform: uppercase;
  cursor: pointer; transition: all .2s;
  color: var(--mid);
}
.btn-contact:hover { background: var(--peach); border-color: var(--peach); color: var(--dark); }

/* ─── ARTIST PANEL ─── */
#artist-panel {
  display: none;
  max-width: 900px; margin: 0 auto;
  padding: 60px 60px 80px;
}
#artist-panel.active { display: block; }

.panel-header {
  margin-bottom: 40px;
  padding-bottom: 24px;
  border-bottom: 1px solid var(--border);
}
.panel-header h2 {
  font-family: 'Cormorant Garamond', serif;
  font-size: 36px; font-weight: 300;
  margin-bottom: 6px;
}
.panel-header p { font-size: 14px; color: var(--light-text); }

.add-artwork-form {
  background: var(--off-white);
  border: 1px solid var(--border);
  border-radius: 4px; padding: 36px;
  margin-bottom: 48px;
}
.add-artwork-form h3 {
  font-family: 'Cormorant Garamond', serif;
  font-size: 22px; margin-bottom: 24px;
}

/* ─── FOOTER ─── */
footer {
  border-top: 1px solid var(--border);
  padding: 40px 60px;
  display: flex; justify-content: space-between; align-items: center;
  flex-wrap: wrap; gap: 20px;
}
.footer-logo {
  font-family: 'Cormorant Garamond', serif;
  font-size: 18px; font-weight: 300;
}
.footer-logo span { color: var(--peach-dark); font-style: italic; }
footer p { font-size: 12px; color: var(--light-text); }

/* ─── ANIMATIONS ─── */
@keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
@keyframes slideUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }

.reveal {
  opacity: 0; transform: translateY(24px);
  transition: opacity .6s ease, transform .6s ease;
}
.reveal.visible { opacity: 1; transform: translateY(0); }

/* ─── RESPONSIVE ─── */
@media (max-width: 768px) {
  header { padding: 18px 24px; }
  .header-nav { display: none; }
  .hero { grid-template-columns: 1fr; padding: 40px 24px; }
  .hero-visual { display: none; }
  .filters-bar { padding: 16px 24px; }
  .catalog-section { padding: 40px 24px; }
  #artist-panel { padding: 40px 24px; }
  footer { padding: 30px 24px; }
  .modal { padding: 36px 28px; }
  .register-form, .register-header { padding-left: 28px; padding-right: 28px; }
  .form-grid { grid-template-columns: 1fr; }
}

/* ─── CATALOG TAGS ─── */
.tag {
  display: inline-block;
  background: var(--peach-light);
  color: var(--mid);
  font-size: 10px; font-weight: 600;
  letter-spacing: 1px; text-transform: uppercase;
  padding: 3px 9px; border-radius: 100px;
}

/* ─── ARTWORK DETAIL MODAL ─── */
#detail-modal {
  position: fixed; inset: 0;
  background: rgba(26,18,16,0.8);
  backdrop-filter: blur(8px);
  z-index: 1200;
  display: flex; align-items: center; justify-content: center;
}
#detail-modal.hidden { display: none; }

.detail-box {
  background: var(--white);
  border-radius: 4px;
  width: min(900px, 96vw);
  max-height: 92vh; overflow-y: auto;
  display: grid; grid-template-columns: 1fr 1fr;
  animation: slideUp .4s cubic-bezier(.22,.9,.36,1);
}
.detail-img {
  aspect-ratio: 1; overflow: hidden;
}
.detail-img img { width: 100%; height: 100%; object-fit: cover; }
.detail-info { padding: 48px 44px; display: flex; flex-direction: column; justify-content: space-between; }
.detail-info .tag { margin-bottom: 16px; }
.detail-info h2 {
  font-family: 'Cormorant Garamond', serif;
  font-size: 32px; font-style: italic; font-weight: 400;
  margin-bottom: 6px;
}
.detail-info .artist-name { font-weight: 700; font-size: 17px; margin-bottom: 20px; }
.detail-desc { font-size: 14px; color: var(--light-text); line-height: 1.8; margin-bottom: 24px; }
.detail-specs { border-top: 1px solid var(--border); padding-top: 20px; margin-bottom: 24px; }
.spec-row {
  display: flex; justify-content: space-between;
  font-size: 13px; padding: 8px 0;
  border-bottom: 1px dashed rgba(255,197,171,.25);
}
.spec-row span:first-child { color: var(--light-text); }
.spec-row span:last-child { font-weight: 500; }
.detail-price-row {
  display: flex; align-items: center; justify-content: space-between;
}
.detail-price {
  font-family: 'Cormorant Garamond', serif;
  font-size: 34px; font-weight: 600;
}
.btn-detail-close {
  position: absolute;
  top: 20px; right: 20px;
  background: var(--dark); color: var(--white);
  border: none; width: 36px; height: 36px;
  border-radius: 50%; cursor: pointer; font-size: 18px;
  display: flex; align-items: center; justify-content: center;
  z-index: 10;
}
#detail-modal { position: relative; }
.detail-box { position: relative; }

@media (max-width: 640px) {
  .detail-box { grid-template-columns: 1fr; }
  .detail-img { aspect-ratio: 4/3; }
  .detail-info { padding: 28px 24px; }
}
```

  </style>
</head>
<body>

<!-- ═══════════════════ WELCOME MODAL ═══════════════════ -->

<div id="overlay">
  <div class="modal">
    <div class="modal-logo">Galerie · Côte d'Ivoire</div>
    <h1>Bienvenue dans l'<em>Art</em><br>Ivoirien</h1>
    <p>Découvrez les œuvres de peintres talentueux<br>ou rejoignez notre communauté d'artistes.</p>
    <div class="modal-btns">
      <button class="btn-primary" onclick="openRegister()">Je suis Artiste</button>
      <button class="btn-secondary" onclick="enterAsVisitor()">Je suis Visiteur</button>
    </div>
  </div>
</div>

<!-- ═══════════════════ REGISTER MODAL ═══════════════════ -->

<div id="register-modal" class="hidden">
  <div class="register-box">
    <div class="register-header">
      <h2>Créer votre espace Artiste</h2>
      <p>Présentez vos œuvres à des milliers d'amateurs d'art en Côte d'Ivoire et au-delà.</p>
    </div>
    <div class="register-form">
      <div class="form-grid">
        <div class="field">
          <label>Prénom</label>
          <input type="text" placeholder="Kouamé"/>
        </div>
        <div class="field">
          <label>Nom</label>
          <input type="text" placeholder="Assi"/>
        </div>
        <div class="field">
          <label>Nom d'artiste</label>
          <input type="text" placeholder="KouArt"/>
        </div>
        <div class="field">
          <label>Ville</label>
          <input type="text" placeholder="Abidjan, Bouaké..."/>
        </div>
        <div class="field form-full">
          <label>Adresse e-mail</label>
          <input type="email" placeholder="artiste@exemple.ci"/>
        </div>
        <div class="field">
          <label>Téléphone / WhatsApp</label>
          <input type="tel" placeholder="+225 07 XX XX XX XX"/>
        </div>
        <div class="field">
          <label>Style artistique</label>
          <select>
            <option>— Choisir —</option>
            <option>Peinture abstraite</option>
            <option>Art figuratif</option>
            <option>Art traditionnel</option>
            <option>Aquarelle</option>
            <option>Acrylique</option>
            <option>Huile sur toile</option>
            <option>Art numérique</option>
          </select>
        </div>
        <div class="field form-full">
          <label>Biographie courte</label>
          <textarea placeholder="Parlez de vous, votre parcours artistique, vos influences..."></textarea>
        </div>
      </div>
      <div class="register-actions">
        <button class="btn-primary" onclick="registerArtist()">Créer mon compte</button>
        <button class="btn-close" onclick="closeRegister()">Annuler</button>
      </div>
    </div>
  </div>
</div>

<!-- ═══════════════════ TOAST ═══════════════════ -->

<div id="toast">🎨 Bienvenue !</div>

<!-- ═══════════════════ ARTWORK DETAIL ═══════════════════ -->

<div id="detail-modal" class="hidden">
  <div class="detail-box">
    <button class="btn-detail-close" onclick="closeDetail()">✕</button>
    <div class="detail-img">
      <img id="detail-img-src" src="" alt=""/>
    </div>
    <div class="detail-info">
      <div>
        <span class="tag" id="detail-style"></span>
        <h2 id="detail-title"></h2>
        <div class="artist-name" id="detail-artist"></div>
        <p class="detail-desc" id="detail-desc"></p>
        <div class="detail-specs">
          <div class="spec-row"><span>Technique</span><span id="spec-tech"></span></div>
          <div class="spec-row"><span>Dimensions</span><span id="spec-dim"></span></div>
          <div class="spec-row"><span>Année</span><span id="spec-year"></span></div>
          <div class="spec-row"><span>Disponibilité</span><span id="spec-avail"></span></div>
        </div>
      </div>
      <div class="detail-price-row">
        <div class="detail-price" id="detail-price"></div>
        <button class="btn-primary" onclick="alert('Demande de contact envoyée à l\'artiste !')">Contacter l'artiste</button>
      </div>
    </div>
  </div>
</div>

<!-- ═══════════════════ MAIN APP ═══════════════════ -->

<div id="app">
  <header>
    <div class="site-logo">Galerie <span>Ivoire</span></div>
    <nav class="header-nav">
      <a href="#catalog" onclick="showCatalog()">Catalogue</a>
      <a href="#" onclick="showArtists()">Artistes</a>
      <a href="#">À propos</a>
    </nav>
    <button class="btn-artist-login" onclick="openRegister()">Espace Artiste</button>
  </header>

  <!-- VISITOR VIEW -->

  <div id="visitor-view">
    <!-- Hero -->
    <section class="hero">
      <div class="hero-text reveal">
        <h2>L'<em>Art</em> Ivoirien<br>à portée de main</h2>
        <p>Explorez les créations uniques de peintres talentueux de Côte d'Ivoire. Chaque œuvre raconte une histoire, chaque couleur exprime une âme.</p>
        <div class="hero-stats">
          <div class="stat">
            <div class="stat-num">48</div>
            <div class="stat-label">Artistes</div>
          </div>
          <div class="stat">
            <div class="stat-num">320+</div>
            <div class="stat-label">Œuvres</div>
          </div>
          <div class="stat">
            <div class="stat-num">12</div>
            <div class="stat-label">Villes</div>
          </div>
        </div>
      </div>
      <div class="hero-visual reveal">
        <div class="hero-card hero-card-main"></div>
        <div class="hero-card hero-card-accent"></div>
      </div>
    </section>

```
<!-- Filters -->
<div class="filters-bar">
  <span class="filter-label">Filtrer :</span>
  <button class="filter-btn active" onclick="filterCatalog('tous', this)">Tous</button>
  <button class="filter-btn" onclick="filterCatalog('abstrait', this)">Abstrait</button>
  <button class="filter-btn" onclick="filterCatalog('figuratif', this)">Figuratif</button>
  <button class="filter-btn" onclick="filterCatalog('traditionnel', this)">Traditionnel</button>
  <button class="filter-btn" onclick="filterCatalog('aquarelle', this)">Aquarelle</button>
  <button class="filter-btn" onclick="filterCatalog('disponible', this)">Disponibles</button>
</div>

<!-- Catalog -->
<section class="catalog-section" id="catalog">
  <div class="section-title">Catalogue des œuvres</div>
  <div class="catalog-grid" id="catalog-grid"></div>
</section>
```

  </div>

  <!-- Artist Panel -->

  <div id="artist-panel">
    <div class="panel-header">
      <h2>Mon Espace Artiste</h2>
      <p>Gérez votre catalogue et vos informations.</p>
    </div>
    <div class="add-artwork-form">
      <h3>Ajouter une œuvre</h3>
      <div class="form-grid">
        <div class="field">
          <label>Titre de l'œuvre</label>
          <input type="text" placeholder="Ex : Lumières d'Abidjan"/>
        </div>
        <div class="field">
          <label>Style</label>
          <select>
            <option>Abstrait</option><option>Figuratif</option>
            <option>Traditionnel</option><option>Aquarelle</option>
          </select>
        </div>
        <div class="field">
          <label>Prix (FCFA)</label>
          <input type="number" placeholder="Ex : 150000"/>
        </div>
        <div class="field">
          <label>Dimensions (cm)</label>
          <input type="text" placeholder="Ex : 60 × 80"/>
        </div>
        <div class="field">
          <label>Technique</label>
          <input type="text" placeholder="Ex : Huile sur toile"/>
        </div>
        <div class="field">
          <label>Année</label>
          <input type="number" placeholder="2024"/>
        </div>
        <div class="field form-full">
          <label>Description de l'œuvre</label>
          <textarea placeholder="Racontez l'histoire de cette œuvre, son inspiration..."></textarea>
        </div>
      </div>
      <div class="register-actions" style="margin-top:24px">
        <button class="btn-primary" onclick="alert('Œuvre ajoutée au catalogue !')">Publier l'œuvre</button>
      </div>
    </div>
  </div>

  <footer>
    <div class="footer-logo">Galerie <span>Ivoire</span></div>
    <p>© 2025 · Valoriser l'art ivoirien · Abidjan, Côte d'Ivoire</p>
  </footer>
</div>

<script>
// ─── DATA ────────────────────────────────────────────────
const artworks = [
  {
    id: 1, author: "Adjoua Koffi", title: "Harmonie Sacrée",
    style: "traditionnel", technique: "Huile sur toile",
    year: 2023, dimensions: "80 × 100 cm",
    price: 185000, available: true,
    desc: "Inspirée des masques Baoulé, cette œuvre célèbre la spiritualité et les rites ancestraux de la culture akan. Les teintes chaudes évoquent la terre ivoirienne.",
    color: "linear-gradient(135deg,#8B4513,#D2691E,#F4A460,#8B4513)"
  },
  {
    id: 2, author: "Kouamé Diabaté", title: "Lagune au Crépuscule",
    style: "figuratif", technique: "Acrylique sur toile",
    year: 2024, dimensions: "60 × 90 cm",
    price: 120000, available: true,
    desc: "Le coucher de soleil sur la lagune Ébrié d'Abidjan, saisie dans toute sa splendeur. Les reflets orangés sur l'eau rappellent la magie des soirées ivoiriennes.",
    color: "linear-gradient(135deg,#FF8C00,#FF4500,#8B0000,#2F4F4F)"
  },
  {
    id: 3, author: "Fatou Traoré", title: "Femme en Pagne",
    style: "figuratif", technique: "Pastel à l'huile",
    year: 2024, dimensions: "50 × 70 cm",
    price: 95000, available: false,
    desc: "Portrait d'une femme portant un pagne wax aux motifs géométriques. Une ode à l'élégance et à la fierté culturelle de la femme africaine moderne.",
    color: "linear-gradient(135deg,#FFC5AB,#E8956a,#C06030,#6B2D0E)"
  },
  {
    id: 4, author: "Yao Assouman", title: "Rythmes Urbains",
    style: "abstrait", technique: "Acrylique mixte",
    year: 2023, dimensions: "100 × 120 cm",
    price: 250000, available: true,
    desc: "L'énergie vibrante d'Abidjan capturée en taches de couleur et de mouvement. Chaque coup de pinceau représente la vitalité d'une métropole en pleine croissance.",
    color: "linear-gradient(135deg,#1A1A2E,#16213E,#E94560,#FFC5AB)"
  },
  {
    id: 5, author: "Ama Brou", title: "Forêt Sacrée",
    style: "aquarelle", technique: "Aquarelle sur papier",
    year: 2024, dimensions: "40 × 55 cm",
    price: 65000, available: true,
    desc: "La lumière filtrée à travers les grands arbres du parc national du Banco. Une atmosphère mystique et apaisante rendue par la légèreté de l'aquarelle.",
    color: "linear-gradient(135deg,#228B22,#006400,#2E8B57,#90EE90)"
  },
  {
    id: 6, author: "Séraphin N'Guessan", title: "Masque du Temps",
    style: "traditionnel", technique: "Huile sur bois",
    year: 2022, dimensions: "45 × 65 cm",
    price: 310000, available: true,
    desc: "Réinterprétation moderne d'un masque Guéré de la région de l'Ouest. L'artiste mêle techniques contemporaines et motifs ancestraux dans un dialogue intemporel.",
    color: "linear-gradient(135deg,#3D1C02,#7B3F00,#C68642,#F5DEB3)"
  },
];

let activeFilter = 'tous';

// ─── MODAL FUNCTIONS ─────────────────────────────────────
function openRegister() {
  document.getElementById('overlay').classList.add('hidden');
  document.getElementById('register-modal').classList.remove('hidden');
}

function closeRegister() {
  document.getElementById('register-modal').classList.add('hidden');
  document.getElementById('overlay').classList.remove('hidden');
}

function enterAsVisitor() {
  document.getElementById('overlay').classList.add('hidden');
  showApp();
  showToast('Bienvenue ! Bonne découverte 🎨');
}

function registerArtist() {
  document.getElementById('register-modal').classList.add('hidden');
  showApp();
  showToast('Compte créé ! Bienvenue dans la famille 🎨');
}

function showApp() {
  const app = document.getElementById('app');
  app.classList.add('visible');
  setTimeout(triggerReveal, 300);
}

function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 3200);
}

// ─── CATALOG ─────────────────────────────────────────────
function renderCatalog(filter = 'tous') {
  const grid = document.getElementById('catalog-grid');
  const filtered = filter === 'tous'
    ? artworks
    : filter === 'disponible'
      ? artworks.filter(a => a.available)
      : artworks.filter(a => a.style === filter);

  grid.innerHTML = filtered.map(a => `
    <div class="artwork-card reveal" onclick="openDetail(${a.id})">
      <div class="artwork-image">
        <div style="width:100%;height:100%;background:${a.color};"></div>
        <span class="artwork-badge ${a.available ? '' : 'sold'}">${a.available ? 'Disponible' : 'Vendu'}</span>
        <div class="artwork-overlay"></div>
        <div class="overlay-cta">Voir les détails</div>
      </div>
      <div class="artwork-info">
        <div class="artwork-author">${a.author}</div>
        <div class="artwork-title">${a.title}</div>
        <div class="artwork-meta">
          <span>🎨 ${a.technique}</span>
          <span>📐 ${a.dimensions}</span>
          <span>📅 ${a.year}</span>
        </div>
        <div class="artwork-price-row">
          <div class="artwork-price">${a.price.toLocaleString('fr-FR')} <small>FCFA</small></div>
          <button class="btn-contact" onclick="event.stopPropagation();alert('Contactez ${a.author} pour cette œuvre.')">Contact</button>
        </div>
      </div>
    </div>
  `).join('');

  setTimeout(triggerReveal, 50);
}

function filterCatalog(filter, btn) {
  activeFilter = filter;
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderCatalog(filter);
}

// ─── DETAIL MODAL ────────────────────────────────────────
function openDetail(id) {
  const a = artworks.find(x => x.id === id);
  if (!a) return;
  document.getElementById('detail-img-src').style.background = a.color;
  document.getElementById('detail-img-src').style.width = '100%';
  document.getElementById('detail-img-src').style.height = '100%';
  document.getElementById('detail-img-src').src = '';
  document.querySelector('.detail-img').style.background = a.color;
  document.getElementById('detail-style').textContent = a.style.charAt(0).toUpperCase() + a.style.slice(1);
  document.getElementById('detail-title').textContent = a.title;
  document.getElementById('detail-artist').textContent = a.author;
  document.getElementById('detail-desc').textContent = a.desc;
  document.getElementById('spec-tech').textContent = a.technique;
  document.getElementById('spec-dim').textContent = a.dimensions;
  document.getElementById('spec-year').textContent = a.year;
  document.getElementById('spec-avail').textContent = a.available ? '✅ Disponible' : '❌ Vendu';
  document.getElementById('detail-price').innerHTML = `${a.price.toLocaleString('fr-FR')} <small style="font-size:16px;font-family:Jost;font-weight:400;color:var(--light-text)">FCFA</small>`;
  document.getElementById('detail-modal').classList.remove('hidden');
}

function closeDetail() {
  document.getElementById('detail-modal').classList.add('hidden');
}

// ─── NAV ─────────────────────────────────────────────────
function showCatalog() {
  document.getElementById('visitor-view').style.display = '';
  document.getElementById('artist-panel').classList.remove('active');
}
function showArtists() {
  alert('Section Artistes — Bientôt disponible !');
}

// ─── REVEAL ANIMATION ────────────────────────────────────
function triggerReveal() {
  const els = document.querySelectorAll('.reveal:not(.visible)');
  els.forEach((el, i) => {
    setTimeout(() => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight + 80) el.classList.add('visible');
    }, i * 80);
  });
}

window.addEventListener('scroll', triggerReveal);

// ─── CLOSE DETAIL ON OUTSIDE CLICK ───────────────────────
document.getElementById('detail-modal').addEventListener('click', function(e) {
  if (e.target === this) closeDetail();
});

// ─── INIT ─────────────────────────────────────────────────
renderCatalog();
</script>

</body>
</html>
