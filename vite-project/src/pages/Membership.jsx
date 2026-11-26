
import React, { useState } from "react";

const membershipTypes = [
  {
    id: "literary",
    number: "01",
    title: "సాహిత్య సభ్యత్వం",
    subtitle: "Literary Membership",
    description:
      "కవులు, రచయితలు, సాహితీవేత్తలు మరియు తెలుగు భాషాభిమానుల కోసం ప్రత్యేక సభ్యత్వం.",
    benefits: [
      "కవి సమ్మేళనాల్లో పాల్గొనే అవకాశం",
      "సాహిత్య కార్యక్రమాల్లో భాగస్వామ్యం",
      "మీ రచనలకు ప్రోత్సాహం",
    ],
  },
  {
    id: "artist",
    number: "02",
    title: "కళా సభ్యత్వం",
    subtitle: "Artist Membership",
    description:
      "గాయకులు, నృత్యకారులు, రంగస్థల కళాకారులు మరియు సృజనాత్మక ప్రతిభావంతుల కోసం.",
    benefits: [
      "సాంస్కృతిక వేదికలతో అనుబంధం",
      "ప్రతిభను ప్రదర్శించే అవకాశాలు",
      "కళాకారులతో పరిచయాలు",
    ],
  },
  {
    id: "general",
    number: "03",
    title: "సాధారణ సభ్యత్వం",
    subtitle: "General Membership",
    description:
      "తెలుగు సాహిత్యం, సంస్కృతి మరియు సామాజిక సేవపై ఆసక్తి ఉన్న ప్రతి ఒక్కరికీ.",
    benefits: [
      "సంస్థ కార్యక్రమాలతో అనుబంధం",
      "సామాజిక సేవలో భాగస్వామ్యం",
      "సాహిత్య సాంస్కృతిక పరిచయాలు",
    ],
  },
  {
    id: "youth",
    number: "04",
    title: "యువ సభ్యత్వం",
    subtitle: "Youth Membership",
    description:
      "యువ కవులు, విద్యార్థులు మరియు కొత్త తరపు సృజనాత్మక ప్రతిభావంతులకు.",
    benefits: [
      "యువ ప్రతిభకు ప్రోత్సాహం",
      "సృజనాత్మక కార్యక్రమాల్లో పాల్గొనే అవకాశం",
      "సాహితీవేత్తలతో అనుబంధం",
    ],
  },
  {
    id: "lifetime",
    number: "05",
    title: "జీవితకాల సభ్యత్వం",
    subtitle: "Life Membership",
    description:
      "శ్రీ శ్రీ కళావేదిక సాహిత్య, సాంస్కృతిక ప్రయాణంతో దీర్ఘకాల అనుబంధాన్ని కోరుకునే వారికి.",
    benefits: [
      "సంస్థతో దీర్ఘకాల అనుబంధం",
      "కార్యక్రమాల్లో భాగస్వామ్యం",
      "సాహిత్య కుటుంబంలో సభ్యత్వం",
    ],
    proposed: true,
  },
];

const interestOptions = [
  "సాహిత్యం",
  "కవిత్వం",
  "రచనలు",
  "సంగీతం",
  "నృత్యం",
  "రంగస్థలం",
  "సామాజిక సేవ",
  "ఇతర ఆసక్తులు",
];

