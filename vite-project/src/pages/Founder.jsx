import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  Award,
  BookOpen,
  Feather,
  Globe2,
  HeartHandshake,
  Landmark,
  Quote,
  Sparkles,
  Star,
  Users,
} from "lucide-react";

import founder from "../assets/founder.png";
import founderVisionPortrait from "../assets/founder-vision-portrait.jpg";
import founderMessagePortrait from "../assets/founder-message-portrait.jpg";
import founderpic2 from "../assets/founderpic2.png";
import founderwithcbn from "../assets/founderwithcbn.png";
import founderwithcbn2 from "../assets/founderwithcbn2.png";
import founderGallery1 from "../assets/founder-gallery-1.jpg";
import founderGallery2 from "../assets/founder-gallery-2.jpg";
import founderGallery3 from "../assets/founder-gallery-3.jpg";
import founderGallery4 from "../assets/founder-gallery-4.jpg";


/* =========================================================
   COMPLETE FOUNDER PAGE STYLES
========================================================= */

const founderStyles = `
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Telugu:wght@400;500;600;700&family=Noto+Serif+Telugu:wght@400;500;600;700&display=swap');

:root {
  --fp-wine: #5a101d;
  --fp-wine-dark: #26060d;
  --fp-wine-deep: #150308;
  --fp-wine-light: #7a2032;

  --fp-gold: #b8893f;
  --fp-gold-light: #e5c77e;
  --fp-gold-bright: #f2db9b;

  --fp-cream: #fbf6ec;
  --fp-paper: #f2e4d1;
  --fp-paper-light: #fffaf1;

  --fp-text: #342720;
  --fp-muted: #76685f;
  --fp-line: #d7c4a8;
}

/* =========================================================
   GLOBAL
========================================================= */

.fp-page {
  width: 100%;
  overflow: hidden;

  color: var(--fp-text);

  background: var(--fp-cream);

  font-family:
    "Noto Sans Telugu",
    sans-serif;
}

.fp-page *,
.fp-page *::before,
.fp-page *::after {
  box-sizing: border-box;
}

.fp-page a {
  text-decoration: none;
}

.fp-container {
  width: min(1220px, 92%);
  margin: auto;
}

/* =========================================================
   REVEAL
========================================================= */

.fp-reveal {
  opacity: 0;

  transform:
    translateY(45px);

  transition:
    opacity .9s ease,
    transform .9s cubic-bezier(.2,.7,.2,1);
}

.fp-reveal.fp-show {
  opacity: 1;

  transform:
    translateY(0);
}

.fp-delay-1 {
  transition-delay: .12s;
}

.fp-delay-2 {
  transition-delay: .24s;
}

.fp-delay-3 {
  transition-delay: .36s;
}

/* =========================================================
   HERO
========================================================= */

.fp-hero {
  position: relative;

  min-height: 820px;

  overflow: hidden;

  color: white;

  background:
    radial-gradient(
      circle at 75% 35%,
      rgba(134, 36, 59, .65),
      transparent 33%
    ),
    radial-gradient(
      circle at 15% 80%,
      rgba(188, 139, 61, .13),
      transparent 25%
    ),
    linear-gradient(
      135deg,
      #160308 0%,
      #3c0915 45%,
      #681727 75%,
      #21050c 100%
    );
}

.fp-hero::before {
  content: "";

  position: absolute;
  inset: 0;

  opacity: .15;

  background:
    repeating-linear-gradient(
      45deg,
      transparent 0,
      transparent 60px,
      rgba(255,255,255,.035) 61px,
      transparent 62px
    );
}

/* =========================================================
   DECORATIVE MANDALA
========================================================= */

.fp-mandala {
  position: absolute;

  width: 850px;
  height: 850px;

  right: -260px;
  top: -80px;

  border-radius: 50%;

  opacity: .11;

  background:
    repeating-conic-gradient(
      from 0deg,
      var(--fp-gold-light) 0deg 2deg,
      transparent 2deg 13deg
    );

  mask:
    radial-gradient(
      circle,
      transparent 0 20%,
      #000 21% 23%,
      transparent 24% 31%,
      #000 32% 34%,
      transparent 35% 42%,
      #000 43% 45%,
      transparent 46% 53%,
      #000 54% 56%,
      transparent 57%
    );

  -webkit-mask:
    radial-gradient(
      circle,
      transparent 0 20%,
      #000 21% 23%,
      transparent 24% 31%,
      #000 32% 34%,
      transparent 35% 42%,
      #000 43% 45%,
      transparent 46% 53%,
      #000 54% 56%,
      transparent 57%
    );

  animation:
    fpRotate 65s linear infinite;
}

@keyframes fpRotate {
  to {
    transform: rotate(360deg);
  }
}

/* =========================================================
   GLOW
========================================================= */

.fp-glow {
  position: absolute;

  border-radius: 50%;

  filter: blur(85px);

  pointer-events: none;
}

.fp-glow-one {
  width: 330px;
  height: 330px;

  left: -150px;
  top: 25%;

  background:
    rgba(131, 31, 55, .35);

  animation:
    fpGlow 8s ease-in-out infinite alternate;
}

.fp-glow-two {
  width: 280px;
  height: 280px;

  right: 25%;
  bottom: -120px;

  background:
    rgba(214, 165, 73, .13);

  animation:
    fpGlow 10s ease-in-out infinite alternate-reverse;
}

@keyframes fpGlow {
  from {
    transform:
      translate(0,0);
  }

  to {
    transform:
      translate(35px,-25px);
  }
}

/* =========================================================
   HERO TOP
========================================================= */

.fp-hero-top {
  position: relative;

  z-index: 5;

  display: flex;

  justify-content: space-between;

  align-items: center;

  padding-top: 28px;
}

.fp-breadcrumb {
  display: flex;

  align-items: center;

  gap: 9px;

  color: #aa9590;

  font-size: 10px;
}

.fp-breadcrumb a {
  color: var(--fp-gold-light);
}

.fp-tag {
  padding: 8px 14px;

  border:
    1px solid rgba(228,196,123,.35);

  color:
    var(--fp-gold-light);

  background:
    rgba(255,255,255,.025);

  font-size: 9px;
}

/* =========================================================
   HERO GRID
========================================================= */

.fp-hero-grid {
  position: relative;

  z-index: 5;

  min-height: 720px;

  display: grid;

  grid-template-columns:
    .95fr
    1.05fr;

  gap: 75px;

  align-items: center;
}

/* =========================================================
   HERO CONTENT
========================================================= */

.fp-hero-content {
  animation:
    fpHeroEnter 1.1s cubic-bezier(.2,.8,.2,1) both;
}

@keyframes fpHeroEnter {
  from {
    opacity: 0;

    transform:
      translateY(45px);
  }

  to {
    opacity: 1;

    transform:
      translateY(0);
  }
}

.fp-overline {
  display: flex;

  align-items: center;

  gap: 12px;

  color:
    var(--fp-gold-light);

  font-size: 10px;
}

.fp-overline-line {
  width: 42px;
  height: 1px;

  background:
    var(--fp-gold-light);
}

.fp-hero-title {
  margin: 24px 0 18px;

  font-family:
    "Noto Serif Telugu",
    serif;

  font-size:
    clamp(48px, 6vw, 78px);

  line-height: 1.48;

  font-weight: 500;
}

.fp-hero-title span {
  color:
    var(--fp-gold-light);

  background:
    linear-gradient(
      90deg,
      #b8863e,
      #f1d794,
      #bc8d43,
      #f2d898
    );

  background-size:
    300% auto;

  -webkit-background-clip:
    text;

  background-clip:
    text;

  color: transparent;

  animation:
    fpGoldFlow 5s linear infinite;
}

@keyframes fpGoldFlow {
  to {
    background-position:
      300% center;
  }
}

.fp-role {
  display: inline-block;

  margin-bottom: 25px;

  padding: 8px 13px;

  border:
    1px solid rgba(228,196,123,.3);

  color:
    var(--fp-gold-light);

  font-size: 9px;
}

.fp-hero-text {
  max-width: 590px;

  color:
    #d6c2bc;

  font-size: 12px;

  line-height: 2.15;
}

.fp-hero-actions {
  display: flex;

  gap: 20px;

  align-items: center;

  margin-top: 30px;
}

.fp-gold-btn {
  display: inline-flex;

  align-items: center;

  justify-content: center;

  gap: 9px;

  min-height: 46px;

  padding:
    0 19px;

  color: white;

  background:
    linear-gradient(
      110deg,
      #997037,
      #d2a653,
      #9b7037
    );

  background-size:
    200% auto;

  font-size: 10px;

  box-shadow:
    0 12px 35px
    rgba(184,137,63,.23);

  transition:
    .35s ease;
}

.fp-gold-btn:hover {
  transform:
    translateY(-5px);

  box-shadow:
    0 20px 45px
    rgba(184,137,63,.35);
}

.fp-outline-btn {
  display: inline-flex;

  align-items: center;

  gap: 8px;

  color: white;

  font-size: 10px;

  border-bottom:
    1px solid var(--fp-gold);

  padding-bottom: 6px;

  transition:
    .3s ease;
}

.fp-outline-btn:hover {
  color:
    var(--fp-gold-light);

  transform:
    translateX(5px);
}

/* =========================================================
   HERO PORTRAIT
========================================================= */

.fp-portrait-area {
  position: relative;

  height: 620px;
}

.fp-portrait-frame {
  position: absolute;

  z-index: 3;

  width: 68%;

  height: 570px;

  right: 8%;
  top: 15px;

  padding: 10px;

  background:
    #fff7e8;

  box-shadow:
    0 40px 90px
    rgba(0,0,0,.48);

  transform:
    rotate(1.2deg);

  animation:
    fpPortraitFloat 7s ease-in-out infinite;
}

@keyframes fpPortraitFloat {
  0%,100% {
    transform:
      rotate(1.2deg)
      translateY(0);
  }

  50% {
    transform:
      rotate(1.2deg)
      translateY(-12px);
  }
}

.fp-portrait-inner {
  position: relative;

  width: 100%;
  height: 100%;

  overflow: hidden;

  background:
    #d5c3aa;
}

.fp-portrait-inner img {
  width: 100%;
  height: 100%;

  object-fit: contain;

  transition:
    transform 1s ease;
}

.fp-portrait-frame:hover img {
  transform:
    scale(1.04);
}

.fp-portrait-inner::after {
  content: "";

  position: absolute;
  inset: 0;

  background:
    linear-gradient(
      to top,
      rgba(26,3,9,.75),
      transparent 46%
    );
}

.fp-portrait-caption {
  position: absolute;

  z-index: 4;

  left: 25px;
  bottom: 25px;
}

.fp-portrait-caption small {
  display: block;

  color:
    var(--fp-gold-light);

  font-size: 8px;
}

.fp-portrait-caption strong {
  display: block;

  margin-top: 5px;

  color: white;

  font-family:
    "Noto Serif Telugu",
    serif;

  font-size: 19px;

  font-weight: 500;
}

/* =========================================================
   SMALL HERO PHOTOS
========================================================= */

.fp-floating-photo {
  position: absolute;

  z-index: 7;

  padding: 7px;

  background:
    #fff8ec;

  box-shadow:
    0 20px 50px
    rgba(0,0,0,.4);
}

.fp-floating-photo img {
  width: 100%;
  height: 100%;

  object-fit: contain;

  background:
    #d4c1a7;
}

.fp-floating-two {
  width: 175px;
  height: 145px;

  right: -4%;
  top: 5px;

  transform:
    rotate(5deg);

  animation:
    fpFloatTwo 6.5s ease-in-out infinite;
}

@keyframes fpFloatTwo {
  0%,100% {
    transform:
      rotate(5deg)
      translateY(0);
  }

  50% {
    transform:
      rotate(7deg)
      translateY(12px);
  }
}

/* =========================================================
   GOLD SEAL
========================================================= */

.fp-seal {
  position: absolute;

  z-index: 9;

  left: 5%;
  top: 5%;

  width: 150px;
  height: 150px;

  display: flex;

  flex-direction: column;

  align-items: center;

  justify-content: center;

  border:
    1px solid
    rgba(228,196,123,.8);

  border-radius: 50%;

  color:
    var(--fp-gold-light);

  background:
    rgba(31,4,11,.94);

  box-shadow:
    0 15px 45px
    rgba(0,0,0,.4);

  animation:
    fpSealPulse 4s ease-in-out infinite;
}

.fp-seal::before {
  content: "";

  position: absolute;

  inset: 7px;

  border:
    1px dashed
    rgba(228,196,123,.45);

  border-radius: 50%;
}

.fp-seal strong {
  position: relative;
  z-index: 2;

  font-family:
    "Noto Serif Telugu",
    serif;

  font-size: 38px;

  line-height: 1;
}

@keyframes fpSealPulse {
  0%,100% {
    box-shadow:
      0 15px 45px
      rgba(0,0,0,.4);
  }

  50% {
    box-shadow:
      0 15px 55px
      rgba(184,137,63,.28);
  }
}

/* =========================================================
   ACHIEVEMENT SECTION
========================================================= */

.fp-achievements {
  padding:
    125px 0;

  background:
    linear-gradient(
      rgba(239,225,207,.98),
      rgba(239,225,207,.98)
    );
}

.fp-heading {
  text-align: center;

  max-width: 720px;

  margin:
    0 auto;
}

.fp-label {
  color:
    var(--fp-gold);

  font-size: 10px;

  letter-spacing: .6px;
}

.fp-title {
  margin:
    14px 0;

  color:
    var(--fp-wine);

  font-family:
    "Noto Serif Telugu",
    serif;

  font-size:
    clamp(40px,5vw,65px);

  line-height: 1.45;

  font-weight: 500;
}

.fp-title span {
  color:
    var(--fp-gold);
}

.fp-heading p {
  color:
    var(--fp-muted);

  font-size: 12px;

  line-height: 2;
}

/* =========================================================
   ACHIEVEMENT GRID
========================================================= */

.fp-achievement-grid {
  display: grid;

  grid-template-columns:
    repeat(3,1fr);

  gap: 1px;

  margin-top: 65px;

  background:
    var(--fp-line);
}

.fp-achievement {
  position: relative;

  min-height: 265px;

  padding:
    35px 30px;

  overflow: hidden;

  background:
    linear-gradient(
      145deg,
      #faf0e1,
      #f0dfca
    );

  transition:
    .45s ease;
}

.fp-achievement::before {
  content: "";

  position: absolute;

  width: 170px;
  height: 170px;

  right: -90px;
  bottom: -90px;

  border:
    1px solid
    rgba(184,137,63,.2);

  border-radius: 50%;

  transition:
    .5s ease;
}

.fp-achievement:hover {
  z-index: 2;

  color: white;

  background:
    linear-gradient(
      145deg,
      #5a101d,
      #771d30
    );

  transform:
    translateY(-8px);

  box-shadow:
    0 30px 60px
    rgba(64,12,24,.2);
}

.fp-achievement:hover::before {
  transform:
    scale(2);
}

.fp-achievement-icon {
  width: 55px;
  height: 55px;

  display: flex;

  align-items: center;

  justify-content: center;

  color:
    var(--fp-gold);

  border:
    1px solid
    rgba(184,137,63,.35);

  border-radius: 50%;

  background:
    rgba(255,255,255,.35);
}

.fp-achievement h3 {
  margin:
    25px 0 10px;

  color:
    var(--fp-wine);

  font-family:
    "Noto Serif Telugu",
    serif;

  font-size: 20px;

  line-height: 1.7;

  font-weight: 500;
}

.fp-achievement p {
  margin: 0;

  color:
    var(--fp-muted);

  font-size: 10px;

  line-height: 1.9;
}

.fp-achievement:hover h3 {
  color: white;
}

.fp-achievement:hover p {
  color:
    #d9c4bd;
}

/* =========================================================
   MESSAGE
========================================================= */

.fp-message {
  position: relative;

  overflow: hidden;

  padding:
    140px 0;

  color: white;

  background:
    radial-gradient(
      circle at 15% 50%,
      rgba(137,36,59,.55),
      transparent 32%
    ),
    linear-gradient(
      135deg,
      #1b040a,
      #5a101e
    );
}

.fp-message-mandala {
  position: absolute;

  width: 820px;
  height: 820px;

  right: -260px;
  top: -90px;

  border-radius: 50%;

  opacity: .08;

  background:
    repeating-conic-gradient(
      from 0deg,
      var(--fp-gold-light) 0deg 2deg,
      transparent 2deg 14deg
    );

  mask:
    radial-gradient(
      circle,
      transparent 0 21%,
      #000 22% 24%,
      transparent 25% 32%,
      #000 33% 36%,
      transparent 37% 44%,
      #000 45% 48%,
      transparent 49%
    );

  -webkit-mask:
    radial-gradient(
      circle,
      transparent 0 21%,
      #000 22% 24%,
      transparent 25% 32%,
      #000 33% 36%,
      transparent 37% 44%,
      #000 45% 48%,
      transparent 49%
    );

  animation:
    fpRotate 70s linear infinite;
}

.fp-message-grid {
  position: relative;
  z-index: 2;

  display: grid;

  grid-template-columns:
    170px
    1fr;

  gap: 55px;

  align-items: start;
}

.fp-message-mark {
  width: 125px;
  height: 125px;
  overflow: hidden;

  display: flex;

  align-items: center;

  justify-content: center;

  border:
    1px solid
    rgba(228,196,123,.45);

  border-radius: 50%;

  color:
    var(--fp-gold-light);

  background:
    rgba(255,255,255,.035);

  box-shadow:
    inset 0 0 0 8px
    rgba(255,255,255,.015);
}

.fp-message-mark img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  object-position: center 30%;
}

.fp-message-title {
  margin:
    0 0 28px;

  color:
    white;

  font-family:
    "Noto Serif Telugu",
    serif;

  font-size:
    clamp(40px,5vw,65px);

  font-weight: 500;
}

.fp-message-title span {
  color:
    var(--fp-gold-light);
}

.fp-message-text {
  max-width: 890px;
}

.fp-message-text p {
  margin:
    0 0 22px;

  color:
    #d3bdb6;

  font-size: 13px;

  line-height: 2.25;
}

.fp-message-text p:first-child {
  color:
    #e5d2cb;

  font-family:
    "Noto Serif Telugu",
    serif;

  font-size: 17px;

  line-height: 2.05;
}

.fp-signature {
  margin-top: 45px;

  padding-top: 28px;

  border-top:
    1px solid
    rgba(255,255,255,.13);
}

.fp-signature-name {
  color:
    var(--fp-gold-light);

  font-family:
    "Noto Serif Telugu",
    serif;

  font-size: 20px;
}

.fp-signature-role {
  margin-top: 5px;

  color:
    #c4aaa2;

  font-size: 10px;

  line-height: 1.8;
}

/* =========================================================
   FOUNDER GALLERY
========================================================= */

.fp-gallery {
  padding:
    130px 0;

  background:
    var(--fp-cream);
}

.fp-gallery-layout {
  display: grid;

  grid-template-columns:
    1fr 1fr;

  gap: 80px;

  align-items: center;
}

.fp-gallery-copy p {
  color:
    var(--fp-muted);

  font-size: 12px;

  line-height: 2.2;
}

.fp-gallery-grid {
  display: grid;

  grid-template-columns:
    1fr 1fr;

  gap: 16px;
}

.fp-gallery-item {
  position: relative;

  height: 270px;

  padding: 8px;

  overflow: hidden;

  background:
    #fff7e8;

  box-shadow:
    0 20px 45px
    rgba(58,30,16,.12);

  transition:
    transform .45s ease,
    box-shadow .45s ease;
}

.fp-gallery-item:nth-child(1) {
  transform:
    rotate(-2deg);
}

.fp-gallery-item:nth-child(2) {
  transform:
    rotate(2deg);
}

.fp-gallery-item:nth-child(3) {
  transform:
    rotate(2deg);
}

.fp-gallery-item:nth-child(4) {
  transform:
    rotate(-2deg);
}

.fp-gallery-item:hover {
  z-index: 3;

  transform:
    rotate(0)
    translateY(-8px)
    scale(1.02);

  box-shadow:
    0 30px 60px
    rgba(58,30,16,.2);
}

.fp-gallery-item img {
  width: 100%;
  height: 100%;

  object-fit: contain;

  background:
    #d6c3a9;

  transition:
    transform .8s ease;
}

.fp-gallery-item:hover img {
  transform:
    scale(1.04);
}

.fp-gallery-caption {
  position: absolute;

  left: 16px;
  bottom: 15px;

  padding:
    6px 10px;

  color: white;

  background:
    rgba(35,4,10,.78);

  font-size: 8px;
}

/* =========================================================
   VALUES
========================================================= */

.fp-values {
  padding:
    105px 0;

  background:
    #eadcca;
}

.fp-values-grid {
  display: grid;

  grid-template-columns:
    repeat(4,1fr);

  gap: 1px;

  margin-top: 55px;

  background:
    var(--fp-line);
}

.fp-value {
  min-height: 220px;

  padding:
    30px 25px;

  background:
    #f6eadb;

  transition:
    .4s ease;
}

.fp-value:hover {
  background:
    var(--fp-wine);

  transform:
    translateY(-7px);
}

.fp-value svg {
  color:
    var(--fp-gold);
}

.fp-value h3 {
  margin:
    25px 0 8px;

  color:
    var(--fp-wine);

  font-family:
    "Noto Serif Telugu",
    serif;

  font-size: 18px;

  font-weight: 500;
}

.fp-value p {
  margin: 0;

  color:
    var(--fp-muted);

  font-size: 10px;

  line-height: 1.9;
}

.fp-value:hover h3 {
  color: white;
}

.fp-value:hover p {
  color:
    #d6c1ba;
}

/* =========================================================
   QUOTE
========================================================= */

.fp-quote {
  position: relative;

  padding:
    140px 0;

  overflow: hidden;

  text-align: center;

  color: white;

  background:
    linear-gradient(
      135deg,
      #22050c,
      #641526
    );
}

.fp-quote-content {
  position: relative;
  z-index: 2;

  max-width: 900px;

  margin: auto;
}

.fp-quote-icon {
  color:
    var(--fp-gold-light);

  opacity: .7;
}

.fp-quote-text {
  margin:
    25px 0;

  color: white;

  font-family:
    "Noto Serif Telugu",
    serif;

  font-size:
    clamp(30px,4.3vw,54px);

  line-height: 1.75;

  font-weight: 500;
}

.fp-quote-text span {
  color:
    var(--fp-gold-light);
}

.fp-quote-author {
  color:
    #c6afa8;

  font-size: 10px;
}

/* =========================================================
   FOOTER CTA
========================================================= */

.fp-final {
  padding:
    95px 0;

  text-align: center;

  background:
    var(--fp-cream);
}

.fp-final-symbol {
  color:
    var(--fp-gold);

  font-size: 40px;
}

.fp-final h2 {
  margin:
    12px 0 25px;

  color:
    var(--fp-wine);

  font-family:
    "Noto Serif Telugu",
    serif;

  font-size:
    clamp(32px,4vw,52px);

  font-weight: 500;
}

.fp-final h2 span {
  color:
    var(--fp-gold);
}

.fp-final p {
  max-width: 600px;

  margin:
    0 auto 28px;

  color:
    var(--fp-muted);

  font-size: 11px;

  line-height: 2;
}

/* =========================================================
   MOBILE
========================================================= */

@media (max-width: 1050px) {

  .fp-hero-grid {
    grid-template-columns: 1fr;

    gap: 30px;

    padding:
      55px 0 75px;
  }

  .fp-hero {
    min-height: auto;
  }

  .fp-portrait-area {
    max-width: 700px;

    width: 100%;

    margin: auto;
  }

  .fp-achievement-grid {
    grid-template-columns:
      repeat(2,1fr);
  }

  .fp-gallery-layout {
    grid-template-columns: 1fr;

    gap: 60px;
  }

  .fp-values-grid {
    grid-template-columns:
      repeat(2,1fr);
  }
}

/* =========================================================
   MOBILE
========================================================= */

@media (max-width: 650px) {

  .fp-container {
    width: 92%;
  }

  .fp-hero-top {
    padding-top: 18px;
  }

  .fp-tag {
    display: none;
  }

  .fp-hero-grid {
    padding:
      50px 0 70px;
  }

  .fp-hero-title {
    font-size: 45px;
  }

  .fp-hero-text {
    font-size: 10px;
  }

  .fp-hero-actions {
    flex-direction: column;

    align-items: flex-start;
  }

  .fp-portrait-area {
    height: 440px;
  }

  .fp-portrait-frame {
    width: 77%;

    height: 390px;

    right: 4%;
  }

  .fp-floating-two {
    width: 125px;
    height: 105px;
  }

  .fp-floating-two {
    right: -1px;
    top: 8px;
  }

  .fp-seal {
    width: 108px;
    height: 108px;

    left: 5%;
    top: 5%;
  }

  .fp-seal strong {
    font-size: 28px;
  }

  .fp-achievements,
  .fp-message,
  .fp-gallery,
  .fp-values,
  .fp-quote {
    padding:
      82px 0;
  }

  .fp-title {
    font-size: 38px;
  }

  .fp-achievement-grid {
    grid-template-columns: 1fr;
  }

  .fp-achievement {
    min-height: 235px;
  }

  .fp-message-grid {
    grid-template-columns: 1fr;

    gap: 35px;
  }

  .fp-message-mark {
    width: 90px;
    height: 90px;
  }

  .fp-message-title {
    font-size: 38px;
  }

  .fp-message-text p {
    font-size: 11px;
  }

  .fp-message-text p:first-child {
    font-size: 14px;
  }

  .fp-gallery-grid {
    gap: 10px;
  }

  .fp-gallery-item {
    height: 190px;
  }

  .fp-values-grid {
    grid-template-columns: 1fr;
  }

  .fp-quote-text {
    font-size: 30px;
  }
}

/* =========================================================
   REDUCED MOTION
========================================================= */

@media (prefers-reduced-motion: reduce) {

  .fp-page *,
  .fp-page *::before,
  .fp-page *::after {
    animation-duration:
      .01ms !important;

    animation-iteration-count:
      1 !important;

    transition-duration:
      .01ms !important;
  }

  .fp-reveal {
    opacity: 1 !important;

    transform: none !important;
  }
}
`;


