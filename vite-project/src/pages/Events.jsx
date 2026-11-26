
import React, { useState } from "react";

import imag1 from "../assets/imag1.png";
import imag2 from "../assets/imag2.png";
import imag3 from "../assets/imag3.png";
import dance from "../assets/aboutus/dance.png";
import kalapradarshana from "../assets/aboutus/kalapradarshana.png";
import kolatam from "../assets/aboutus/kolatam.png";
import writings from "../assets/aboutus/writings.jpg";
import cleb1 from "../assets/cleb1.png";
import cleb2 from "../assets/cleb2.png";
import news from "../assets/news.png";

const events = [
  {
    id: 1,
    title: "ప్రపంచ తెలుగు సాహిత్య మహాసభలు",
    category: "సాహిత్య కార్యక్రమాలు",
    type: "ప్రత్యేక కార్యక్రమం",
    image: imag1,
    description:
      "ప్రపంచవ్యాప్తంగా తెలుగు భాష, సాహిత్యం మరియు సంస్కృతిని ప్రోత్సహించేందుకు నిర్వహించే అంతర్జాతీయ సాహిత్య సమ్మేళనం.",
    details:
      "కవులు, రచయితలు, సాహితీవేత్తలు, పరిశోధకులు మరియు తెలుగు భాషాభిమానులను ఒకే వేదికపైకి తీసుకువచ్చి తెలుగు సాహిత్య వైభవాన్ని ప్రపంచానికి పరిచయం చేయడం ఈ మహాసభల ప్రధాన ఉద్దేశ్యం.",
  },
  {
    id: 2,
    title: "కవి సమ్మేళనాలు",
    category: "సాహిత్య కార్యక్రమాలు",
    type: "సాహిత్య వేదిక",
    image: writings,
    description:
      "కవులు తమ కవిత్వాన్ని, భావాలను మరియు సృజనాత్మక ప్రతిభను పంచుకునే ఆత్మీయ వేదిక.",
    details:
      "ప్రవీణ కవులతో పాటు కొత్తగా రచనలు ప్రారంభించిన కవులకు కూడా తమ ప్రతిభను ప్రదర్శించే అవకాశాన్ని కల్పించడం ఈ కార్యక్రమాల లక్ష్యం.",
  },
  {
    id: 3,
    title: "సాహిత్య సదస్సులు",
    category: "సాహిత్య కార్యక్రమాలు",
    type: "చర్చా వేదిక",
    image: imag2,
    description:
      "తెలుగు సాహిత్య అభివృద్ధి, భాషా పరిరక్షణ మరియు సమకాలీన రచనలపై చర్చలు.",
    details:
      "సాహితీవేత్తలు, రచయితలు, అధ్యాపకులు మరియు భాషాభిమానులు పాల్గొని తెలుగు సాహిత్యంలోని విభిన్న అంశాలపై అభిప్రాయాలను పంచుకునే వేదిక.",
  },
  {
    id: 4,
    title: "సాంస్కృతిక ప్రదర్శనలు",
    category: "సాంస్కృతిక కార్యక్రమాలు",
    type: "కళా ప్రదర్శన",
    image: dance,
    description:
      "తెలుగు నృత్యం, సంగీతం మరియు సంప్రదాయ కళారూపాలకు ప్రోత్సాహం.",
    details:
      "స్థానిక కళాకారులు, యువ ప్రతిభావంతులు మరియు సంప్రదాయ కళారూపాలను ప్రదర్శించే వారికి అవకాశాలు కల్పించడం ఈ కార్యక్రమాల ఉద్దేశ్యం.",
  },
  {
    id: 5,
    title: "జానపద కళా కార్యక్రమాలు",
    category: "సాంస్కృతిక కార్యక్రమాలు",
    type: "సంప్రదాయ కళలు",
    image: kolatam,
    description:
      "తెలుగు జానపద కళలు, కోలాటం మరియు సంప్రదాయ ప్రదర్శనలకు వేదిక.",
    details:
      "తరతరాలుగా కొనసాగుతున్న జానపద కళారూపాలను పరిచయం చేస్తూ వాటి ప్రాముఖ్యతను భవిష్యత్ తరాలకు అందించడం.",
  },
  {
    id: 6,
    title: "పుస్తక ఆవిష్కరణలు",
    category: "సాహిత్య కార్యక్రమాలు",
    type: "ప్రచురణ కార్యక్రమం",
    image: imag3,
    description:
      "రచయితలు, కవులు మరియు ప్రచురణకర్తల సాహిత్య కృషిని పరిచయం చేసే వేదిక.",
    details:
      "కొత్త పుస్తకాలను పాఠకులకు పరిచయం చేయడం, రచయితలను గౌరవించడం మరియు పఠన సంస్కృతిని ప్రోత్సహించడం ఈ కార్యక్రమాల ప్రధాన లక్ష్యం.",
  },
  {
    id: 7,
    title: "ప్రతిభా పురస్కారాలు",
    category: "గౌరవ సత్కారాలు",
    type: "గౌరవ కార్యక్రమం",
    image: cleb1,
    description:
      "సాహిత్యం, కళలు మరియు సామాజిక సేవా రంగాల్లో విశేష కృషి చేసిన వారికి గుర్తింపు.",
    details:
      "విభిన్న రంగాల్లో తమ ప్రతిభతో గుర్తింపు పొందిన వ్యక్తులను సత్కరించి, మరింత సృజనాత్మక కృషికి ప్రోత్సహించడం.",
  },
  {
    id: 8,
    title: "ప్రత్యేక గౌరవ సభలు",
    category: "గౌరవ సత్కారాలు",
    type: "సత్కార కార్యక్రమం",
    image: cleb2,
    description:
      "విశిష్ట వ్యక్తులు, కళాకారులు మరియు సాహితీవేత్తలకు గౌరవాభినందనలు.",
    details:
      "సాహిత్య, సాంస్కృతిక మరియు సామాజిక రంగాల్లో సేవలందించిన వ్యక్తుల కృషిని గుర్తించి గౌరవించే కార్యక్రమాలు.",
  },
  {
    id: 9,
    title: "సాహిత్య మరియు సామాజిక సేవా కార్యక్రమాలు",
    category: "సామాజిక సేవ",
    type: "సేవా కార్యక్రమం",
    image: kalapradarshana,
    description:
      "సమాజంలో సాహిత్యం, కళలు మరియు సేవా భావనను విస్తరించే కార్యక్రమాలు.",
    details:
      "సామాజిక అవగాహన, మానవీయ విలువలు, కళలు మరియు సాహిత్యాన్ని కలిపి ప్రజల్లో సానుకూల మార్పును ప్రోత్సహించడం.",
  },
  {
    id: 10,
    title: "కళావేదిక కార్యక్రమాల విశేషాలు",
    category: "ప్రత్యేక క్షణాలు",
    type: "కార్యక్రమ జ్ఞాపకాలు",
    image: news,
    description:
      "సంస్థ నిర్వహించిన కార్యక్రమాలు మరియు సాహిత్య ప్రస్థానంలోని ముఖ్యమైన సందర్భాలు.",
    details:
      "శ్రీ శ్రీ కళావేదిక కార్యక్రమాలు, వాటి అనుభవాలు మరియు సాహిత్య సాంస్కృతిక ప్రయాణానికి సంబంధించిన విశేషాలు.",
  },
];

