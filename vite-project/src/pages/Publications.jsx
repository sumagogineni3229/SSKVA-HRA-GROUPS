
import React from "react";

import founder from "../assets/founder.png";
import founderpic2 from "../assets/founderpic2.png";
import founderwithcbn from "../assets/founderwithcbn.png";
import writings from "../assets/aboutus/writings.jpg";
import imag1 from "../assets/imag1.png";
import imag2 from "../assets/imag2.png";
import imag3 from "../assets/imag3.png";
import note from "../assets/note.png";

const literarySections = [
  {
    number: "01",
    title: "కవిత్వంలో ఒక జీవన స్వరం",
    subtitle: "THE VOICE OF POETRY",
    image: writings,
    verse: [
      "భావానికి భాషనిచ్చి...",
      "భాషకు భావాన్ని అద్దుతూ...",
      "మనసులో మెదిలిన ప్రతి ఆలోచనను",
      "అక్షరాల హారంగా మలిచే ప్రయాణం."
    ],
    description:
      "కవిత్వం అనేది కేవలం పదాల కలయిక కాదు. ఒక మనసు మరో మనసుతో మాట్లాడే మాధ్యమం. కత్తిమండ ప్రతాప్ కుమార్ గారి సాహిత్య ప్రస్థానంలో కవిత్వం ఒక ముఖ్యమైన వ్యక్తీకరణ.",
  },
  {
    number: "02",
    title: "రచనలో సామాజిక స్పృహ",
    subtitle: "WRITING WITH A PURPOSE",
    image: imag1,
    verse: [
      "సమాజం పలకలేని మాటకు...",
      "రచన ఒక గొంతుక కావాలి.",
      "మౌనంగా మిగిలిన మనిషికి...",
      "అక్షరం ఒక అండగా నిలవాలి."
    ],
    description:
      "రచన సమాజాన్ని ప్రశ్నించగలదు, ఆలోచింపజేయగలదు, మార్పుకు దారిచూపగలదు. సాహిత్యాన్ని సామాజిక చైతన్యానికి సాధనంగా చూడాలనే దృక్పథం ఈ ప్రయాణంలో కనిపిస్తుంది.",
  },
  {
    number: "03",
    title: "తెలుగు భాషకు అక్షర నివాళి",
    subtitle: "A TRIBUTE TO TELUGU",
    image: imag2,
    verse: [
      "అమ్మ పలికిన తొలి పలుకులో...",
      "తెలుగు తల్లి మమకారం ఉంది.",
      "తరతరాల కథలలో...",
      "మన సంస్కృతి సజీవంగా ఉంది."
    ],
    description:
      "తెలుగు భాషలోని మాధుర్యం, సాహిత్యంలోని వైవిధ్యం, సంస్కృతిలోని విలువలు ప్రపంచానికి చేరాలనే ఆకాంక్షతో సాగుతున్న సాహిత్య సేవ.",
  },
  {
    number: "04",
    title: "కళలకు ఒక గౌరవ వేదిక",
    subtitle: "RECOGNISING CREATIVE TALENT",
    image: imag3,
    verse: [
      "ప్రతిభకు ప్రాంతం అడ్డుకాదు...",
      "సృజనకు వయసు పరిమితి కాదు.",
      "ఒక అవకాశం దొరికితే చాలు...",
      "ఒక కళాకారుడి ప్రపంచమే వెలుగుతుంది."
    ],
    description:
      "కొత్త కవులు, రచయితలు, కళాకారులు మరియు సృజనాత్మక ప్రతిభావంతులకు వేదిక కల్పించాలనే సంకల్పమే శ్రీ శ్రీ కళావేదిక సాహిత్య ప్రస్థానానికి బలం.",
  },
  {
    number: "05",
    title: "సాహిత్యం నుంచి సేవ వరకు",
    subtitle: "LITERATURE INTO SERVICE",
    image: note,
    verse: [
      "అక్షరం ఆలోచనను మేల్కొలపాలి...",
      "కళ మనసులను కలపాలి...",
      "సంస్కృతి తరాలకు వారసత్వం కావాలి...",
      "సేవ సమాజానికి వెలుగవ్వాలి."
    ],
    description:
      "సాహిత్యం, సంస్కృతి మరియు సామాజిక సేవలను ఒకే ప్రయాణంలో కలిపి ముందుకు తీసుకెళ్లాలనే సంస్థ ఆశయాన్ని ఈ విభాగం ప్రతిబింబిస్తుంది.",
  },
];

