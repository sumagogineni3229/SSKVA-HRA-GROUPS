import React from "react";
import PageHero from "../components/PageHero";
import SectionTitle from "../components/SectionTitle";

const events = [
  [
    "౧౫",
    "ఆగస్టు",
    "అంతర్జాతీయ తెలుగు సాహిత్య సమ్మేళనం",
    "హైదరాబాద్"
  ],
  [
    "౦౭",
    "సెప్టెంబర్",
    "కవితా కుసుమం",
    "విజయవాడ"
  ],
  [
    "౨౦",
    "అక్టోబర్",
    "తెలుగు కళా వేడుక",
    "వరంగల్"
  ],
  [
    "౦౫",
    "నవంబర్",
    "రచయితల సత్కార సభ",
    "హైదరాబాద్"
  ]
];

export default function Events() {
  return (
    <>
      <PageHero
        eyebrow="మన వేడుకలు"
        title="వేడుకలు & కార్యక్రమాలు"
        description="సాహిత్యం, కళ మరియు సంస్కృతిని కలసి జరుపుకునే సందర్భాలు."
      />

      <section className="section">

        <div className="container">

          <SectionTitle
            eyebrow="క్యాలెండర్"
            title="ముందున్న కార్యక్రమాలు"
          />

          <div className="event-calendar">

            {events.map(
              ([day, month, title, place]) => (

                <article
                  className="calendar-row"
                  key={title}
                >

                  <div className="date-box">
                    <strong>{day}</strong>
                    <span>{month}</span>
                  </div>

                  <div>
                    <h3>{title}</h3>
                    <p>{place}</p>
                  </div>

                  <span className="event-arrow">
                    →
                  </span>

                </article>

              )
            )}

          </div>

        </div>

      </section>
    </>
  );
}