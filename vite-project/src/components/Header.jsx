
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "../assets/logo.png";

const navItems = [
  { to: "/activities", label: "కార్యక్రమాలు" },
  { to: "/awards", label: "పురస్కారాలు" },
  { to: "/andhra-pradesh-chapters", label: "ఆంధ్రప్రదేశ్ కార్యవర్గం" },
  { to: "/telangana-chapters", label: "తెలంగాణ కార్యవర్గం" },
  { to: "/gallery", label: "చిత్రమాలిక" },
  { to: "/events", label: "వేడుకలు" },
  { to: "/publications", label: "ప్రచురణలు" },
];

const aboutItems = [
  { to: "/about", label: "మా గురించి" },
  { to: "/founder", label: "వ్యవస్థాపకులు" },
  { to: "/executive-members", label: "కార్యవర్గం" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);

  const closeMenu = () => {
    setMobileOpen(false);
    setAboutOpen(false);
  };

  const linkClass = ({ isActive }) =>
    `navigation-link${isActive ? " active" : ""}`;

  const mobileLinkClass = ({ isActive }) =>
    `mobile-link${isActive ? " active" : ""}`;

  return (
    <>
      <header className="kalavedika-header">
        {/* TOP BAR */}
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

        {/* MAIN HEADER */}
        <div className="kalavedika-main">
          <div className="kalavedika-container header-content">
            <Link
              to="/"
              className="kalavedika-brand"
              onClick={closeMenu}
            >
              <div className="logo-wrapper">
                <img src={logo} alt="శ్రీ శ్రీ కళావేదిక" />
              </div>

              <div className="brand-content">
                <h1>శ్రీ శ్రీ కళావేదిక</h1>
                <p>
                  అంతర్జాతీయ సాహిత్య, సాంస్కృతిక & సామాజిక సేవా సంస్థ
                </p>
              </div>
            </Link>

            {/* DESKTOP NAVIGATION */}
            <nav className="desktop-navigation">
              <NavLink to="/" end className={linkClass}>
                ముఖపుట
              </NavLink>

              <div className="navigation-dropdown">
                <button type="button" className="dropdown-button">
                  <span>మా గురించి</span>
                  <ChevronDown size={14} />
                </button>

                <div className="dropdown-content">
                  {aboutItems.map((item) => (
                    <Link key={item.to} to={item.to}>
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>

              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={linkClass}
                >
                  {item.label}
                </NavLink>
              ))}

              <NavLink
                to="/membership"
                className={({ isActive }) =>
                  `navigation-link membership-button${isActive ? " active" : ""}`
                }
              >
                సభ్యత్వం
              </NavLink>

              <NavLink to="/contact" className={linkClass}>
                సంప్రదించండి
              </NavLink>
            </nav>

            {/* MOBILE MENU BUTTON */}
            <button
              type="button"
              className="mobile-menu-button"
              onClick={() => setMobileOpen((open) => !open)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={23} /> : <Menu size={23} />}
            </button>
          </div>
        </div>

        {/* MOBILE NAVIGATION */}
        <div
          className={`mobile-navigation${mobileOpen ? " open" : ""}`}
        >
          <div className="kalavedika-container mobile-navigation-inner">
            <NavLink
              to="/"
              end
              onClick={closeMenu}
              className={mobileLinkClass}
            >
              ముఖపుట
            </NavLink>

            <div className="mobile-dropdown">
              <button
                type="button"
                className="mobile-dropdown-button"
                onClick={() => setAboutOpen((open) => !open)}
                aria-expanded={aboutOpen}
              >
                <span>మా గురించి</span>
                <ChevronDown
                  size={17}
                  className={aboutOpen ? "chevron-rotate" : ""}
                />
              </button>

              <div
                className={`mobile-submenu${aboutOpen ? " show" : ""}`}
              >
                {aboutItems.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    onClick={closeMenu}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={closeMenu}
                className={mobileLinkClass}
              >
                {item.label}
              </NavLink>
            ))}

            <NavLink
              to="/membership"
              onClick={closeMenu}
              className="mobile-link mobile-membership"
            >
              సభ్యత్వం
            </NavLink>

            <NavLink
              to="/contact"
              onClick={closeMenu}
              className={mobileLinkClass}
            >
              సంప్రదించండి
            </NavLink>
          </div>
        </div>
      </header>

      {/* HEADER STYLES */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@400;500;600;700&family=Noto+Sans+Telugu:wght@400;500;600;700&family=Noto+Serif+Telugu:wght@400;500;600;700&display=swap');

        .kalavedika-header {
          --header-maroon: #4B1025;
          --header-wine: #651D35;
          --header-gold: #B99458;
          --header-cream: #FFFCF7;
          --header-text: #403832;

          position: relative;
          z-index: 9999;
          width: 100%;
          background: var(--header-cream);
          color: var(--header-text);
          font-family: "Inter", "Noto Sans Telugu", sans-serif;
          -webkit-font-smoothing: antialiased;
          text-rendering: optimizeLegibility;
        }

        .kalavedika-header *,
        .kalavedika-header *::before,
        .kalavedika-header *::after {
          box-sizing: border-box;
        }

        .kalavedika-container {
          width: min(1380px, 94%);
          margin: 0 auto;
        }

        /* TOP BAR */
        .kalavedika-topbar {
          min-height: 44px;
          background: #351019;
          color: #E9DDD4;
        }

        .topbar-content {
          min-height: 44px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          font-family: "Inter", "Noto Sans Telugu", sans-serif;
          font-size: 11px;
          font-weight: 400;
          line-height: 1.6;
          letter-spacing: 0.01em;
        }

        .topbar-right {
          color: #DFC58F;
        }

        /* MAIN HEADER */
        .kalavedika-main {
          min-height: 112px;
          background: rgba(255, 252, 247, 0.98);
          border-bottom: 1px solid #E9DED2;
          box-shadow: 0 4px 18px rgba(53, 16, 25, 0.045);
        }

        .header-content {
          min-height: 112px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
        }

        /* BRAND */
        .kalavedika-brand {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-shrink: 0;
          text-decoration: none;
        }

        .logo-wrapper {
          width: 68px;
          height: 68px;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .logo-wrapper img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          display: block;
        }

        .brand-content h1 {
          margin: 0;
          color: var(--header-wine);
          font-family: "Playfair Display", "Noto Serif Telugu", serif;
          font-size: 24px;
          font-weight: 600;
          line-height: 1.45;
          letter-spacing: -0.3px;
          white-space: nowrap;
        }

        .brand-content p {
          margin: 2px 0 0;
          color: #796D64;
          font-family: "Inter", "Noto Sans Telugu", sans-serif;
          font-size: 10px;
          font-weight: 400;
          line-height: 1.65;
        }

        /* DESKTOP NAVIGATION */
        .desktop-navigation {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          align-content: center;
          justify-content: flex-end;
          gap: 0 2px;
          flex: 1;
          min-width: 0;
        }

        .navigation-link,
        .dropdown-button {
          position: relative;
          min-height: 50px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 5px;
          padding: 0 8px;
          border: 0;
          background: transparent;
          color: #4A403A;
          font-family: "Inter", "Noto Sans Telugu", sans-serif;
          font-size: 13px;
          font-weight: 500;
          line-height: 1.6;
          letter-spacing: 0;
          white-space: nowrap;
          text-decoration: none;
          cursor: pointer;
          transition: color 0.25s ease;
        }

        .navigation-link::after,
        .dropdown-button::after {
          content: "";
          position: absolute;
          left: 9px;
          right: 9px;
          bottom: 7px;
          height: 2px;
          background: var(--header-gold);
          transform: scaleX(0);
          transform-origin: center;
          transition: transform 0.25s ease;
        }

        .navigation-link:hover,
        .navigation-link.active,
        .dropdown-button:hover {
          color: var(--header-wine);
        }

        .navigation-link.active {
          font-weight: 600;
        }

        .navigation-link:hover::after,
        .navigation-link.active::after,
        .navigation-dropdown:hover .dropdown-button::after,
        .navigation-dropdown:focus-within .dropdown-button::after {
          transform: scaleX(1);
        }

        /* ABOUT DROPDOWN */
        .navigation-dropdown {
          position: relative;
          min-height: 50px;
          display: flex;
          align-items: center;
        }

        .dropdown-content {
          position: absolute;
          top: calc(100% - 3px);
          left: 50%;
          width: 210px;
          padding: 8px;
          background: #FFFCF7;
          border: 1px solid #E7D9C9;
          border-radius: 5px;
          box-shadow: 0 16px 38px rgba(40, 20, 20, 0.13);
          opacity: 0;
          visibility: hidden;
          pointer-events: none;
          transform: translate(-50%, 9px);
          transition: opacity 0.2s ease, transform 0.2s ease;
        }

        .navigation-dropdown:hover .dropdown-content,
        .navigation-dropdown:focus-within .dropdown-content {
          opacity: 1;
          visibility: visible;
          pointer-events: auto;
          transform: translate(-50%, 0);
        }

        .dropdown-content a {
          display: block;
          padding: 11px 13px;
          border-radius: 3px;
          color: #4A403A;
          font-family: "Inter", "Noto Sans Telugu", sans-serif;
          font-size: 13px;
          font-weight: 500;
          line-height: 1.7;
          text-decoration: none;
          transition: background 0.2s ease, color 0.2s ease;
        }

        .dropdown-content a:hover {
          background: #F3EADF;
          color: var(--header-wine);
        }

        /* MEMBERSHIP BUTTON */
        .navigation-link.membership-button {
          min-height: auto;
          margin-left: 5px;
          padding: 10px 14px;
          border: 1px solid var(--header-wine);
          border-radius: 3px;
          background: var(--header-wine);
          color: #fff;
          transition: background 0.25s ease, border-color 0.25s ease;
        }

        .navigation-link.membership-button::after {
          display: none;
        }

        .navigation-link.membership-button:hover,
        .navigation-link.membership-button.active {
          background: #3D1020;
          border-color: #3D1020;
          color: #fff;
        }

        /* MOBILE MENU BUTTON */
        .mobile-menu-button {
          display: none;
          width: 43px;
          height: 43px;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          border: 1px solid #E2D5C8;
          border-radius: 4px;
          background: #FFFCF7;
          color: var(--header-wine);
          cursor: pointer;
        }

        /* MOBILE NAVIGATION */
        .mobile-navigation {
          display: none;
        }

        /* TABLET / SMALL DESKTOP */
        @media (max-width: 1250px) and (min-width: 901px) {
          .kalavedika-container {
            width: 97%;
          }

          .header-content {
            gap: 12px;
          }

          .logo-wrapper {
            width: 54px;
            height: 54px;
          }

          .brand-content h1 {
            font-size: 20px;
          }

          .brand-content p {
            font-size: 9px;
          }

          .navigation-link,
          .dropdown-button {
            padding-left: 5px;
            padding-right: 5px;
            font-size: 11.5px;
          }
        }

        /* MOBILE */
        @media (max-width: 900px) {
          .kalavedika-topbar {
            min-height: 36px;
          }

          .topbar-content {
            min-height: 36px;
            justify-content: center;
            text-align: center;
            font-size: 9px;
          }

          .topbar-right {
            display: none;
          }

          .kalavedika-main,
          .header-content {
            min-height: 84px;
          }

          .desktop-navigation {
            display: none;
          }

          .mobile-menu-button {
            display: inline-flex;
          }

          .logo-wrapper {
            width: 58px;
            height: 58px;
          }

          .brand-content h1 {
            font-size: 19px;
          }

          .brand-content p {
            display: none;
          }

          .mobile-navigation {
            display: block;
            max-height: 0;
            overflow: hidden;
            background: #FFFCF7;
            border-bottom: 1px solid transparent;
            transition: max-height 0.4s ease, border-color 0.3s ease;
          }

          .mobile-navigation.open {
            max-height: 1000px;
            border-color: #E7D9C9;
          }

          .mobile-navigation-inner {
            padding: 8px 0 20px;
          }

          .mobile-link,
          .mobile-dropdown-button {
            width: 100%;
            min-height: 49px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 11px 7px;
            border: 0;
            border-bottom: 1px solid #EEE5DC;
            background: transparent;
            color: #453A34;
            font-family: "Inter", "Noto Sans Telugu", sans-serif;
            font-size: 14px;
            font-weight: 500;
            line-height: 1.8;
            text-align: left;
            text-decoration: none;
            cursor: pointer;
          }

          .mobile-link.active,
          .mobile-link:hover,
          .mobile-dropdown-button:hover {
            color: var(--header-wine);
          }

          .mobile-link.active {
            font-weight: 600;
          }

          .mobile-dropdown-button svg {
            flex-shrink: 0;
            transition: transform 0.25s ease;
          }

          .chevron-rotate {
            transform: rotate(180deg);
          }

          .mobile-submenu {
            max-height: 0;
            overflow: hidden;
            padding-left: 15px;
            transition: max-height 0.3s ease;
          }

          .mobile-submenu.show {
            max-height: 220px;
          }

          .mobile-submenu a {
            display: block;
            padding: 11px 10px;
            border-bottom: 1px solid #F0E8DF;
            color: #76685F;
            font-family: "Inter", "Noto Sans Telugu", sans-serif;
            font-size: 13px;
            line-height: 1.8;
            text-decoration: none;
          }

          .mobile-submenu a:hover {
            color: var(--header-wine);
          }

          .mobile-membership {
            margin-top: 10px;
            padding: 12px 14px;
            border: 0;
            border-radius: 3px;
            background: var(--header-wine);
            color: #fff;
          }

          .mobile-membership:hover {
            color: #fff;
            background: #3D1020;
          }
        }

        @media (max-width: 480px) {
          .kalavedika-container {
            width: 94%;
          }

          .kalavedika-main,
          .header-content {
            min-height: 78px;
          }

          .logo-wrapper {
            width: 51px;
            height: 51px;
          }

          .brand-content h1 {
            font-size: 17px;
          }

          .mobile-menu-button {
            width: 40px;
            height: 40px;
          }

          .topbar-content {
            font-size: 8px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .kalavedika-header *,
          .kalavedika-header *::before,
          .kalavedika-header *::after {
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </>
  );
}
