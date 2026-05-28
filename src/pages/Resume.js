import { useEffect } from "react";
import { SITE } from "../theme";
import SectionHeading from "../components/SectionHeading";

function Resume() {
  useEffect(() => {
    document.title = `Resume | ${SITE.name}`;
  }, []);

  return (
    <main>
      <div className="page-container">

        <SectionHeading label="// resume" title="Resume" />

        <div
          className="fade-in"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "var(--gap-md)",
            marginBottom: "var(--gap-lg)",
          }}
        >
          <p style={{ color: "var(--text-dim)", fontSize: "0.9rem" }}>
            Preview below, or download the PDF directly.
          </p>

          <a
            href={SITE.resumePdf}
            className="btn-primary"
            target="_blank"
            rel="noopener noreferrer"
            download
          >
            ↓ Download PDF
          </a>
        </div>

        {/* PDF Preview */}
        <iframe
          className="resume-preview fade-in fade-in-delay-1"
          src={SITE.resumePdf}
          title={`${SITE.name} Resume`}
        />

      </div>
    </main>
  );
}

export default Resume;