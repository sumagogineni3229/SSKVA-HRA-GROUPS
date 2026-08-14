import React from "react";
import PageHero from "../components/PageHero";
import SectionTitle from "../components/SectionTitle";

const members = [
  "అధ్యక్షులు",
  "ఉపాధ్యక్షులు",
  "ప్రధాన కార్యదర్శి",
  "కోశాధికారి",
  "సంయుక్త కార్యదర్శి",
  "సాంస్కృతిక కార్యదర్శి"
];

export default function ExecutiveMembers() {
  return (
    <>
      <PageHero
        eyebrow="మన బృందం"
        title="కార్యవర్గం"
        description="సంస్థ కార్యక్రమాలను ముందుకు నడిపించే నాయకత్వ బృందం."
      />

      <section className="section">

        <div className="container">

          <SectionTitle
            center
            eyebrow="నాయకత్వం"
            title="కార్యవర్గ సభ్యులు"
          />

          <div className="people-grid">

            {members.map((role, index) => (
              <article
                className="person-card"
                key={role}
              >

                <div className="person-photo">
                  <span>చిత్రం</span>
                </div>

                <div className="person-info">

                  <span>
                    శ్రీ / శ్రీమతి
                  </span>

                  <h3>{role}</h3>

                  <p>
                    శ్రీ శ్రీ కళావేదిక
                  </p>

                </div>

              </article>
            ))}

          </div>

        </div>

      </section>
    </>
  );
}