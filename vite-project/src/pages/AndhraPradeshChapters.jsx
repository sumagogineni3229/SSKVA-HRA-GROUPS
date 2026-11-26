import React, { useMemo, useState } from "react";
import {
  MapPin,
  Search,
  Sparkles,
  ArrowUpRight,
  BookOpen,
  Users,
  X
} from "lucide-react";

const districts = [
  "అల్లూరి సీతారామరాజు",
  "అనంతపురము",
  "అన్నమయ్య",
  "అనకాపల్లి",
  "ఏలూరు",
  "ఎన్టీఆర్",
  "కాకినాడ",
  "కర్నూలు",
  "కోనసీమ (డా. బి.ఆర్. అంబేద్కర్ కోనసీమ)",
  "కృష్ణా",
  "గుంటూరు",
  "చిత్తూరు",
  "తిరుపతి",
  "తూర్పు గోదావరి",
  "నంద్యాల",
  "పల్నాడు",
  "పార్వతీపురం మన్యం",
  "ప్రకాశం",
  "బాపట్ల",
  "విజయనగరం",
  "విశాఖపట్నం",
  "వైఎస్సార్ కడప",
  "శ్రీకాకుళం",
  "శ్రీ సత్యసాయి",
  "పశ్చిమ గోదావరి",
  "నెల్లూరు (ఎస్‌పీఎస్‌ఆర్‌ నెల్లూరు)"
];

