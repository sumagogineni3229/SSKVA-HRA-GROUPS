
import React, { useState, useEffect } from "react";

// Main gallery images
import cleb1 from "../assets/cleb1.png";
import cleb2 from "../assets/cleb2.png";
import founder from "../assets/founder.png";
import founderpic2 from "../assets/founderpic2.png";
import founderwithcbn from "../assets/founderwithcbn.png";
import founderwithcbn2 from "../assets/founderwithcbn2.png";
import imag1 from "../assets/imag1.png";
import imag2 from "../assets/imag2.png";
import imag3 from "../assets/imag3.png";
import news from "../assets/news.png";
import note from "../assets/note.png";

// About us images
import dance from "../assets/aboutus/dance.png";
import kalapradarshana from "../assets/aboutus/kalapradarshana.png";
import kolatam from "../assets/aboutus/kolatam.png";
import writings from "../assets/aboutus/writings.jpg";

const galleryItems = [
  {
    id: 1,
    image: dance,
    category: "సాంస్కృతిక కార్యక్రమాలు",
    tag: "నృత్య కళలు",
    title: "నృత్య కళా వైభవం",
    description:
      "తెలుగు నృత్య సంప్రదాయాలు, కళారూపాలు మరియు కళాకారుల ప్రతిభకు ప్రోత్సాహం.",
  },
  {
    id: 2,
    image: kalapradarshana,
    category: "సాంస్కృతిక కార్యక్రమాలు",
    tag: "కళా ప్రదర్శనలు",
    title: "కళా ప్రదర్శనల వైభవం",
    description:
      "మన సంస్కృతి మరియు సంప్రదాయ కళారూపాలను ప్రజలకు పరిచయం చేసే వేదిక.",
  },
  {
    id: 3,
    image: kolatam,
    category: "సాంస్కృతిక కార్యక్రమాలు",
    tag: "జానపద కళలు",
    title: "కోలాట కళా సంప్రదాయం",
    description:
      "తెలుగు జానపద కళలు మరియు తరతరాలుగా వస్తున్న సంప్రదాయాల పరిరక్షణ.",
  },
  {
    id: 4,
    image: writings,
    category: "సాహిత్య కార్యక్రమాలు",
    tag: "సాహిత్యం",
    title: "అక్షరాల అనుభూతి",
    description:
      "తెలుగు భాష, రచన, కవిత్వం మరియు సాహిత్య ప్రతిభకు ప్రోత్సాహం.",
  },
  {
    id: 5,
    image: imag1,
    category: "సాహిత్య కార్యక్రమాలు",
    tag: "సాహిత్య సమ్మేళనం",
    title: "అక్షరాలకు ఆత్మీయ వేదిక",
    description:
      "కవులు, రచయితలు మరియు సాహితీవేత్తలను ఒకే వేదికపైకి తీసుకువచ్చే ప్రయత్నం.",
  },
  {
    id: 6,
    image: imag2,
    category: "సాంస్కృతిక కార్యక్రమాలు",
    tag: "సంస్కృతి",
    title: "సంస్కృతి – సంప్రదాయాలు",
    description:
      "తెలుగు సంస్కృతి వైభవాన్ని చాటిచెప్పే ప్రత్యేక కార్యక్రమాలు.",
  },
  {
    id: 7,
    image: imag3,
    category: "ప్రత్యేక కార్యక్రమాలు",
    tag: "ప్రతిభ",
    title: "ప్రతిభకు ప్రోత్సాహం",
    description:
      "కళాకారులు, సాహితీవేత్తలు మరియు ప్రతిభావంతులకు అవకాశాలు కల్పించే వేదిక.",
  },
  {
    id: 8,
    image: founder,
    category: "సంస్థ నాయకత్వం",
    tag: "వ్యవస్థాపకులు",
    title: "కళారత్న కత్తిమండ ప్రతాప్ కుమార్",
    description:
      "శ్రీ శ్రీ కళావేదిక వ్యవస్థాపకులు మరియు అంతర్జాతీయ అధ్యక్షులు.",
  },
  {
    id: 9,
    image: founderpic2,
    category: "సంస్థ నాయకత్వం",
    tag: "నాయకత్వం",
    title: "సాహిత్య ప్రస్థానానికి మార్గదర్శి",
    description:
      "తెలుగు భాష, సాహిత్యం మరియు కళల అభివృద్ధికి అంకితమైన ప్రయాణం.",
  },
  {
    id: 10,
    image: cleb1,
    category: "గౌరవ సత్కారాలు",
    tag: "గౌరవం",
    title: "ప్రతిభకు పట్టాభిషేకం",
    description:
      "సాహిత్య మరియు కళారంగాల్లో ప్రతిభావంతులకు గుర్తింపు మరియు గౌరవం.",
  },
  {
    id: 11,
    image: cleb2,
    category: "గౌరవ సత్కారాలు",
    tag: "సత్కారం",
    title: "గౌరవం – అభినందన",
    description:
      "విశిష్ట వ్యక్తులు మరియు కళాకారులను గౌరవించే ప్రత్యేక సందర్భాలు.",
  },
  {
    id: 12,
    image: founderwithcbn,
    category: "ప్రత్యేక క్షణాలు",
    tag: "ప్రత్యేక సందర్భం",
    title: "మరపురాని సమావేశం",
    description:
      "సంస్థ ప్రయాణంలో నిలిచిపోయే ప్రత్యేక పరిచయాలు మరియు సందర్భాలు.",
  },
  {
    id: 13,
    image: founderwithcbn2,
    category: "ప్రత్యేక క్షణాలు",
    tag: "జ్ఞాపకాలు",
    title: "స్ఫూర్తినిచ్చే జ్ఞాపకాలు",
    description:
      "సాహిత్య మరియు సామాజిక సేవా ప్రస్థానంలోని ప్రత్యేక క్షణాలు.",
  },
  {
    id: 14,
    image: news,
    category: "మీడియా విశేషాలు",
    tag: "మీడియా",
    title: "వార్తల్లో శ్రీ శ్రీ కళావేదిక",
    description:
      "సంస్థ కార్యక్రమాలకు సంబంధించిన వార్తలు మరియు మీడియా విశేషాలు.",
  },
  {
    id: 15,
    image: note,
    category: "మీడియా విశేషాలు",
    tag: "ప్రచురణలు",
    title: "సాహిత్య ప్రస్థానపు గుర్తులు",
    description:
      "సాహిత్య కార్యక్రమాలు, ప్రచురణలు మరియు సంస్థ విశేషాలు.",
  },
];

