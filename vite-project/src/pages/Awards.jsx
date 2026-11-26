import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  Award,
  BadgeCheck,
  Crown,
  Feather,
  Globe2,
  Medal,
  ScrollText,
  Sparkles,
  Star,
  Trophy,
  Users,
} from "lucide-react";

import founder from "../assets/founder.png";
import founderpic2 from "../assets/founderpic2.png";
import founderwithcbn from "../assets/founderwithcbn.png";
import founderwithcbn2 from "../assets/founderwithcbn2.png";
import awardsFounderPortrait from "../assets/awards-founder-portrait.jpg";
import imag1 from "../assets/imag1.png";
import imag2 from "../assets/imag2.png";
import imag3 from "../assets/imag3.png";


/* =========================================================
   PAGE STYLES
========================================================= */

const pageStyles = `
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Telugu:wght@400;500;600;700&family=Noto+Serif+Telugu:wght@400;500;600;700&display=swap');

.awards-page {
  --wine: #4a0d18;
  --wine-dark: #21040a;
  --wine-light: #721c2d;
  --gold: #b78a3d;
  --gold-light: #efd797;
  --cream: #fbf6ed;
  --cream-dark: #eee0cc;
  --paper: #f4e7d4;
  --text: #30241f;
  --muted: #766b63;
  --line: #ddcbb1;

  width: 100%;
  overflow-x: hidden;
  color: var(--text);
  background: var(--cream);
  font-family: "Noto Sans Telugu", sans-serif;
}

.awards-page *,
.awards-page *::before,
.awards-page *::after {
  box-sizing: border-box;
}

.awards-page a {
  text-decoration: none;
}

.awards-container {
  width: min(1220px, 92%);
  margin: 0 auto;
}


/* =========================================================
   ANIMATION
========================================================= */

.awards-reveal {
  opacity: 0;
  transform: translateY(42px);
  transition:
    opacity .85s ease,
    transform .85s cubic-bezier(.2,.7,.2,1);
}

.awards-reveal.show {
  opacity: 1;
  transform: translateY(0);
}

.awards-delay-1 {
  transition-delay: .12s;
}

.awards-delay-2 {
  transition-delay: .24s;
}

.awards-delay-3 {
  transition-delay: .36s;
}


/* =========================================================
   HERO
========================================================= */

.awards-hero {
  position: relative;
  min-height: 760px;
  overflow: hidden;
  color: #fff;

  background:
    radial-gradient(
      circle at 76% 22%,
      rgba(226,182,91,.22),
      transparent 25%
    ),
    radial-gradient(
      circle at 12% 82%,
      rgba(130,30,52,.5),
      transparent 35%
    ),
    linear-gradient(
      135deg,
      #160307,
      #4b0b17 45%,
      #68192b 73%,
      #21050b
    );
}

.awards-hero::before {
  content: "";
  position: absolute;
  inset: 0;
  opacity: .07;

  background:
    repeating-linear-gradient(
      135deg,
      transparent 0,
      transparent 65px,
      rgba(255,255,255,.1) 66px,
      transparent 68px
    );
}

.awards-hero-wheel {
  position: absolute;
  width: 780px;
  height: 780px;
  right: -280px;
  top: -100px;
  opacity: .12;
  border-radius: 50%;

  background:
    repeating-conic-gradient(
      from 0deg,
      #efd797 0deg 2deg,
      transparent 2deg 13deg
    );

  animation: awardsRotate 70s linear infinite;
}

@keyframes awardsRotate {
  to {
    transform: rotate(360deg);
  }
}

.awards-hero-inner {
  position: relative;
  z-index: 2;

  min-height: 760px;

  display: grid;
  grid-template-columns: 1fr .9fr;
  align-items: center;
  gap: 70px;
}

.awards-hero-content {
  animation: heroIn 1s ease both;
}

@keyframes heroIn {
  from {
    opacity: 0;
    transform: translateY(45px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.awards-eyebrow {
  display: flex;
  align-items: center;
  gap: 12px;

  color: var(--gold-light);
  font-size: 11px;
}

.awards-eyebrow-line {
  width: 42px;
  height: 1px;
  background: var(--gold-light);
}

.awards-hero-title {
  margin: 24px 0 20px;

  font-family: "Noto Serif Telugu", serif;
  font-size: clamp(50px, 6vw, 84px);
  line-height: 1.45;
  font-weight: 500;
}

.awards-hero-title span {
  color: var(--gold-light);
}

.awards-hero-description {
  max-width: 620px;

  color: #d9c6be;

  font-size: 12px;
  line-height: 2.2;
}

.awards-hero-actions {
  display: flex;
  align-items: center;
  gap: 22px;
  margin-top: 30px;
}

.awards-button {
  min-height: 46px;

  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 9px;

  padding: 0 22px;

  font-size: 10px;

  transition: .35s ease;
}

.awards-button-gold {
  color: white;

  background:
    linear-gradient(
      110deg,
      #987039,
      #d4ad5b,
      #987039
    );

  box-shadow:
    0 16px 42px rgba(201,157,76,.22);
}

.awards-button-gold:hover {
  transform: translateY(-5px);
  box-shadow:
    0 25px 60px rgba(201,157,76,.34);
}

.awards-button-outline {
  color: white;
  padding: 8px 0;

  border-bottom:
    1px solid var(--gold-light);
}

.awards-button-outline:hover {
  color: var(--gold-light);
  transform: translateX(5px);
}


/* =========================================================
   HERO EMBLEM
========================================================= */

.awards-hero-art {
  position: relative;
  height: 590px;

  display: flex;
  align-items: center;
  justify-content: center;
}

.awards-emblem {
  position: relative;

  width: 330px;
  height: 330px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;

  background:
    radial-gradient(
      circle,
      #9d702e,
      #d5af5b 28%,
      #744f20 55%,
      #2c0a11 57%,
      #20050a
    );

  box-shadow:
    0 35px 90px rgba(0,0,0,.48);

  animation:
    emblemFloat 6s ease-in-out infinite;
}

.awards-emblem::before {
  content: "";

  position: absolute;
  inset: 13px;

  border:
    1px dashed rgba(255,244,205,.75);

  border-radius: 50%;
}

.awards-emblem::after {
  content: "";

  position: absolute;
  inset: 35px;

  border:
    1px solid rgba(255,242,194,.55);

  border-radius: 50%;
}

@keyframes emblemFloat {
  0%,100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-15px);
  }
}

.awards-emblem-content {
  position: relative;
  z-index: 2;

  width: 210px;
  height: 210px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  border-radius: 50%;

  color: #fff3c9;

  text-align: center;

  background:
    linear-gradient(
      145deg,
      #5b101d,
      #310710
    );

  border:
    1px solid rgba(238,211,144,.6);
}

.awards-emblem-content svg {
  color: var(--gold-light);
  margin-bottom: 8px;
}

.awards-emblem-content strong {
  font-family: "Noto Serif Telugu", serif;
  font-size: 35px;
  font-weight: 500;
}

.awards-emblem-content span {
  margin-top: 4px;
  color: #dbc6b5;
  font-size: 8px;
}

.awards-floating-card {
  position: absolute;

  padding: 13px 17px;

  color: #fff2d0;

  font-size: 9px;

  border:
    1px solid rgba(236,210,148,.35);

  background:
    rgba(29,4,10,.85);

  backdrop-filter: blur(12px);

  animation:
    floatingCard 6s ease-in-out infinite;
}

.awards-floating-card.one {
  left: 2%;
  top: 16%;
}

.awards-floating-card.two {
  right: 0;
  bottom: 17%;
  animation-delay: -2s;
}

@keyframes floatingCard {
  0%,100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-12px);
  }
}


/* =========================================================
   COMMON
========================================================= */

.awards-section {
  padding: 120px 0;
}

.awards-heading {
  max-width: 800px;
  margin: auto;
  text-align: center;
}

.awards-label {
  color: var(--gold);
  font-size: 10px;
}

.awards-title {
  margin: 12px 0 15px;

  color: var(--wine);

  font-family: "Noto Serif Telugu", serif;

  font-size:
    clamp(38px,5vw,62px);

  line-height: 1.5;
  font-weight: 500;
}

.awards-title span {
  color: var(--gold);
}

.awards-heading p {
  color: var(--muted);
  font-size: 11px;
  line-height: 2;
}


/* =========================================================
   INTRO
========================================================= */

.awards-intro {
  background:
    linear-gradient(
      135deg,
      #f2e4d0,
      #fbf5eb
    );
}

.awards-intro-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;

  align-items: center;

  gap: 75px;

  margin-top: 70px;
}

.awards-intro-copy p {
  margin: 0 0 22px;

  color: var(--muted);

  font-size: 12px;
  line-height: 2.15;
}

.awards-quote {
  padding: 28px 30px;

  border-left:
    3px solid var(--gold);

  background:
    rgba(255,255,255,.55);
}

.awards-quote strong {
  display: block;

  color: var(--wine);

  font-family:
    "Noto Serif Telugu",
    serif;

  font-size: 20px;
  font-weight: 500;
  line-height: 1.8;
}

.awards-quote span {
  display: block;

  margin-top: 10px;

  color: var(--muted);

  font-size: 9px;
}

.awards-founder-frame {
  padding: 10px;

  background:
    linear-gradient(
      135deg,
      #fff8eb,
      #e4ceb0
    );

  box-shadow:
    0 35px 75px rgba(61,31,15,.16);
}

.awards-founder-image {
  position: relative;

  height: 500px;

  overflow: hidden;

  background: #d6c1a3;
}

.awards-founder-image img {
  width: 100%;
  height: 100%;

  display: block;

  object-fit: contain;
}

.awards-founder-caption {
  position: absolute;

  left: 20px;
  right: 20px;
  bottom: 20px;

  padding: 16px;

  color: white;

  background:
    rgba(36,5,11,.87);
}

.awards-founder-caption strong {
  display: block;

  color: var(--gold-light);

  font-family:
    "Noto Serif Telugu",
    serif;

  font-size: 17px;
}

.awards-founder-caption span {
  display: block;

  margin-top: 5px;

  color: #d9c7bd;

  font-size: 8px;
}


/* =========================================================
   AWARD CARDS
========================================================= */

.awards-list {
  background: var(--cream);
}

.awards-grid {
  display: grid;
  grid-template-columns: repeat(2,1fr);

  gap: 20px;

  margin-top: 70px;
}

.awards-card {
  position: relative;

  min-height: 275px;

  padding: 34px;

  overflow: hidden;

  border:
    1px solid var(--line);

  background:
    #fff9ef;

  transition:
    transform .45s ease,
    box-shadow .45s ease,
    background .45s ease;
}

.awards-card:hover {
  transform: translateY(-8px);

  background:
    linear-gradient(
      145deg,
      #4d0d19,
      #721c30
    );

  box-shadow:
    0 30px 65px rgba(67,12,25,.18);
}

.awards-card-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.awards-card-icon {
  width: 58px;
  height: 58px;

  display: flex;
  align-items: center;
  justify-content: center;

  color: var(--gold);

  border:
    1px solid rgba(185,138,61,.35);

  border-radius: 50%;
}

.awards-card-number {
  color: #b8a08b;

  font-family:
    "Noto Serif Telugu",
    serif;

  font-size: 32px;
}

.awards-card h3 {
  margin: 25px 0 10px;

  color: var(--wine);

  font-family:
    "Noto Serif Telugu",
    serif;

  font-size: 21px;
  font-weight: 500;

  line-height: 1.7;
}

.awards-card p {
  margin: 0;

  color: var(--muted);

  font-size: 10px;
  line-height: 1.9;
}

.awards-card:hover h3 {
  color: white;
}

.awards-card:hover p {
  color: #dcc8c1;
}


/* =========================================================
   STATS
========================================================= */

.awards-stats {
  padding: 90px 0;

  color: white;

  background:
    linear-gradient(
      135deg,
      #24050b,
      #5b101f
    );
}

.awards-stat-grid {
  display: grid;
  grid-template-columns: repeat(4,1fr);
  gap: 1px;
}

.awards-stat {
  padding: 35px 20px;

  text-align: center;
}

.awards-stat svg {
  color: var(--gold-light);
}

.awards-stat strong {
  display: block;

  color: var(--gold-light);

  font-family:
    "Noto Serif Telugu",
    serif;

  font-size: 38px;
}

.awards-stat span {
  display: block;

  margin-top: 5px;

  color: #d7c1b9;

  font-size: 9px;
}


/* =========================================================
   MEMORY SECTION
========================================================= */

.awards-memory-section {
  padding: 120px 0 130px;

  background:
    linear-gradient(
      135deg,
      #f4e8d7,
      #fffaf2
    );
}

.awards-memory-heading {
  max-width: 780px;

  margin:
    0 auto 65px;

  text-align: center;
}

.awards-memory-heading .awards-label {
  display: inline-flex;
  align-items: center;
  gap: 10px;
}

.awards-memory-heading .awards-label::before,
.awards-memory-heading .awards-label::after {
  content: "";

  width: 28px;
  height: 1px;

  background:
    var(--gold);
}

.awards-memory-heading h2 {
  margin: 15px 0 14px;

  color: var(--wine);

  font-family:
    "Noto Serif Telugu",
    serif;

  font-size:
    clamp(35px,4.5vw,58px);

  font-weight: 500;

  line-height: 1.5;
}

.awards-memory-heading h2 span {
  color: var(--gold);
}

.awards-memory-heading p {
  max-width: 650px;

  margin: auto;

  color: var(--muted);

  font-size: 11px;

  line-height: 2;
}


/* =========================================================
   MAIN GALLERY
========================================================= */

.awards-memory-grid {
  display: grid;

  grid-template-columns:
    1.4fr .8fr .8fr;

  grid-template-rows:
    260px 260px;

  gap: 18px;
}

.awards-memory-card {
  position: relative;

  min-width: 0;
  min-height: 0;

  overflow: hidden;

  border-radius: 5px;

  background: #dfccb0;

  box-shadow:
    0 18px 45px
    rgba(54,25,12,.13);

  isolation: isolate;
}

.awards-memory-card.large {
  grid-row: span 2;
}

.awards-memory-card img {
  position: absolute;

  inset: 0;

  width: 100%;
  height: 100%;

  display: block;

  object-fit: cover;

  object-position: center;

  transition:
    transform .8s
    cubic-bezier(.2,.7,.2,1);
}

.awards-memory-card:hover img {
  transform: scale(1.06);
}


/* =========================================================
   IMAGE OVERLAY
========================================================= */

.awards-memory-card::after {
  content: "";

  position: absolute;

  inset: 0;

  z-index: 1;

  background:
    linear-gradient(
      to top,
      rgba(30,4,10,.82),
      rgba(30,4,10,.14) 58%,
      transparent
    );

  pointer-events: none;
}

.awards-memory-card::before {
  content: "";

  position: absolute;

  z-index: 4;

  inset: 12px;

  border:
    1px solid
    rgba(239,215,151,.36);

  pointer-events: none;

  transition:
    border-color .4s ease;
}

.awards-memory-card:hover::before {
  border-color:
    rgba(239,215,151,.9);
}

.awards-memory-info {
  position: absolute;

  z-index: 3;

  left: 22px;
  right: 22px;
  bottom: 20px;

  color: white;
}

.awards-memory-info small {
  display: block;

  margin-bottom: 4px;

  color: var(--gold-light);

  font-size: 8px;
}

.awards-memory-info strong {
  display: block;

  font-family:
    "Noto Serif Telugu",
    serif;

  font-size: 17px;

  font-weight: 500;

  line-height: 1.55;
}


/* =========================================================
   THREE ADDITIONAL IMAGES
========================================================= */

.awards-secondary-gallery {
  display: grid;

  grid-template-columns:
    repeat(3,1fr);

  gap: 18px;

  margin-top: 18px;
}

.awards-secondary-card {
  position: relative;

  height: 310px;

  overflow: hidden;

  border-radius: 5px;

  background: #dfccb0;

  box-shadow:
    0 18px 45px
    rgba(54,25,12,.12);

  isolation: isolate;
}

.awards-secondary-card img {
  position: absolute;

  inset: 0;

  width: 100%;
  height: 100%;

  display: block;

  object-fit: cover;

  object-position: center;

  transition:
    transform .8s
    cubic-bezier(.2,.7,.2,1);
}

.awards-secondary-card:hover img {
  transform: scale(1.06);
}

.awards-secondary-card::after {
  content: "";

  position: absolute;

  inset: 0;

  z-index: 1;

  background:
    linear-gradient(
      to top,
      rgba(30,4,10,.8),
      transparent 65%
    );
}

.awards-secondary-card::before {
  content: "";

  position: absolute;

  z-index: 4;

  inset: 12px;

  border:
    1px solid
    rgba(239,215,151,.32);

  pointer-events: none;

  transition:
    border-color .4s ease;
}

.awards-secondary-card:hover::before {
  border-color:
    rgba(239,215,151,.9);
}

.awards-secondary-info {
  position: absolute;

  z-index: 3;

  left: 20px;
  right: 20px;
  bottom: 19px;

  color: white;
}

.awards-secondary-info span {
  display: block;

  margin-bottom: 3px;

  color: var(--gold-light);

  font-size: 8px;
}

.awards-secondary-info strong {
  font-family:
    "Noto Serif Telugu",
    serif;

  font-size: 16px;

  font-weight: 500;
}


/* =========================================================
   GALLERY NOTE
========================================================= */

.awards-gallery-note {
  display: flex;

  align-items: center;
  justify-content: center;

  gap: 12px;

  margin-top: 40px;

  color: var(--muted);

  font-size: 9px;
}

.awards-gallery-note span {
  width: 32px;
  height: 1px;

  background:
    var(--gold);
}


/* =========================================================
   MESSAGE
========================================================= */

.awards-message {
  padding: 125px 0;

  color: white;

  text-align: center;

  background:
    linear-gradient(
      135deg,
      #180308,
      #58101f
    );
}

.awards-message-icon {
  color: var(--gold-light);

  margin-bottom: 20px;
}

.awards-message h2 {
  margin: 0 0 22px;

  font-family:
    "Noto Serif Telugu",
    serif;

  font-size:
    clamp(36px,5vw,58px);

  font-weight: 500;

  line-height: 1.6;
}

.awards-message h2 span {
  color: var(--gold-light);
}

.awards-message p {
  max-width: 760px;

  margin: auto;

  color: #d7c1b9;

  font-size: 12px;

  line-height: 2.2;
}


/* =========================================================
   FINAL CTA
========================================================= */

.awards-final {
  padding: 100px 0;

  text-align: center;

  background:
    var(--paper);
}

.awards-final-symbol {
  color: var(--gold);

  font-size: 44px;

  animation:
    finalFloat 3s ease-in-out infinite;
}

@keyframes finalFloat {
  0%,100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-8px);
  }
}

.awards-final h2 {
  margin: 12px 0 20px;

  color: var(--wine);

  font-family:
    "Noto Serif Telugu",
    serif;

  font-size:
    clamp(34px,4vw,55px);

  font-weight: 500;
}

.awards-final h2 span {
  color: var(--gold);
}

.awards-final p {
  max-width: 650px;

  margin: 0 auto 30px;

  color: var(--muted);

  font-size: 11px;

  line-height: 2;
}


/* =========================================================
   TABLET
========================================================= */

@media (max-width: 1050px) {

  .awards-hero-inner {
    grid-template-columns: 1fr;

    min-height: auto;

    padding: 80px 0;
  }

  .awards-hero {
    min-height: auto;
  }

  .awards-hero-art {
    max-width: 700px;
    width: 100%;

    margin: auto;
  }

  .awards-intro-grid {
    grid-template-columns: 1fr;
  }

  .awards-stat-grid {
    grid-template-columns:
      repeat(2,1fr);
  }

  .awards-grid {
    grid-template-columns:
      1fr;
  }

  .awards-memory-grid {
    grid-template-columns:
      1fr 1fr;

    grid-template-rows:
      320px 240px;
  }

  .awards-memory-card.large {
    grid-column:
      span 2;

    grid-row:
      span 1;
  }

  .awards-secondary-gallery {
    grid-template-columns:
      1fr 1fr;
  }

}


/* =========================================================
   MOBILE
========================================================= */

@media (max-width: 650px) {

  .awards-container {
    width: 92%;
  }

  .awards-hero-inner {
    padding: 55px 0 70px;
  }

  .awards-hero-title {
    font-size: 46px;
  }

  .awards-hero-description {
    font-size: 10px;
  }

  .awards-hero-actions {
    flex-direction: column;
    align-items: flex-start;
  }

  .awards-hero-art {
    height: 420px;
  }

  .awards-emblem {
    width: 250px;
    height: 250px;
  }

  .awards-emblem-content {
    width: 160px;
    height: 160px;
  }

  .awards-emblem-content strong {
    font-size: 27px;
  }

  .awards-section {
    padding: 80px 0;
  }

  .awards-title {
    font-size: 38px;
  }

  .awards-stat-grid {
    grid-template-columns:
      1fr 1fr;
  }

  .awards-stat strong {
    font-size: 30px;
  }

  .awards-founder-image {
    height: 350px;
  }


  /* -------------------------------------------
     MOBILE GALLERY
  ------------------------------------------- */

  .awards-memory-section {
    padding: 80px 0;
  }

  .awards-memory-heading {
    margin-bottom: 40px;
  }

  .awards-memory-heading h2 {
    font-size: 35px;
  }

  .awards-memory-heading p {
    font-size: 10px;
  }

  .awards-memory-grid {
    display: grid;

    grid-template-columns:
      1fr;

    grid-template-rows:
      none;

    gap: 14px;
  }

  .awards-memory-card,
  .awards-memory-card.large {
    grid-column: auto;
    grid-row: auto;

    height: 300px;
  }

  .awards-memory-card.large {
    height: 340px;
  }

  .awards-secondary-gallery {
    grid-template-columns:
      1fr;

    gap: 14px;
  }

  .awards-secondary-card {
    height: 290px;
  }

  .awards-gallery-note {
    text-align: center;
    line-height: 1.8;
  }

}


/* =========================================================
   REDUCED MOTION
========================================================= */

@media (prefers-reduced-motion: reduce) {

  .awards-page * {
    animation: none !important;
    transition: none !important;
  }

  .awards-reveal {
    opacity: 1;
    transform: none;
  }

}
`;


