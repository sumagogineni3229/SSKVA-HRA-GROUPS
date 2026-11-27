import React from "react";
import { Link } from "react-router-dom";

import {
  ArrowUpRight,
  BookOpen,
  Feather,
  HeartHandshake,
  Sparkles,
  Award,
  Users,
  CalendarDays,
  Newspaper,
  Quote,
  ChevronRight,
  Globe2,
  PenLine,
  Landmark,
  Star
} from "lucide-react";

import celeb1 from "../assets/founderpic2.png";
import celeb2 from "../assets/news.png";
import founder from "../assets/founder.png";
import founderPic from "../assets/founderpic2.png";
import founderWithCbn from "../assets/founderwithcbn.png";
import founderWithCbn2 from "../assets/founderwithcbn2.png";
import homePhotoStoryThird from "../assets/home-photo-story-third.jpg";
import news from "../assets/news.png";
import note from "../assets/note.png";


/* =========================================================
   HOME DATA
========================================================= */

const pillars = [
  {
    number: "౦౧",
    icon: Feather,
    title: "సాహిత్యం",
    text:
      "కవిత్వం, కథ, నవల, వ్యాసం, విమర్శ, పరిశోధన వంటి సాహిత్య ప్రక్రియలకు ప్రోత్సాహం అందిస్తూ రచయితల సృజనకు గౌరవం కల్పించడం మా ప్రధాన సంకల్పం."
  },
  {
    number: "౦౨",
    icon: Sparkles,
    title: "సంస్కృతి",
    text:
      "తెలుగు సంప్రదాయాలు, ఆచారాలు, భాషా వైభవం మరియు సాంస్కృతిక విలువలను భావితరాలకు పరిచయం చేస్తూ మన మూలాలను కాపాడటం."
  },
  {
    number: "౦౩",
    icon: BookOpen,
    title: "కళలు",
    text:
      "సంగీతం, నృత్యం, చిత్రకళ, రంగస్థలం మరియు ఇతర కళారూపాలలో ప్రతిభను వెలికితీసి వారికి తగిన వేదికను అందించడం."
  },
  {
    number: "౦౪",
    icon: HeartHandshake,
    title: "సామాజిక సేవ",
    text:
      "సాహిత్యం మరియు కళలతో పాటు సమాజానికి ఉపయోగపడే సేవా కార్యక్రమాలను నిర్వహిస్తూ మానవీయ విలువలను ముందుకు తీసుకెళ్లడం."
  }
];


const journeyItems = [
  {
    number: "౦౧",
    title: "ప్రతిభను గుర్తించడం",
    text:
      "ఎక్కడ ఉన్నా, ఏ వయస్సులో ఉన్నా, సృజనాత్మక ప్రతిభను గుర్తించి సరైన వేదికను అందించడం."
  },
  {
    number: "౦౨",
    title: "గౌరవించడం",
    text:
      "కవులు, రచయితలు, కళాకారులు, సాహితీవేత్తలు మరియు సేవా ప్రతిభావంతులను గౌరవించడం."
  },
  {
    number: "౦౩",
    title: "ప్రపంచానికి పరిచయం చేయడం",
    text:
      "తెలుగు ప్రతిభను ప్రాంతీయ పరిధిని దాటి జాతీయ మరియు అంతర్జాతీయ స్థాయికి తీసుకెళ్లడం."
  },
  {
    number: "౦౪",
    title: "భావితరాలకు అందించడం",
    text:
      "మన భాష, సంస్కృతి, సాహిత్య విలువలను తదుపరి తరాలకు సజీవ వారసత్వంగా అందించడం."
  }
];


const recognitionList = [
  "ఆంధ్రప్రదేశ్ ప్రభుత్వ కళారత్న అవార్డు గ్రహీత",
  "ఆంధ్రప్రదేశ్ సాహిత్య అకాడమి పూర్వ సభ్యులు",
  "పద్మభూషణ్ బోయి భీమన్న కవి ప్రభుత్వ జీవిత సాఫల్య పురస్కార గ్రహీత",
  "మహాకవి గుర్రం జాషువా కవి ప్రభుత్వ పురస్కార గ్రహీత",
  "ప్రభుత్వ ఉగాది పురస్కార గ్రహీత",
  "ఆంధ్రప్రదేశ్ రాష్ట్ర సాహిత్య అకాడమి పురస్కార గ్రహీత",
  "మీడియా అకాడమీ తెలుగు భాషా పురస్కార గ్రహీత"
];


const activities = [
  {
    icon: CalendarDays,
    title: "సాహిత్య కార్యక్రమాలు",
    text:
      "కవిసమ్మేళనాలు, సాహిత్య సభలు, చర్చాగోష్టులు మరియు ప్రత్యేక సాహిత్య కార్యక్రమాలు."
  },
  {
    icon: Users,
    title: "ప్రతిభా సత్కారాలు",
    text:
      "వివిధ రంగాలలో ప్రతిభ కనబరిచిన కవులు, రచయితలు మరియు కళాకారులకు సత్కారాలు."
  },
  {
    icon: Globe2,
    title: "జాతీయ అంతర్జాతీయ వేదికలు",
    text:
      "దేశ విదేశాల్లోని తెలుగు సాహితీ, సాంస్కృతిక వర్గాలను ఒకే వేదికపైకి తీసుకురావడం."
  },
  {
    icon: BookOpen,
    title: "పుస్తక ప్రచురణలు",
    text:
      "రచయితల రచనలను పాఠకులకు చేరువ చేసే ప్రచురణ మరియు సాహిత్య కార్యక్రమాలు."
  }
];


