import React from "react";
import PageHero from "../components/PageHero";
import SectionTitle from "../components/SectionTitle";

const books = [
  "కవితా కుసుమాలు",
  "తెలుగు వెలుగు",
  "సాహిత్య సౌరభం",
  "మన సంస్కృతి",
  "అక్షర యాత్ర",
  "కళా తరంగాలు"
];

export default function Publications() {
  return (
    <>
      <PageHero
        eyebrow="అక్షర సంపద"
        title="ప్రచురణలు"
        description="రచయితల సృజనకు అక్షరరూపం ఇచ్చే ప్రచురణ వేదిక."
      />

      <section className="section">

        <div className="container">

          <SectionTitle
            center
            eyebrow="పుస్తక ప్రపంచం"
            title="మా ప్రచురణలలో కొన్ని"
          />

          <div className="bookshelf">

            {books.map((book, index) => (
              <article
                className="book"
                key={book}
              >

                <div className="book-cover">

                  <small>
                    శ్రీ శ్రీ కళావేదిక
                  </small>

                  <strong>
                    {book}
                  </strong>

                  <span>
                    ౨౦౨౬
                  </span>

                </div>

                <h3>{book}</h3>

                <p>
                  సాహిత్య ప్రచురణ
                </p>

              </article>
            ))}

          </div>

        </div>

      </section>
    </>
  );
}