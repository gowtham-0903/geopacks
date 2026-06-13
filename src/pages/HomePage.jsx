import { Link } from 'react-router-dom';
import {
  ArrowUpRight,
  CheckCircle2,
  Milk,
  Container,
  Disc3,
  FlaskConical,
  Sparkles,
  Printer,
  MapPin,
  Phone,
  Mail,
} from 'lucide-react';
import Seo from '../components/seo/Seo';
import Hero from '../components/sections/Hero';
import ClientMarquee from '../components/sections/ClientMarquee';
import FAQ from '../components/sections/FAQ';
import CTASection from '../components/sections/CTASection';
import SectionTitle from '../components/ui/SectionTitle';
import { Reveal, Stagger, StaggerItem, Counter } from '../components/ui/Motion';
import { AccentBar } from '../components/ui/Decor';
import aboutPreviewBottle from '../assets/about-preview-bottle.jpg';
import { productCards, counts } from '../config/products';
import { business, industries, organizationSchema, localBusinessSchema } from '../config/site';
import { faqSchema } from '../config/faq';

const iconMap = {
  bottle: Milk,
  jar: Container,
  cap: Disc3,
  preform: FlaskConical,
  custom: Sparkles,
  print: Printer,
};

const trustPoints = [
  'Over 10 years of manufacturing experience',
  'Consistent production quality across batches',
  '100% food-grade PET materials',
  'Industry-specific packaging solutions',
  'Custom design and molding capability',
  'Reliable supply and on-time delivery',
];

const stats = [
  { value: 11, suffix: '+', label: 'Years of expertise' },
  { value: counts.bottles, suffix: '+', label: 'Bottle variants' },
  { value: counts.preforms, suffix: '+', label: 'Preform specifications' },
  { value: industries.length, suffix: '', label: 'Industries served' },
];

