import React, { useMemo, useState } from "react";
import {
  MapPin,
  Search,
  Sparkles,
  ArrowUpRight,
  BookOpen,
  Users,
  X,
} from "lucide-react";

const districts = [
  "ఆదిలాబాద్",
  "భద్రాద్రి కొత్తగూడెం",
  "హనుమకొండ",
  "హైదరాబాద్",
  "జగిత్యాల",
  "జనగామ",
  "జయశంకర్ భూపాలపల్లి",
  "జోగులాంబ గద్వాల",
  "కామారెడ్డి",
  "కరీంనగర్",
  "ఖమ్మం",
  "కొమురం భీం ఆసిఫాబాద్",
  "మహబూబాబాద్",
  "మహబూబ్‌నగర్",
  "మంచిర్యాల",
  "మెదక్",
  "మేడ్చల్–మల్కాజిగిరి",
  "ములుగు",
  "నాగర్‌కర్నూల్",
  "నల్గొండ",
  "నారాయణపేట్",
  "నిర్మల్",
  "నిజామాబాద్",
  "పెద్దపల్లి",
  "రాజన్న సిరిసిల్ల",
  "రంగారెడ్డి",
  "సంగారెడ్డి",
  "సిద్ధిపేట",
  "సూర్యాపేట",
  "వనపర్తి",
  "వరంగల్",
  "వికారాబాద్",
  "యాదాద్రి భువనగిరి",
];