export default function Home() {
  return (
    <main className="kalavedika-home">

      {/* =====================================================
          SIGNATURE FOUNDER HERO
      ===================================================== */}

      <section className="signature-founder-hero">

        <div className="signature-bg-image" />
        <div className="signature-vignette" />
        <div className="signature-grain" />

        <div className="signature-line signature-line-left" />
        <div className="signature-line signature-line-right" />

        <div className="signature-orbit signature-orbit-one" />
        <div className="signature-orbit signature-orbit-two" />

        <div className="kalavedika-container signature-hero-inner">

          <div className="signature-copy">

            <div className="signature-topline">
              <span />
              శ్రీ శ్రీ కళావేదిక
              <span />
            </div>

            <div className="signature-kicker">
              అంతర్జాతీయ సాహిత్య • సాంస్కృతిక • సామాజిక సేవా సంస్థ
            </div>

            <h1 className="signature-title">
              శ్రీ శ్రీ కళావేదిక
              <br />
              నిరంతర సాహిత్య ప్రయాణం – ప్రభంజనం
            </h1>

            <p className="signature-description">
              తెలుగు వైభవం...
              <br className="desktop-break" />
              తెలుగు సాహిత్యం...
              <br className="desktop-break" />
              తెలుగు సాంప్రదాయం.
            </p>

            <div className="signature-motto">
              <span className="motto-mark">“</span>
              <div>
                <strong>ప్రతిభ మీది...పట్టాభిషేకం మాది...</strong>
              </div>
            </div>

            <div className="signature-actions">

              <Link
                to="/about"
                className="signature-main-button"
              >
                మా ప్రస్థానం
                <ArrowUpRight size={16} />
              </Link>

              <Link
                to="/founder"
                className="signature-text-button"
              >
                వ్యవస్థాపకుని గురించి
                <span>→</span>
              </Link>

            </div>

          </div>


          <div className="signature-founder-visual">

            <div className="founder-aura" />

            <div className="founder-portrait-frame">

              <div className="portrait-inner">

                <img
                  src={founder}
                  alt="కళారత్న కత్తిమండ ప్రతాప్ కుమార్"
                  className="founder-portrait"
                />

                <div className="portrait-light" />

                <div className="founder-nameplate">

                  <span>కళారత్న</span>

                  <strong>
                    కత్తిమండ ప్రతాప్ కుమార్
                  </strong>

                  <small>
                    Founder & Chairman
                  </small>

                </div>

              </div>

              <i className="portrait-corner corner-top-left" />
              <i className="portrait-corner corner-top-right" />
              <i className="portrait-corner corner-bottom-left" />
              <i className="portrait-corner corner-bottom-right" />

            </div>


            <div className="founder-medallion">

              <div className="medallion-inner">

                <span>శ్రీ శ్రీ</span>
                <strong>కళావేదిక</strong>
                <small>సాహిత్య • సంస్కృతి • సేవ</small>

              </div>

            </div>


            <div className="founder-floating-card">

              <Sparkles size={13} />

    

            </div>

          </div>

        </div>


        <div className="signature-bottom-bar">

          <span>
            LITERATURE
          </span>

          <i />

          <span>
            CULTURE
          </span>

          <i />

          <span>
            SERVICE
          </span>

          <i />

          <span>
            HERITAGE
          </span>

        </div>


        <div className="signature-scroll">
          <span>ప్రయాణాన్ని అన్వేషించండి</span>
          <i />
        </div>

      </section>


      {/* =====================================================
          INTRODUCTION
      ===================================================== */}

      <section className="introduction-section">

        <div className="kalavedika-container">

          <div className="intro-top">

            <div>

              <span className="eyebrow">
                మా ఆలోచన
              </span>

              <h2>

                తెలుగు తనాన్ని
                <br />

                <span>తరతరాలకు అందించే</span>
                <br />

                ఒక సుదీర్ఘ ప్రయాణం

              </h2>

            </div>


            <div className="intro-side-text">

              <span>
                ౦౧
              </span>

              <p>

                ఒక భాషను కాపాడటం అంటే
                కేవలం అక్షరాలను కాపాడటం కాదు.
                ఆ భాషతో ముడిపడిన జ్ఞాపకాలను,
                సంస్కృతిని, ఆలోచనలను,
                కళలను మరియు జీవన విలువలను
                కాపాడటం.

              </p>

            </div>

          </div>


          <div className="intro-content-grid">

            <div className="intro-large-copy">

              <p>

                తెలుగు భాషకు వేల సంవత్సరాల చరిత్ర ఉంది.
                ఎన్నో తరాల కవులు, రచయితలు, కళాకారులు,
                ఆలోచనాపరులు ఈ భాషను తమ సృజనతో
                సుసంపన్నం చేశారు.

              </p>


              <p>

                ఆ మహత్తర వారసత్వాన్ని కేవలం గతానికి
                పరిమితం చేయకుండా, నేటి తరానికి చేరువ చేసి,
                రేపటి తరానికి అందించాలనే సంకల్పంతో
                శ్రీ శ్రీ కళావేదిక తన సేవా ప్రస్థానాన్ని
                కొనసాగిస్తోంది.

              </p>


              <p>

                ఒక కవి రాసిన పద్యం కావచ్చు...
                ఒక రచయిత రాసిన కథ కావచ్చు...
                ఒక కళాకారుడి ప్రదర్శన కావచ్చు...
                ఒక యువ ప్రతిభ యొక్క తొలి అడుగు కావచ్చు...

                ప్రతి సృజనకు విలువ ఉందని నమ్మే వేదిక ఇది.

              </p>

            </div>


            <div className="intro-side-card">

              <span>
                మా నమ్మకం
              </span>

              <h3>
                ప్రతి ప్రతిభ
                <br />
                ఒక కథ.
              </h3>

              <p>

                ఆ కథను ప్రపంచానికి పరిచయం చేయడానికి
                ఒక వేదిక అవసరం.
                ఆ వేదికగా నిలవడమే మా ప్రయత్నం.

              </p>

              <div className="side-card-mark">
                ❧
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          FOUR PILLARS
      ===================================================== */}

      <section className="pillars-section">

        <div className="kalavedika-container">

          <div className="section-heading-centered">

            <span className="eyebrow">
              మా నాలుగు స్తంభాలు
            </span>

            <h2>
              సాహిత్యం నుంచి
              <br />
              <span>సేవ వరకు...</span>
            </h2>

            <p>

              తెలుగు భాష, కళలు, సంస్కృతి మరియు
              సామాజిక విలువలను ఒకే ఆలోచనగా
              ముందుకు తీసుకెళ్లే నాలుగు ప్రధాన మార్గాలు.

            </p>

          </div>


          <div className="pillars-grid">

            {pillars.map(
              ({
                number,
                icon: Icon,
                title,
                text
              }) => (

                <article
                  className="pillar-card"
                  key={title}
                >

                  <div className="pillar-number">
                    {number}
                  </div>

                  <div className="pillar-icon">
                    <Icon size={23} />
                  </div>

                  <h3>
                    {title}
                  </h3>

                  <p>
                    {text}
                  </p>

                  <span className="pillar-line" />

                </article>

              )
            )}

          </div>

        </div>

      </section>


      {/* =====================================================
          FOUNDER
      ===================================================== */}

      <section className="founder-section">

        <div className="founder-background">
          సాహిత్యం
        </div>

        <div className="kalavedika-container">

          <div className="founder-grid">

            <div className="founder-image-area">

              <div className="founder-image">

                <img
                  src={founderPic}
                  alt="కళారత్న కత్తిమండ ప్రతాప్ కుమార్"
                />

                <div className="image-border" />

              </div>


              <div className="founder-name-card">

                <span>
                  వ్యవస్థాపకులు
                </span>

                <strong>
                  కళారత్న కత్తిమండ ప్రతాప్ కుమార్
                </strong>

                <small>
                  శ్రీ శ్రీ కళావేదిక
                </small>

              </div>

            </div>


            <div className="founder-content">

              <span className="eyebrow">
                కళారత్న కత్తిమండ ప్రతాప్ కుమార్ గారి ఆలోచన
              </span>


              <h2>

                ఒక వేదికగా
                <br />

                మొదలై...
                <br />

                ఒక ఉద్యమంగా

              </h2>


              <div className="founder-role">

                Founder & Chairman
                <br />

                Sri Sri Kalavedhika –
                International Literary,
                Cultural & Social Service Organization

              </div>


              <p>

                తెలుగు సాహిత్యం, సంస్కృతి మరియు కళల పట్ల
                ఉన్న అపారమైన ప్రేమతో, ప్రతిభకు గౌరవం
                కల్పించాలనే ఆలోచనతో శ్రీ శ్రీ కళావేదిక
                తన ప్రయాణాన్ని కొనసాగిస్తోంది.

              </p>


              <p>

                వేలాది మంది కవులు, రచయితలు,
                సాహితీవేత్తలు, కళాకారులు, రంగస్థల
                ప్రతిభావంతులు మరియు యువ సృజనకారులకు
                తమ ప్రతిభను ప్రపంచానికి పరిచయం
                చేసుకునే వేదికగా నిలవడం ఈ ప్రయాణంలోని
                ముఖ్యమైన లక్ష్యం.

              </p>


              <div className="founder-quote">

                <Quote
                  size={27}
                  strokeWidth={1}
                />

                <div>

                  <strong>
                    “ప్రతిభ మీది...పట్టాభిషేకం మాది...”
                  </strong>

                </div>

              </div>


              <Link
                to="/founder"
                className="dark-link"
              >
                వ్యవస్థాపకుని పూర్తి సందేశం
                <ArrowUpRight size={17} />
              </Link>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          PRATHAP GARU SPECIAL SONG
      ===================================================== */}

      <section className="founder-song-section">
        <div className="song-orbit song-orbit-one" />
        <div className="song-orbit song-orbit-two" />
        <div className="kalavedika-container">
          <div className="song-heading">
            <span className="eyebrow song-eyebrow">ప్రత్యేక గీతం</span>
            <h2>కళారత్న కత్తిమండ<br /><span>ప్రతాప్ కుమార్ గారి ప్రత్యేక గీతం</span></h2>
            <p>తెలుగు సాహిత్యం, సంస్కృతి, కళలు మరియు సేవా ప్రస్థానానికి అంకితమైన కళారత్న కత్తిమండ ప్రతాప్ కుమార్ గారిని గౌరవిస్తూ రూపొందించిన ప్రత్యేక గీతం.</p>
          </div>
          <div className="founder-song-card">
            <div className="founder-song-video">
              <iframe src="https://www.youtube.com/embed/9FlyRpn78kA" title="కళారత్న కత్తిమండ ప్రతాప్ కుమార్ గారి ప్రత్యేక గీతం" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
            </div>
            <div className="founder-song-content">
              <div className="song-music-mark">♪</div>
              <span className="song-small-label">శ్రీ శ్రీ కళావేదిక</span>
              <h3>అక్షర సేవకు<br />ఒక గీత నివాళి</h3>
              <p>సాహిత్యానికి సేవగా, కళలకు వేదికగా, తెలుగు భాషా సంస్కృతికి వారసత్వంగా నిలుస్తున్న శ్రీ శ్రీ కళావేదిక ప్రస్థానంలో కళారత్న కత్తిమండ ప్రతాప్ కుమార్ గారి సేవా స్ఫూర్తిని ప్రతిబింబించే ప్రత్యేక గీతం.</p>
              <div className="song-divider"><span /><b>ప్రతిభ మీది...పట్టాభిషేకం మాది...</b><span /></div>
              <a href="https://youtu.be/9FlyRpn78kA" target="_blank" rel="noopener noreferrer" className="song-youtube-button">యూట్యూబ్‌లో చూడండి <ArrowUpRight size={16} /></a>
            </div>
          </div>
        </div>
      </section>


      {/* =====================================================
          JOURNEY
      ===================================================== */}

      <section className="journey-section">

        <div className="kalavedika-container">

          <div className="journey-heading">

            <div>

              <span className="eyebrow">
                మా ప్రస్థానం
              </span>

              <h2>
                ఒక కార్యక్రమం కాదు...
                <br />
                <span>ఒక నిరంతర ప్రయాణం.</span>
              </h2>

            </div>


            <p>

              ప్రతి నెలా నిర్వహించే కార్యక్రమాలు,
              ప్రతి సత్కారం, ప్రతి పరిచయం,
              ప్రతి కొత్త రచయిత — ఈ ప్రయాణంలోని
              ఒక కొత్త అధ్యాయం.

            </p>

          </div>


          <div className="journey-list">

            {journeyItems.map(
              (item) => (

                <div
                  className="journey-item"
                  key={item.number}
                >

                  <span>
                    {item.number}
                  </span>

                  <div>

                    <h3>
                      {item.title}
                    </h3>

                    <p>
                      {item.text}
                    </p>

                  </div>

                  <ArrowUpRight size={19} />

                </div>

              )
            )}

          </div>

        </div>

      </section>


      {/* =====================================================
          PHOTO STORY
      ===================================================== */}

      <section className="photo-story">

        <div className="kalavedika-container">

          <div className="photo-story-heading">

            <span className="eyebrow">
              జ్ఞాపకాలలో కొన్ని క్షణాలు
            </span>

            <h2>
              వేదికపై ప్రతిభ...
              <br />
              <span>మనసుల్లో జ్ఞాపకం.</span>
            </h2>

          </div>


          <div className="photo-story-grid">

            <div className="photo-large">

              <img
                src={founderWithCbn}
                alt="శ్రీ శ్రీ కళావేదిక"
              />

              <div className="photo-label">
                సాహిత్య సేవ
              </div>

            </div>


            <div className="photo-medium">

              <img
                src={founderWithCbn2}
                alt="శ్రీ శ్రీ కళావేదిక"
              />

            </div>


            <div className="photo-small">

              <img
                src={homePhotoStoryThird}
                alt="కళారత్న కత్తిమండ ప్రతాప్ కుమార్"
              />

            </div>


            <div className="photo-story-card">

              <span>
                మా లక్ష్యం
              </span>

              <h3>
                ప్రతిభకు
                <br />
                గౌరవం.
              </h3>

              <p>

                ఒక ప్రతిభను గుర్తించడం
                ఒక వ్యక్తిని గౌరవించడం మాత్రమే కాదు.
                సమాజానికి ఒక కొత్త స్ఫూర్తిని
                అందించడం.

              </p>

              <Link to="/activities">
                మా కార్యక్రమాలు
                <ArrowUpRight size={16} />
              </Link>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          ACTIVITIES
      ===================================================== */}

      <section className="activities-section">

        <div className="kalavedika-container">

          <div className="activities-heading">

            <div>

              <span className="eyebrow">
                మా కార్యక్రమాలు
              </span>

              <h2>
                అక్షరం నుంచి
                <br />
                <span>ఆచరణ వరకు.</span>
              </h2>

            </div>


            <Link
              to="/activities"
              className="outline-link"
            >
              అన్ని కార్యక్రమాలు
              <ArrowUpRight size={17} />
            </Link>

          </div>


          <div className="activities-grid">

            {activities.map(
              ({
                icon: Icon,
                title,
                text
              }) => (

                <article
                  className="activity-card"
                  key={title}
                >

                  <Icon
                    size={25}
                    strokeWidth={1.4}
                  />

                  <h3>
                    {title}
                  </h3>

                  <p>
                    {text}
                  </p>

                  <span>
                    <ArrowUpRight size={16} />
                  </span>

                </article>

              )
            )}

          </div>

        </div>

      </section>


      {/* =====================================================
          MEDIA
      ===================================================== */}

      <section className="media-section">

        <div className="kalavedika-container">

          <div className="media-grid">

            <div className="media-image">

              <div className="media-heading">

                <Newspaper size={17} />

                <span>
                  వార్తా విశేషాలు
                </span>

              </div>


              <div className="newspaper">

                <img
                  src={news}
                  alt="శ్రీ శ్రీ కళావేదిక వార్తా ప్రచురణ"
                />

              </div>

            </div>


            <div className="media-content">

              <span className="eyebrow">
                మీడియా & గుర్తింపు
              </span>


              <h2>
                మన ప్రయాణం
                <br />
                అక్షరాల్లోనూ...
                <br />
                జ్ఞాపకాలలోనూ.
              </h2>


              <p>

                శ్రీ శ్రీ కళావేదిక నిర్వహిస్తున్న
                సాహిత్య, సాంస్కృతిక మరియు సామాజిక
                సేవా కార్యక్రమాలు వివిధ సందర్భాలలో
                పత్రికలు మరియు ఇతర మాధ్యమాల ద్వారా
                ప్రజలకు చేరుతున్నాయి.

              </p>


              <p>

                ఒక వార్తా కథనం కేవలం ఒక కార్యక్రమాన్ని
                నమోదు చేయదు. అది ఒక కాలాన్ని,
                ఒక ఆలోచనను, ఒక సాహిత్య ప్రయాణాన్ని
                భవిష్యత్తు తరాల కోసం భద్రపరుస్తుంది.

              </p>


              <Link
                to="/gallery"
                className="dark-link"
              >
                మీడియా & చిత్రమాలిక
                <ArrowUpRight size={17} />
              </Link>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          RECOGNITIONS
      ===================================================== */}

      <section className="recognition-section">

        <div className="kalavedika-container">

          <div className="recognition-heading">

            <div>

              <span className="eyebrow">
                గౌరవాలు & పురస్కారాలు
              </span>

              <h2>
                ప్రతాపగారికి లభించిన పురస్కారాలు ఆయన చేసిన సేవలకు లభించిన గుర్తింపులు.
              </h2>

            </div>

            <Award
              size={55}
              strokeWidth={1}
            />

          </div>


          <div className="recognition-list">

            {recognitionList.map(
              (item, index) => (

                <div
                  className="recognition-row"
                  key={item}
                >

                  <span>
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <p>
                    {item}
                  </p>

                  <ArrowUpRight size={17} />

                </div>

              )
            )}

          </div>

        </div>

      </section>


      {/* =====================================================
          NOTE SECTION
      ===================================================== */}

      <section className="note-feature">

        <div className="kalavedika-container">

          <div className="note-grid">

            <div className="note-photo">

              <img
                src={note}
                alt="శ్రీ శ్రీ కళావేదిక"
              />

            </div>


            <div className="note-text">

              <span className="eyebrow">
                మా సందేశం
              </span>


              <h2>
                సాహిత్యాన్ని
                <br />
                <span>సేవగా...</span>
                <br />
                సంస్కృతిని
                <br />
                <span>వారసత్వంగా...</span>
              </h2>


              <p>

                సాహిత్యం ఒక పదం మాత్రమే కాదు.
                అది ఒక నాగరికతకు ప్రతీక,
                ఒక సంస్కృతికి వారసత్వం,
                ఒక సమాజానికి దిశానిర్దేశం చేసే శక్తి.

              </p>


              <p>

                తెలుగు భాష, సాహిత్యం మరియు సంస్కృతి
                ప్రపంచవ్యాప్తంగా చిరస్థాయిగా
                వెలుగొందాలనే సంకల్పంతో మా
                సేవా ప్రయాణం నిరంతరం కొనసాగుతోంది.

              </p>


              <Link
                to="/founder"
                className="dark-link"
              >
                పూర్తి సందేశం చదవండి
                <ArrowUpRight size={17} />
              </Link>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          WHY JOIN
      ===================================================== */}

      <section className="join-section">

        <div className="kalavedika-container">

          <div className="join-heading">

            <span className="eyebrow">
              మీ కోసం ఒక వేదిక
            </span>

            <h2>
              మీరు కవి అయితే...
              <br />

              మీరు రచయిత అయితే...
              <br />

              మీరు కళాకారుడు అయితే...
            </h2>

          </div>


          <div className="join-grid">

            <div>

              <PenLine size={24} />

              <h3>
                మీ రచనకు వేదిక
              </h3>

              <p>
                మీ ఆలోచనలను, మీ రచనలను
                మరింత మంది పాఠకులకు చేరువ
                చేసుకునే అవకాశం.
              </p>

            </div>


            <div>

              <Users size={24} />

              <h3>
                సాహితీ కుటుంబం
              </h3>

              <p>
                దేశ విదేశాల్లోని కవులు,
                రచయితలు, కళాకారులతో
                అనుసంధానం.
              </p>

            </div>


            <div>

              <Award size={24} />

              <h3>
                ప్రతిభకు గుర్తింపు
              </h3>

              <p>
                మీ సేవకు, సృజనకు మరియు
                ప్రతిభకు తగిన గౌరవం.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          FINAL QUOTE
      ===================================================== */}

      <section className="final-quote">

        <div className="quote-word">
          తెలుగు
        </div>

        <div className="kalavedika-container">

          <Quote
            size={40}
            strokeWidth={1}
          />

          <blockquote>

            తెలుగు భాష బతికితే
            <br />
            మన సంస్కృతి బతుకుతుంది.

          </blockquote>

          <span className="quote-line" />

          <span>
            శ్రీ శ్రీ కళావేదిక
          </span>

        </div>

      </section>


      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="final-cta">

        <div className="kalavedika-container">

          <div className="cta-layout">

            <div>

              <span>
                తెలుగు కోసం...
                తెలుగు తరాల కోసం...
              </span>

              <h2>
                ఈ ప్రయాణంలో
                <br />
                మీరూ భాగస్వాములు కండి.
              </h2>

              <p>

                సాహిత్యం, సంస్కృతి, కళలు మరియు
                సామాజిక సేవా కార్యక్రమాలతో
                కలిసి ముందుకు సాగుదాం.

              </p>

            </div>


            <Link
              to="/membership"
              className="cta-button"
            >
              సభ్యత్వం పొందండి
              <ArrowUpRight size={18} />
            </Link>

          </div>

        </div>

      </section>


      {/* =====================================================
          CSS
      ===================================================== */}

      <style>{`
        @import url("https://fonts.googleapis.com/css2?family=Noto+Serif+Telugu:wght@400;500;600;700&display=swap");
        @import url("https://fonts.googleapis.com/css2?family=Noto+Sans+Telugu:wght@400;500;600;700&display=swap");


        /* =====================================================
           BASE
        ===================================================== */

        .kalavedika-home {

          width: 100%;
          overflow: hidden;

          background: #fffaf3;
          color: #342822;

          font-family:
            "Noto Serif Telugu",
            "Nirmala UI",
            "Gautami",
            serif;

        }

        .kalavedika-home * {
          box-sizing: border-box;
        }

        .kalavedika-home a {
          text-decoration: none;
        }

        .kalavedika-home img {
          display: block;
          max-width: 100%;
        }

        .kalavedika-home .kalavedika-container {

          width: min(1180px, 92%);
          margin: 0 auto;

        }

        .eyebrow {

          display: inline-block;

          color: #a47735;

          font-size: 10px;
          font-weight: 600;

          letter-spacing: 1.5px;

        }


        /* =====================================================
           SIGNATURE FOUNDER HERO
        ===================================================== */

        .signature-founder-hero {
          position: relative;
          min-height: min(900px, 94vh);
          display: flex;
          align-items: center;
          overflow: hidden;
          isolation: isolate;
          color: #fff;
          background:
            radial-gradient(
              circle at 73% 48%,
              rgba(211,170,87,.16),
              transparent 25%
            ),
            linear-gradient(
              110deg,
              #3d0c1b 0%,
              #260b12 37%,
              #4b111d 69%,
              #452730 100%
            );
        }

        .signature-bg-image {
          position: absolute;
          right: -8%;
          top: -12%;
          width: 64%;
          height: 125%;
          z-index: -4;
          background-repeat: no-repeat;
          background-position: center 35%;
          background-size: cover;
          opacity: .075;
          filter: grayscale(1) sepia(.3) contrast(1.15);
          transform: scale(1.08);
          mask-image: linear-gradient(
            90deg,
            transparent 0%,
            rgba(0,0,0,.7) 35%,
            #000 70%
          );
          -webkit-mask-image: linear-gradient(
            90deg,
            transparent 0%,
            rgba(0,0,0,.7) 35%,
            #000 70%
          );
        }

        .signature-vignette {
          position: absolute;
          inset: 0;
          z-index: -3;
          background:
            linear-gradient(
              90deg,
              rgba(13,5,8,.95) 0%,
              rgba(30,8,14,.84) 36%,
              rgba(42,10,17,.40) 68%,
              rgba(13,5,8,.84) 100%
            );
        }

        .signature-grain {
          position: absolute;
          inset: 0;
          z-index: -2;
          opacity: .035;
          pointer-events: none;
          background-image:
            radial-gradient(#fff 0.6px, transparent 0.6px);
          background-size: 7px 7px;
        }

        .signature-line {
          position: absolute;
          top: 12%;
          bottom: 12%;
          width: 1px;
          background:
            linear-gradient(
              transparent,
              rgba(218,182,106,.24),
              transparent
            );
          opacity: .8;
        }

        .signature-line-left {
          left: 4.5%;
        }

        .signature-line-right {
          right: 4.5%;
        }

        .signature-orbit {
          position: absolute;
          border: 1px solid rgba(216,182,108,.13);
          border-radius: 50%;
          pointer-events: none;
        }

        .signature-orbit-one {
          width: 620px;
          height: 620px;
          right: -280px;
          top: -160px;
          box-shadow:
            0 0 0 32px rgba(216,182,108,.025),
            0 0 0 74px rgba(216,182,108,.015);
          animation: signatureOrbit 30s linear infinite;
        }

        .signature-orbit-two {
          width: 250px;
          height: 250px;
          left: -140px;
          bottom: -100px;
          opacity: .45;
        }

        @keyframes signatureOrbit {
          to {
            transform: rotate(360deg);
          }
        }

        .signature-hero-inner {
          position: relative;
          z-index: 5;
          display: grid;
          grid-template-columns: 1fr .9fr;
          align-items: center;
          gap: 50px;
          width: min(1250px, 89%);
          min-height: 760px;
          padding: 90px 0 70px;
        }

        .signature-copy {
          max-width: 680px;
          animation: signatureCopyIn .9s ease both;
        }

        @keyframes signatureCopyIn {
          from {
            opacity: 0;
            transform: translateY(25px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .signature-topline {
          display: flex;
          align-items: center;
          gap: 12px;
          color: #dfc487;
          font-family:
            "Noto Serif Telugu",
            "Noto Sans Telugu",
            serif;
          font-size: 11px;
          letter-spacing: .6px;
        }

        .signature-topline span {
          width: 34px;
          height: 1px;
          background: #b78a42;
        }

        .signature-kicker {
          margin-top: 17px;
          color: rgba(225,208,192,.64);
          font-family:
            "Noto Sans Telugu",
            "Nirmala UI",
            sans-serif;
          font-size: 9px;
          letter-spacing: .35px;
        }

        .signature-title {
          margin: 28px 0 0;
          font-family:
            "Noto Serif Telugu",
            "Noto Sans Telugu",
            serif;
          font-size: clamp(38px, 4.5vw, 64px);
          line-height: 1.1;
          font-weight: 600;
          letter-spacing: -1.5px;
        }

        .signature-title span {
          display: inline-block;
          color: #d8b66c;
          background:
            linear-gradient(
              105deg,
              #9c6e2f 0%,
              #f5dc98 26%,
              #b9893d 48%,
              #f3d48b 72%,
              #9c6e2f 100%
            );
          background-size: 230% auto;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: signatureGold 8s linear infinite;
        }

        @keyframes signatureGold {
          to {
            background-position: 230% center;
          }
        }

        .signature-description {
          margin: 27px 0 0;
          color: #d8c9c0;
          font-family:
            "Noto Sans Telugu",
            "Nirmala UI",
            sans-serif;
          font-size: 13px;
          line-height: 2.05;
        }

        .signature-motto {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          margin-top: 26px;
          padding-left: 16px;
          border-left: 1px solid rgba(216,182,108,.5);
        }

        .motto-mark {
          color: #d8b66c;
          font-family: Georgia, serif;
          font-size: 32px;
          line-height: .8;
        }

        .signature-motto strong,
        .signature-motto small {
          display: block;
          font-family:
            "Noto Serif Telugu",
            serif;
        }

        .signature-motto strong {
          color: #e5cc91;
          font-size: 12px;
          font-weight: 500;
        }

        .signature-motto small {
          margin-top: 5px;
          color: #a99990;
          font-size: 9px;
        }

        .signature-actions {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 23px;
          margin-top: 31px;
        }

        .signature-main-button,
        .signature-text-button {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          text-decoration: none;
          font-family:
            "Noto Serif Telugu",
            serif;
          font-size: 10px;
          transition: .3s ease;
        }

        .signature-main-button {
          padding: 13px 18px;
          color: #2b0c13;
          background: #d7b56c;
          box-shadow: 0 12px 30px rgba(0,0,0,.22);
        }

        .signature-main-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 16px 35px rgba(0,0,0,.3);
        }

        .signature-text-button {
          color: #e1d4cb;
          padding-bottom: 4px;
          border-bottom: 1px solid rgba(216,182,108,.45);
        }

        .signature-text-button:hover {
          color: #d8b66c;
          border-color: #d8b66c;
        }

        .signature-text-button span {
          color: #d8b66c;
          font-size: 15px;
        }

        .signature-founder-visual {
          position: relative;
          min-height: 620px;
          display: flex;
          align-items: center;
          justify-content: center;
          animation: signatureVisualIn 1s .15s ease both;
        }

        @keyframes signatureVisualIn {
          from {
            opacity: 0;
            transform: translateX(30px) scale(.96);
          }
          to {
            opacity: 1;
            transform: translateX(0) scale(1);
          }
        }

        .founder-aura {
          position: absolute;
          width: 490px;
          height: 490px;
          border-radius: 50%;
          background:
            radial-gradient(
              circle,
              rgba(216,182,108,.16) 0%,
              rgba(216,182,108,.05) 35%,
              transparent 69%
            );
          filter: blur(2px);
          animation: founderAura 5s ease-in-out infinite;
        }

        @keyframes founderAura {
          0%, 100% {
            transform: scale(.96);
            opacity: .75;
          }
          50% {
            transform: scale(1.04);
            opacity: 1;
          }
        }

        .founder-portrait-frame {
          position: relative;
          z-index: 4;
          width: min(430px, 100%);
          padding: 11px;
          background:
            linear-gradient(
              145deg,
              #f0d694,
              #8e6229 28%,
              #d6b36a 55%,
              #76501f 78%,
              #e2c77f
            );
          box-shadow:
            0 35px 80px rgba(0,0,0,.48),
            0 0 70px rgba(216,182,108,.12);
          transform: rotate(1deg);
        }

        .portrait-inner {
          position: relative;
          overflow: hidden;
          aspect-ratio: 4 / 5;
          background: #2b0b12;
        }

        .founder-portrait {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: cover;
          object-position: center top;
          animation: founderImageFloat 12s ease-in-out infinite alternate;
        }

        @keyframes founderImageFloat {
          from {
            transform: scale(1);
          }
          to {
            transform: scale(1.035);
          }
        }

        .portrait-light {
          position: absolute;
          inset: 0;
          pointer-events: none;
          background:
            linear-gradient(
              125deg,
              rgba(255,221,150,.16),
              transparent 28%,
              transparent 65%,
              rgba(0,0,0,.68)
            );
          mix-blend-mode: screen;
          opacity: .55;
        }

        .founder-nameplate {
          position: absolute;
          left: 22px;
          right: 22px;
          bottom: 19px;
          z-index: 3;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          padding: 13px 14px;
          background: linear-gradient(
            90deg,
            rgba(25,6,11,.9),
            rgba(25,6,11,.48),
            transparent
          );
          border-left: 2px solid #d8b66c;
          backdrop-filter: blur(3px);
        }

        .founder-nameplate span {
          color: #d8b66c;
          font-family: "Noto Sans Telugu", sans-serif;
          font-size: 8px;
          letter-spacing: 2px;
        }

        .founder-nameplate strong {
          margin-top: 4px;
          color: #fff;
          font-family:
            "Noto Serif Telugu",
            serif;
          font-size: 18px;
          font-weight: 500;
        }

        .founder-nameplate small {
          margin-top: 3px;
          color: #c9b7ad;
          font-family: "Noto Sans Telugu", sans-serif;
          font-size: 7px;
          letter-spacing: 1.3px;
        }

        .portrait-corner {
          position: absolute;
          z-index: 8;
          width: 31px;
          height: 31px;
          border-color: #f2d58c;
          border-style: solid;
        }

        .corner-top-left {
          top: -4px;
          left: -4px;
          border-width: 2px 0 0 2px;
        }

        .corner-top-right {
          top: -4px;
          right: -4px;
          border-width: 2px 2px 0 0;
        }

        .corner-bottom-left {
          bottom: -4px;
          left: -4px;
          border-width: 0 0 2px 2px;
        }

        .corner-bottom-right {
          bottom: -4px;
          right: -4px;
          border-width: 0 2px 2px 0;
        }

        .founder-medallion {
          position: absolute;
          z-index: 8;
          right: -28px;
          top: 50px;
          width: 112px;
          height: 112px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background:
            linear-gradient(145deg, #4a1823, #210911);
          border: 1px solid rgba(230,196,121,.68);
          box-shadow:
            0 20px 45px rgba(0,0,0,.35),
            inset 0 0 0 5px rgba(216,182,108,.055);
          animation: medallionFloat 4.5s ease-in-out infinite;
        }

        @keyframes medallionFloat {
          0%, 100% {
            transform: translateY(0) rotate(0);
          }
          50% {
            transform: translateY(-8px) rotate(3deg);
          }
        }

        .medallion-inner {
          width: 88px;
          height: 88px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 3px;
          border: 1px solid rgba(216,182,108,.28);
          border-radius: 50%;
          color: #d8b66c;
          text-align: center;
          font-family: "Noto Serif Telugu", serif;
        }

        .medallion-inner span {
          font-size: 9px;
        }

        .medallion-inner strong {
          font-size: 19px;
          font-weight: 500;
        }

        .medallion-inner small {
          color: #a99990;
          font-family: "Noto Sans Telugu", sans-serif;
          font-size: 5px;
        }

        .founder-floating-card {
          position: absolute;
          z-index: 9;
          left: 0;
          bottom: 62px;
          display: flex;
          align-items: center;
          gap: 9px;
          padding: 11px 14px;
          color: #dfd0c7;
          background: rgba(27,7,13,.88);
          border: 1px solid rgba(216,182,108,.25);
          box-shadow: 0 15px 35px rgba(0,0,0,.3);
          backdrop-filter: blur(12px);
        }

        .founder-floating-card svg {
          color: #d8b66c;
          flex-shrink: 0;
        }

        .founder-floating-card span,
        .founder-floating-card b {
          display: block;
          font-family: "Noto Sans Telugu", sans-serif;
        }

        .founder-floating-card span {
          color: #a99a92;
          font-size: 7px;
        }

        .founder-floating-card b {
          margin-top: 2px;
          color: #dec486;
          font-size: 8px;
          font-weight: 500;
        }

        .signature-bottom-bar {
          position: absolute;
          z-index: 7;
          left: 5%;
          right: 5%;
          bottom: 23px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          color: rgba(216,182,108,.56);
          font-family: Georgia, serif;
          font-size: 6px;
          letter-spacing: 3px;
        }

        .signature-bottom-bar i {
          width: 28px;
          height: 1px;
          background: rgba(216,182,108,.28);
        }

        .signature-scroll {
          position: absolute;
          z-index: 8;
          left: 4.5%;
          bottom: 23px;
          display: flex;
          align-items: center;
          gap: 9px;
          color: #a9978d;
          font-family: "Noto Sans Telugu", sans-serif;
          font-size: 7px;
        }

        .signature-scroll i {
          width: 28px;
          height: 1px;
          background: #9c7539;
        }

        @media (max-width: 1050px) {
          .signature-hero-inner {
            gap: 25px;
          }

          .signature-title {
            font-size: clamp(34px, 4.5vw, 46px);
          }

          .founder-medallion {
            right: -8px;
          }

          .signature-bg-image {
            width: 75%;
          }
        }

        @media (max-width: 820px) {
          .signature-founder-hero {
            min-height: auto;
          }

          .signature-line,
          .signature-orbit-one,
          .signature-side-brand {
            display: none;
          }

          .signature-hero-inner {
            grid-template-columns: 1fr;
            width: 90%;
            min-height: auto;
            padding: 70px 0 105px;
          }

          .signature-copy {
            max-width: 720px;
          }

          .signature-founder-visual {
            min-height: 530px;
          }

          .founder-portrait-frame {
            width: min(390px, 78vw);
          }

          .signature-scroll {
            display: none;
          }
        }

        @media (max-width: 600px) {
          .signature-bg-image {
            right: -30%;
            width: 130%;
            height: 100%;
            opacity: .045;
          }

          .signature-vignette {
            background:
              linear-gradient(
                180deg,
                rgba(20,6,10,.96),
                rgba(43,10,18,.92) 55%,
                rgba(20,6,10,.98)
              );
          }

          .signature-hero-inner {
            padding: 62px 0 90px;
          }

          .signature-topline {
            font-size: 9px;
          }

          .signature-topline span {
            width: 24px;
          }

          .signature-kicker {
            font-size: 7px;
            line-height: 1.8;
          }

          .signature-title {
            margin-top: 23px;
            font-size: clamp(26px, 7vw, 34px);
            line-height: 1.15;
            letter-spacing: -.4px;
          }

          .signature-description {
            margin-top: 21px;
            font-size: 10px;
            line-height: 2;
          }

          .desktop-break {
            display: none;
          }

          .signature-motto {
            margin-top: 22px;
            padding-left: 11px;
          }

          .signature-motto strong {
            font-size: 10px;
          }

          .signature-motto small {
            font-size: 7px;
          }

          .signature-actions {
            gap: 14px;
            margin-top: 25px;
          }

          .signature-main-button {
            padding: 11px 14px;
            font-size: 8px;
          }

          .signature-text-button {
            font-size: 8px;
          }

          .signature-founder-visual {
            min-height: 455px;
          }

          .founder-portrait-frame {
            width: 82vw;
            max-width: 340px;
            padding: 8px;
          }

          .founder-nameplate {
            left: 14px;
            right: 14px;
            bottom: 13px;
            padding: 10px;
          }

          .founder-nameplate strong {
            font-size: 14px;
          }

          .founder-nameplate span,
          .founder-nameplate small {
            font-size: 6px;
          }

          .founder-medallion {
            width: 82px;
            height: 82px;
            right: -3px;
            top: 18px;
          }

          .medallion-inner {
            width: 64px;
            height: 64px;
          }

          .medallion-inner span {
            font-size: 6px;
          }

          .medallion-inner strong {
            font-size: 14px;
          }

          .medallion-inner small {
            font-size: 4px;
          }

          .founder-floating-card {
            left: 0;
            bottom: 20px;
            padding: 8px 10px;
          }

          .founder-floating-card span {
            font-size: 6px;
          }

          .founder-floating-card b {
            font-size: 6.5px;
          }

          .signature-bottom-bar {
            left: 3%;
            right: 3%;
            bottom: 16px;
            gap: 7px;
            font-size: 4.5px;
            letter-spacing: 1.8px;
          }

          .signature-bottom-bar i {
            width: 15px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .signature-founder-hero *,
          .signature-founder-hero *::before,
          .signature-founder-hero *::after {
            animation: none !important;
          }
        }

        /* =====================================================
           INTRODUCTION
        ===================================================== */

        .introduction-section {

          padding: 110px 0;

          background: #fffaf3;

        }

        .intro-top {

          display: flex;

          justify-content: space-between;
          align-items: flex-end;

          gap: 60px;

        }

        .intro-top h2 {

          margin: 13px 0 0;

          color: #641d2b;

          font-size:
            clamp(39px, 5vw, 61px);

          line-height: 1.42;

          font-weight: 500;

        }

        .intro-top h2 span {

          color: #b1843e;

        }

        .intro-side-text {

          max-width: 350px;

          padding-left: 25px;

          border-left:
            1px solid #c9b8a3;

        }

        .intro-side-text > span {

          color: #b1843e;

          font-size: 11px;

        }

        .intro-side-text p {

          margin: 12px 0 0;

          color: #756960;

          font-size: 12px;

          line-height: 2;

        }

        .intro-content-grid {

          display: grid;

          grid-template-columns:
            1.3fr
            .7fr;

          gap: 70px;

          margin-top: 60px;

        }

        .intro-large-copy p {

          max-width: 680px;

          margin: 0 0 22px;

          color: #62564d;

          font-size: 14px;

          line-height: 2.2;

        }

        .intro-large-copy p:first-child {

          color: #40342e;

          font-size: 18px;

        }

        .intro-side-card {

          position: relative;

          min-height: 300px;

          padding: 35px;

          overflow: hidden;

          background: #641d2b;

          color: white;

        }

        .intro-side-card > span {

          color: #d8b66c;

          font-size: 9px;

        }

        .intro-side-card h3 {

          margin: 25px 0 18px;

          color: white;

          font-size: 35px;

          line-height: 1.4;

          font-weight: 500;

        }

        .intro-side-card p {

          position: relative;

          z-index: 2;

          max-width: 300px;

          color: #d8c9c3;

          font-size: 11px;

          line-height: 2;

        }

        .side-card-mark {

          position: absolute;

          right: -20px;
          bottom: -70px;

          color: #ffffff08;

          font-size: 220px;

        }


        /* =====================================================
           PILLARS
        ===================================================== */

        .pillars-section {

          padding: 110px 0;

          background: #f0e5d6;

        }

        .section-heading-centered {

          max-width: 700px;

          margin: auto;

          text-align: center;

        }

        .section-heading-centered h2 {

          margin: 13px 0;

          color: #641d2b;

          font-size:
            clamp(40px, 5vw, 59px);

          line-height: 1.4;

          font-weight: 500;

        }

        .section-heading-centered h2 span {

          color: #b1843e;

        }

        .section-heading-centered p {

          color: #756960;

          font-size: 13px;

          line-height: 2;

        }

        .pillars-grid {

          display: grid;

          grid-template-columns:
            repeat(4, 1fr);

          gap: 1px;

          margin-top: 60px;

          background: #d3c4b2;

          border:
            1px solid #d3c4b2;

        }

        .pillar-card {

          position: relative;

          min-height: 340px;

          padding: 28px;

          background: #f8f0e5;

          transition: .3s ease;

        }

        .pillar-card:hover {

          background: #641d2b;

          color: white;

        }

        .pillar-card:hover h3 {

          color: white;

        }

        .pillar-card:hover p {

          color: #d8c9c3;

        }

        .pillar-card:hover .pillar-number {

          color: #d8b66c;

        }

        .pillar-number {

          color: #b1843e;

          font-size: 10px;

        }

        .pillar-icon {

          margin-top: 50px;

          color: #b1843e;

        }

        .pillar-card h3 {

          margin: 20px 0 12px;

          color: #641d2b;

          font-size: 24px;

          font-weight: 600;

        }

        .pillar-card p {

          margin: 0;

          color: #71655c;

          font-size: 11px;

          line-height: 2;

        }

        .pillar-line {

          position: absolute;

          left: 28px;
          bottom: 27px;

          width: 30px;
          height: 1px;

          background: #b1843e;

        }


        /* =====================================================
           FOUNDER
        ===================================================== */

        .founder-section {

          position: relative;

          padding: 115px 0;

          overflow: hidden;

          background:
            linear-gradient(
              135deg,
              #361019,
              #641d2b
            );

          color: white;

        }

        .founder-background {

          position: absolute;

          right: -70px;
          top: -80px;

          color: #ffffff05;

          font-size: 260px;

          font-weight: 700;

        }

        .founder-grid {

          position: relative;
          z-index: 2;

          display: grid;

          grid-template-columns:
            .85fr
            1.15fr;

          gap: 90px;

          align-items: center;

        }

        .founder-image {

          position: relative;

          height: 570px;

          background: #705238;

          overflow: hidden;

        }

        .founder-image img {

          width: 100%;
          height: 100%;

          object-fit: contain;

          background: #ddcdb8;

        }

        .image-border {

          position: absolute;

          inset: 20px;

          border:
            1px solid #ffffff65;

        }

        .founder-name-card {

          padding: 18px 21px;

          background: #b1843e;

        }

        .founder-name-card span {

          display: block;

          color: #f9edd9;

          font-size: 8px;

        }

        .founder-name-card strong {

          display: block;

          margin-top: 5px;

          color: white;

          font-size: 16px;

          font-weight: 500;

        }

        .founder-name-card small {

          display: block;

          margin-top: 3px;

          color: #f1dfc0;

          font-size: 8px;

        }

        .founder-content h2 {

          margin: 15px 0;

          color: white;

          font-size:
            clamp(40px, 5vw, 62px);

          line-height: 1.35;

          font-weight: 500;

        }

        .founder-role {

          color: #d8b66c;

          font-size: 10px;

          line-height: 2;

        }

        .founder-content > p {

          max-width: 650px;

          color: #d8c9c4;

          font-size: 13px;

          line-height: 2.15;

        }

        .founder-quote {

          display: flex;

          gap: 14px;

          margin-top: 30px;

          padding: 18px;

          border-left:
            2px solid #d8b66c;

          background: #ffffff08;

        }

        .founder-quote svg {

          flex-shrink: 0;

          color: #d8b66c;

        }

        .founder-quote strong {

          display: block;

          color: white;

          font-size: 13px;

        }

        .founder-quote span {

          display: block;

          margin-top: 5px;

          color: #bda9a3;

          font-size: 10px;

        }

        .dark-link {

          display: inline-flex;

          align-items: center;

          gap: 8px;

          margin-top: 27px;

          color: #d8b66c;

          font-size: 10px;

          border-bottom:
            1px solid #d8b66c;

          padding-bottom: 6px;

        }


        /* =====================================================
           JOURNEY
        ===================================================== */

        .journey-section {

          padding: 110px 0;

          background: #fffaf3;

        }

        .journey-heading {

          display: flex;

          justify-content: space-between;

          align-items: flex-end;

          gap: 60px;

        }

        .journey-heading h2 {

          margin: 13px 0 0;

          color: #641d2b;

          font-size:
            clamp(40px, 5vw, 59px);

          line-height: 1.4;

          font-weight: 500;

        }

        .journey-heading h2 span {

          color: #b1843e;

        }

        .journey-heading > p {

          max-width: 370px;

          color: #71655c;

          font-size: 12px;

          line-height: 2;

        }

        .journey-list {

          margin-top: 55px;

          border-top:
            1px solid #d8cbbb;

        }

        .journey-item {

          display: grid;

          grid-template-columns:
            70px
            1fr
            35px;

          gap: 20px;

          align-items: center;

          padding: 25px 0;

          border-bottom:
            1px solid #d8cbbb;

          transition: .25s ease;

        }

        .journey-item:hover {

          padding-left: 12px;

        }

        .journey-item > span {

          color: #b1843e;

          font-size: 10px;

        }

        .journey-item h3 {

          margin: 0 0 7px;

          color: #641d2b;

          font-size: 20px;

          font-weight: 600;

        }

        .journey-item p {

          max-width: 700px;

          margin: 0;

          color: #756960;

          font-size: 11px;

          line-height: 1.9;

        }

        .journey-item > svg {

          color: #b1843e;

        }


        /* =====================================================
           PHOTO STORY
        ===================================================== */

        .photo-story {

          padding: 110px 0;

          background: #eee2d2;

        }

        .photo-story-heading h2 {

          margin: 13px 0 50px;

          color: #641d2b;

          font-size:
            clamp(40px, 5vw, 60px);

          line-height: 1.4;

          font-weight: 500;

        }

        .photo-story-heading h2 span {

          color: #b1843e;

        }

        .photo-story-grid {

          display: grid;

          grid-template-columns:
            1.15fr
            .55fr
            .75fr;

          grid-template-rows:
            420px
            220px;

          gap: 14px;

        }

        .photo-large {

          position: relative;

          grid-row:
            1 / 3;

          overflow: hidden;

          background: #ddd0c0;

        }

        .photo-large img {

          width: 100%;
          height: 100%;

          object-fit: contain;

          background: #ddd0c0;

        }

        .photo-label {

          position: absolute;

          left: 16px;
          bottom: 16px;

          padding: 8px 12px;

          background: #351019e8;

          color: #d8b66c;

          font-size: 9px;

        }

        .photo-medium {

          overflow: hidden;

          background: #ddd0c0;

        }

        .photo-medium img {

          width: 100%;
          height: 100%;

          object-fit: contain;

          background: #ddd0c0;

        }

        .photo-small {

          overflow: hidden;

          background: #ddd0c0;

        }

        .photo-small img {

          width: 100%;
          height: 100%;

          object-fit: contain;

          background: #ddd0c0;

        }

        .photo-story-card {

          grid-column:
            2 / 4;

          padding: 28px;

          background: #641d2b;

          color: white;

        }

        .photo-story-card > span {

          color: #d8b66c;

          font-size: 9px;

        }

        .photo-story-card h3 {

          margin: 9px 0;

          color: white;

          font-size: 28px;

          line-height: 1.4;

          font-weight: 500;

        }

        .photo-story-card p {

          max-width: 500px;

          color: #d7c8c2;

          font-size: 10px;

          line-height: 2;

        }

        .photo-story-card a {

          display: inline-flex;

          align-items: center;

          gap: 7px;

          margin-top: 9px;

          color: #d8b66c;

          font-size: 9px;

        }


        /* =====================================================
           ACTIVITIES
        ===================================================== */

        .activities-section {

          padding: 110px 0;

          background: #fffaf3;

        }

        .activities-heading {

          display: flex;

          justify-content: space-between;

          align-items: flex-end;

          margin-bottom: 50px;

        }

        .activities-heading h2 {

          margin: 13px 0 0;

          color: #641d2b;

          font-size:
            clamp(40px, 5vw, 59px);

          line-height: 1.4;

          font-weight: 500;

        }

        .activities-heading h2 span {

          color: #b1843e;

        }

        .activities-grid {

          display: grid;

          grid-template-columns:
            repeat(4, 1fr);

          gap: 15px;

        }

        .activity-card {

          position: relative;

          min-height: 285px;

          padding: 27px;

          border:
            1px solid #ded1c1;

          background: #fffaf3;

          transition: .25s ease;

        }

        .activity-card:hover {

          border-color: #b1843e;

          transform: translateY(-5px);

        }

        .activity-card > svg {

          color: #b1843e;

        }

        .activity-card h3 {

          margin: 45px 0 12px;

          color: #641d2b;

          font-size: 19px;

          font-weight: 600;

        }

        .activity-card p {

          margin: 0;

          color: #756960;

          font-size: 10px;

          line-height: 2;

        }

        .activity-card > span {

          position: absolute;

          right: 22px;
          bottom: 22px;

          color: #b1843e;

        }


        /* =====================================================
           PRATHAP GARU SPECIAL SONG
        ===================================================== */
        .founder-song-section{position:relative;overflow:hidden;padding:115px 0;color:#fff;background:radial-gradient(circle at 85% 18%,rgba(216,182,108,.14),transparent 24%),radial-gradient(circle at 12% 85%,rgba(255,255,255,.045),transparent 25%),linear-gradient(135deg,#260914 0%,#4b1420 52%,#681c2b 100%);isolation:isolate}
        .founder-song-section:before{content:"";position:absolute;width:620px;height:620px;right:-300px;top:-230px;border-radius:50%;border:1px solid rgba(216,182,108,.16);box-shadow:0 0 0 35px rgba(216,182,108,.025),0 0 0 75px rgba(216,182,108,.018),0 0 0 120px rgba(216,182,108,.012);animation:kvSongOrbit 18s linear infinite;pointer-events:none}
        .song-orbit{position:absolute;border-radius:50%;pointer-events:none;border:1px solid rgba(216,182,108,.11)}
        .song-orbit-one{width:280px;height:280px;left:-140px;bottom:-100px}.song-orbit-two{width:170px;height:170px;left:7%;top:13%;opacity:.45}
        @keyframes kvSongOrbit{to{transform:rotate(360deg)}}
        .song-heading{position:relative;z-index:2;max-width:850px;margin:0 auto 52px;text-align:center}.song-eyebrow{color:#d8b66c!important}.song-heading h2{margin:15px 0 16px;color:#fff;font-size:clamp(38px,5vw,60px);line-height:1.45;font-weight:500}.song-heading h2 span{color:#d8b66c;background:linear-gradient(110deg,#b1843e 10%,#f4d58a 35%,#b1843e 55%,#e6c16b 75%,#b1843e 90%);background-size:220% auto;-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;animation:kvGoldText 7s linear infinite}.song-heading p{max-width:700px;margin:0 auto;color:#d8c9c3;font-family:"Noto Sans Telugu","Nirmala UI",sans-serif;font-size:13px;line-height:2.15}
        .founder-song-card{position:relative;z-index:2;display:grid;grid-template-columns:1.35fr .65fr;max-width:1120px;margin:0 auto;overflow:hidden;border:1px solid rgba(216,182,108,.28);background:rgba(255,255,255,.055);box-shadow:0 35px 90px rgba(0,0,0,.30),inset 0 1px 0 rgba(255,255,255,.08);backdrop-filter:blur(12px)}
        .founder-song-video{position:relative;width:100%;aspect-ratio:16/9;min-height:430px;background:#12060a}.founder-song-video:before{content:"";position:absolute;inset:0;pointer-events:none;z-index:1;border:1px solid rgba(216,182,108,.12)}.founder-song-video iframe{width:100%;height:100%;display:block;border:0}
        .founder-song-content{display:flex;flex-direction:column;justify-content:center;padding:42px;background:linear-gradient(145deg,rgba(255,255,255,.09),rgba(255,255,255,.025))}.song-music-mark{width:52px;height:52px;display:flex;align-items:center;justify-content:center;margin-bottom:18px;color:#d8b66c;border:1px solid rgba(216,182,108,.48);border-radius:50%;font-family:Georgia,serif;font-size:27px;animation:kvMusicPulse 3s ease-in-out infinite}@keyframes kvMusicPulse{0%,100%{transform:translateY(0);box-shadow:0 0 0 rgba(216,182,108,0)}50%{transform:translateY(-5px);box-shadow:0 10px 30px rgba(216,182,108,.12)}}
        .song-small-label{color:#d8b66c;font-size:9px;letter-spacing:1px}.founder-song-content h3{margin:12px 0 18px;color:#fff;font-size:28px;line-height:1.55;font-weight:500}.founder-song-content>p{margin:0;color:#d2c0ba;font-family:"Noto Sans Telugu","Nirmala UI",sans-serif;font-size:12px;line-height:2.05}.song-divider{display:flex;align-items:center;gap:8px;margin:25px 0;color:#c7a45e;font-size:9px;white-space:nowrap}.song-divider span{width:22px;height:1px;background:#a47c39;flex-shrink:0}.song-divider b{font-weight:500}.song-youtube-button{display:inline-flex;align-items:center;justify-content:center;gap:8px;width:fit-content;padding:12px 17px;color:#351019;background:#d1aa5f;font-size:10px;font-weight:600;transition:transform .25s ease,box-shadow .25s ease,background .25s ease}.song-youtube-button:hover{transform:translateY(-3px);background:#e0bf79;box-shadow:0 12px 30px rgba(0,0,0,.25)}
        @media(max-width:950px){.founder-song-card{grid-template-columns:1fr}.founder-song-video{min-height:0}.founder-song-content{padding:38px}}
        @media(max-width:600px){.founder-song-section{padding:75px 0}.song-heading{margin-bottom:32px}.song-heading h2{font-size:31px}.song-heading p{font-size:12px;line-height:2}.founder-song-content{padding:28px 24px}.founder-song-content h3{font-size:25px}.founder-song-content>p{font-size:11px}.song-divider{white-space:normal;flex-wrap:wrap}}

        /* =====================================================
           MEDIA
        ===================================================== */

        .media-section {

          padding: 110px 0;

          background: #f0e5d6;

        }

        .media-grid {

          display: grid;

          grid-template-columns:
            1.1fr
            .9fr;

          gap: 80px;

          align-items: center;

        }

        .media-heading {

          display: flex;

          align-items: center;

          gap: 7px;

          margin-bottom: 15px;

          color: #641d2b;

          font-size: 10px;

        }

        .media-heading svg {

          color: #b1843e;

        }

        .newspaper {

          padding: 12px;

          background: white;

          box-shadow:
            0 25px 65px #42271915;

        }

        .newspaper img {

          width: 100%;

          max-height: 650px;

          object-fit: contain;

          background: #e9dfd0;

        }

        .media-content h2 {

          margin: 13px 0 22px;

          color: #641d2b;

          font-size:
            clamp(40px, 5vw, 59px);

          line-height: 1.4;

          font-weight: 500;

        }

        .media-content p {

          max-width: 560px;

          color: #71655c;

          font-size: 12px;

          line-height: 2.1;

        }


        /* =====================================================
           RECOGNITION
        ===================================================== */

        .recognition-section {

          padding: 110px 0;

          background: #fffaf3;

        }

        .recognition-heading {

          display: flex;

          justify-content: space-between;

          align-items: flex-end;

          margin-bottom: 50px;

        }

        .recognition-heading h2 {

          margin: 13px 0 0;

          color: #641d2b;

          font-size:
            clamp(40px, 5vw, 59px);

          line-height: 1.4;

          font-weight: 500;

        }

        .recognition-heading h2 span {

          color: #b1843e;

        }

        .recognition-heading > svg {

          color: #b1843e;

        }

        .recognition-list {

          border-top:
            1px solid #d9ccbd;

        }

        .recognition-row {

          display: grid;

          grid-template-columns:
            60px
            1fr
            30px;

          align-items: center;

          gap: 20px;

          padding: 22px 0;

          border-bottom:
            1px solid #d9ccbd;

        }

        .recognition-row > span {

          color: #b1843e;

          font-size: 10px;

        }

        .recognition-row p {

          margin: 0;

          color: #5f534b;

          font-size: 12px;

          line-height: 1.8;

        }

        .recognition-row > svg {

          color: #b1843e;

        }


        /* =====================================================
           NOTE
        ===================================================== */

        .note-feature {

          padding: 110px 0;

          background: #eee2d2;

        }

        .note-grid {

          display: grid;

          grid-template-columns:
            .8fr
            1.2fr;

          gap: 90px;

          align-items: center;

        }

        .note-photo {

          padding: 15px;

          background: white;

          box-shadow:
            0 25px 60px #4b2c1915;

        }

        .note-photo img {

          width: 100%;

          max-height: 550px;

          object-fit: contain;

          background: #e9dece;

        }

        .note-text h2 {

          margin: 13px 0 25px;

          color: #641d2b;

          font-size:
            clamp(40px, 5vw, 60px);

          line-height: 1.4;

          font-weight: 500;

        }

        .note-text h2 span {

          color: #b1843e;

        }

        .note-text p {

          max-width: 620px;

          color: #6d6158;

          font-size: 13px;

          line-height: 2.1;

        }


        /* =====================================================
           JOIN
        ===================================================== */

        .join-section {

          padding: 110px 0;

          background: #641d2b;

          color: white;

        }

        .join-heading {

          max-width: 800px;

        }

        .join-heading .eyebrow {

          color: #d8b66c;

        }

        .join-heading h2 {

          margin: 15px 0 0;

          color: white;

          font-size:
            clamp(40px, 5vw, 62px);

          line-height: 1.45;

          font-weight: 500;

        }

        .join-grid {

          display: grid;

          grid-template-columns:
            repeat(3, 1fr);

          gap: 1px;

          margin-top: 60px;

          background: #ffffff1c;

        }

        .join-grid > div {

          min-height: 260px;

          padding: 30px;

          background: #641d2b;

          border-right:
            1px solid #ffffff15;

        }

        .join-grid svg {

          color: #d8b66c;

        }

        .join-grid h3 {

          margin: 40px 0 12px;

          color: white;

          font-size: 20px;

          font-weight: 500;

        }

        .join-grid p {

          margin: 0;

          color: #d7c7c1;

          font-size: 11px;

          line-height: 2;

        }


        /* =====================================================
           FINAL QUOTE
        ===================================================== */

        .final-quote {

          position: relative;

          padding: 120px 0;

          overflow: hidden;

          background: #fffaf3;

          text-align: center;

        }

        .quote-word {

          position: absolute;

          right: -40px;
          bottom: -100px;

          color: #641d2b06;

          font-size: 290px;

          font-weight: 700;

        }

        .final-quote .kalavedika-container {

          position: relative;

          z-index: 2;

        }

        .final-quote svg {

          color: #b1843e;

        }

        .final-quote blockquote {

          margin: 25px 0;

          color: #641d2b;

          font-size:
            clamp(32px, 5vw, 57px);

          line-height: 1.6;

          font-weight: 500;

        }

        .quote-line {

          display: block;

          width: 60px;
          height: 1px;

          margin: auto;

          background: #b1843e;

        }

        .final-quote .kalavedika-container > span:last-child {

          display: block;

          margin-top: 13px;

          color: #a47735;

          font-size: 9px;

        }


        /* =====================================================
           CTA
        ===================================================== */

        .final-cta {

          padding: 90px 0;

          background:
            linear-gradient(
              120deg,
              #2e0d16,
              #4b1420
            );

          color: white;

        }

        .cta-layout {

          display: flex;

          justify-content: space-between;

          align-items: center;

          gap: 60px;

        }

        .cta-layout > div > span {

          color: #d8b66c;

          font-size: 9px;

        }

        .cta-layout h2 {

          margin: 13px 0;

          color: white;

          font-size:
            clamp(40px, 5vw, 59px);

          line-height: 1.4;

          font-weight: 500;

        }

        .cta-layout p {

          max-width: 600px;

          color: #d5c5bf;

          font-size: 12px;

          line-height: 2;

        }

        .cta-button {

          flex-shrink: 0;

          display: inline-flex;

          align-items: center;

          gap: 8px;

          padding: 14px 20px;

          background: #b98b43;

          color: white;

          font-size: 10px;

          transition: .25s ease;

        }

        .cta-button:hover {

          background: #d0a455;

          transform: translateY(-3px);

        }


        /* =====================================================
           TABLET
        ===================================================== */

        @media (max-width: 950px) {

          .hero-grid {

            grid-template-columns: 1fr;

          }

          .hero-images {

            max-width: 650px;

            width: 100%;

            margin: auto;

          }

          .pillars-grid {

            grid-template-columns:
              repeat(2, 1fr);

          }

          .founder-grid {

            grid-template-columns: 1fr;

          }

          .founder-image {

            max-width: 580px;

          }

          .intro-content-grid {

            grid-template-columns: 1fr;

          }

          .journey-heading {

            flex-direction: column;

            align-items: flex-start;

          }

          .photo-story-grid {

            grid-template-columns:
              1fr 1fr;

            grid-template-rows:
              450px
              260px
              auto;

          }

          .photo-large {

            grid-column: 1 / 3;

            grid-row: auto;

          }

          .photo-story-card {

            grid-column: 1 / 3;

          }

          .activities-grid {

            grid-template-columns:
              repeat(2, 1fr);

          }

          .media-grid {

            grid-template-columns: 1fr;

          }

          .note-grid {

            grid-template-columns: 1fr;

          }

          .note-photo {

            max-width: 650px;

          }

          .join-grid {

            grid-template-columns: 1fr;

          }

          .cta-layout {

            flex-direction: column;

            align-items: flex-start;

          }

        }


        /* =====================================================
           MOBILE
        ===================================================== */

        @media (max-width: 600px) {

          .kalavedika-home .kalavedika-container {

            width: 92%;

          }

          .hero-top-bar {

            font-size: 7px;

          }

          .hero-top-bar span:last-child {

            display: none;

          }

          .hero-grid {

            padding: 55px 0 30px;

          }

          .hero-content h1 {

            font-size: 46px;

          }

          .hero-main-text {

            font-size: 12px;

          }

          .hero-buttons {

            flex-direction: column;

            align-items: flex-start;

            gap: 16px;

          }

          .hero-images {

            min-height: 390px;

          }

          .hero-image-main {

            width: 72%;

            height: 295px;

          }

          .hero-image-second {

            width: 48%;

            height: 175px;

            bottom: 30px;

          }

          .hero-image-note {

            width: 34%;

            height: 125px;

          }

          .hero-footer {

            grid-template-columns:
              1fr 1fr;

          }

          .hero-footer div {

            min-height: 65px;

          }

          .introduction-section,
          .pillars-section,
          .founder-section,
          .journey-section,
          .photo-story,
          .activities-section,
          .media-section,
          .recognition-section,
          .note-feature,
          .join-section,
          .final-quote,
          .final-cta {

            padding: 70px 0;

          }

          .intro-top {

            flex-direction: column;

            align-items: flex-start;

          }

          .intro-top h2 {

            font-size: 39px;

          }

          .intro-side-text {

            padding-left: 15px;

          }

          .pillars-grid {

            grid-template-columns: 1fr;

          }

          .pillar-card {

            min-height: 280px;

          }

          .founder-image {

            height: 450px;

          }

          .founder-content h2 {

            font-size: 40px;

          }

          .photo-story-grid {

            display: grid;

            grid-template-columns: 1fr;

            grid-template-rows:
              340px
              250px
              280px
              auto;

          }

          .photo-large {

            grid-column: auto;

          }

          .photo-story-card {

            grid-column: auto;

          }

          .activities-heading {

            flex-direction: column;

            align-items: flex-start;

            gap: 20px;

          }

          .activities-heading h2 {

            font-size: 40px;

          }

          .activities-grid {

            grid-template-columns: 1fr;

          }

          .recognition-heading > svg {

            display: none;

          }

          .recognition-heading h2 {

            font-size: 40px;

          }

          .recognition-row {

            grid-template-columns:
              40px 1fr;

            gap: 10px;

          }

          .recognition-row > svg {

            display: none;

          }

          .note-text h2 {

            font-size: 40px;

          }

          .join-heading h2 {

            font-size: 39px;

          }

          .final-quote blockquote {

            font-size: 30px;

          }

          .cta-layout h2 {

            font-size: 40px;

          }

        }

      /* =====================================================
         PREMIUM MANDALI + HERITAGE OVERRIDES
         Keeps all existing sections/content and improves visual richness.
      ===================================================== */

      .kalavedika-home,
      .kalavedika-home button,
      .kalavedika-home input,
      .kalavedika-home textarea,
      .kalavedika-home select {
        font-family: "Noto Sans Telugu", "Noto Sans Telugu", "Nirmala UI", "Gautami", Arial, sans-serif;
      }

      .literary-hero {
        isolation: isolate;
        min-height: 760px;
        background:
          radial-gradient(circle at 82% 30%, rgba(216,182,108,.16), transparent 25%),
          radial-gradient(circle at 10% 85%, rgba(255,255,255,.055), transparent 24%),
          linear-gradient(125deg, #210811 0%, #4a1220 48%, #711f31 100%);
      }

      .literary-hero::after {
        content: "";
        position: absolute;
        width: 720px;
        height: 720px;
        right: -220px;
        top: 80px;
        border-radius: 50%;
        opacity: .16;
        background:
          repeating-conic-gradient(from 0deg, #d8b66c 0deg 1.5deg, transparent 1.5deg 11deg);
        -webkit-mask: radial-gradient(circle, transparent 0 23%, #000 24% 25%, transparent 26% 31%, #000 32% 33%, transparent 34% 40%, #000 41% 42%, transparent 43% 50%, #000 51% 52%, transparent 53%);
        mask: radial-gradient(circle, transparent 0 23%, #000 24% 25%, transparent 26% 31%, #000 32% 33%, transparent 34% 40%, #000 41% 42%, transparent 43% 50%, #000 51% 52%, transparent 53%);
        pointer-events: none;
        z-index: 0;
        animation: kalavedikaMandalaSpin 55s linear infinite;
      }

      @keyframes kalavedikaMandalaSpin {
        to { transform: rotate(360deg); }
      }

      .hero-top-bar,
      .hero-grid,
      .hero-footer {
        position: relative;
        z-index: 3;
      }

      .hero-content h1,
      .intro-top h2,
      .section-heading-centered h2,
      .founder-content h2,
      .journey-heading h2,
      .photo-story-heading h2,
      .activities-heading h2,
      .media-content h2,
      .recognition-heading h2,
      .note-text h2,
      .join-heading h2,
      .final-quote blockquote,
      .cta-layout h2 {
        font-family: "Noto Sans Telugu", "Noto Sans Telugu", sans-serif;
        letter-spacing: .15px;
      }

      .hero-content h1 {
        text-shadow: 0 12px 40px rgba(0,0,0,.22);
      }

      .hero-main-text {
        max-width: 620px;
        font-size: 14px;
        line-height: 2.25;
      }

      .hero-manifesto {
        position: relative;
      }

      .hero-manifesto::before {
        content: "";
        position: absolute;
        left: 0;
        top: -1px;
        width: 90px;
        height: 1px;
        background: linear-gradient(90deg, #d8b66c, transparent);
      }

      /* Never crop the supplied photographs. */
      .kalavedika-home img {
        object-position: center center;
      }

      .hero-image-main img,
      .hero-image-second img,
      .hero-image-note img,
      .founder-image img,
      .photo-large img,
      .photo-medium img,
      .photo-small img,
      .newspaper img,
      .note-photo img {
        object-fit: contain !important;
        object-position: center center !important;
      }

      .hero-image-main,
      .hero-image-second,
      .hero-image-note,
      .founder-image,
      .photo-large,
      .photo-medium,
      .photo-small,
      .newspaper,
      .note-photo {
        border: 1px solid rgba(184,132,62,.25);
      }

      .hero-image-main::after,
      .hero-image-second::after,
      .hero-image-note::after,
      .photo-large::after,
      .photo-medium::after,
      .photo-small::after {
        content: "";
        position: absolute;
        inset: 0;
        pointer-events: none;
        background: linear-gradient(135deg, rgba(255,255,255,.13), transparent 28%, transparent 72%, rgba(60,15,25,.09));
      }

      .hero-image-main {
        box-shadow: 0 35px 90px rgba(0,0,0,.38), 0 0 0 8px rgba(216,182,108,.035);
      }

      .pillar-card,
      .activity-card,
      .journey-item,
      .recognition-row {
        transition: transform .3s ease, background .3s ease, border-color .3s ease, box-shadow .3s ease;
      }

      .pillar-card:hover,
      .activity-card:hover {
        box-shadow: 0 20px 45px rgba(74,35,20,.11);
      }

      .founder-section::after {
        content: "";
        position: absolute;
        width: 540px;
        height: 540px;
        left: -240px;
        bottom: -240px;
        border: 1px solid rgba(216,182,108,.14);
        border-radius: 50%;
        box-shadow:
          0 0 0 35px rgba(216,182,108,.025),
          0 0 0 70px rgba(216,182,108,.018),
          0 0 0 105px rgba(216,182,108,.012);
        pointer-events: none;
      }

      .founder-image {
        box-shadow: 0 35px 80px rgba(0,0,0,.28);
      }

      .founder-name-card {
        position: relative;
        z-index: 3;
        box-shadow: 0 18px 40px rgba(0,0,0,.18);
      }

      .photo-story-grid {
        position: relative;
      }

      .photo-large,
      .photo-medium,
      .photo-small {
        box-shadow: 0 22px 55px rgba(61,36,20,.12);
      }

      .photo-large:hover img,
      .photo-medium:hover img,
      .photo-small:hover img {
        transform: scale(1.025);
      }

      .photo-large img,
      .photo-medium img,
      .photo-small img {
        transition: transform .55s ease;
      }

      .recognition-row:hover {
        padding-left: 12px;
        background: rgba(184,132,62,.035);
      }

      .final-quote {
        background:
          radial-gradient(circle at 50% 55%, rgba(184,132,62,.075), transparent 33%),
          #fffaf3;
      }

      .final-cta {
        position: relative;
        overflow: hidden;
        background:
          radial-gradient(circle at 85% 20%, rgba(216,182,108,.13), transparent 22%),
          linear-gradient(120deg, #240911, #4b1420);
      }

      .final-cta::before {
        content: "";
        position: absolute;
        width: 500px;
        height: 500px;
        right: -220px;
        bottom: -300px;
        border-radius: 50%;
        border: 1px solid rgba(216,182,108,.18);
        box-shadow: 0 0 0 35px rgba(216,182,108,.025), 0 0 0 70px rgba(216,182,108,.018);
      }

      @media (min-width: 951px) {
        .hero-grid {
          min-height: 700px;
        }

        .hero-images {
          min-height: 600px;
        }

        .hero-image-main {
          height: 470px;
        }

        .hero-image-second {
          height: 285px;
          bottom: 35px;
        }

        .hero-image-note {
          height: 205px;
        }
      }

      @media (max-width: 600px) {
        .literary-hero {
          min-height: auto;
        }

        .hero-content h1 {
          font-size: 45px;
          line-height: 1.38;
        }

        .hero-main-text {
          font-size: 12px;
          line-height: 2.15;
        }

        .hero-images {
          min-height: 405px;
        }

        .hero-image-main {
          width: 76%;
          height: 300px;
        }

        .hero-image-second {
          width: 51%;
          height: 180px;
        }

        .hero-image-note {
          width: 35%;
          height: 130px;
        }

        .hero-footer strong {
          font-size: 11px;
        }

        .hero-footer span {
          font-size: 8px;
        }
      }



        /* =====================================================
           PREMIUM MOTION SYSTEM
           Lightweight CSS-only animations — no extra package needed
        ===================================================== */

        .kalavedika-home {
          --kv-wine: #641d2b;
          --kv-wine-dark: #2e0d16;
          --kv-gold: #d8b66c;
          --kv-gold-deep: #b1843e;
          --kv-paper: #fffaf3;
          --kv-ink: #342822;
          position: relative;
          isolation: isolate;
        }

        .kalavedika-home::after {
          content: "";
          position: fixed;
          inset: 0;
          pointer-events: none;
          z-index: 9999;
          opacity: .045;
          background-image: radial-gradient(#641d2b .65px, transparent .65px);
          background-size: 7px 7px;
          mix-blend-mode: multiply;
        }

        /* Elegant page entrance */
        .literary-hero,
        .introduction-section,
        .pillars-section,
        .founder-section,
        .founder-song-section,
        .journey-section,
        .photo-story,
        .activities-section,
        .media-section,
        .recognition-section,
        .note-feature,
        .join-section,
        .final-quote,
        .final-cta {
          animation: kvSectionReveal .9s cubic-bezier(.22,1,.36,1) both;
        }

        @keyframes kvSectionReveal {
          from { opacity: 0; transform: translateY(22px); }
          to { opacity: 1; transform: translateY(0); }
        }

        /* Hero atmospheric movement */
        .literary-hero::before {
          animation: kvTextureDrift 18s linear infinite;
        }

        @keyframes kvTextureDrift {
          from { background-position: 0 0; }
          to { background-position: 72px 72px; }
        }

        .literary-hero::after {
          content: "";
          position: absolute;
          width: 520px;
          height: 520px;
          left: -250px;
          top: 25%;
          border: 1px solid rgba(216,182,108,.15);
          border-radius: 50%;
          box-shadow:
            0 0 0 35px rgba(216,182,108,.025),
            0 0 0 75px rgba(216,182,108,.018),
            0 0 0 120px rgba(216,182,108,.012);
          pointer-events: none;
          animation: kvOrbitalGlow 12s ease-in-out infinite;
        }

        @keyframes kvOrbitalGlow {
          0%, 100% { transform: translate3d(0,0,0) rotate(0deg); opacity: .55; }
          50% { transform: translate3d(35px,-22px,0) rotate(7deg); opacity: 1; }
        }

        .hero-content > * {
          animation: kvHeroItem .85s cubic-bezier(.22,1,.36,1) both;
        }

        .hero-content .hero-overline { animation-delay: .12s; }
        .hero-content h1 { animation-delay: .22s; }
        .hero-content .hero-main-text { animation-delay: .34s; }
        .hero-content .hero-buttons { animation-delay: .46s; }
        .hero-content .hero-manifesto { animation-delay: .58s; }

        @keyframes kvHeroItem {
          from { opacity: 0; transform: translateY(28px); filter: blur(5px); }
          to { opacity: 1; transform: translateY(0); filter: blur(0); }
        }

        .hero-content h1 span {
          background: linear-gradient(90deg, #d8b66c, #f6df9d, #b1843e, #d8b66c);
          background-size: 220% auto;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: kvGoldFlow 6s linear infinite;
        }

        @keyframes kvGoldFlow {
          to { background-position: 220% center; }
        }

        .hero-image-main,
        .hero-image-second,
        .hero-image-note {
          will-change: transform;
          transition: transform .7s cubic-bezier(.22,1,.36,1), box-shadow .7s ease;
        }

        .hero-image-main { animation: kvMainPhoto 7s ease-in-out infinite; }
        .hero-image-second { animation: kvSecondPhoto 6s ease-in-out infinite; }
        .hero-image-note { animation: kvNotePhoto 5.5s ease-in-out infinite; }

        @keyframes kvMainPhoto {
          0%,100% { transform: rotate(1deg) translate3d(0,0,0); }
          50% { transform: rotate(.2deg) translate3d(0,-10px,0); }
        }
        @keyframes kvSecondPhoto {
          0%,100% { transform: rotate(-2deg) translate3d(0,0,0); }
          50% { transform: rotate(-.8deg) translate3d(0,-13px,0); }
        }
        @keyframes kvNotePhoto {
          0%,100% { transform: rotate(3deg) translate3d(0,0,0); }
          50% { transform: rotate(4.4deg) translate3d(0,-8px,0); }
        }

        .hero-image-main:hover,
        .hero-image-second:hover,
        .hero-image-note:hover {
          animation-play-state: paused;
          box-shadow: 0 30px 80px rgba(0,0,0,.28);
          transform: translateY(-12px) rotate(0deg) scale(1.025);
          z-index: 10;
        }

        .gold-button,
        .cta-button {
          position: relative;
          overflow: hidden;
          box-shadow: 0 12px 30px rgba(185,139,67,.18);
        }

        .gold-button::before,
        .cta-button::before {
          content: "";
          position: absolute;
          top: 0;
          left: -120%;
          width: 70%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,.35), transparent);
          transform: skewX(-20deg);
          transition: left .7s ease;
        }

        .gold-button:hover::before,
        .cta-button:hover::before { left: 150%; }

        /* Section titles get a subtle underline reveal */
        .intro-top h2,
        .section-heading-centered h2,
        .founder-content h2,
        .journey-heading h2,
        .photo-story-heading h2,
        .activities-heading h2,
        .media-content h2,
        .recognition-heading h2,
        .note-text h2,
        .join-heading h2,
        .cta-layout h2 {
          position: relative;
        }

        .intro-top h2::after,
        .section-heading-centered h2::after,
        .journey-heading h2::after,
        .photo-story-heading h2::after,
        .activities-heading h2::after,
        .recognition-heading h2::after,
        .note-text h2::after {
          content: "";
          display: block;
          width: 58px;
          height: 2px;
          margin-top: 18px;
          background: linear-gradient(90deg, #b1843e, transparent);
          transform-origin: left;
          animation: kvLineGrow 1.2s ease both;
        }

        @keyframes kvLineGrow {
          from { transform: scaleX(0); opacity: 0; }
          to { transform: scaleX(1); opacity: 1; }
        }

        /* Pillars / activities become interactive cards */
        .pillar-card,
        .activity-card {
          overflow: hidden;
          transform: translateZ(0);
        }

        .pillar-card::before,
        .activity-card::before {
          content: "";
          position: absolute;
          width: 170px;
          height: 170px;
          right: -90px;
          top: -90px;
          border-radius: 50%;
          border: 1px solid rgba(177,132,62,.18);
          transition: transform .6s ease, opacity .6s ease;
        }

        .pillar-card:hover::before,
        .activity-card:hover::before {
          transform: scale(2.2);
          opacity: .8;
        }

        .pillar-card:hover .pillar-icon,
        .activity-card:hover > svg {
          animation: kvIconPulse .65s ease;
        }

        @keyframes kvIconPulse {
          0% { transform: scale(1); }
          45% { transform: scale(1.25) rotate(-5deg); }
          100% { transform: scale(1); }
        }

        /* Journey timeline movement */
        .journey-item {
          position: relative;
        }

        .journey-item::before {
          content: "";
          position: absolute;
          left: 0;
          bottom: -1px;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #b1843e, transparent);
          transition: width .6s cubic-bezier(.22,1,.36,1);
        }

        .journey-item:hover::before { width: 70%; }

        .journey-item > span {
          transition: transform .4s ease, color .4s ease;
        }
        .journey-item:hover > span {
          transform: translateX(8px);
          color: #d8b66c;
        }

        /* Founder photo has cinematic hover */
        .founder-image img,
        .photo-large img,
        .photo-medium img,
        .photo-small img,
        .newspaper img,
        .note-photo img {
          transition: transform 1s cubic-bezier(.22,1,.36,1), filter .7s ease;
        }

        .founder-image:hover img,
        .photo-large:hover img,
        .photo-medium:hover img,
        .photo-small:hover img,
        .newspaper:hover img,
        .note-photo:hover img {
          transform: scale(1.045);
          filter: saturate(1.08) contrast(1.03);
        }

        .founder-image::after,
        .photo-large::after,
        .photo-medium::after,
        .photo-small::after {
          content: "";
          position: absolute;
          inset: 0;
          pointer-events: none;
          background: linear-gradient(135deg, transparent 40%, rgba(216,182,108,.14));
          opacity: 0;
          transition: opacity .6s ease;
        }
        .founder-image:hover::after,
        .photo-large:hover::after,
        .photo-medium:hover::after,
        .photo-small:hover::after { opacity: 1; }

        /* Quote section breathing effect */
        .final-quote svg {
          animation: kvQuoteFloat 3s ease-in-out infinite;
        }
        @keyframes kvQuoteFloat {
          0%,100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-7px) rotate(-4deg); }
        }

        /* CTA atmospheric rings */
        .final-cta {
          position: relative;
          overflow: hidden;
        }
        .final-cta::after {
          content: "";
          position: absolute;
          width: 460px;
          height: 460px;
          right: -180px;
          top: -200px;
          border-radius: 50%;
          border: 1px solid rgba(216,182,108,.18);
          box-shadow:
            0 0 0 28px rgba(216,182,108,.025),
            0 0 0 58px rgba(216,182,108,.018),
            0 0 0 90px rgba(216,182,108,.012);
          animation: kvCtaRing 14s linear infinite;
          pointer-events: none;
        }
        @keyframes kvCtaRing {
          to { transform: rotate(360deg); }
        }


        /* =====================================================
           NEW SIGNATURE MOTION SYSTEM
        ===================================================== */
        .kalavedika-home {
          scroll-behavior: smooth;
        }

        /* Elegant page-load entrance */
        .literary-hero .hero-top-bar,
        .literary-hero .hero-content,
        .literary-hero .hero-images,
        .literary-hero .hero-footer {
          animation: kvRiseIn 1s cubic-bezier(.16,1,.3,1) both;
        }

        .literary-hero .hero-content { animation-delay: .12s; }
        .literary-hero .hero-images { animation-delay: .24s; }
        .literary-hero .hero-footer { animation-delay: .38s; }

        @keyframes kvRiseIn {
          from {
            opacity: 0;
            transform: translateY(34px);
            filter: blur(7px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
            filter: blur(0);
          }
        }

        /* Living golden headline */
        .hero-content h1 span,
        .intro-top h2 span,
        .section-heading-centered h2 span,
        .journey-heading h2 span,
        .photo-story-heading h2 span {
          background: linear-gradient(
            110deg,
            #b1843e 10%,
            #f4d58a 35%,
            #b1843e 55%,
            #e6c16b 75%,
            #b1843e 90%
          );
          background-size: 220% auto;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: kvGoldText 7s linear infinite;
        }

        @keyframes kvGoldText {
          to { background-position: 220% center; }
        }

        /* Hero images gently float instead of staying static */
        .hero-image-main {
          animation: kvHeroMainFloat 7s ease-in-out infinite;
        }
        .hero-image-second {
          animation: kvHeroSecondFloat 6s ease-in-out infinite;
        }
        .hero-image-note {
          animation: kvHeroNoteFloat 5s ease-in-out infinite;
        }

        @keyframes kvHeroMainFloat {
          0%,100% { transform: rotate(1deg) translateY(0); }
          50% { transform: rotate(.3deg) translateY(-12px); }
        }
        @keyframes kvHeroSecondFloat {
          0%,100% { transform: rotate(-2deg) translateY(0); }
          50% { transform: rotate(-3deg) translateY(10px); }
        }
        @keyframes kvHeroNoteFloat {
          0%,100% { transform: rotate(3deg) translateY(0); }
          50% { transform: rotate(1deg) translateY(-9px); }
        }

        /* Premium image hover treatment */
        .hero-image-main,
        .hero-image-second,
        .hero-image-note,
        .founder-image,
        .photo-large,
        .photo-medium,
        .photo-small,
        .newspaper {
          transition:
            transform .6s cubic-bezier(.22,1,.36,1),
            box-shadow .6s ease,
            filter .6s ease;
        }

        .hero-image-main:hover,
        .hero-image-second:hover,
        .hero-image-note:hover {
          z-index: 10;
          filter: brightness(1.04) saturate(1.08);
          box-shadow: 0 35px 90px rgba(0,0,0,.35), 0 0 0 1px rgba(216,182,108,.5);
        }

        /* Cards feel alive on hover */
        .pillar-card,
        .activity-card,
        .journey-item,
        .photo-story-card,
        .intro-side-card {
          will-change: transform;
        }

        .pillar-card:hover,
        .activity-card:hover,
        .intro-side-card:hover {
          transform: translateY(-9px);
          box-shadow: 0 24px 50px rgba(73,34,29,.13);
        }

        .pillar-card:hover .pillar-icon,
        .activity-card:hover svg {
          animation: kvIconBounce .7s cubic-bezier(.34,1.56,.64,1);
        }

        @keyframes kvIconBounce {
          0% { transform: scale(1) rotate(0); }
          45% { transform: scale(1.25) rotate(-7deg); }
          100% { transform: scale(1) rotate(0); }
        }

        /* Moving gold underline */
        .eyebrow {
          position: relative;
        }
        .eyebrow::after {
          content: "";
          display: block;
          width: 28px;
          height: 1px;
          margin-top: 7px;
          background: linear-gradient(90deg, #b1843e, transparent);
          transform-origin: left;
          animation: kvUnderline 2.2s ease-in-out infinite alternate;
        }
        @keyframes kvUnderline {
          from { transform: scaleX(.45); opacity: .55; }
          to { transform: scaleX(1.8); opacity: 1; }
        }

        /* Buttons have a subtle moving highlight */
        .gold-button,
        .cta-button {
          position: relative;
          overflow: hidden;
          isolation: isolate;
        }
        .gold-button::after,
        .cta-button::after {
          content: "";
          position: absolute;
          inset: 0;
          width: 35%;
          transform: translateX(-160%) skewX(-18deg);
          background: rgba(255,255,255,.22);
          animation: kvButtonShine 4.5s ease-in-out infinite;
          pointer-events: none;
        }
        @keyframes kvButtonShine {
          0%,45% { transform: translateX(-160%) skewX(-18deg); }
          70%,100% { transform: translateX(430%) skewX(-18deg); }
        }

        /* Decorative ambient glow */
        .literary-hero::after {
          content: "";
          position: absolute;
          width: 520px;
          height: 520px;
          left: -260px;
          bottom: -290px;
          border-radius: 50%;
          border: 1px solid rgba(216,182,108,.22);
          box-shadow:
            0 0 0 35px rgba(216,182,108,.025),
            0 0 0 75px rgba(216,182,108,.018),
            0 0 100px rgba(216,182,108,.08);
          animation: kvAmbientOrbit 18s linear infinite;
          pointer-events: none;
        }
        @keyframes kvAmbientOrbit {
          from { transform: rotate(0deg) scale(1); }
          50% { transform: rotate(180deg) scale(1.08); }
          to { transform: rotate(360deg) scale(1); }
        }

        /* Section transitions */
        .introduction-section,
        .pillars-section,
        .founder-section,
        .journey-section,
        .photo-story,
        .activities-section,
        .media-section,
        .final-cta {
          position: relative;
        }

        .introduction-section::before,
        .pillars-section::before,
        .journey-section::before,
        .photo-story::before {
          content: "";
          position: absolute;
          top: 0;
          left: 50%;
          width: 1px;
          height: 55px;
          background: linear-gradient(to bottom, #b1843e, transparent);
          opacity: .55;
        }

        /* Smooth horizontal reveal for journey rows */
        .journey-item {
          opacity: .92;
          transition: transform .45s cubic-bezier(.22,1,.36,1), background .35s ease;
        }
        .journey-item:hover {
          transform: translateX(10px);
          background: linear-gradient(90deg, rgba(177,132,62,.06), transparent);
        }

        /* Photo captions reveal elegantly */
        .photo-label,
        .hero-image-tag {
          transition: transform .45s ease, opacity .45s ease;
        }
        .photo-large:hover .photo-label,
        .hero-image-main:hover .hero-image-tag {
          transform: translateY(-6px);
        }

        /* Founder image cinematic glow */
        .founder-image::before {
          content: "";
          position: absolute;
          inset: 0;
          z-index: 2;
          pointer-events: none;
          background: linear-gradient(120deg, transparent 35%, rgba(255,255,255,.16), transparent 65%);
          transform: translateX(-120%);
          animation: kvFounderSweep 7s ease-in-out infinite;
        }
        @keyframes kvFounderSweep {
          0%,45% { transform: translateX(-120%); }
          70%,100% { transform: translateX(120%); }
        }

        /* Floating decorative glyph */
        .hero-bg-word,
        .founder-background {
          animation: kvWordFloat 10s ease-in-out infinite;
        }
        @keyframes kvWordFloat {
          0%,100% { transform: translate3d(0,0,0) rotate(0deg); }
          50% { transform: translate3d(-18px,12px,0) rotate(1deg); }
        }

        /* Respect accessibility preferences */
        @media (prefers-reduced-motion: reduce) {
          .kalavedika-home *,
          .kalavedika-home *::before,
          .kalavedika-home *::after {
            animation-duration: .01ms !important;
            animation-iteration-count: 1 !important;
            scroll-behavior: auto !important;
            transition-duration: .01ms !important;
          }
        }


        /* =====================================================
           PREMIUM PAGE MOTION LAYER
           Added without removing existing content
        ===================================================== */

        .kalavedika-home {
          --kv-ease: cubic-bezier(.22, 1, .36, 1);
        }

        .kalavedika-home section {
          animation: kvSectionAppear .8s var(--kv-ease) both;
        }

        @keyframes kvSectionAppear {
          from {
            opacity: .88;
            transform: translateY(14px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Hero content choreography */
        .signature-topline {
          animation: kvFadeDown .8s .05s var(--kv-ease) both;
        }

        .signature-kicker {
          animation: kvFadeDown .8s .15s var(--kv-ease) both;
        }

        .signature-title {
          animation: kvHeroTitle 1s .22s var(--kv-ease) both;
        }

        .signature-description {
          animation: kvFadeUp .85s .36s var(--kv-ease) both;
        }

        .signature-motto {
          animation: kvFadeUp .85s .46s var(--kv-ease) both;
        }

        .signature-actions {
          animation: kvFadeUp .85s .56s var(--kv-ease) both;
        }

        .signature-founder-visual {
          animation: kvHeroPortrait 1.15s .2s var(--kv-ease) both;
        }

        @keyframes kvFadeDown {
          from { opacity: 0; transform: translateY(-14px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes kvFadeUp {
          from { opacity: 0; transform: translateY(18px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes kvHeroTitle {
          from {
            opacity: 0;
            transform: translateY(25px) scale(.97);
            filter: blur(5px);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
            filter: blur(0);
          }
        }

        @keyframes kvHeroPortrait {
          from {
            opacity: 0;
            transform: translateX(35px) scale(.94);
          }
          to {
            opacity: 1;
            transform: translateX(0) scale(1);
          }
        }

        /* Rich hover motion */
        .pillar-card,
        .activity-card,
        .recognition-row,
        .founder-song-card,
        .intro-side-card,
        .join-grid > div {
          transition:
            transform .45s var(--kv-ease),
            box-shadow .45s var(--kv-ease),
            border-color .45s ease;
        }

        .pillar-card:hover,
        .activity-card:hover,
        .join-grid > div:hover {
          transform: translateY(-9px);
          box-shadow: 0 24px 55px rgba(66, 29, 22, .12);
        }

        .recognition-row:hover {
          transform: translateX(8px);
        }

        .intro-side-card:hover,
        .founder-song-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 28px 70px rgba(66, 29, 22, .14);
        }

        /* Founder portrait premium motion */
        .founder-portrait-frame {
          animation: kvFrameFloat 6s ease-in-out infinite;
          transform-origin: center;
        }

        .founder-portrait {
          transition: transform 1s var(--kv-ease), filter 1s ease;
        }

        .founder-portrait-frame:hover .founder-portrait {
          transform: scale(1.045);
          filter: saturate(1.06) contrast(1.03);
        }

        @keyframes kvFrameFloat {
          0%, 100% { transform: translateY(0) rotate(1deg); }
          50% { transform: translateY(-8px) rotate(.2deg); }
        }

        /* Gold sweep across important cards */
        .founder-song-card,
        .photo-story-card,
        .final-cta {
          overflow: hidden;
        }

        .founder-song-card::after,
        .photo-story-card::after,
        .final-cta::after {
          content: "";
          position: absolute;
          top: -20%;
          left: -70%;
          width: 35%;
          height: 140%;
          transform: skewX(-18deg);
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 222, 151, .12),
            transparent
          );
          pointer-events: none;
          animation: kvGoldSweep 8s ease-in-out infinite;
        }

        @keyframes kvGoldSweep {
          0%, 60% { left: -70%; }
          78%, 100% { left: 140%; }
        }

        /* Video card motion */
        .founder-song-video {
          position: relative;
          overflow: hidden;
        }

        .founder-song-video::after {
          content: "▶";
          position: absolute;
          left: 50%;
          top: 50%;
          width: 58px;
          height: 58px;
          display: grid;
          place-items: center;
          transform: translate(-50%, -50%) scale(.88);
          border: 1px solid rgba(255, 220, 150, .65);
          border-radius: 50%;
          color: #f2d28b;
          background: rgba(38, 8, 15, .48);
          backdrop-filter: blur(6px);
          opacity: .72;
          pointer-events: none;
          transition: transform .35s ease, opacity .35s ease;
        }

        .founder-song-video:hover::after {
          transform: translate(-50%, -50%) scale(1.05);
          opacity: 1;
        }

        .founder-song-video iframe {
          transition: transform .8s var(--kv-ease);
        }

        .founder-song-video:hover iframe {
          transform: scale(1.018);
        }

        /* Image-story hover */
        .photo-large,
        .photo-medium,
        .photo-small {
          overflow: hidden;
        }

        .photo-large img,
        .photo-medium img,
        .photo-small img,
        .note-photo img {
          transition: transform .9s var(--kv-ease), filter .6s ease;
        }

        .photo-large:hover img,
        .photo-medium:hover img,
        .photo-small:hover img,
        .note-photo:hover img {
          transform: scale(1.045);
          filter: saturate(1.05);
        }

        /* Animated section headings */
        .section-heading-centered h2 span,
        .activities-heading h2 span,
        .recognition-heading h2 span,
        .note-text h2 span,
        .join-heading h2 span {
          background-size: 220% auto;
          animation: kvHeadingGold 7s linear infinite;
        }

        @keyframes kvHeadingGold {
          0% { background-position: 0 center; }
          100% { background-position: 220% center; }
        }

        /* Gentle floating decorative elements */
        .signature-orbit-one,
        .signature-orbit-two,
        .founder-medallion,
        .founder-aura {
          will-change: transform;
        }

        /* Mobile motion stays elegant */
        @media (max-width: 600px) {
          .signature-founder-hero {
            animation-duration: .6s;
          }

          .founder-portrait-frame {
            animation-duration: 7s;
          }

          .founder-song-video::after {
            width: 48px;
            height: 48px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .kalavedika-home section,
          .signature-topline,
          .signature-kicker,
          .signature-title,
          .signature-description,
          .signature-motto,
          .signature-actions,
          .signature-founder-visual,
          .founder-portrait-frame,
          .founder-song-card::after,
          .photo-large img,
          .photo-medium img,
          .photo-small img,
          .note-photo img {
            animation: none !important;
            transition: none !important;
          }
        }

      `}</style>

    </main>
  );
}