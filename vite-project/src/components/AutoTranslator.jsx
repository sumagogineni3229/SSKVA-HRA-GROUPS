
import { useEffect } from "react";

export default function AutoTranslator() {
  useEffect(() => {
    if (document.getElementById("google-translate-script")) return;

    window.googleTranslateElementInit = () => {
      if (
        window.google?.translate?.TranslateElement &&
        !document.getElementById("google_translate_element")?.children.length
      ) {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "te",
            includedLanguages: "te,en",
            autoDisplay: false
          },
          "google_translate_element"
        );
      }
    };

    const script = document.createElement("script");
    script.id = "google-translate-script";
    script.src =
      "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;

    document.body.appendChild(script);
  }, []);

  return (
    <div className="auto-translator">
      <div id="google_translate_element"></div>

      <style>{`
        .auto-translator {
          display: inline-flex;
          align-items: center;
          background: #4B1025;
          border: 1px solid #D5AD65;
          border-radius: 30px;
          padding: 7px 12px;
        }

        .auto-translator select {
          background: #4B1025;
          color: #F3DDAE;
          border: none;
          outline: none;
          font-size: 13px;
          cursor: pointer;
          max-width: 105px;
        }

        .auto-translator option {
          background: #4B1025;
          color: white;
        }

        .auto-translator .goog-te-gadget {
          color: transparent !important;
          font-size: 0;
        }

        .auto-translator .goog-te-gadget span,
        .auto-translator .goog-logo-link {
          display: none !important;
        }

        .auto-translator .goog-te-combo {
          margin: 0 !important;
        }

        body {
          top: 0 !important;
        }

        .goog-te-banner-frame,
        .skiptranslate iframe {
          display: none !important;
        }
      `}</style>
    </div>
  );
}