export default function TelanganaChapters() {
  const [search, setSearch] = useState("");

  const filteredDistricts = useMemo(() => {
    const value = search.trim().toLowerCase();

    if (!value) {
      return districts;
    }

    return districts.filter((district) =>
      district.toLowerCase().includes(value)
    );
  }, [search]);

  return (
    <main className="tg-chapters-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="tg-hero">

        <div className="tg-hero-pattern" />

        <div className="tg-glow tg-glow-one" />
        <div className="tg-glow tg-glow-two" />

        <div className="tg-motif tg-motif-one">
          ✦
        </div>

        <div className="tg-motif tg-motif-two">
          ❧
        </div>

        <div className="tg-container tg-hero-inner">

          <div className="tg-hero-content">

            <div className="tg-eyebrow">
              <span />
              శ్రీ శ్రీ కళావేదిక
              <span />
            </div>

            <h1>
              తెలంగాణ
              <span>శాఖలు</span>
            </h1>

            <p className="tg-hero-subtitle">
              తెలంగాణ నేల నుంచి
              <br />
              తెలుగు సాహిత్యానికి విశ్వవేదిక వరకు
            </p>

            <p className="tg-hero-description">
              తెలంగాణలోని ప్రతి జిల్లాలో తెలుగు భాష,
              సాహిత్యం, సంస్కృతి, కళలు మరియు సామాజిక సేవా
              కార్యక్రమాలను విస్తరించేందుకు శ్రీ శ్రీ కళావేదిక
              తన సాహిత్య కుటుంబాన్ని మరింత బలోపేతం చేస్తోంది.
            </p>

            <div className="tg-hero-actions">

              <a
                href="#telangana-districts"
                className="tg-primary-button"
              >
                జిల్లాలను చూడండి
                <ArrowUpRight size={18} />
              </a>

              <div className="tg-small-note">
                <Sparkles size={16} />
                33 జిల్లాలు • ఒకే సాహిత్య కుటుంబం
              </div>

            </div>

          </div>


          {/* HERO CARD */}

          <div className="tg-hero-card-wrap">

            <div className="tg-hero-card">

              <div className="tg-card-decoration">
                <span />
                <span />
                <span />
              </div>

              <div className="tg-card-icon">
                <MapPin size={30} />
              </div>

              <div className="tg-number">
                33
              </div>

              <div className="tg-number-label">
                జిల్లాలు
              </div>

              <div className="tg-card-divider" />

              <p>
                తెలంగాణ వ్యాప్తంగా
                <br />
                సాహిత్య సేవా విస్తరణ
              </p>

              <div className="tg-card-footer">
                <BookOpen size={15} />
                <span>
                  తెలుగు సాహిత్య యజ్ఞం
                </span>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          INTRODUCTION
      ===================================================== */}

      <section className="tg-intro">

        <div className="tg-container">

          <div className="tg-intro-grid">

            <div className="tg-intro-title">

              <span className="tg-section-label">
                తెలంగాణ శాఖల ప్రస్థానం
              </span>

              <h2>
                ప్రతి జిల్లా
                <br />
                <em>ఒక కొత్త సాహిత్య వేదిక</em>
              </h2>

              <div className="tg-title-decoration">
                <span />
                <span />
                <span />
              </div>

            </div>


            <div className="tg-intro-text">

              <p>
                తెలంగాణలోని 33 జిల్లాలను అనుసంధానిస్తూ
                సాహిత్య, సాంస్కృతిక మరియు సామాజిక సేవా
                కార్యక్రమాలను ప్రజలకు మరింత చేరువ చేయడం
                శ్రీ శ్రీ కళావేదిక శాఖల ప్రధాన లక్ష్యం.
              </p>

              <p>
                ప్రతి జిల్లాలోని కవులు, రచయితలు, సాహితీవేత్తలు,
                కళాకారులు, యువ సృజనకారులు మరియు సాహిత్య
                అభిమానులను ఒకే వేదికపైకి తీసుకువచ్చి,
                ప్రతిభను గుర్తించి ప్రోత్సహించే నిరంతర
                కార్యాచరణకు ఈ శాఖలు వారధిగా నిలుస్తాయి.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          STATS
      ===================================================== */}

      <section className="tg-stats">

        <div className="tg-container tg-stats-grid">

          <div className="tg-stat">

            <div className="tg-stat-icon">
              <MapPin size={22} />
            </div>

            <div>
              <strong>33</strong>
              <span>
                తెలంగాణ జిల్లాలు
              </span>
            </div>

          </div>


          <div className="tg-stat">

            <div className="tg-stat-icon">
              <Users size={22} />
            </div>

            <div>
              <strong>ఒక కుటుంబం</strong>
              <span>
                కవులు • రచయితలు • కళాకారులు
              </span>
            </div>

          </div>


          <div className="tg-stat">

            <div className="tg-stat-icon">
              <BookOpen size={22} />
            </div>

            <div>
              <strong>నిరంతరం</strong>
              <span>
                సాహిత్య • సాంస్కృతిక కార్యక్రమాలు
              </span>
            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          DISTRICTS
      ===================================================== */}

      <section
        className="tg-district-section"
        id="telangana-districts"
      >

        <div className="tg-container">

          <div className="tg-district-heading">

            <div>

              <span className="tg-section-label">
                తెలంగాణ
              </span>

              <h2>
                జిల్లా శాఖలు
              </h2>

              <p>
                తెలంగాణలోని శ్రీ శ్రీ కళావేదిక
                సాహిత్య కుటుంబాన్ని తెలుసుకోండి.
              </p>

            </div>


            <div className="tg-district-count">

              <strong>
                {filteredDistricts.length}
              </strong>

              <span>
                / 33
              </span>

            </div>

          </div>


          {/* SEARCH */}

          <div className="tg-toolbar">

            <div className="tg-search">

              <Search size={19} />

              <input
                type="text"
                placeholder="జిల్లా పేరును వెతకండి..."
                value={search}
                onChange={(e) =>
                  setSearch(e.target.value)
                }
              />

              {search && (
                <button
                  type="button"
                  onClick={() => setSearch("")}
                  aria-label="వెతుకులాటను తొలగించండి"
                >
                  <X size={17} />
                </button>
              )}

            </div>

            <div className="tg-search-info">
              {search
                ? `${filteredDistricts.length} జిల్లాలు కనిపిస్తున్నాయి`
                : "మొత్తం 33 జిల్లాలు"}
            </div>

          </div>


          {/* DISTRICT GRID */}

          {filteredDistricts.length > 0 ? (

            <div className="tg-district-grid">

              {filteredDistricts.map((district) => {

                const originalIndex =
                  districts.indexOf(district);

                return (
                  <article
                    className="tg-district-card"
                    key={district}
                  >

                    <div className="tg-district-number">
                      {String(originalIndex + 1).padStart(
                        2,
                        "0"
                      )}
                    </div>

                    <div className="tg-district-icon">
                      <MapPin size={18} />
                    </div>

                    <div className="tg-district-content">

                      <span>
                        తెలంగాణ శాఖ
                      </span>

                      <h3>
                        {district}
                      </h3>

                    </div>

                    <div className="tg-district-arrow">
                      <ArrowUpRight size={17} />
                    </div>

                  </article>
                );
              })}

            </div>

          ) : (

            <div className="tg-empty">

              <Search size={30} />

              <h3>
                జిల్లా కనుగొనబడలేదు
              </h3>

              <p>
                దయచేసి మరో జిల్లా పేరుతో ప్రయత్నించండి.
              </p>

              <button
                type="button"
                onClick={() => setSearch("")}
              >
                అన్ని జిల్లాలను చూడండి
              </button>

            </div>

          )}

        </div>

      </section>


      {/* =====================================================
          MESSAGE
      ===================================================== */}

      <section className="tg-message">

        <div className="tg-message-pattern" />

        <div className="tg-container">

          <div className="tg-message-inner">

            <div className="tg-quote">
              “
            </div>

            <span className="tg-message-label">
              మా సంకల్పం
            </span>

            <h2>
              అక్షరం నుంచి
              <br />
              అంతర్జాతీయ వేదిక వరకు...
            </h2>

            <p>
              తెలంగాణలోని ప్రతి జిల్లాలో తెలుగు సాహిత్యానికి
              ఒక వేదిక, ప్రతి ప్రతిభకు ఒక అవకాశం, ప్రతి
              కళాకారుడికి ఒక గౌరవ స్థానం కల్పించాలనే
              సంకల్పంతో శ్రీ శ్రీ కళావేదిక తన సాహిత్య
              ప్రస్థానాన్ని కొనసాగిస్తోంది.
            </p>

            <div className="tg-message-line">
              <span />
              <span>
                శ్రీ శ్రీ కళావేదిక
              </span>
              <span />
            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          AP CHAPTER LINK
      ===================================================== */}

      <section className="tg-next-section">

        <div className="tg-container">

          <div className="tg-next-card">

            <div>

              <span>
                మరో అధ్యాయం
              </span>

              <h2>
                ఆంధ్రప్రదేశ్ శాఖలు
              </h2>

              <p>
                ఆంధ్రప్రదేశ్‌లోని 26 జిల్లాల్లో
                శ్రీ శ్రీ కళావేదిక సాహిత్య కుటుంబాన్ని
                తెలుసుకోండి.
              </p>

            </div>

            <a
              href="/andhra-pradesh-chapters"
              className="tg-next-button"
            >
              ఆంధ్రప్రదేశ్ శాఖలు
              <ArrowUpRight size={18} />
            </a>

          </div>

        </div>

      </section>


      {/* =====================================================
          CSS
      ===================================================== */}

      <style>{`

        /* ===================================================
           FONTS
        =================================================== */

        @import url(
          'https://fonts.googleapis.com/css2?family=Noto+Sans+Telugu:wght@400;500;600;700&family=Noto+Serif+Telugu:wght@400;500;600;700&display=swap'
        );


        /* ===================================================
           BASE
        =================================================== */

        .tg-chapters-page {

          background:
            #fcf8f2;

          color:
            #3f302a;

          overflow:
            hidden;

        }


        .tg-chapters-page * {

          box-sizing:
            border-box;

        }


        .tg-container {

          width:
            min(1220px, 92%);

          margin:
            0 auto;

        }


        /* ===================================================
           HERO
        =================================================== */

        .tg-hero {

          position:
            relative;

          min-height:
            620px;

          display:
            flex;

          align-items:
            center;

          overflow:
            hidden;

          background:
            linear-gradient(
              125deg,
              #42121d 0%,
              #651d2b 48%,
              #321019 100%
            );

          color:
            #fff;

        }


        .tg-hero-pattern {

          position:
            absolute;

          inset:
            0;

          opacity:
            .1;

          background-image:
            radial-gradient(
              circle at 2px 2px,
              #d9b875 1px,
              transparent 1.5px
            );

          background-size:
            34px 34px;

        }


        .tg-hero::after {

          content:
            "";

          position:
            absolute;

          width:
            700px;

          height:
            700px;

          right:
            -280px;

          top:
            -220px;

          border:
            1px solid rgba(214,181,111,.25);

          border-radius:
            50%;

          box-shadow:
            0 0 0 70px rgba(214,181,111,.035),
            0 0 0 140px rgba(214,181,111,.025),
            0 0 0 210px rgba(214,181,111,.02);

        }


        .tg-glow {

          position:
            absolute;

          border-radius:
            50%;

          pointer-events:
            none;

        }


        .tg-glow-one {

          width:
            280px;

          height:
            280px;

          left:
            -120px;

          bottom:
            -100px;

          background:
            rgba(194,143,62,.15);

        }


        .tg-glow-two {

          width:
            180px;

          height:
            180px;

          right:
            25%;

          top:
            -90px;

          background:
            rgba(214,181,111,.12);

        }


        .tg-motif {

          position:
            absolute;

          color:
            rgba(221,188,116,.28);

          font-family:
            serif;

          pointer-events:
            none;

        }


        .tg-motif-one {

          left:
            7%;

          top:
            22%;

          font-size:
            40px;

          animation:
            tgFloat 5s ease-in-out infinite;

        }


        .tg-motif-two {

          left:
            8%;

          bottom:
            15%;

          font-size:
            70px;

          transform:
            rotate(-20deg);

          animation:
            tgFloat 6s ease-in-out infinite reverse;

        }


        .tg-hero-inner {

          position:
            relative;

          z-index:
            2;

          display:
            grid;

          grid-template-columns:
            1.35fr .65fr;

          align-items:
            center;

          gap:
            70px;

          padding:
            90px 0;

        }


        .tg-hero-content {

          animation:
            tgHeroReveal .8s ease both;

        }


        .tg-eyebrow {

          display:
            flex;

          align-items:
            center;

          gap:
            12px;

          margin-bottom:
            22px;

          color:
            #e0c17c;

          font-family:
            "Noto Serif Telugu",
            serif;

          font-size:
            14px;

          font-weight:
            500;

        }


        .tg-eyebrow span {

          width:
            34px;

          height:
            1px;

          background:
            #c9a45c;

        }


        .tg-hero h1 {

          margin:
            0;

          font-family:
            "Noto Serif Telugu",
            serif;

          font-size:
            clamp(48px, 6vw, 82px);

          line-height:
            1.12;

          font-weight:
            700;

        }


        .tg-hero h1 span {

          display:
            block;

          color:
            #d7b76d;

        }


        .tg-hero-subtitle {

          margin:
            25px 0 0;

          color:
            #f3e8d8;

          font-family:
            "Noto Serif Telugu",
            serif;

          font-size:
            21px;

          line-height:
            1.7;

          font-weight:
            500;

        }


        .tg-hero-description {

          max-width:
            720px;

          margin:
            20px 0 0;

          color:
            #d9c8bd;

          font-family:
            "Noto Sans Telugu",
            sans-serif;

          font-size:
            15px;

          line-height:
            2;

        }


        .tg-hero-actions {

          display:
            flex;

          align-items:
            center;

          flex-wrap:
            wrap;

          gap:
            22px;

          margin-top:
            32px;

        }


        .tg-primary-button {

          display:
            inline-flex;

          align-items:
            center;

          gap:
            10px;

          padding:
            13px 20px;

          background:
            #d3ad62;

          color:
            #351019;

          font-family:
            "Noto Serif Telugu",
            serif;

          font-size:
            14px;

          font-weight:
            600;

          text-decoration:
            none;

          transition:
            transform .25s ease,
            box-shadow .25s ease;

        }


        .tg-primary-button:hover {

          transform:
            translateY(-3px);

          box-shadow:
            0 12px 28px
            rgba(0,0,0,.2);

        }


        .tg-small-note {

          display:
            flex;

          align-items:
            center;

          gap:
            7px;

          color:
            #ddcbb9;

          font-family:
            "Noto Sans Telugu",
            sans-serif;

          font-size:
            12px;

        }


        /* ===================================================
           HERO CARD
        =================================================== */

        .tg-hero-card-wrap {

          display:
            flex;

          justify-content:
            center;

          animation:
            tgCardReveal .9s .15s ease both;

        }


        .tg-hero-card {

          position:
            relative;

          width:
            min(100%, 320px);

          padding:
            45px 35px 30px;

          text-align:
            center;

          background:
            rgba(255,250,241,.08);

          border:
            1px solid rgba(219,183,106,.4);

          backdrop-filter:
            blur(12px);

          box-shadow:
            0 30px 80px
            rgba(0,0,0,.2);

        }


        .tg-card-decoration {

          position:
            absolute;

          top:
            17px;

          left:
            50%;

          transform:
            translateX(-50%);

          display:
            flex;

          gap:
            7px;

        }


        .tg-card-decoration span {

          width:
            5px;

          height:
            5px;

          background:
            #d5b46e;

          transform:
            rotate(45deg);

        }


        .tg-card-icon {

          width:
            58px;

          height:
            58px;

          margin:
            0 auto 18px;

          display:
            flex;

          align-items:
            center;

          justify-content:
            center;

          color:
            #d8b66c;

          border:
            1px solid rgba(216,182,108,.5);

          border-radius:
            50%;

        }


        .tg-number {

          color:
            #e0bd71;

          font-family:
            "Noto Serif Telugu",
            serif;

          font-size:
            86px;

          font-weight:
            700;

          line-height:
            .95;

        }


        .tg-number-label {

          margin-top:
            8px;

          color:
            #fff;

          font-family:
            "Noto Serif Telugu",
            serif;

          font-size:
            22px;

          font-weight:
            600;

        }


        .tg-card-divider {

          width:
            55px;

          height:
            1px;

          margin:
            20px auto;

          background:
            #bd9851;

        }


        .tg-hero-card p {

          margin:
            0;

          color:
            #d9c7b8;

          font-family:
            "Noto Sans Telugu",
            sans-serif;

          font-size:
            13px;

          line-height:
            1.9;

        }


        .tg-card-footer {

          display:
            flex;

          align-items:
            center;

          justify-content:
            center;

          gap:
            7px;

          margin-top:
            22px;

          padding-top:
            15px;

          border-top:
            1px solid rgba(255,255,255,.1);

          color:
            #d9b76d;

          font-size:
            11px;

        }


        /* ===================================================
           INTRO
        =================================================== */

        .tg-intro {

          padding:
            100px 0;

          background:
            #fffaf4;

        }


        .tg-intro-grid {

          display:
            grid;

          grid-template-columns:
            .7fr 1.3fr;

          gap:
            90px;

          align-items:
            center;

        }


        .tg-section-label {

          display:
            inline-block;

          margin-bottom:
            12px;

          color:
            #a17a38;

          font-family:
            "Noto Serif Telugu",
            serif;

          font-size:
            13px;

          font-weight:
            600;

        }


        .tg-intro-title h2 {

          margin:
            0;

          color:
            #4c1622;

          font-family:
            "Noto Serif Telugu",
            serif;

          font-size:
            clamp(35px, 4vw, 55px);

          line-height:
            1.35;

          font-weight:
            700;

        }


        .tg-intro-title h2 em {

          color:
            #a57b39;

          font-style:
            normal;

        }


        .tg-title-decoration {

          display:
            flex;

          align-items:
            center;

          gap:
            6px;

          margin-top:
            25px;

        }


        .tg-title-decoration span {

          width:
            8px;

          height:
            8px;

          background:
            #b58b43;

          transform:
            rotate(45deg);

        }


        .tg-title-decoration span:first-child {

          width:
            35px;

          height:
            1px;

          transform:
            none;

        }


        .tg-intro-text {

          padding-left:
            25px;

          border-left:
            1px solid #ddcfbe;

        }


        .tg-intro-text p {

          margin:
            0 0 18px;

          color:
            #665a52;

          font-family:
            "Noto Sans Telugu",
            sans-serif;

          font-size:
            15px;

          line-height:
            2.1;

        }


        .tg-intro-text p:last-child {

          margin-bottom:
            0;

        }


        /* ===================================================
           STATS
        =================================================== */

        .tg-stats {

          padding:
            34px 0;

          background:
            #651d2b;

          color:
            #fff;

        }


        .tg-stats-grid {

          display:
            grid;

          grid-template-columns:
            repeat(3, 1fr);

        }


        .tg-stat {

          display:
            flex;

          align-items:
            center;

          justify-content:
            center;

          gap:
            15px;

          padding:
            12px;

          border-right:
            1px solid rgba(255,255,255,.15);

        }


        .tg-stat:last-child {

          border-right:
            none;

        }


        .tg-stat-icon {

          width:
            48px;

          height:
            48px;

          display:
            flex;

          align-items:
            center;

          justify-content:
            center;

          border:
            1px solid rgba(215,183,109,.5);

          color:
            #d8b66c;

          border-radius:
            50%;

        }


        .tg-stat strong {

          display:
            block;

          color:
            #e0c17c;

          font-family:
            "Noto Serif Telugu",
            serif;

          font-size:
            20px;

        }


        .tg-stat span {

          display:
            block;

          margin-top:
            3px;

          color:
            #d8c6bb;

          font-family:
            "Noto Sans Telugu",
            sans-serif;

          font-size:
            11px;

        }


        /* ===================================================
           DISTRICTS
        =================================================== */

        .tg-district-section {

          padding:
            105px 0;

          background:
            #f8f2e9;

        }


        .tg-district-heading {

          display:
            flex;

          align-items:
            flex-end;

          justify-content:
            space-between;

          gap:
            30px;

          margin-bottom:
            38px;

        }


        .tg-district-heading h2 {

          margin:
            0;

          color:
            #4c1622;

          font-family:
            "Noto Serif Telugu",
            serif;

          font-size:
            clamp(34px, 4vw, 50px);

          line-height:
            1.35;

        }


        .tg-district-heading p {

          margin:
            8px 0 0;

          color:
            #756960;

          font-family:
            "Noto Sans Telugu",
            sans-serif;

          font-size:
            14px;

        }


        .tg-district-count {

          display:
            flex;

          align-items:
            baseline;

          gap:
            3px;

          color:
            #b28a47;

        }


        .tg-district-count strong {

          font-family:
            "Noto Serif Telugu",
            serif;

          font-size:
            48px;

          line-height:
            1;

        }


        .tg-district-count span {

          color:
            #8d8177;

          font-size:
            16px;

        }


        /* ===================================================
           SEARCH
        =================================================== */

        .tg-toolbar {

          display:
            flex;

          align-items:
            center;

          justify-content:
            space-between;

          gap:
            20px;

          margin-bottom:
            28px;

        }


        .tg-search {

          width:
            min(440px, 100%);

          height:
            52px;

          display:
            flex;

          align-items:
            center;

          gap:
            11px;

          padding:
            0 15px;

          background:
            #fffdf9;

          border:
            1px solid #ddd0c0;

          color:
            #8a7666;

          transition:
            border-color .2s ease,
            box-shadow .2s ease;

        }


        .tg-search:focus-within {

          border-color:
            #a67c3d;

          box-shadow:
            0 8px 25px
            rgba(90,50,25,.07);

        }


        .tg-search input {

          flex:
            1;

          min-width:
            0;

          border:
            none;

          outline:
            none;

          background:
            transparent;

          color:
            #40352f;

          font-family:
            "Noto Sans Telugu",
            sans-serif;

          font-size:
            14px;

        }


        .tg-search input::placeholder {

          color:
            #9b8e84;

        }


        .tg-search button {

          display:
            flex;

          align-items:
            center;

          justify-content:
            center;

          padding:
            3px;

          border:
            none;

          background:
            transparent;

          color:
            #806f63;

          cursor:
            pointer;

        }


        .tg-search-info {

          color:
            #8b7c70;

          font-family:
            "Noto Sans Telugu",
            sans-serif;

          font-size:
            12px;

        }


        /* ===================================================
           GRID
        =================================================== */

        .tg-district-grid {

          display:
            grid;

          grid-template-columns:
            repeat(3, 1fr);

          gap:
            14px;

        }


        .tg-district-card {

          position:
            relative;

          min-height:
            118px;

          display:
            flex;

          align-items:
            center;

          gap:
            14px;

          padding:
            18px 17px 18px 15px;

          background:
            #fffdf9;

          border:
            1px solid #e5d9ca;

          overflow:
            hidden;

          transition:
            transform .3s ease,
            box-shadow .3s ease,
            border-color .3s ease;

          animation:
            tgCardAppear .55s ease both;

        }


        .tg-district-card::before {

          content:
            "";

          position:
            absolute;

          left:
            0;

          top:
            0;

          width:
            3px;

          height:
            100%;

          background:
            #b58b43;

          transform:
            scaleY(0);

          transform-origin:
            bottom;

          transition:
            transform .3s ease;

        }


        .tg-district-card:hover {

          transform:
            translateY(-5px);

          border-color:
            #cdb891;

          box-shadow:
            0 15px 35px
            rgba(71,37,22,.09);

        }


        .tg-district-card:hover::before {

          transform:
            scaleY(1);

        }


        .tg-district-number {

          align-self:
            flex-start;

          min-width:
            31px;

          color:
            #c7b39a;

          font-family:
            "Noto Serif Telugu",
            serif;

          font-size:
            13px;

          font-weight:
            600;

        }


        .tg-district-icon {

          width:
            38px;

          height:
            38px;

          flex-shrink:
            0;

          display:
            flex;

          align-items:
            center;

          justify-content:
            center;

          color:
            #8d672f;

          background:
            #f4ecdf;

          border:
            1px solid #e3d5c2;

          border-radius:
            50%;

          transition:
            background .25s ease,
            color .25s ease;

        }


        .tg-district-card:hover
        .tg-district-icon {

          background:
            #651d2b;

          color:
            #e0bf77;

        }


        .tg-district-content {

          flex:
            1;

          min-width:
            0;

        }


        .tg-district-content span {

          display:
            block;

          margin-bottom:
            4px;

          color:
            #a17d48;

          font-family:
            "Noto Sans Telugu",
            sans-serif;

          font-size:
            9px;

        }


        .tg-district-content h3 {

          margin:
            0;

          color:
            #463932;

          font-family:
            "Noto Serif Telugu",
            serif;

          font-size:
            16px;

          font-weight:
            600;

          line-height:
            1.6;

        }


        .tg-district-arrow {

          width:
            31px;

          height:
            31px;

          flex-shrink:
            0;

          display:
            flex;

          align-items:
            center;

          justify-content:
            center;

          color:
            #9d8569;

          border:
            1px solid #e2d6c7;

          border-radius:
            50%;

          transition:
            background .25s ease,
            color .25s ease,
            transform .25s ease;

        }


        .tg-district-card:hover
        .tg-district-arrow {

          background:
            #651d2b;

          color:
            #fff;

          transform:
            rotate(8deg);

        }


        /* ===================================================
           EMPTY
        =================================================== */

        .tg-empty {

          padding:
            70px 20px;

          text-align:
            center;

          background:
            #fffdf9;

          border:
            1px solid #e5d9ca;

        }


        .tg-empty svg {

          color:
            #a17a38;

        }


        .tg-empty h3 {

          margin:
            15px 0 5px;

          color:
            #4c1622;

          font-family:
            "Noto Serif Telugu",
            serif;

          font-size:
            22px;

        }


        .tg-empty p {

          margin:
            0 0 20px;

          color:
            #756960;

          font-family:
            "Noto Sans Telugu",
            sans-serif;

        }


        .tg-empty button {

          padding:
            10px 18px;

          border:
            none;

          background:
            #651d2b;

          color:
            white;

          font-family:
            "Noto Serif Telugu",
            serif;

          cursor:
            pointer;

        }


        /* ===================================================
           MESSAGE
        =================================================== */

        .tg-message {

          position:
            relative;

          overflow:
            hidden;

          padding:
            115px 0;

          background:
            #351019;

          color:
            white;

        }


        .tg-message-pattern {

          position:
            absolute;

          inset:
            0;

          opacity:
            .06;

          background-image:
            linear-gradient(
              45deg,
              transparent 48%,
              #d7b56d 49%,
              #d7b56d 51%,
              transparent 52%
            );

          background-size:
            35px 35px;

        }


        .tg-message-inner {

          position:
            relative;

          max-width:
            850px;

          margin:
            0 auto;

          text-align:
            center;

        }


        .tg-quote {

          height:
            75px;

          color:
            #d5b16a;

          font-family:
            Georgia,
            serif;

          font-size:
            110px;

          line-height:
            1;

        }


        .tg-message-label {

          color:
            #d5b16a;

          font-family:
            "Noto Serif Telugu",
            serif;

          font-size:
            14px;

        }


        .tg-message-inner h2 {

          margin:
            15px 0 25px;

          color:
            #fff;

          font-family:
            "Noto Serif Telugu",
            serif;

          font-size:
            clamp(30px, 4vw, 48px);

          line-height:
            1.55;

          font-weight:
            600;

        }


        .tg-message-inner p {

          max-width:
            720px;

          margin:
            0 auto;

          color:
            #d8c6ba;

          font-family:
            "Noto Sans Telugu",
            sans-serif;

          font-size:
            15px;

          line-height:
            2.1;

        }


        .tg-message-line {

          margin-top:
            35px;

          display:
            flex;

          align-items:
            center;

          justify-content:
            center;

          gap:
            13px;

          color:
            #d5b16a;

          font-family:
            "Noto Serif Telugu",
            serif;

          font-size:
            12px;

        }


        .tg-message-line span:first-child,
        .tg-message-line span:last-child {

          width:
            45px;

          height:
            1px;

          background:
            #a77f40;

        }


        /* ===================================================
           NEXT CARD
        =================================================== */

        .tg-next-section {

          padding:
            70px 0;

          background:
            #f7efe5;

        }


        .tg-next-card {

          display:
            flex;

          align-items:
            center;

          justify-content:
            space-between;

          gap:
            30px;

          padding:
            35px 40px;

          background:
            #fffaf3;

          border:
            1px solid #ded1c1;

          box-shadow:
            0 15px 45px
            rgba(64,38,22,.06);

        }


        .tg-next-card > div > span {

          color:
            #a17a38;

          font-family:
            "Noto Serif Telugu",
            serif;

          font-size:
            12px;

        }


        .tg-next-card h2 {

          margin:
            4px 0;

          color:
            #4c1622;

          font-family:
            "Noto Serif Telugu",
            serif;

          font-size:
            30px;

        }


        .tg-next-card p {

          margin:
            0;

          color:
            #71645b;

          font-family:
            "Noto Sans Telugu",
            sans-serif;

          font-size:
            13px;

        }


        .tg-next-button {

          display:
            inline-flex;

          align-items:
            center;

          gap:
            8px;

          padding:
            13px 19px;

          background:
            #651d2b;

          color:
            white;

          font-family:
            "Noto Serif Telugu",
            serif;

          font-size:
            13px;

          text-decoration:
            none;

          white-space:
            nowrap;

          transition:
            transform .25s ease,
            background .25s ease;

        }


        .tg-next-button:hover {

          background:
            #48131e;

          transform:
            translateY(-2px);

        }


        /* ===================================================
           ANIMATIONS
        =================================================== */

        @keyframes tgHeroReveal {

          from {
            opacity: 0;
            transform: translateY(25px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }

        }


        @keyframes tgCardReveal {

          from {
            opacity: 0;
            transform: translateY(30px) scale(.96);
          }

          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }

        }


        @keyframes tgCardAppear {

          from {
            opacity: 0;
            transform: translateY(12px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }

        }


        @keyframes tgFloat {

          0%,
          100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-12px);
          }

        }


        /* ===================================================
           TABLET
        =================================================== */

        @media (max-width: 1000px) {

          .tg-hero-inner {

            grid-template-columns:
              1fr;

            gap:
              50px;

          }


          .tg-hero-card-wrap {

            justify-content:
              flex-start;

          }


          .tg-hero-card {

            width:
              280px;

          }


          .tg-district-grid {

            grid-template-columns:
              repeat(2, 1fr);

          }


          .tg-intro-grid {

            grid-template-columns:
              1fr;

            gap:
              40px;

          }


          .tg-intro-text {

            padding-left:
              0;

            padding-top:
              25px;

            border-left:
              none;

            border-top:
              1px solid #ddcfbe;

          }

        }


        /* ===================================================
           MOBILE
        =================================================== */

        @media (max-width: 700px) {

          .tg-container {

            width:
              92%;

          }


          .tg-hero {

            min-height:
              auto;

          }


          .tg-hero-inner {

            padding:
              70px 0;

          }


          .tg-eyebrow {

            font-size:
              12px;

          }


          .tg-hero h1 {

            font-size:
              47px;

          }


          .tg-hero-subtitle {

            font-size:
              17px;

          }


          .tg-hero-description {

            font-size:
              13px;

            line-height:
              1.9;

          }


          .tg-hero-card-wrap {

            justify-content:
              center;

          }


          .tg-hero-card {

            width:
              min(100%, 300px);

          }


          .tg-intro {

            padding:
              70px 0;

          }


          .tg-stats {

            padding:
              20px 0;

          }


          .tg-stats-grid {

            grid-template-columns:
              1fr;

          }


          .tg-stat {

            justify-content:
              flex-start;

            border-right:
              none;

            border-bottom:
              1px solid rgba(255,255,255,.13);

            padding:
              15px 0;

          }


          .tg-stat:last-child {

            border-bottom:
              none;

          }


          .tg-district-section {

            padding:
              70px 0;

          }


          .tg-district-heading {

            align-items:
              flex-start;

          }


          .tg-district-count {

            display:
              none;

          }


          .tg-toolbar {

            align-items:
              flex-start;

            flex-direction:
              column;

          }


          .tg-search {

            width:
              100%;

          }


          .tg-district-grid {

            grid-template-columns:
              1fr;

          }


          .tg-district-card {

            min-height:
              105px;

          }


          .tg-district-content h3 {

            font-size:
              15px;

          }


          .tg-message {

            padding:
              80px 0;

          }


          .tg-message-inner h2 {

            font-size:
              28px;

          }


          .tg-message-inner p {

            font-size:
              13px;

          }


          .tg-next-card {

            flex-direction:
              column;

            align-items:
              flex-start;

            padding:
              28px;

          }

        }


        /* ===================================================
           SMALL MOBILE
        =================================================== */

        @media (max-width: 420px) {

          .tg-hero h1 {

            font-size:
              40px;

          }


          .tg-hero-actions {

            align-items:
              flex-start;

            flex-direction:
              column;

          }


          .tg-district-card {

            padding:
              15px 12px;

            gap:
              10px;

          }


          .tg-district-number {

            min-width:
              24px;

            font-size:
              11px;

          }


          .tg-district-icon {

            width:
              34px;

            height:
              34px;

          }


          .tg-district-content h3 {

            font-size:
              14px;

          }

        }


        /* ===================================================
           REDUCED MOTION
        =================================================== */

        @media (prefers-reduced-motion: reduce) {

          .tg-chapters-page *,
          .tg-chapters-page *::before,
          .tg-chapters-page *::after {

            animation:
              none !important;

            transition:
              none !important;

          }

        }

      `}</style>

    </main>
  );
}