import React from "react";
import PageHero from "../components/PageHero";
import SectionTitle from "../components/SectionTitle";

const items = [
  "సాహిత్య సభ",
  "కవితా వేదిక",
  "సాంస్కృతిక వేడుక",
  "పురస్కార ప్రదానం",
  "రచయితల సమావేశం",
  "సామాజిక సేవ",
  "యువ రచయితల శిబిరం",
  "పుస్తక ఆవిష్కరణ"
];

export default function Gallery() {
  return (
    <>
      <PageHero
        eyebrow="జ్ఞాపకాల పలక"
        title="చిత్రమాలిక"
        description="మన కార్యక్రమాలు, మనుషులు, మన జ్ఞాపకాల దృశ్యాలు."
      />

      <section className="section">

        <div className="container">

          <SectionTitle
            eyebrow="దృశ్యాలు"
            title="మన ప్రయాణంలోని కొన్ని క్షణాలు"
          />

          <div className="gallery-grid">

            {items.map((title, index) => (
              <figure
                className={`gallery-item gallery-${index % 4}`}
                key={title}
              >

                <div className="gallery-placeholder">
                  <span>
                    చిత్రం {index + 1}
                  </span>
                </div>

                <figcaption>
                  {title}
                </figcaption>

              </figure>
            ))}

          </div>

        </div>

      </section>
    </>
  );
}