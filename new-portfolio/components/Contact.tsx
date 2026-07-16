import { ExternalLink, Mail } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <p className="section-label">Contact</p>

      <h2>
        Have an opportunity
        <br />
        or an idea?
        <br />
        Let&apos;s talk.
      </h2>

      <div className="contact-links">
        <a href="mailto:vyalamanchi@rivier.edu">
          <Mail size={22} />
          Email
        </a>

        <a
          href="https://www.linkedin.com/in/YOUR-LINKEDIN"
          target="_blank"
          rel="noreferrer"
        >
          <ExternalLink size={22} />
          LinkedIn
        </a>

        <a
          href="https://github.com/VINAY-YALAMANCHI"
          target="_blank"
          rel="noreferrer"
        >
          <ExternalLink size={22} />
          GitHub
        </a>
      </div>
    </section>
  );
}