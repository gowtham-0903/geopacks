import Seo from '../components/seo/Seo';
import PageHero from '../components/sections/PageHero';
import { Reveal } from '../components/ui/Motion';
import { business } from '../config/site';
import { breadcrumbSchema } from '../config/schema';

const sections = [
  {
    h: 'Information We Collect',
    p: 'When you submit an inquiry through our contact form, WhatsApp, email, or phone, we collect the details you provide — such as your name, company name, phone number, email address, product requirements, quantity, and delivery location. We use this information solely to respond to your inquiry and process your packaging requirements.',
  },
  {
    h: 'How We Use Your Information',
    p: 'Your information is used to respond to quote requests, discuss specifications, fulfil orders, and communicate about your packaging needs. We do not sell, rent, or trade your personal information to third parties.',
  },
  {
    h: 'Form Submissions',
    p: 'Inquiry form submissions are delivered to our business email using a secure form-handling service. Submitted data is used only to contact you regarding your request.',
  },
  {
    h: 'Cookies & Analytics',
    p: 'Our website may use basic analytics to understand how visitors use the site and to improve our content. These tools may set cookies in your browser. You can disable cookies in your browser settings at any time.',
  },
  {
    h: 'Data Security',
    p: 'We take reasonable measures to protect the information you share with us. However, no method of transmission over the internet is completely secure, and we cannot guarantee absolute security.',
  },
  {
    h: 'Contact Us',
    p: `If you have questions about this Privacy Policy or how your data is handled, contact us at ${business.email} or ${business.phone}.`,
  },
];

const PrivacyPage = () => (
  <>
    <Seo
      title="Privacy Policy"
      description="How Geopacks collects, uses, and protects the information you share through our website inquiry forms and contact channels."
      path="/privacy-policy"
      schema={breadcrumbSchema([
        { name: 'Home', path: '/' },
        { name: 'Privacy Policy', path: '/privacy-policy' },
      ])}
    />
    <PageHero kicker="Legal" breadcrumb="Privacy Policy" title="Privacy Policy" />
    <section className="section-shell bg-white">
      <div className="container-x mx-auto max-w-3xl">
        <Reveal>
          <p className="mb-10 text-ink-800/65">
            This Privacy Policy explains how {business.name} handles the information you provide when
            you contact us or use our website.
          </p>
        </Reveal>
        <div className="space-y-9">
          {sections.map((s) => (
            <Reveal key={s.h} y={18}>
              <h2 className="mb-2 font-display text-xl font-bold text-ink-900">{s.h}</h2>
              <p className="leading-relaxed text-ink-800/70">{s.p}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default PrivacyPage;
