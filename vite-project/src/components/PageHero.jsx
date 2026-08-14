import React from "react";

export default function PageHero({
  eyebrow,
  title,
  description
}) {
  return (
    <section className="page-hero">

      <div className="page-hero-pattern" />

      <div className="page-hero-container">

        <span className="page-hero-eyebrow">
          {eyebrow}
        </span>

        <h1>
          {title}
        </h1>

        {description && (
          <p>
            {description}
          </p>
        )}

      </div>

      <div className="page-hero-script">
        అక్షరం
      </div>

    </section>
  );
}