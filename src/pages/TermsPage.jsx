import Seo from '../components/seo/Seo';
import PageHero from '../components/sections/PageHero';
import { Reveal } from '../components/ui/Motion';
import { business } from '../config/site';
import { breadcrumbSchema } from '../config/schema';

const sections = [
  {
    h: 'Use of This Website',
    p: 'This website provides information about Geopacks and our PET packaging products and services. By using this site you agree to use it for lawful purposes and not to misuse the content or interfere with its operation.',
  },
  {
    h: 'Product Information',
    p: 'Product specifications, capacities, weights, and neck dimensions shown on this website are indicative and may be updated as our manufacturing range evolves. Final specifications for any order are confirmed in writing before production.',
  },
  {
    h: 'Quotes & Orders',
    p: 'Inquiries submitted through this website do not constitute a binding order. Pricing, lead times, and minimum order quantities are confirmed directly by our team based on your requirements.',
  },
  {
    h: 'Intellectual Property',
    p: `All content on this website, including text, graphics, logos, and images, is the property of ${business.name} unless otherwise stated, and may not be reproduced without permission.`,
  },
  {
    h: 'Limitation of Liability',
    p: 'Geopacks is not liable for any indirect or consequential loss arising from the use of this website or reliance on the information provided. Information is offered in good faith and to the best of our knowledge.',
  },
  {
    h: 'Contact Us',
    p: `For questions about these Terms, contact us at ${business.email} or ${business.phone}.`,
  },
];

const TermsPage = () => (
  <>
    <Seo
      title="Terms of Service"
      description="The terms governing the use of the Geopacks website and the information provided about our PET packaging products and services."
      path="/terms"
      schema={breadcrumbSchema([
        { name: 'Home', path: '/' },
        { name: 'Terms of Service', path: '/terms' },
      ])}
    />
    <PageHero kicker="Legal" breadcrumb="Terms of Service" title="Terms of Service" />
    <section className="section-shell bg-white">
      <div className="container-x mx-auto max-w-3xl">
        <Reveal>
          <p className="mb-10 text-ink-800/65">
            These Terms of Service govern your use of the {business.name} website. Please read them
            carefully.
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

export default TermsPage;
