"use client";

import { FormEvent, useState } from "react";
import { categories } from "../lib/categories";

const TEMPORARY_ENQUIRY_RECIPIENT = "chaitanyapp03@gmail.com";

export function QuoteEnquiry() {
  const [notice, setNotice] = useState("");

  function prepareEnquiry(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const lines = [
      "Quote enquiry for Ghanshyam Machine Tools",
      "",
      `Name: ${data.get("name")}`,
      `Company: ${data.get("company") || "Not provided"}`,
      `Phone: ${data.get("phone")}`,
      `Email: ${data.get("email")}`,
      `Request type: ${data.get("requestType")}`,
      `Product category: ${data.get("category")}`,
      `Requirement: ${data.get("requirement")}`,
    ];
    const subject = encodeURIComponent(`Quote enquiry: ${data.get("category")}`);
    const body = encodeURIComponent(lines.join("\n"));

    window.location.href = `mailto:${TEMPORARY_ENQUIRY_RECIPIENT}?subject=${subject}&body=${body}`;
    setNotice("Your email app should open with the enquiry ready to send.");
  }

  return (
    <section id="enquire" className="gmt-enquiry" aria-labelledby="enquiry-title">
      <div className="gmt-enquiry__intro" data-reveal>
        <p className="gmt-section-label gmt-section-label--light">Requirement bench</p>
        <h2 id="enquiry-title">Turn the job into a clearer buying brief.</h2>
        <p>
          Start with what you need to make, repair, or equip. The detail helps narrow the machine, tooling, accessory, and compatibility needs around it.
        </p>

        <dl className="gmt-enquiry__steps">
          <div>
            <dt>01 / Application</dt>
            <dd>What the machine or equipment needs to do.</dd>
          </div>
          <div>
            <dt>02 / Capacity</dt>
            <dd>Workpiece, size, material, or output context.</dd>
          </div>
          <div>
            <dt>03 / Preference</dt>
            <dd>Known make, model, budget, or compatibility needs.</dd>
          </div>
        </dl>
      </div>

      <form className="gmt-enquiry__form" onSubmit={prepareEnquiry} data-reveal>
        <div className="gmt-enquiry__form-head">
          <span>Enquiry form</span>
          <strong>Required fields *</strong>
        </div>

        <div className="gmt-enquiry__field-grid">
          <label>
            Your name <em>*</em>
            <input name="name" autoComplete="name" required placeholder="Full name" />
          </label>
          <label>
            Company / workshop
            <input name="company" autoComplete="organization" placeholder="Business name" />
          </label>
          <label>
            Phone <em>*</em>
            <input name="phone" type="tel" autoComplete="tel" required placeholder="+91" />
          </label>
          <label>
            Work email <em>*</em>
            <input name="email" type="email" autoComplete="email" required placeholder="name@company.com" />
          </label>
        </div>

        <div className="gmt-enquiry__field-grid">
          <label>
            I need help with <em>*</em>
            <select name="requestType" defaultValue="help-me-choose" required>
              <option value="help-me-choose">Choosing a suitable requirement</option>
              <option value="quote">A quote for a known product</option>
              <option value="accessories">Tooling, accessories, or workholding</option>
              <option value="complete">A machine and supporting requirement</option>
            </select>
          </label>
          <label>
            Starting category <em>*</em>
            <select name="category" defaultValue="" required>
              <option value="" disabled>Select a product category</option>
              {categories.map((category) => (
                <option key={category.slug} value={category.name}>{category.name}</option>
              ))}
            </select>
          </label>
        </div>

        <label>
          Tell us about the job <em>*</em>
          <textarea
            name="requirement"
            rows={5}
            required
            placeholder="Material, workpiece size, application, capacity, preferred make or model, budget context, and compatibility details."
          />
        </label>

        <div className="gmt-enquiry__footer">
          <p>This prepares an email for you to review before sending.</p>
          <button type="submit">Prepare enquiry</button>
        </div>
        <p className="gmt-enquiry__notice" role="status" aria-live="polite">{notice}</p>
      </form>
    </section>
  );
}