/* =========================================================
   REVEAL
========================================================= */

function Reveal({
  children,
  delay = "",
}) {

  const ref = useRef(null);

  useEffect(() => {

    const element = ref.current;

    if (!element) {
      return;
    }

    const observer =
      new IntersectionObserver(
        ([entry]) => {

          if (entry.isIntersecting) {

            element.classList.add("show");

            observer.unobserve(element);

          }

        },
        {
          threshold: 0.12,
        }
      );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };

  }, []);

  return (
    <div
      ref={ref}
      className={`awards-reveal ${delay}`}
    >
      {children}
    </div>
  );
}


/* =========================================================
   AWARD CARD
========================================================= */

function AwardCard({
  number,
  icon: Icon,
  title,
  text,
}) {

  return (
    <article className="awards-card">

      <div className="awards-card-top">

        <div className="awards-card-icon">
          <Icon size={25} />
        </div>

        <div className="awards-card-number">
          {number}
        </div>

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
   PAGE
========================================================= */

export default function Awards() {

  return (
    <div className="awards-page">

      <style>
        {pageStyles}
      </style>


      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="awards-hero">

        <div className="awards-hero-wheel" />

        <div className="awards-container">

          <div className="awards-hero-inner">


            <div className="awards-hero-content">

              <div className="awards-eyebrow">

                <span className="awards-eyebrow-line" />

                శ్రీ శ్రీ కళావేదిక

              </div>


              <h1 className="awards-hero-title">

                ప్రతిభకు

                <br />

                <span>
                  పట్టాభిషేకం
                </span>

              </h1>


              <p className="awards-hero-description">

                సాహిత్యం, కళలు, సంస్కృతి
                మరియు సామాజిక సేవా రంగాల్లో
                విశేష కృషి చేస్తున్న
                ప్రతిభావంతులను గుర్తించి,
                గౌరవించి, సత్కరించడం
                శ్రీ శ్రీ కళావేదిక సేవా
                ప్రస్థానంలో ఒక ముఖ్యమైన
                భాగం.

              </p>


              <p className="awards-hero-description">

                ప్రతిభ మీది...పట్టాభిషేకం మాది...

              </p>


              <div className="awards-hero-actions">

                <a
                  href="#recognitions"
                  className="awards-button awards-button-gold"
                >

                  మా గౌరవాలు

                  <ArrowUpRight size={16} />

                </a>


                <Link
                  to="/founder"
                  className="awards-button awards-button-outline"
                >

                  వ్యవస్థాపకుడి గురించి

                  <ArrowUpRight size={15} />

                </Link>

              </div>

            </div>


            <div className="awards-hero-art">

              <div className="awards-floating-card one">

                సాహిత్యం • కళ • సేవ

              </div>


              <div className="awards-emblem">

                <div className="awards-emblem-content">

                  <Trophy size={34} />

                  <strong>
                    సత్కారం
                  </strong>

                  <span>
                    ప్రతిభకు గౌరవం
                  </span>

                </div>

              </div>


              <div className="awards-floating-card two">

                ప్రతిభకు పట్టాభిషేకం

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          INTRO
      ===================================================== */}

      <section className="awards-section awards-intro">

        <div className="awards-container">

          <Reveal>

            <div className="awards-heading">

              <div className="awards-label">
                గౌరవ ప్రస్థానం
              </div>

              <h2 className="awards-title">

                ప్రతిభను గుర్తించడం...

                <br />

                <span>
                  ప్రతిభను గౌరవించడం...
                </span>

              </h2>

              <p>

                ఒక కళాకారుడి కృషికి,
                ఒక రచయిత సృజనకు,
                ఒక కవి భావానికి,
                ఒక సేవకుడి అంకితభావానికి
                గౌరవం అందించడం ద్వారా
                మరింత గొప్ప సృజనకు
                ప్రేరణ కల్పించడం.

              </p>

            </div>

          </Reveal>


          <div className="awards-intro-grid">


            <Reveal>

              <div className="awards-intro-copy">

                <p>

                  శ్రీ శ్రీ కళావేదిక
                  జాతీయ, అంతర్జాతీయ స్థాయిలో
                  సాహిత్య, సాంస్కృతిక మరియు
                  సామాజిక సేవా కార్యక్రమాలను
                  నిర్వహిస్తూ అనేక మంది
                  కవులు, రచయితలు,
                  సాహితీవేత్తలు, కళాకారులు,
                  రంగస్థల ప్రతిభావంతులు
                  మరియు యువ సృజనకారులను
                  గుర్తించి గౌరవించే
                  వేదికగా నిలుస్తోంది.

                </p>


                <p>

                  ప్రతి సత్కారం ఒక ప్రతిభకు
                  పట్టాభిషేకం అనే భావనతో,
                  ప్రతిభావంతుల సేవలను
                  సమాజానికి పరిచయం చేయడం,
                  వారి కృషికి గుర్తింపు
                  తీసుకురావడం సంస్థ
                  ప్రధాన ఉద్దేశాల్లో ఒకటి.

                </p>


                <div className="awards-quote">

                  <strong>

                    “ప్రతిభ మీది...పట్టాభిషేకం మాది...”

                  </strong>

                  <span>
                    — శ్రీ శ్రీ కళావేదిక
                  </span>

                </div>

              </div>

            </Reveal>


            <Reveal delay="awards-delay-2">

              <div className="awards-founder-frame">

                <div className="awards-founder-image">

                  <img
                    src={awardsFounderPortrait}
                    alt="కళారత్న కత్తిమండ ప్రతాప్ కుమార్ నమస్కారం చేస్తున్న చిత్రం"
                  />

                  <div className="awards-founder-caption">

                    <strong>
                      కళారత్న కత్తిమండ ప్రతాప్ కుమార్
                    </strong>

                    <span>
                      Founder & Chairman —
                      Sri Sri Kalavedhika
                    </span>

                  </div>

                </div>

              </div>

            </Reveal>

          </div>

        </div>

      </section>


      {/* =====================================================
          RECOGNITIONS
      ===================================================== */}

      <section
        id="recognitions"
        className="awards-section awards-list"
      >

        <div className="awards-container">

          <Reveal>

            <div className="awards-heading">

              <div className="awards-label">
                విశిష్ట గౌరవాలు
              </div>

              <h2 className="awards-title">

                కళారత్న

                <br />

                <span>
                  కత్తిమండ ప్రతాప్ కుమార్
                </span>

              </h2>

              <p>

                శ్రీ శ్రీ కళావేదిక వ్యవస్థాపకులు
                మరియు చైర్మన్ కళారత్న
                కత్తిమండ ప్రతాప్ కుమార్
                అందుకున్న విశిష్ట గౌరవాలు.

              </p>

            </div>

          </Reveal>


          <Reveal delay="awards-delay-2">

            <div className="awards-grid">

              <AwardCard
                number="01"
                icon={Crown}
                title="ఆంధ్రప్రదేశ్ ప్రభుత్వ కళారత్న అవార్డు"
                text="ఆంధ్రప్రదేశ్ ప్రభుత్వం అందించిన కళారత్న అవార్డు గ్రహీత."
              />

              <AwardCard
                number="02"
                icon={ScrollText}
                title="ఆంధ్రప్రదేశ్ సాహిత్య అకాడమి పూర్వ సభ్యులు"
                text="ఆంధ్రప్రదేశ్ సాహిత్య అకాడమితో అనుబంధం కలిగిన సాహిత్య సేవా ప్రస్థానం."
              />

              <AwardCard
                number="03"
                icon={Medal}
                title="పద్మభూషణ్ బోయి భీమన్న కవి ప్రభుత్వ జీవిత సాఫల్య పురస్కారం"
                text="పద్మభూషణ్ బోయి భీమన్న కవి ప్రభుత్వ జీవిత సాఫల్య పురస్కార గ్రహీత."
              />

              <AwardCard
                number="04"
                icon={Feather}
                title="మహాకవి గుర్రం జాషువా కవి ప్రభుత్వ పురస్కారం"
                text="మహాకవి గుర్రం జాషువా కవి ప్రభుత్వ పురస్కార గ్రహీత."
              />

              <AwardCard
                number="05"
                icon={Sparkles}
                title="ప్రభుత్వ ఉగాది పురస్కారం"
                text="ప్రభుత్వ ఉగాది పురస్కార గ్రహీతగా సాహిత్య సేవకు గుర్తింపు."
              />

              <AwardCard
                number="06"
                icon={BadgeCheck}
                title="ఆంధ్రప్రదేశ్ రాష్ట్ర సాహిత్య అకాడమి పురస్కారం"
                text="ఆంధ్రప్రదేశ్ రాష్ట్ర సాహిత్య అకాడమి పురస్కార గ్రహీత."
              />

              <AwardCard
                number="07"
                icon={BadgeCheck}
                title="మీడియా అకాడమీ తెలుగు భాషా పురస్కార గ్రహీత"
                text="మీడియా అకాడమీ తెలుగు భాషా పురస్కార గ్రహీత."
              />

            </div>

          </Reveal>

        </div>

      </section>


      {/* =====================================================
          STATS
      ===================================================== */}

      <section className="awards-stats">

        <div className="awards-container">

          <Reveal>

            <div className="awards-stat-grid">

              <div className="awards-stat">

                <Trophy size={25} />

                <strong>
                  7
                </strong>

                <span>
                  ప్రపంచ తెలుగు సాహిత్య మహాసభలు
                </span>

              </div>


              <div className="awards-stat">

                <Star size={25} />

                <strong>
                  180+
                </strong>

                <span>
                  కవి సమ్మేళనాలు
                </span>

              </div>


              <div className="awards-stat">

                <Users size={25} />

                <strong>
                  10000+
                </strong>

                <span>
                  సాహితీ కుటుంబ సభ్యులు
                </span>

              </div>


              <div className="awards-stat">

                <Globe2 size={25} />

                <strong>
                  10+
                </strong>

                <span>
                  జాతీయ & అంతర్జాతీయ ప్రాంతాలు
                </span>

              </div>

            </div>

          </Reveal>

        </div>

      </section>


      {/* =====================================================
          MEMORY GALLERY
      ===================================================== */}

      <section className="awards-memory-section">

        <div className="awards-container">


          <Reveal>

            <div className="awards-memory-heading">

              <div className="awards-label">

                గౌరవ క్షణాలు

              </div>


              <h2>

                జ్ఞాపకాలలో

                <br />

                <span>
                  చిరస్థాయిగా నిలిచే క్షణాలు
                </span>

              </h2>


              <p>

                సాహిత్య, సాంస్కృతిక మరియు
                సామాజిక సేవా ప్రస్థానంలో
                నిలిచిన కొన్ని ప్రత్యేక దృశ్యాలు.

              </p>

            </div>

          </Reveal>


          {/* =================================================
              FIRST ROW
          ================================================= */}

          <Reveal delay="awards-delay-2">

            <div className="awards-memory-grid">


              <div className="awards-memory-card large">

                <img
                  src={founderwithcbn}
                  alt="విశిష్ట గౌరవ క్షణం"
                />

                <div className="awards-memory-info">

                  <small>
                    విశిష్ట గౌరవ క్షణం
                  </small>

                  <strong>
                    సాహిత్య సేవకు గుర్తింపు
                  </strong>

                </div>

              </div>


              <div className="awards-memory-card">

                <img
                  src={founderpic2}
                  alt="సాహిత్య కార్యక్రమం"
                />

                <div className="awards-memory-info">

                  <small>
                    సాహిత్య కార్యక్రమం
                  </small>

                  <strong>
                    సృజనకు ప్రోత్సాహం
                  </strong>

                </div>

              </div>


              <div className="awards-memory-card">

                <img
                  src={founderwithcbn2}
                  alt="గౌరవ సత్కారం"
                />

                <div className="awards-memory-info">

                  <small>
                    గౌరవ సత్కారం
                  </small>

                  <strong>
                    ప్రతిభకు పట్టాభిషేకం
                  </strong>

                </div>

              </div>


            </div>

          </Reveal>


          {/* =================================================
              SECOND ROW
          ================================================= */}

          <Reveal delay="awards-delay-3">

            <div className="awards-secondary-gallery">


              <div className="awards-secondary-card">

                <img
                  src={imag1}
                  alt="శ్రీ శ్రీ కళావేదిక కార్యక్రమం"
                />

                <div className="awards-secondary-info">

                  <span>
                    శ్రీ శ్రీ కళావేదిక
                  </span>

                  <strong>
                    సాహిత్య గౌరవం
                  </strong>

                </div>

              </div>


              <div className="awards-secondary-card">

                <img
                  src={imag2}
                  alt="విశిష్ట కార్యక్రమం"
                />

                <div className="awards-secondary-info">

                  <span>
                    విశిష్ట కార్యక్రమం
                  </span>

                  <strong>
                    ప్రతిభకు పట్టాభిషేకం
                  </strong>

                </div>

              </div>


              <div className="awards-secondary-card">

                <img
                  src={imag3}
                  alt="గౌరవ క్షణాలు"
                />

                <div className="awards-secondary-info">

                  <span>
                    గౌరవ క్షణాలు
                  </span>

                  <strong>
                    సాహిత్య సేవా ప్రస్థానం
                  </strong>

                </div>

              </div>


            </div>

          </Reveal>


          <div className="awards-gallery-note">

            <span />

            సాహిత్యం • సంస్కృతి • కళ • సేవ

            <span />

          </div>

        </div>

      </section>


      {/* =====================================================
          CLOSING MESSAGE
      ===================================================== */}

      <section className="awards-message">

        <div className="awards-container">

          <Reveal>

            <div>

              <Award
                className="awards-message-icon"
                size={48}
              />

              <h2>

                ప్రతి సత్కారం

                <br />

                <span>
                  ఒక ప్రతిభకు పట్టాభిషేకం
                </span>

              </h2>

              <p>

                ప్రతి వేదిక ఒక కొత్త
                సృజనకు ఆరంభం...
                ప్రతి సత్కారం ఒక
                ప్రతిభకు పట్టాభిషేకం...
                ప్రతి గౌరవం మరొక
                గొప్ప ప్రయాణానికి
                ప్రేరణ...

              </p>

            </div>

          </Reveal>

        </div>

      </section>


      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="awards-final">

        <div className="awards-container">

          <Reveal>

            <div className="awards-final-symbol">
              ❧
            </div>

            <div className="awards-label">
              శ్రీ శ్రీ కళావేదిక
            </div>

            <h2>

              ప్రతిభకు గౌరవం...

              <br />

              <span>
                సృజనకు ప్రోత్సాహం...
              </span>

            </h2>

            <p>

              తెలుగు సాహిత్యం, కళలు,
              సంస్కృతి మరియు సామాజిక
              సేవా రంగాల్లో కృషి చేస్తున్న
              ప్రతిభావంతులందరికీ
              శ్రీ శ్రీ కళావేదిక
              నిరంతర ప్రోత్సాహ వేదిక.

            </p>


            <Link
              to="/contact"
              className="awards-button awards-button-gold"
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