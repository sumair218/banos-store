import React, { useState } from "react";
import backgroundVideo1 from "../../assets/bg1.mp4";
import backgroundVideo2 from "../../assets/bg2.mp4";
import backgroundVideo3 from "../../assets/bg3.mp4";

/*
  Bano's hero section
  Usage:
    import BanoHero from "./BanoHero";
    <BanoHero logo={logoImg} heroImage={modelPhoto} photos={[p1, p2]} />

  All props are optional. Without images the arch shows a gold monogram.
  Fonts are loaded from Google Fonts inside the component styles.
*/

const WHATSAPP_NUMBER = "923123375620";
const backgroundVideos = [backgroundVideo1, backgroundVideo2, backgroundVideo3];

const css = `
@import url("https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600;700&family=Figtree:wght@400;500;600&family=Noto+Nastaliq+Urdu:wght@500;700&display=swap");

.bh {
  --ivory: #fbf3e2;
  --sand: #f0e2c4;
  --gold: #b8892b;
  --gold-soft: #d8b565;
  --maroon: #6e1423;
  --bark: #2e1a10;
  --ink: #2a1a12;
  --muted: #6d5646;
  --display: "Cormorant Garamond", Georgia, "Times New Roman", serif;
  --body: "Figtree", system-ui, -apple-system, "Segoe UI", Arial, sans-serif;
  --urdu: "Noto Nastaliq Urdu", "Jameel Noori Nastaleeq", "Noto Naskh Arabic", serif;
  font-family: var(--body);
  color: var(--ink);
  background: transparent;
  position: relative;
  overflow: hidden;
  isolation: isolate;
}
.bh *, .bh *::before, .bh *::after { box-sizing: border-box; }

.bh-video-bg {
  position: absolute;
  z-index: 0;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  pointer-events: none;
  animation: bh-video-enter 650ms ease both;
}
@keyframes bh-video-enter {
  from { opacity: 0; }
  to { opacity: 1; }
}
.bh::after {
  content: "";
  position: absolute;
  z-index: 1;
  inset: 0;
  background: rgba(251, 243, 226, 0.48);
  pointer-events: none;
}
.bh > :not(.bh-video-bg) { z-index: 3; }

/* soft jali pattern in the background */
.bh::before {
  content: "";
  position: absolute;
  z-index: 2;
  inset: 0;
  opacity: 0.5;
  background-image:
    radial-gradient(circle at 50% 0, transparent 0 14px, rgba(184,137,43,0.16) 14.5px 15.5px, transparent 16px),
    radial-gradient(circle at 0 50%, transparent 0 14px, rgba(184,137,43,0.16) 14.5px 15.5px, transparent 16px);
  background-size: 44px 44px;
  pointer-events: none;
}

.bh a:focus-visible, .bh button:focus-visible { outline: 3px solid var(--maroon); outline-offset: 3px; }

.bh-main {
  position: relative;
  max-width: 1140px;
  margin: 0 auto;
  padding: 56px 24px 72px;
  display: block;
}

.bh-urdu-name {
  font-family: var(--urdu);
  font-size: 5.6rem;
  line-height: 1.9;
  color: var(--gold);
  margin: 0;
  font-weight: 700;
}
.bh-title {
  font-family: var(--display);
  font-weight: 600;
  font-size: 4.4rem;
  line-height: 1.02;
  margin: 0 0 18px;
  color: var(--bark);
  letter-spacing: -0.01em;
}
.bh-copy { font-size: 1.1rem; line-height: 1.7; color: var(--muted); max-width: 30em; margin: 0 0 30px; }
.bh-actions { display: flex; flex-wrap: wrap; gap: 14px; align-items: center; }
.bh-btn {
  display: inline-block;
  padding: 15px 30px;
  border-radius: 999px;
  font-weight: 600;
  font-size: 1rem;
  text-decoration: none;
  transition: background-color 0.2s, color 0.2s;
}
.bh-btn-solid { background: var(--maroon); color: var(--ivory); }
.bh-btn-solid:hover { background: var(--bark); }
.bh-btn-line { border: 1.5px solid var(--maroon); color: var(--maroon); }
.bh-btn-line:hover { background: var(--maroon); color: var(--ivory); }
.bh-thumbs { display: flex; gap: 12px; justify-content: center; margin-top: 26px; }
.bh-thumbs img {
  width: 84px; height: 104px; object-fit: cover;
  border-radius: 42px 42px 6px 6px;
  border: 2px solid var(--gold-soft);
}

/* promise row */
.bh-promise { position: relative; background: var(--sand); }
.bh-promise-inner {
  max-width: 1140px;
  margin: 0 auto;
  padding: 34px 24px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
.bh-item { display: flex; gap: 16px; align-items: flex-start; padding: 0 24px; }
.bh-item + .bh-item { border-left: 1px solid rgba(110, 20, 35, 0.25); }
.bh-item:first-child { padding-left: 0; }
.bh-item svg { flex: none; width: 40px; height: 40px; stroke: var(--maroon); fill: none; stroke-width: 1.5; stroke-linecap: round; stroke-linejoin: round; }
.bh-item h3 { font-family: var(--display); font-size: 1.45rem; margin: 0 0 2px; color: var(--bark); }
.bh-item p { margin: 0; font-size: 0.95rem; color: var(--muted); line-height: 1.5; }

/* contact strip */
.bh-contact { position: relative; background: var(--bark); color: var(--ivory); }
.bh-contact-inner {
  max-width: 1140px;
  margin: 0 auto;
  padding: 20px 24px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 14px 40px;
  font-size: 0.98rem;
}
.bh-contact a { color: var(--gold-soft); font-weight: 600; text-decoration: none; }
.bh-contact span { color: #e8d9b9; }

@media (max-width: 880px) {
  .bh-main { padding-top: 36px; }
  .bh-promise-inner { grid-template-columns: 1fr; gap: 22px; }
  .bh-item, .bh-item:first-child { padding: 0; }
  .bh-item + .bh-item { border-left: 0; border-top: 1px solid rgba(110, 20, 35, 0.25); padding-top: 22px; }
}
@media (max-width: 600px) {
  .bh-main { padding: 30px 16px 42px; }
  .bh-urdu-name { font-size: 4rem; }
  .bh-title { font-size: 3rem; line-height: 1.05; }
  .bh-copy { font-size: 1rem; margin-bottom: 22px; }
  .bh-actions { gap: 10px; }
  .bh-actions .bh-btn { width: 100%; text-align: center; padding: 13px 18px; }
  .bh-promise-inner { padding: 26px 20px; }
  .bh-item svg { width: 36px; height: 36px; }
  .bh-contact-inner { padding: 18px 20px; gap: 12px 24px; font-size: 0.9rem; }
}
@media (max-width: 360px) {
  .bh-urdu-name { font-size: 3.4rem; }
  .bh-title { font-size: 2.6rem; }
}
@media (prefers-reduced-motion: reduce) {
  .bh-video-bg { animation: none; }
}
`;

