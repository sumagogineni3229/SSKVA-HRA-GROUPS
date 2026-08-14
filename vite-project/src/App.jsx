import React from "react";
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

  /*
   * =========================================================
   * WHATSAPP
   * =========================================================
   */

  const whatsappNumber = "919000343095";

  const whatsappMessage =
    "నమస్కారం శ్రీ శ్రీ కళావేదిక గురించి మరింత సమాచారం కావాలి.";

  const whatsappUrl =
    `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      whatsappMessage
    )}`;


  return (
    <>

      {/* =====================================================
          HEADER
      ===================================================== */}

      <Header />


      {/* =====================================================
          MAIN CONTENT
      ===================================================== */}

      <main>

        <Routes>

          {/* HOME */}

          <Route
            path="/"
            element={<Home />}
          />


          {/* ABOUT */}

          <Route
            path="/about"
            element={<About />}
          />


          {/* FOUNDER */}

          <Route
            path="/founder"
            element={<Founder />}
          />


          {/* EXECUTIVE MEMBERS */}

          <Route
            path="/executive-members"
            element={<ExecutiveMembers />}
          />


          {/* ACTIVITIES */}

          <Route
            path="/activities"
            element={<Activities />}
          />


          {/* AWARDS */}

          <Route
            path="/awards"
            element={<Awards />}
          />


          {/* ANDHRA PRADESH CHAPTERS */}

          <Route
            path="/andhra-pradesh-chapters"
            element={<AndhraPradeshChapters />}
          />


          {/* TELANGANA CHAPTERS */}

          <Route
            path="/telangana-chapters"
            element={<TelanganaChapters />}
          />


          {/* GALLERY */}

          <Route
            path="/gallery"
            element={<Gallery />}
          />


          {/* EVENTS */}

          <Route
            path="/events"
            element={<Events />}
          />


          {/* PUBLICATIONS */}

          <Route
            path="/publications"
            element={<Publications />}
          />


          {/* MEMBERSHIP */}

          <Route
            path="/membership"
            element={<Membership />}
          />


          {/* CONTACT */}

          <Route
            path="/contact"
            element={<Contact />}
          />

        </Routes>

      </main>


      {/* =====================================================
          FOOTER
      ===================================================== */}

      <Footer />


      {/* =====================================================
          PREMIUM FLOATING WHATSAPP BUTTON
      ===================================================== */}

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="kalavedika-whatsapp"
        aria-label="వాట్సాప్ ద్వారా సంప్రదించండి"
      >

        {/* WHATSAPP ICON */}

        <span className="whatsapp-icon">

          <svg
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >

            {/* Outer WhatsApp circle */}

            <circle
              cx="16"
              cy="16"
              r="16"
              fill="currentColor"
            />


            {/* Inner WhatsApp shape */}

            <path
              fill="#25D366"
              d="
                M23.55 8.43
                A10.58 10.58 0 0 0 16.01 5.3
                c-5.85 0-10.61 4.76-10.61 10.61
                0 1.87.49 3.69 1.42 5.3
                L5.3 26.7
                l5.63-1.48
                a10.57 10.57 0 0 0 5.08 1.3
                h.01
                c5.85 0 10.61-4.76 10.61-10.61
                0-2.84-1.1-5.5-3.08-7.48Z
              "
            />


            {/* WhatsApp phone/chat symbol */}

            <path
              fill="#ffffff"
              d="
                M16.02 24.55
                h-.01
                a8.62 8.62 0 0 1-4.39-1.2
                l-.31-.18
                -3.34.88
                .89-3.25
                -.2-.33
                a8.61 8.61 0 1 1 7.36 4.08Zm4.73-6.45
                c-.26-.13-1.53-.76-1.77-.85
                -.24-.09-.41-.13-.58.13
                -.17.26-.66.85-.81 1.02
                -.15.17-.3.2-.56.07
                -.26-.13-1.12-.41-2.13-1.31
                -.79-.7-1.32-1.57-1.47-1.83
                -.15-.26-.02-.4.11-.53
                .12-.12.26-.3.39-.45
                .13-.15.17-.26.26-.43
                .09-.17.04-.32-.02-.45
                -.07-.13-.58-1.4-.8-1.92
                -.21-.5-.43-.44-.58-.45
                h-.5
                c-.17 0-.45.06-.69.32
                -.24.26-.91.89-.91 2.18
                s.93 2.53 1.06 2.7
                c.13.17 1.83 2.8 4.43 3.92
                .62.27 1.1.43 1.47.55
                .62.2 1.18.17 1.62.1
                .5-.08 1.53-.63 1.74-1.24
                .22-.61.22-1.13.15-1.24
                -.06-.11-.24-.17-.5-.3Z
              "
            />

          </svg>

        </span>


        {/* BUTTON TEXT */}

        <span className="whatsapp-text">
          వాట్సాప్ ద్వారా సంప్రదించండి
        </span>

      </a>


      {/* =====================================================
          WHATSAPP STYLES
      ===================================================== */}

      <style>{`

        /* ===================================================
           FLOATING BUTTON
        =================================================== */

        .kalavedika-whatsapp {

          position: fixed;

          right: 24px;

          bottom: 24px;

          z-index: 99999;

          display: flex;

          align-items: center;

          gap: 11px;

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

          line-height: 1.4;

          box-shadow:
            0 8px 25px
            rgba(37, 211, 102, 0.28);

          transition:
            transform 0.3s ease,
            box-shadow 0.3s ease;

        }


        /* ===================================================
           ICON
        =================================================== */

        .whatsapp-icon {

          width: 43px;

          height: 43px;

          display: flex;

          align-items: center;

          justify-content: center;

          flex-shrink: 0;

          color: #ffffff;

        }


        .whatsapp-icon svg {

          width: 43px;

          height: 43px;

          display: block;

        }


        /* ===================================================
           TEXT
        =================================================== */

        .whatsapp-text {

          white-space: nowrap;

        }


        /* ===================================================
           HOVER
        =================================================== */

        .kalavedika-whatsapp:hover {

          transform:
            translateY(-4px);

          box-shadow:
            0 14px 32px
            rgba(37, 211, 102, 0.38);

        }


        /* ===================================================
           MOBILE
        =================================================== */

        @media (max-width: 600px) {

          .kalavedika-whatsapp {

            right: 18px;

            bottom: 18px;

            width: 58px;

            height: 58px;

            padding: 0;

            display: flex;

            align-items: center;

            justify-content: center;

            border-radius: 50%;

            box-shadow:
              0 8px 25px
              rgba(37, 211, 102, 0.35);

          }


          .whatsapp-icon {

            width: 50px;

            height: 50px;

          }


          .whatsapp-icon svg {

            width: 50px;

            height: 50px;

          }


          .whatsapp-text {

            display: none;

          }

        }


        /* ===================================================
           SMALL MOBILE
        =================================================== */

        @media (max-width: 380px) {

          .kalavedika-whatsapp {

            right: 14px;

            bottom: 14px;

            width: 54px;

            height: 54px;

          }


          .whatsapp-icon {

            width: 47px;

            height: 47px;

          }


          .whatsapp-icon svg {

            width: 47px;

            height: 47px;

          }

        }

      `}</style>

    </>
  );
}