/* =========================================================
   REVEAL COMPONENT
========================================================= */

function Reveal({
  children,
  className = "",
  delay = "",
}) {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const observer =
      new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            element.classList.add("fp-show");

            observer.unobserve(element);
          }
        },
        {
          threshold: 0.12,
        }
      );

    observer.observe(element);

    return () =>
      observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`fp-reveal ${delay} ${className}`}
    >
      {children}
    </div>
  );
}


/* =========================================================
   ACHIEVEMENT CARD
========================================================= */

function Achievement({
  icon: Icon,
  title,
  text,
}) {
  return (
    <article className="fp-achievement">

      <div className="fp-achievement-icon">
        <Icon size={25} />
      </div>

      <h3>
        {title}
      </h3>

      <p>
        {text}
      </p>

    </article>
  );
}


/* =========================================================
   VALUE CARD
========================================================= */

function Value({
  icon: Icon,
  title,
  text,
}) {
  return (
    <article className="fp-value">

      <Icon size={25} />

      <h3>
        {title}
      </h3>

      <p>
        {text}
      </p>

    </article>
  );
}


/* =========================================================
   FOUNDER PAGE
========================================================= */

export default function Founder() {

  return (
    <div className="fp-page">

      <style>
        {founderStyles}
      </style>


      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="fp-hero">

        <div className="fp-mandala" />

        <div className="fp-glow fp-glow-one" />

        <div className="fp-glow fp-glow-two" />


        <div className="fp-container">

          <div className="fp-hero-top">

            <div className="fp-breadcrumb">

              <Link to="/">
                శ్రీ శ్రీ కళావేదిక
              </Link>

              <span>/</span>

              <span>
                వ్యవస్థాపకులు
              </span>

            </div>


            <div className="fp-tag">
              సాహిత్యం • సంస్కృతి • సేవ
            </div>

          </div>


          <div className="fp-hero-grid">

            {/* LEFT */}

            <div className="fp-hero-content">

              <div className="fp-overline">

                <span className="fp-overline-line" />

                శ్రీ శ్రీ కళావేదిక

              </div>


              <h1 className="fp-hero-title">

                కళారత్న

                <br />

                <span>
                  కత్తిమండ
                </span>

                <br />

                ప్రతాప్ కుమార్

              </h1>


              <div className="fp-role">

                Founder & Chairman

              </div>


              <p className="fp-hero-text">

                శ్రీ శ్రీ కళావేదిక —
                అంతర్జాతీయ సాహిత్య,
                సాంస్కృతిక, సామాజిక సేవా
                సంస్థకు వ్యవస్థాపకులు మరియు
                అధ్యక్షులు.

              </p>


              <p className="fp-hero-text">

                తెలుగు భాష, సాహిత్యం,
                సంస్కృతి మరియు కళలను
                ప్రపంచవ్యాప్తంగా విస్తరించాలనే
                సంకల్పంతో సాహిత్య సేవా
                ప్రస్థానాన్ని ముందుకు
                తీసుకెళ్తున్న నాయకత్వం.

              </p>


              <div className="fp-hero-actions">

                <a
                  href="#founder-message"
                  className="fp-gold-btn"
                >

                  సందేశం చదవండి

                  <ArrowUpRight size={16} />

                </a>


                <Link
                  to="/about"
                  className="fp-outline-btn"
                >

                  మా సంస్థ గురించి

                  <ArrowUpRight size={15} />

                </Link>

              </div>

            </div>


            {/* RIGHT */}

            <div className="fp-portrait-area">

              <div className="fp-portrait-frame">

                <div className="fp-portrait-inner">

                  <img
                    src={founderVisionPortrait}
                    alt="కళారత్న కత్తిమండ ప్రతాప్ కుమార్"
                  />

                  <div className="fp-portrait-caption">

                    <small>
                      Founder & Chairman
                    </small>

                    <strong>
                      కళారత్న కత్తిమండ ప్రతాప్ కుమార్
                    </strong>

                  </div>

                </div>

              </div>


              <div className="fp-floating-photo fp-floating-two">

                <img
                  src={founderwithcbn}
                  alt="కత్తిమండ ప్రతాప్ కుమార్ కార్యక్రమం"
                />

              </div>


            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          ACHIEVEMENTS
      ===================================================== */}

      <section className="fp-achievements">

        <div className="fp-container">

          <Reveal>

            <div className="fp-heading">

              <div className="fp-label">
                గౌరవాలు • పురస్కారాలు • సేవ
              </div>

              <h2 className="fp-title">

                సేవా ప్రస్థానానికి

                <br />

                <span>
                  లభించిన గౌరవాలు
                </span>

              </h2>

              <p>

                కళారత్న కత్తిమండ ప్రతాప్ కుమార్
                సాహిత్య, సాంస్కృతిక మరియు
                సామాజిక సేవా రంగాల్లో అందుకున్న
                గౌరవాలు.

              </p>

            </div>

          </Reveal>


          <Reveal delay="fp-delay-2">

            <div className="fp-achievement-grid">

              <Achievement
                icon={Award}
                title="ఆంధ్రప్రదేశ్ ప్రభుత్వ కళారత్న అవార్డు గ్రహీత"
                text="ఆంధ్రప్రదేశ్ ప్రభుత్వం అందించిన కళారత్న గౌరవాన్ని అందుకున్నారు."
              />

              <Achievement
                icon={BookOpen}
                title="ఆంధ్రప్రదేశ్ సాహిత్య అకాడమి పూర్వ సభ్యులు"
                text="ఆంధ్రప్రదేశ్ సాహిత్య అకాడమితో అనుబంధం కలిగిన సాహిత్య సేవా ప్రస్థానం."
              />

              <Achievement
                icon={Star}
                title="పద్మభూషణ్ బోయి భీమన్న కవి ప్రభుత్వ జీవిత సాఫల్య పురస్కారం"
                text="పద్మభూషణ్ బోయి భీమన్న కవి ప్రభుత్వ జీవిత సాఫల్య పురస్కారాన్ని అందుకున్నారు."
              />

              <Achievement
                icon={Feather}
                title="మహాకవి గుర్రం జాషువా కవి ప్రభుత్వ పురస్కారం"
                text="మహాకవి గుర్రం జాషువా కవి ప్రభుత్వ పురస్కారాన్ని అందుకున్నారు."
              />

              <Achievement
                icon={Sparkles}
                title="ప్రభుత్వ ఉగాది పురస్కారం"
                text="ప్రభుత్వ ఉగాది పురస్కారంతో సత్కరించబడ్డారు."
              />

              <Achievement
                icon={Globe2}
                title="ఆంధ్రప్రదేశ్ రాష్ట్ర సాహిత్య అకాడమి పురస్కారం"
                text="ఆంధ్రప్రదేశ్ రాష్ట్ర సాహిత్య అకాడమి పురస్కారాన్ని అందుకున్నారు."
              />

              <Achievement
                icon={Award}
                title="మీడియా అకాడమీ తెలుగు భాషా పురస్కార గ్రహీత"
                text="మీడియా అకాడమీ తెలుగు భాషా పురస్కార గ్రహీత."
              />

            </div>

          </Reveal>

        </div>

      </section>


      {/* =====================================================
          MESSAGE
      ===================================================== */}

      <section
        id="founder-message"
        className="fp-message"
      >

        <div className="fp-message-mandala" />

        <div className="fp-container">

          <Reveal>

            <div className="fp-message-grid">

              <div className="fp-message-mark">

                <img
                  src={founderMessagePortrait}
                  alt="వ్యవస్థాపకులు కళారత్న కత్తిమండ ప్రతాప్ కుమార్"
                />

              </div>


              <div>

                <div className="fp-label">
                  వ్యవస్థాపకుని సందేశం
                </div>


                <h2 className="fp-message-title">

                  నా సందేశం

                  <br />

                  <span>
                    మన సాహిత్యానికి...
                  </span>

                </h2>


                <div className="fp-message-text">

                  <p>

                    “సాహిత్యం ఒక పదం మాత్రమే కాదు...
                    అది ఒక నాగరికతకు ప్రతీక,
                    ఒక సంస్కృతికి వారసత్వం,
                    ఒక సమాజానికి దిశానిర్దేశం
                    చేసే శక్తి.”

                  </p>


                  <p>

                    తెలుగు భాష, సాహిత్యం,
                    సంస్కృతి ప్రపంచవ్యాప్తంగా
                    చిరస్థాయిగా వెలుగొందాలనే
                    సంకల్పంతో శ్రీ శ్రీ కళావేదిక
                    ఆవిర్భవించింది.

                  </p>


                  <p>

                    ‘ప్రతిభ మీది...పట్టాభిషేకం మాది...’
                    అనే మహోన్నత భావంతో,
                    నిరంతరాయంగా నెలనెలా జాతీయ,
                    అంతర్జాతీయ సాహిత్య,
                    సాంస్కృతిక, సామాజిక సేవా
                    కార్యక్రమాలను నిర్వహిస్తూ
                    వేలాది మంది కవులు,
                    రచయితలు, సాహితీవేత్తలు,
                    కళాకారులు, రంగస్థల
                    ప్రతిభావంతులు, యువ
                    సృజనకారులను గుర్తించి,
                    గౌరవించి, సత్కరించి,
                    ప్రపంచానికి పరిచయం చేసే
                    వేదికగా శ్రీ శ్రీ కళావేదిక
                    నిలిచింది.

                  </p>


                  <p>

                    ప్రతి కార్యక్రమం ఒక
                    సాహిత్య యజ్ఞం...
                    ప్రతి సత్కారం ఒక ప్రతిభకు
                    పట్టాభిషేకం...
                    ప్రతి వేదిక ఒక కొత్త
                    సృజనకు ఆరంభం...
                    అనే విశ్వాసంతో తెలుగు
                    సాహిత్యాన్ని, సంస్కృతిని,
                    కళలను ప్రపంచవ్యాప్తంగా
                    విస్తరించేందుకు మా ప్రయాణం
                    నిరంతరం కొనసాగుతోంది.

                  </p>


                  <p>

                    సాహిత్యాన్ని సేవగా...
                    కళను సమాజ చైతన్యానికి
                    సాధనంగా...
                    సంస్కృతిని భావితరాలకు
                    అమూల్య వారసత్వంగా
                    అందించడమే మా ధ్యేయం.

                  </p>


                  <p>

                    వేలాది మంది సాహితీవేత్తల
                    ఆశయాలకు అండగా నిలుస్తూ,
                    ప్రతి ప్రతిభకు గౌరవం కల్పించే
                    విశ్వసనీయ వేదికగా
                    శ్రీ శ్రీ కళావేదిక తన
                    సేవా ప్రస్థానాన్ని మరింత
                    విస్తరిస్తూనే ఉంటుంది.

                  </p>

                </div>


                <div className="fp-signature">

                  <div className="fp-signature-name">

                    — కళారత్న
                    కత్తిమండ ప్రతాప్ కుమార్

                  </div>

                  <div className="fp-signature-role">

                    Founder & Chairman

                    <br />

                    Sri Sri Kalavedhika –
                    International Literary,
                    Cultural & Social Service Organization

                  </div>

                </div>

              </div>

            </div>

          </Reveal>

        </div>

      </section>


      {/* =====================================================
          FOUNDER GALLERY
      ===================================================== */}

      <section className="fp-gallery">

        <div className="fp-container">

          <Reveal>

            <div className="fp-gallery-layout">

              <div className="fp-gallery-copy">

                <div className="fp-label">
                  సేవా ప్రస్థానం
                </div>

                <h2 className="fp-title">

                  వేదికల నుంచి

                  <br />

                  <span>
                    ప్రపంచ వేదిక వరకు
                  </span>

                </h2>

                <p>

                  సాహిత్య కార్యక్రమాలు,
                  సాంస్కృతిక కార్యక్రమాలు,
                  ప్రముఖులతో సమావేశాలు మరియు
                  సామాజిక సేవా కార్యక్రమాల
                  ద్వారా తెలుగు సాహిత్యానికి
                  విస్తృత వేదికను నిర్మించడంలో
                  నిరంతర కృషి.

                </p>

                <p>

                  ప్రతి కార్యక్రమం వెనుక
                  సాహిత్యాన్ని ప్రజల దగ్గరకు
                  తీసుకెళ్లాలనే ఒకే సంకల్పం —
                  తెలుగు భాష, కళ మరియు
                  సంస్కృతిని మరింత బలంగా
                  ముందుకు తీసుకెళ్లడం.

                </p>

              </div>


              <div className="fp-gallery-grid">

                <div className="fp-gallery-item">

                  <img
                    src={founderGallery1}
                    alt="పురస్కార ప్రదాన కార్యక్రమం"
                  />

                  <span className="fp-gallery-caption">
                    పురస్కార ప్రదానం
                  </span>

                </div>


                <div className="fp-gallery-item">

                  <img
                    src={founderGallery2}
                    alt="విదేశీ అతిథులతో సమావేశం"
                  />

                  <span className="fp-gallery-caption">
                    అంతర్జాతీయ అతిథులతో సమావేశం
                  </span>

                </div>


                <div className="fp-gallery-item">

                  <img
                    src={founderGallery3}
                    alt="సాహిత్య వేదికపై సన్మాన కార్యక్రమం"
                  />

                  <span className="fp-gallery-caption">
                    సన్మాన కార్యక్రమం
                  </span>

                </div>


                <div className="fp-gallery-item">

                  <img
                    src={founderGallery4}
                    alt="శ్రీశ్రీ కళావేదిక సాహిత్య సభ"
                  />

                  <span className="fp-gallery-caption">
                    శ్రీశ్రీ కళావేదిక సాహిత్య సభ
                  </span>

                </div>

              </div>

            </div>

          </Reveal>

        </div>

      </section>


      {/* =====================================================
          VALUES
      ===================================================== */}

      <section className="fp-values">

        <div className="fp-container">

          <Reveal>

            <div className="fp-heading">

              <div className="fp-label">
                నాయకత్వ దృక్పథం
              </div>

              <h2 className="fp-title">

                ప్రతిభకు వేదిక...

                <br />

                <span>
                  సేవకు మార్గం.
                </span>

              </h2>

            </div>

          </Reveal>


          <Reveal delay="fp-delay-2">

            <div className="fp-values-grid">

              <Value
                icon={Feather}
                title="సాహిత్య సేవ"
                text="తెలుగు సాహిత్యాన్ని విస్తరించడం మరియు రచయితలకు వేదిక కల్పించడం."
              />

              <Value
                icon={Users}
                title="ప్రతిభ ప్రోత్సాహం"
                text="కొత్త కవులు, రచయితలు, కళాకారులను గుర్తించి గౌరవించడం."
              />

              <Value
                icon={Globe2}
                title="అంతర్జాతీయ విస్తరణ"
                text="తెలుగు భాషా సాహిత్యాన్ని ప్రపంచవ్యాప్తంగా తీసుకెళ్లడం."
              />

              <Value
                icon={HeartHandshake}
                title="సామాజిక సేవ"
                text="సాహిత్యం మరియు కళలతో పాటు సమాజ సేవను కొనసాగించడం."
              />

            </div>

          </Reveal>

        </div>

      </section>


      {/* =====================================================
          SIGNATURE QUOTE
      ===================================================== */}

      <section className="fp-quote">

        <div className="fp-container">

          <Reveal>

            <div className="fp-quote-content">

              <Quote
                className="fp-quote-icon"
                size={45}
              />

              <h2 className="fp-quote-text">

                ప్రతిభ మీది...పట్టాభిషేకం మాది...

              </h2>


              <div className="fp-quote-author">

                — కళారత్న కత్తిమండ ప్రతాప్ కుమార్

              </div>

            </div>

          </Reveal>

        </div>

      </section>


      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="fp-final">

        <div className="fp-container">

          <Reveal>

            <div className="fp-final-symbol">
              ❧
            </div>

            <div className="fp-label">
              శ్రీ శ్రీ కళావేదిక
            </div>

            <h2>

              తెలుగు సాహిత్య ప్రయాణంలో

              <br />

              <span>
                మనమూ భాగస్వాములమవుదాం.
              </span>

            </h2>

            <p>

              సాహిత్యం, సంస్కృతి, కళలు
              మరియు సేవా కార్యక్రమాలతో
              కొనసాగుతున్న ఈ ప్రయాణంలో
              మీరూ భాగస్వాములు కావచ్చు.

            </p>

            <Link
              to="/contact"
              className="fp-gold-btn"
            >

              మమ్మల్ని సంప్రదించండి

              <ArrowUpRight size={16} />

            </Link>

          </Reveal>

        </div>

      </section>

    </div>
  );
}