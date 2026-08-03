import { ArrowUp } from "lucide-react";
import Link from "next/link";

export function GmtFooter() {
  return (
    <footer id="contact" className="gmt-footer">
      <div className="gmt-footer__lead">
        <p className="gmt-section-label">Start with the requirement</p>
        <h2>Machine, tooling, compatibility—bring us the whole picture.</h2>
        <Link href="/#enquire">Build an enquiry</Link>
      </div>

      <div className="gmt-footer__main">
        <div className="gmt-footer__brand">
          <Link href="/" aria-label="Ghanshyam Machine Tools home">
            <svg viewBox="245 108 1070 812" role="img" aria-label="GMT logo">
              <image href="/gmt-logo-reference.png" width="1454" height="1082" />
            </svg>
          </Link>
          <p>Machine tools and industrial equipment sourcing for Vadodara and Gujarat.</p>
          <div className="gmt-footer__business-note">
            <span>Business context</span>
            <p>Retailer and sourcing partner for the machine, tooling, accessories, and workholding around the job.</p>
          </div>
        </div>

        <div className="gmt-footer__links">
          <div>
            <h3>Explore</h3>
            <Link href="/#products">Product range</Link>
            <Link href="/#about">How GMT helps</Link>
            <Link href="/#enquire">Start an enquiry</Link>
          </div>
          <div>
            <h3>Location</h3>
            <p>Vadodara, Gujarat</p>
            <span>Final address and contact details are pending confirmation.</span>
          </div>
        </div>
      </div>

      <div className="gmt-footer__bottom">
        <p>© 2026 Ghanshyam Machine Tools</p>
        <a href="#main">
          Back to top
          <ArrowUp size={14} aria-hidden="true" />
        </a>
      </div>
    </footer>
  );
}