const filters = [
  "అన్ని చిత్రాలు",
  "సాహిత్య కార్యక్రమాలు",
  "సాంస్కృతిక కార్యక్రమాలు",
  "ప్రత్యేక కార్యక్రమాలు",
  "సంస్థ నాయకత్వం",
  "గౌరవ సత్కారాలు",
  "ప్రత్యేక క్షణాలు",
  "మీడియా విశేషాలు",
];

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState("అన్ని చిత్రాలు");
  const [selectedImage, setSelectedImage] = useState(null);
  const [failedImages, setFailedImages] = useState([]);

  const visibleItems =
    activeFilter === "అన్ని చిత్రాలు"
      ? galleryItems
      : galleryItems.filter(
          (item) => item.category === activeFilter
        );

  const openImage = (item) => {
    setSelectedImage(item);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const index = visibleItems.findIndex(
      (item) => item.id === selectedImage.id
    );

    const nextIndex = (index + 1) % visibleItems.length;
    setSelectedImage(visibleItems[nextIndex]);
  };

  const previousImage = () => {
    const index = visibleItems.findIndex(
      (item) => item.id === selectedImage.id
    );

    const previousIndex =
      (index - 1 + visibleItems.length) % visibleItems.length;

    setSelectedImage(visibleItems[previousIndex]);
  };

  useEffect(() => {
    if (!selectedImage) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") closeImage();
      if (event.key === "ArrowRight") nextImage();
      if (event.key === "ArrowLeft") previousImage();
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [selectedImage, visibleItems]);

  const handleImageError = (id) => {
    setFailedImages((previous) =>
      previous.includes(id) ? previous : [...previous, id]
    );
  };

  return (
    <main className="skv-gallery">

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Telugu:wght@400;500;600;700;800&family=Noto+Serif+Telugu:wght@400;500;600;700&display=swap');

        .skv-gallery {
          --wine: #761d37;
          --wine-dark: #421426;
          --gold: #c4a16b;
          --cream: #faf7f1;
          background: var(--cream);
          color: #34272b;
          font-family: "Noto Sans Telugu", sans-serif;
          min-height: 100vh;
          overflow: hidden;
        }

        .skv-gallery * {
          box-sizing: border-box;
        }

        /* HERO */

        .gallery-hero {
          position: relative;
          padding: 100px 24px 95px;
          text-align: center;
          overflow: hidden;
          background:
            radial-gradient(circle at 12% 18%, rgba(255,255,255,.9), transparent 30%),
            radial-gradient(circle at 90% 80%, rgba(196,161,107,.2), transparent 30%),
            linear-gradient(130deg, #f0e4d8, #fffaf3 55%, #f1e2d7);
        }

        .gallery-hero::before,
        .gallery-hero::after {
          content: "";
          position: absolute;
          width: 280px;
          height: 280px;
          border: 1px solid rgba(118,29,55,.12);
          border-radius: 50%;
          pointer-events: none;
        }

        .gallery-hero::before {
          top: -160px;
          left: -80px;
          box-shadow:
            0 0 0 25px rgba(118,29,55,.025),
            0 0 0 50px rgba(118,29,55,.02);
        }

        .gallery-hero::after {
          right: -100px;
          bottom: -190px;
          box-shadow:
            0 0 0 25px rgba(196,161,107,.05),
            0 0 0 50px rgba(196,161,107,.03);
        }

        .gallery-hero-content {
          position: relative;
          z-index: 1;
          max-width: 900px;
          margin: auto;
          animation: galleryRise .8s ease both;
        }

        .gallery-kicker {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 22px;
          color: #a17d4e;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 3px;
        }

        .gallery-kicker::before,
        .gallery-kicker::after {
          content: "";
          width: 35px;
          height: 1px;
          background: var(--gold);
        }

        .gallery-hero h1 {
          margin: 0;
          color: var(--wine-dark);
          font-family: "Noto Serif Telugu", serif;
          font-size: clamp(30px, 5vw, 52px);
          font-weight: 700;
          line-height: 1.6;
        }

        .gallery-hero h1 span {
          color: var(--wine);
        }

        .gallery-hero p {
          max-width: 720px;
          margin: 18px auto 0;
          color: #78686b;
          font-size: 14px;
          line-height: 2;
        }

        .gallery-ornament {
          margin-top: 25px;
          color: var(--gold);
          font-size: 20px;
          letter-spacing: 8px;
        }

        /* MAIN */

        .gallery-container {
          width: min(1240px, calc(100% - 44px));
          margin: auto;
          padding: 78px 0 95px;
        }

        .gallery-heading {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          gap: 25px;
          margin-bottom: 32px;
        }

        .gallery-overline {
          display: block;
          margin-bottom: 10px;
          color: #a17d4e;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 2.5px;
        }

        .gallery-heading h2 {
          margin: 0;
          color: var(--wine-dark);
          font-family: "Noto Serif Telugu", serif;
          font-size: clamp(24px, 3vw, 34px);
          line-height: 1.6;
        }

        .gallery-heading p {
          max-width: 650px;
          margin: 10px 0 0;
          color: #827579;
          font-size: 13px;
          line-height: 2;
        }

        .gallery-total {
          flex-shrink: 0;
          padding: 12px 18px;
          border: 1px solid rgba(118,29,55,.14);
          border-radius: 30px;
          color: var(--wine);
          background: white;
          font-size: 12px;
          font-weight: 700;
        }

        /* FILTERS */

        .gallery-filters {
          display: flex;
          flex-wrap: wrap;
          gap: 9px;
          padding-bottom: 22px;
          margin-bottom: 32px;
          border-bottom: 1px solid rgba(118,29,55,.1);
        }

        .gallery-filters button {
          padding: 10px 17px;
          border: 1px solid rgba(118,29,55,.15);
          border-radius: 30px;
          background: white;
          color: #75656a;
          font-family: inherit;
          font-size: 12px;
          font-weight: 600;
          cursor: pointer;
          transition: .25s ease;
        }

        .gallery-filters button:hover {
          border-color: var(--gold);
          color: var(--wine);
          transform: translateY(-2px);
        }

        .gallery-filters button.active {
          color: white;
          background: var(--wine);
          border-color: var(--wine);
          box-shadow: 0 7px 20px rgba(118,29,55,.16);
        }

        /* GRID */

        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 25px;
        }

        .gallery-card {
          min-width: 0;
          overflow: hidden;
          border: 1px solid rgba(118,29,55,.08);
          border-radius: 15px;
          background: white;
          box-shadow: 0 8px 28px rgba(60,30,39,.045);
          animation: galleryRise .6s ease both;
          transition: transform .3s ease, box-shadow .3s ease;
        }

        .gallery-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 18px 42px rgba(60,30,39,.11);
        }

        .gallery-photo {
          position: relative;
          width: 100%;
          height: 285px;
          padding: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          background: linear-gradient(145deg, #eee7df, #fffaf4);
        }

        .gallery-photo img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: contain;
          transition: transform .45s ease;
        }

        .gallery-card:hover .gallery-photo img {
          transform: scale(1.035);
        }

        .gallery-photo button {
          position: absolute;
          z-index: 2;
          right: 19px;
          bottom: 17px;
          width: 40px;
          height: 40px;
          border: 1px solid rgba(118,29,55,.12);
          border-radius: 50%;
          background: rgba(255,255,255,.96);
          color: var(--wine);
          font-size: 20px;
          cursor: pointer;
          opacity: 0;
          transform: translateY(6px);
          transition: .25s ease;
        }

        .gallery-card:hover .gallery-photo button,
        .gallery-photo button:focus-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .gallery-photo .image-error {
          display: flex;
          width: 100%;
          height: 100%;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          gap: 10px;
          padding: 20px;
          text-align: center;
          color: #8c7077;
          font-size: 12px;
          background: #f4ece5;
        }

        .image-error strong {
          color: var(--wine);
          font-size: 13px;
        }

        .gallery-card-content {
          padding: 20px 21px 23px;
        }

        .gallery-tag {
          display: inline-block;
          color: #a5814e;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 1.5px;
        }

        .gallery-card-content h3 {
          margin: 9px 0 7px;
          color: var(--wine-dark);
          font-family: "Noto Serif Telugu", serif;
          font-size: 17px;
          line-height: 1.7;
          font-weight: 600;
        }

        .gallery-card-content p {
          margin: 0;
          color: #897c80;
          font-size: 12px;
          line-height: 1.9;
        }

        /* CLOSING MESSAGE */

        .gallery-message {
          margin-top: 82px;
          padding: 48px 25px;
          text-align: center;
          border: 1px solid rgba(196,161,107,.27);
          border-radius: 17px;
          background: linear-gradient(130deg, #f1e6d9, #fffaf3);
        }

        .gallery-message .decoration {
          color: var(--gold);
          font-size: 24px;
        }

        .gallery-message h3 {
          margin: 14px 0 9px;
          color: var(--wine-dark);
          font-family: "Noto Serif Telugu", serif;
          font-size: clamp(20px, 3vw, 29px);
          line-height: 1.8;
        }

        .gallery-message p {
          margin: 0;
          color: #827478;
          font-size: 13px;
          line-height: 2;
        }

        /* LIGHTBOX */

        .gallery-lightbox {
          position: fixed;
          inset: 0;
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 22px;
          background: rgba(25,9,16,.94);
          backdrop-filter: blur(10px);
          animation: galleryFade .25s ease;
        }

        .gallery-lightbox-inner {
          position: relative;
          width: min(1050px, 100%);
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .gallery-lightbox-image {
          width: 100%;
          height: min(72vh, 750px);
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .gallery-lightbox-image img {
          max-width: 100%;
          max-height: 100%;
          width: auto;
          height: auto;
          object-fit: contain;
          border-radius: 7px;
        }

        .gallery-lightbox-caption {
          padding: 17px 45px 0;
          text-align: center;
        }

        .gallery-lightbox-caption span {
          color: #d5b475;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 2px;
        }

        .gallery-lightbox-caption h3 {
          margin: 7px 0 0;
          color: #fff5e6;
          font-family: "Noto Serif Telugu", serif;
          font-size: 20px;
        }

        .gallery-close,
        .gallery-nav {
          position: absolute;
          z-index: 3;
          display: flex;
          justify-content: center;
          align-items: center;
          border: 1px solid rgba(255,255,255,.22);
          background: rgba(255,255,255,.1);
          color: white;
          cursor: pointer;
          transition: .2s ease;
        }

        .gallery-close {
          top: 0;
          right: 0;
          width: 43px;
          height: 43px;
          border-radius: 50%;
          font-size: 24px;
        }

        .gallery-nav {
          top: 50%;
          width: 47px;
          height: 47px;
          border-radius: 50%;
          font-size: 28px;
          transform: translateY(-50%);
        }

        .gallery-nav.prev { left: -65px; }
        .gallery-nav.next { right: -65px; }

        .gallery-close:hover,
        .gallery-nav:hover {
          background: #f0d29b;
          color: var(--wine-dark);
          border-color: #f0d29b;
        }

        @keyframes galleryRise {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes galleryFade {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        /* TABLET */

        @media (max-width: 950px) {
          .gallery-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .gallery-nav.prev { left: 7px; }
          .gallery-nav.next { right: 7px; }
        }

        /* MOBILE */

        @media (max-width: 600px) {
          .gallery-hero {
            padding: 75px 18px;
          }

          .gallery-hero h1 {
            font-size: 29px;
          }

          .gallery-hero p {
            font-size: 12px;
          }

          .gallery-container {
            width: calc(100% - 30px);
            padding: 55px 0 70px;
          }

          .gallery-heading {
            align-items: flex-start;
            flex-direction: column;
          }

          .gallery-filters {
            flex-wrap: nowrap;
            overflow-x: auto;
            scrollbar-width: thin;
          }

          .gallery-filters button {
            flex-shrink: 0;
          }

          .gallery-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .gallery-photo {
            height: 270px;
          }

          .gallery-photo button {
            opacity: 1;
            transform: none;
          }

          .gallery-message {
            margin-top: 55px;
            padding: 35px 18px;
          }

          .gallery-lightbox {
            padding: 12px;
          }

          .gallery-lightbox-image {
            height: 65vh;
          }

          .gallery-nav {
            width: 38px;
            height: 38px;
          }

          .gallery-nav.prev { left: 4px; }
          .gallery-nav.next { right: 4px; }

          .gallery-close {
            top: 8px;
            right: 8px;
          }

          .gallery-lightbox-caption h3 {
            font-size: 16px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .skv-gallery *,
          .skv-gallery *::before,
          .skv-gallery *::after {
            animation-duration: .01ms !important;
            transition-duration: .01ms !important;
          }
        }
      `}</style>

      {/* HERO */}
      <section className="gallery-hero">
        <div className="gallery-hero-content">
          <div className="gallery-kicker">
            OUR JOURNEY · OUR MEMORIES
          </div>

          <h1>
            జ్ఞాపకాలలో <span>చిరస్థాయిగా</span>
            <br />
            నిలిచే క్షణాలు
          </h1>

          <p>
            సాహిత్య, సాంస్కృతిక మరియు సామాజిక సేవా ప్రస్థానంలో
            నిలిచిన కొన్ని ప్రత్యేక దృశ్యాలు.
          </p>

          <div className="gallery-ornament">
            ✦ ─── ✦ ─── ✦
          </div>
        </div>
      </section>

      {/* GALLERY SECTION */}
      <section className="gallery-container">

        <div className="gallery-heading">
          <div>
            <span className="gallery-overline">
              A COLLECTION OF MEMORIES
            </span>

            <h2>మా ప్రయాణం – చిత్రాల రూపంలో</h2>

            <p>
              ప్రతి చిత్రం ఒక కథను చెబుతుంది. ప్రతి సందర్భం ఒక
              అనుభవాన్ని గుర్తు చేస్తుంది. మా సంస్థ సాహిత్య,
              సాంస్కృతిక మరియు సేవా కార్యక్రమాల జ్ఞాపకాలను
              ఈ చిత్రమాలికలో చూడండి.
            </p>
          </div>

          <div className="gallery-total">
            {visibleItems.length} చిత్రాలు
          </div>
        </div>

        {/* FILTER BUTTONS */}
        <div className="gallery-filters">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              className={
                activeFilter === filter ? "active" : ""
              }
              onClick={() => {
                setActiveFilter(filter);
                setSelectedImage(null);
              }}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* IMAGE CARDS */}
        <div className="gallery-grid">
          {visibleItems.map((item, index) => (
            <article
              className="gallery-card"
              key={item.id}
              style={{ animationDelay: `${index * 60}ms` }}
            >
              <div className="gallery-photo">

                {failedImages.includes(item.id) ? (
                  <div className="image-error">
                    <strong>చిత్రం లోడ్ కాలేదు</strong>
                    {item.title}
                  </div>
                ) : (
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    onError={() => handleImageError(item.id)}
                  />
                )}

                <button
                  type="button"
                  aria-label="చిత్రాన్ని పెద్దగా చూడండి"
                  onClick={() => openImage(item)}
                >
                  ↗
                </button>
              </div>

              <div className="gallery-card-content">
                <span className="gallery-tag">
                  {item.tag}
                </span>

                <h3>{item.title}</h3>

                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </div>

        {/* CLOSING MESSAGE */}
        <div className="gallery-message">
          <div className="decoration">✦</div>

          <h3>
            ప్రతి కార్యక్రమం ఒక జ్ఞాపకం...
            <br />
            ప్రతి జ్ఞాపకం ఒక స్ఫూర్తి...
          </h3>

          <p>
            తెలుగు భాష, సాహిత్యం, సంస్కృతి మరియు కళల అభివృద్ధి కోసం
            శ్రీ శ్రీ కళావేదిక ప్రయాణం నిరంతరం కొనసాగుతుంది.
          </p>
        </div>

      </section>

      {/* FULL IMAGE VIEWER */}
      {selectedImage && (
        <div
          className="gallery-lightbox"
          onClick={closeImage}
          role="dialog"
          aria-modal="true"
          aria-label="చిత్ర వీక్షణ"
        >
          <div
            className="gallery-lightbox-inner"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="gallery-close"
              type="button"
              onClick={closeImage}
              aria-label="మూసివేయండి"
            >
              ×
            </button>

            {visibleItems.length > 1 && (
              <>
                <button
                  className="gallery-nav prev"
                  type="button"
                  onClick={previousImage}
                  aria-label="మునుపటి చిత్రం"
                >
                  ‹
                </button>

                <button
                  className="gallery-nav next"
                  type="button"
                  onClick={nextImage}
                  aria-label="తదుపరి చిత్రం"
                >
                  ›
                </button>
              </>
            )}

            <div className="gallery-lightbox-image">
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
              />
            </div>

            <div className="gallery-lightbox-caption">
              <span>{selectedImage.category}</span>
              <h3>{selectedImage.title}</h3>
            </div>
          </div>
        </div>
      )}

    </main>
  );
}
