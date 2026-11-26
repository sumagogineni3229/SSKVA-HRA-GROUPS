
import React, { useMemo, useState } from "react";
import exeCom from "../assets/exe-com.jpg";

// Automatically load all member photographs
const imageFiles = import.meta.glob("../assets/Executivemembers/*", {
  eager: true,
  query: "?url",
  import: "default",
});

const normalize = (value = "") =>
  value.normalize("NFC").trim().replace(/\s+/g, " ").toLowerCase();

const getMemberImage = (filename) => {
  const match = Object.entries(imageFiles).find(([path]) =>
    normalize(path.split("/").pop()) === normalize(filename)
  );
  return match?.[1] || null;
};

const members = [
  {
    name: "కళారత్న కత్తిమండ ప్రతాప్ కుమార్",
    designation: "Founder & International Chairman",
    image: "founder.png",
    featured: true,
    description:
      "ఒక అక్షరం సమాజాన్ని మార్చగలదనే నమ్మకంతో సాహిత్యానికి విశాలమైన వేదికను నిర్మించిన దార్శనికుడు. కవుల కలలకు రెక్కలు, రచయితల ప్రతిభకు గుర్తింపు, తెలుగు భాషకు ప్రపంచస్థాయి గౌరవం అందించాలనే సంకల్పమే ఆయన సాహిత్య ప్రయాణానికి స్ఫూర్తి.",
    quote: "సాహిత్యానికి సరిహద్దులు లేవు... ప్రతిభకు పరిమితులు లేవు.",
  },
  {
    name: "శ్రీహరి కోటి",
    designation: "National President",
    image: "శ్రీహరి కోటి.png",
    description:
      "ఒక సంస్థ బలం దాని లక్ష్యంలో ఉంటుంది. జాతీయ స్థాయిలో సాహిత్య, సాంస్కృతిక ఆలోచనలను ఒకే దిశగా నడిపించే నాయకత్వ స్ఫూర్తికి ప్రతినిధిగా నిలుస్తున్నారు.",
    quote: "ఐక్యతతో అడుగులు వేస్తే... అభివృద్ధికి కొత్త దారులు తెరుచుకుంటాయి.",
  },
  {
    name: "గుండాల రాకేష్",
    designation: "National Organizing Secretary",
    image: "గుండాల రాకేష్ .png",
    description:
      "ఆలోచనను కార్యరూపంలోకి తీసుకురావడమే నిజమైన కార్యదక్షత. కార్యక్రమాల సమన్వయం, నిర్వహణ మరియు సంస్థాగత అనుబంధానికి ప్రాధాన్యతనిస్తూ ముందుకు సాగుతున్నారు.",
    quote: "ప్రణాళికకు క్రమశిక్షణ తోడైతే... విజయం సాధ్యమవుతుంది.",
  },
  {
    name: "ఈశ్వరి భూషణం",
    designation: "General Secretary",
    image: "జి. ఈశ్వరీ భూషణం.png",
    description:
      "బాధ్యతను నిబద్ధతగా, ప్రతి పనిని సమన్వయంగా మలచే సేవా దృక్పథానికి ప్రతిరూపంగా నిలుస్తున్నారు. సంస్థ ప్రయాణంలో క్రమబద్ధత, అనుబంధం మరియు సహకారానికి ప్రాధాన్యతనిస్తున్నారు.",
    quote: "బాధ్యతను ప్రేమిస్తే... ప్రతి ప్రయత్నం ఒక విజయగాథ అవుతుంది.",
  },
  {
    name: "గరిమెళ్ల రాజేంద్ర ప్రసాద్",
    designation: "Youth Wing President",
    image: "గరిమెళ్ల రాజేంద్ర ప్రసాద్.png",
    description:
      "యువతలోని ఆలోచనలకు అవకాశాలు కల్పించడం, కొత్త తరంలో సాహిత్య ఆసక్తిని పెంపొందించడం ఒక గొప్ప భవిష్యత్తుకు పునాది. ఆ యువ సృజనాత్మకతకు వేదిక కల్పించే ఆశయంతో ముందుకు సాగుతున్నారు.",
    quote: "యువత కలలకు దారి చూపితే... రేపటి చరిత్ర వారే రాస్తారు.",
  },
  {
    name: "గుత్తా హరిసర్వోత్తమ నాయుడు",
    designation: "State President",
    image: "గుత్తా హరి సర్వోత్తమ నాయుడు.png",
    description:
      "ప్రాంతీయ ప్రతిభకు విస్తృతమైన గుర్తింపు రావాలనే ఆశయంతో సాహిత్య, సాంస్కృతిక కార్యక్రమాల విస్తరణకు ప్రాధాన్యతనిస్తున్నారు.",
    quote: "ప్రతి ప్రాంతంలో ఒక ప్రతిభ ఉంటుంది... దానికి ఒక వేదిక కావాలి.",
  },
  {
    name: "ఓ కోయిలా నవీన్",
    designation: "Executive Member",
    image: "ఓ కోయిలా నవీన్ .png",
    description:
      "ప్రతి మంచి ఆలోచనకు ప్రోత్సాహం అవసరం. సృజనాత్మకతను గౌరవిస్తూ, సంస్థ ఆశయాల పట్ల నిబద్ధతతో ముందుకు సాగే కార్యవర్గ భాగస్వామిగా ఉన్నారు.",
    quote: "చిన్న ప్రోత్సాహం... ఒక గొప్ప ప్రతిభకు ఆరంభం.",
  },
  {
    name: "కట్ల భాగ్యలక్ష్మి",
    designation: "Executive Member",
    image: "కట్ల భాగ్యలక్ష్మి.png",
    description:
      "మహిళా ప్రతిభకు మరింత గుర్తింపు, సృజనాత్మకతకు సముచిత గౌరవం లభించాలనే స్ఫూర్తిదాయక ఆలోచనలకు ప్రాధాన్యతనిస్తున్నారు.",
    quote: "ప్రతిభకు లింగభేదం లేదు... అవకాశమే అసలైన గుర్తింపు.",
  },
  {
    name: "కేతా శ్రీనివాస రావు",
    designation: "Executive Member",
    image: "కేతా శ్రీనివాస రావు.png",
    description:
      "భాషను ప్రేమించడం అంటే మన సంస్కృతిని గౌరవించడం. తెలుగు సాహిత్య విలువలు తరతరాలకు చేరాలనే ఆశయంతో సంస్థతో అనుబంధంగా ఉన్నారు.",
    quote: "భాష బతికితే... భావజాలం తరతరాలకు బతుకుతుంది.",
  },
  {
    name: "కొలిచిన రామ జగన్నాథ్",
    designation: "Executive Member",
    image: "కొలిచిన రామ  జగన్నాథ్.png",
    description:
      "కలిసికట్టుగా పనిచేసే మనస్తత్వమే ఒక ఉద్యమానికి బలం. సాహిత్య సమావేశాలు, సాంస్కృతిక కార్యక్రమాలు మరియు సంస్థ అభివృద్ధి ప్రయాణంలో భాగస్వామిగా ఉన్నారు.",
    quote: "కలిసిన మనసులు... కలల్ని నిజం చేసే శక్తులు.",
  },
  {
    name: "చప్పిడి రాజశేఖర్",
    designation: "Executive Member",
    image: "చప్పిడి రాజశేఖర్.png",
    description:
      "సృజనాత్మకతకు గౌరవం, కళాకారులకు ప్రోత్సాహం, సాహిత్యానికి ఆదరణ అనే విలువలను ముందుకు తీసుకెళ్లే సంస్థ ప్రయాణంలో భాగస్వామిగా ఉన్నారు.",
    quote: "కళను గౌరవించే సమాజమే... సంస్కృతిని కాపాడుతుంది.",
  },
  {
    name: "చిందం సునీత",
    designation: "Executive Member",
    image: "చిందం  సునీత .png",
    description:
      "సంస్కృతి అనేది మన జీవితాల ప్రతిబింబం. మహిళల సృజనాత్మక భాగస్వామ్యం, కళా అభిరుచి మరియు సాంస్కృతిక చైతన్యానికి ప్రాధాన్యతనిస్తున్నారు.",
    quote: "ఒక సృజనాత్మక స్వరం... ఎన్నో హృదయాలకు స్ఫూర్తి.",
  },
  {
    name: "జి. రామమూర్తి",
    designation: "Executive Member",
    image: "జి. రామమూర్తి.png",
    description:
      "మన సాహిత్య వారసత్వాన్ని గౌరవిస్తూ, దాని విలువలను కొత్త తరానికి పరిచయం చేయాలనే ఆలోచనకు మద్దతుగా నిలుస్తున్నారు.",
    quote: "వారసత్వాన్ని కాపాడటం... భవిష్యత్తుకు వెలుగు ఇవ్వటం.",
  },
  {
    name: "డా. ఎర్ర సతీష్",
    designation: "Executive Member",
    image: "డా. ఎర్ర సతీష్.png",
    description:
      "జ్ఞానం, ఆలోచన మరియు సామాజిక స్పృహ కలిసినప్పుడే సాహిత్యం మరింత అర్థవంతమవుతుంది. అలాంటి సృజనాత్మక వాతావరణానికి తన సహకారాన్ని అందిస్తున్నారు.",
    quote: "జ్ఞానం ఆలోచనను పెంచుతుంది... ఆలోచన సమాజాన్ని మార్చుతుంది.",
  },
  {
    name: "డా. కావూరి శ్రీనివాస శర్మ",
    designation: "Executive Member",
    image: "డా. కావూరి శ్రీనివాస శర్మ.png",
    description:
      "సాహిత్యం అనేది కేవలం పదాల సమాహారం కాదు, అది తరాల అనుభవాల నిధి. భాషా విలువలు, సాహిత్య చైతన్యానికి ప్రాధాన్యతనిస్తున్నారు.",
    quote: "అక్షరాన్ని గౌరవిస్తే... ఆలోచనకు అమరత్వం లభిస్తుంది.",
  },
  {
    name: "డా. టి. పార్ధ సారధి",
    designation: "Executive Member",
    image: "డా. టి. పార్ధ సారధి.png",
    description:
      "సంస్థ లక్ష్యాలకు ఆలోచనాత్మక సహకారం అందిస్తూ, సాహిత్య మరియు సాంస్కృతిక కార్యక్రమాల అభివృద్ధికి మద్దతుగా నిలుస్తున్నారు.",
    quote: "సంకల్పం ఉన్నచోట... సాధనకు కొత్త మార్గం ఉంటుంది.",
  },
  {
    name: "డా. గుగాంపు",
    designation: "Executive Member",
    image: "డా. గుగాంపు.png",
    description:
      "సాహిత్య సంభాషణలు, ఆలోచనల మార్పిడి మరియు సాంస్కృతిక పరిచయాల ద్వారా సృజనాత్మక వాతావరణం బలోపేతం కావాలనే ఆశయంతో అనుబంధంగా ఉన్నారు.",
    quote: "మంచి ఆలోచన పంచుకుంటే... మరెన్నో ఆలోచనలు పుడతాయి.",
  },
  {
    name: "డా. పుల్లేటికుర్తి ఎస్. వి. శ్రీనుబాబు",
    designation: "Executive Member",
    image: "డా. పుల్లేటికుర్తి ఎస్. వి. శ్రీనుబాబు.png",
    description:
      "సామాజిక విలువలు, సాహిత్య స్పృహ మరియు మానవీయ ఆలోచనలకు ప్రాధాన్యతనిస్తూ సంస్థ ఆశయాలకు తన సహకారాన్ని అందిస్తున్నారు.",
    quote: "మనిషిని ఉన్నతంగా చూపించేది... అతని మానవీయ విలువలే.",
  },
  {
    name: "డా. శ్రీనివాస్ వాసుదేవ్",
    designation: "Executive Member",
    image: "డా. శ్రీనివాస్ వాసుదేవ్.png",
    description:
      "సాహితీవేత్తల మధ్య అనుబంధం పెంపొందడం, తెలుగు భాషా చైతన్యం విస్తరించడం ద్వారా సాహిత్య సమాజం మరింత బలపడాలనే ఆశయంతో ఉన్నారు.",
    quote: "సాహిత్యం కలిపే హృదయాలకు... దూరాలు ఉండవు.",
  },
  {
    name: "డాక్టర్ బాల చంద్ర సాదే",
    designation: "Executive Member",
    image: "డాక్టర్ బాల చంద్ర సాదే .png",
    description:
      "సాహిత్యం, సంస్కృతి మరియు సామాజిక బాధ్యతల మధ్య అనుబంధాన్ని గుర్తిస్తూ సంస్థ ప్రయాణంలో తన భాగస్వామ్యాన్ని అందిస్తున్నారు.",
    quote: "సంస్కృతి మన గుర్తింపు... సేవ మన బాధ్యత.",
  },
  {
    name: "డేబా విజయ్ కుమార్",
    designation: "Executive Member",
    image: "డేబా విజయ్ కుమార్.png",
    description:
      "తెలుగు కళా వైభవం మరింత మందికి చేరాలనే ఆశయంతో సాంస్కృతిక కార్యక్రమాలు మరియు సంస్థ అభివృద్ధి లక్ష్యాలకు మద్దతునిస్తున్నారు.",
    quote: "కళకు వేదిక దొరికితే... ప్రతిభకు కొత్త జీవితం లభిస్తుంది.",
  },
  {
    name: "దీపక్ న్యాతి",
    designation: "Executive Member",
    image: "దీపక్ న్యాతి  .png",
    description:
      "కొత్త ఆలోచనలకు స్వాగతం పలుకుతూ, సృజనాత్మకతకు అవకాశాలు కల్పించే సాహిత్య వాతావరణం అభివృద్ధి చెందాలని ఆకాంక్షిస్తున్నారు.",
    quote: "కొత్త ఆలోచనలే... రేపటి కొత్త ఆవిష్కరణలు.",
  },
  {
    name: "నల్లా భాగ్యలక్ష్మి",
    designation: "Executive Member",
    image: "నల్లా భాగ్యలక్ష్మి .png",
    description:
      "మహిళల సృజనాత్మకతకు గుర్తింపు, సాహిత్య అభిరుచికి ప్రోత్సాహం మరియు సాంస్కృతిక భాగస్వామ్యానికి ప్రాధాన్యతనిస్తున్నారు.",
    quote: "ఒక అవకాశం... ఎన్నో ప్రతిభలకు కొత్త ఆకాశం.",
  },
  {
    name: "నూక సంపత్ కుమార్",
    designation: "Executive Member",
    image: "నూక సంపత్ కుమార్.png",
    description:
      "సాహిత్యాన్ని ప్రజలకు మరింత చేరువ చేయాలనే ఆశయంతో తెలుగు భాషాభిమానులు మరియు సృజనాత్మక వ్యక్తుల అనుబంధానికి మద్దతునిస్తున్నారు.",
    quote: "పుస్తకాలు పరిచయం చేస్తాయి... సాహిత్యం జీవితాన్ని మారుస్తుంది.",
  },
  {
    name: "నూకల అశోక్ యాదవ్",
    designation: "Executive Member",
    image: "నూకల అశోక్ యాదవ్.png",
    description:
      "సంస్థ కార్యక్రమాల్లో భాగస్వామ్యం ద్వారా సాహిత్య, సాంస్కృతిక విలువలు మరింత విస్తరించాలనే లక్ష్యానికి తోడ్పడుతున్నారు.",
    quote: "ప్రతి మంచి ప్రయత్నం... ఒక గొప్ప మార్పుకు నాంది.",
  },
  {
    name: "నూలి అనుపమ ప్రియదర్శిని",
    designation: "Executive Member",
    image: "నూలి అనుపమ ప్రియదర్శిని.png",
    description:
      "సృజనాత్మక భావాలకు ప్రోత్సాహం, మహిళా ప్రతిభకు గౌరవం మరియు సాహిత్య అనుబంధానికి ప్రాధాన్యతనిస్తూ సంస్థతో ముందుకు సాగుతున్నారు.",
    quote: "భావానికి స్వరం ఇస్తే... ప్రతిభకు గుర్తింపు వస్తుంది.",
  },
  {
    name: "ఫిజిక్స్ అరుణ్ కుమార్",
    designation: "Executive Member",
    image: "ఫిజిక్స్ అరుణ్ కుమార్.png",
    description:
      "విజ్ఞాన ఆలోచనలు, సృజనాత్మకత మరియు సాహిత్య అభిరుచులు పరస్పరం ప్రేరణనివ్వాలనే భావనకు ప్రాధాన్యతనిస్తున్నారు.",
    quote: "ప్రశ్నించే మనసే... కొత్త ప్రపంచాన్ని ఆవిష్కరిస్తుంది.",
  },
  {
    name: "బాలార్జున సత్యనారాయణ మాకే",
    designation: "Executive Member",
    image: "బాలార్జున సత్యనారాయణ  మాకే.png",
    description:
      "తెలుగు సాహిత్య సంప్రదాయాల పట్ల గౌరవంతో, వాటిని భవిష్యత్ తరాలకు చేరవేసే సంస్థ ఆశయాలకు తోడ్పడుతున్నారు.",
    quote: "నిన్నటి సాహిత్యం... రేపటి తరానికి వెలుగు.",
  },
  {
    name: "వి.వరలక్ష్మి",
    designation: "Executive Member",
    image: "వి . వరలక్ష్మి .png",
    description:
      "సాహిత్యం మరియు సంస్కృతిలో మహిళల భాగస్వామ్యం మరింత విస్తరించాలనే ఆశయంతో సృజనాత్మకతకు, పరస్పర ప్రోత్సాహానికి ప్రాధాన్యతనిస్తున్నారు.",
    quote: "ప్రతిభకు ప్రోత్సాహం అందితే... ఆత్మవిశ్వాసం రెట్టింపవుతుంది.",
  },
  {
    name: "వై. కరుణాకర రావు",
    designation: "Executive Member",
    image: "వై. కరుణాకర రావు.png",
    description:
      "సాహిత్యం, కళలు మరియు సామాజిక సేవ ఒకే వేదికపై కలవాలనే సంస్థ సంకల్పానికి మద్దతుగా తన సహకారాన్ని అందిస్తున్నారు.",
    quote: "సేవతో కలిసిన సాహిత్యం... సమాజానికి స్ఫూర్తి.",
  },
];

