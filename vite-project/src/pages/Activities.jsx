import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  Award,
  BookOpen,
  CalendarDays,
  Feather,
  Globe2,
  HeartHandshake,
  Mic2,
  Music2,
  PenTool,
  ScrollText,
  Sparkles,
  Users,
} from "lucide-react";

import dance from "../assets/aboutus/dance.png";
import kalapradarshana from "../assets/aboutus/kalapradarshana.png";
import kolatam from "../assets/aboutus/kolatam.png";
import writings from "../assets/aboutus/writings.jpg";


/* =========================================================
   ACTIVITIES PAGE
========================================================= */

const styles = `
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Telugu:wght@400;500;600;700&family=Noto+Serif+Telugu:wght@400;500;600;700&display=swap');

:root {
  --act-wine: #5a101d;
  --act-wine-dark: #23050c;
  --act-wine-light: #7b2032;

  --act-gold: #b88a42;
  --act-gold-light: #e6c982;
  --act-gold-bright: #f3dda1;

  --act-cream: #fbf5eb;
  --act-paper: #f0e2d0;
  --act-paper-light: #fffaf2;

  --act-text: #352821;
  --act-muted: #76685e;
  --act-line: #d8c5a9;
}


/* =========================================================
   BASE
========================================================= */

.activities-page {
  width: 100%;
  overflow: hidden;

  color: var(--act-text);

  background: var(--act-cream);

  font-family:
    "Noto Sans Telugu",
    sans-serif;
}

.activities-page *,
.activities-page *::before,
.activities-page *::after {
  box-sizing: border-box;
}

.activities-page a {
  text-decoration: none;
}

.act-container {
  width: min(1220px, 92%);
  margin: auto;
}


/* =========================================================
   REVEAL ANIMATION
========================================================= */

.act-reveal {
  opacity: 0;

  transform:
    translateY(45px);

  transition:
    opacity .9s ease,
    transform .9s cubic-bezier(.2,.7,.2,1);
}

.act-reveal.act-show {
  opacity: 1;

  transform:
    translateY(0);
}

.act-delay-1 {
  transition-delay: .12s;
}

.act-delay-2 {
  transition-delay: .24s;
}

.act-delay-3 {
  transition-delay: .36s;
}


/* =========================================================
   HERO
========================================================= */

.act-hero {
  position: relative;

  min-height: 760px;

  overflow: hidden;

  color: white;

  background:
    radial-gradient(
      circle at 80% 25%,
      rgba(141, 38, 61, .65),
      transparent 32%
    ),
    radial-gradient(
      circle at 15% 80%,
      rgba(193, 145, 64, .14),
      transparent 30%
    ),
    linear-gradient(
      135deg,
      #170309,
      #470c18 50%,
      #691a2b 78%,
      #21050c
    );
}


/* decorative pattern */

.act-hero::before {
  content: "";

  position: absolute;
  inset: 0;

  opacity: .12;

  background:
    repeating-linear-gradient(
      45deg,
      transparent 0,
      transparent 55px,
      rgba(255,255,255,.04) 56px,
      transparent 58px
    );
}


/* glowing circles */

.act-glow {
  position: absolute;

  border-radius: 50%;

  filter: blur(90px);

  pointer-events: none;
}

.act-glow-one {
  width: 350px;
  height: 350px;

  left: -160px;
  top: 20%;

  background:
    rgba(125, 29, 51, .38);

  animation:
    actGlowMove 9s ease-in-out infinite alternate;
}

.act-glow-two {
  width: 280px;
  height: 280px;

  right: 12%;
  bottom: -130px;

  background:
    rgba(207, 161, 75, .16);

  animation:
    actGlowMove 11s ease-in-out infinite alternate-reverse;
}

@keyframes actGlowMove {
  from {
    transform: translate(0, 0);
  }

  to {
    transform: translate(35px, -25px);
  }
}


/* =========================================================
   ROTATING DECORATION
========================================================= */

.act-wheel {
  position: absolute;

  width: 780px;
  height: 780px;

  right: -280px;
  top: -80px;

  border-radius: 50%;

  opacity: .10;

  background:
    repeating-conic-gradient(
      from 0deg,
      var(--act-gold-light) 0deg 2deg,
      transparent 2deg 14deg
    );

  mask:
    radial-gradient(
      circle,
      transparent 0 20%,
      #000 21% 23%,
      transparent 24% 31%,
      #000 32% 35%,
      transparent 36% 43%,
      #000 44% 47%,
      transparent 48% 55%,
      #000 56% 58%,
      transparent 59%
    );

  -webkit-mask:
    radial-gradient(
      circle,
      transparent 0 20%,
      #000 21% 23%,
      transparent 24% 31%,
      #000 32% 35%,
      transparent 36% 43%,
      #000 44% 47%,
      transparent 48% 55%,
      #000 56% 58%,
      transparent 59%
    );

  animation:
    actRotate 70s linear infinite;
}

@keyframes actRotate {
  to {
    transform: rotate(360deg);
  }
}


/* =========================================================
   HERO CONTENT
========================================================= */

.act-hero-inner {
  position: relative;

  z-index: 3;

  min-height: 760px;

  display: grid;

  grid-template-columns:
    1fr
    .95fr;

  gap: 70px;

  align-items: center;
}


.act-hero-copy {
  animation:
    actHeroIn 1s cubic-bezier(.2,.8,.2,1) both;
}

@keyframes actHeroIn {
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


.act-eyebrow {
  display: flex;

  align-items: center;

  gap: 12px;

  color:
    var(--act-gold-light);

  font-size: 10px;
}

.act-eyebrow-line {
  width: 42px;
  height: 1px;

  background:
    var(--act-gold-light);
}


.act-hero-title {
  margin:
    25px 0 18px;

  font-family:
    "Noto Serif Telugu",
    serif;

  font-size:
    clamp(52px, 6vw, 82px);

  line-height: 1.38;

  font-weight: 500;
}

.act-hero-title span {
  color:
    var(--act-gold-light);

  background:
    linear-gradient(
      90deg,
      #b8863e,
      #f1d793,
      #b9863e,
      #f2d99a
    );

  background-size:
    300% auto;

  -webkit-background-clip:
    text;

  background-clip:
    text;

  color: transparent;

  animation:
    actGoldFlow 5s linear infinite;
}

@keyframes actGoldFlow {
  to {
    background-position: 300% center;
  }
}


.act-hero-description {
  max-width: 600px;

  color:
    #d6c2bc;

  font-size: 12px;

  line-height: 2.2;
}


.act-hero-buttons {
  display: flex;

  gap: 20px;

  align-items: center;

  margin-top: 30px;
}


.act-button {
  display: inline-flex;

  align-items: center;

  justify-content: center;

  gap: 9px;

  min-height: 46px;

  padding:
    0 20px;

  font-size: 10px;

  transition:
    .35s ease;
}


.act-button-gold {
  color: white;

  background:
    linear-gradient(
      110deg,
      #997037,
      #d4a954,
      #997037
    );

  background-size:
    200% auto;

  box-shadow:
    0 12px 35px
    rgba(184,137,63,.23);
}

.act-button-gold:hover {
  transform:
    translateY(-5px);

  box-shadow:
    0 20px 50px
    rgba(184,137,63,.35);
}


.act-button-outline {
  color: white;

  border-bottom:
    1px solid
    var(--act-gold-light);

  padding:
    8px 0;
}

.act-button-outline:hover {
  color:
    var(--act-gold-light);

  transform:
    translateX(5px);
}


/* =========================================================
   HERO VISUAL
========================================================= */

.act-hero-visual {
  position: relative;

  height: 590px;
}


.act-main-photo {
  position: absolute;

  z-index: 3;

  width: 76%;
  height: 490px;

  right: 5%;
  top: 35px;

  padding: 10px;

  background:
    #fff7e9;

  box-shadow:
    0 40px 90px
    rgba(0,0,0,.45);

  transform:
    rotate(1.5deg);

  animation:
    actPhotoFloat 7s ease-in-out infinite;
}

@keyframes actPhotoFloat {
  0%,100% {
    transform:
      rotate(1.5deg)
      translateY(0);
  }

  50% {
    transform:
      rotate(1.5deg)
      translateY(-12px);
  }
}


.act-main-photo-inner {
  position: relative;

  width: 100%;
  height: 100%;

  overflow: hidden;

  background:
    #d5c1a5;
}


.act-main-photo img {
  width: 100%;
  height: 100%;

  object-fit: contain;

  transition:
    transform 1s ease;
}

.act-main-photo:hover img {
  transform:
    scale(1.04);
}


.act-main-photo-inner::after {
  content: "";

  position: absolute;

  inset: 0;

  background:
    linear-gradient(
      to top,
      rgba(25,3,9,.72),
      transparent 45%
    );
}


.act-photo-label {
  position: absolute;

  z-index: 4;

  left: 24px;
  bottom: 22px;

  color: white;
}

.act-photo-label small {
  display: block;

  color:
    var(--act-gold-light);

  font-size: 8px;
}

.act-photo-label strong {
  display: block;

  margin-top: 5px;

  font-family:
    "Noto Serif Telugu",
    serif;

  font-size: 18px;

  font-weight: 500;
}


/* floating image */

.act-small-photo {
  position: absolute;

  z-index: 6;

  padding: 7px;

  background:
    #fff8eb;

  box-shadow:
    0 20px 50px
    rgba(0,0,0,.38);
}

.act-small-photo img {
  width: 100%;
  height: 100%;

  object-fit: contain;

  background:
    #d4c0a5;
}


.act-small-one {
  width: 175px;
  height: 145px;

  left: 0;
  bottom: 25px;

  transform:
    rotate(-5deg);

  animation:
    actSmallOne 6s ease-in-out infinite;
}

.act-small-two {
  width: 170px;
  height: 140px;

  right: -4%;
  top: 0;

  transform:
    rotate(5deg);

  animation:
    actSmallTwo 6.5s ease-in-out infinite;
}


@keyframes actSmallOne {
  0%,100% {
    transform:
      rotate(-5deg)
      translateY(0);
  }

  50% {
    transform:
      rotate(-3deg)
      translateY(-13px);
  }
}


@keyframes actSmallTwo {
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


/* floating seal */

.act-seal {
  position: absolute;

  z-index: 8;

  left: 10%;
  top: 39%;

  width: 110px;
  height: 110px;

  display: flex;

  flex-direction: column;

  align-items: center;

  justify-content: center;

  border:
    1px solid
    rgba(228,196,123,.75);

  border-radius: 50%;

  color:
    var(--act-gold-light);

  background:
    rgba(30,4,11,.93);

  box-shadow:
    0 15px 45px
    rgba(0,0,0,.4);
}

.act-seal::before {
  content: "";

  position: absolute;

  inset: 7px;

  border:
    1px dashed
    rgba(228,196,123,.45);

  border-radius: 50%;
}

.act-seal strong {
  position: relative;

  font-family:
    "Noto Serif Telugu",
    serif;

  font-size: 25px;
}

.act-seal span {
  position: relative;

  font-size: 8px;
}


/* =========================================================
   SECTION HEADING
========================================================= */

.act-section {
  padding:
    120px 0;
}


.act-heading {
  max-width: 760px;

  margin:
    0 auto;

  text-align: center;
}


.act-label {
  color:
    var(--act-gold);

  font-size: 10px;
}


.act-title {
  margin:
    13px 0;

  color:
    var(--act-wine);

  font-family:
    "Noto Serif Telugu",
    serif;

  font-size:
    clamp(38px, 5vw, 62px);

  line-height: 1.5;

  font-weight: 500;
}


.act-title span {
  color:
    var(--act-gold);
}


.act-heading p {
  color:
    var(--act-muted);

  font-size: 11px;

  line-height: 2;
}


/* =========================================================
   INTRO
========================================================= */

.act-intro {
  background:
    linear-gradient(
      135deg,
      #f4e8d7,
      #fbf5eb
    );
}


.act-intro-grid {
  display: grid;

  grid-template-columns:
    1fr
    1fr;

  gap: 80px;

  align-items: center;

  margin-top: 70px;
}


.act-intro-copy p {
  color:
    var(--act-muted);

  font-size: 12px;

  line-height: 2.2;

  margin-bottom: 22px;
}


.act-intro-highlight {
  position: relative;

  padding:
    28px 30px;

  margin-top: 30px;

  border-left:
    3px solid
    var(--act-gold);

  background:
    rgba(255,255,255,.5);

  box-shadow:
    0 20px 50px
    rgba(67,35,17,.08);
}


.act-intro-highlight strong {
  color:
    var(--act-wine);

  font-family:
    "Noto Serif Telugu",
    serif;

  font-size: 20px;

  font-weight: 500;

  line-height: 1.8;
}


.act-intro-highlight p {
  margin:
    10px 0 0;

  font-size: 10px;
}


/* =========================================================
   FEATURE IMAGE COLLAGE
========================================================= */

.act-collage {
  position: relative;

  min-height: 520px;
}


.act-collage-image {
  position: absolute;

  padding: 8px;

  background:
    #fff9ee;

  box-shadow:
    0 25px 60px
    rgba(62,35,18,.16);

  overflow: hidden;

  transition:
    .45s ease;
}


.act-collage-image img {
  width: 100%;
  height: 100%;

  object-fit: contain;

  background:
    #d9c5a8;
}


.act-collage-image:hover {
  z-index: 10;

  transform:
    rotate(0)
    translateY(-10px)
    scale(1.03);
}


.act-collage-one {
  width: 63%;
  height: 330px;

  left: 0;
  top: 0;

  transform:
    rotate(-3deg);
}


.act-collage-two {
  width: 55%;
  height: 285px;

  right: 0;
  bottom: 0;

  transform:
    rotate(4deg);
}


.act-collage-three {
  width: 40%;
  height: 210px;

  left: 25%;
  bottom: 25px;

  transform:
    rotate(-1deg);
}


.act-collage-label {
  position: absolute;

  z-index: 20;

  left: 12px;
  bottom: 15px;

  padding:
    7px 11px;

  color: white;

  background:
    rgba(53,6,15,.83);

  font-size: 8px;
}


/* =========================================================
   ACTIVITY CARDS
========================================================= */

.act-activities {
  background:
    var(--act-cream);
}


.act-card-grid {
  display: grid;

  grid-template-columns:
    repeat(3, 1fr);

  gap: 1px;

  margin-top: 65px;

  background:
    var(--act-line);
}


.act-card {
  position: relative;

  min-height: 285px;

  padding:
    32px 28px;

  overflow: hidden;

  background:
    #fff9f0;

  transition:
    .45s ease;
}


.act-card::after {
  content: "";

  position: absolute;

  width: 180px;
  height: 180px;

  right: -90px;
  bottom: -90px;

  border:
    1px solid
    rgba(184,137,63,.2);

  border-radius: 50%;

  transition:
    .6s ease;
}


.act-card:hover {
  z-index: 2;

  color: white;

  background:
    linear-gradient(
      145deg,
      #5a101d,
      #761d30
    );

  transform:
    translateY(-8px);

  box-shadow:
    0 30px 65px
    rgba(67,12,25,.18);
}


.act-card:hover::after {
  transform:
    scale(2);
}


.act-card-icon {
  width: 55px;
  height: 55px;

  display: flex;

  align-items: center;

  justify-content: center;

  color:
    var(--act-gold);

  border:
    1px solid
    rgba(184,137,63,.35);

  border-radius: 50%;

  background:
    rgba(255,255,255,.5);
}


.act-card h3 {
  margin:
    23px 0 10px;

  color:
    var(--act-wine);

  font-family:
    "Noto Serif Telugu",
    serif;

  font-size: 20px;

  line-height: 1.7;

  font-weight: 500;
}


.act-card p {
  color:
    var(--act-muted);

  font-size: 10px;

  line-height: 1.9;

  margin: 0;
}


.act-card:hover h3 {
  color: white;
}


.act-card:hover p {
  color:
    #dcc7c0;
}


/* =========================================================
   NUMBERS
========================================================= */

.act-numbers {
  padding:
    90px 0;

  color: white;

  background:
    linear-gradient(
      135deg,
      #26060d,
      #5b101e
    );
}


.act-number-grid {
  display: grid;

  grid-template-columns:
    repeat(4, 1fr);

  gap: 1px;

  background:
    rgba(255,255,255,.12);
}


.act-number {
  padding:
    35px 20px;

  text-align: center;

  background:
    rgba(255,255,255,.025);
}


.act-number strong {
  display: block;

  color:
    var(--act-gold-light);

  font-family:
    "Noto Serif Telugu",
    serif;

  font-size: 42px;

  font-weight: 500;
}


.act-number span {
  display: block;

  margin-top: 5px;

  color:
    #d7c2bc;

  font-size: 9px;
}


/* =========================================================
   LITERARY JOURNEY
========================================================= */

.act-journey {
  background:
    #eee0cd;
}


.act-timeline {
  position: relative;

  max-width: 950px;

  margin:
    75px auto 0;
}


.act-timeline::before {
  content: "";

  position: absolute;

  left: 50%;

  top: 0;
  bottom: 0;

  width: 1px;

  background:
    var(--act-gold);

  transform:
    translateX(-50%);
}


.act-timeline-item {
  position: relative;

  width: 50%;

  padding:
    0 50px 65px;
}


.act-timeline-item:nth-child(odd) {
  left: 0;

  text-align: right;
}


.act-timeline-item:nth-child(even) {
  left: 50%;
}


.act-timeline-dot {
  position: absolute;

  top: 3px;

  width: 13px;
  height: 13px;

  border:
    2px solid
    var(--act-gold);

  border-radius: 50%;

  background:
    var(--act-cream);

  box-shadow:
    0 0 0 5px
    rgba(184,137,63,.12);
}


.act-timeline-item:nth-child(odd)
.act-timeline-dot {
  right: -7px;
}


.act-timeline-item:nth-child(even)
.act-timeline-dot {
  left: -7px;
}


.act-timeline-year {
  color:
    var(--act-gold);

  font-size: 9px;

  letter-spacing: 1px;
}


.act-timeline-item h3 {
  margin:
    10px 0;

  color:
    var(--act-wine);

  font-family:
    "Noto Serif Telugu",
    serif;

  font-size: 20px;

  font-weight: 500;
}


.act-timeline-item p {
  margin: 0;

  color:
    var(--act-muted);

  font-size: 10px;

  line-height: 1.9;
}


/* =========================================================
   SPECIAL HIGHLIGHT
========================================================= */

.act-highlight {
  position: relative;

  overflow: hidden;

  padding:
    125px 0;

  color: white;

  background:
    radial-gradient(
      circle at 15% 50%,
      rgba(132,36,59,.6),
      transparent 32%
    ),
    linear-gradient(
      135deg,
      #190309,
      #5b101f
    );
}


.act-highlight-wheel {
  position: absolute;

  width: 700px;
  height: 700px;

  right: -230px;
  top: -80px;

  opacity: .08;

  border-radius: 50%;

  background:
    repeating-conic-gradient(
      from 0deg,
      var(--act-gold-light) 0deg 2deg,
      transparent 2deg 15deg
    );

  mask:
    radial-gradient(
      circle,
      transparent 0 20%,
      #000 21% 23%,
      transparent 24% 32%,
      #000 33% 36%,
      transparent 37% 45%,
      #000 46% 49%,
      transparent 50%
    );

  -webkit-mask:
    radial-gradient(
      circle,
      transparent 0 20%,
      #000 21% 23%,
      transparent 24% 32%,
      #000 33% 36%,
      transparent 37% 45%,
      #000 46% 49%,
      transparent 50%
    );

  animation:
    actRotate 60s linear infinite;
}


.act-highlight-content {
  position: relative;

  z-index: 3;

  max-width: 950px;

  margin: auto;

  text-align: center;
}


.act-highlight-icon {
  color:
    var(--act-gold-light);

  margin-bottom: 20px;
}


.act-highlight h2 {
  margin:
    0 0 20px;

  font-family:
    "Noto Serif Telugu",
    serif;

  font-size:
    clamp(36px,5vw,60px);

  font-weight: 500;

  line-height: 1.65;
}


.act-highlight h2 span {
  color:
    var(--act-gold-light);
}


.act-highlight p {
  color:
    #d5c0b9;

  font-size: 12px;

  line-height: 2.2;
}


/* =========================================================
   GLOBAL REACH
========================================================= */

.act-reach {
  padding:
    120px 0;

  background:
    var(--act-cream);
}


.act-reach-grid {
  display: grid;

  grid-template-columns:
    1fr 1fr;

  gap: 70px;

  align-items: center;

  margin-top: 65px;
}


.act-reach-copy p {
  color:
    var(--act-muted);

  font-size: 12px;

  line-height: 2.2;
}


.act-location-list {
  display: grid;

  grid-template-columns:
    1fr 1fr;

  gap: 10px;

  margin-top: 30px;
}


.act-location {
  display: flex;

  align-items: center;

  gap: 10px;

  padding:
    14px;

  color:
    var(--act-wine);

  border:
    1px solid
    var(--act-line);

  background:
    #fff8ed;

  font-size: 10px;

  transition:
    .3s ease;
}


.act-location:hover {
  color: white;

  background:
    var(--act-wine);

  transform:
    translateX(5px);
}


.act-reach-card {
  position: relative;

  min-height: 420px;

  padding: 10px;

  background:
    linear-gradient(
      135deg,
      #fff8eb,
      #ead7bc
    );

  box-shadow:
    0 30px 70px
    rgba(60,30,15,.13);
}


.act-reach-card-inner {
  position: relative;

  width: 100%;
  height: 100%;

  min-height: 400px;

  overflow: hidden;

  background:
    #d5c2a5;
}


.act-reach-card img {
  width: 100%;
  height: 100%;

  min-height: 400px;

  object-fit: contain;
}


/* =========================================================
   CTA
========================================================= */

.act-final {
  padding:
    100px 0;

  text-align: center;

  background:
    #eee0cd;
}


.act-final-symbol {
  color:
    var(--act-gold);

  font-size: 42px;
}


.act-final h2 {
  margin:
    12px 0 20px;

  color:
    var(--act-wine);

  font-family:
    "Noto Serif Telugu",
    serif;

  font-size:
    clamp(34px,4vw,55px);

  font-weight: 500;
}


.act-final h2 span {
  color:
    var(--act-gold);
}


.act-final p {
  max-width: 650px;

  margin:
    auto auto 28px;

  color:
    var(--act-muted);

  font-size: 11px;

  line-height: 2;
}


/* =========================================================
   MOBILE
========================================================= */

@media (max-width: 1050px) {

  .act-hero-inner {
    grid-template-columns: 1fr;

    gap: 25px;

    padding:
      70px 0;
  }

  .act-hero {
    min-height: auto;
  }

  .act-hero-inner {
    min-height: auto;
  }

  .act-hero-visual {
    max-width: 720px;

    width: 100%;

    margin: auto;
  }

  .act-card-grid {
    grid-template-columns:
      repeat(2,1fr);
  }

  .act-number-grid {
    grid-template-columns:
      repeat(2,1fr);
  }

  .act-reach-grid {
    grid-template-columns: 1fr;
  }
}


@media (max-width: 650px) {

  .act-container {
    width: 92%;
  }

  .act-hero-inner {
    padding:
      55px 0 70px;
  }

  .act-hero-title {
    font-size: 45px;
  }

  .act-hero-description {
    font-size: 10px;
  }

  .act-hero-buttons {
    flex-direction: column;

    align-items: flex-start;
  }

  .act-hero-visual {
    height: 430px;
  }

  .act-main-photo {
    width: 76%;
    height: 355px;

    right: 4%;
  }

  .act-small-one {
    width: 125px;
    height: 105px;

    left: -1px;
    bottom: 25px;
  }

  .act-small-two {
    width: 125px;
    height: 105px;

    right: -1px;
    top: 0;
  }

  .act-seal {
    width: 82px;
    height: 82px;

    left: 4%;
    top: 40%;
  }

  .act-seal strong {
    font-size: 19px;
  }

  .act-section,
  .act-reach,
  .act-highlight {
    padding:
      82px 0;
  }

  .act-title {
    font-size: 38px;
  }

  .act-intro-grid {
    grid-template-columns: 1fr;

    gap: 50px;
  }

  .act-collage {
    min-height: 390px;
  }

  .act-collage-one {
    height: 250px;
  }

  .act-collage-two {
    height: 215px;
  }

  .act-collage-three {
    height: 155px;
  }

  .act-card-grid {
    grid-template-columns: 1fr;
  }

  .act-card {
    min-height: 240px;
  }

  .act-number-grid {
    grid-template-columns: 1fr 1fr;
  }

  .act-number strong {
    font-size: 32px;
  }

  .act-timeline::before {
    left: 8px;
  }

  .act-timeline-item {
    width: 100%;

    left: 0 !important;

    padding:
      0 0 50px 38px;

    text-align: left !important;
  }

  .act-timeline-item:nth-child(odd)
  .act-timeline-dot,
  .act-timeline-item:nth-child(even)
  .act-timeline-dot {
    left: 2px;
    right: auto;
  }

  .act-location-list {
    grid-template-columns: 1fr;
  }

  .act-reach-card {
    min-height: 320px;
  }

  .act-reach-card-inner {
    min-height: 300px;
  }

  .act-reach-card img {
    min-height: 300px;
  }
}


@media (prefers-reduced-motion: reduce) {

  .activities-page *,
  .activities-page *::before,
  .activities-page *::after {
    animation-duration:
      .01ms !important;

    animation-iteration-count:
      1 !important;

    transition-duration:
      .01ms !important;
  }

  .act-reveal {
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
            element.classList.add("act-show");

            observer.unobserve(element);
          }
        },
        {
          threshold: 0.12,
        }
      );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`act-reveal ${delay} ${className}`}
    >
      {children}
    </div>
  );
}


/* =========================================================
   ACTIVITY CARD
========================================================= */

function ActivityCard({
  icon: Icon,
  title,
  text,
}) {
  return (
    <article className="act-card">

      <div className="act-card-icon">
        <Icon size={24} />
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
   TIMELINE ITEM
========================================================= */

function TimelineItem({
  year,
  title,
  text,
}) {
  return (
    <div className="act-timeline-item">

      <div className="act-timeline-dot" />

      <div className="act-timeline-year">
        {year}
      </div>

      <h3>
        {title}
      </h3>

      <p>
        {text}
      </p>

    </div>
  );
}


/* =========================================================
   ACTIVITIES PAGE
========================================================= */

export default function Activities() {

  return (
    <div className="activities-page">

      <style>
        {styles}
      </style>


      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="act-hero">

        <div className="act-wheel" />

        <div className="act-glow act-glow-one" />

        <div className="act-glow act-glow-two" />


        <div className="act-container">

          <div className="act-hero-inner">

            {/* HERO TEXT */}

            <div className="act-hero-copy">

              <div className="act-eyebrow">

                <span className="act-eyebrow-line" />

                శ్రీ శ్రీ కళావేదిక

              </div>


              <h1 className="act-hero-title">

                సాహిత్య

                <br />

                <span>
                  జైత్రయాత్ర
                </span>

              </h1>


              <p className="act-hero-description">

                తెలుగు భాష, సాహిత్యం, సంస్కృతి,
                కళలు, సంప్రదాయాలు మరియు
                సామాజిక సేవలను ప్రపంచవ్యాప్తంగా
                విస్తరింపజేయాలనే మహోన్నత
                లక్ష్యంతో శ్రీ శ్రీ కళావేదిక
                నిరంతర సాహిత్య యజ్ఞాన్ని
                కొనసాగిస్తోంది.

              </p>


              <p className="act-hero-description">

                కవులు, రచయితలు, సాహితీవేత్తలు,
                కళాకారులు మరియు యువ
                సృజనకారులకు నిరంతర
                ప్రోత్సాహాన్ని అందిస్తూ
                ఒకే కుటుంబంగా కలుపుతున్న
                సృజనాత్మక వేదిక.

              </p>


              <div className="act-hero-buttons">

                <a
                  href="#activities"
                  className="act-button act-button-gold"
                >

                  మా కార్యక్రమాలు

                  <ArrowUpRight size={16} />

                </a>


                <Link
                  to="/events"
                  className="act-button act-button-outline"
                >

                  కార్యక్రమాలు చూడండి

                  <ArrowUpRight size={15} />

                </Link>

              </div>

            </div>


            {/* HERO IMAGES */}

            <div className="act-hero-visual">

              <div className="act-main-photo">

                <div className="act-main-photo-inner">

                  <img
                    src={kalapradarshana}
                    alt="సాంస్కృతిక కళా ప్రదర్శన"
                  />

                  <div className="act-photo-label">

                    <small>
                      కళ • సంస్కృతి • సంప్రదాయం
                    </small>

                    <strong>
                      కళా ప్రదర్శనలు
                    </strong>

                  </div>

                </div>

              </div>


              <div className="act-small-photo act-small-one">

                <img
                  src={kolatam}
                  alt="కోలాటం కార్యక్రమం"
                />

              </div>


              <div className="act-small-photo act-small-two">

                <img
                  src={dance}
                  alt="నృత్య ప్రదర్శన"
                />

              </div>


              <div className="act-seal">

                <span>
                  సాహిత్య
                </span>

                <strong>
                  యజ్ఞం
                </strong>

                <span>
                  నిరంతరం
                </span>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          INTRODUCTION
      ===================================================== */}

      <section className="act-section act-intro">

        <div className="act-container">

          <Reveal>

            <div className="act-heading">

              <div className="act-label">
                మా కార్యాచరణ
              </div>

              <h2 className="act-title">

                అక్షరం నుంచి

                <br />

                <span>
                  ఆచరణ వరకు
                </span>

              </h2>

              <p>

                సాహిత్యాన్ని సమాజ చైతన్యానికి
                సాధనంగా, కళను మానవీయ
                విలువలకు వేదికగా, సేవను
                సంస్థ ధర్మంగా భావిస్తూ
                కొనసాగుతున్న కార్యక్రమాల
                సమాహారం.

              </p>

            </div>

          </Reveal>


          <div className="act-intro-grid">

            <Reveal>

              <div className="act-intro-copy">

                <p>

                  తెలుగు భాష, సాహిత్యం,
                  సంస్కృతి, కళలు, సంప్రదాయాలు,
                  సామాజిక సేవలను ప్రపంచవ్యాప్తంగా
                  విస్తరింపజేయాలనే మహోన్నత
                  లక్ష్యంతో శ్రీ శ్రీ కళావేదిక
                  నిరంతర సాహిత్య యజ్ఞాన్ని
                  కొనసాగిస్తోంది.

                </p>


                <p>

                  నెలనెలా నిరంతరంగా సాహిత్య,
                  సాంస్కృతిక, సామాజిక సేవా
                  కార్యక్రమాలను నిర్వహిస్తూ
                  వేలాది మంది కవులు,
                  రచయితలు, కళాకారులు,
                  సాహితీ అభిమానులను
                  ఒకే కుటుంబంగా కలుపుతోంది.

                </p>


                <div className="act-intro-highlight">

                  <strong>

                    ప్రతిభ మీది...
                    వేదిక మాది...
                    మీ ప్రతిభకు మా పట్టాభిషేకం.

                  </strong>

                  <p>

                    ప్రతిభను గుర్తించి,
                    ప్రోత్సహించి, గౌరవించి
                    ప్రపంచానికి పరిచయం
                    చేయడం మా లక్ష్యం.

                  </p>

                </div>

              </div>

            </Reveal>


            <Reveal delay="act-delay-2">

              <div className="act-collage">

                <div className="act-collage-image act-collage-one">

                  <img
                    src={writings}
                    alt="తెలుగు రచనలు"
                  />

                  <span className="act-collage-label">
                    తెలుగు సాహిత్యం
                  </span>

                </div>


                <div className="act-collage-image act-collage-two">

                  <img
                    src={dance}
                    alt="నృత్య ప్రదర్శన"
                  />

                  <span className="act-collage-label">
                    నృత్య కళ
                  </span>

                </div>


                <div className="act-collage-image act-collage-three">

                  <img
                    src={kolatam}
                    alt="కోలాటం"
                  />

                  <span className="act-collage-label">
                    జానపద కళ
                  </span>

                </div>

              </div>

            </Reveal>

          </div>

        </div>

      </section>


      {/* =====================================================
          MAIN ACTIVITIES
      ===================================================== */}

      <section
        id="activities"
        className="act-section act-activities"
      >

        <div className="act-container">

          <Reveal>

            <div className="act-heading">

              <div className="act-label">
                కార్యక్రమాలు
              </div>

              <h2 className="act-title">

                మా ప్రధాన

                <br />

                <span>
                  సాహిత్య కార్యకలాపాలు
                </span>

              </h2>

              <p>

                సాహిత్యం, సంస్కృతి, కళలు
                మరియు సామాజిక సేవల
                విభిన్న రంగాల్లో నిరంతరం
                నిర్వహిస్తున్న కార్యక్రమాలు.

              </p>

            </div>

          </Reveal>


          <Reveal delay="act-delay-2">

            <div className="act-card-grid">

              <ActivityCard
                icon={Feather}
                title="కవి సమ్మేళనాలు"
                text="వందలాది శతాధిక కవి సమ్మేళనాల ద్వారా కవులకు తమ సృజనను వినిపించే విస్తృత వేదికను అందించడం."
              />


              <ActivityCard
                icon={BookOpen}
                title="సాహిత్య సదస్సులు"
                text="తెలుగు భాష, సాహిత్యం మరియు సమకాలీన సాహిత్య అంశాలపై సాహిత్య సదస్సులు, చర్చలు నిర్వహించడం."
              />


              <ActivityCard
                icon={ScrollText}
                title="పుస్తకావిష్కరణలు"
                text="రచయితల కొత్త రచనలను పాఠకులకు పరిచయం చేస్తూ పుస్తకావిష్కరణ కార్యక్రమాలను నిర్వహించడం."
              />


              <ActivityCard
                icon={Music2}
                title="కళా ప్రదర్శనలు"
                text="నృత్యం, సంగీతం, జానపద కళలు మరియు రంగస్థల కళాకారుల ప్రతిభను ప్రదర్శించే కార్యక్రమాలు."
              />


              <ActivityCard
                icon={Mic2}
                title="రంగస్థల ప్రదర్శనలు"
                text="రంగస్థల కళాకారులకు ప్రోత్సాహం అందిస్తూ వారి ప్రతిభను విస్తృత ప్రేక్షకులకు పరిచయం చేయడం."
              />


              <ActivityCard
                icon={Globe2}
                title="ప్రపంచ తెలుగు మహాసభలు"
                text="జాతీయ మరియు అంతర్జాతీయ స్థాయిలో తెలుగు సాహిత్య మహాసభలను నిర్వహిస్తూ ప్రపంచ తెలుగు సమాజాన్ని కలుపుకోవడం."
              />


              <ActivityCard
                icon={Users}
                title="యువ ప్రతిభ ప్రోత్సాహం"
                text="కొత్త రచయితలు, యువ కవులు, యువ కళాకారులను గుర్తించి వారికి అవకాశాలు మరియు గౌరవం అందించడం."
              />


              <ActivityCard
                icon={Award}
                title="సత్కారాలు & పురస్కారాలు"
                text="సాహిత్య, కళా మరియు సామాజిక సేవా రంగాల్లో విశేష కృషి చేసిన ప్రతిభావంతులను సత్కరించడం."
              />


              <ActivityCard
                icon={HeartHandshake}
                title="సామాజిక సేవ"
                text="సాహిత్య కార్యక్రమాలతో పాటు సమాజ అభ్యున్నతి కోసం వివిధ సామాజిక సేవా కార్యక్రమాలను నిర్వహించడం."
              />

            </div>

          </Reveal>

        </div>

      </section>


      {/* =====================================================
          NUMBERS
      ===================================================== */}

      <section className="act-numbers">

        <div className="act-container">

          <Reveal>

            <div className="act-number-grid">

              <div className="act-number">

                <strong>
                  7
                </strong>

                <span>
                  ప్రపంచ తెలుగు సాహిత్య మహాసభలు
                </span>

              </div>


              <div className="act-number">

                <strong>
                  48
                </strong>

                <span>
                  గంటల నిరవధిక సాహిత్య మహాయజ్ఞం
                </span>

              </div>


              <div className="act-number">

                <strong>
                  100+
                </strong>

                <span>
                  శతాధిక కవి సమ్మేళనాలు
                </span>

              </div>


              <div className="act-number">

                <strong>
                  ∞
                </strong>

                <span>
                  కొనసాగుతున్న సాహిత్య సేవా ప్రస్థానం
                </span>

              </div>

            </div>

          </Reveal>

        </div>

      </section>


      {/* =====================================================
          LITERARY JOURNEY
      ===================================================== */}

      <section className="act-section act-journey">

        <div className="act-container">

          <Reveal>

            <div className="act-heading">

              <div className="act-label">
                సాహిత్య ప్రస్థానం
              </div>

              <h2 className="act-title">

                ఒక వేదిక నుంచి

                <br />

                <span>
                  ప్రపంచ వేదిక వరకు
                </span>

              </h2>

              <p>

                అంతర్వేది శ్రీ లక్ష్మీ
                నరసింహస్వామి ఆలయంలో
                ప్రారంభమైన సాహిత్య,
                సాంస్కృతిక జైత్రయాత్ర
                విస్తరిస్తూ ప్రపంచ వేదికను
                చేరుకుంటోంది.

              </p>

            </div>

          </Reveal>


          <Reveal delay="act-delay-2">

            <div className="act-timeline">

              <TimelineItem
                year="ప్రారంభం"
                title="అంతర్వేది"
                text="అంతర్వేది శ్రీ లక్ష్మీ నరసింహస్వామి ఆలయంలో సాహిత్య, సాంస్కృతిక జైత్రయాత్రకు శ్రీకారం."
              />


              <TimelineItem
                year="నెలనెలా"
                title="నిరంతర కార్యక్రమాలు"
                text="సాహిత్య, సాంస్కృతిక మరియు సామాజిక సేవా కార్యక్రమాలను నిరంతరం నిర్వహించడం."
              />


              <TimelineItem
                year="జాతీయ స్థాయి"
                title="సాహిత్య మహాసభలు"
                text="ఆంధ్రప్రదేశ్, తెలంగాణతో పాటు కర్ణాటక, తమిళనాడు, ఢిల్లీ, మైసూరు ప్రాంతాల్లో కార్యక్రమాల నిర్వహణ."
              />


              <TimelineItem
                year="అంతర్జాతీయ స్థాయి"
                title="ప్రపంచ తెలుగు మహాసభలు"
                text="కువైట్, దుబాయ్, మలేషియా వంటి దేశాల్లో తెలుగు సాహిత్య పతాకాన్ని ఎగురవేయడం."
              />


              <TimelineItem
                year="భవిష్యత్"
                title="అమెరికా వైపు అడుగు"
                text="త్వరలో అమెరికాలో మరో ప్రపంచ తెలుగు సాహిత్య మహాసభ నిర్వహించేందుకు సన్నాహాలు."
              />

            </div>

          </Reveal>

        </div>

      </section>


      {/* =====================================================
          48 HOURS HIGHLIGHT
      ===================================================== */}

      <section className="act-highlight">

        <div className="act-highlight-wheel" />

        <div className="act-container">

          <Reveal>

            <div className="act-highlight-content">

              <Sparkles
                className="act-highlight-icon"
                size={48}
              />

              <h2>

                48 గంటల పాటు

                <br />

                <span>
                  నిరవధిక సాహిత్య మహాయజ్ఞం
                </span>

              </h2>

              <p>

                ప్రపంచ సాహిత్య చరిత్రలోనే
                అరుదైన అక్షర విప్లవంగా
                నిలిచేలా 48 గంటల పాటు
                నిరవధిక సాహిత్య మహాయజ్ఞాన్ని
                నిర్వహించిన ఘనత శ్రీ శ్రీ
                కళావేదిక సాహిత్య ప్రస్థానంలో
                ఒక ప్రత్యేక అధ్యాయం.

              </p>

            </div>

          </Reveal>

        </div>

      </section>


      {/* =====================================================
          GLOBAL REACH
      ===================================================== */}

      <section className="act-reach">

        <div className="act-container">

          <Reveal>

            <div className="act-heading">

              <div className="act-label">
                ప్రపంచవ్యాప్త ప్రస్థానం
              </div>

              <h2 className="act-title">

                జిల్లాల నుంచి దేశాలకు...

                <br />

                <span>
                  దేశాల నుంచి ప్రపంచానికి...
                </span>

              </h2>

            </div>

          </Reveal>


          <div className="act-reach-grid">

            <Reveal>

              <div className="act-reach-copy">

                <p>

                  ఆంధ్రప్రదేశ్, తెలంగాణ రాష్ట్రాలతో
                  పాటు కర్ణాటక, తమిళనాడు, ఢిల్లీ,
                  మైసూరు ప్రాంతాల్లో విజయవంతంగా
                  సాహిత్య మహాసభలు నిర్వహించిన
                  శ్రీ శ్రీ కళావేదిక, విదేశాల్లో
                  కువైట్, దుబాయ్, మలేషియా
                  దేశాల్లో కూడా తెలుగు
                  సాహిత్య పతాకాన్ని ఎగురవేసింది.

                </p>


                <p>

                  తెలుగు భాష, సాహిత్యం,
                  సంస్కృతి మరియు కళలను
                  ప్రపంచవ్యాప్తంగా విస్తరించే
                  కార్యాచరణలో భాగంగా
                  అంతర్జాతీయ వేదికలపై
                  కార్యక్రమాలను నిర్వహిస్తూ
                  తెలుగు సాహితీ కుటుంబాన్ని
                  మరింత విస్తృతం చేస్తోంది.

                </p>


                <div className="act-location-list">

                  <div className="act-location">
                    <Globe2 size={16} />
                    ఆంధ్రప్రదేశ్
                  </div>

                  <div className="act-location">
                    <Globe2 size={16} />
                    తెలంగాణ
                  </div>

                  <div className="act-location">
                    <Globe2 size={16} />
                    కర్ణాటక
                  </div>

                  <div className="act-location">
                    <Globe2 size={16} />
                    తమిళనాడు
                  </div>

                  <div className="act-location">
                    <Globe2 size={16} />
                    ఢిల్లీ
                  </div>

                  <div className="act-location">
                    <Globe2 size={16} />
                    మైసూరు
                  </div>

                  <div className="act-location">
                    <Globe2 size={16} />
                    కువైట్
                  </div>

                  <div className="act-location">
                    <Globe2 size={16} />
                    దుబాయ్
                  </div>

                  <div className="act-location">
                    <Globe2 size={16} />
                    మలేషియా
                  </div>

                  <div className="act-location">
                    <Globe2 size={16} />
                    అమెరికా — సన్నాహాలు
                  </div>

                </div>

              </div>

            </Reveal>


            <Reveal delay="act-delay-2">

              <div className="act-reach-card">

                <div className="act-reach-card-inner">

                  <img
                    src={kalapradarshana}
                    alt="శ్రీ శ్రీ కళావేదిక సాంస్కృతిక కార్యక్రమం"
                  />

                </div>

              </div>

            </Reveal>

          </div>

        </div>

      </section>


      {/* =====================================================
          PURPOSE
      ===================================================== */}

      <section className="act-section act-intro">

        <div className="act-container">

          <Reveal>

            <div className="act-heading">

              <div className="act-label">
                మా లక్ష్యం
              </div>

              <h2 className="act-title">

                తెలుగు అక్షరానికి

                <br />

                <span>
                  ప్రపంచ వేదిక
                </span>

              </h2>

            </div>

          </Reveal>


          <Reveal delay="act-delay-2">

            <div
              className="act-intro-highlight"
              style={{
                maxWidth: "900px",
                margin: "60px auto 0",
                textAlign: "center",
              }}
            >

              <strong>

                సాహిత్యాన్ని సేవగా...
                కళను సమాజ చైతన్యానికి
                సాధనంగా...
                సంస్కృతిని భావితరాలకు
                అమూల్య వారసత్వంగా...

              </strong>

              <p>

                తెలుగు భాషా పరిరక్షణ,
                సాహిత్యాన్ని మరియు కళలను
                ప్రపంచవ్యాప్తంగా విస్తరించే
                కార్యాచరణను కొనసాగించడం
                శ్రీ శ్రీ కళావేదిక ప్రధాన
                లక్ష్యం.

              </p>

            </div>

          </Reveal>

        </div>

      </section>


      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="act-final">

        <div className="act-container">

          <Reveal>

            <div className="act-final-symbol">
              ❧
            </div>

            <div className="act-label">
              శ్రీ శ్రీ కళావేదిక
            </div>

            <h2>

              సాహిత్య యజ్ఞంలో

              <br />

              <span>
                మీరూ భాగస్వాములు కండి
              </span>

            </h2>

            <p>

              కవులు, రచయితలు, కళాకారులు,
              సాహితీ వేత్తలు మరియు
              సాహిత్యాభిమానులందరికీ
              శ్రీ శ్రీ కళావేదిక ఒక
              నిరంతర ప్రోత్సాహ వేదిక.

            </p>


            <Link
              to="/contact"
              className="act-button act-button-gold"
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