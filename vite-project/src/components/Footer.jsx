import React from "react";
import { Link } from "react-router-dom";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  return (
    <footer className="site-footer">

      <div className="footer-main">

        <div className="footer-container">

          {/* BRAND */}
          <div className="footer-brand-section">

            <Link to="/" className="footer-brand">

              <img
                src="/assets/logo.png"
                alt="శ్రీ శ్రీ కళావేదిక"
              />

              <div>
                <h3>
                  శ్రీ శ్రీ కళావేదిక
                </h3>

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

            <h4>
              త్వరిత మార్గాలు
            </h4>

            <div className="footer-links">

              <Link to="/">
                ముఖపుట
              </Link>

              <Link to="/about">
                మా గురించి
              </Link>

              <Link to="/founder">
                వ్యవస్థాపకులు
              </Link>

              <Link to="/activities">
                కార్యక్రమాలు
              </Link>

              <Link to="/awards">
                పురస్కారాలు
              </Link>

              <Link to="/gallery">
                చిత్రమాలిక
              </Link>

            </div>

          </div>


          {/* INFORMATION */}
          <div className="footer-column">

            <h4>
              సమాచారం
            </h4>

            <div className="footer-links">

              <Link to="/executive-members">
                కార్యవర్గం
              </Link>

              <Link to="/committee-members">
                కమిటీ సభ్యులు
              </Link>

              <Link to="/events">
                వేడుకలు
              </Link>

              <Link to="/publications">
                ప్రచురణలు
              </Link>

              <Link to="/membership">
                సభ్యత్వం
              </Link>

              <Link to="/contact">
                సంప్రదించండి
              </Link>

            </div>

          </div>


          {/* CONTACT */}
          <div className="footer-column">

            <h4>
              మాతో కలవండి
            </h4>

            <p className="footer-contact-text">
              తెలుగు సాహిత్య కుటుంబంలో
              మీరూ భాగస్వాములు కండి.
            </p>

            <div className="footer-contact">

              <span>
                ఫోన్
              </span>

              <p>
                
+91 9676272283
              </p>

            </div>

            <div className="footer-contact">

              <span>
                ఇమెయిల్
              </span>

              <p>
                info@srisrikalavedika.org
              </p>

            </div>

  

          </div>

        </div>

      </div>


      {/* BOTTOM */}
      <div className="footer-bottom">

        <div className="footer-bottom-container">

          <p>
            © {new Date().getFullYear()}
            {" "}
            శ్రీ శ్రీ కళావేదిక.
            సర్వహక్కులు భద్రం.
          </p>

          <button
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
          >
            పైకి
            <ArrowUp size={15} />
          </button>

        </div>

      </div>


      <style>{`

        .site-footer {
          background: #321019;
          color: white;
        }

        .footer-main {
          padding: 75px 0 60px;
          border-bottom: 1px solid #ffffff15;
        }

        .footer-container {
          width: min(1180px, 92%);
          margin: auto;

          display: grid;
          grid-template-columns:
            1.5fr
            1fr
            1fr
            1.2fr;

          gap: 50px;
        }

        /* BRAND */

        .footer-brand {
          display: flex;
          align-items: center;
          gap: 15px;
          color: white;
        }

        .footer-brand img {
          width: 65px;
          height: 65px;
          object-fit: contain;
        }

        .footer-brand h3 {
          margin: 0 0 5px;
          font-size: 22px;
          font-weight: 600;
        }

        .footer-brand p {
          margin: 0;
          color: #cdbbb3;
          font-size: 10px;
          line-height: 1.7;
        }

        .footer-description {
          max-width: 350px;
          color: #cbb9b1;
          font-size: 13px;
          line-height: 2;
          margin-top: 25px;
        }

        /* COLUMNS */

        .footer-column h4 {
          color: #d8b66c;
          font-size: 14px;
          font-weight: 500;
          margin: 0 0 22px;
        }

        .footer-links {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .footer-links a {
          color: #d0c1ba;
          font-size: 12px;
          transition: .2s;
        }

        .footer-links a:hover {
          color: #d8b66c;
          transform: translateX(4px);
        }

        /* CONTACT */

        .footer-contact-text {
          color: #cbb9b1;
          font-size: 12px;
          line-height: 1.9;
          max-width: 260px;
        }

        .footer-contact {
          margin-top: 18px;
        }

        .footer-contact span {
          color: #9f8d85;
          font-size: 9px;
          display: block;
          margin-bottom: 3px;
        }

        .footer-contact p {
          color: #e2d8d3;
          margin: 0;
          font-size: 12px;
        }

        /* SOCIAL */

        .footer-socials {
          display: flex;
          gap: 8px;
          margin-top: 22px;
        }

        .footer-socials a {
          width: 34px;
          height: 34px;
          border: 1px solid #76515b;
          display: grid;
          place-items: center;
          color: #d8b66c;
          font-size: 9px;
          transition: .25s;
        }

        .footer-socials a:hover {
          background: #d8b66c;
          color: #321019;
          border-color: #d8b66c;
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
        }

        .footer-bottom p {
          color: #9f8d85;
          font-size: 10px;
          margin: 0;
        }

        .footer-bottom button {
          border: 1px solid #76515b;
          background: transparent;
          color: #d8b66c;
          padding: 7px 12px;

          display: flex;
          align-items: center;
          gap: 6px;

          cursor: pointer;
          font-family: inherit;
          font-size: 10px;
        }

        .footer-bottom button:hover {
          background: #d8b66c;
          color: #321019;
        }

        /* TABLET */

        @media (max-width: 900px) {

          .footer-container {
            grid-template-columns: 1fr 1fr;
          }

        }

        /* MOBILE */

        @media (max-width: 600px) {

          .footer-main {
            padding: 55px 0 40px;
          }

          .footer-container {
            grid-template-columns: 1fr;
            gap: 35px;
          }

          .footer-bottom-container {
            flex-direction: column;
            align-items: flex-start;
            gap: 15px;
          }

        }

      `}</style>

    </footer>
  );
}