function MemberImage({ member, featured = false }) {
  const [failed, setFailed] = useState(false);
  const imageUrl = getMemberImage(member.image);

  if (!imageUrl || failed) {
    return (
      <div className={featured ? "founder-fallback" : "member-fallback"}>
        <span>{member.name.slice(0, 2)}</span>
        <small>శ్రీ శ్రీ కళావేదిక</small>
      </div>
    );
  }

  return (
    <img
      src={imageUrl}
      alt={member.name}
      loading="lazy"
      onError={() => setFailed(true)}
    />
  );
}

export default function ExecutiveMembers() {
  const [search, setSearch] = useState("");

  const founder = members.find((member) => member.featured);

  const filteredMembers = useMemo(() => {
    const query = search.trim().toLowerCase();

    return members.filter((member) => {
      if (member.featured) return false;
      if (!query) return true;

      return (
        member.name.toLowerCase().includes(query) ||
        member.designation.toLowerCase().includes(query)
      );
    });
  }, [search]);

  const showFounder =
    !search.trim() ||
    founder.name.toLowerCase().includes(search.trim().toLowerCase()) ||
    founder.designation.toLowerCase().includes(search.trim().toLowerCase());

  return (
    <main className="executive-page">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Telugu:wght@400;500;600;700;800&family=Noto+Serif+Telugu:wght@400;500;600;700;800&display=swap');

        .executive-page {
          --maroon: #4B1025;
          --wine: #701D38;
          --gold: #D5AD65;
          --light-gold: #F3DDAE;
          --cream: #FBF6ED;
          --ink: #35232B;
          font-family: 'Noto Sans Telugu', sans-serif;
          background: var(--cream);
          color: var(--ink);
          min-height: 100vh;
          overflow: hidden;
        }

        .executive-page * { box-sizing: border-box; }

        .executive-page .container {
          width: min(1200px, calc(100% - 40px));
          margin: auto;
        }

        /* ANIMATIONS */

        @keyframes emFadeUp {
          from { opacity: 0; transform: translateY(35px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes emGoldShimmer {
          0% { background-position: 200% center; }
          100% { background-position: -200% center; }
        }

        @keyframes emGlow {
          0%, 100% { box-shadow: 0 0 12px rgba(213,173,101,.12); }
          50% { box-shadow: 0 0 28px rgba(213,173,101,.36); }
        }

        @keyframes emFloat {
          0%, 100% { transform: translateY(0) rotate(0); }
          50% { transform: translateY(-13px) rotate(8deg); }
        }

        @keyframes emLine {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }

        @keyframes emPulse {
          0%, 100% { opacity: .5; transform: scale(.9); }
          50% { opacity: 1; transform: scale(1.12); }
        }

        /* HERO */

        .executive-page .hero {
          position: relative;
          isolation: isolate;
          min-height: 450px;
          padding: 80px 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          color: white;
          overflow: hidden;
          background:
            linear-gradient(120deg, rgba(45,5,19,.92), rgba(100,22,47,.86)),
            url(${exeCom});
          background-size: cover;
          background-position: center;
        }

        .executive-page .hero::before,
        .executive-page .hero::after {
          content: "";
          position: absolute;
          inset: 17px;
          border: 1px solid rgba(213,173,101,.55);
          pointer-events: none;
          z-index: -1;
        }

        .executive-page .hero::after {
          inset: 24px;
          border-color: rgba(243,221,174,.18);
        }

        .executive-page .hero-content {
          position: relative;
          max-width: 850px;
          animation: emFadeUp 1s ease both;
        }

        .executive-page .hero-label {
          display: inline-block;
          border: 1px solid rgba(213,173,101,.7);
          color: var(--light-gold);
          padding: 10px 25px;
          border-radius: 50px;
          font-size: 11px;
          letter-spacing: 3px;
          font-weight: 800;
          margin-bottom: 25px;
          background: rgba(255,255,255,.04);
          animation: emGlow 4s ease-in-out infinite;
        }

        .executive-page .hero h1 {
          font-family: 'Noto Serif Telugu', serif;
          font-size: clamp(36px, 5.5vw, 64px);
          line-height: 1.6;
          margin: 0 0 18px;
          color: white;
        }

        .executive-page .hero h1 span {
          background: linear-gradient(
            100deg,
            #B98C45,
            #F7E5B7,
            #C89B53,
            #FFF1C9,
            #B98C45
          );
          background-size: 250% auto;
          color: transparent;
          background-clip: text;
          -webkit-background-clip: text;
          animation: emGoldShimmer 7s linear infinite;
        }

        .executive-page .hero p {
          color: #F2E5DF;
          font-size: 15px;
          line-height: 2.2;
          margin: 0;
        }

        .executive-page .hero-line {
          width: 95px;
          height: 2px;
          background: var(--gold);
          margin: 28px auto 0;
          transform-origin: center;
          animation: emLine 1.4s ease .5s both;
        }

        .executive-page .ornament {
          position: absolute;
          color: rgba(243,221,174,.35);
          font-size: 36px;
          animation: emFloat 6s ease-in-out infinite;
          pointer-events: none;
        }

        .executive-page .ornament.one { top: 22%; left: 8%; }
        .executive-page .ornament.two { bottom: 20%; right: 9%; animation-delay: 1.5s; }
        .executive-page .ornament.three { top: 20%; right: 18%; animation-delay: 2.5s; }

        /* SECTION INTRO */

        .executive-page .main-section {
          padding: 85px 0 100px;
          background:
            radial-gradient(ellipse at 50% 0%, rgba(213,173,101,.12), transparent 55%),
            var(--cream);
        }

        .executive-page .section-heading {
          text-align: center;
          max-width: 850px;
          margin: 0 auto 55px;
          animation: emFadeUp .8s ease both;
        }

        .executive-page .eyebrow {
          color: var(--wine);
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 3px;
          margin-bottom: 15px;
        }

        .executive-page .section-heading h2 {
          font-family: 'Noto Serif Telugu', serif;
          color: var(--maroon);
          font-size: clamp(28px, 4vw, 42px);
          line-height: 1.75;
          margin: 0 0 15px;
        }

        .executive-page .section-heading p {
          color: #796B70;
          font-size: 14px;
          line-height: 2.3;
          margin: 0;
        }

        .executive-page .gold-divider {
          height: 3px;
          width: 90px;
          margin: 24px auto 0;
          background: linear-gradient(90deg, transparent, var(--gold), transparent);
        }

        /* FOUNDER */

        .executive-page .founder-section {
          max-width: 1020px;
          margin: 0 auto 80px;
          animation: emFadeUp 1s ease both;
        }

        .executive-page .founder-card {
          position: relative;
          display: grid;
          grid-template-columns: .9fr 1.1fr;
          background: white;
          border: 1px solid #D8BD8B;
          box-shadow: 0 18px 50px rgba(75,16,37,.12);
          overflow: hidden;
        }

        .executive-page .founder-card::before {
          content: "";
          position: absolute;
          inset: 8px;
          border: 1px solid rgba(213,173,101,.35);
          z-index: 1;
          pointer-events: none;
        }

        .executive-page .founder-image-area {
          min-height: 420px;
          padding: 30px;
          display: flex;
          justify-content: center;
          align-items: center;
          background: linear-gradient(145deg, #F4EBDD, #E9D7BC);
          overflow: hidden;
        }

        .executive-page .founder-image-area img {
          width: 100%;
          height: 360px;
          object-fit: contain;
          transition: transform .7s ease;
        }

        .executive-page .founder-card:hover .founder-image-area img {
          transform: scale(1.045);
        }

        .executive-page .founder-content {
          padding: 45px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .executive-page .founder-badge {
          display: inline-block;
          width: fit-content;
          padding: 9px 15px;
          margin-bottom: 20px;
          border: 1px solid #E4CD9D;
          background: #FBF4E5;
          color: #8D6426;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 1px;
        }

        .executive-page .founder-content h3 {
          font-family: 'Noto Serif Telugu', serif;
          color: var(--maroon);
          font-size: clamp(22px, 3vw, 31px);
          line-height: 1.8;
          margin: 0 0 9px;
        }

        .executive-page .founder-designation {
          color: #9C753A;
          font-size: 12px;
          font-weight: 800;
          line-height: 1.8;
        }

        .executive-page .founder-content p {
          color: #706168;
          font-size: 13px;
          line-height: 2.35;
          margin: 20px 0;
        }

        .executive-page .founder-quote {
          padding: 13px 18px;
          background: #FBF5E9;
          border-left: 3px solid var(--gold);
          color: var(--maroon);
          font-family: 'Noto Serif Telugu', serif;
          font-size: 15px;
          line-height: 2;
        }

        /* SEARCH */

        .executive-page .search-wrap {
          max-width: 530px;
          margin: 0 auto 45px;
        }

        .executive-page .search-wrap input {
          width: 100%;
          padding: 16px 20px;
          border: 1px solid #DDCBA9;
          border-radius: 40px;
          outline: none;
          background: white;
          color: var(--ink);
          font-family: inherit;
          font-size: 13px;
          box-shadow: 0 5px 18px rgba(75,16,37,.04);
          transition: border .3s, box-shadow .3s;
        }

        .executive-page .search-wrap input:focus {
          border-color: var(--gold);
          box-shadow: 0 0 0 4px rgba(213,173,101,.15);
        }

        .executive-page .member-count {
          text-align: center;
          color: #987440;
          font-size: 12px;
          font-weight: 700;
          margin: -25px 0 38px;
        }

        /* MEMBER GRID */

        .executive-page .member-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 28px;
        }

        .executive-page .member-card {
          position: relative;
          display: flex;
          flex-direction: column;
          min-width: 0;
          overflow: hidden;
          background: #FFFEFC;
          border: 1px solid #E8DCC8;
          box-shadow: 0 8px 24px rgba(75,16,37,.055);
          opacity: 0;
          animation: emFadeUp .7s ease forwards;
          transition:
            transform .35s ease,
            box-shadow .35s ease,
            border-color .35s ease;
        }

        .executive-page .member-card::before {
          content: "";
          position: absolute;
          z-index: 2;
          top: 0;
          left: 0;
          width: 100%;
          height: 3px;
          background: linear-gradient(90deg, #8C542B, #F3DDAE, #A36B32);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform .45s ease;
        }

        .executive-page .member-card:hover {
          transform: translateY(-8px);
          border-color: #CBAA6E;
          box-shadow: 0 20px 42px rgba(75,16,37,.14);
        }

        .executive-page .member-card:hover::before {
          transform: scaleX(1);
        }

        .executive-page .member-photo {
          height: 290px;
          padding: 16px;
          display: flex;
          justify-content: center;
          align-items: center;
          background: linear-gradient(145deg, #F5EDE1, #EADBC5);
          overflow: hidden;
        }

        .executive-page .member-photo img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: contain;
          object-position: center;
          transition: transform .6s ease;
        }

        .executive-page .member-card:hover .member-photo img {
          transform: scale(1.055);
        }

        .executive-page .member-content {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 25px 21px 22px;
          border-top: 3px solid var(--maroon);
        }

        .executive-page .member-content h3 {
          font-family: 'Noto Serif Telugu', serif;
          color: var(--maroon);
          font-size: 18px;
          line-height: 1.9;
          margin: 0 0 9px;
        }

        .executive-page .designation {
          color: #9A7136;
          font-size: 11px;
          font-weight: 800;
          line-height: 1.8;
          letter-spacing: .5px;
          margin-bottom: 16px;
        }

        .executive-page .member-description {
          color: #786970;
          font-size: 12px;
          line-height: 2.2;
          margin: 0 0 18px;
        }

        .executive-page .member-quote {
          width: 100%;
          margin-top: auto;
          padding: 13px 10px;
          background: #FBF5E9;
          border-top: 1px solid #E9D9B9;
          color: var(--maroon);
          font-family: 'Noto Serif Telugu', serif;
          font-size: 12px;
          line-height: 2;
          transition: background .3s ease;
        }

        .executive-page .member-card:hover .member-quote {
          background: #F5EAD5;
        }

        /* FALLBACK */

        .executive-page .founder-fallback,
        .executive-page .member-fallback {
          width: 100%;
          height: 100%;
          min-height: 240px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 10px;
          text-align: center;
          color: var(--gold);
          background: linear-gradient(140deg, #481020, #76233E);
        }

        .executive-page .founder-fallback span,
        .executive-page .member-fallback span {
          font-family: 'Noto Serif Telugu', serif;
          font-size: 40px;
        }

        .executive-page .founder-fallback small,
        .executive-page .member-fallback small {
          color: var(--light-gold);
          font-size: 11px;
        }

        .executive-page .empty-state {
          grid-column: 1 / -1;
          padding: 45px 20px;
          background: white;
          border: 1px solid #E8DDD3;
          text-align: center;
          color: var(--ink);
        }

        /* CLOSING */

        .executive-page .closing {
          position: relative;
          padding: 80px 20px;
          text-align: center;
          color: white;
          background:
            radial-gradient(ellipse at center, rgba(118,35,62,.8), transparent 75%),
            #430D20;
          overflow: hidden;
        }

        .executive-page .closing::before {
          content: "";
          position: absolute;
          inset: 14px;
          border: 1px solid rgba(213,173,101,.48);
          pointer-events: none;
        }

        .executive-page .closing-content {
          position: relative;
          max-width: 900px;
          margin: 0 auto;
          animation: emFadeUp .9s ease both;
        }

        .executive-page .closing-symbol {
          color: var(--gold);
          font-size: 30px;
          margin-bottom: 14px;
          animation: emPulse 3s ease-in-out infinite;
        }

        .executive-page .closing h2 {
          font-family: 'Noto Serif Telugu', serif;
          color: var(--light-gold);
          font-size: clamp(25px, 4vw, 39px);
          line-height: 1.9;
          margin: 0 0 16px;
        }

        .executive-page .closing p {
          color: #EAD9D7;
          font-size: 14px;
          line-height: 2.2;
          margin: 0;
        }

        .executive-page .closing-tagline {
          color: var(--gold);
          font-family: 'Noto Serif Telugu', serif;
          font-size: 17px;
          line-height: 2;
          margin-top: 27px;
        }

        @media (max-width: 950px) {
          .executive-page .member-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 650px) {
          .executive-page .container {
            width: calc(100% - 30px);
          }

          .executive-page .hero {
            min-height: 360px;
            padding: 65px 15px;
          }

          .executive-page .hero::before { inset: 10px; }
          .executive-page .hero::after { inset: 17px; }

          .executive-page .ornament { font-size: 24px; }

          .executive-page .main-section {
            padding: 55px 0 65px;
          }

          .executive-page .founder-card {
            grid-template-columns: 1fr;
          }

          .executive-page .founder-image-area {
            min-height: 300px;
          }

          .executive-page .founder-image-area img {
            height: 270px;
          }

          .executive-page .founder-content {
            padding: 28px 22px;
          }

          .executive-page .member-grid {
            grid-template-columns: 1fr;
            gap: 22px;
          }

          .executive-page .member-photo {
            height: 310px;
          }

          .executive-page .closing {
            padding: 60px 20px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .executive-page *,
          .executive-page *::before,
          .executive-page *::after {
            animation: none !important;
            transition: none !important;
            scroll-behavior: auto !important;
          }

          .executive-page .member-card {
            opacity: 1;
          }
        }
      `}</style>

      {/* HERO */}
      <section className="hero">
        <span className="ornament one">✦</span>
        <span className="ornament two">✧</span>
        <span className="ornament three">✦</span>

        <div className="hero-content">
          <div className="hero-label">SRI SRI KALAVEDHIKA</div>
          <h1>Our <span>Leadership</span></h1>
          <p>
            ప్రతిభను గుర్తించే మనసులు...
            <br />
            సాహిత్యాన్ని నిలబెట్టే సంకల్పాలు...
            <br />
            సంస్కృతిని ముందుకు నడిపించే నాయకత్వం...
          </p>
          <div className="hero-line" />
        </div>
      </section>

      {/* MEMBERS SECTION */}
      <section className="main-section">
        <div className="container">
          <div className="section-heading">
            <div className="eyebrow">THE PEOPLE BEHIND THE VISION</div>
            <h2>మా కార్యవర్గం – మా స్ఫూర్తి</h2>
            <p>
              ఒక గొప్ప లక్ష్యం వెనుక ఎన్నో అంకితభావంతో కూడిన
              హృదయాలు ఉంటాయి. తెలుగు భాష, సాహిత్యం, కళలు,
              సంస్కృతి మరియు సామాజిక సేవ పట్ల గౌరవంతో
              శ్రీ శ్రీ కళావేదిక ప్రయాణంలో భాగస్వాములైన
              మా కార్యవర్గ సభ్యులకు హృదయపూర్వక అభివందనం.
            </p>
            <div className="gold-divider" />
          </div>

          {/* FOUNDER */}
          {showFounder && (
            <div className="founder-section">
              <div className="founder-card">
                <div className="founder-image-area">
                  <MemberImage member={founder} featured />
                </div>
                <div className="founder-content">
                  <span className="founder-badge">
                    FOUNDER & INTERNATIONAL CHAIRMAN
                  </span>
                  <h3>{founder.name}</h3>
                  <div className="founder-designation">
                    {founder.designation}
                  </div>
                  <p>{founder.description}</p>
                  <div className="founder-quote">
                    “{founder.quote}”
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* SEARCH */}
          <div className="search-wrap">
            <input
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="సభ్యుల పేరు లేదా హోదాతో వెతకండి..."
              aria-label="Search executive members"
            />
          </div>

          <div className="member-count">
            {filteredMembers.length + (showFounder ? 1 : 0)} మంది కార్యవర్గ సభ్యులు
          </div>

          {/* MEMBER CARDS */}
          <div className="member-grid">
            {filteredMembers.length > 0 ? (
              filteredMembers.map((member, index) => (
                <article
                  className="member-card"
                  key={member.image}
                  style={{ animationDelay: `${Math.min(index, 8) * 90}ms` }}
                >
                  <div className="member-photo">
                    <MemberImage member={member} />
                  </div>

                  <div className="member-content">
                    <h3>{member.name}</h3>
                    <div className="designation">
                      {member.designation}
                    </div>
                    <p className="member-description">
                      {member.description}
                    </p>
                    <div className="member-quote">
                      “{member.quote}”
                    </div>
                  </div>
                </article>
              ))
            ) : (
              !showFounder && (
                <div className="empty-state">
                  మీరు వెతికిన సభ్యుల వివరాలు లభించలేదు.
                  దయచేసి మరో పేరుతో ప్రయత్నించండి.
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* CLOSING */}
      <section className="closing">
        <div className="closing-content">
          <div className="closing-symbol">✦</div>
          <h2>
            వ్యక్తులు వేరు... ఆశయం ఒక్కటే...
            <br />
            ప్రతిభకు గౌరవం... సాహిత్యానికి పట్టాభిషేకం...
          </h2>
          <p>
            Every contribution adds value to a shared vision.
            Every voice deserves a platform. Together, let us
            celebrate literature, preserve our cultural heritage
            and inspire generations to come.
          </p>
          <div className="closing-tagline">
            ప్రతిభ మీది...పట్టాభిషేకం మాది...
          </div>
        </div>
      </section>
    </main>
  );
}