export default function Membership() {
  const [selectedType, setSelectedType] = useState("literary");
  const [submitted, setSubmitted] = useState(false);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
    state: "",
    profession: "",
    interest: "సాహిత్యం",
    message: "",
  });

  const selectedMembership = membershipTypes.find(
    (item) => item.id === selectedType
  );

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));

    setSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = `
శ్రీ శ్రీ కళావేదిక - సభ్యత్వ దరఖాస్తు

పూర్తి పేరు: ${form.name}
మొబైల్ నంబర్: ${form.phone}
ఈమెయిల్: ${form.email || "పేర్కొనలేదు"}
నగరం: ${form.city}
రాష్ట్రం: ${form.state}
వృత్తి: ${form.profession || "పేర్కొనలేదు"}

సభ్యత్వ రకం: ${selectedMembership.title}
ఆసక్తి రంగం: ${form.interest}

అదనపు సమాచారం:
${form.message || "లేదు"}

శ్రీ శ్రీ కళావేదిక సభ్యత్వం గురించి మరిన్ని వివరాలు తెలియజేయగలరు.
    `.trim();

    const whatsappURL =
      "https://wa.me/919000343095?text=" +
      encodeURIComponent(message);

    window.open(whatsappURL, "_blank", "noopener,noreferrer");

    setSubmitted(true);
  };

  return (
    <main className="membership-page">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Telugu:wght@400;500;600;700;800&family=Noto+Serif+Telugu:wght@400;500;600;700;800&display=swap');

        .membership-page {
          --deep-maroon: #5B142B;
          --royal-wine: #76233E;
          --wine-light: #963C55;
          --antique-gold: #D6B477;
          --gold-light: #F0DDB8;
          --ivory: #F8F2E9;
          --paper: #FFFCF8;
          --ink: #33252B;
          --muted: #81727A;

          font-family: 'Noto Sans Telugu', sans-serif;
          color: var(--ink);
          background: var(--ivory);
          overflow: hidden;
        }

        .membership-page *,
        .membership-page *::before,
        .membership-page *::after {
          box-sizing: border-box;
        }

        .membership-page input,
        .membership-page textarea,
        .membership-page select,
        .membership-page button {
          font: inherit;
        }

        .membership-page .serif {
          font-family: 'Noto Serif Telugu', serif;
        }

        .membership-page .container {
          width: min(1160px, calc(100% - 40px));
          margin: 0 auto;
        }

        /* HERO */

        .membership-page .hero {
          position: relative;
          isolation: isolate;
          padding: 105px 20px 110px;
          text-align: center;
          color: white;
          background:
            radial-gradient(
              ellipse at 50% 0%,
              rgba(214,180,119,.18),
              transparent 52%
            ),
            linear-gradient(
              135deg,
              #481020 0%,
              #5B142B 48%,
              #76233E 100%
            );
        }

        .membership-page .hero::before {
          content: "";
          position: absolute;
          z-index: -1;
          inset: 18px;
          border: 1px solid rgba(214,180,119,.32);
          pointer-events: none;
        }

        .membership-page .hero::after {
          content: "✦";
          position: absolute;
          z-index: -1;
          right: 9%;
          bottom: 3%;
          color: rgba(214,180,119,.18);
          font-size: 190px;
          line-height: 1;
        }

        .membership-page .hero-content {
          max-width: 850px;
          margin: 0 auto;
        }

        .membership-page .hero-label {
          display: inline-block;
          color: var(--antique-gold);
          border: 1px solid rgba(214,180,119,.55);
          padding: 9px 24px;
          border-radius: 50px;
          font-size: 12px;
          letter-spacing: 2.5px;
          font-weight: 700;
          margin-bottom: 28px;
        }

        .membership-page .hero h1 {
          font-family: 'Noto Serif Telugu', serif;
          color: #FFF9F0;
          font-size: clamp(34px, 5.5vw, 58px);
          line-height: 1.65;
          font-weight: 700;
          margin: 0 0 15px;
        }

        .membership-page .hero h1 span {
          color: var(--antique-gold);
        }

        .membership-page .hero-description {
          max-width: 730px;
          margin: 0 auto;
          color: #F0E1DF;
          font-size: 16px;
          line-height: 2.2;
        }

        .membership-page .hero-tagline {
          color: var(--antique-gold);
          font-family: 'Noto Serif Telugu', serif;
          font-size: 20px;
          margin-top: 27px;
        }

        .membership-page .hero-divider {
          height: 2px;
          width: 85px;
          background: var(--antique-gold);
          margin: 25px auto 0;
        }

        /* COMMON SECTION HEADINGS */

        .membership-page .section-heading {
          text-align: center;
          max-width: 850px;
          margin: 0 auto;
        }

        .membership-page .eyebrow {
          color: var(--royal-wine);
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 2.5px;
          margin-bottom: 13px;
        }

        .membership-page .section-title {
          font-family: 'Noto Serif Telugu', serif;
          font-size: clamp(27px, 4vw, 39px);
          color: var(--deep-maroon);
          line-height: 1.7;
          margin: 0 0 15px;
        }

        .membership-page .section-description {
          color: var(--muted);
          font-size: 14px;
          line-height: 2.2;
          margin: 0;
        }

        .membership-page .gold-divider {
          width: 90px;
          height: 3px;
          background: var(--antique-gold);
          margin: 25px auto 0;
        }

        /* INTRO */

        .membership-page .intro {
          padding: 78px 0 55px;
          background: var(--ivory);
        }

        /* MEMBERSHIP CARDS */

        .membership-page .membership-section {
          padding: 55px 0 95px;
          background: var(--ivory);
        }

        .membership-page .membership-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 23px;
          margin-top: 48px;
        }

        .membership-page .membership-card {
          display: flex;
          flex-direction: column;
          background: #FFFFFF;
          border: 1px solid #E7DCD2;
          border-radius: 5px;
          overflow: hidden;
          box-shadow: 0 8px 25px rgba(75,25,43,.055);
          transition:
            transform .25s ease,
            box-shadow .25s ease,
            border-color .25s ease;
        }

        .membership-page .membership-card:hover {
          transform: translateY(-5px);
          border-color: var(--antique-gold);
          box-shadow: 0 15px 32px rgba(75,25,43,.11);
        }

        .membership-page .card-top {
          height: 5px;
          background: var(--deep-maroon);
        }

        .membership-page .card-content {
          padding: 28px 25px 25px;
          display: flex;
          flex-direction: column;
          flex: 1;
        }

        .membership-page .card-number {
          display: flex;
          align-items: center;
          justify-content: space-between;
          color: var(--antique-gold);
          font-size: 13px;
          font-weight: 800;
          letter-spacing: 2px;
          margin-bottom: 23px;
        }

        .membership-page .card-number::after {
          content: "";
          width: 40px;
          height: 1px;
          background: var(--antique-gold);
        }

        .membership-page .card-title {
          font-family: 'Noto Serif Telugu', serif;
          font-size: 23px;
          line-height: 1.75;
          color: var(--deep-maroon);
          margin: 0 0 3px;
        }

        .membership-page .card-subtitle {
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 1.5px;
          color: #A18A84;
          margin-bottom: 18px;
        }

        .membership-page .card-description {
          font-size: 13px;
          line-height: 2.1;
          color: #75666D;
          margin: 0 0 19px;
          min-height: 80px;
        }

        .membership-page .benefit-heading {
          font-size: 12px;
          color: var(--royal-wine);
          font-weight: 800;
          margin-bottom: 9px;
        }

        .membership-page .benefits {
          padding: 0;
          margin: 0 0 25px;
          list-style: none;
        }

        .membership-page .benefits li {
          position: relative;
          padding-left: 20px;
          margin: 10px 0;
          color: #594C53;
          font-size: 12px;
          line-height: 1.9;
        }

        .membership-page .benefits li::before {
          content: "◆";
          position: absolute;
          left: 0;
          top: 2px;
          font-size: 8px;
          color: var(--antique-gold);
        }

        .membership-page .proposed-label {
          color: #84601C;
          background: #F8F0DE;
          border: 1px solid #E7D4A9;
          padding: 5px 9px;
          border-radius: 2px;
          width: fit-content;
          font-size: 10px;
          margin-bottom: 12px;
        }

        .membership-page .select-button {
          width: 100%;
          margin-top: auto;
          border: 1px solid var(--deep-maroon);
          background: white;
          color: var(--deep-maroon);
          padding: 13px 12px;
          font-size: 13px;
          font-weight: 700;
          border-radius: 3px;
          transition: .2s ease;
        }

        .membership-page .select-button:hover,
        .membership-page .select-button.active {
          background: var(--deep-maroon);
          color: white;
        }

        .membership-page .select-button.active {
          border-color: var(--deep-maroon);
        }

        /* LITERARY QUOTE BAND */

        .membership-page .quote-band {
          padding: 78px 20px;
          background: var(--deep-maroon);
          color: white;
          position: relative;
          text-align: center;
        }

        .membership-page .quote-band::before {
          content: "";
          position: absolute;
          inset: 15px;
          border: 1px solid rgba(214,180,119,.3);
          pointer-events: none;
        }

        .membership-page .quote-content {
          max-width: 850px;
          margin: auto;
          position: relative;
        }

        .membership-page .quote-mark {
          color: var(--antique-gold);
          font-family: Georgia, serif;
          font-size: 65px;
          line-height: .8;
        }

        .membership-page .quote-band h2 {
          font-family: 'Noto Serif Telugu', serif;
          font-size: clamp(25px, 4vw, 36px);
          line-height: 1.8;
          color: #FFF6EA;
          margin: 18px 0;
        }

        .membership-page .quote-band p {
          color: #EAD9D7;
          font-size: 14px;
          line-height: 2.2;
          margin: 0;
        }

        .membership-page .quote-values {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          margin-top: 38px;
        }

        .membership-page .quote-value {
          padding: 20px 12px;
          border-top: 1px solid rgba(214,180,119,.5);
          border-bottom: 1px solid rgba(214,180,119,.5);
        }

        .membership-page .quote-value strong {
          display: block;
          color: var(--antique-gold);
          font-family: 'Noto Serif Telugu', serif;
          font-size: 20px;
          margin-bottom: 7px;
        }

        .membership-page .quote-value span {
          font-size: 12px;
          color: #EAD9D7;
        }

        /* APPLICATION FORM */

        .membership-page .form-section {
          padding: 85px 0 95px;
          background: var(--ivory);
        }

        .membership-page .form-layout {
          display: grid;
          grid-template-columns: .8fr 1.2fr;
          gap: 30px;
          align-items: start;
          margin-top: 45px;
        }

        .membership-page .form-aside {
          background: var(--deep-maroon);
          color: white;
          padding: 35px 29px;
          border-radius: 4px;
          position: sticky;
          top: 25px;
        }

        .membership-page .aside-decoration {
          color: var(--antique-gold);
          font-family: Georgia, serif;
          font-size: 38px;
          margin-bottom: 20px;
        }

        .membership-page .form-aside h3 {
          font-family: 'Noto Serif Telugu', serif;
          color: var(--antique-gold);
          font-size: 25px;
          line-height: 1.8;
          margin: 0 0 15px;
        }

        .membership-page .form-aside p {
          color: #EAD9D7;
          font-size: 13px;
          line-height: 2.2;
          margin: 0;
        }

        .membership-page .aside-contact {
          border-top: 1px solid rgba(214,180,119,.35);
          margin-top: 24px;
          padding-top: 17px;
        }

        .membership-page .aside-contact div {
          margin: 13px 0;
          font-size: 13px;
          color: #F4E6DB;
          line-height: 1.8;
          overflow-wrap: anywhere;
        }

        .membership-page .aside-contact a {
          color: #F4E6DB;
          text-decoration: none;
        }

        .membership-page .aside-contact a:hover {
          color: var(--antique-gold);
        }

        .membership-page .form-card {
          background: white;
          border: 1px solid #E7DCD2;
          padding: 36px;
          border-radius: 4px;
          box-shadow: 0 12px 30px rgba(75,25,43,.055);
        }

        .membership-page .form-card h3 {
          font-family: 'Noto Serif Telugu', serif;
          font-size: 25px;
          color: var(--deep-maroon);
          margin: 0 0 9px;
        }

        .membership-page .form-intro {
          font-size: 12px;
          color: #877982;
          line-height: 1.9;
          margin: 0 0 28px;
        }

        .membership-page .form-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 19px;
        }

        .membership-page .field {
          display: flex;
          flex-direction: column;
          gap: 8px;
          min-width: 0;
        }

        .membership-page .field.full {
          grid-column: 1 / -1;
        }

        .membership-page .field label {
          color: #4F3A43;
          font-size: 12px;
          font-weight: 700;
        }

        .membership-page .field input,
        .membership-page .field select,
        .membership-page .field textarea {
          width: 100%;
          min-width: 0;
          padding: 13px 14px;
          border: 1px solid #E6DCD8;
          border-radius: 3px;
          background: #FFFCF8;
          color: #382A31;
          outline: none;
          font-size: 13px;
          transition: border-color .2s, box-shadow .2s;
        }

        .membership-page .field input:focus,
        .membership-page .field select:focus,
        .membership-page .field textarea:focus {
          border-color: var(--royal-wine);
          box-shadow: 0 0 0 3px rgba(91,20,43,.08);
        }

        .membership-page .field textarea {
          resize: vertical;
          min-height: 105px;
        }

        .membership-page .selected-membership {
          grid-column: 1 / -1;
          padding: 15px;
          border-left: 3px solid var(--antique-gold);
          background: #F8F2E9;
          color: var(--deep-maroon);
          font-size: 13px;
          line-height: 1.9;
        }

        .membership-page .submit-button {
          display: block;
          width: 100%;
          border: 1px solid var(--deep-maroon);
          border-radius: 3px;
          margin-top: 24px;
          padding: 16px;
          color: white;
          background: var(--deep-maroon);
          font-weight: 700;
          font-size: 14px;
          transition: .2s ease;
        }

        .membership-page .submit-button:hover {
          background: var(--royal-wine);
          border-color: var(--royal-wine);
          box-shadow: 0 7px 17px rgba(91,20,43,.18);
        }

        .membership-page .form-note {
          text-align: center;
          font-size: 11px;
          color: #8B7C83;
          line-height: 1.9;
          margin: 14px 0 0;
        }

        .membership-page .success-message {
          margin-top: 17px;
          padding: 13px 15px;
          border: 1px solid #C7DFC9;
          background: #EDF7EE;
          color: #315E3A;
          font-size: 12px;
          line-height: 1.9;
        }

        /* CLOSING */

        .membership-page .closing {
          padding: 58px 20px;
          text-align: center;
          background: #EDE1D4;
          border-top: 1px solid #DFCEBC;
        }

        .membership-page .closing h2 {
          font-family: 'Noto Serif Telugu', serif;
          font-size: clamp(23px, 3.5vw, 34px);
          line-height: 1.8;
          color: var(--deep-maroon);
          margin: 0 0 12px;
        }

        .membership-page .closing p {
          font-size: 13px;
          color: #76666D;
          line-height: 2;
          margin: 0;
        }

        /* RESPONSIVE */

        @media (max-width: 900px) {
          .membership-page .membership-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .membership-page .form-layout {
            grid-template-columns: 1fr;
          }

          .membership-page .form-aside {
            position: static;
          }
        }

        @media (max-width: 600px) {
          .membership-page .container {
            width: calc(100% - 30px);
          }

          .membership-page .hero {
            padding: 75px 15px 80px;
          }

          .membership-page .hero::before {
            inset: 10px;
          }

          .membership-page .hero-description {
            font-size: 13px;
          }

          .membership-page .hero-tagline {
            font-size: 17px;
          }

          .membership-page .intro {
            padding: 55px 0 35px;
          }

          .membership-page .membership-section {
            padding: 40px 0 65px;
          }

          .membership-page .membership-grid {
            grid-template-columns: 1fr;
            gap: 17px;
            margin-top: 32px;
          }

          .membership-page .card-content {
            padding: 24px 22px;
          }

          .membership-page .card-description {
            min-height: auto;
          }

          .membership-page .quote-band {
            padding: 60px 18px;
          }

          .membership-page .quote-values {
            grid-template-columns: 1fr;
            gap: 13px;
          }

          .membership-page .form-section {
            padding: 60px 0;
          }

          .membership-page .form-aside,
          .membership-page .form-card {
            padding: 25px 20px;
          }

          .membership-page .form-grid {
            grid-template-columns: 1fr;
          }

          .membership-page .field.full,
          .membership-page .selected-membership {
            grid-column: auto;
          }

          .membership-page .closing {
            padding: 45px 18px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .membership-page *,
          .membership-page *::before,
          .membership-page *::after {
            transition-duration: .01ms !important;
            animation-duration: .01ms !important;
            scroll-behavior: auto !important;
          }
        }
      `}</style>

      {/* HERO SECTION */}

      <section className="hero">
        <div className="hero-content">
          <div className="hero-label">
            SRI SRI KALAVEDHIKA
          </div>

          <h1>
            సభ్యత్వం ఒక అనుబంధం...
            <br />
            <span>సాహిత్యంతో ఒక ప్రయాణం...</span>
          </h1>

          <p className="hero-description">
            తెలుగు భాషపై అభిమానం, సాహిత్యంపై ఆసక్తి,
            కళలపై ప్రేమ, సమాజ సేవపై బాధ్యత కలిగిన
            ప్రతి ఒక్కరికీ శ్రీ శ్రీ కళావేదిక సాదర ఆహ్వానం పలుకుతోంది.
          </p>

          <div className="hero-tagline">
            ప్రతిభ మీది... వేదిక మాది...
          </div>

          <div className="hero-divider" />
        </div>
      </section>

      {/* INTRODUCTION */}

      <section className="intro">
        <div className="container">
          <div className="section-heading">
            <div className="eyebrow">OUR LITERARY FAMILY</div>

            <h2 className="section-title">
              సాహిత్యానికి ఒక వేదిక...
              <br />
              ప్రతిభకు ఒక కుటుంబం...
            </h2>

            <p className="section-description">
              కళారత్న కత్తిమండ ప్రతాప్ కుమార్ గారి సాహిత్య
              దార్శనికతతో ముందుకు సాగుతున్న శ్రీ శ్రీ కళావేదిక
              తెలుగు సాహిత్యం, సంస్కృతి, కళలు మరియు సామాజిక
              సేవకు అంకితమైన వేదిక. ఈ సాహిత్య కుటుంబంలో
              మీరు కూడా భాగస్వాములు కండి.
            </p>

            <div className="gold-divider" />
          </div>
        </div>
      </section>

      {/* MEMBERSHIP OPTIONS */}

      <section className="membership-section">
        <div className="container">
          <div className="section-heading">
            <div className="eyebrow">MEMBERSHIP CATEGORIES</div>

            <h2 className="section-title">
              మీ ఆసక్తికి తగిన సభ్యత్వాన్ని ఎంచుకోండి
            </h2>

            <p className="section-description">
              సాహిత్యం నుంచి కళల వరకు, యువ ప్రతిభ నుంచి
              సామాజిక సేవ వరకు మీ ప్రయాణానికి తగిన
              సభ్యత్వాన్ని ఎంపిక చేసుకోండి.
            </p>
          </div>

          <div className="membership-grid">
            {membershipTypes.map((item) => (
              <article className="membership-card" key={item.id}>
                <div className="card-top" />

                <div className="card-content">
                  <div className="card-number">
                    {item.number}
                  </div>

                  {item.proposed && (
                    <span className="proposed-label">
                      సంస్థ ఆమోదానికి లోబడి
                    </span>
                  )}

                  <h3 className="card-title">
                    {item.title}
                  </h3>

                  <div className="card-subtitle">
                    {item.subtitle}
                  </div>

                  <p className="card-description">
                    {item.description}
                  </p>

                  <div className="benefit-heading">
                    సభ్యత్వ విశేషాలు
                  </div>

                  <ul className="benefits">
                    {item.benefits.map((benefit, index) => (
                      <li key={index}>{benefit}</li>
                    ))}
                  </ul>

                  <button
                    type="button"
                    className={`select-button ${
                      selectedType === item.id ? "active" : ""
                    }`}
                    onClick={() => {
                      setSelectedType(item.id);
                      setSubmitted(false);
                    }}
                  >
                    {selectedType === item.id
                      ? "ఎంపిక చేయబడింది ✓"
                      : "సభ్యత్వాన్ని ఎంచుకోండి"}
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ORGANIZATION VISION */}

      <section className="quote-band">
        <div className="quote-content">
          <div className="quote-mark">“</div>

          <h2>
            అక్షరానికి ఆదరణ...
            <br />
            కళకు గౌరవం... సంస్కృతికి సంరక్షణ...
          </h2>

          <p>
            ఒక మంచి రచన సమాజాన్ని ఆలోచింపజేస్తుంది.
            ఒక కళ మన సంస్కృతిని ప్రతిబింబిస్తుంది.
            ఒక సేవ మనుషుల మధ్య అనుబంధాన్ని పెంచుతుంది.
            ఈ విలువలను కలుపుతూ సాహిత్య, సాంస్కృతిక
            ప్రయాణంలో మీ భాగస్వామ్యాన్ని ఆహ్వానిస్తున్నాం.
          </p>

          <div className="quote-values">
            <div className="quote-value">
              <strong>సాహిత్యం</strong>
              <span>భాషకు, భావానికి ప్రోత్సాహం</span>
            </div>

            <div className="quote-value">
              <strong>సంస్కృతి</strong>
              <span>కళలకు, సంప్రదాయాలకు ఆదరణ</span>
            </div>

            <div className="quote-value">
              <strong>సేవ</strong>
              <span>సమాజం పట్ల బాధ్యత</span>
            </div>
          </div>
        </div>
      </section>

      {/* MEMBERSHIP APPLICATION */}

      <section className="form-section" id="membership-form">
        <div className="container">
          <div className="section-heading">
            <div className="eyebrow">BECOME A MEMBER</div>

            <h2 className="section-title">
              మీ సభ్యత్వ ప్రయాణాన్ని ప్రారంభించండి
            </h2>

            <p className="section-description">
              మీ వివరాలను నమోదు చేయండి. మా బృందం మిమ్మల్ని
              సంప్రదించి సభ్యత్వానికి సంబంధించిన తదుపరి
              వివరాలను తెలియజేస్తుంది.
            </p>
          </div>

          <div className="form-layout">
            {/* CONTACT SIDE */}

            <aside className="form-aside">
              <div className="aside-decoration">✦</div>

              <h3>
                తెలుగు సాహిత్య కుటుంబంలోకి
                <br />
                సాదర స్వాగతం!
              </h3>

              <p>
                మీ ప్రతిభకు గుర్తింపు రావాలి.
                మీ ఆలోచనలకు వేదిక లభించాలి.
                మీ సృజనాత్మక ప్రయాణానికి కొత్త పరిచయాలు
                తోడవ్వాలి.
              </p>

              <div className="aside-contact">
                <div>
                  ఫోన్ నంబర్
                  <br />
                  <a href="tel:+919000343095">
                    +91 90003 43095
                  </a>
                </div>

                <div>
                  ఈమెయిల్
                  <br />
                  <a href="mailto:info@srisrikalavedika.org">
                    info@srisrikalavedika.org
                  </a>
                </div>

                <div>
                  సంస్థ
                  <br />
                  శ్రీ శ్రీ కళావేదిక
                </div>
              </div>
            </aside>

            {/* FORM */}

            <div className="form-card">
              <h3>సభ్యత్వ దరఖాస్తు</h3>

              <p className="form-intro">
                దయచేసి మీ సరైన వివరాలను నమోదు చేయండి.
                * గుర్తు ఉన్న వివరాలు తప్పనిసరి.
              </p>

              <form onSubmit={handleSubmit}>
                <div className="form-grid">
                  <div className="field">
                    <label htmlFor="member-name">
                      పూర్తి పేరు *
                    </label>

                    <input
                      id="member-name"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="మీ పూర్తి పేరు"
                      required
                    />
                  </div>

                  <div className="field">
                    <label htmlFor="member-phone">
                      మొబైల్ నంబర్ *
                    </label>

                    <input
                      id="member-phone"
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="10 అంకెల మొబైల్ నంబర్"
                      pattern="[0-9]{10}"
                      maxLength={10}
                      required
                    />
                  </div>

                  <div className="field">
                    <label htmlFor="member-email">
                      ఈమెయిల్
                    </label>

                    <input
                      id="member-email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="example@email.com"
                    />
                  </div>

                  <div className="field">
                    <label htmlFor="member-profession">
                      వృత్తి
                    </label>

                    <input
                      id="member-profession"
                      name="profession"
                      value={form.profession}
                      onChange={handleChange}
                      placeholder="మీ వృత్తి"
                    />
                  </div>

                  <div className="field">
                    <label htmlFor="member-city">
                      నగరం *
                    </label>

                    <input
                      id="member-city"
                      name="city"
                      value={form.city}
                      onChange={handleChange}
                      placeholder="మీ నగరం"
                      required
                    />
                  </div>

                  <div className="field">
                    <label htmlFor="member-state">
                      రాష్ట్రం *
                    </label>

                    <input
                      id="member-state"
                      name="state"
                      value={form.state}
                      onChange={handleChange}
                      placeholder="మీ రాష్ట్రం"
                      required
                    />
                  </div>

                  <div className="field full">
                    <label htmlFor="member-interest">
                      మీ ఆసక్తి రంగం
                    </label>

                    <select
                      id="member-interest"
                      name="interest"
                      value={form.interest}
                      onChange={handleChange}
                    >
                      {interestOptions.map((interest) => (
                        <option key={interest} value={interest}>
                          {interest}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="selected-membership">
                    ఎంపిక చేసిన సభ్యత్వం:{" "}
                    <strong>{selectedMembership.title}</strong>
                  </div>

                  <div className="field full">
                    <label htmlFor="member-message">
                      అదనపు సమాచారం / మీ గురించి
                    </label>

                    <textarea
                      id="member-message"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="మీ సాహిత్య, కళా లేదా ఇతర ఆసక్తుల గురించి తెలియజేయండి..."
                    />
                  </div>
                </div>

                <button type="submit" className="submit-button">
                  WhatsApp ద్వారా దరఖాస్తు పంపండి →
                </button>

                {submitted && (
                  <div className="success-message" role="status">
                    WhatsApp తెరవడానికి ప్రయత్నించబడింది.
                    అక్కడ మీ వివరాలను పరిశీలించి Send నొక్కండి.
                    సంస్థ ధృవీకరించిన తర్వాతే మీ సభ్యత్వం
                    నిర్ధారించబడుతుంది.
                  </div>
                )}

                <p className="form-note">
                  మీ వివరాలు WhatsApp సందేశంగా పంపబడతాయి.
                  ఈ ఫారం స్వయంగా డేటాబేస్‌లో సమాచారాన్ని
                  నిల్వ చేయదు. సభ్యత్వం సంస్థ పరిశీలనకు
                  మరియు ధృవీకరణకు లోబడి ఉంటుంది.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* CLOSING SECTION */}

      <section className="closing">
        <div className="container">
          <h2>
            ప్రతిభ మీది... వేదిక మాది...
            <br />
            మీ ప్రతిభకు మా పట్టాభిషేకం!
          </h2>

          <p>
            తెలుగు భాష, సాహిత్యం, సంస్కృతి మరియు కళల
            అభివృద్ధిలో మీరూ భాగస్వాములు కండి.
          </p>
        </div>
      </section>
    </main>
  );
}