const historicalEventYears = [
  {
    id: "2010-2020",
    year: "2010–2020",
    events: [
      { date: "2010", title: "తూర్పుగోదావరి జిల్లా అంతర్వేదిలో కవుల సమ్మేళనం." },
      { date: "2011", title: "యువజన కవి సమ్మేళనం – మలికిపురం, తూర్పుగోదావరి జిల్లా." },
      { date: "2012", title: "హైదరాబాద్ రవీంద్రభారతిలో జాతీయ సాహిత్య సమ్మేళనం." },
      { date: "2013", title: "విజయవాడలో జాతీయ తెలుగు కవి సమ్మేళనం." },
      { date: "2014", title: "రాజమహేంద్రవరంలో జాతీయ శతాధిక కవి సమ్మేళనం." },
      { date: "2015", title: "అంతర్జాతీయ ప్రపంచ కవితోత్సవం – 30 గంటల 30 నిమిషాల 30 సెకన్ల ఏకధాటి కవి సమ్మేళనం (ప్రపంచ రికార్డు నమోదు)." },
      { date: "2016", title: "అంతర్జాతీయ కవుల పండుగ పేరుతో సాహిత్యోత్సవం." },
      { date: "2017", title: "రాజమహేంద్రవరంలో యువ ప్రతిభా పురస్కారాల ప్రదానం." },
      { date: "2017", title: "తూర్పుగోదావరి జిల్లా మలికిపురంలో మూడు రోజులపాటు రంగస్థల నాటక ప్రదర్శనలు." },
      { date: "2017", title: "కువైట్ దేశంలో తెలుగు వారిచే తెలుగు సాహిత్య సదస్సు." },
      { date: "2018", title: "దుబాయ్ దేశంలో తెలుగు వారిచే తెలుగు వైభవం." },
      { date: "2019", title: "నిడదవోలు, సింగపూర్‌లలో జాతీయ కవి సమ్మేళనాలు." },
      { date: "మార్చి 1, 2020", title: "ఏలూరులో జాతీయ శతాధిక కవి సమ్మేళనం." },
    ],
  },
  {
    id: "2021",
    year: "2021",
    events: [
      { date: "మార్చి 7", title: "ఏలూరులో శతాధిక కవి సమ్మేళనం." },
      { date: "ఏప్రిల్ 20", title: "సన్నయ్య యూనివర్సిటీలో కవి సమ్మేళనం." },
      { date: "ఆగస్టు 27", title: "ఏలూరులో కీర్తి పురస్కార అవార్డులు, జాతీయ శతాధిక కవి సమ్మేళనం." },
      { date: "అక్టోబర్ 2", title: "తెలంగాణ భద్రాచలంలో జాతీయ శతాధిక కవి సమ్మేళనం." },
      { date: "అక్టోబర్ 24", title: "పశ్చిమగోదావరి జిల్లా తణుకులో జాతీయ శతాధిక కవి సమ్మేళనం." },
      { date: "నవంబర్ 5", title: "కోనసీమ జిల్లా అమలాపురంలో జాతీయ శతాధిక కవి సమ్మేళనం." },
      { date: "డిసెంబర్ 17", title: "హైదరాబాద్ రవీంద్రభారతిలో జాతీయ శతాధిక కవి సమ్మేళనం మరియు జాతీయ సాహిత్య సదస్సు." },
    ],
  },
  {
    id: "2022",
    year: "2022",
    events: [
      { date: "జనవరి 9", title: "శ్రీశ్రీ కళావేదిక ఆధ్వర్యంలో యంగ్ టాలెంట్ వన్ సాహిత్య మహోత్సవం, మారేడుమిల్లిలో కార్యక్రమం." },
      { date: "ఫిబ్రవరి 27", title: "తెలంగాణ మంచిర్యాలలో జాతీయ శతాధిక కవి సమ్మేళనం." },
      { date: "జూన్ 4, 5", title: "తెలంగాణ మంచిర్యాల జిల్లాలో 24 గంటల 24 నిమిషాల 24 సెకన్ల నాన్‌స్టాప్ కవితా కార్యక్రమం." },
      { date: "జూలై 24", title: "హైదరాబాద్‌లో తెలుగు యూనివర్సిటీ ఆధ్వర్యంలో 200 మంది మహాశయమూర్తుల కవిత్వం ‘ఆమె’ పుస్తక ఆవిష్కరణ, జాతీయ శతాధిక కవి సమ్మేళనం." },
      { date: "ఆగస్టు 26", title: "కృష్ణా నది తీరాన విజయవాడలో జాతీయ శతాధిక కవి సమ్మేళనం." },
      { date: "అక్టోబర్ 9", title: "శ్రీకాకుళంలో జాతీయ శతాధిక కవి సమ్మేళనం." },
      { date: "అక్టోబర్ 30", title: "యాదాద్రి భువనగిరి జిల్లాలో జాతీయ శతాధిక కవి సమ్మేళనం." },
      { date: "నవంబర్ 27", title: "భద్రాద్రి కవితా పండుగ పేరుతో భద్రాచలంలో జాతీయ శతాధిక కవి సమ్మేళనం." },
      { date: "డిసెంబర్ 18", title: "ప్రకాశం కవనతోరణం, ఒంగోలు కవితా ప్రభంజనం కార్యక్రమం – జాతీయ శతాధిక కవి సమ్మేళనం." },
    ],
  },
  {
    id: "2023",
    year: "2023",
    events: [
      { date: "జనవరి 21", title: "యువత ప్రోత్సాహం కోసం 200 మంది యువతతో యువజన కవితా ఉత్సవం." },
      { date: "మార్చి 12", title: "జి.ఆర్. అంబేద్కర్ కోనసీమ జిల్లా అమలాపురంలో జాతీయ శతాధిక కవి సమ్మేళనం." },
      { date: "మే 7", title: "సాహిత్య చరిత్రలో తొలిసారిగా శ్రీశ్రీ కళావేదిక కార్యక్రమం." },
      { date: "మే 21", title: "కర్నూలులో ‘కవులు కవితా వసంతం’ జాతీయ శతాధిక కవి సమ్మేళనం." },
      { date: "జూన్ 25", title: "శ్రీశ్రీ కళావేదిక ఆధ్వర్యాన వైభవంగా మైసూరులో తెలుగు కవితా కార్యక్రమం." },
      { date: "జూలై 9", title: "తెలంగాణ రాజధాని హైదరాబాద్‌లో తెలంగాణ సారస్వత పరిషత్తులో జాతీయ శతాధిక కవి సమ్మేళనం." },
      { date: "ఆగస్టు 12", title: "సత్యసాయి జిల్లా లేపాక్షిలో జాతీయ శతాధిక కవి సమ్మేళనం." },
      { date: "ఆగస్టు 27", title: "తెలుగు భాషా దినోత్సవం సందర్భంగా ఏలూరులో హేలాపురి కవితా సంబరాలు, జాతీయ శతాధిక కవి సమ్మేళనం." },
      { date: "అక్టోబర్ 8", title: "పల్నాడు జిల్లా నరసరావుపేటలో జాతీయ శతాధిక కవి సమ్మేళనం." },
      { date: "నవంబర్ 19", title: "విజయవాడలో 125వ జాతీయ శతాధిక కవి సమ్మేళనం." },
      { date: "డిసెంబర్ 16, 17", title: "తాడేపల్లిగూడెంలో ప్రపంచ తెలుగు, సాహిత్య కళా ఉత్సవాలు." },
    ],
  },
];

