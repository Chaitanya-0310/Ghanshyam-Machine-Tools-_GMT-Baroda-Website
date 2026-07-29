"use client";

import { Button } from "@/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  NativeSelect,
  NativeSelectOption,
} from "@/components/ui/native-select";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { ArrowUpRight } from "lucide-react";
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
        <Separator />

        <FieldGroup className="gmt-enquiry__field-grid">
          <Field>
            <FieldLabel htmlFor="enquiry-name">Your name <em>*</em></FieldLabel>
            <Input id="enquiry-name" name="name" autoComplete="name" required placeholder="Example: Chaitanya Panchal…" />
          </Field>
          <Field>
            <FieldLabel htmlFor="enquiry-company">Company / workshop</FieldLabel>
            <Input id="enquiry-company" name="company" autoComplete="organization" placeholder="Example: Precision Works…" />
          </Field>
          <Field>
            <FieldLabel htmlFor="enquiry-phone">Phone <em>*</em></FieldLabel>
            <Input id="enquiry-phone" name="phone" type="tel" inputMode="tel" autoComplete="tel" required placeholder="Example: +91 98765 43210…" />
          </Field>
          <Field>
            <FieldLabel htmlFor="enquiry-email">Work email <em>*</em></FieldLabel>
            <Input id="enquiry-email" name="email" type="email" inputMode="email" autoComplete="email" spellCheck={false} required placeholder="Example: name@company.com…" />
          </Field>
        </FieldGroup>

        <FieldGroup className="gmt-enquiry__field-grid">
          <Field>
            <FieldLabel htmlFor="enquiry-type">I need help with <em>*</em></FieldLabel>
            <NativeSelect className="gmt-enquiry__select" id="enquiry-type" name="requestType" defaultValue="help-me-choose" required>
              <NativeSelectOption value="help-me-choose">Choosing a suitable requirement</NativeSelectOption>
              <NativeSelectOption value="quote">A quote for a known product</NativeSelectOption>
              <NativeSelectOption value="accessories">Tooling, accessories, or workholding</NativeSelectOption>
              <NativeSelectOption value="complete">A machine and supporting requirement</NativeSelectOption>
            </NativeSelect>
          </Field>
          <Field>
            <FieldLabel htmlFor="enquiry-category">Starting category <em>*</em></FieldLabel>
            <NativeSelect className="gmt-enquiry__select" id="enquiry-category" name="category" defaultValue="" required>
              <NativeSelectOption value="" disabled>Select a product category</NativeSelectOption>
              {categories.map((category) => (
                <NativeSelectOption key={category.slug} value={category.name}>{category.name}</NativeSelectOption>
              ))}
            </NativeSelect>
          </Field>
        </FieldGroup>

        <Field>
          <FieldLabel htmlFor="enquiry-requirement">Tell us about the job <em>*</em></FieldLabel>
          <Textarea
            id="enquiry-requirement"
            name="requirement"
            rows={5}
            required
            placeholder="Example: Material, workpiece size, application, capacity, preferred make or model, budget context, and compatibility details…"
          />
          <FieldDescription>Include any known make, model, capacity, or compatibility details.</FieldDescription>
        </Field>

        <div className="gmt-enquiry__footer">
          <p>This prepares an email for you to review before sending.</p>
          <Button type="submit" variant="gmt" size="lg">
            <span>Prepare Enquiry</span>
            <ArrowUpRight data-icon="inline-end" aria-hidden="true" strokeWidth={2} />
          </Button>
        </div>
        <p className="gmt-enquiry__notice" role="status" aria-live="polite">{notice}</p>
      </form>
    </section>
  );
}