export default function AndhraPradeshChapters() {
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
    <main className="ap-chapters-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="ap-hero">

        <div className="ap-hero-pattern" />
        <div className="ap-hero-glow glow-one" />
        <div className="ap-hero-glow glow-two" />

        <div className="ap-hero-motif motif-one">
          ✦
        </div>

        <div className="ap-hero-motif motif-two">
          ❧
        </div>

        <div className="ap-container ap-hero-inner">

          <div className="ap-hero-content">

            <div className="ap-eyebrow">
              <span className="eyebrow-line" />
              శ్రీ శ్రీ కళావేదిక
              <span className="eyebrow-line" />
            </div>

            <h1>
              ఆంధ్రప్రదేశ్
              <span>కార్యవర్గం</span>
            </h1>

            <p className="ap-hero-subtitle">
              జిల్లాల నుంచి ప్రపంచానికి
              <br />
              తెలుగు సాహిత్య సాంస్కృతిక జైత్రయాత్ర
            </p>

            <p className="ap-hero-description">
              ఆంధ్రప్రదేశ్‌లోని ప్రతి జిల్లాలో తెలుగు భాష,
              సాహిత్యం, సంస్కృతి, కళలు మరియు సామాజిక సేవా
              కార్యక్రమాలను విస్తరించేందుకు శ్రీ శ్రీ కళావేదిక
              తన సాహిత్య కుటుంబాన్ని మరింత బలోపేతం చేస్తోంది.
            </p>

            <div className="ap-hero-actions">

              <a
                href="#districts"
                className="ap-primary-button"
              >
                జిల్లాలను చూడండి
                <ArrowUpRight size={18} />
              </a>

              <div className="ap-small-note">
                <Sparkles size={16} />
                26 జిల్లాలు • ఒకే సాహిత్య కుటుంబం
              </div>

            </div>

          </div>


          {/* HERO SIDE PANEL */}

          <div className="ap-hero-card-wrap">

            <div className="ap-hero-card">

              <div className="card-top-decoration">
                <span />
                <span />
                <span />
              </div>

              <div className="ap-card-icon">
                <MapPin size={30} />
              </div>

              <div className="ap-number">
                26
              </div>

              <div className="ap-number-label">
                జిల్లాలు
              </div>

              <div className="ap-card-divider" />

              <p>
                ఆంధ్రప్రదేశ్ వ్యాప్తంగా
                <br />
                సాహిత్య సేవా విస్తరణ
              </p>

              <div className="ap-card-footer">
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
          INTRO
      ===================================================== */}

      <section className="ap-intro">

        <div className="ap-container">

          <div className="ap-intro-grid">

            <div className="ap-intro-title">

              <span className="section-mini-label">
                మా కార్యవర్గ ప్రస్థానం
              </span>

              <h2>
                ప్రతి జిల్లా
                <br />
                <em>ఒక కొత్త వేదిక</em>
              </h2>

              <div className="title-decoration">
                <span />
                <span />
                <span />
              </div>

            </div>


            <div className="ap-intro-text">

              <p>
                ఆంధ్రప్రదేశ్‌లోని 26 జిల్లాలను అనుసంధానిస్తూ
                సాహిత్య, సాంస్కృతిక మరియు సామాజిక సేవా
                కార్యక్రమాలను ప్రజలకు మరింత చేరువ చేయడమే
                శ్రీ శ్రీ కళావేదిక కార్యవర్గం ప్రధాన లక్ష్యం.
              </p>

              <p>
                ప్రతి జిల్లాలోని కవులు, రచయితలు, సాహితీవేత్తలు,
                కళాకారులు, యువ సృజనకారులు మరియు సాహిత్య
                అభిమానులను ఒకే వేదికపైకి తీసుకువచ్చి
                ప్రతిభను గుర్తించి ప్రోత్సహించే నిరంతర
                కార్యాచరణకు ఈ కార్యవర్గం వారధిగా నిలుస్తుంది.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          STAT STRIP
      ===================================================== */}

      <section className="ap-stats">

        <div className="ap-container stats-grid">

          <div className="stat-item">

            <div className="stat-icon">
              <MapPin size={22} />
            </div>

            <div>
              <strong>26</strong>
              <span>ఆంధ్రప్రదేశ్ జిల్లాలు</span>
            </div>

          </div>


          <div className="stat-item">

            <div className="stat-icon">
              <Users size={22} />
            </div>

            <div>
              <strong>ఒక కుటుంబం</strong>
              <span>కవులు • రచయితలు • కళాకారులు</span>
            </div>

          </div>


          <div className="stat-item">

            <div className="stat-icon">
              <BookOpen size={22} />
            </div>

            <div>
              <strong>నిరంతరం</strong>
              <span>సాహిత్య • సాంస్కృతిక కార్యక్రమాలు</span>
            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          DISTRICTS
      ===================================================== */}

      <section
        className="ap-district-section"
        id="districts"
      >

        <div className="ap-container">

          <div className="district-heading">

            <div>

              <span className="section-mini-label">
                ఆంధ్రప్రదేశ్
              </span>

              <h2>
                జిల్లా కార్యవర్గం
              </h2>

              <p>
                మీ జిల్లాలోని శ్రీ శ్రీ కళావేదిక సాహిత్య
                కుటుంబాన్ని కనుగొనండి.
              </p>

            </div>


            <div className="district-count">

              <strong>
                {filteredDistricts.length}
              </strong>

              <span>
                / 26
              </span>

            </div>

          </div>


          {/* SEARCH */}

          <div className="district-toolbar">

            <div className="search-box">

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

            <div className="search-info">
              {search
                ? `${filteredDistricts.length} జిల్లాలు కనిపిస్తున్నాయి`
                : "మొత్తం 26 జిల్లాలు"}
            </div>

          </div>


          {/* DISTRICT GRID */}

          {filteredDistricts.length > 0 ? (

            <div className="district-grid">

              {filteredDistricts.map((district) => {

                const originalIndex =
                  districts.indexOf(district);

                return (
                  <article
                    className="district-card"
                    key={district}
                  >

                    <div className="district-number">
                      {String(originalIndex + 1).padStart(
                        2,
                        "0"
                      )}
                    </div>


                    <div className="district-card-icon">
                      <MapPin size={18} />
                    </div>


                    <div className="district-content">

                      <span>
                        ఆంధ్రప్రదేశ్ కార్యవర్గం
                      </span>

                      <h3>
                        {district}
                      </h3>

                    </div>


                    <div className="district-arrow">
                      <ArrowUpRight size={17} />
                    </div>

                  </article>
                );
              })}

            </div>

          ) : (

            <div className="empty-state">

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
          CULTURAL MESSAGE
      ===================================================== */}

      <section className="ap-message">

        <div className="ap-message-pattern" />

        <div className="ap-container">

          <div className="message-inner">

            <div className="message-quote">
              “
            </div>

            <span className="message-label">
              మా సంకల్పం
            </span>

            <h2>
              జిల్లాల నుంచి దేశాలకు...
              <br />
              దేశాల నుంచి ప్రపంచానికి...
            </h2>

            <p>
              తెలుగు అక్షరానికి ప్రతి జిల్లాలో ఒక వేదిక,
              ప్రతి ప్రతిభకు ఒక అవకాశం, ప్రతి కళాకారుడికి
              ఒక గౌరవ స్థానం కల్పించాలనే సంకల్పంతో
              శ్రీ శ్రీ కళావేదిక తన సాహిత్య ప్రస్థానాన్ని
              కొనసాగిస్తోంది.
            </p>

            <div className="message-line">
              <span />
              <span>శ్రీ శ్రీ కళావేదిక</span>
              <span />
            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          TELANGANA TEASER
      ===================================================== */}

      <section className="ap-next-section">

        <div className="ap-container">

          <div className="next-card">

            <div>

              <span>
                తదుపరి అధ్యాయం
              </span>

              <h2>
                తెలంగాణ కార్యవర్గం
              </h2>

              <p>
                తెలంగాణలోని 33 జిల్లాల్లో
                శ్రీ శ్రీ కళావేదిక సాహిత్య కుటుంబాన్ని
                తెలుసుకోండి.
              </p>

            </div>

            <a
              href="/telangana-chapters"
              className="next-button"
            >
              తెలంగాణ కార్యవర్గం
              <ArrowUpRight size={18} />
            </a>

          </div>

        </div>

      </section>


      {/* =====================================================
          PAGE CSS
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

        .ap-chapters-page {

          background:
            #fcf8f2;

          color:
            #3f302a;

          overflow:
            hidden;

        }


        .ap-chapters-page * {

          box-sizing:
            border-box;

        }


        .ap-container {

          width:
            min(1220px, 92%);

          margin:
            0 auto;

        }


        /* ===================================================
           HERO
        =================================================== */

        .ap-hero {

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


        .ap-hero-pattern {

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


        .ap-hero::after {

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


        .ap-hero-glow {

          position:
            absolute;

          border-radius:
            50%;

          filter:
            blur(2px);

          pointer-events:
            none;

        }


        .glow-one {

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


        .glow-two {

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


        .ap-hero-motif {

          position:
            absolute;

          color:
            rgba(221,188,116,.28);

          font-family:
            serif;

          pointer-events:
            none;

        }


        .motif-one {

          left:
            7%;

          top:
            22%;

          font-size:
            40px;

          animation:
            floating 5s ease-in-out infinite;

        }


        .motif-two {

          left:
            8%;

          bottom:
            15%;

          font-size:
            70px;

          transform:
            rotate(-20deg);

          animation:
            floating 6s ease-in-out infinite reverse;

        }


        .ap-hero-inner {

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


        .ap-hero-content {

          animation:
            heroReveal .8s ease both;

        }


        .ap-eyebrow {

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

          letter-spacing:
            .2px;

        }


        .eyebrow-line {

          width:
            34px;

          height:
            1px;

          background:
            #c9a45c;

        }


        .ap-hero h1 {

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

          letter-spacing:
            -1px;

        }


        .ap-hero h1 span {

          display:
            block;

          color:
            #d7b76d;

        }


        .ap-hero-subtitle {

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


        .ap-hero-description {

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


        .ap-hero-actions {

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


        .ap-primary-button {

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


        .ap-primary-button:hover {

          transform:
            translateY(-3px);

          box-shadow:
            0 12px 28px
            rgba(0,0,0,.2);

        }


        .ap-small-note {

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

        .ap-hero-card-wrap {

          display:
            flex;

          justify-content:
            center;

          animation:
            cardReveal .9s .15s ease both;

        }


        .ap-hero-card {

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


        .card-top-decoration {

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

          align-items:
            center;

          gap:
            7px;

        }


        .card-top-decoration span {

          width:
            5px;

          height:
            5px;

          background:
            #d5b46e;

          transform:
            rotate(45deg);

        }


        .ap-card-icon {

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


        .ap-number {

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


        .ap-number-label {

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


        .ap-card-divider {

          width:
            55px;

          height:
            1px;

          margin:
            20px auto;

          background:
            #bd9851;

        }


        .ap-hero-card p {

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


        .ap-card-footer {

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

        .ap-intro {

          padding:
            100px 0;

          background:
            #fffaf4;

        }


        .ap-intro-grid {

          display:
            grid;

          grid-template-columns:
            .7fr 1.3fr;

          gap:
            90px;

          align-items:
            center;

        }


        .section-mini-label {

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


        .ap-intro-title h2 {

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


        .ap-intro-title h2 em {

          color:
            #a57b39;

          font-style:
            normal;

        }


        .title-decoration {

          display:
            flex;

          align-items:
            center;

          gap:
            6px;

          margin-top:
            25px;

        }


        .title-decoration span {

          width:
            8px;

          height:
            8px;

          background:
            #b58b43;

          transform:
            rotate(45deg);

        }


        .title-decoration span:first-child {

          width:
            35px;

          height:
            1px;

          transform:
            none;

        }


        .ap-intro-text {

          padding-left:
            25px;

          border-left:
            1px solid #ddcfbe;

        }


        .ap-intro-text p {

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


        .ap-intro-text p:last-child {

          margin-bottom:
            0;

        }


        /* ===================================================
           STATS
        =================================================== */

        .ap-stats {

          padding:
            34px 0;

          background:
            #651d2b;

          color:
            #fff;

        }


        .stats-grid {

          display:
            grid;

          grid-template-columns:
            repeat(3, 1fr);

          gap:
            30px;

        }


        .stat-item {

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


        .stat-item:last-child {

          border-right:
            none;

        }


        .stat-icon {

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


        .stat-item strong {

          display:
            block;

          color:
            #e0c17c;

          font-family:
            "Noto Serif Telugu",
            serif;

          font-size:
            20px;

          line-height:
            1.4;

        }


        .stat-item span {

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

        .ap-district-section {

          padding:
            105px 0;

          background:
            #f8f2e9;

        }


        .district-heading {

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


        .district-heading h2 {

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


        .district-heading p {

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


        .district-count {

          display:
            flex;

          align-items:
            baseline;

          gap:
            3px;

          color:
            #b28a47;

        }


        .district-count strong {

          font-family:
            "Noto Serif Telugu",
            serif;

          font-size:
            48px;

          line-height:
            1;

        }


        .district-count span {

          color:
            #8d8177;

          font-size:
            16px;

        }


        /* ===================================================
           TOOLBAR
        =================================================== */

        .district-toolbar {

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


        .search-box {

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


        .search-box:focus-within {

          border-color:
            #a67c3d;

          box-shadow:
            0 8px 25px
            rgba(90,50,25,.07);

        }


        .search-box input {

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


        .search-box input::placeholder {

          color:
            #9b8e84;

        }


        .search-box button {

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


        .search-info {

          color:
            #8b7c70;

          font-family:
            "Noto Sans Telugu",
            sans-serif;

          font-size:
            12px;

        }


        /* ===================================================
           DISTRICT GRID
        =================================================== */

        .district-grid {

          display:
            grid;

          grid-template-columns:
            repeat(3, 1fr);

          gap:
            14px;

        }


        .district-card {

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
            cardAppear .55s ease both;

        }


        .district-card::before {

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


        .district-card:hover {

          transform:
            translateY(-5px);

          border-color:
            #cdb891;

          box-shadow:
            0 15px 35px
            rgba(71,37,22,.09);

        }


        .district-card:hover::before {

          transform:
            scaleY(1);

        }


        .district-number {

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


        .district-card-icon {

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


        .district-card:hover
        .district-card-icon {

          background:
            #651d2b;

          color:
            #e0bf77;

        }


        .district-content {

          flex:
            1;

          min-width:
            0;

        }


        .district-content span {

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


        .district-content h3 {

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


        .district-arrow {

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


        .district-card:hover
        .district-arrow {

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

        .empty-state {

          padding:
            70px 20px;

          text-align:
            center;

          background:
            #fffdf9;

          border:
            1px solid #e5d9ca;

        }


        .empty-state svg {

          color:
            #a17a38;

        }


        .empty-state h3 {

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


        .empty-state p {

          margin:
            0 0 20px;

          color:
            #756960;

          font-family:
            "Noto Sans Telugu",
            sans-serif;

        }


        .empty-state button {

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

        .ap-message {

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


        .ap-message-pattern {

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


        .message-inner {

          position:
            relative;

          max-width:
            850px;

          margin:
            0 auto;

          text-align:
            center;

        }


        .message-quote {

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


        .message-label {

          color:
            #d5b16a;

          font-family:
            "Noto Serif Telugu",
            serif;

          font-size:
            14px;

        }


        .message-inner h2 {

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


        .message-inner p {

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


        .message-line {

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


        .message-line span:first-child,
        .message-line span:last-child {

          width:
            45px;

          height:
            1px;

          background:
            #a77f40;

        }


        /* ===================================================
           NEXT SECTION
        =================================================== */

        .ap-next-section {

          padding:
            70px 0;

          background:
            #f7efe5;

        }


        .next-card {

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


        .next-card > div > span {

          color:
            #a17a38;

          font-family:
            "Noto Serif Telugu",
            serif;

          font-size:
            12px;

        }


        .next-card h2 {

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


        .next-card p {

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


        .next-button {

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


        .next-button:hover {

          background:
            #48131e;

          transform:
            translateY(-2px);

        }


        /* ===================================================
           ANIMATIONS
        =================================================== */

        @keyframes heroReveal {

          from {

            opacity:
              0;

            transform:
              translateY(25px);

          }

          to {

            opacity:
              1;

            transform:
              translateY(0);

          }

        }


        @keyframes cardReveal {

          from {

            opacity:
              0;

            transform:
              translateY(30px)
              scale(.96);

          }

          to {

            opacity:
              1;

            transform:
              translateY(0)
              scale(1);

          }

        }


        @keyframes cardAppear {

          from {

            opacity:
              0;

            transform:
              translateY(12px);

          }

          to {

            opacity:
              1;

            transform:
              translateY(0);

          }

        }


        @keyframes floating {

          0%,
          100% {

            transform:
              translateY(0);

          }

          50% {

            transform:
              translateY(-12px);

          }

        }


        /* ===================================================
           TABLET
        =================================================== */

        @media (max-width: 1000px) {

          .ap-hero-inner {

            grid-template-columns:
              1fr;

            gap:
              50px;

          }


          .ap-hero-card-wrap {

            justify-content:
              flex-start;

          }


          .ap-hero-card {

            width:
              280px;

          }


          .district-grid {

            grid-template-columns:
              repeat(2, 1fr);

          }


          .ap-intro-grid {

            grid-template-columns:
              1fr;

            gap:
              40px;

          }


          .ap-intro-text {

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

          .ap-container {

            width:
              92%;

          }


          .ap-hero {

            min-height:
              auto;

          }


          .ap-hero-inner {

            padding:
              70px 0;

          }


          .ap-eyebrow {

            font-size:
              12px;

          }


          .ap-hero h1 {

            font-size:
              47px;

          }


          .ap-hero-subtitle {

            font-size:
              17px;

          }


          .ap-hero-description {

            font-size:
              13px;

            line-height:
              1.9;

          }


          .ap-hero-card-wrap {

            justify-content:
              center;

          }


          .ap-hero-card {

            width:
              min(100%, 300px);

          }


          .ap-intro {

            padding:
              70px 0;

          }


          .ap-stats {

            padding:
              20px 0;

          }


          .stats-grid {

            grid-template-columns:
              1fr;

            gap:
              0;

          }


          .stat-item {

            justify-content:
              flex-start;

            border-right:
              none;

            border-bottom:
              1px solid rgba(255,255,255,.13);

            padding:
              15px 0;

          }


          .stat-item:last-child {

            border-bottom:
              none;

          }


          .ap-district-section {

            padding:
              70px 0;

          }


          .district-heading {

            align-items:
              flex-start;

          }


          .district-count {

            display:
              none;

          }


          .district-toolbar {

            align-items:
              flex-start;

            flex-direction:
              column;

          }


          .search-box {

            width:
              100%;

          }


          .district-grid {

            grid-template-columns:
              1fr;

          }


          .district-card {

            min-height:
              105px;

          }


          .district-content h3 {

            font-size:
              15px;

          }


          .ap-message {

            padding:
              80px 0;

          }


          .message-inner h2 {

            font-size:
              28px;

          }


          .message-inner p {

            font-size:
              13px;

          }


          .next-card {

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

          .ap-hero h1 {

            font-size:
              40px;

          }


          .ap-hero-actions {

            align-items:
              flex-start;

            flex-direction:
              column;

          }


          .district-card {

            padding:
              15px 12px;

            gap:
              10px;

          }


          .district-number {

            min-width:
              24px;

            font-size:
              11px;

          }


          .district-card-icon {

            width:
              34px;

            height:
              34px;

          }


          .district-content h3 {

            font-size:
              14px;

          }

        }


        /* ===================================================
           REDUCED MOTION
        =================================================== */

        @media (prefers-reduced-motion: reduce) {

          .ap-chapters-page *,
          .ap-chapters-page *::before,
          .ap-chapters-page *::after {

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