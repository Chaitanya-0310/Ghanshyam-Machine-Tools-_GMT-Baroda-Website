const faqs = [
  {
    question: "Can I enquire if I am still deciding on the machine category?",
    answer:
      "Yes. GMT can help you frame the machine category, capacity or size, tooling, accessory, compatibility, preferred make, and budget context for a more focused enquiry.",
  },
  {
    question: "What details help make an enquiry clearer?",
    answer:
      "Share the application, material or workpiece, relevant size or capacity, tooling and workholding needs, compatibility details, and any known make, model, or budget context.",
  },
  {
    question: "Can I ask about tooling and workholding with a machine requirement?",
    answer:
      "Yes. GMT's range is organised around the wider requirement, including the machine, tooling, accessories, workholding, and supporting equipment relevant to the job.",
  },
  {
    question: "Is GMT focused on Vadodara and Gujarat?",
    answer:
      "GMT's local focus is Vadodara first, with Gujarat as the wider market context for the website and buyer enquiries.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(({ question, answer }) => ({
    "@type": "Question",
    name: question,
    acceptedAnswer: {
      "@type": "Answer",
      text: answer,
    },
  })),
};

export function FaqSection() {
  return (
    <section className="gmt-faq" aria-labelledby="faq-title">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="gmt-faq__intro">
        <p className="gmt-section-label">Buyer questions</p>
        <h2 id="faq-title">A clearer start to the sourcing conversation.</h2>
      </div>
      <div className="gmt-faq__list">
        {faqs.map((faq, index) => (
          <details key={faq.question} className="gmt-faq__item">
            <summary>
              <span>{String(index + 1).padStart(2, "0")}</span>
              {faq.question}
            </summary>
            <p>{faq.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
