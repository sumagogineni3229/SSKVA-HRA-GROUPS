import React from "react";
import PageHero from "../components/PageHero";
import SectionTitle from "../components/SectionTitle";

export default function Contact() {
  return (
    <>
      <PageHero
        eyebrow="మనతో మాట్లాడండి"
        title="సంప్రదించండి"
        description="మీ ఆలోచన, మీ రచన, మీ సూచన — మాకు ముఖ్యమే."
      />

      <section className="section">

        <div className="container contact-grid">

          <div>

            <SectionTitle
              eyebrow="సంప్రదింపు"
              title="తెలుగు కుటుంబంతో కలవండి"
            />

            <div className="contact-details">

              <div>
                <span>చిరునామా</span>

                <p>
                  శ్రీ శ్రీ కళావేదిక కార్యాలయం
                  <br />
                  తెలంగాణ, భారతదేశం
                </p>
              </div>

              <div>
                <span>ఫోన్</span>

                <p>
                  +౯౧ ౯౬౭౬౨౭౨౨౮౩
                </p>
              </div>

              <div>
                <span>ఇమెయిల్</span>

                <p>
                  info@srisrikalavedika.org
                </p>
              </div>

            </div>

          </div>

          <form
            className="contact-form"
            onSubmit={(event) =>
              event.preventDefault()
            }
          >

            <label>
              మీ పేరు

              <input
                placeholder="మీ పేరు"
              />
            </label>

            <label>
              మొబైల్ / ఇమెయిల్

              <input
                placeholder="సంప్రదింపు వివరాలు"
              />
            </label>

            <label>
              విషయం

              <input
                placeholder="విషయం"
              />
            </label>

            <label>
              మీ సందేశం

              <textarea
                rows="6"
                placeholder="మీ సందేశాన్ని ఇక్కడ రాయండి"
              />
            </label>

            <button
              className="button button-dark"
              type="submit"
            >
              సందేశం పంపండి
            </button>

          </form>

        </div>

      </section>
    </>
  );
}