const honours = [
  "ఆంధ్రప్రదేశ్ ప్రభుత్వ కళారత్న అవార్డు గ్రహీత",
  "ఆంధ్రప్రదేశ్ సాహిత్య అకాడమి పూర్వ సభ్యులు",
  "పద్మభూషణ్ బోయి భీమన్న కవి ప్రభుత్వ జీవిత సాఫల్య పురస్కార గ్రహీత",
  "మహాకవి గుర్రం జాషువా కవి ప్రభుత్వ పురస్కార గ్రహీత",
  "ప్రభుత్వ ఉగాది పురస్కార గ్రహీత",
  "ఆంధ్రప్రదేశ్ రాష్ట్ర సాహిత్య అకాడమి పురస్కార గ్రహీత",
];

export default function Publications() {
  return (
    <main className="skv-literature">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Telugu:wght@400;500;600;700;800&family=Noto+Serif+Telugu:wght@400;500;600;700&display=swap');

        .skv-literature {
          --wine: #751e38;
          --wine-dark: #421426;
          --gold: #c4a16b;
          --cream: #faf7f1;
          color: #382a2d;
          background: var(--cream);
          font-family: "Noto Sans Telugu", sans-serif;
          overflow: hidden;
        }

        .skv-literature * {
          box-sizing: border-box;
        }

        .lit-container {
          width: min(1160px, calc(100% - 44px));
          margin: auto;
        }

        .lit-eyebrow {
          color: #a17d4e;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 3px;
        }

        .lit-hero {
          position: relative;
          padding: 100px 20px 90px;
          text-align: center;
          overflow: hidden;
          background:
            radial-gradient(circle at 10% 15%, #fff 0, transparent 32%),
            radial-gradient(circle at 90% 80%, #ead9c4 0, transparent 30%),
            linear-gradient(130deg, #f1e6d9, #fffaf3 60%, #eadbce);
        }

        .lit-hero::before,
        .lit-hero::after {
          content: "";
          position: absolute;
          width: 300px;
          height: 300px;
          border: 1px solid rgba(117,30,56,.12);
          border-radius: 50%;
          pointer-events: none;
        }

        .lit-hero::before {
          top: -180px;
          left: -100px;
          box-shadow: 0 0 0 30px rgba(117,30,56,.025),
                      0 0 0 60px rgba(117,30,56,.02);
        }

        .lit-hero::after {
          bottom: -200px;
          right: -100px;
          box-shadow: 0 0 0 30px rgba(196,161,107,.05),
                      0 0 0 60px rgba(196,161,107,.03);
        }

        .lit-hero-inner {
          position: relative;
          z-index: 1;
          max-width: 900px;
          margin: auto;
          animation: litRise .9s ease both;
        }

        .lit-hero h1 {
          margin: 24px 0 10px;
          color: var(--wine-dark);
          font-family: "Noto Serif Telugu", serif;
          font-size: clamp(31px, 5vw, 55px);
          line-height: 1.8;
        }

        .lit-hero h1 span {
          color: var(--wine);
        }

        .lit-hero .hero-verse {
          margin: 22px auto 0;
          color: #78686b;
          font-family: "Noto Serif Telugu", serif;
          font-size: clamp(15px, 2vw, 19px);
          line-height: 2.2;
        }

        .lit-divider {
          margin: 28px auto;
          color: var(--gold);
          letter-spacing: 10px;
          font-size: 19px;
        }

        /* FOUNDER FEATURE */

        .lit-founder {
          padding: 90px 0;
          background: #fffdf9;
        }

        .lit-founder-layout {
          display: grid;
          grid-template-columns: .85fr 1.15fr;
          gap: 65px;
          align-items: center;
        }

        .lit-founder-photo {
          position: relative;
          min-height: 510px;
          padding: 15px;
          border: 1px solid rgba(196,161,107,.5);
          background: #f2e8dc;
          border-radius: 4px;
        }

        .lit-founder-photo::before {
          content: "";
          position: absolute;
          inset: 8px;
          border: 1px solid rgba(117,30,56,.16);
          pointer-events: none;
        }

        .lit-founder-photo img {
          display: block;
          width: 100%;
          height: 480px;
          object-fit: contain;
          position: relative;
          z-index: 1;
        }

        .lit-founder-caption {
          position: absolute;
          left: 25px;
          right: 25px;
          bottom: 24px;
          z-index: 2;
          padding: 12px;
          text-align: center;
          color: white;
          background: rgba(66,20,38,.9);
          font-size: 11px;
        }

        .lit-founder-copy h2 {
          margin: 15px 0;
          color: var(--wine-dark);
          font-family: "Noto Serif Telugu", serif;
          font-size: clamp(26px, 3vw, 37px);
          line-height: 1.8;
        }

        .lit-founder-copy h2 span {
          color: var(--wine);
        }

        .lit-founder-copy .designation {
          display: block;
          color: #a17d4e;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 1.5px;
          margin-bottom: 22px;
        }

        .lit-founder-copy p {
          color: #786d70;
          font-size: 13px;
          line-height: 2.25;
          margin: 0 0 16px;
        }

        .lit-quote {
          margin-top: 25px;
          padding: 22px 24px;
          border-left: 3px solid var(--gold);
          background: #f7f0e6;
        }

        .lit-quote p {
          margin: 0;
          color: var(--wine);
          font-family: "Noto Serif Telugu", serif;
          font-size: 17px;
          line-height: 2;
        }

        /* VERSE SECTION */

        .lit-verse-section {
          padding: 85px 0 95px;
          background: #f5eee5;
        }

        .lit-section-heading {
          text-align: center;
          max-width: 750px;
          margin: 0 auto 50px;
        }

        .lit-section-heading h2 {
          margin: 13px 0;
          color: var(--wine-dark);
          font-family: "Noto Serif Telugu", serif;
          font-size: clamp(26px, 3vw, 36px);
          line-height: 1.8;
        }

        .lit-section-heading p {
          color: #817477;
          font-size: 13px;
          line-height: 2;
        }

        .lit-writing-list {
          display: flex;
          flex-direction: column;
          gap: 26px;
        }

        .lit-writing {
          display: grid;
          grid-template-columns: 270px 1fr;
          min-height: 300px;
          overflow: hidden;
          background: #fffdf9;
          border: 1px solid rgba(117,30,56,.08);
          box-shadow: 0 10px 35px rgba(66,20,38,.045);
          transition: transform .3s ease, box-shadow .3s ease;
        }

        .lit-writing:hover {
          transform: translateY(-5px);
          box-shadow: 0 18px 40px rgba(66,20,38,.09);
        }

        .lit-writing-image {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 12px;
          background: #eee5da;
          min-height: 300px;
        }

        .lit-writing-image img {
          width: 100%;
          height: 100%;
          max-height: 290px;
          object-fit: contain;
        }

        .lit-writing-content {
          display: grid;
          grid-template-columns: 1fr .85fr;
          align-items: center;
          gap: 35px;
          padding: 30px 35px;
        }

        .lit-writing-title {
          color: #a17d4e;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 2px;
        }

        .lit-writing-content h3 {
          margin: 9px 0 12px;
          color: var(--wine-dark);
          font-family: "Noto Serif Telugu", serif;
          font-size: 21px;
          line-height: 1.8;
        }

        .lit-writing-content .description {
          color: #817477;
          font-size: 12px;
          line-height: 2;
        }

        .lit-poem {
          padding: 23px;
          border-left: 1px solid rgba(196,161,107,.55);
          color: var(--wine);
          font-family: "Noto Serif Telugu", serif;
          font-size: 15px;
          line-height: 2.4;
          text-align: center;
          background: #faf5ed;
        }

        .lit-poem p {
          margin: 0;
        }

        /* FOUNDER LEGACY */

        .lit-legacy {
          position: relative;
          padding: 100px 20px;
          color: #fff7eb;
          text-align: center;
          background:
            radial-gradient(circle at 50% 0%, rgba(196,161,107,.2), transparent 50%),
            linear-gradient(135deg, #542037, #381322);
        }

        .lit-legacy-inner {
          max-width: 850px;
          margin: auto;
        }

        .lit-legacy .lit-eyebrow {
          color: #e0bf8b;
        }

        .lit-legacy h2 {
          margin: 18px 0;
          font-family: "Noto Serif Telugu", serif;
          font-size: clamp(25px, 4vw, 40px);
          line-height: 1.9;
          color: #fff5e7;
        }

        .lit-legacy .legacy-verse {
          color: #e6d5c4;
          font-family: "Noto Serif Telugu", serif;
          font-size: 16px;
          line-height: 2.7;
        }

        .lit-legacy .legacy-sign {
          display: block;
          margin-top: 28px;
          color: #e1bf84;
          font-size: 12px;
          letter-spacing: 1px;
        }

        /* HONOURS */

        .lit-honours {
          padding: 90px 0;
          background: #fffdf9;
        }

        .lit-honours-layout {
          display: grid;
          grid-template-columns: 1fr .8fr;
          gap: 60px;
          align-items: center;
        }

        .lit-honours h2 {
          margin: 12px 0 17px;
          color: var(--wine-dark);
          font-family: "Noto Serif Telugu", serif;
          font-size: clamp(26px, 3vw, 35px);
          line-height: 1.8;
        }

        .lit-honours p {
          color: #817477;
          font-size: 13px;
          line-height: 2.1;
        }

        .lit-awards-list {
          list-style: none;
          padding: 0;
          margin: 25px 0 0;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .lit-awards-list li {
          position: relative;
          padding: 13px 17px 13px 40px;
          border: 1px solid rgba(196,161,107,.25);
          background: #faf6ef;
          color: #69595e;
          font-size: 12px;
          line-height: 1.9;
        }

        .lit-awards-list li::before {
          content: "✦";
          position: absolute;
          left: 15px;
          top: 13px;
          color: #b38b51;
        }

        .lit-honours-photo {
          padding: 12px;
          background: #f1e6d9;
          border: 1px solid rgba(196,161,107,.5);
        }

        .lit-honours-photo img {
          display: block;
          width: 100%;
          height: 440px;
          object-fit: contain;
        }

        /* ORGANISATION */

        .lit-organisation {
          padding: 90px 0;
          background: #f5eee5;
        }

        .lit-org-layout {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 45px;
          align-items: center;
        }

        .lit-org-layout h2 {
          margin: 12px 0;
          color: var(--wine-dark);
          font-family: "Noto Serif Telugu", serif;
          font-size: clamp(25px, 3vw, 34px);
          line-height: 1.8;
        }

        .lit-org-layout p {
          color: #817477;
          font-size: 13px;
          line-height: 2.2;
        }

        .lit-org-photo {
          height: 370px;
          padding: 12px;
          display: flex;
          justify-content: center;
          align-items: center;
          background: #fffaf3;
          border: 1px solid rgba(196,161,107,.4);
        }

        .lit-org-photo img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }

        /* CLOSING */

        .lit-closing {
          padding: 85px 20px;
          text-align: center;
          background: #fffdf9;
        }

        .lit-closing h2 {
          margin: 15px auto;
          color: var(--wine-dark);
          font-family: "Noto Serif Telugu", serif;
          font-size: clamp(25px, 4vw, 39px);
          line-height: 2;
        }

        .lit-closing p {
          max-width: 700px;
          margin: auto;
          color: #817477;
          font-size: 13px;
          line-height: 2.2;
        }

        .lit-closing .final-line {
          display: block;
          margin-top: 28px;
          color: var(--wine);
          font-family: "Noto Serif Telugu", serif;
          font-size: 17px;
          line-height: 2;
        }

        @keyframes litRise {
          from {
            opacity: 0;
            transform: translateY(22px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media(max-width: 900px) {
          .lit-founder-layout,
          .lit-honours-layout {
            grid-template-columns: 1fr 1fr;
            gap: 30px;
          }

          .lit-writing {
            grid-template-columns: 220px 1fr;
          }

          .lit-writing-content {
            grid-template-columns: 1fr;
            gap: 15px;
            padding: 25px;
          }

          .lit-poem {
            border-left: 0;
            border-top: 1px solid rgba(196,161,107,.55);
          }
        }

        @media(max-width: 650px) {
          .lit-container {
            width: calc(100% - 30px);
          }

          .lit-hero {
            padding: 75px 18px;
          }

          .lit-hero h1 {
            font-size: 29px;
          }

          .lit-hero .hero-verse {
            font-size: 14px;
          }

          .lit-founder,
          .lit-verse-section,
          .lit-honours,
          .lit-organisation {
            padding: 60px 0;
          }

          .lit-founder-layout,
          .lit-honours-layout,
          .lit-org-layout {
            grid-template-columns: 1fr;
            gap: 30px;
          }

          .lit-founder-photo {
            min-height: 360px;
          }

          .lit-founder-photo img {
            height: 350px;
          }

          .lit-writing {
            grid-template-columns: 1fr;
          }

          .lit-writing-image {
            min-height: 230px;
            height: 230px;
          }

          .lit-writing-image img {
            max-height: 205px;
          }

          .lit-writing-content {
            padding: 23px 18px;
          }

          .lit-poem {
            font-size: 14px;
          }

          .lit-legacy {
            padding: 75px 20px;
          }

          .lit-legacy .legacy-verse {
            font-size: 14px;
          }

          .lit-honours-photo img {
            height: 330px;
          }

          .lit-org-photo {
            height: 280px;
          }

          .lit-closing {
            padding: 65px 18px;
          }
        }

        @media(prefers-reduced-motion: reduce) {
          .skv-literature *,
          .skv-literature *::before,
          .skv-literature *::after {
            animation-duration: .01ms !important;
            transition-duration: .01ms !important;
          }
        }
      `}</style>

      {/* POETIC HERO */}
      <section className="lit-hero">
        <div className="lit-hero-inner">
          <span className="lit-eyebrow">
            THE WORLD OF TELUGU LITERATURE
          </span>

          <h1>
            అక్షరమే ఆరంభం...
            <br />
            <span>సాహిత్యమే శాశ్వతం...</span>
          </h1>

          <div className="hero-verse">
            ఒక కలం కదిలితే...
            <br />
            కొన్ని హృదయాలు పలుకుతాయి.
            <br />
            ఒక అక్షరం వెలిగితే...
            <br />
            ఒక తరానికి దారి కనిపిస్తుంది.
          </div>

          <div className="lit-divider">✦ ─── ✦ ─── ✦</div>

          <span className="lit-eyebrow">
            A LITERARY TRIBUTE TO KALAMANDA PRATHAP KUMAR
          </span>
        </div>
      </section>

      {/* FOUNDER INTRODUCTION */}
      <section className="lit-founder">
        <div className="lit-container lit-founder-layout">
          <div className="lit-founder-photo">
            <img
              src={founderpic2}
              alt="కళారత్న కత్తిమండ ప్రతాప్ కుమార్"
            />
            <div className="lit-founder-caption">
              కళారత్న కత్తిమండ ప్రతాప్ కుమార్ గారు
            </div>
          </div>

          <div className="lit-founder-copy">
            <span className="lit-eyebrow">
              THE MAN BEHIND THE LITERARY VISION
            </span>

            <h2>
              కళారత్న
              <br />
              <span>కత్తిమండ ప్రతాప్ కుమార్</span> గారు
            </h2>

            <span className="designation">
              FOUNDER & INTERNATIONAL CHAIRMAN
              <br />
              SRI SRI KALAVEDHIKA
            </span>

            <p>
              తెలుగు తల్లి పలికే ప్రతి అక్షరంలో ఒక అనుభూతిని
              చూడగలిగిన సాహిత్య హృదయం... పదాల వెనుక ఉన్న
              మనిషిని, మనిషి వెనుక ఉన్న సమాజాన్ని అర్థం
              చేసుకోవాలనే తపన... ఇవే కత్తిమండ ప్రతాప్ కుమార్
              గారి సాహిత్య ప్రయాణానికి స్ఫూర్తిగా నిలిచిన
              భావనలు.
            </p>

            <p>
              కవి, రచయిత, నాటక రచయిత, వ్యాసకర్త, కార్టూనిస్ట్
              మరియు సామాజిక పరిశీలకుడిగా విభిన్న సృజనాత్మక
              రంగాల్లో ఆయన ప్రయాణం సాగింది. సాహిత్యాన్ని
              కేవలం చదవడానికి మాత్రమే కాకుండా, సమాజాన్ని
              ఆలోచింపజేసే శక్తిగా చూడాలనే దృక్పథం ఆయన
              రచనా ప్రపంచంలో ప్రత్యేకతను సంతరించుకుంది.
            </p>

            <p>
              ఆయన ఆలోచనలో పుట్టిన సంకల్పమే శ్రీ శ్రీ
              కళావేదికగా విస్తరించి, కవులు, రచయితలు,
              కళాకారులు మరియు సాహితీవేత్తలకు ఒక ఆత్మీయ
              వేదికగా కొనసాగుతోంది.
            </p>

            <div className="lit-quote">
              <p>
                "చదువు ఒక సాధన అయితే,
                <br />
                రచన ఓ సాధ్వీ."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* LITERARY SECTIONS */}
      <section className="lit-verse-section">
        <div className="lit-container">
          <div className="lit-section-heading">
            <span className="lit-eyebrow">
              THOUGHTS · WORDS · LITERATURE
            </span>

            <h2>
              ఒక కలం వెనుక ఎన్నో ఆలోచనలు...
            </h2>

            <p>
              కవిత్వం, రచన, భాష, కళ మరియు సామాజిక స్పృహ —
              సాహిత్య ప్రస్థానాన్ని ప్రతిబింబించే కొన్ని
              భావ చిత్రాలు.
            </p>
          </div>

          <div className="lit-writing-list">
            {literarySections.map((section) => (
              <article className="lit-writing" key={section.number}>
                <div className="lit-writing-image">
                  <img
                    src={section.image}
                    alt={section.title}
                    loading="lazy"
                  />
                </div>

                <div className="lit-writing-content">
                  <div>
                    <span className="lit-writing-title">
                      {section.number} / {section.subtitle}
                    </span>

                    <h3>{section.title}</h3>

                    <p className="description">
                      {section.description}
                    </p>
                  </div>

                  <div className="lit-poem">
                    {section.verse.map((line, index) => (
                      <p key={index}>{line}</p>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* LITERARY LEGACY */}
      <section className="lit-legacy">
        <div className="lit-legacy-inner">
          <span className="lit-eyebrow">
            A THOUGHT THAT BECAME A MOVEMENT
          </span>

          <h2>
            ప్రతిభ మీది...
            <br />
            వేదిక మాది...
          </h2>

          <div className="legacy-verse">
            అక్షరానికి ఆదరణ కావాలి...
            <br />
            ప్రతిభకు ఒక పరిచయం కావాలి...
            <br />
            కలలకు ఒక వేదిక కావాలి...
            <br />
            కృషికి ఒక గౌరవం కావాలి...
            <br />
            <br />
            ఆ ఆశయానికి చిరునామాగా...
            <br />
            శ్రీ శ్రీ కళావేదిక నిలవాలి.
          </div>

          <span className="legacy-sign">
            కళారత్న కత్తిమండ ప్రతాప్ కుమార్ గారి సాహిత్య సంకల్పానికి
            అంకితం
          </span>
        </div>
      </section>

      {/* AWARDS AND RECOGNITION */}
      <section className="lit-honours">
        <div className="lit-container lit-honours-layout">
          <div>
            <span className="lit-eyebrow">
              HONOURS & RECOGNITION
            </span>

            <h2>
              సాహిత్య సేవకు
              <br />
              గుర్తింపుల మకుటం
            </h2>

            <p>
              సాహిత్య, సాంస్కృతిక మరియు సృజనాత్మక రంగాల్లో
              కత్తిమండ ప్రతాప్ కుమార్ గారు అందుకున్న
              గుర్తింపులు ఆయన సాహిత్య ప్రయాణంలోని
              ముఖ్యమైన ఘట్టాలు.
            </p>

            <ul className="lit-awards-list">
              {honours.map((honour, index) => (
                <li key={index}>{honour}</li>
              ))}
            </ul>
          </div>

          <div className="lit-honours-photo">
            <img
              src={founder}
              alt="కత్తిమండ ప్రతాప్ కుమార్ గారి చిత్రం"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* ORGANISATION'S PURPOSE */}
      <section className="lit-organisation">
        <div className="lit-container lit-org-layout">
          <div>
            <span className="lit-eyebrow">
              THE JOURNEY OF SRI SRI KALAVEDHIKA
            </span>

            <h2>
              ఒకరి ఆలోచన...
              <br />
              ఎందరో ప్రతిభలకు వేదిక...
            </h2>

            <p>
              అంతర్వేది శ్రీ లక్ష్మీ నరసింహ స్వామి ఆలయం
              నుంచి ప్రారంభమైన సాహిత్య ప్రయాణం, నేడు
              జాతీయ మరియు అంతర్జాతీయ స్థాయిలో తెలుగు
              భాషా సాహిత్యాన్ని విస్తరించే సంకల్పంగా
              కొనసాగుతోంది.
            </p>

            <p>
              కవి సమ్మేళనాలు, సాహిత్య సదస్సులు, పుస్తక
              ఆవిష్కరణలు, కళా ప్రదర్శనలు మరియు గౌరవ
              కార్యక్రమాల ద్వారా ప్రతిభకు ప్రోత్సాహం
              అందించడమే సంస్థ ఆశయం.
            </p>

            <p>
              ఒక రచయితకు గుర్తింపు దక్కినప్పుడు,
              ఒక కొత్త కవికి వేదిక లభించినప్పుడు,
              ఒక కళాకారుడి ప్రతిభ వెలుగులోకి వచ్చినప్పుడు —
              అదే ఈ ప్రయాణానికి నిజమైన విజయంగా భావిస్తుంది.
            </p>
          </div>

          <div className="lit-org-photo">
            <img
              src={founderwithcbn}
              alt="శ్రీ శ్రీ కళావేదిక సాహిత్య ప్రస్థానం"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* CLOSING POETRY */}
      <section className="lit-closing">
        <span className="lit-eyebrow">
          AN ETERNAL JOURNEY OF WORDS
        </span>

        <h2>
          కాలం మారినా...
          <br />
          కలం ఆగకూడదు...
          <br />
          తరాలు మారినా...
          <br />
          తెలుగు వెలుగు తగ్గకూడదు...
        </h2>

        <div className="lit-divider">✦ ─── ✦ ─── ✦</div>

        <p>
          సాహిత్యం ఒక తరం నుంచి మరో తరానికి అందించే
          అమూల్యమైన వారసత్వం. ఆ వారసత్వాన్ని గౌరవిస్తూ,
          కొత్త ప్రతిభను ప్రోత్సహిస్తూ, తెలుగు భాషకు
          సేవ చేయాలనే సంకల్పంతో శ్రీ శ్రీ కళావేదిక
          తన ప్రస్థానాన్ని కొనసాగిస్తోంది.
        </p>

        <span className="final-line">
          "మీ ప్రతిభకు మా పట్టాభిషేకం"
          <br />
          — శ్రీ శ్రీ కళావేదిక
        </span>
      </section>
    </main>
  );
}
