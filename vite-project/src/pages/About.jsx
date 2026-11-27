import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowDown,
  ArrowUpRight,
  BookOpen,
  Feather,
  Globe2,
  HeartHandshake,
  Landmark,
  Sparkles,
  Users,
  PenLine,
  Star,
} from "lucide-react";

import cultureMainImage from "../assets/aboutus/culture-main.jpg";
import cultureSideImage from "../assets/aboutus/culture-side.jpg";
import founderRecognition from "../assets/aboutus/founder-recognition.jpg";
import kolatam from "../assets/aboutus/kolatam.png";
import writings from "../assets/aboutus/writings.jpg";


/* =========================================================
   FONT + PAGE STYLES
========================================================= */

const pageStyles = `
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Telugu:wght@400;500;600;700&family=Noto+Serif+Telugu:wght@400;500;600;700&display=swap');

:root {
  --ssk-wine: #5a101d;
  --ssk-wine-dark: #25070f;
  --ssk-wine-deep: #17040a;
  --ssk-wine-light: #7d2233;

  --ssk-gold: #b8893f;
  --ssk-gold-light: #e4c47b;
  --ssk-gold-bright: #f0d697;

  --ssk-cream: #fbf6ec;
  --ssk-paper: #f1e3d1;
  --ssk-paper-light: #fffaf1;

  --ssk-text: #342720;
  --ssk-muted: #76685f;
  --ssk-line: #d5c2a7;
}

/* =========================================================
   GLOBAL
========================================================= */

.ssk-about {
  width: 100%;
  overflow: hidden;
  color: var(--ssk-text);
  background: var(--ssk-cream);
  font-family: "Noto Sans Telugu", sans-serif;
}

.ssk-about *,
.ssk-about *::before,
.ssk-about *::after {
  box-sizing: border-box;
}

.ssk-about a {
  text-decoration: none;
}

.ssk-container {
  width: min(1220px, 92%);
  margin: 0 auto;
}

/* =========================================================
   REVEAL ANIMATION
========================================================= */

.ssk-reveal {
  opacity: 0;
  transform: translateY(45px);
  transition:
    opacity .9s ease,
    transform .9s cubic-bezier(.2,.7,.2,1);
}

.ssk-reveal.ssk-visible {
  opacity: 1;
  transform: translateY(0);
}

.ssk-delay-1 {
  transition-delay: .12s;
}

.ssk-delay-2 {
  transition-delay: .24s;
}

.ssk-delay-3 {
  transition-delay: .36s;
}

.ssk-delay-4 {
  transition-delay: .48s;
}

/* =========================================================
   HERO
========================================================= */

.ssk-hero {
  position: relative;
  min-height: 900px;
  overflow: hidden;
  color: white;

  background:
    radial-gradient(
      circle at 80% 25%,
      rgba(164, 50, 72, .48),
      transparent 30%
    ),
    radial-gradient(
      circle at 15% 85%,
      rgba(196, 148, 63, .13),
      transparent 25%
    ),
    linear-gradient(
      135deg,
      #180309 0%,
      #3a0914 42%,
      #661525 72%,
      #24060e 100%
    );
}

.ssk-hero::before {
  content: "";
  position: absolute;
  inset: 0;

  background:
    linear-gradient(
      115deg,
      transparent 20%,
      rgba(255,255,255,.025) 20.5%,
      transparent 21%
    );

  background-size: 100px 100px;

  opacity: .35;
  pointer-events: none;
}

.ssk-hero-noise {
  position: absolute;
  inset: 0;

  opacity: .08;

  background-image:
    repeating-linear-gradient(
      45deg,
      rgba(255,255,255,.18) 0,
      rgba(255,255,255,.18) 1px,
      transparent 1px,
      transparent 7px
    );
}

/* =========================================================
   HERO MANDALA
========================================================= */

.ssk-hero-mandala {
  position: absolute;

  width: 780px;
  height: 780px;

  right: -210px;
  top: 40px;

  border-radius: 50%;

  opacity: .12;

  background:
    repeating-conic-gradient(
      from 0deg,
      var(--ssk-gold-light) 0deg 2deg,
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
    sskRotate 65s linear infinite;
}

@keyframes sskRotate {
  to {
    transform: rotate(360deg);
  }
}

/* =========================================================
   HERO GLOWS
========================================================= */

.ssk-glow {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  pointer-events: none;
}

.ssk-glow-1 {
  width: 300px;
  height: 300px;
  left: -120px;
  top: 35%;

  background: rgba(145, 28, 55, .35);

  animation:
    sskGlowMove 8s ease-in-out infinite alternate;
}

.ssk-glow-2 {
  width: 280px;
  height: 280px;
  right: 25%;
  bottom: -120px;

  background: rgba(219, 168, 76, .12);

  animation:
    sskGlowMove 10s ease-in-out infinite alternate-reverse;
}

@keyframes sskGlowMove {
  from {
    transform: translate(0, 0);
  }

  to {
    transform: translate(35px, -25px);
  }
}

/* =========================================================
   HERO TOP
========================================================= */

.ssk-hero-top {
  position: relative;
  z-index: 10;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding-top: 28px;
}

.ssk-breadcrumb {
  display: flex;
  align-items: center;
  gap: 9px;

  font-size: 10px;
  color: #ad9790;
}

.ssk-breadcrumb a {
  color: var(--ssk-gold-light);
}

.ssk-hero-tag {
  padding: 8px 14px;

  border: 1px solid rgba(228,196,123,.35);

  color: var(--ssk-gold-light);

  font-size: 9px;

  letter-spacing: .5px;

  background: rgba(255,255,255,.025);

  backdrop-filter: blur(8px);
}

/* =========================================================
   HERO GRID
========================================================= */

.ssk-hero-grid {
  position: relative;
  z-index: 5;

  min-height: 730px;

  display: grid;
  grid-template-columns: 1fr 1fr;

  gap: 75px;

  align-items: center;
}

/* =========================================================
   HERO CONTENT
========================================================= */

.ssk-hero-content {
  animation:
    sskHeroEnter 1.1s cubic-bezier(.2,.8,.2,1) both;
}

@keyframes sskHeroEnter {
  from {
    opacity: 0;
    transform: translateY(50px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.ssk-overline {
  display: flex;
  align-items: center;
  gap: 12px;

  color: var(--ssk-gold-light);

  font-size: 10px;
}

.ssk-overline-line {
  width: 42px;
  height: 1px;

  background: var(--ssk-gold-light);
}

.ssk-hero-title {
  margin: 25px 0 22px;

  font-family:
    "Noto Serif Telugu",
    serif;

  font-size:
    clamp(44px, 5.5vw, 72px);

  line-height: 1.38;

  font-weight: 500;

  letter-spacing: -1px;
}

.ssk-hero-title .gold {
  display: inline-block;

  color: var(--ssk-gold-light);

  background:
    linear-gradient(
      90deg,
      #bd8d40,
      #f1d797,
      #c09243,
      #f0d38c
    );

  background-size: 300% auto;

  -webkit-background-clip: text;
  background-clip: text;

  color: transparent;

  animation:
    sskGoldFlow 5s linear infinite;
}

@keyframes sskGoldFlow {
  to {
    background-position: 300% center;
  }
}

.ssk-hero-description {
  max-width: 620px;

  color: #d8c3bd;

  font-size: 13px;

  line-height: 2.2;
}

.ssk-hero-actions {
  display: flex;
  align-items: center;
  gap: 22px;

  margin-top: 35px;
}

.ssk-gold-btn,
.ssk-outline-btn,
.ssk-dark-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 9px;

  min-height: 47px;

  padding: 0 20px;

  font-size: 10px;

  transition:
    transform .35s ease,
    box-shadow .35s ease,
    background .35s ease,
    color .35s ease;
}

.ssk-gold-btn {
  color: white;

  background:
    linear-gradient(
      110deg,
      #9c7135,
      #d1a656,
      #9f7338
    );

  background-size: 200% auto;

  box-shadow:
    0 12px 35px rgba(184,137,63,.25);

  animation:
    sskButtonGlow 4s ease infinite;
}

.ssk-gold-btn:hover {
  transform: translateY(-5px);

  box-shadow:
    0 20px 50px rgba(184,137,63,.38);
}

.ssk-outline-btn {
  color: white;

  border-bottom:
    1px solid var(--ssk-gold);

  background: transparent;
}

.ssk-outline-btn:hover {
  color: var(--ssk-gold-light);

  transform: translateX(5px);
}

@keyframes sskButtonGlow {
  0%,100% {
    background-position: 0% center;
  }

  50% {
    background-position: 100% center;
  }
}

/* =========================================================
   HERO VISUAL
========================================================= */

.ssk-hero-visual {
  position: relative;
  height: 620px;
}

.ssk-main-image {
  position: absolute;

  width: 76%;
  height: 550px;

  right: 6%;
  top: 35px;

  padding: 9px;

  background: #fff7e8;

  box-shadow:
    0 35px 90px rgba(0,0,0,.48);

  transform:
    rotate(1.2deg);

  animation:
    sskPhotoFloat 7s ease-in-out infinite;
}

@keyframes sskPhotoFloat {
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

.ssk-main-image-inner {
  position: relative;

  width: 100%;
  height: 100%;

  overflow: hidden;

  background: #d7c4aa;
}

.ssk-main-image img {
  width: 100%;
  height: 100%;

  object-fit: contain;

  transition:
    transform 1s ease;
}

.ssk-main-image:hover img {
  transform: scale(1.04);
}

.ssk-main-image::after {
  content: "";

  position: absolute;
  inset: 0;

  background:
    linear-gradient(
      to top,
      rgba(30,4,10,.72),
      transparent 48%
    );

  pointer-events: none;
}

.ssk-image-caption {
  position: absolute;

  left: 24px;
  bottom: 23px;

  z-index: 4;
}

.ssk-image-caption small {
  display: block;

  color: var(--ssk-gold-light);

  font-size: 8px;
}

.ssk-image-caption strong {
  display: block;

  margin-top: 5px;

  color: white;

  font-family:
    "Noto Serif Telugu",
    serif;

  font-size: 20px;

  font-weight: 500;
}

/* =========================================================
   SEAL
========================================================= */

.ssk-seal {
  position: absolute;

  z-index: 9;

  top: 6%;
  right: 6%;

  width: 150px;
  height: 150px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  border:
    1px solid rgba(228,196,123,.85);

  border-radius: 50%;

  color: var(--ssk-gold-light);

  background:
    rgba(34,5,12,.94);

  box-shadow:
    0 15px 40px rgba(0,0,0,.35);

  animation:
    sskSealPulse 4s ease-in-out infinite;
}

.ssk-seal::before {
  content: "";

  position: absolute;

  inset: 7px;

  border:
    1px dashed rgba(228,196,123,.45);

  border-radius: 50%;
}

.ssk-seal strong {
  position: relative;
  z-index: 2;

  font-family:
    "Noto Serif Telugu",
    serif;

  font-size: 38px;

  line-height: 1;
}

@keyframes sskSealPulse {
  0%,100% {
    box-shadow:
      0 15px 40px rgba(0,0,0,.35);
  }

  50% {
    box-shadow:
      0 15px 55px rgba(184,137,63,.25);
  }
}

/* =========================================================
   SCROLL
========================================================= */

.ssk-scroll {
  position: absolute;

  left: 4%;
  bottom: 25px;

  z-index: 10;

  display: flex;
  align-items: center;
  gap: 9px;

  color: #a99690;

  font-size: 9px;

  animation:
    sskScrollPulse 2s ease-in-out infinite;
}

@keyframes sskScrollPulse {
  0%,100% {
    opacity: .4;
    transform: translateY(0);
  }

  50% {
    opacity: 1;
    transform: translateY(5px);
  }
}

/* =========================================================
   INTRO
========================================================= */

.ssk-intro {
  padding: 130px 0;

  background:
    linear-gradient(
      rgba(239,225,207,.97),
      rgba(239,225,207,.97)
    ),
    repeating-linear-gradient(
      0deg,
      transparent 0,
      transparent 40px,
      rgba(90,40,20,.045) 41px
    );
}

.ssk-intro-grid {
  display: grid;

  grid-template-columns: .78fr 1.22fr;

  gap: 100px;

  align-items: end;
}

.ssk-section-label {
  color: var(--ssk-gold);

  font-size: 10px;

  letter-spacing: .8px;
}

.ssk-section-title {
  margin: 15px 0 0;

  color: var(--ssk-wine);

  font-family:
    "Noto Serif Telugu",
    serif;

  font-size:
    clamp(42px,5vw,67px);

  line-height: 1.45;

  font-weight: 500;
}

.ssk-section-title span {
  color: var(--ssk-gold);
}

.ssk-intro-text p {
  margin: 0 0 18px;

  color: var(--ssk-muted);

  font-size: 13px;

  line-height: 2.25;
}

.ssk-intro-text .lead {
  color: #4d3a30;

  font-family:
    "Noto Serif Telugu",
    serif;

  font-size: 18px;

  line-height: 2.05;
}

/* =========================================================
   STATS
========================================================= */

.ssk-stats {
  display: grid;

  grid-template-columns:
    repeat(4, 1fr);

  margin-top: 80px;

  border-top:
    1px solid var(--ssk-line);

  border-bottom:
    1px solid var(--ssk-line);
}

.ssk-stat {
  min-height: 185px;

  padding: 35px 25px;

  border-right:
    1px solid var(--ssk-line);

  display: flex;
  flex-direction: column;
  justify-content: center;
}

.ssk-stat:last-child {
  border-right: 0;
}

.ssk-stat-number {
  color: var(--ssk-wine);

  font-family:
    "Noto Serif Telugu",
    serif;

  font-size: 52px;

  line-height: 1;
}

.ssk-stat-label {
  max-width: 190px;

  margin-top: 13px;

  color: var(--ssk-muted);

  font-size: 10px;

  line-height: 1.9;
}

/* =========================================================
   PILLARS
========================================================= */

.ssk-pillars {
  padding: 130px 0;

  background: var(--ssk-cream);
}

.ssk-center-heading {
  max-width: 700px;

  margin: 0 auto;

  text-align: center;
}

.ssk-center-heading p {
  margin-top: 18px;

  color: var(--ssk-muted);

  font-size: 12px;

  line-height: 2;
}

.ssk-pillar-grid {
  display: grid;

  grid-template-columns:
    repeat(4, 1fr);

  gap: 1px;

  margin-top: 65px;

  background: #d2bea1;
}

.ssk-pillar {
  position: relative;

  min-height: 335px;

  padding: 30px;

  background:
    linear-gradient(
      145deg,
      #f8eee0,
      #f0e0cb
    );

  overflow: hidden;

  transition:
    transform .45s ease,
    background .45s ease,
    box-shadow .45s ease;
}

.ssk-pillar::before {
  content: "";

  position: absolute;

  width: 160px;
  height: 160px;

  right: -80px;
  bottom: -80px;

  border:
    1px solid rgba(184,137,63,.22);

  border-radius: 50%;

  transition: .6s;
}

.ssk-pillar:hover {
  z-index: 2;

  transform: translateY(-10px);

  background:
    linear-gradient(
      145deg,
      #5a101d,
      #7a1d2d
    );

  box-shadow:
    0 30px 60px rgba(63,12,23,.2);
}

.ssk-pillar:hover::before {
  transform: scale(2);
}

.ssk-pillar-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.ssk-pillar-number {
  color: var(--ssk-gold);

  font-size: 9px;
}

.ssk-pillar-top svg {
  color: var(--ssk-gold);
}

.ssk-pillar h3 {
  margin-top: 58px;

  color: var(--ssk-wine);

  font-family:
    "Noto Serif Telugu",
    serif;

  font-size: 26px;

  font-weight: 500;
}

.ssk-pillar p {
  color: var(--ssk-muted);

  font-size: 11px;

  line-height: 2;
}

.ssk-pillar:hover h3 {
  color: white;
}

.ssk-pillar:hover p {
  color: #d9c4bd;
}

.ssk-pillar-arrow {
  position: absolute;

  right: 24px;
  bottom: 20px;

  color: var(--ssk-gold);

  font-size: 20px;
}

/* =========================================================
   WORLD
========================================================= */

.ssk-world {
  position: relative;

  overflow: hidden;

  padding: 135px 0;

  color: white;

  background:
    radial-gradient(
      circle at 75% 45%,
      rgba(133,35,57,.65),
      transparent 32%
    ),
    linear-gradient(
      135deg,
      #20050c,
      #5c111f
    );
}

.ssk-world-mandala {
  position: absolute;

  width: 850px;
  height: 850px;

  right: -270px;
  top: -40px;

  border-radius: 50%;

  opacity: .095;

  background:
    repeating-conic-gradient(
      from 0deg,
      var(--ssk-gold-light) 0deg 2deg,
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
      #000 56% 59%,
      transparent 60%
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
      #000 56% 59%,
      transparent 60%
    );

  animation:
    sskRotate 70s linear infinite;
}

.ssk-world-head {
  position: relative;

  display: flex;

  justify-content: space-between;

  align-items: flex-end;
}

.ssk-world-head svg {
  color: var(--ssk-gold-light);

  opacity: .85;
}

.ssk-world-title {
  margin-top: 15px;

  color: white;

  font-family:
    "Noto Serif Telugu",
    serif;

  font-size:
    clamp(44px,5vw,69px);

  line-height: 1.45;

  font-weight: 500;
}

.ssk-world-title span {
  color: var(--ssk-gold-light);
}

.ssk-world-intro {
  position: relative;

  max-width: 800px;

  margin: 42px 0;

  color: #d6c1bb;

  font-size: 13px;

  line-height: 2.2;
}

.ssk-world-path {
  position: relative;

  display: grid;

  grid-template-columns:
    repeat(5, 1fr);

  margin-top: 65px;

  border-top:
    1px solid rgba(255,255,255,.14);
}

.ssk-location {
  min-height: 145px;

  padding: 28px 17px;

  border-right:
    1px solid rgba(255,255,255,.1);

  transition:
    background .3s ease;
}

.ssk-location:hover {
  background:
    rgba(255,255,255,.04);
}

.ssk-location-number {
  color: var(--ssk-gold-light);

  font-size: 8px;
}

.ssk-location-dot {
  width: 8px;
  height: 8px;

  margin: 20px 0 15px;

  border-radius: 50%;

  background: var(--ssk-gold-light);

  box-shadow:
    0 0 0 5px rgba(228,196,123,.09);

  transition: .35s;
}

.ssk-location:hover .ssk-location-dot {
  transform: scale(1.8);

  box-shadow:
    0 0 25px rgba(228,196,123,.7);
}

.ssk-location strong {
  color: white;

  font-family:
    "Noto Serif Telugu",
    serif;

  font-size: 13px;

  font-weight: 400;
}

.ssk-location.upcoming {
  background:
    rgba(228,196,123,.08);
}

.ssk-location small {
  display: block;

  margin-top: 7px;

  color: var(--ssk-gold-light);

  font-size: 8px;
}

.ssk-world-note {
  position: relative;

  display: flex;
  align-items: center;
  gap: 20px;

  margin-top: 50px;

  padding: 25px;

  border:
    1px solid rgba(228,196,123,.25);

  background:
    rgba(255,255,255,.035);
}

.ssk-world-note span {
  color: var(--ssk-gold-light);

  font-size: 9px;
}

.ssk-world-note strong {
  color: white;

  font-family:
    "Noto Serif Telugu",
    serif;

  font-size: 17px;

  font-weight: 400;
}

.ssk-world-note p {
  margin: 0;

  color: #a9958e;

  font-size: 9px;
}

/* =========================================================
   JOURNEY
========================================================= */

.ssk-journey {
  padding: 135px 0;

  background: var(--ssk-cream);
}

.ssk-journey-head {
  display: flex;

  justify-content: space-between;

  align-items: flex-end;

  margin-bottom: 65px;
}

.ssk-journey-number {
  color: var(--ssk-gold);

  font-size: 18px;
}

.ssk-origin {
  display: grid;

  grid-template-columns:
    1fr 1fr;

  min-height: 510px;

  background: var(--ssk-paper);
}

.ssk-origin-image {
  position: relative;

  min-height: 510px;

  overflow: hidden;

  background: #d7c5ad;
}

.ssk-origin-image img {
  width: 100%;
  height: 100%;

  object-fit: contain;

  transition:
    transform 1s ease;
}

.ssk-origin-image:hover img {
  transform: scale(1.04);
}

.ssk-origin-image::after {
  content: "";

  position: absolute;
  inset: 0;

  background:
    linear-gradient(
      90deg,
      transparent,
      rgba(30,5,10,.28)
    );
}

.ssk-origin-label {
  position: absolute;

  z-index: 3;

  left: 24px;
  bottom: 24px;

  padding: 9px 15px;

  color: white;

  background: var(--ssk-wine);

  font-size: 9px;
}

.ssk-origin-copy {
  padding: 65px;

  display: flex;
  flex-direction: column;
  justify-content: center;
}

.ssk-origin-copy small {
  color: var(--ssk-gold);

  font-size: 10px;
}

.ssk-origin-copy h3 {
  margin: 15px 0;

  color: var(--ssk-wine);

  font-family:
    "Noto Serif Telugu",
    serif;

  font-size: 38px;

  line-height: 1.45;

  font-weight: 500;
}

.ssk-origin-copy p {
  color: var(--ssk-muted);

  font-size: 12px;

  line-height: 2.1;
}

.ssk-origin-quote {
  margin-top: 25px;

  padding-top: 20px;

  border-top:
    1px solid var(--ssk-line);

  color: var(--ssk-gold);

  font-family:
    "Noto Serif Telugu",
    serif;

  font-size: 15px;
}

/* =========================================================
   TIMELINE
========================================================= */

.ssk-timeline {
  position: relative;

  margin-top: 75px;

  border-left:
    1px solid var(--ssk-line);
}

.ssk-timeline-item {
  position: relative;

  display: grid;

  grid-template-columns:
    55px
    58px
    1fr;

  gap: 22px;

  align-items: center;

  padding: 25px 20px 25px 35px;

  border-bottom:
    1px solid #dfd1be;

  transition:
    padding .35s ease,
    background .35s ease;
}

.ssk-timeline-item:hover {
  padding-left: 50px;

  background:
    linear-gradient(
      90deg,
      rgba(184,137,63,.08),
      transparent
    );
}

.ssk-timeline-num {
  color: var(--ssk-gold);

  font-size: 9px;
}

.ssk-timeline-icon {
  width: 50px;
  height: 50px;

  display: flex;
  align-items: center;
  justify-content: center;

  color: var(--ssk-gold);

  border:
    1px solid #d1bd9f;

  border-radius: 50%;

  background: #f5ead9;

  transition:
    transform .35s ease,
    background .35s ease;
}

.ssk-timeline-item:hover .ssk-timeline-icon {
  transform: rotate(10deg) scale(1.08);

  background: #ead7b9;
}

.ssk-timeline-content h3 {
  margin: 0;

  color: var(--ssk-wine);

  font-family:
    "Noto Serif Telugu",
    serif;

  font-size: 18px;

  font-weight: 500;
}

.ssk-timeline-content p {
  max-width: 750px;

  margin: 5px 0 0;

  color: var(--ssk-muted);

  font-size: 11px;

  line-height: 1.9;
}

/* =========================================================
   CULTURE
========================================================= */

.ssk-culture {
  padding: 135px 0;

  background: #eadcca;
}

.ssk-culture-grid {
  display: grid;

  grid-template-columns:
    .78fr
    1.22fr;

  gap: 90px;

  align-items: center;
}

.ssk-culture-copy p {
  color: var(--ssk-muted);

  font-size: 12px;

  line-height: 2.2;
}

.ssk-dark-btn {
  margin-top: 18px;

  color: white;

  background: var(--ssk-wine);
}

.ssk-dark-btn:hover {
  transform: translateY(-5px);

  background: var(--ssk-wine-light);

  box-shadow:
    0 15px 35px rgba(90,16,29,.2);
}

.ssk-gallery {
  position: relative;

  height: 590px;
}

.ssk-gallery-main {
  position: absolute;

  left: 0;
  top: 0;

  width: 69%;
  height: 480px;

  padding: 10px;

  background: #fff7e8;

  box-shadow:
    0 30px 65px rgba(60,30,15,.18);

  transform: rotate(-2deg);

  transition:
    transform .5s ease;
}

.ssk-gallery-main:hover {
  transform:
    rotate(0)
    translateY(-8px);
}

.ssk-gallery-main img,
.ssk-gallery-side img {
  width: 100%;
  height: 100%;

  object-fit: contain;

  background: #d5c3aa;
}

.ssk-gallery-label {
  position: absolute;

  left: 20px;
  bottom: 20px;

  padding: 7px 12px;

  color: white;

  background: var(--ssk-wine);

  font-size: 9px;
}

.ssk-gallery-side {
  position: absolute;

  right: 0;
  bottom: 0;

  width: 48%;
  height: 315px;

  padding: 9px;

  background: #fff7e8;

  box-shadow:
    0 25px 55px rgba(60,30,15,.22);

  transform: rotate(3deg);

  transition:
    transform .5s ease;
}

.ssk-gallery-side:hover {
  transform:
    rotate(0)
    translateY(-8px);
}

/* =========================================================
   MISSION
========================================================= */

.ssk-mission {
  padding: 105px 0;

  background: var(--ssk-cream);
}

.ssk-mission-card {
  position: relative;

  display: grid;

  grid-template-columns:
    95px
    1fr;

  gap: 40px;

  padding: 60px;

  border:
    1px solid #d5c0a3;

  background:
    linear-gradient(
      135deg,
      #f7eddf,
      #fffaf2
    );

  box-shadow:
    0 25px 65px rgba(60,30,15,.07);

  overflow: hidden;
}

.ssk-mission-card::after {
  content: "";

  position: absolute;

  width: 300px;
  height: 300px;

  right: -130px;
  bottom: -150px;

  border:
    1px solid rgba(184,137,63,.18);

  border-radius: 50%;
}

.ssk-mission-icon {
  width: 78px;
  height: 78px;

  display: flex;
  align-items: center;
  justify-content: center;

  color: var(--ssk-gold);

  border-radius: 50%;

  background: #ead8bb;

  box-shadow:
    inset 0 0 0 1px rgba(184,137,63,.25);
}

.ssk-mission-card h2 {
  margin: 15px 0;

  color: var(--ssk-wine);

  font-family:
    "Noto Serif Telugu",
    serif;

  font-size:
    clamp(34px,4vw,57px);

  line-height: 1.5;

  font-weight: 500;
}

.ssk-mission-card h2 span {
  color: var(--ssk-gold);
}

.ssk-mission-card p {
  max-width: 820px;

  color: var(--ssk-muted);

  font-size: 12px;

  line-height: 2.2;
}

/* =========================================================
   FINAL
========================================================= */

.ssk-final {
  position: relative;

  overflow: hidden;

  padding: 160px 0;

  text-align: center;

  color: white;

  background:
    radial-gradient(
      circle at center,
      rgba(132,36,57,.72),
      transparent 46%
    ),
    linear-gradient(
      135deg,
      #20050c,
      #5b101f
    );
}

.ssk-final-mandala {
  position: absolute;

  width: 780px;
  height: 780px;

  left: 50%;
  top: 50%;

  transform:
    translate(-50%,-50%);

  border-radius: 50%;

  opacity: .1;

  background:
    repeating-conic-gradient(
      from 0deg,
      var(--ssk-gold-light) 0deg 2deg,
      transparent 2deg 13deg
    );

  mask:
    radial-gradient(
      circle,
      transparent 0 22%,
      #000 23% 25%,
      transparent 26% 33%,
      #000 34% 36%,
      transparent 37% 45%,
      #000 46% 48%,
      transparent 49%
    );

  -webkit-mask:
    radial-gradient(
      circle,
      transparent 0 22%,
      #000 23% 25%,
      transparent 26% 33%,
      #000 34% 36%,
      transparent 37% 45%,
      #000 46% 48%,
      transparent 49%
    );

  animation:
    sskRotate 60s linear infinite;
}

.ssk-final-content {
  position: relative;

  z-index: 2;
}

.ssk-final-symbol {
  color: var(--ssk-gold-light);

  font-size: 52px;

  line-height: 1;
}

.ssk-final-title {
  margin: 20px 0;

  color: white;

  font-family:
    "Noto Serif Telugu",
    serif;

  font-size:
    clamp(43px,5.5vw,76px);

  line-height: 1.52;

  font-weight: 500;
}

.ssk-final-title span {
  color: var(--ssk-gold-light);
}

.ssk-final-copy {
  color: #c9b5ae;

  font-size: 11px;
}

.ssk-final-line {
  width: 75px;
  height: 1px;

  margin: 30px auto;

  background: var(--ssk-gold-light);
}

/* =========================================================
   RESPONSIVE
========================================================= */

@media (max-width: 1050px) {

  .ssk-hero-grid {
    grid-template-columns: 1fr;

    gap: 25px;

    padding: 65px 0 80px;
  }

  .ssk-hero {
    min-height: auto;
  }

  .ssk-hero-visual {
    max-width: 700px;

    width: 100%;

    margin: auto;
  }

  .ssk-intro-grid,
  .ssk-culture-grid {
    grid-template-columns: 1fr;

    gap: 55px;
  }

  .ssk-pillar-grid {
    grid-template-columns:
      repeat(2, 1fr);
  }

  .ssk-stats {
    grid-template-columns:
      repeat(2, 1fr);
  }

  .ssk-stat:nth-child(2) {
    border-right: 0;
  }

  .ssk-origin {
    grid-template-columns: 1fr;
  }

  .ssk-origin-image {
    min-height: 430px;
  }

  .ssk-world-path {
    grid-template-columns:
      repeat(3, 1fr);
  }
}

/* =========================================================
   MOBILE
========================================================= */

@media (max-width: 650px) {

  .ssk-container {
    width: 92%;
  }

  .ssk-hero {
    min-height: auto;
  }

  .ssk-hero-top {
    padding-top: 18px;
  }

  .ssk-hero-tag {
    display: none;
  }

  .ssk-hero-grid {
    padding: 55px 0 70px;
  }

  .ssk-hero-title {
    font-size: 38px;

    letter-spacing: 0;
  }

  .ssk-hero-description {
    font-size: 11px;
  }

  .ssk-hero-actions {
    flex-direction: column;

    align-items: flex-start;
  }

  .ssk-hero-visual {
    height: 430px;
  }

  .ssk-main-image {
    width: 78%;
    height: 370px;

    right: 4%;
  }

  .ssk-seal {
    width: 108px;
    height: 108px;

    right: 4%;
    top: 5%;
  }

  .ssk-seal strong {
    font-size: 28px;
  }

  .ssk-intro,
  .ssk-pillars,
  .ssk-world,
  .ssk-journey,
  .ssk-culture,
  .ssk-mission,
  .ssk-final {
    padding: 82px 0;
  }

  .ssk-section-title,
  .ssk-world-title {
    font-size: 39px;
  }

  .ssk-stats {
    grid-template-columns: 1fr 1fr;

    margin-top: 55px;
  }

  .ssk-stat {
    min-height: 145px;

    padding: 20px 15px;
  }

  .ssk-stat-number {
    font-size: 39px;
  }

  .ssk-pillar-grid {
    grid-template-columns: 1fr;
  }

  .ssk-pillar {
    min-height: 270px;
  }

  .ssk-world-head svg {
    display: none;
  }

  .ssk-world-path {
    grid-template-columns: 1fr 1fr;
  }

  .ssk-location {
    min-height: 135px;
  }

  .ssk-world-note {
    flex-direction: column;

    align-items: flex-start;
  }

  .ssk-journey-head {
    margin-bottom: 45px;
  }

  .ssk-origin-copy {
    padding: 38px 25px;
  }

  .ssk-origin-copy h3 {
    font-size: 30px;
  }

  .ssk-timeline-item {
    grid-template-columns:
      32px
      45px
      1fr;

    gap: 12px;

    padding-left: 18px;
  }

  .ssk-timeline-item:hover {
    padding-left: 23px;
  }

  .ssk-timeline-content h3 {
    font-size: 15px;
  }

  .ssk-timeline-content p {
    font-size: 10px;
  }

  .ssk-gallery {
    height: 420px;
  }

  .ssk-gallery-main {
    width: 70%;
    height: 340px;
  }

  .ssk-gallery-side {
    width: 48%;
    height: 220px;
  }

  .ssk-mission-card {
    grid-template-columns: 1fr;

    padding: 32px 25px;
  }

  .ssk-mission-card h2 {
    font-size: 33px;
  }

  .ssk-final-title {
    font-size: 38px;
  }
}

/* =========================================================
   ACCESSIBILITY
========================================================= */

@media (prefers-reduced-motion: reduce) {

  .ssk-about *,
  .ssk-about *::before,
  .ssk-about *::after {
    animation-duration: .01ms !important;
    animation-iteration-count: 1 !important;

    transition-duration: .01ms !important;

    scroll-behavior: auto !important;
  }

  .ssk-reveal {
    opacity: 1 !important;
    transform: none !important;
  }
}
`;


