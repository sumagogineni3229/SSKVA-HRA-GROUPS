
import React from "react";
import { Link } from "react-router-dom";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  // Scroll to top whenever a footer navigation link is clicked
  const handleFooterNavigation = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  };

  const footerLink = (to, label) => (
    <Link to={to} onClick={handleFooterNavigation}>
      {label}
    </Link>
  );

  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-container">

          {/* BRAND */}
          <div className="footer-brand-section">
            <Link
              to="/"
              className="footer-brand"
              onClick={handleFooterNavigation}
            >
              <img
                src="/assets/logo.png"
                alt="శ్రీ శ్రీ కళావేదిక"
              />

              <div>
                <h3>శ్రీ శ్రీ కళావేదిక</h3>
                <p>
                  అంతర్జాతీయ సాహిత్య,
                  సాంస్కృతిక & సామాజిక సేవా సంస్థ
                </p>
              </div>
            </Link>

            <p className="footer-description">
              తెలుగు భాష, సాహిత్యం, సంస్కృతి,
              కళలు మరియు సామాజిక సేవలను
              ఒకే వేదికపై కలుపుతున్న సాహిత్య కుటుంబం.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div className="footer-column">
            <h4>త్వరిత మార్గాలు</h4>

            <div className="footer-links">
              {footerLink("/", "ముఖపుట")}
              {footerLink("/about", "మా గురించి")}
              {footerLink("/founder", "వ్యవస్థాపకులు")}
              {footerLink("/activities", "కార్యక్రమాలు")}
              {footerLink("/awards", "పురస్కారాలు")}
              {footerLink("/gallery", "చిత్రమాలిక")}
            </div>
          </div>

          {/* INFORMATION */}
          <div className="footer-column">
            <h4>సమాచారం</h4>

            <div className="footer-links">
              {footerLink("/executive-members", "కార్యవర్గం")}
              {footerLink("/committee-members", "కమిటీ సభ్యులు")}
              {footerLink("/events", "వేడుకలు")}
              {footerLink("/publications", "ప్రచురణలు")}
              {footerLink("/membership", "సభ్యత్వం")}
              {footerLink("/contact", "సంప్రదించండి")}
            </div>
          </div>

          {/* CONTACT */}
          <div className="footer-column">
            <h4>మాతో కలవండి</h4>

            <p className="footer-contact-text">
              తెలుగు సాహిత్య కుటుంబంలో
              మీరూ భాగస్వాములు కండి.
            </p>

            <div className="footer-contact">
              <span>ఫోన్</span>
              <p>+91 9676272283</p>
            </div>

            <div className="footer-contact">
              <span>ఇమెయిల్</span>
              <p>info@srisrikalavedika.org</p>
            </div>
          </div>

        </div>
      </div>

      {/* FOOTER BOTTOM */}
      <div className="footer-bottom">
        <div className="footer-bottom-container">
          <p>
            © {new Date().getFullYear()} శ్రీ శ్రీ కళావేదిక.
            సర్వహక్కులు భద్రం.
          </p>

          <button
            type="button"
            onClick={() =>
              window.scrollTo({
                top: 0,
                left: 0,
                behavior: "smooth",
              })
            }
          >
            పైకి
            <ArrowUp size={15} />
          </button>
        </div>
      </div>

      {/* FOOTER STYLES */}
      <style>{`
        .site-footer {
          --footer-maroon: #321019;
          --footer-gold: #D8B66C;
          --footer-text: #D0C1BA;

          background: var(--footer-maroon);
          color: #fff;
          font-family: "Inter", "Noto Sans Telugu", sans-serif;
        }

        .site-footer * {
          box-sizing: border-box;
        }

        .footer-main {
          padding: 75px 0 60px;
          border-bottom: 1px solid rgba(255,255,255,.09);
        }

        .footer-container {
          width: min(1180px, 92%);
          margin: auto;
          display: grid;
          grid-template-columns: 1.5fr 1fr 1fr 1.2fr;
          gap: 50px;
        }

        /* BRAND */
        .footer-brand {
          display: flex;
          align-items: center;
          gap: 15px;
          color: white;
          text-decoration: none;
        }

        .footer-brand img {
          width: 65px;
          height: 65px;
          object-fit: contain;
          flex-shrink: 0;
        }

        .footer-brand h3 {
          margin: 0 0 5px;
          color: #F1D9A5;
          font-family: "Playfair Display", "Noto Serif Telugu", serif;
          font-size: 21px;
          font-weight: 500;
          line-height: 1.5;
        }

        .footer-brand p {
          margin: 0;
          color: #CDBBB3;
          font-size: 10px;
          line-height: 1.8;
        }

        .footer-description {
          max-width: 350px;
          color: #CBB9B1;
          font-size: 13px;
          line-height: 2;
          margin-top: 25px;
        }

        /* COLUMNS */
        .footer-column h4 {
          color: var(--footer-gold);
          font-family: "Playfair Display", "Noto Serif Telugu", serif;
          font-size: 16px;
          font-weight: 500;
          margin: 0 0 22px;
        }

        .footer-links {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .footer-links a {
          width: fit-content;
          color: var(--footer-text);
          font-family: "Inter", "Noto Sans Telugu", sans-serif;
          font-size: 12px;
          line-height: 1.8;
          text-decoration: none;
          transition: color .2s ease, transform .2s ease;
        }

        .footer-links a:hover {
          color: var(--footer-gold);
          transform: translateX(4px);
        }

        /* CONTACT */
        .footer-contact-text {
          color: #CBB9B1;
          font-size: 12px;
          line-height: 1.9;
          max-width: 260px;
        }

        .footer-contact {
          margin-top: 18px;
        }

        .footer-contact span {
          color: #B49C91;
          font-size: 10px;
          display: block;
          margin-bottom: 5px;
        }

        .footer-contact p {
          color: #E2D8D3;
          margin: 0;
          font-size: 12px;
          overflow-wrap: anywhere;
        }

        /* BOTTOM */
        .footer-bottom {
          padding: 18px 0;
        }

        .footer-bottom-container {
          width: min(1180px, 92%);
          margin: auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 15px;
        }

        .footer-bottom p {
          color: #B6A49C;
          font-size: 11px;
          line-height: 1.8;
          margin: 0;
        }

        .footer-bottom button {
          border: 1px solid #76515B;
          border-radius: 3px;
          background: transparent;
          color: var(--footer-gold);
          padding: 8px 13px;
          display: flex;
          align-items: center;
          gap: 7px;
          cursor: pointer;
          font-family: inherit;
          font-size: 11px;
          transition: .25s ease;
        }

        .footer-bottom button:hover {
          background: var(--footer-gold);
          color: var(--footer-maroon);
          border-color: var(--footer-gold);
        }

        /* TABLET */
        @media (max-width: 900px) {
          .footer-container {
            grid-template-columns: 1fr 1fr;
            gap: 40px;
          }
        }

        /* MOBILE */
        @media (max-width: 600px) {
          .footer-main {
            padding: 50px 0 40px;
          }

          .footer-container {
            grid-template-columns: 1fr;
            gap: 32px;
          }

          .footer-bottom-container {
            flex-direction: column;
            align-items: flex-start;
          }

          .footer-brand img {
            width: 58px;
            height: 58px;
          }
        }
      `}</style>
    </footer>
  );
}
