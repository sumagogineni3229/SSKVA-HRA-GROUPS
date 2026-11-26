
import React, { useState } from "react";

export default function ContactUs() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "సాధారణ విచారణ",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    setSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = `
శ్రీ శ్రీ కళావేదిక - సంప్రదింపు వివరాలు

పేరు: ${form.name}
ఫోన్: ${form.phone}
ఈమెయిల్: ${form.email || "పేర్కొనలేదు"}
విషయం: ${form.subject}

సందేశం:
${form.message}
    `.trim();

    const url =
      "https://wa.me/919000343095?text=" +
      encodeURIComponent(message);

    window.open(url, "_blank", "noopener,noreferrer");
    setSubmitted(true);
  };

  return (
    <main className="contact-page">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Telugu:wght@400;500;600;700;800&family=Noto+Serif+Telugu:wght@400;500;600;700;800&display=swap');

        .contact-page {
          --maroon: #5B142B;
          --wine: #76233E;
          --gold: #D6B477;
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

        .contact-page *,
        .contact-page *::before,
        .contact-page *::after {
          box-sizing: border-box;
        }

        .contact-page input,
        .contact-page textarea,
        .contact-page select,
        .contact-page button {
          font: inherit;
        }

        .contact-page .serif {
          font-family: 'Noto Serif Telugu', serif;
        }

        .contact-page .container {
          width: min(1160px, calc(100% - 40px));
          margin: 0 auto;
        }

        /* HERO */

        .contact-page .hero {
          position: relative;
          isolation: isolate;
          padding: 100px 20px 105px;
          text-align: center;
          color: white;
          background:
            radial-gradient(
              ellipse at 50% 0%,
              rgba(214,180,119,.17),
              transparent 55%
            ),
            linear-gradient(135deg, #481020, #5B142B 55%, #76233E);
        }

        .contact-page .hero::before {
          content: "";
          position: absolute;
          z-index: -1;
          inset: 17px;
          border: 1px solid rgba(214,180,119,.35);
          pointer-events: none;
        }

        .contact-page .hero-label {
          display: inline-block;
          color: var(--gold);
          border: 1px solid rgba(214,180,119,.55);
          padding: 9px 23px;
          border-radius: 50px;
          font-size: 12px;
          letter-spacing: 2px;
          font-weight: 700;
          margin-bottom: 25px;
        }

        .contact-page .hero h1 {
          font-family: 'Noto Serif Telugu', serif;
          font-size: clamp(36px, 5vw, 58px);
          line-height: 1.6;
          color: #FFF8EF;
          margin: 0 0 16px;
        }

        .contact-page .hero h1 span {
          color: var(--gold);
        }

        .contact-page .hero p {
          max-width: 740px;
          margin: 0 auto;
          font-size: 15px;
          line-height: 2.2;
          color: #F0E1DF;
        }

        .contact-page .hero-divider {
          width: 85px;
          height: 2px;
          background: var(--gold);
          margin: 26px auto 0;
        }

        /* SECTION HEADING */

        .contact-page .section-heading {
          text-align: center;
          max-width: 800px;
          margin: 0 auto;
        }

        .contact-page .eyebrow {
          color: var(--wine);
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 2px;
          margin-bottom: 12px;
        }

        .contact-page .section-title {
          font-family: 'Noto Serif Telugu', serif;
          color: var(--maroon);
          font-size: clamp(26px, 4vw, 38px);
          line-height: 1.7;
          margin: 0 0 14px;
        }

        .contact-page .section-description {
          color: var(--muted);
          font-size: 14px;
          line-height: 2.2;
          margin: 0;
        }

        .contact-page .gold-divider {
          width: 90px;
          height: 3px;
          background: var(--gold);
          margin: 23px auto 0;
        }

        /* CONTACT CARDS */

        .contact-page .info-section {
          padding: 78px 0 65px;
          background: var(--ivory);
        }

        .contact-page .info-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 22px;
          margin-top: 44px;
        }

        .contact-page .info-card {
          padding: 30px 24px;
          background: #fff;
          border: 1px solid #E7DCD2;
          border-top: 4px solid var(--maroon);
          text-align: center;
          box-shadow: 0 8px 25px rgba(75,25,43,.045);
          transition: transform .25s, box-shadow .25s;
        }

        .contact-page .info-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 14px 30px rgba(75,25,43,.1);
        }

        .contact-page .info-symbol {
          width: 58px;
          height: 58px;
          margin: 0 auto 19px;
          display: grid;
          place-items: center;
          border: 1px solid #E4D0AD;
          border-radius: 50%;
          color: var(--maroon);
          background: #F8F2E9;
          font-size: 25px;
        }

        .contact-page .info-card h3 {
          font-family: 'Noto Serif Telugu', serif;
          color: var(--maroon);
          font-size: 19px;
          margin: 0 0 10px;
        }

        .contact-page .info-card p,
        .contact-page .info-card a {
          color: #796A72;
          font-size: 13px;
          line-height: 2;
          margin: 0;
          text-decoration: none;
          overflow-wrap: anywhere;
        }

        .contact-page .info-card a:hover {
          color: var(--maroon);
        }

        /* CONTACT FORM */

        .contact-page .form-section {
          padding: 70px 0 95px;
          background: #FFFCF8;
        }

        .contact-page .form-layout {
          display: grid;
          grid-template-columns: .82fr 1.18fr;
          gap: 30px;
          align-items: stretch;
          margin-top: 45px;
        }

        .contact-page .form-aside {
          padding: 38px 30px;
          background: var(--maroon);
          color: white;
          position: relative;
          overflow: hidden;
        }

        .contact-page .form-aside::after {
          content: "✦";
          position: absolute;
          right: -20px;
          bottom: -75px;
          color: rgba(214,180,119,.12);
          font-size: 220px;
          pointer-events: none;
        }

        .contact-page .aside-inner {
          position: relative;
          z-index: 1;
        }

        .contact-page .aside-symbol {
          color: var(--gold);
          font-size: 38px;
          margin-bottom: 20px;
        }

        .contact-page .form-aside h3 {
          font-family: 'Noto Serif Telugu', serif;
          font-size: 26px;
          line-height: 1.8;
          color: var(--gold);
          margin: 0 0 15px;
        }

        .contact-page .form-aside > .aside-inner > p {
          color: #EAD9D7;
          font-size: 13px;
          line-height: 2.2;
          margin: 0;
        }

        .contact-page .aside-divider {
          height: 1px;
          background: rgba(214,180,119,.4);
          margin: 25px 0;
        }

        .contact-page .aside-detail {
          display: flex;
          align-items: flex-start;
          gap: 13px;
          margin: 18px 0;
        }

        .contact-page .aside-detail-icon {
          color: var(--gold);
          font-size: 18px;
          min-width: 22px;
        }

        .contact-page .aside-detail strong {
          display: block;
          font-size: 12px;
          color: var(--gold-light);
          margin-bottom: 4px;
        }

        .contact-page .aside-detail a,
        .contact-page .aside-detail span {
          color: #F4E6DB;
          text-decoration: none;
          font-size: 13px;
          line-height: 1.8;
          overflow-wrap: anywhere;
        }

        .contact-page .aside-detail a:hover {
          color: var(--gold);
        }

        .contact-page .form-card {
          background: white;
          border: 1px solid #E7DCD2;
          padding: 36px;
          box-shadow: 0 10px 30px rgba(75,25,43,.055);
        }

        .contact-page .form-card h3 {
          font-family: 'Noto Serif Telugu', serif;
          color: var(--maroon);
          font-size: 25px;
          margin: 0 0 8px;
        }

        .contact-page .form-intro {
          font-size: 12px;
          color: #877982;
          line-height: 1.9;
          margin: 0 0 27px;
        }

        .contact-page .form-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 18px;
        }

        .contact-page .field {
          display: flex;
          flex-direction: column;
          gap: 8px;
          min-width: 0;
        }

        .contact-page .field.full {
          grid-column: 1 / -1;
        }

        .contact-page .field label {
          color: #51404A;
          font-size: 12px;
          font-weight: 700;
        }

        .contact-page .field input,
        .contact-page .field select,
        .contact-page .field textarea {
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

        .contact-page .field input:focus,
        .contact-page .field select:focus,
        .contact-page .field textarea:focus {
          border-color: var(--wine);
          box-shadow: 0 0 0 3px rgba(91,20,43,.08);
        }

        .contact-page .field textarea {
          min-height: 145px;
          resize: vertical;
        }

        .contact-page .submit-button {
          display: block;
          width: 100%;
          margin-top: 23px;
          padding: 15px 20px;
          border: 1px solid var(--maroon);
          border-radius: 3px;
          background: var(--maroon);
          color: white;
          font-size: 14px;
          font-weight: 700;
          transition: .2s ease;
        }

        .contact-page .submit-button:hover {
          background: var(--wine);
          box-shadow: 0 7px 18px rgba(91,20,43,.18);
        }

        .contact-page .success-message {
          margin-top: 16px;
          padding: 13px;
          background: #EDF7EE;
          border: 1px solid #C7DFC9;
          color: #315E3A;
          font-size: 12px;
          line-height: 1.9;
        }

        .contact-page .form-note {
          text-align: center;
          font-size: 11px;
          line-height: 1.9;
          color: #8B7C83;
          margin: 14px 0 0;
        }

        /* YOUTUBE SECTION */

        .contact-page .connect-section {
          padding: 70px 20px;
          text-align: center;
          background: #F0E5D9;
          border-top: 1px solid #E4D6C8;
        }

        .contact-page .connect-section h2 {
          font-family: 'Noto Serif Telugu', serif;
          color: var(--maroon);
          font-size: clamp(25px, 3.5vw, 34px);
          line-height: 1.8;
          margin: 0 0 12px;
        }

        .contact-page .connect-section p {
          color: #796A72;
          font-size: 13px;
          line-height: 2;
          margin: 0 auto 23px;
          max-width: 700px;
        }

        .contact-page .youtube-link {
          display: inline-block;
          padding: 13px 25px;
          border: 1px solid var(--maroon);
          background: var(--maroon);
          color: white;
          text-decoration: none;
          font-size: 13px;
          font-weight: 700;
          transition: .2s ease;
        }

        .contact-page .youtube-link:hover {
          background: var(--wine);
          transform: translateY(-2px);
        }

        /* CLOSING */

        .contact-page .closing {
          padding: 54px 20px;
          text-align: center;
          background: var(--maroon);
        }

        .contact-page .closing h2 {
          font-family: 'Noto Serif Telugu', serif;
          color: var(--gold-light);
          font-size: clamp(23px, 3.5vw, 34px);
          line-height: 1.8;
          margin: 0 0 10px;
        }

        .contact-page .closing p {
          color: #EAD9D7;
          font-size: 13px;
          line-height: 2;
          margin: 0;
        }

        /* RESPONSIVE */

        @media (max-width: 900px) {
          .contact-page .info-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .contact-page .form-layout {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 600px) {
          .contact-page .container {
            width: calc(100% - 30px);
          }

          .contact-page .hero {
            padding: 75px 15px 80px;
          }

          .contact-page .hero::before {
            inset: 10px;
          }

          .contact-page .hero p {
            font-size: 13px;
          }

          .contact-page .info-section {
            padding: 55px 0 45px;
          }

          .contact-page .info-grid {
            grid-template-columns: 1fr;
            gap: 15px;
            margin-top: 30px;
          }

          .contact-page .info-card {
            padding: 25px 18px;
          }

          .contact-page .form-section {
            padding: 55px 0 65px;
          }

          .contact-page .form-aside,
          .contact-page .form-card {
            padding: 25px 20px;
          }

          .contact-page .form-grid {
            grid-template-columns: 1fr;
          }

          .contact-page .field.full {
            grid-column: auto;
          }

          .contact-page .connect-section {
            padding: 55px 18px;
          }

          .contact-page .closing {
            padding: 42px 18px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .contact-page *,
          .contact-page *::before,
          .contact-page *::after {
            transition-duration: .01ms !important;
            animation-duration: .01ms !important;
          }
        }
      `}</style>

      {/* HERO */}

      <section className="hero">
        <div className="container">
          <div className="hero-label">
            SRI SRI KALAVEDHIKA
          </div>

          <h1>
            మీ మాటకు మా వేదిక...
            <br />
            <span>మీ అనుబంధానికి మా ఆహ్వానం...</span>
          </h1>

          <p>
            సాహిత్యం, సంస్కృతి, కళలు మరియు సామాజిక సేవకు
            సంబంధించిన మీ అభిప్రాయాలు, సూచనలు, సహకారం
            మాకు ఎంతో విలువైనవి. మాతో మాట్లాడండి.
          </p>

          <div className="hero-divider" />
        </div>
      </section>

      {/* INTRO AND CONTACT INFORMATION */}

      <section className="info-section">
        <div className="container">
          <div className="section-heading">
            <div className="eyebrow">GET IN TOUCH</div>

            <h2 className="section-title">
              మీతో మాట్లాడేందుకు మేము సిద్ధంగా ఉన్నాం
            </h2>

            <p className="section-description">
              సభ్యత్వం, కార్యక్రమాలు, సాహిత్య సహకారం,
              కళా ప్రదర్శనలు లేదా ఇతర విచారణల కోసం
              మమ్మల్ని సంప్రదించండి.
            </p>

            <div className="gold-divider" />
          </div>

          <div className="info-grid">
            <article className="info-card">
              <div className="info-symbol">☎</div>
              <h3>ఫోన్ ద్వారా</h3>
              <p>
                <a href="tel:+919000343095">
                  +91 90003 43095
                </a>
              </p>
            </article>

            <article className="info-card">
              <div className="info-symbol">✉</div>
              <h3>ఈమెయిల్ ద్వారా</h3>
              <p>
                <a href="mailto:info@srisrikalavedika.org">
                  info@srisrikalavedika.org
                </a>
              </p>
            </article>

            <article className="info-card">
              <div className="info-symbol">◉</div>
              <h3>WhatsApp ద్వారా</h3>
              <p>
                <a
                  href="https://wa.me/919000343095"
                  target="_blank"
                  rel="noreferrer"
                >
                  మాకు సందేశం పంపండి
                </a>
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* CONTACT FORM */}

      <section className="form-section">
        <div className="container">
          <div className="section-heading">
            <div className="eyebrow">WRITE TO US</div>

            <h2 className="section-title">
              మీ సందేశాన్ని మాకు పంపండి
            </h2>

            <p className="section-description">
              మీ సందేహాలు, ఆలోచనలు మరియు సూచనలను
              మాతో పంచుకోండి.
            </p>
          </div>

          <div className="form-layout">
            <aside className="form-aside">
              <div className="aside-inner">
                <div className="aside-symbol">✦</div>

                <h3>
                  అక్షరాల అనుబంధం...
                  <br />
                  హృదయాల కలయిక...
                </h3>

                <p>
                  తెలుగు భాష, సాహిత్యం, సంస్కృతి మరియు
                  కళల అభివృద్ధి కోసం మనమందరం కలిసి
                  ముందుకు సాగుదాం.
                </p>

                <div className="aside-divider" />

                <div className="aside-detail">
                  <span className="aside-detail-icon">☎</span>
                  <div>
                    <strong>ఫోన్ నంబర్</strong>
                    <a href="tel:+919000343095">
                      +91 90003 43095
                    </a>
                  </div>
                </div>

                <div className="aside-detail">
                  <span className="aside-detail-icon">✉</span>
                  <div>
                    <strong>ఈమెయిల్</strong>
                    <a href="mailto:info@srisrikalavedika.org">
                      info@srisrikalavedika.org
                    </a>
                  </div>
                </div>

                <div className="aside-detail">
                  <span className="aside-detail-icon">✦</span>
                  <div>
                    <strong>సంస్థ</strong>
                    <span>శ్రీ శ్రీ కళావేదిక</span>
                  </div>
                </div>
              </div>
            </aside>

            <div className="form-card">
              <h3>సంప్రదింపు ఫారం</h3>

              <p className="form-intro">
                క్రింది వివరాలను పూరించి మీ సందేశాన్ని పంపండి.
                * గుర్తు ఉన్న వివరాలు తప్పనిసరి.
              </p>

              <form onSubmit={handleSubmit}>
                <div className="form-grid">
                  <div className="field">
                    <label htmlFor="contact-name">
                      మీ పేరు *
                    </label>

                    <input
                      id="contact-name"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="మీ పూర్తి పేరు"
                      required
                    />
                  </div>

                  <div className="field">
                    <label htmlFor="contact-phone">
                      మొబైల్ నంబర్ *
                    </label>

                    <input
                      id="contact-phone"
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

                  <div className="field full">
                    <label htmlFor="contact-email">
                      ఈమెయిల్ చిరునామా
                    </label>

                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="example@email.com"
                    />
                  </div>

                  <div className="field full">
                    <label htmlFor="contact-subject">
                      సంప్రదింపు విషయం *
                    </label>

                    <select
                      id="contact-subject"
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      required
                    >
                      <option>సాధారణ విచారణ</option>
                      <option>సభ్యత్వ వివరాలు</option>
                      <option>కార్యక్రమాల వివరాలు</option>
                      <option>సాహిత్య సహకారం</option>
                      <option>కళా ప్రదర్శనలు</option>
                      <option>సంస్థల సహకారం</option>
                      <option>ఇతర విషయాలు</option>
                    </select>
                  </div>

                  <div className="field full">
                    <label htmlFor="contact-message">
                      మీ సందేశం *
                    </label>

                    <textarea
                      id="contact-message"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="మీ సందేశాన్ని ఇక్కడ రాయండి..."
                      required
                    />
                  </div>
                </div>

                <button type="submit" className="submit-button">
                  WhatsApp ద్వారా సందేశం పంపండి →
                </button>

                {submitted && (
                  <div className="success-message" role="status">
                    WhatsApp తెరవడానికి ప్రయత్నించబడింది.
                    అక్కడ మీ సందేశాన్ని పరిశీలించి Send నొక్కండి.
                  </div>
                )}

                <p className="form-note">
                  ఈ ఫారం మీ వివరాలను WhatsApp సందేశంగా
                  రూపొందిస్తుంది. సందేశం పంపడానికి WhatsAppలో
                  Send నొక్కాలి. ఈ ఫారం వెబ్‌సైట్ డేటాబేస్‌లో
                  వివరాలను నిల్వ చేయదు.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* CONNECT WITH US */}

      <section className="connect-section">
        <div className="container">
          <div className="eyebrow">STAY CONNECTED</div>

          <h2>
            మా సాహిత్య ప్రయాణంలో భాగస్వాములు కండి
          </h2>

          <p>
            మా సాహిత్య, సాంస్కృతిక కార్యక్రమాలు మరియు
            ప్రత్యేక వీడియోలను చూడటానికి మా YouTube
            ఛానల్‌ను సందర్శించండి.
          </p>

          <a
            className="youtube-link"
            href="https://youtu.be/9FlyRpn78kA"
            target="_blank"
            rel="noreferrer"
          >
            YouTubeలో చూడండి →
          </a>
        </div>
      </section>

      {/* CLOSING */}

      <section className="closing">
        <div className="container">
          <h2>
            ప్రతిభ మీది...పట్టాభిషేకం మాది...
          </h2>

          <p>
            శ్రీ శ్రీ కళావేదిక – తెలుగు సాహిత్య,
            సాంస్కృతిక మరియు సామాజిక సేవా సంస్థ.
          </p>
        </div>
      </section>
    </main>
  );
}