/* =========================================================
   COUNTER COMPONENT
========================================================= */

function Counter({ value, suffix = "", label }) {
  const ref = useRef(null);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    let started = false;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started) return;

        started = true;

        const target = Number(value);
        const duration = 1600;
        const startTime = performance.now();

        const animate = (currentTime) => {
          const progress = Math.min(
            (currentTime - startTime) / duration,
            1
          );

          const eased =
            1 - Math.pow(1 - progress, 3);

          setDisplay(
            Math.floor(target * eased)
          );

          if (progress < 1) {
            requestAnimationFrame(animate);
          }
        };

        requestAnimationFrame(animate);
      },
      {
        threshold: 0.35,
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [value]);

  return (
    <div className="ssk-stat" ref={ref}>

      <span className="ssk-stat-number">
        {display}
        {suffix}
      </span>

      <span className="ssk-stat-label">
        {label}
      </span>

    </div>
  );
}


/* =========================================================
   REVEAL WRAPPER
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

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add("ssk-visible");
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
      className={`ssk-reveal ${delay} ${className}`}
    >
      {children}
    </div>
  );
}


/* =========================================================
   PILLAR
========================================================= */

function Pillar({
  number,
  icon: Icon,
  title,
  text,
}) {
  return (
    <article className="ssk-pillar">

      <div className="ssk-pillar-top">

        <span className="ssk-pillar-number">
          {number}
        </span>

        <Icon size={23} />

      </div>

      <h3>
        {title}
      </h3>

      <p>
        {text}
      </p>

      <span className="ssk-pillar-arrow">
        ↗
      </span>

    </article>
  );
}