const HomePage = () => (
  <>
    <Seo
      title="PET Bottles, Jars, Caps & Preforms Manufacturer"
      description="Geopacks manufactures food-grade PET bottles, jars, caps, and preforms for water, juice, edible oil, and dairy brands. Trusted PET packaging manufacturer in Tamil Nadu since 2014."
      path="/"
      schema={[organizationSchema, localBusinessSchema, faqSchema]}
    />

    <Hero />

    {/* About preview */}
    <section className="section-shell bg-steel-50">
      <div className="container-x grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <Reveal>
          <SectionTitle subtitle="About Geopacks" title="Trusted PET packaging expertise since 2014" />
          <p className="mb-4 leading-relaxed text-ink-800/70">
            Since 2014, Geopacks has been a trusted manufacturer of PET bottles and preforms, serving
            packaged drinking water, edible oil, juice, and dairy industries. With years of hands-on
            experience, we focus on consistent quality, food safety, and production reliability.
          </p>
          <p className="mb-8 leading-relaxed text-ink-800/70">
            We design packaging to meet real-world requirements — filling compatibility, leakage
            prevention, durability, and cost efficiency.
          </p>
          <Link to="/about" className="btn-primary">
            Learn More <ArrowUpRight className="h-5 w-5" />
          </Link>
        </Reveal>
        <Reveal delay={0.12} className="relative">
          <div className="overflow-hidden rounded-3xl border border-steel-100 shadow-card">
            <img
              src={aboutPreviewBottle}
              alt="Transparent Geopacks PET water bottle"
              width="640"
              height="420"
              loading="lazy"
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 hidden rounded-2xl border border-steel-100 bg-white px-6 py-4 shadow-lift sm:block">
            <p className="font-display text-2xl font-bold text-ink-900">Food-grade</p>
            <p className="text-sm text-ink-800/60">100% PET material</p>
          </div>
        </Reveal>
      </div>
    </section>

    {/* Products overview */}
    <section className="section-shell bg-white">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <SectionTitle
            alignment="center"
            subtitle="Comprehensive PET packaging solutions"
            title="Our Products"
          />
        </div>
        <Stagger className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {productCards.map((item) => {
            const Icon = iconMap[item.icon] || Container;
            return (
              <StaggerItem key={item.title}>
                <Link
                  to="/products"
                  className="group flex h-full flex-col rounded-2xl border border-steel-100 bg-steel-50/60 p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/30 hover:bg-white hover:shadow-card"
                >
                  <div className="mb-5 grid h-12 w-12 place-items-center rounded-xl bg-accent/10 text-accent-dark transition-colors duration-300 group-hover:bg-accent group-hover:text-white">
                    <Icon size={22} />
                  </div>
                  <h3 className="mb-2 font-display text-xl font-bold text-ink-900">{item.title}</h3>
                  <p className="flex-1 text-ink-800/65">{item.desc}</p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent-dark opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    View specifications <ArrowUpRight className="h-4 w-4" />
                  </span>
                </Link>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>

    {/* Why choose — dark band */}
    <section className="section-shell relative overflow-hidden bg-ink-800 text-white">
      <div className="absolute inset-0 bg-mesh-ink opacity-70" />
      <div className="container-x relative grid grid-cols-1 gap-12 lg:grid-cols-2">
        <div>
          <SectionTitle
            dark
            subtitle="Why Choose Geopacks"
            title="Built on consistency, quality, and delivery trust"
            subtitleClassName="text-accent-bright"
          />
          <p className="max-w-md text-steel-200">
            Brands choose Geopacks because every batch ships to the same standard — the bottles fit
            your line, seal cleanly, and arrive on schedule.
          </p>
        </div>
        <Stagger className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {trustPoints.map((point) => (
            <StaggerItem
              key={point}
              className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur-sm"
            >
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent-bright" />
              <p className="text-steel-100">{point}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>

    {/* Stats counters */}
    <section className="border-y border-steel-100 bg-steel-50 py-14">
      <div className="container-x grid grid-cols-2 gap-8 lg:grid-cols-4">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.08} className="text-center">
            <Counter
              to={s.value}
              suffix={s.suffix}
              className="font-display text-4xl font-extrabold text-ink-900 md:text-5xl"
            />
            <p className="mt-2 text-sm font-medium text-ink-800/60">{s.label}</p>
          </Reveal>
        ))}
      </div>
    </section>

    {/* Industries */}
    <section className="section-shell bg-white">
      <div className="container-x">
        <SectionTitle alignment="center" subtitle="Sectors we supply" title="Industries We Serve" />
        <Stagger className="mb-6 flex flex-wrap justify-center gap-3" gap={0.06}>
          {industries.map((industry) => (
            <StaggerItem
              key={industry}
              className="rounded-full border border-steel-200 bg-steel-50 px-5 py-2.5 text-sm font-semibold text-ink-800 transition-colors hover:border-accent/40 hover:text-accent-dark"
            >
              {industry}
            </StaggerItem>
          ))}
        </Stagger>
        <Reveal delay={0.15}>
          <p className="mx-auto max-w-2xl text-center text-ink-800/65">
            We design packaging specifically suited for each industry&apos;s storage, safety, and
            transportation needs.
          </p>
        </Reveal>
      </div>
    </section>

    {/* Clients */}
    <section className="section-shell bg-steel-50">
      <div className="container-x mb-10">
        <SectionTitle alignment="center" subtitle="In good company" title="Trusted by Leading Brands" />
      </div>
      <ClientMarquee />
    </section>

    <FAQ />

    {/* Contact preview */}
    <section className="section-shell bg-white">
      <div className="container-x">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl border border-steel-100 bg-steel-50 shadow-card">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 md:p-12">
              <AccentBar className="mb-5" />
              <h2 className="font-display text-2xl font-bold text-ink-900 md:text-3xl">
                We&apos;re ready to support your packaging needs
              </h2>
              <div className="mt-8 space-y-5">
                <a
                  href={business.mapsShareUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-ink-800/75 hover:text-accent-dark"
                >
                  <MapPin className="mt-1 h-5 w-5 shrink-0 text-accent" />
                  {business.address.city}, {business.address.line1}, {business.address.line2},{' '}
                  {business.address.region}
                </a>
                <a
                  href={`tel:${business.phoneRaw}`}
                  className="flex items-center gap-3 text-ink-800/75 hover:text-accent-dark"
                >
                  <Phone className="h-5 w-5 shrink-0 text-accent" />
                  {business.phone}
                </a>
                <a
                  href={`mailto:${business.email}`}
                  className="flex items-center gap-3 text-ink-800/75 hover:text-accent-dark"
                >
                  <Mail className="h-5 w-5 shrink-0 text-accent" />
                  {business.email}
                </a>
              </div>
              <Link to="/contact" className="btn-primary mt-9">
                Contact Us <ArrowUpRight className="h-5 w-5" />
              </Link>
            </div>
            <div className="min-h-[320px] bg-steel-100">
              <iframe
                src={business.mapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '320px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Geopacks office location on Google Maps"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <CTASection />
  </>
);

export default HomePage;
