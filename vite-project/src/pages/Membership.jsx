import React from "react";
import PageHero from "../components/PageHero";
import SectionTitle from "../components/SectionTitle";

const benefits = [
  "సాహిత్య కార్యక్రమాల్లో భాగస్వామ్యం",
  "సభ్యుల ప్రత్యేక కార్యక్రమాలకు ఆహ్వానం",
  "రచనలను పరిచయం చేసుకునే అవకాశం",
  "సాహిత్య, సాంస్కృతిక నెట్‌వర్క్",
  "ప్రచురణ కార్యక్రమాల్లో ప్రాధాన్యత",
  "సేవా కార్యక్రమాల్లో భాగస్వామ్యం"
];

export default function Membership() {
  return (
    <>
      <PageHero
        eyebrow="మన కుటుంబంలోకి"
        title="సభ్యత్వం"
        description="తెలుగు సాహిత్య కుటుంబంలో మీ స్వరాన్ని కలపండి."
      />

      <section className="section">

        <div className="container membership-grid">

          <div>

            <SectionTitle
              eyebrow="ఎందుకు సభ్యత్వం?"
              title="మీరు కూడా ఈ ప్రయాణంలో భాగస్వామి కండి"
            />

            <div className="benefits">

              {benefits.map((benefit) => (
                <div key={benefit}>

                  <span>✓</span>

                  <p>{benefit}</p>

                </div>
              ))}

            </div>

          </div>

          <form
            className="membership-form"
            onSubmit={(event) =>
              event.preventDefault()
            }
          >

            <h3>
              సభ్యత్వ దరఖాస్తు
            </h3>

            <label>
              పూర్తి పేరు

              <input
                placeholder="మీ పూర్తి పేరు"
              />
            </label>

            <label>
              మొబైల్ నంబర్

              <input
                placeholder="మొబైల్ నంబర్"
              />
            </label>

            <label>
              ఇమెయిల్

              <input
                type="email"
                placeholder="ఇమెయిల్"
              />
            </label>

            <label>
              జిల్లా

              <input
                placeholder="మీ జిల్లా"
              />
            </label>

            <label>
              మీ ఆసక్తి

              <select>
                <option>సాహిత్యం</option>
                <option>సంస్కృతి</option>
                <option>సామాజిక సేవ</option>
                <option>అన్ని</option>
              </select>
            </label>

            <button
              className="button button-dark"
              type="submit"
            >
              దరఖాస్తు పంపండి
            </button>

          </form>

        </div>

      </section>
    </>
  );
}