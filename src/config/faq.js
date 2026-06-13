// FAQ content — also serialized into FAQPage JSON-LD for AI Overviews / rich results.
export const faqs = [
  {
    q: 'What products does Geopacks manufacture?',
    a: 'Geopacks manufactures food-grade PET bottles (200 ml to 2 litre), PET jars, caps and closures, and PET preforms — with 27 preform specifications across water, juice/CSD, ROPP, and jar categories. We also offer custom bottle designs and printing services.',
  },
  {
    q: 'Where is Geopacks located?',
    a: 'Our manufacturing facility is on the Pollachi – Udumalpet Road, Poolankinar, Tamil Nadu, India. We supply PET packaging to brands across the region and beyond.',
  },
  {
    q: 'Are Geopacks PET bottles food-grade and safe?',
    a: 'Yes. We use 100% food-grade PET material suitable for packaged drinking water, juice, edible oil, dairy, and ghee. Our process focuses on filling compatibility, leakage control, material strength, and consistent quality across batches.',
  },
  {
    q: 'Do you make custom bottle shapes and sizes?',
    a: 'Yes. We design and develop custom bottle shapes and preforms tailored to your brand identity, filling line, and capacity requirements, from 200 ml up to 2 litre and custom jar formats.',
  },
  {
    q: 'What industries does Geopacks serve?',
    a: 'We serve packaged drinking water, juice and beverages, edible oil, dairy and ghee, and general food product brands — designing packaging suited to each industry’s storage, safety, and transport needs.',
  },
  {
    q: 'How do I request a quote or place an order?',
    a: 'Send your requirement through our contact form, email geopacks2015@gmail.com, or message us on WhatsApp at +91 9751546565. Share product type, capacity, quantity, and delivery location and we’ll respond with specs and pricing.',
  },
];

export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};
