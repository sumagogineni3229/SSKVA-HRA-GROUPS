
import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Founder from "./pages/Founder";
import ExecutiveMembers from "./pages/ExecutiveMembers";
import Activities from "./pages/Activities";
import Awards from "./pages/Awards";
import Gallery from "./pages/Gallery";
import Events from "./pages/Events";
import Publications from "./pages/Publications";
import Membership from "./pages/Membership";
import Contact from "./pages/Contact";

import AndhraPradeshChapters from "./pages/AndhraPradeshChapters";
import TelanganaChapters from "./pages/TelanganaChapters";

export default function App() {
  const whatsappNumber = "919000343095";

  const whatsappMessage =
    "నమస్కారం శ్రీ శ్రీ కళావేదిక గురించి మరింత సమాచారం కావాలి.";

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  // GOOGLE TRANSLATE INITIALIZATION
  useEffect(() => {
    if (
      document.getElementById("google-translate-script") ||
      window.googleTranslateElementInit
    ) {
      return;
    }

    window.googleTranslateElementInit = () => {
      const container = document.getElementById(
        "google_translate_element"
      );

      if (
        container &&
        window.google?.translate?.TranslateElement &&
        !container.querySelector("select")
      ) {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "te",
            includedLanguages: "te,en",
            autoDisplay: false
          },
          "google_translate_element"
        );
      }
    };

    const script = document.createElement("script");

    script.id = "google-translate-script";
    script.src =
      "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;

    document.body.appendChild(script);
  }, []);

  return (
    <>
      {/* HEADER */}
      <Header />

      {/* MAIN WEBSITE */}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/about" element={<About />} />

          <Route path="/founder" element={<Founder />} />

          <Route
            path="/executive-members"
            element={<ExecutiveMembers />}
          />

          <Route path="/activities" element={<Activities />} />

          <Route path="/awards" element={<Awards />} />

          <Route
            path="/andhra-pradesh-chapters"
            element={<AndhraPradeshChapters />}
          />

          <Route
            path="/telangana-chapters"
            element={<TelanganaChapters />}
          />

          <Route path="/gallery" element={<Gallery />} />

          <Route path="/events" element={<Events />} />

          <Route path="/publications" element={<Publications />} />

          <Route path="/membership" element={<Membership />} />

          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      {/* FOOTER */}
      <Footer />

      {/* FLOATING LANGUAGE AND WHATSAPP */}
      <div className="kalavedika-floating-tools">

        {/* LANGUAGE SELECTOR */}
        <div className="kalavedika-language">

          {/* PREMIUM GLOBE ICON */}
          <svg
            className="language-globe"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <circle cx="12" cy="12" r="9" />

            <path d="M3 12H21" />

            <path d="M12 3C14.3 5.5 15.5 8.6 15.5 12C15.5 15.4 14.3 18.5 12 21" />

            <path d="M12 3C9.7 5.5 8.5 8.6 8.5 12C8.5 15.4 9.7 18.5 12 21" />
          </svg>

          {/* GOOGLE TRANSLATE */}
          <div id="google_translate_element">
            <span className="language-loading">
              తెలుగు / English
            </span>
          </div>

        </div>

        {/* WHATSAPP BUTTON */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="kalavedika-whatsapp"
          aria-label="Contact Sri Sri Kalavedika on WhatsApp"
        >

          <span className="whatsapp-icon">

            <svg
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <circle
                cx="16"
                cy="16"
                r="16"
                fill="currentColor"
              />

              <path
                fill="#25D366"
                d="M23.55 8.43A10.58 10.58 0 0 0 16.01 5.3c-5.85 0-10.61 4.76-10.61 10.61 0 1.87.49 3.69 1.42 5.3L5.3 26.7l5.63-1.48a10.57 10.57 0 0 0 5.08 1.3h.01c5.85 0 10.61-4.76 10.61-10.61 0-2.84-1.1-5.5-3.08-7.48Z"
              />

              <path
                fill="#ffffff"
                d="M16.02 24.55h-.01a8.62 8.62 0 0 1-4.39-1.2l-.31-.18-3.34.88.89-3.25-.2-.33a8.61 8.61 0 1 1 7.36 4.08Zm4.73-6.45c-.26-.13-1.53-.76-1.77-.85-.24-.09-.41-.13-.58.13-.17.26-.66.85-.81 1.02-.15.17-.3.2-.56.07-.26-.13-1.12-.41-2.13-1.31-.79-.7-1.32-1.57-1.47-1.83-.15-.26-.02-.4.11-.53.12-.12.26-.3.39-.45.13-.15.17-.26.26-.43.09-.17.04-.32-.02-.45-.07-.13-.58-1.4-.8-1.92-.21-.5-.43-.44-.58-.45h-.5c-.17 0-.45.06-.69.32-.24.26-.91.89-.91 2.18s.93 2.53 1.06 2.7c.13.17 1.83 2.8 4.43 3.92.62.27 1.1.43 1.47.55.62.2 1.18.17 1.62.1.5-.08 1.53-.63 1.74-1.24.22-.61.22-1.13.15-1.24-.06-.11-.24-.17-.5-.3Z"
              />
            </svg>

          </span>

          <span className="whatsapp-text">
            వాట్సాప్ ద్వారా సంప్రదించండి
          </span>

        </a>
      </div>

      {/* GLOBAL STYLES */}
      <style>{`

        /* FLOATING CONTAINER */

        .kalavedika-floating-tools {
          position: fixed;
          right: 24px;
          bottom: 24px;
          z-index: 99999;

          display: flex;
          align-items: center;
          gap: 11px;
        }

        /* LANGUAGE SELECTOR */

        .kalavedika-language {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 9px;

          padding: 10px 14px;

          background: linear-gradient(
            135deg,
            #4B1025,
            #701D38
          );

          border: 1px solid #D5AD65;
          border-radius: 50px;

          box-shadow:
            0 6px 20px rgba(75,16,37,.22);

          color: #E8C98D;

          transition: all .3s ease;
        }

        .kalavedika-language:hover {
          border-color: #F3DDAE;

          box-shadow:
            0 8px 24px rgba(75,16,37,.32);

          transform: translateY(-2px);
        }

        /* GLOBE ICON */

        .language-globe {
          width: 20px;
          height: 20px;

          flex-shrink: 0;

          stroke: #D5AD65;
          stroke-width: 1.5;
          stroke-linecap: round;
          stroke-linejoin: round;

          transition: transform .4s ease;
        }

        .kalavedika-language:hover .language-globe {
          transform: rotate(25deg);
          stroke: #F3DDAE;
        }

        /* GOOGLE TRANSLATE */

        .kalavedika-language .goog-te-gadget {
          color: transparent !important;
          font-size: 0 !important;
        }

        .kalavedika-language .goog-te-gadget span,
        .kalavedika-language .goog-logo-link {
          display: none !important;
        }

        .kalavedika-language select.goog-te-combo {
          margin: 0 !important;
          padding: 3px;

          border: none;
          outline: none;

          background: transparent;
          color: #F3DDAE;

          font-family: inherit;
          font-size: 13px;
          font-weight: 600;

          cursor: pointer;
          max-width: 115px;
        }

        .kalavedika-language select option {
          background: #4B1025;
          color: #ffffff;
        }

        .language-loading {
          color: #F3DDAE;
          font-size: 12px;
          white-space: nowrap;
        }

        /* WHATSAPP BUTTON */

        .kalavedika-whatsapp {
          display: flex;
          align-items: center;
          gap: 10px;

          padding: 7px 18px 7px 7px;

          background: #25D366;
          color: #ffffff;

          text-decoration: none;
          border-radius: 50px;

          font-family:
            "Noto Sans Telugu",
            "Nirmala UI",
            sans-serif;

          font-size: 13px;
          font-weight: 600;

          box-shadow:
            0 8px 25px rgba(37,211,102,.28);

          transition:
            transform .3s ease,
            box-shadow .3s ease;
        }

        .kalavedika-whatsapp:hover {
          transform: translateY(-4px);

          box-shadow:
            0 14px 32px rgba(37,211,102,.38);
        }

        .whatsapp-icon,
        .whatsapp-icon svg {
          width: 43px;
          height: 43px;

          display: block;
          flex-shrink: 0;
        }

        .whatsapp-text {
          white-space: nowrap;
        }

        /* GOOGLE TRANSLATE BANNER */

        body {
          top: 0 !important;
        }

        .goog-te-banner-frame {
          display: none !important;
        }

        .skiptranslate iframe {
          visibility: hidden !important;
        }

        /* MOBILE RESPONSIVE */

        @media (max-width: 600px) {

          .kalavedika-floating-tools {
            right: 12px;
            bottom: 16px;
            gap: 7px;
          }

          .kalavedika-language {
            padding: 9px 11px;
            gap: 7px;
          }

          .language-globe {
            width: 18px;
            height: 18px;
          }

          .kalavedika-language select.goog-te-combo {
            max-width: 95px;
            font-size: 12px;
          }

          .kalavedika-whatsapp {
            width: 52px;
            height: 52px;
            padding: 0;

            justify-content: center;
          }

          .whatsapp-icon,
          .whatsapp-icon svg {
            width: 46px;
            height: 46px;
          }

          .whatsapp-text {
            display: none;
          }
        }

        /* SMALL MOBILE */

        @media (max-width: 380px) {

          .kalavedika-floating-tools {
            right: 8px;
            gap: 5px;
          }

          .kalavedika-language {
            padding: 8px 9px;
          }

          .kalavedika-whatsapp {
            width: 48px;
            height: 48px;
          }
        }

      `}</style>
    </>
  );
}