const categories = [
  "అన్ని కార్యక్రమాలు",
  "సాహిత్య కార్యక్రమాలు",
  "సాంస్కృతిక కార్యక్రమాలు",
  "గౌరవ సత్కారాలు",
  "సామాజిక సేవ",
  "ప్రత్యేక క్షణాలు",
];

export default function Events() {
  const [activeCategory, setActiveCategory] =
    useState("అన్ని కార్యక్రమాలు");

  const [selectedEvent, setSelectedEvent] = useState(null);

  const filteredEvents =
    activeCategory === "అన్ని కార్యక్రమాలు"
      ? events
      : events.filter(
          (event) => event.category === activeCategory
        );

  return (
    <main className="skv-events">

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Telugu:wght@400;500;600;700;800&family=Noto+Serif+Telugu:wght@400;500;600;700&display=swap');

        .skv-events {
          --wine: #761d37;
          --wine-dark: #421426;
          --gold: #c4a16b;
          --cream: #faf7f1;
          min-height: 100vh;
          color: #34272b;
          background: var(--cream);
          font-family: "Noto Sans Telugu", sans-serif;
          overflow: hidden;
        }

        .skv-events * {
          box-sizing: border-box;
        }

        /* HERO */

        .events-hero {
          position: relative;
          padding: 105px 24px 95px;
          text-align: center;
          overflow: hidden;
          background:
            radial-gradient(circle at 12% 15%, rgba(255,255,255,.9), transparent 30%),
            radial-gradient(circle at 90% 80%, rgba(196,161,107,.2), transparent 30%),
            linear-gradient(130deg, #f0e4d8, #fffaf3 55%, #f1e2d7);
        }

        .events-hero::before,
        .events-hero::after {
          content: "";
          position: absolute;
          width: 290px;
          height: 290px;
          border: 1px solid rgba(118,29,55,.12);
          border-radius: 50%;
          pointer-events: none;
        }

        .events-hero::before {
          top: -170px;
          left: -80px;
          box-shadow:
            0 0 0 25px rgba(118,29,55,.025),
            0 0 0 50px rgba(118,29,55,.02);
        }

        .events-hero::after {
          right: -100px;
          bottom: -190px;
          box-shadow:
            0 0 0 25px rgba(196,161,107,.05),
            0 0 0 50px rgba(196,161,107,.03);
        }

        .events-hero-content {
          position: relative;
          z-index: 1;
          max-width: 900px;
          margin: auto;
          animation: eventRise .8s ease both;
        }

        .events-kicker {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 22px;
          color: #a17d4e;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 3px;
        }

        .events-kicker::before,
        .events-kicker::after {
          content: "";
          width: 35px;
          height: 1px;
          background: var(--gold);
        }

        .events-hero h1 {
          margin: 0;
          color: var(--wine-dark);
          font-family: "Noto Serif Telugu", serif;
          font-size: clamp(32px, 5vw, 53px);
          line-height: 1.6;
          font-weight: 700;
        }

        .events-hero h1 span {
          color: var(--wine);
        }

        .events-hero p {
          max-width: 730px;
          margin: 18px auto 0;
          color: #78686b;
          font-size: 14px;
          line-height: 2;
        }

        .events-ornament {
          margin-top: 25px;
          color: var(--gold);
          font-size: 20px;
          letter-spacing: 8px;
        }

        /* INTRO */

        .events-container {
          width: min(1240px, calc(100% - 44px));
          margin: auto;
          padding: 80px 0 100px;
        }

        .events-intro {
          display: grid;
          grid-template-columns: 1.2fr .8fr;
          gap: 55px;
          align-items: center;
          margin-bottom: 75px;
        }

        .events-overline {
          display: block;
          margin-bottom: 12px;
          color: #a17d4e;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 2.5px;
        }

        .events-intro h2 {
          margin: 0;
          color: var(--wine-dark);
          font-family: "Noto Serif Telugu", serif;
          font-size: clamp(24px, 3vw, 34px);
          line-height: 1.7;
        }

        .events-intro p {
          margin: 14px 0 0;
          color: #827579;
          font-size: 13px;
          line-height: 2.1;
        }

        .events-highlight {
          position: relative;
          padding: 30px;
          border: 1px solid rgba(196,161,107,.35);
          border-radius: 16px;
          background: linear-gradient(135deg, #fffdf8, #f3e9dc);
        }

        .events-highlight-label {
          display: block;
          color: #a17d4e;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 2px;
          margin-bottom: 12px;
        }

        .events-highlight strong {
          display: block;
          color: var(--wine);
          font-family: "Noto Serif Telugu", serif;
          font-size: 25px;
          line-height: 1.8;
        }

        .events-highlight p {
          margin: 8px 0 0;
          color: #7d6e70;
          font-size: 12px;
          line-height: 1.9;
        }

        /* SECTION TITLE */

        .events-section-heading {
          margin-bottom: 28px;
        }

        .events-section-heading h2 {
          margin: 0;
          color: var(--wine-dark);
          font-family: "Noto Serif Telugu", serif;
          font-size: clamp(24px, 3vw, 32px);
          line-height: 1.7;
        }

        .events-section-heading p {
          margin: 8px 0 0;
          color: #827579;
          font-size: 13px;
          line-height: 1.9;
        }

        /* FILTERS */

        .events-filters {
          display: flex;
          flex-wrap: wrap;
          gap: 9px;
          padding-bottom: 23px;
          margin-bottom: 32px;
          border-bottom: 1px solid rgba(118,29,55,.1);
        }

        .events-filters button {
          padding: 10px 17px;
          border: 1px solid rgba(118,29,55,.15);
          border-radius: 30px;
          background: #fff;
          color: #75656a;
          font-family: inherit;
          font-size: 12px;
          font-weight: 600;
          cursor: pointer;
          transition: .25s ease;
        }

        .events-filters button:hover {
          border-color: var(--gold);
          color: var(--wine);
          transform: translateY(-2px);
        }

        .events-filters button.active {
          color: white;
          background: var(--wine);
          border-color: var(--wine);
          box-shadow: 0 7px 20px rgba(118,29,55,.16);
        }

        /* EVENTS GRID */

        .events-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 25px;
        }

        .event-card {
          min-width: 0;
          overflow: hidden;
          border: 1px solid rgba(118,29,55,.08);
          border-radius: 15px;
          background: #fff;
          box-shadow: 0 8px 28px rgba(60,30,39,.045);
          animation: eventRise .6s ease both;
          transition: transform .3s ease, box-shadow .3s ease;
        }

        .event-card:hover {
          transform: translateY(-7px);
          box-shadow: 0 18px 42px rgba(60,30,39,.11);
        }

        .event-image {
          position: relative;
          height: 240px;
          padding: 12px;
          display: flex;
          justify-content: center;
          align-items: center;
          overflow: hidden;
          background: linear-gradient(145deg, #eee7df, #fffaf4);
        }

        .event-image img {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: contain;
          transition: transform .45s ease;
        }

        .event-card:hover .event-image img {
          transform: scale(1.035);
        }

        .event-image-label {
          position: absolute;
          left: 17px;
          bottom: 16px;
          padding: 7px 12px;
          border: 1px solid rgba(255,255,255,.55);
          border-radius: 30px;
          color: var(--wine-dark);
          background: rgba(255,255,255,.92);
          font-size: 10px;
          font-weight: 700;
        }

        .event-card-body {
          padding: 21px;
        }

        .event-type {
          color: #a5814e;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 1.5px;
        }

        .event-card-body h3 {
          margin: 10px 0 8px;
          color: var(--wine-dark);
          font-family: "Noto Serif Telugu", serif;
          font-size: 18px;
          line-height: 1.7;
          font-weight: 600;
        }

        .event-card-body p {
          margin: 0;
          color: #897c80;
          font-size: 12px;
          line-height: 1.9;
        }

        .event-details-button {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin-top: 19px;
          padding: 0;
          border: 0;
          color: var(--wine);
          background: transparent;
          font-family: inherit;
          font-size: 12px;
          font-weight: 700;
          cursor: pointer;
          transition: gap .25s ease;
        }

        .event-details-button:hover {
          gap: 13px;
          color: #a17d4e;
        }

        .events-history {
          margin-top: 85px;
          padding: 38px;
          border: 1px solid rgba(196,161,107,.3);
          border-radius: 20px;
          background: linear-gradient(145deg, #fffdf9, #f3e8dc);
        }

        .events-history-heading {
          max-width: 860px;
          margin: 0 auto 30px;
          text-align: center;
        }

        .events-history-heading h2 {
          margin: 0;
          color: var(--wine-dark);
          font-family: "Noto Serif Telugu", serif;
          font-size: clamp(23px, 3vw, 32px);
          line-height: 1.8;
        }

        .events-history-heading p {
          margin: 8px 0 0;
          color: #827579;
          font-size: 13px;
          line-height: 1.9;
        }

        .events-history-years {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 18px;
        }

        .events-history-year {
          overflow: hidden;
          border: 1px solid rgba(118,29,55,.1);
          border-radius: 14px;
          background: #fff;
          box-shadow: 0 8px 25px rgba(60,30,39,.04);
        }

        .events-history-year h3 {
          margin: 0;
          padding: 13px 18px;
          color: #fff;
          background: var(--wine);
          font-family: "Noto Serif Telugu", serif;
          font-size: 19px;
          font-weight: 600;
        }

        .events-history-year ol {
          margin: 0;
          padding: 0;
          list-style: none;
        }

        .events-history-year li {
          display: grid;
          grid-template-columns: minmax(95px, 125px) minmax(0, 1fr);
          gap: 12px;
          padding: 13px 16px;
          border-bottom: 1px solid rgba(118,29,55,.08);
        }

        .events-history-year li:last-child {
          border-bottom: 0;
        }

        .events-history-date {
          color: var(--wine);
          font-size: 12px;
          font-weight: 700;
          line-height: 1.8;
        }

        .events-history-event {
          margin: 0;
          color: #675a5c;
          font-size: 12px;
          line-height: 1.9;
        }

        /* PROGRAM APPROACH */

        .events-approach {
          margin-top: 90px;
          padding: 48px 35px;
          border: 1px solid rgba(196,161,107,.28);
          border-radius: 18px;
          background: linear-gradient(130deg, #f1e6d9, #fffaf3);
        }

        .events-approach-heading {
          text-align: center;
          margin-bottom: 35px;
        }

        .events-approach-heading h2 {
          margin: 0;
          color: var(--wine-dark);
          font-family: "Noto Serif Telugu", serif;
          font-size: clamp(23px, 3vw, 31px);
          line-height: 1.8;
        }

        .events-approach-heading p {
          margin: 8px 0 0;
          color: #827478;
          font-size: 12px;
          line-height: 1.9;
        }

        .events-values {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 15px;
        }

        .event-value {
          padding: 22px 15px;
          text-align: center;
          border: 1px solid rgba(118,29,55,.09);
          border-radius: 12px;
          background: rgba(255,255,255,.65);
          transition: transform .3s ease, border-color .3s ease;
        }

        .event-value:hover {
          transform: translateY(-5px);
          border-color: rgba(196,161,107,.55);
        }

        .event-value-number {
          display: block;
          margin-bottom: 10px;
          color: #bd985d;
          font-family: Georgia, serif;
          font-size: 19px;
        }

        .event-value h3 {
          margin: 0;
          color: var(--wine);
          font-family: "Noto Serif Telugu", serif;
          font-size: 15px;
        }

        .event-value p {
          margin: 7px 0 0;
          color: #88797c;
          font-size: 11px;
          line-height: 1.8;
        }

        /* FINAL MESSAGE */

        .events-closing {
          margin-top: 70px;
          text-align: center;
        }

        .events-closing span {
          color: var(--gold);
          font-size: 24px;
        }

        .events-closing h3 {
          margin: 12px 0;
          color: var(--wine-dark);
          font-family: "Noto Serif Telugu", serif;
          font-size: clamp(21px, 3vw, 29px);
          line-height: 1.8;
        }

        .events-closing p {
          max-width: 700px;
          margin: auto;
          color: #827579;
          font-size: 13px;
          line-height: 2;
        }

        /* MODAL */

        .event-modal-backdrop {
          position: fixed;
          inset: 0;
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          background: rgba(25,9,16,.83);
          backdrop-filter: blur(9px);
          animation: eventFade .25s ease;
        }

        .event-modal {
          position: relative;
          width: min(650px, 100%);
          max-height: 90vh;
          overflow-y: auto;
          padding: 25px;
          border: 1px solid rgba(196,161,107,.35);
          border-radius: 17px;
          background: #fffaf3;
          box-shadow: 0 25px 80px rgba(0,0,0,.3);
          animation: eventRise .35s ease;
        }

        .event-modal-image {
          width: 100%;
          height: 260px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 10px;
          border-radius: 10px;
          background: #f0e8de;
        }

        .event-modal-image img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }

        .event-modal-close {
          position: absolute;
          top: 12px;
          right: 12px;
          z-index: 2;
          width: 39px;
          height: 39px;
          border: 1px solid rgba(118,29,55,.12);
          border-radius: 50%;
          background: white;
          color: var(--wine);
          font-size: 23px;
          cursor: pointer;
        }

        .event-modal-content {
          padding: 22px 5px 5px;
        }

        .event-modal-content span {
          color: #a5814e;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 1.5px;
        }

        .event-modal-content h2 {
          margin: 10px 0;
          color: var(--wine-dark);
          font-family: "Noto Serif Telugu", serif;
          font-size: 23px;
          line-height: 1.7;
        }

        .event-modal-content p {
          margin: 0;
          color: #796c70;
          font-size: 13px;
          line-height: 2.1;
        }

        @keyframes eventRise {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes eventFade {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        /* TABLET */

        @media (max-width: 950px) {
          .events-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .events-intro {
            grid-template-columns: 1fr;
            gap: 25px;
          }

          .events-history-years {
            grid-template-columns: 1fr;
          }
        }

        /* MOBILE */

        @media (max-width: 600px) {
          .events-hero {
            padding: 75px 18px;
          }

          .events-hero h1 {
            font-size: 29px;
          }

          .events-hero p {
            font-size: 12px;
          }

          .events-container {
            width: calc(100% - 30px);
            padding: 55px 0 70px;
          }

          .events-intro {
            margin-bottom: 55px;
          }

          .events-highlight {
            padding: 24px;
          }

          .events-filters {
            flex-wrap: nowrap;
            overflow-x: auto;
            scrollbar-width: thin;
          }

          .events-filters button {
            flex-shrink: 0;
          }

          .events-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .events-history {
            margin-top: 60px;
            padding: 24px 16px;
          }

          .events-history-year li {
            grid-template-columns: minmax(0, 1fr);
            gap: 4px;
          }

          .event-image {
            height: 260px;
          }

          .events-approach {
            margin-top: 60px;
            padding: 32px 18px;
          }

          .events-values {
            grid-template-columns: repeat(2, 1fr);
          }

          .events-closing {
            margin-top: 55px;
          }

          .event-modal {
            padding: 15px;
          }

          .event-modal-image {
            height: 210px;
          }

          .event-modal-content h2 {
            font-size: 19px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .skv-events *,
          .skv-events *::before,
          .skv-events *::after {
            animation-duration: .01ms !important;
            transition-duration: .01ms !important;
          }
        }
      `}</style>

      {/* HERO */}
      <section className="events-hero">
        <div className="events-hero-content">
          <div className="events-kicker">
            OUR EVENTS · OUR CULTURE
          </div>

          <h1>
            సాహిత్య <span>సాంస్కృతిక</span>
            <br />
            కార్యక్రమాలు
          </h1>

          <p>
            తెలుగు భాష, సాహిత్యం, సంస్కృతి, కళలు మరియు సామాజిక
            సేవను కలిపే కార్యక్రమాల సమాహారం.
          </p>

          <div className="events-ornament">
            ✦ ─── ✦ ─── ✦
          </div>
        </div>
      </section>

      <section className="events-container">

        {/* INTRODUCTION */}
        <div className="events-intro">
          <div>
            <span className="events-overline">
              THE SPIRIT OF CELEBRATION
            </span>

            <h2>
              ప్రతి వేదిక ఒక అవకాశం...
              <br />
              ప్రతి కార్యక్రమం ఒక స్ఫూర్తి...
            </h2>

            <p>
              శ్రీ శ్రీ కళావేదిక సాహిత్య, సాంస్కృతిక మరియు సామాజిక
              సేవా కార్యక్రమాల ద్వారా కవులు, రచయితలు, కళాకారులు,
              సాహితీవేత్తలు మరియు యువ ప్రతిభావంతులకు వేదికను
              కల్పిస్తోంది. జాతీయ మరియు అంతర్జాతీయ స్థాయిలో
              తెలుగు భాషా వైభవాన్ని విస్తరించడమే మా లక్ష్యం.
            </p>
          </div>

          <div className="events-highlight">
            <span className="events-highlight-label">
              OUR LITERARY JOURNEY
            </span>

            <strong>7 ప్రపంచ తెలుగు సాహిత్య మహాసభలు</strong>

            <p>
              తెలుగు సాహిత్యానికి అంతర్జాతీయ గుర్తింపు,
              కవులకు ప్రోత్సాహం మరియు భాషా పరిరక్షణ కోసం
              కొనసాగుతున్న మా సాహిత్య ప్రస్థానం.
            </p>
          </div>
        </div>

        {/* EVENTS LIST */}
        <div className="events-section-heading">
          <span className="events-overline">
            EXPLORE OUR PROGRAMMES
          </span>

          <h2>మా కార్యక్రమాల విభాగాలు</h2>

          <p>
            సాహిత్యం నుంచి సంస్కృతి వరకు, సత్కారాల నుంచి సామాజిక
            సేవ వరకు మా కార్యక్రమాల విశేషాలను తెలుసుకోండి.
          </p>
        </div>

        {/* FILTERS */}
        <div className="events-filters">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              className={
                activeCategory === category ? "active" : ""
              }
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* EVENT CARDS */}
        <div className="events-grid">
          {filteredEvents.map((event, index) => (
            <article
              className="event-card"
              key={event.id}
              style={{ animationDelay: `${index * 65}ms` }}
            >
              <div className="event-image">
                <img
                  src={event.image}
                  alt={event.title}
                  loading="lazy"
                />

                <span className="event-image-label">
                  {event.tag}
                </span>
              </div>

              <div className="event-card-body">
                <span className="event-type">
                  {event.type}
                </span>

                <h3>{event.title}</h3>

                <p>{event.description}</p>

                <button
                  className="event-details-button"
                  type="button"
                  onClick={() => setSelectedEvent(event)}
                >
                  కార్యక్రమ వివరాలు <span>→</span>
                </button>
              </div>
            </article>
          ))}
        </div>

        <section
          className="events-history"
          aria-labelledby="events-history-title"
        >
          <div className="events-history-heading">
            <span className="events-overline">
              OUR LITERARY MILESTONES
            </span>

            <h2 id="events-history-title">
              శ్రీశ్రీ కళావేదిక ఆధ్వర్యంలో నిర్వహించిన ముఖ్యమైన
              సాహిత్య, సాంస్కృతిక కార్యక్రమాలు
            </h2>

            <p>
              2010 నుంచి 2023 వరకు నిర్వహించిన కార్యక్రమాలు సంవత్సరాల వారీగా.
            </p>
          </div>

          <div className="events-history-years">
            {historicalEventYears.map((year) => (
              <section
                className="events-history-year"
                key={year.id}
                aria-labelledby={`events-year-${year.id}`}
              >
                <h3 id={`events-year-${year.id}`}>{year.year}</h3>

                <ol>
                  {year.events.map((event, index) => (
                    <li key={`${year.id}-${event.date}-${index}`}>
                      <span className="events-history-date">
                        {event.date}
                      </span>

                      <p className="events-history-event">
                        {event.title}
                      </p>
                    </li>
                  ))}
                </ol>
              </section>
            ))}
          </div>
        </section>

        {/* ORGANISATION APPROACH */}
        <section className="events-approach">
          <div className="events-approach-heading">
            <span className="events-overline">
              OUR PURPOSE
            </span>

            <h2>మా కార్యక్రమాల ముఖ్య ఉద్దేశ్యాలు</h2>

            <p>
              ప్రతి కార్యక్రమం వెనుక ఒక లక్ష్యం, ప్రతి వేదిక వెనుక
              ఒక సేవా భావన ఉంటుంది.
            </p>
          </div>

          <div className="events-values">
            <div className="event-value">
              <span className="event-value-number">01</span>
              <h3>సాహిత్య ప్రోత్సాహం</h3>
              <p>కవులు, రచయితలకు అవకాశాలు కల్పించడం.</p>
            </div>

            <div className="event-value">
              <span className="event-value-number">02</span>
              <h3>సంస్కృతి పరిరక్షణ</h3>
              <p>తెలుగు కళలు మరియు సంప్రదాయాలను కాపాడడం.</p>
            </div>

            <div className="event-value">
              <span className="event-value-number">03</span>
              <h3>ప్రతిభకు గుర్తింపు</h3>
              <p>ప్రతిభావంతులను గుర్తించి గౌరవించడం.</p>
            </div>

            <div className="event-value">
              <span className="event-value-number">04</span>
              <h3>సామాజిక సేవ</h3>
              <p>సమాజానికి ఉపయోగపడే కార్యక్రమాలను నిర్వహించడం.</p>
            </div>
          </div>
        </section>

        {/* CLOSING */}
        <div className="events-closing">
          <span>✦</span>

          <h3>
            ప్రతిభ మీది...పట్టాభిషేకం మాది...
          </h3>

          <p>
            తెలుగు సాహిత్యం, సంస్కృతి మరియు కళల అభివృద్ధి కోసం
            శ్రీ శ్రీ కళావేదిక ప్రస్థానం నిరంతరం కొనసాగుతుంది.
          </p>
        </div>
      </section>

      {/* EVENT DETAILS MODAL */}
      {selectedEvent && (
        <div
          className="event-modal-backdrop"
          onClick={() => setSelectedEvent(null)}
          role="dialog"
          aria-modal="true"
          aria-label="కార్యక్రమ వివరాలు"
        >
          <div
            className="event-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="event-modal-close"
              onClick={() => setSelectedEvent(null)}
              aria-label="Close"
            >
              ×
            </button>

            <div className="event-modal-image">
              <img
                src={selectedEvent.image}
                alt={selectedEvent.title}
              />
            </div>

            <div className="event-modal-content">
              <span>{selectedEvent.category}</span>

              <h2>{selectedEvent.title}</h2>

              <p>{selectedEvent.details}</p>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