/* =========================================================
   LOCATION
========================================================= */

function Location({
  number,
  place,
  upcoming = false,
}) {
  return (
    <div
      className={`ssk-location ${
        upcoming ? "upcoming" : ""
      }`}
    >

      <span className="ssk-location-number">
        {number}
      </span>

      <div className="ssk-location-dot" />

      <strong>
        {place}
      </strong>

      {upcoming && (
        <small>
          త్వరలో
        </small>
      )}

    </div>
  );
}


/* =========================================================
   TIMELINE ITEM
========================================================= */

function TimelineItem({
  number,
  icon: Icon,
  title,
  text,
}) {
  return (
    <article className="ssk-timeline-item">

      <span className="ssk-timeline-num">
        {number}
      </span>

      <span className="ssk-timeline-icon">
        <Icon size={21} />
      </span>

      <div className="ssk-timeline-content">

        <h3>
          {title}
        </h3>

        <p>
          {text}
        </p>

      </div>

    </article>
  );
}


/* =========================================================
   ABOUT PAGE
========================================================= */

export default function About() {
  return (
    <div className="ssk-about">

      {/* ONE-FILE CSS */}
      <style>
        {pageStyles}
      </style>


      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="ssk-hero">

        <div className="ssk-hero-noise" />

        <div className="ssk-hero-mandala" />

        <div className="ssk-glow ssk-glow-1" />
        <div className="ssk-glow ssk-glow-2" />


        <div className="ssk-container">

          <div className="ssk-hero-top">

            <div className="ssk-breadcrumb">

              <Link to="/">
                శ్రీ శ్రీ కళావేదిక
              </Link>

              <span>/</span>

              <span>
                మా గురించి
              </span>

            </div>

            <div className="ssk-hero-tag">
              సాహిత్యం • సంస్కృతి • సేవ
            </div>

          </div>


          <div className="ssk-hero-grid">

            <div className="ssk-hero-content">

              <div className="ssk-overline">

                <span className="ssk-overline-line" />

                అంతర్జాతీయ సాహిత్య, సాంస్కృతిక,
                సామాజిక సేవా సంస్థ

              </div>


              <h1 className="ssk-hero-title">
                అక్షరానికి{" "}
                <span className="gold">అనంతమైన</span>{" "}
                వేదిక – శ్రీశ్రీ కళావేదిక
              </h1>


              <p className="ssk-hero-description">

                కవులు, రచయితలు, సాహితీవేత్తలు,
                కళాకారులు మరియు సాహితీ అభిమానులను
                ఒకే కుటుంబంగా కలుపుతూ,
                తెలుగు భాష, సాహిత్యం, సంస్కృతి,
                కళలు మరియు సంప్రదాయాలను
                ప్రపంచవ్యాప్తంగా విస్తరింపజేస్తున్న
                నిరంతర సాహిత్య యజ్ఞం.

              </p>


              <div className="ssk-hero-actions">

                <a
                  href="#ssk-journey"
                  className="ssk-gold-btn"
                >

                  మా సాహిత్య ప్రస్థానం

                  <ArrowDown size={16} />

                </a>


                <Link
                  to="/founder"
                  className="ssk-outline-btn"
                >

                  వ్యవస్థాపకుని సందేశం

                  <ArrowUpRight size={16} />

                </Link>

              </div>

            </div>


            {/* HERO IMAGES */}

            <div className="ssk-hero-visual">

              <div className="ssk-main-image">

                <div className="ssk-main-image-inner">

                  <img
                    src={kolatam}
                    alt="శ్రీ శ్రీ కళావేదిక సాంస్కృతిక కార్యక్రమం"
                  />

                  <div className="ssk-image-caption">

                    <small>
                      సంస్కృతి • సంప్రదాయం
                    </small>

                    <strong>
                      మన మూలాలు... మన గర్వం...
                    </strong>

                  </div>

                </div>

              </div>



            </div>

          </div>

        </div>


        <div className="ssk-scroll">

          క్రిందికి సాగండి

          <ArrowDown size={14} />

        </div>

      </section>


      {/* =====================================================
          INTRODUCTION
      ===================================================== */}

      <section className="ssk-intro">

        <div className="ssk-container">

          <Reveal>

            <div className="ssk-intro-grid">

              <div>

                <div className="ssk-section-label">
                  శ్రీ శ్రీ కళావేదిక
                </div>

                <h2 className="ssk-section-title">

                  ఒక సంస్థ కాదు...

                  <br />

                  <span>
                    ఒక సాహిత్య కుటుంబం.
                  </span>

                </h2>

              </div>


              <div className="ssk-intro-text">

                <p className="lead">

                  తెలుగు భాష, సాహిత్యం, సంస్కృతి,
                  కళలు, సంప్రదాయాలు, సామాజిక సేవలను
                  ప్రపంచవ్యాప్తంగా విస్తరింపజేయాలనే
                  మహోన్నత లక్ష్యంతో శ్రీ శ్రీ కళావేదిక
                  నిరంతర సాహిత్య యజ్ఞాన్ని కొనసాగిస్తోంది.

                </p>

                <p>

                  సాహిత్యాన్ని సమాజ చైతన్యానికి
                  సాధనంగా, కళను మానవీయ విలువలకు
                  వేదికగా, సేవను సంస్థ ధర్మంగా
                  భావిస్తూ వేలాది మంది కవులు,
                  రచయితలు, కళాకారులు, సాహితీ అభిమానులను
                  ఒకే కుటుంబంగా కలుపుతోంది.

                </p>

              </div>

            </div>

          </Reveal>


          <Reveal delay="ssk-delay-2">

            <div className="ssk-stats">

              <Counter
                value={7}
                label="ప్రపంచ తెలుగు సాహిత్య మహాసభలు"
              />

              <Counter
                value={48}
                suffix="+"
                label="గంటల నిరవధిక సాహిత్య మహాయజ్ఞం"
              />

              <Counter
                value={180}
                suffix="+"
                label="కవి సమ్మేళనాలు"
              />

              <Counter
                value={10000}
                suffix="+"
                label="కవులు, రచయితలు, కళాకారుల సాహిత్య కుటుంబం"
              />

            </div>

          </Reveal>

        </div>

      </section>


      {/* =====================================================
          PILLARS
      ===================================================== */}

      <section className="ssk-pillars">

        <div className="ssk-container">

          <Reveal>

            <div className="ssk-center-heading">

              <div className="ssk-section-label">
                మా ఆలోచన
              </div>

              <h2 className="ssk-section-title">

                నాలుగు విలువలు...

                <br />

                <span>
                  ఒకే లక్ష్యం.
                </span>

              </h2>

              <p>

                సాహిత్యం, సంస్కృతి, ప్రతిభ
                మరియు సేవలను ఒకే వేదికపై
                కలిపే మా ఆలోచనా పునాది.

              </p>

            </div>

          </Reveal>


          <Reveal delay="ssk-delay-2">

            <div className="ssk-pillar-grid">

              <Pillar
                number="౦౧"
                icon={Feather}
                title="సాహిత్యం"
                text="కవిత్వం, కథ, రచన, పుస్తకాలు మరియు సాహిత్య చర్చలకు విశాలమైన వేదిక."
              />

              <Pillar
                number="౦౨"
                icon={Sparkles}
                title="సంస్కృతి"
                text="తెలుగు సంప్రదాయాలు, జానపద కళలు మరియు సాంస్కృతిక వారసత్వాన్ని పరిరక్షించడం."
              />

              <Pillar
                number="౦౩"
                icon={Users}
                title="ప్రతిభ"
                text="కొత్త రచయితలు, యువ కవులు మరియు కళాకారులను గుర్తించి నిరంతరం ప్రోత్సహించడం."
              />

              <Pillar
                number="౦౪"
                icon={HeartHandshake}
                title="సేవ"
                text="సాహిత్యం మరియు కళలతో పాటు సామాజిక సేవను సంస్థ ధర్మంగా కొనసాగించడం."
              />

            </div>

          </Reveal>

        </div>

      </section>


      {/* =====================================================
          INTERNATIONAL JOURNEY
      ===================================================== */}

      <section className="ssk-world">

        <div className="ssk-world-mandala" />

        <div className="ssk-container">

          <Reveal>

            <div className="ssk-world-head">

              <div>

                <div className="ssk-section-label">
                  అంతర్జాతీయ ప్రస్థానం
                </div>

                <h2 className="ssk-world-title">

                  జిల్లాల నుంచి దేశాలకు...

                  <br />

                  <span>
                    దేశాల నుంచి ప్రపంచానికి...
                  </span>

                </h2>

              </div>

              <Globe2 size={76} />

            </div>

          </Reveal>


          <Reveal delay="ssk-delay-1">

            <p className="ssk-world-intro">

              ఆంధ్రప్రదేశ్, తెలంగాణ రాష్ట్రాలతో పాటు
              కర్ణాటక, తమిళనాడు, ఢిల్లీ, మైసూరు
              ప్రాంతాల్లో విజయవంతంగా సాహిత్య
              మహాసభలు నిర్వహించిన ఈ సంస్థ,
              విదేశాల్లో కువైట్, దుబాయ్,
              మలేషియా దేశాల్లో కూడా తెలుగు
              సాహిత్య పతాకాన్ని ఎగురవేసింది.

            </p>

          </Reveal>


          <Reveal delay="ssk-delay-2">

            <div className="ssk-world-path">

              <Location
                number="౦౧"
                place="ఆంధ్రప్రదేశ్"
              />

              <Location
                number="౦౨"
                place="తెలంగాణ"
              />

              <Location
                number="౦౩"
                place="కర్ణాటక"
              />

              <Location
                number="౦౪"
                place="తమిళనాడు"
              />

              <Location
                number="౦౫"
                place="ఢిల్లీ"
              />

              <Location
                number="౦౬"
                place="మైసూరు"
              />

              <Location
                number="౦౭"
                place="కువైట్"
              />

              <Location
                number="౦౮"
                place="దుబాయ్"
              />

              <Location
                number="౦౯"
                place="మలేషియా"
              />

              <Location
                number="౧౦"
                place="ఫిన్లాండ్"
              />

              <Location
                number="౧౧"
                place="అమెరికా"
                upcoming
              />

            </div>

          </Reveal>


          <Reveal delay="ssk-delay-3">

            <div className="ssk-world-note">

              <span>
                త్వరలో...
              </span>

              <strong>
                అమెరికాలో మరో ప్రపంచ తెలుగు
                సాహిత్య మహాసభ
              </strong>

              <p>
                సంస్థ అంతర్జాతీయ ప్రస్థానానికి
                మరో కొత్త అధ్యాయం.
              </p>

            </div>

          </Reveal>

        </div>

      </section>


      {/* =====================================================
          LITERARY JOURNEY
      ===================================================== */}

      <section
        id="ssk-journey"
        className="ssk-journey"
      >

        <div className="ssk-container">

          <Reveal>

            <div className="ssk-journey-head">

              <div>

                <div className="ssk-section-label">
                  సాహిత్య ప్రస్థానం
                </div>

                <h2 className="ssk-section-title">

                  అంతర్వేది నుంచి

                  <br />

                  <span>
                    ప్రపంచ వేదిక వరకు.
                  </span>

                </h2>

              </div>

              <div className="ssk-journey-number">
                ౦౧
              </div>

            </div>

          </Reveal>


          <Reveal delay="ssk-delay-1">

            <div className="ssk-origin">

              <div className="ssk-origin-image">

                <img
                  src={founderRecognition}
                  alt="కత్తిమండ ప్రతాప్ కుమార్ గారిని సత్కరిస్తున్న కార్యక్రమం"
                />

                <span className="ssk-origin-label">
                  మా ఆరంభం
                </span>

              </div>


              <div className="ssk-origin-copy">

                <small>
                  అంతర్వేది
                </small>

                <h3>

                  శ్రీ లక్ష్మి
                  <br />
                  నరసింహస్వామి ఆలయం

                </h3>

                <p>

                  అంతర్వేది శ్రీ లక్ష్మి
                  నరసింహస్వామి ఆలయంలో
                  మొదలైన మా సాహిత్య,
                  సాంస్కృతిక జైత్రయాత్ర
                  నేడు ప్రపంచవ్యాప్తంగా
                  కొనసాగుతోంది.

                </p>

                <div className="ssk-origin-quote">

                  “ఒక చిన్న అడుగు...
                  ఒక మహత్తర ప్రయాణానికి నాంది.”

                </div>

              </div>

            </div>

          </Reveal>


          <Reveal delay="ssk-delay-2">

            <div className="ssk-timeline">

              <TimelineItem
                number="౦౧"
                icon={BookOpen}
                title="నెలనెలా సాహిత్య, సాంస్కృతిక కార్యక్రమాలు"
                text="నెలనెలా నిరంతరంగా సాహిత్య, సాంస్కృతిక, సామాజిక సేవా కార్యక్రమాల నిర్వహణ."
              />

              <TimelineItem
                number="౦౨"
                icon={Feather}
                title="కవి సమ్మేళనాలు"
                text="కవిసమ్మేళనాలు, సాహిత్య సదస్సులు మరియు సృజనాత్మక చర్చలకు వేదిక."
              />

              <TimelineItem
                number="౦౩"
                icon={PenLine}
                title="పుస్తకావిష్కరణలు"
                text="రచయితల సృజనకు గుర్తింపు కల్పిస్తూ పుస్తకావిష్కరణలు మరియు సాహిత్య కార్యక్రమాలు."
              />

              <TimelineItem
                number="౦౪"
                icon={Sparkles}
                title="రంగస్థల కళాకారుల ప్రదర్శనలు"
                text="రంగస్థల కళాకారుల ప్రతిభకు ప్రోత్సాహం కల్పిస్తూ కళా ప్రదర్శనలకు వేదిక."
              />

              <TimelineItem
                number="౦౫"
                icon={Globe2}
                title="జాతీయ, అంతర్జాతీయ సాహిత్య మహాసభలు"
                text="జాతీయ, అంతర్జాతీయ స్థాయిలో తెలుగు సాహిత్య మహాసభల నిర్వహణ."
              />

              <TimelineItem
                number="౦౬"
                icon={Users}
                title="కొత్త రచయితలు, యువ కవులు, కళాకారులకు ప్రోత్సాహం"
                text="కొత్త ప్రతిభను గుర్తించి, గౌరవించి, వారి సృజనకు ప్రపంచ వేదికను అందించడం."
              />

            </div>

          </Reveal>

        </div>

      </section>


      {/* =====================================================
          CULTURE
      ===================================================== */}

      <section className="ssk-culture">

        <div className="ssk-container">

          <Reveal>

            <div className="ssk-culture-grid">

              <div className="ssk-culture-copy">

                <div className="ssk-section-label">
                  మన సంస్కృతి
                </div>

                <h2 className="ssk-section-title">

                  సంప్రదాయం

                  <br />

                  <span>
                    మన బలం.
                  </span>

                </h2>

                <p>

                  తెలుగు సంస్కృతిలోని వైవిధ్యాన్ని,
                  కళారూపాలను, సంప్రదాయాలను
                  భావితరాలకు అందించేందుకు
                  శ్రీ శ్రీ కళావేదిక నిరంతరం
                  కృషి చేస్తోంది.

                </p>

                <p>

                  నృత్యం నుంచి జానపద కళల వరకు,
                  రంగస్థలం నుంచి సాహిత్యం వరకు
                  ప్రతి కళారూపానికి గౌరవమైన
                  వేదికను నిర్మించడం మా సంకల్పం.

                </p>


                <Link
                  to="/activities"
                  className="ssk-dark-btn"
                >

                  మా కార్యక్రమాలు

                  <ArrowUpRight size={16} />

                </Link>

              </div>


              <div className="ssk-gallery">

                <div className="ssk-gallery-main">

                  <img
                    src={cultureMainImage}
                    alt="తెలుగు నృత్య కళారూపం"
                  />

                  <span className="ssk-gallery-label">
                    నృత్యం
                  </span>

                </div>


                <div className="ssk-gallery-side">

                  <img
                    src={cultureSideImage}
                    alt="కళా ప్రదర్శన"
                  />

                  <span className="ssk-gallery-label">
                    కళా ప్రదర్శన
                  </span>

                </div>

              </div>

            </div>

          </Reveal>

        </div>

      </section>


      {/* =====================================================
          MISSION
      ===================================================== */}

      <section className="ssk-mission">

        <div className="ssk-container">

          <Reveal>

            <div className="ssk-mission-card">

              <div className="ssk-mission-icon">

                <Landmark size={34} />

              </div>


              <div>

                <div className="ssk-section-label">
                  మా ధ్యేయం
                </div>

                <h2>

                  తెలుగు భాషా పరిరక్షణ —

                  <br />

                  <span>
                    సాహిత్యాన్ని, కళలను
                    ప్రపంచవ్యాప్తంగా విస్తరిద్దాం.
                  </span>

                </h2>

                <p>

                  తెలుగు భాషను పరిరక్షిస్తూ,
                  సాహిత్యాన్ని మరియు కళలను
                  ప్రపంచవ్యాప్తంగా విస్తరించే
                  కార్యాచరణను కొనసాగించడం
                  శ్రీ శ్రీ కళావేదిక ప్రధాన
                  లక్ష్యాలలో ఒకటి.

                </p>

              </div>

            </div>

          </Reveal>

        </div>

      </section>


      {/* =====================================================
          FINAL
      ===================================================== */}

      <section className="ssk-final">

        <div className="ssk-final-mandala" />

        <div className="ssk-container">

          <Reveal>

            <div className="ssk-final-content">

              <div className="ssk-final-symbol">
                ❧
              </div>

              <div className="ssk-section-label">
                శ్రీ శ్రీ కళావేదిక
              </div>

              <h2 className="ssk-final-title">

                అక్షరం నిలవాలి...

                <br />

                <span>
                  తెలుగు వెలగాలి...
                </span>

                <br />

                సంస్కృతి తరతరాలకు చేరాలి.

              </h2>


              <p className="ssk-final-copy">

                ప్రతిభ మీది...పట్టాభిషేకం మాది...

              </p>


              <div className="ssk-final-line" />


              <Link
                to="/contact"
                className="ssk-gold-btn"
              >

                మాతో కలిసి ప్రయాణించండి

                <ArrowUpRight size={17} />

              </Link>

            </div>

          </Reveal>

        </div>

      </section>

    </div>
  );
}