function IconDress() {
  return (
    <svg viewBox="0 0 40 40" aria-hidden="true">
      <path d="M15 4h10l-2 7 6 25H11l6-25z" />
      <path d="M17 11h6" />
    </svg>
  );
}
function IconBag() {
  return (
    <svg viewBox="0 0 40 40" aria-hidden="true">
      <rect x="7" y="14" width="26" height="21" rx="3" />
      <path d="M14 14v-3a6 6 0 0 1 12 0v3" />
      <path d="M17 24h6" />
    </svg>
  );
}
function IconSpark() {
  return (
    <svg viewBox="0 0 40 40" aria-hidden="true">
      <path d="M20 4c1 8 4 11 12 12-8 1-11 4-12 12-1-8-4-11-12-12 8-1 11-4 12-12z" />
      <path d="M31 28c.4 3 1.4 4 4 4.4-2.6.4-3.6 1.4-4 4-.4-2.6-1.4-3.6-4-4 2.6-.4 3.6-1.4 4-4.4z" />
    </svg>
  );
}

export default function BanoHero({
  logo,
  whatsapp = WHATSAPP_NUMBER,
}) {
  const chat = "https://wa.me/" + whatsapp;
  const [videoIndex, setVideoIndex] = useState(0);

  return (
    <header className="bh">
      <style>{css}</style>
      <video
        key={backgroundVideos[videoIndex]}
        className="bh-video-bg"
        autoPlay
        muted
        playsInline
        aria-hidden="true"
        onEnded={() => setVideoIndex((index) => (index + 1) % backgroundVideos.length)}
      >
        <source src={backgroundVideos[videoIndex]} type="video/mp4" />
      </video>

      <div className="bh-main" id="top">
        <div>
          <p className="bh-urdu-name" lang="ur" dir="rtl">بانو</p>
          <h1 className="bh-title">Meet your destination.</h1>
          <p className="bh-copy">
            Premium dresses, imported bags and winter wear, hand-picked for women.
            Shop at retail prices or buy in bulk for your own shop.
          </p>
          <div className="bh-actions">
            <a className="bh-btn bh-btn-solid" href={chat}>Order on WhatsApp</a>
            <a className="bh-btn bh-btn-line" href="#collection">See new arrivals</a>
          </div>
        </div>

      </div>

      <div className="bh-promise">
        <div className="bh-promise-inner">
          <div className="bh-item">
            <IconDress />
            <div>
              <h3>Quality dresses</h3>
              <p>Premium fabrics and flawless stitching.</p>
            </div>
          </div>
          <div className="bh-item">
            <IconBag />
            <div>
              <h3>Trendy bags</h3>
              <p>Latest imported styles and finishes.</p>
            </div>
          </div>
          <div className="bh-item">
            <IconSpark />
            <div>
              <h3>Exclusive designs</h3>
              <p>Hand-picked new seasonal arrivals.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bh-contact" id="visit">
        <div className="bh-contact-inner">
          <span>
            WhatsApp or call: <a href={chat}>+92 312 3375620</a>
          </span>
          <span>
            3rd Floor, Gilgit Business Center, Near Family Health Hospital, Jutial, Gilgit
          </span>
        </div>
      </div>
    </header>
  );
}
