import React, { useMemo, useState } from "react";
import { Search, MapPin, Users, X, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const members = [
  {
    id: 1,
    name: "శ్రీ సభ్యులు ౧",
    role: "రాష్ట్ర సమన్వయకర్త",
    district: "హైదరాబాద్",
    category: "రాష్ట్ర కమిటీ",
  },
  {
    id: 2,
    name: "శ్రీ సభ్యులు ౨",
    role: "సాహిత్య సమన్వయకర్త",
    district: "వరంగల్",
    category: "సాహిత్య కమిటీ",
  },
  {
    id: 3,
    name: "శ్రీ సభ్యులు ౩",
    role: "సాంస్కృతిక సమన్వయకర్త",
    district: "కరీంనగర్",
    category: "సాంస్కృతిక కమిటీ",
  },
  {
    id: 4,
    name: "శ్రీ సభ్యులు ౪",
    role: "జిల్లా సమన్వయకర్త",
    district: "ఖమ్మం",
    category: "జిల్లా కమిటీ",
  },
  {
    id: 5,
    name: "శ్రీ సభ్యులు ౫",
    role: "జిల్లా సమన్వయకర్త",
    district: "నల్గొండ",
    category: "జిల్లా కమిటీ",
  },
  {
    id: 6,
    name: "శ్రీ సభ్యులు ౬",
    role: "యువజన సమన్వయకర్త",
    district: "సిద్దిపేట",
    category: "యువజన కమిటీ",
  },
  {
    id: 7,
    name: "శ్రీ సభ్యులు ౭",
    role: "సాహిత్య ప్రతినిధి",
    district: "నిజామాబాద్",
    category: "సాహిత్య కమిటీ",
  },
  {
    id: 8,
    name: "శ్రీ సభ్యులు ౮",
    role: "కళా ప్రతినిధి",
    district: "ఆదిలాబాద్",
    category: "సాంస్కృతిక కమిటీ",
  },
  {
    id: 9,
    name: "శ్రీ సభ్యులు ౯",
    role: "జిల్లా సమన్వయకర్త",
    district: "మహబూబ్‌నగర్",
    category: "జిల్లా కమిటీ",
  },
  {
    id: 10,
    name: "శ్రీ సభ్యులు ౧౦",
    role: "సాహిత్య ప్రతినిధి",
    district: "మెదక్",
    category: "సాహిత్య కమిటీ",
  },
  {
    id: 11,
    name: "శ్రీ సభ్యులు ౧౧",
    role: "కళా సమన్వయకర్త",
    district: "సూర్యాపేట",
    category: "సాంస్కృతిక కమిటీ",
  },
  {
    id: 12,
    name: "శ్రీ సభ్యులు ౧౨",
    role: "యువజన ప్రతినిధి",
    district: "కామారెడ్డి",
    category: "యువజన కమిటీ",
  },
];

const districts = [
  "అన్ని జిల్లాలు",
  "ఆదిలాబాద్",
  "భద్రాద్రి కొత్తగూడెం",
  "హైదరాబాద్",
  "కరీంనగర్",
  "ఖమ్మం",
  "మహబూబ్‌నగర్",
  "నల్గొండ",
  "నిజామాబాద్",
  "వరంగల్",
  "సిద్దిపేట",
  "సూర్యాపేట",
  "కామారెడ్డి",
  "మెదక్",
];

const categories = [
  "అన్ని విభాగాలు",
  "రాష్ట్ర కమిటీ",
  "సాహిత్య కమిటీ",
  "సాంస్కృతిక కమిటీ",
  "జిల్లా కమిటీ",
  "యువజన కమిటీ",
];

const allDistricts = [
  "ఆదిలాబాద్",
  "భద్రాద్రి కొత్తగూడెం",
  "హైదరాబాద్",
  "జగిత్యాల",
  "జనగామ",
  "జయశంకర్ భూపాలపల్లి",
  "కామారెడ్డి",
  "కరీంనగర్",
  "ఖమ్మం",
  "కొమురం భీం",
  "మహబూబాబాద్",
  "మహబూబ్‌నగర్",
  "మంచిర్యాల",
  "మెదక్",
  "మేడ్చల్",
  "ములుగు",
  "నాగర్‌కర్నూల్",
  "నల్గొండ",
  "నారాయణపేట",
  "నిర్మల్",
  "నిజామాబాద్",
  "పెద్దపల్లి",
  "రాజన్న సిరిసిల్ల",
  "రంగారెడ్డి",
  "సంగారెడ్డి",
  "సిద్దిపేట",
  "సూర్యాపేట",
  "వికారాబాద్",
  "వనపర్తి",
  "వరంగల్",
  "హనుమకొండ",
  "యాదాద్రి భువనగిరి",
];

export default function CommitteeMembers() {
  const [search, setSearch] = useState("");
  const [district, setDistrict] = useState("అన్ని జిల్లాలు");
  const [category, setCategory] = useState("అన్ని విభాగాలు");

  const filteredMembers = useMemo(() => {
    return members.filter((member) => {
      const searchValue = search.toLowerCase().trim();

      const matchesSearch =
        member.name.toLowerCase().includes(searchValue) ||
        member.role.toLowerCase().includes(searchValue) ||
        member.district.toLowerCase().includes(searchValue);

      const matchesDistrict =
        district === "అన్ని జిల్లాలు" ||
        member.district === district;

      const matchesCategory =
        category === "అన్ని విభాగాలు" ||
        member.category === category;

      return (
        matchesSearch &&
        matchesDistrict &&
        matchesCategory
      );
    });
  }, [search, district, category]);

  const clearFilters = () => {
    setSearch("");
    setDistrict("అన్ని జిల్లాలు");
    setCategory("అన్ని విభాగాలు");
  };

  return (
    <div className="committee-page">

      {/* ================= HERO ================= */}

      <section className="committee-hero">

        <div className="committee-hero-overlay" />

        <div className="committee-hero-content">

          <span className="hero-small">
            శ్రీ శ్రీ కళావేదిక
          </span>

          <h1>
            కమిటీ సభ్యులు
          </h1>

          <div className="hero-line" />

          <p>
            తెలుగు సాహిత్యం, సంస్కృతి మరియు సామాజిక
            సేవ కోసం కలిసి పనిచేస్తున్న మా సాహిత్య కుటుంబం.
          </p>

        </div>

        <div className="hero-script">
          అక్షరం
        </div>

      </section>

      {/* ================= INTRO ================= */}

      <section className="committee-intro">

        <div className="committee-container">

          <div className="intro-text">

            <span className="section-label">
              మన సాహిత్య కుటుంబం
            </span>

            <h2>
              ప్రతి జిల్లాలో
              <br />
              ఒక సాహిత్య స్వరం
            </h2>

            <p>
              తెలంగాణలోని వివిధ ప్రాంతాల నుంచి
              సాహితీవేత్తలు, కళాకారులు, సేవాభిమానులు
              మరియు యువ ప్రతిభను ఒకే వేదికపైకి
              తీసుకురావడం మా లక్ష్యం.
            </p>

          </div>

          <div className="intro-stats">

            <div className="stat">
              <strong>౩౩</strong>
              <span>జిల్లాలు</span>
            </div>

            <div className="stat">
              <strong>౧౫,౦౦౦+</strong>
              <span>సభ్యులు</span>
            </div>

            <div className="stat">
              <strong>౫</strong>
              <span>ప్రధాన విభాగాలు</span>
            </div>

          </div>

        </div>

      </section>

      {/* ================= FILTER ================= */}

      <section className="committee-filter-section">

        <div className="committee-container">

          <div className="filter-header">

            <div>
              <span>
                సభ్యుల అన్వేషణ
              </span>

              <h3>
                మీకు కావాల్సిన సభ్యులను కనుగొనండి
              </h3>
            </div>

            {(search ||
              district !== "అన్ని జిల్లాలు" ||
              category !== "అన్ని విభాగాలు") && (
              <button
                className="clear-button"
                onClick={clearFilters}
              >
                <X size={15} />
                ఎంపికలను తొలగించండి
              </button>
            )}

          </div>

          <div className="filter-grid">

            <div className="search-box">

              <Search size={18} />

              <input
                value={search}
                onChange={(e) =>
                  setSearch(e.target.value)
                }
                placeholder="పేరు, పదవి లేదా జిల్లా ద్వారా వెతకండి..."
              />

            </div>

            <select
              value={district}
              onChange={(e) =>
                setDistrict(e.target.value)
              }
            >
              {districts.map((item) => (
                <option key={item}>
                  {item}
                </option>
              ))}
            </select>

            <select
              value={category}
              onChange={(e) =>
                setCategory(e.target.value)
              }
            >
              {categories.map((item) => (
                <option key={item}>
                  {item}
                </option>
              ))}
            </select>

          </div>

        </div>

      </section>

      {/* ================= MEMBERS ================= */}

      <section className="members-section">

        <div className="committee-container">

          <div className="members-heading">

            <div>

              <span className="section-label">
                మా ప్రతినిధులు
              </span>

              <h2>
                కమిటీ సభ్యులు
              </h2>

            </div>

            <div className="result-count">
              <Users size={17} />
              {filteredMembers.length} సభ్యులు
            </div>

          </div>

          {filteredMembers.length > 0 ? (

            <div className="members-grid">

              {filteredMembers.map(
                (member, index) => (

                  <article
                    className="member-card"
                    key={member.id}
                  >

                    <div className="member-image">

                      <div className="image-frame">

                        <div className="person-placeholder">
                          చిత్రం
                        </div>

                      </div>

                      <span className="member-index">
                        {(index + 1)
                          .toString()
                          .padStart(2, "0")}
                      </span>

                    </div>

                    <div className="member-content">

                      <span className="member-category">
                        {member.category}
                      </span>

                      <h3>
                        {member.name}
                      </h3>

                      <p className="member-role">
                        {member.role}
                      </p>

                      <div className="member-location">

                        <MapPin size={15} />

                        <span>
                          {member.district}
                        </span>

                      </div>

                    </div>

                  </article>

                )
              )}

            </div>

          ) : (

            <div className="empty-state">

              <div className="empty-letter">
                అ
              </div>

              <h3>
                సభ్యులు కనుగొనబడలేదు
              </h3>

              <p>
                మీ ఎంపికలను మార్చి మరొకసారి ప్రయత్నించండి.
              </p>

              <button
                onClick={clearFilters}
              >
                అన్ని సభ్యులను చూడండి
              </button>

            </div>

          )}

        </div>

      </section>

      {/* ================= DISTRICTS ================= */}

      <section className="district-section">

        <div className="committee-container">

          <div className="district-title">

            <span className="section-label">
              ప్రాంతీయ అనుసంధానం
            </span>

            <h2>
              తెలంగాణలోని
              <br />
              ౩౩ జిల్లాలు
            </h2>

            <p>
              ప్రతి ప్రాంతంలో తెలుగు సాహిత్యం,
              సంస్కృతి మరియు కళలను ప్రోత్సహించేందుకు
              మా బృందం కృషి చేస్తోంది.
            </p>

          </div>

          <div className="district-grid">

            {allDistricts.map(
              (item, index) => (

                <button
                  key={item}
                  className={
                    district === item
                      ? "district-item selected"
                      : "district-item"
                  }
                  onClick={() => {
                    setDistrict(item);

                    window.scrollTo({
                      top: 650,
                      behavior: "smooth",
                    });
                  }}
                >

                  <span>
                    {(index + 1)
                      .toString()
                      .padStart(2, "0")}
                  </span>

                  <strong>
                    {item}
                  </strong>

                  <small>
                    సభ్యులు →
                  </small>

                </button>

              )
            )}

          </div>

        </div>

      </section>

      {/* ================= JOIN ================= */}

      <section className="committee-join">

        <div className="join-script">
          తెలుగు
        </div>

        <div className="committee-container join-content">

          <div>

            <span className="section-label light">
              మీరూ భాగస్వాములు కండి
            </span>

            <h2>
              తెలుగు కోసం
              <br />
              మీ స్వరం కూడా అవసరం
            </h2>

            <p>
              సాహిత్యం, కళలు మరియు సేవా కార్యక్రమాల్లో
              భాగస్వామ్యం కావాలనుకుంటే శ్రీ శ్రీ కళావేదిక
              కుటుంబంలో చేరండి.
            </p>

          </div>

          <Link
            to="/membership"
            className="join-button"
          >
            సభ్యత్వం పొందండి
            <ArrowUpRight size={19} />
          </Link>

        </div>

      </section>

      {/* ================= ALL CSS IN SAME FILE ================= */}

      <style>{`

        * {
          box-sizing: border-box;
        }

        .committee-page {
          width: 100%;
          overflow: hidden;
          background: #fffaf2;
          color: #2c2420;
          font-family:
            "Noto Serif Telugu",
            "Nirmala UI",
            serif;
        }

        .committee-container {
          width: min(1180px, 92%);
          margin: auto;
        }

        /* HERO */

        .committee-hero {
          min-height: 590px;
          position: relative;
          display: flex;
          align-items: center;
          background:
            radial-gradient(
              circle at 80% 20%,
              #8b3544,
              #651d2b 42%,
              #351019 100%
            );
          color: white;
          overflow: hidden;
        }

        .committee-hero::before {
          content: "";
          position: absolute;
          inset: 0;
          opacity: 0.09;
          background-image:
            linear-gradient(
              90deg,
              transparent 49%,
              #e5c47b 50%,
              transparent 51%
            ),
            linear-gradient(
              #e5c47b 1px,
              transparent 1px
            );
          background-size: 85px 85px;
        }

        .committee-hero-overlay {
          position: absolute;
          width: 650px;
          height: 650px;
          border: 1px solid #e0bf7628;
          border-radius: 50%;
          right: -150px;
          top: -100px;
        }

        .committee-hero-content {
          width: min(1180px, 92%);
          margin: auto;
          position: relative;
          z-index: 2;
          padding-top: 50px;
        }

        .hero-small {
          color: #dfbd72;
          font-size: 13px;
          letter-spacing: 2px;
        }

        .committee-hero h1 {
          font-size: clamp(55px, 8vw, 105px);
          line-height: 1.15;
          font-weight: 500;
          margin: 20px 0;
        }

        .hero-line {
          width: 90px;
          height: 2px;
          background: #d3ad61;
          margin-bottom: 22px;
        }

        .committee-hero p {
          max-width: 570px;
          color: #e7d9d1;
          font-size: 16px;
          line-height: 2;
        }

        .hero-script {
          position: absolute;
          right: 8%;
          bottom: -40px;
          color: #ffffff0a;
          font-size: 220px;
          font-weight: 700;
          z-index: 1;
        }

        /* INTRO */

        .committee-intro {
          padding: 95px 0;
          background: #fffaf2;
        }

        .committee-intro
        .committee-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 90px;
          align-items: center;
        }

        .section-label {
          color: #b4873b;
          font-size: 11px;
          letter-spacing: 2px;
          font-weight: 700;
        }

        .intro-text h2 {
          color: #651d2b;
          font-size: clamp(38px, 5vw, 63px);
          line-height: 1.35;
          font-weight: 600;
          margin: 15px 0 20px;
        }

        .intro-text p {
          max-width: 580px;
          color: #756a61;
          font-size: 15px;
          line-height: 2;
        }

        .intro-stats {
          display: grid;
          grid-template-columns: 1fr 1fr;
          border-top: 1px solid #ded1bf;
          border-left: 1px solid #ded1bf;
        }

        .stat {
          min-height: 170px;
          padding: 30px;
          border-right: 1px solid #ded1bf;
          border-bottom: 1px solid #ded1bf;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .stat strong {
          color: #651d2b;
          font-size: 42px;
        }

        .stat span {
          color: #756a61;
          font-size: 12px;
        }

        /* FILTER */

        .committee-filter-section {
          background: #39131d;
          padding: 34px 0;
        }

        .filter-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 30px;
          margin-bottom: 20px;
        }

        .filter-header span {
          color: #d8b66c;
          font-size: 12px;
        }

        .filter-header h3 {
          margin: 5px 0 0;
          color: white;
          font-size: 20px;
          font-weight: 500;
        }

        .clear-button {
          border: 1px solid #76515b;
          background: transparent;
          color: #eadbd4;
          padding: 9px 15px;
          display: flex;
          align-items: center;
          gap: 6px;
          cursor: pointer;
        }

        .filter-grid {
          display: grid;
          grid-template-columns: 1.6fr 1fr 1fr;
          gap: 10px;
        }

        .search-box {
          display: flex;
          align-items: center;
          gap: 10px;
          border: 1px solid #76515b;
          padding: 0 15px;
          color: #d8b66c;
        }

        .search-box input {
          width: 100%;
          background: transparent;
          border: 0;
          outline: none;
          padding: 14px 0;
          color: white;
          font-family: inherit;
        }

        .search-box input::placeholder {
          color: #c5b2aa;
        }

        .filter-grid select {
          border: 1px solid #76515b;
          background: #ffffff08;
          color: white;
          padding: 14px;
          outline: none;
          font-family: inherit;
        }

        .filter-grid select option {
          background: #39131d;
          color: white;
        }

        /* MEMBERS */

        .members-section {
          padding: 95px 0;
          background: #fffaf2;
        }

        .members-heading {
          display: flex;
          justify-content: space-between;
          align-items: end;
          margin-bottom: 40px;
        }

        .members-heading h2 {
          margin: 7px 0 0;
          color: #651d2b;
          font-size: 45px;
          font-weight: 600;
        }

        .result-count {
          display: flex;
          align-items: center;
          gap: 8px;
          border: 1px solid #ded1bf;
          padding: 8px 15px;
          color: #806d60;
          font-size: 11px;
        }

        .members-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        .member-card {
          background: white;
          border: 1px solid #e1d6c7;
          transition: all .3s ease;
        }

        .member-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 25px 55px #32190d14;
        }

        .member-image {
          height: 310px;
          position: relative;
          display: grid;
          place-items: center;
          background:
            radial-gradient(
              circle at 50% 30%,
              #d8c09c,
              #98704f
            );
        }

        .image-frame {
          width: 200px;
          height: 245px;
          border: 1px solid #ffffffaa;
          display: grid;
          place-items: center;
          position: relative;
        }

        .image-frame::before {
          content: "";
          position: absolute;
          inset: 10px;
          border: 1px solid #ffffff44;
        }

        .person-placeholder {
          color: white;
          font-size: 12px;
        }

        .member-index {
          position: absolute;
          left: 18px;
          top: 18px;
          color: white;
          font-size: 13px;
        }

        .member-content {
          padding: 25px;
        }

        .member-category {
          color: #b4873b;
          font-size: 10px;
        }

        .member-content h3 {
          color: #651d2b;
          font-size: 21px;
          margin: 8px 0 2px;
        }

        .member-role {
          color: #766a61;
          font-size: 13px;
          margin: 0 0 18px;
        }

        .member-location {
          border-top: 1px solid #e5dacd;
          padding-top: 13px;
          display: flex;
          align-items: center;
          gap: 7px;
          color: #b4873b;
        }

        .member-location span {
          color: #756a61;
          font-size: 12px;
        }

        /* EMPTY */

        .empty-state {
          padding: 90px 20px;
          text-align: center;
          background: #f5ecdf;
        }

        .empty-letter {
          color: #b4873b;
          font-size: 65px;
        }

        .empty-state h3 {
          color: #651d2b;
          font-size: 24px;
        }

        .empty-state p {
          color: #756a61;
        }

        .empty-state button {
          background: #651d2b;
          color: white;
          border: 0;
          padding: 11px 20px;
          cursor: pointer;
          font-family: inherit;
        }

        /* DISTRICTS */

        .district-section {
          padding: 100px 0;
          background: #f3eadc;
        }

        .district-title {
          max-width: 650px;
          margin-bottom: 45px;
        }

        .district-title h2 {
          color: #651d2b;
          font-size: clamp(40px, 5vw, 62px);
          line-height: 1.35;
          margin: 12px 0;
        }

        .district-title p {
          color: #756a61;
          line-height: 2;
        }

        .district-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 12px;
        }

        .district-item {
          background: #fffaf2;
          border: 1px solid #ded1bf;
          padding: 20px;
          text-align: left;
          cursor: pointer;
          transition: .25s;
          display: flex;
          flex-direction: column;
          gap: 3px;
          font-family: inherit;
        }

        .district-item:hover,
        .district-item.selected {
          background: #651d2b;
          border-color: #651d2b;
        }

        .district-item span {
          color: #b4873b;
          font-size: 10px;
        }

        .district-item strong {
          color: #651d2b;
          font-size: 14px;
        }

        .district-item small {
          color: #8c7e72;
          font-size: 9px;
        }

        .district-item:hover strong,
        .district-item.selected strong {
          color: white;
        }

        .district-item:hover small,
        .district-item.selected small {
          color: #dfc58c;
        }

        /* JOIN */

        .committee-join {
          position: relative;
          overflow: hidden;
          background:
            linear-gradient(
              120deg,
              #651d2b,
              #3a111b
            );
          color: white;
          padding: 90px 0;
        }

        .join-script {
          position: absolute;
          right: 5%;
          top: -70px;
          color: #ffffff08;
          font-size: 250px;
          font-weight: 700;
        }

        .join-content {
          position: relative;
          z-index: 2;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 50px;
        }

        .section-label.light {
          color: #d8b66c;
        }

        .join-content h2 {
          font-size: clamp(35px, 5vw, 62px);
          line-height: 1.35;
          font-weight: 500;
          margin: 12px 0;
        }

        .join-content p {
          max-width: 620px;
          color: #e2d4cd;
          line-height: 2;
          font-size: 14px;
        }

        .join-button {
          flex-shrink: 0;
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 14px 22px;
          background: #c29748;
          color: white;
          font-size: 13px;
          transition: .25s;
        }

        .join-button:hover {
          background: #d7ae60;
          transform: translateY(-3px);
        }

        /* TABLET */

        @media (max-width: 900px) {

          .committee-intro
          .committee-container {
            grid-template-columns: 1fr;
            gap: 50px;
          }

          .filter-grid {
            grid-template-columns: 1fr;
          }

          .members-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .district-grid {
            grid-template-columns: repeat(3, 1fr);
          }

          .join-content {
            flex-direction: column;
            align-items: flex-start;
          }

        }

        /* MOBILE */

        @media (max-width: 600px) {

          .committee-hero {
            min-height: 500px;
          }

          .committee-hero h1 {
            font-size: 50px;
          }

          .hero-script {
            font-size: 130px;
            right: -20px;
            bottom: 10px;
          }

          .committee-intro {
            padding: 65px 0;
          }

          .intro-stats {
            grid-template-columns: 1fr 1fr;
          }

          .stat {
            min-height: 130px;
            padding: 20px;
          }

          .stat strong {
            font-size: 28px;
          }

          .filter-header {
            align-items: flex-start;
            flex-direction: column;
          }

          .members-section,
          .district-section {
            padding: 65px 0;
          }

          .members-heading {
            align-items: flex-start;
            flex-direction: column;
            gap: 15px;
          }

          .members-heading h2 {
            font-size: 35px;
          }

          .members-grid {
            grid-template-columns: 1fr;
          }

          .district-grid {
            grid-template-columns: 1fr 1fr;
          }

          .district-title h2 {
            font-size: 40px;
          }

          .join-content h2 {
            font-size: 40px;
          }

          .join-script {
            font-size: 130px;
            top: 20px;
          }

        }

      `}</style>

    </div>
  );
}