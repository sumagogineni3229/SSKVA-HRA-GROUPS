import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "../assets/logo.png";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);

  const closeMenu = () => {
    setMobileOpen(false);
    setAboutOpen(false);
  };

  return (
    <>
      <header className="kalavedika-header">

        {/* =====================================================
            TOP BAR
        ===================================================== */}

        <div className="kalavedika-topbar">
          <div className="kalavedika-container topbar-content">

            <span>
              అంతర్జాతీయ సాహిత్య • సాంస్కృతిక • సామాజిక సేవా సంస్థ
            </span>

            <span className="topbar-right">
              తెలుగు భాష • తెలుగు సంస్కృతి • తెలుగు కళ
            </span>

          </div>
        </div>


        {/* =====================================================
            MAIN HEADER
        ===================================================== */}

        <div className="kalavedika-main">

          <div className="kalavedika-container header-content">

            {/* =================================================
                LOGO + BRAND
            ================================================= */}

            <Link
              to="/"
              className="kalavedika-brand"
              onClick={closeMenu}
            >

              <div className="logo-wrapper">
                <img
                  src={logo}
                  alt="శ్రీ శ్రీ కళావేదిక"
                />
              </div>

              <div className="brand-content">

                <h1>
                  శ్రీ శ్రీ కళావేదిక
                </h1>

                <p>
                  అంతర్జాతీయ సాహిత్య,
                  సాంస్కృతిక & సామాజిక సేవా సంస్థ
                </p>

              </div>

            </Link>


            {/* =================================================
                DESKTOP NAVIGATION
            ================================================= */}

            <nav className="desktop-navigation">

              {/* HOME */}

              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  isActive
                    ? "navigation-link active"
                    : "navigation-link"
                }
              >
                ముఖపుట
              </NavLink>


              {/* =================================================
                  ABOUT DROPDOWN
              ================================================= */}

              <div className="navigation-dropdown">

                <button
                  type="button"
                  className="dropdown-button"
                >

                  <span>
                    మా గురించి
                  </span>

                  <ChevronDown size={14} />

                </button>


                <div className="dropdown-content">

                  <Link to="/about">
                    మా గురించి
                  </Link>

                  <Link to="/founder">
                    వ్యవస్థాపకులు
                  </Link>

                  <Link to="/executive-members">
                    కార్యవర్గం
                  </Link>

                </div>

              </div>


              {/* ACTIVITIES */}

              <NavLink
                to="/activities"
                className={({ isActive }) =>
                  isActive
                    ? "navigation-link active"
                    : "navigation-link"
                }
              >
                కార్యక్రమాలు
              </NavLink>


              {/* AWARDS */}

              <NavLink
                to="/awards"
                className={({ isActive }) =>
                  isActive
                    ? "navigation-link active"
                    : "navigation-link"
                }
              >
                పురస్కారాలు
              </NavLink>


              {/* ANDHRA PRADESH */}

              <NavLink
                to="/andhra-pradesh-chapters"
                className={({ isActive }) =>
                  isActive
                    ? "navigation-link active"
                    : "navigation-link"
                }
              >
                ఆంధ్రప్రదేశ్ శాఖలు
              </NavLink>


              {/* TELANGANA */}

              <NavLink
                to="/telangana-chapters"
                className={({ isActive }) =>
                  isActive
                    ? "navigation-link active"
                    : "navigation-link"
                }
              >
                తెలంగాణ శాఖలు
              </NavLink>


              {/* GALLERY */}

              <NavLink
                to="/gallery"
                className={({ isActive }) =>
                  isActive
                    ? "navigation-link active"
                    : "navigation-link"
                }
              >
                చిత్రమాలిక
              </NavLink>


              {/* EVENTS */}

              <NavLink
                to="/events"
                className={({ isActive }) =>
                  isActive
                    ? "navigation-link active"
                    : "navigation-link"
                }
              >
                వేడుకలు
              </NavLink>


              {/* PUBLICATIONS */}

              <NavLink
                to="/publications"
                className={({ isActive }) =>
                  isActive
                    ? "navigation-link active"
                    : "navigation-link"
                }
              >
                ప్రచురణలు
              </NavLink>


              {/* MEMBERSHIP */}

              <NavLink
                to="/membership"
                className={({ isActive }) =>
                  isActive
                    ? "navigation-link membership-button active"
                    : "navigation-link membership-button"
                }
              >
                సభ్యత్వం
              </NavLink>


              {/* CONTACT */}

              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive
                    ? "navigation-link active"
                    : "navigation-link"
                }
              >
                సంప్రదించండి
              </NavLink>

            </nav>


            {/* =================================================
                MOBILE BUTTON
            ================================================= */}

            <button
              type="button"
              className="mobile-menu-button"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="మెను తెరవండి"
            >

              {mobileOpen ? (
                <X size={24} />
              ) : (
                <Menu size={24} />
              )}

            </button>

          </div>

        </div>


        {/* =====================================================
            MOBILE NAVIGATION
        ===================================================== */}

        <div
          className={
            mobileOpen
              ? "mobile-navigation open"
              : "mobile-navigation"
          }
        >

          <div className="kalavedika-container mobile-navigation-inner">

            {/* HOME */}

            <NavLink
              to="/"
              end
              onClick={closeMenu}
              className={({ isActive }) =>
                isActive
                  ? "mobile-link active"
                  : "mobile-link"
              }
            >
              ముఖపుట
            </NavLink>


            {/* ABOUT */}

            <div className="mobile-dropdown">

              <button
                type="button"
                className="mobile-dropdown-button"
                onClick={() => setAboutOpen(!aboutOpen)}
              >

                <span>
                  మా గురించి
                </span>

                <ChevronDown
                  size={18}
                  className={
                    aboutOpen
                      ? "chevron-rotate"
                      : ""
                  }
                />

              </button>


              <div
                className={
                  aboutOpen
                    ? "mobile-submenu show"
                    : "mobile-submenu"
                }
              >

                <Link
                  to="/about"
                  onClick={closeMenu}
                >
                  మా గురించి
                </Link>

                <Link
                  to="/founder"
                  onClick={closeMenu}
                >
                  వ్యవస్థాపకులు
                </Link>

                <Link
                  to="/executive-members"
                  onClick={closeMenu}
                >
                  కార్యవర్గం
                </Link>

              </div>

            </div>


            {/* ACTIVITIES */}

            <NavLink
              to="/activities"
              onClick={closeMenu}
              className={({ isActive }) =>
                isActive
                  ? "mobile-link active"
                  : "mobile-link"
              }
            >
              కార్యక్రమాలు
            </NavLink>


            {/* AWARDS */}

            <NavLink
              to="/awards"
              onClick={closeMenu}
              className={({ isActive }) =>
                isActive
                  ? "mobile-link active"
                  : "mobile-link"
              }
            >
              పురస్కారాలు
            </NavLink>


            {/* ANDHRA PRADESH */}

            <NavLink
              to="/andhra-pradesh-chapters"
              onClick={closeMenu}
              className={({ isActive }) =>
                isActive
                  ? "mobile-link active"
                  : "mobile-link"
              }
            >
              ఆంధ్రప్రదేశ్ శాఖలు
            </NavLink>


            {/* TELANGANA */}

            <NavLink
              to="/telangana-chapters"
              onClick={closeMenu}
              className={({ isActive }) =>
                isActive
                  ? "mobile-link active"
                  : "mobile-link"
              }
            >
              తెలంగాణ శాఖలు
            </NavLink>


            {/* GALLERY */}

            <NavLink
              to="/gallery"
              onClick={closeMenu}
              className={({ isActive }) =>
                isActive
                  ? "mobile-link active"
                  : "mobile-link"
              }
            >
              చిత్రమాలిక
            </NavLink>


            {/* EVENTS */}

            <NavLink
              to="/events"
              onClick={closeMenu}
              className={({ isActive }) =>
                isActive
                  ? "mobile-link active"
                  : "mobile-link"
              }
            >
              వేడుకలు
            </NavLink>


            {/* PUBLICATIONS */}

            <NavLink
              to="/publications"
              onClick={closeMenu}
              className={({ isActive }) =>
                isActive
                  ? "mobile-link active"
                  : "mobile-link"
              }
            >
              ప్రచురణలు
            </NavLink>


            {/* MEMBERSHIP */}

            <NavLink
              to="/membership"
              onClick={closeMenu}
              className="mobile-link mobile-membership"
            >
              సభ్యత్వం
            </NavLink>


            {/* CONTACT */}

            <NavLink
              to="/contact"
              onClick={closeMenu}
              className={({ isActive }) =>
                isActive
                  ? "mobile-link active"
                  : "mobile-link"
              }
            >
              సంప్రదించండి
            </NavLink>

          </div>

        </div>

      </header>


      {/* =====================================================
          CSS
      ===================================================== */}

      <style>{`

        /* ===================================================
           TELUGU WEBSITE FONT
        =================================================== */

        @import url(
          'https://fonts.googleapis.com/css2?family=Noto+Sans+Telugu:wght@400;500;600;700&family=Noto+Serif+Telugu:wght@400;500;600;700&display=swap'
        );


        /* ===================================================
           GLOBAL HEADER FONT
        =================================================== */

        .kalavedika-header,
        .kalavedika-header *,
        .kalavedika-header button {

          font-family:
            "Noto Serif Telugu",
            "Nirmala UI",
            "Gautami",
            serif;

          -webkit-font-smoothing:
            antialiased;

          text-rendering:
            optimizeLegibility;

        }


        /* ===================================================
           CONTAINER
        =================================================== */

        .kalavedika-container {

          width:
            min(1380px, 94%);

          margin:
            0 auto;

        }


        /* ===================================================
           HEADER
        =================================================== */

        .kalavedika-header {

          width:
            100%;

          position:
            relative;

          z-index:
            9999;

          background:
            #fffaf3;

        }


        /* ===================================================
           TOP BAR
        =================================================== */

        .kalavedika-topbar {

          height:
            34px;

          background:
            #351019;

          color:
            #e5d7cf;

        }


        .topbar-content {

          height:
            100%;

          display:
            flex;

          align-items:
            center;

          justify-content:
            space-between;

          font-family:
            "Noto Sans Telugu",
            sans-serif;

          font-size:
            10px;

          line-height:
            1.5;

        }


        .topbar-right {

          color:
            #dfc27d;

        }


        /* ===================================================
           MAIN HEADER
        =================================================== */

        .kalavedika-main {

          height:
            92px;

          background:
            rgba(255,250,243,.98);

          border-bottom:
            1px solid #e3d7ca;

          box-shadow:
            0 5px 24px
            rgba(55,25,15,.06);

        }


        .header-content {

          height:
            100%;

          display:
            flex;

          align-items:
            center;

          justify-content:
            space-between;

          gap:
            24px;

        }


        /* ===================================================
           BRAND
        =================================================== */

        .kalavedika-brand {

          display:
            flex;

          align-items:
            center;

          gap:
            13px;

          flex-shrink:
            0;

          text-decoration:
            none;

        }


        .logo-wrapper {

          width:
            66px;

          height:
            66px;

          display:
            flex;

          align-items:
            center;

          justify-content:
            center;

          flex-shrink:
            0;

        }


        .logo-wrapper img {

          width:
            100%;

          height:
            100%;

          display:
            block;

          object-fit:
            contain;

        }


        .brand-content h1 {

          margin:
            0;

          padding:
            0;

          color:
            #651d2b;

          font-family:
            "Noto Serif Telugu",
            serif;

          font-size:
            22px;

          font-weight:
            700;

          line-height:
            1.45;

          white-space:
            nowrap;

        }


        .brand-content p {

          margin:
            2px 0 0;

          padding:
            0;

          color:
            #776b63;

          font-family:
            "Noto Sans Telugu",
            sans-serif;

          font-size:
            8px;

          font-weight:
            400;

          line-height:
            1.5;

          white-space:
            nowrap;

        }


        /* ===================================================
           DESKTOP NAVIGATION
        =================================================== */

        .desktop-navigation {

          display:
            flex;

          align-items:
            center;

          justify-content:
            flex-end;

          gap:
            0;

          flex: 1;

        }


        .navigation-link,
        .dropdown-button {

          position:
            relative;

          height:
            92px;

          padding:
            0 9px;

          display:
            flex;

          align-items:
            center;

          justify-content:
            center;

          gap:
            5px;

          border:
            0;

          outline:
            none;

          background:
            transparent;

          color:
            #40352f;

          font-family:
            "Noto Serif Telugu",
            "Nirmala UI",
            serif;

          font-size:
            13px;

          font-weight:
            500;

          line-height:
            1.6;

          letter-spacing:
            0;

          white-space:
            nowrap;

          text-decoration:
            none;

          cursor:
            pointer;

          transition:
            color .25s ease,
            background .25s ease;

        }


        /* ===================================================
           NAV UNDERLINE
        =================================================== */

        .navigation-link::after,
        .dropdown-button::after {

          content:
            "";

          position:
            absolute;

          left:
            10px;

          right:
            10px;

          bottom:
            19px;

          height:
            2px;

          background:
            #b58b43;

          transform:
            scaleX(0);

          transform-origin:
            center;

          transition:
            transform .25s ease;

        }


        .navigation-link:hover,
        .dropdown-button:hover {

          color:
            #651d2b;

        }


        .navigation-link.active {

          color:
            #651d2b;

          font-weight:
            600;

        }


        .navigation-link:hover::after,
        .navigation-link.active::after,
        .navigation-dropdown:hover
        .dropdown-button::after {

          transform:
            scaleX(1);

        }


        /* ===================================================
           DROPDOWN
        =================================================== */

        .navigation-dropdown {

          position:
            relative;

          height:
            92px;

        }


        .dropdown-button {

          width:
            100%;

        }


        .dropdown-content {

          position:
            absolute;

          top:
            84px;

          left:
            50%;

          width:
            205px;

          padding:
            8px;

          transform:
            translate(-50%, 12px);

          background:
            #fffaf3;

          border:
            1px solid #ded2c5;

          box-shadow:
            0 20px 45px
            rgba(40,20,10,.15);

          opacity:
            0;

          visibility:
            hidden;

          pointer-events:
            none;

          transition:
            opacity .22s ease,
            transform .22s ease;

        }


        .navigation-dropdown:hover
        .dropdown-content {

          opacity:
            1;

          visibility:
            visible;

          pointer-events:
            auto;

          transform:
            translate(-50%, 0);

        }


        .dropdown-content a {

          display:
            block;

          padding:
            13px 15px;

          color:
            #4b3d36;

          font-family:
            "Noto Serif Telugu",
            "Nirmala UI",
            serif;

          font-size:
            13px;

          font-weight:
            500;

          line-height:
            1.7;

          text-decoration:
            none;

          transition:
            background .2s ease,
            color .2s ease,
            padding-left .2s ease;

        }


        .dropdown-content a:hover {

          background:
            #f1e8dc;

          color:
            #651d2b;

          padding-left:
            20px;

        }


        /* ===================================================
           MEMBERSHIP
        =================================================== */

        .navigation-link.membership-button {

          height:
            auto;

          margin-left:
            5px;

          padding:
            11px 16px;

          background:
            #651d2b;

          color:
            #fff;

          border:
            1px solid #651d2b;

          font-weight:
            500;

        }


        .navigation-link.membership-button::after {

          display:
            none;

        }


        .navigation-link.membership-button:hover {

          color:
            #fff;

          background:
            #47121e;

          border-color:
            #47121e;

        }


        /* ===================================================
           MOBILE BUTTON
        =================================================== */

        .mobile-menu-button {

          display:
            none;

          width:
            44px;

          height:
            44px;

          align-items:
            center;

          justify-content:
            center;

          flex-shrink:
            0;

          border:
            1px solid #d9cec1;

          background:
            #fffaf3;

          color:
            #651d2b;

          cursor:
            pointer;

        }


        /* ===================================================
           MOBILE NAV
        =================================================== */

        .mobile-navigation {

          display:
            none;

        }


        /* ===================================================
           TABLET
        =================================================== */

        @media (max-width: 1250px) {

          .kalavedika-container {

            width:
              95%;

          }


          .navigation-link,
          .dropdown-button {

            padding-left:
              6px;

            padding-right:
              6px;

            font-size:
              11px;

          }


          .brand-content h1 {

            font-size:
              20px;

          }

        }


        /* ===================================================
           MOBILE
        =================================================== */

        @media (max-width: 900px) {

          .kalavedika-topbar {

            height:
              30px;

          }


          .topbar-content {

            justify-content:
              center;

            text-align:
              center;

            font-size:
              8px;

          }


          .topbar-right {

            display:
              none;

          }


          .kalavedika-main {

            height:
              78px;

          }


          .desktop-navigation {

            display:
              none;

          }


          .mobile-menu-button {

            display:
              flex;

          }


          .logo-wrapper {

            width:
              54px;

            height:
              54px;

          }


          .brand-content h1 {

            font-size:
              18px;

          }


          .brand-content p {

            display:
              none;

          }


          .mobile-navigation {

            display:
              block;

            max-height:
              0;

            overflow:
              hidden;

            background:
              #fffaf3;

            border-bottom:
              1px solid transparent;

            transition:
              max-height .4s ease,
              border-color .3s ease;

          }


          .mobile-navigation.open {

            max-height:
              1000px;

            border-color:
              #ded2c5;

          }


          .mobile-navigation-inner {

            padding:
              7px 0 20px;

          }


          .mobile-link,
          .mobile-dropdown-button {

            width:
              100%;

            min-height:
              54px;

            display:
              flex;

            align-items:
              center;

            justify-content:
              space-between;

            padding:
              12px 5px;

            border:
              0;

            border-bottom:
              1px solid #ebe2d8;

            background:
              transparent;

            color:
              #40352f;

            font-family:
              "Noto Serif Telugu",
              "Nirmala UI",
              serif;

            font-size:
              15px;

            font-weight:
              500;

            line-height:
              1.7;

            text-align:
              left;

            text-decoration:
              none;

            cursor:
              pointer;

          }


          .mobile-link.active {

            color:
              #651d2b;

            font-weight:
              600;

          }


          .mobile-link:hover,
          .mobile-dropdown-button:hover {

            color:
              #651d2b;

          }


          .mobile-dropdown-button svg {

            flex-shrink:
              0;

            transition:
              transform .25s ease;

          }


          .chevron-rotate {

            transform:
              rotate(180deg);

          }


          .mobile-submenu {

            max-height:
              0;

            overflow:
              hidden;

            padding-left:
              16px;

            transition:
              max-height .3s ease;

          }


          .mobile-submenu.show {

            max-height:
              220px;

          }


          .mobile-submenu a {

            display:
              block;

            padding:
              12px 9px;

            border-bottom:
              1px solid #eee6dc;

            color:
              #756a61;

            font-family:
              "Noto Serif Telugu",
              "Nirmala UI",
              serif;

            font-size:
              14px;

            font-weight:
              500;

            line-height:
              1.7;

            text-decoration:
              none;

          }


          .mobile-submenu a:hover {

            color:
              #651d2b;

          }


          .mobile-membership {

            margin-top:
              10px;

            padding-left:
              15px;

            padding-right:
              15px;

            border:
              0 !important;

            background:
              #651d2b !important;

            color:
              #fff !important;

          }

        }


        /* ===================================================
           SMALL MOBILE
        =================================================== */

        @media (max-width: 480px) {

          .kalavedika-container {

            width:
              94%;

          }


          .logo-wrapper {

            width:
              49px;

            height:
              49px;

          }


          .brand-content h1 {

            font-size:
              16px;

          }


          .mobile-menu-button {

            width:
              40px;

            height:
              40px;

          }


          .mobile-link,
          .mobile-dropdown-button {

            font-size:
              14px;

          }

        }

      `}</style>
    </>
  );
}