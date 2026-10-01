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
  'Manufacturing experience since 2014',
  'Food-grade PET resin for all products',
  'PET bottles and jars under one supplier',
  '27 preform specifications available',
  'Custom PET bottle and jar capability',
  'Reliable supply for regular production schedules',
];

const industryDetails = [
  {
    name: 'Packaged Drinking Water',
    desc: 'Geopacks supplies PET bottles in standard sizes including 200 ml, 500 ml, 1 litre and 2 litre formats for packaged drinking water applications.',
  },
  {
    name: 'Juice & Beverages',
    desc: 'Geopacks supplies PET packaging for juice and beverage applications, including bottles suitable for different beverage requirements.',
  },
  {
    name: 'Edible Oil',
    desc: 'Our edible oil PET bottle range is designed for edible oil packaging requirements. Geopacks supplies PET bottles for businesses looking for suitable packaging solutions for their edible oil products.',
  },
  {
    name: 'Dairy & Ghee',
    desc: 'PET jars are an important part of our packaging range for the dairy and ghee segment. Geopacks supplies wide-mouth PET jars for ghee, dairy products and related applications.',
  },
  {
    name: 'Food Products',
    desc: 'Our PET bottles and jars are also used for food-related applications including pickles, sauces, powders and other packaged food products.',
  },
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
      title="PET Bottle & Jar Manufacturer in Tamil Nadu | Geopacks"
      description="Geopacks is a PET bottle and jar manufacturer in Tamil Nadu, supplying food-grade PET bottles, jars, caps and preforms for water, beverages, edible oil, dairy and food brands across India."
      path="/"
      schema={[organizationSchema, localBusinessSchema, faqSchema]}
    />

    <Hero />

    {/* About preview */}
    <section className="section-shell bg-steel-50">
      <div className="container-x">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <SectionTitle subtitle="About Geopacks" title="PET Bottle & Jar Manufacturer in Tamil Nadu" />
            <p className="mb-4 leading-relaxed text-ink-800/70">
              Geopacks is a PET bottle manufacturer based in Pollachi, Tamil Nadu, supplying PET
              bottles, PET jars, caps, closures and preforms for businesses across the water, beverage,
              edible oil, dairy and food industries. Since 2014, we have focused on consistent
              manufacturing, dependable supply and packaging solutions suited to different product
              requirements.
            </p>
            <p className="leading-relaxed text-ink-800/70">
              Alongside our bottle range, Geopacks is also an experienced PET jar manufacturer,
              supplying PET jars for dairy products, ghee, pickles, powders and other food applications.
              Our product range allows businesses to source bottles, jars, preforms and closures from
              one manufacturing partner.
            </p>
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
        <Reveal delay={0.1}>
          <div className="mt-16 grid grid-cols-1 gap-5 md:grid-cols-2">
            <p className="leading-relaxed text-ink-800/70">
              Whether you require standard PET bottles and jars or are developing packaging for a
              specific product, Geopacks supports businesses with a practical range of packaging
              solutions. From water bottles and beverage containers to wide-mouth PET jars, we work
              with different applications and specifications based on customer requirements.
            </p>
            <p className="leading-relaxed text-ink-800/70">
              As a PET packaging manufacturer, we manage key stages of production and quality checking
              in-house. This helps us maintain consistency across orders and provide dependable supply
              for businesses that require regular packaging requirements.
            </p>
          </div>
          <div className="mt-10 flex justify-center">
            <Link to="/about" className="btn-primary">
              Learn More <ArrowUpRight className="h-5 w-5" />
            </Link>
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
            subtitle="PET packaging solutions across bottles, jars, preforms, closures and custom requirements"
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
            title="Manufacturing experience, broad product range, dependable supply"
            subtitleClassName="text-accent-bright"
          />
          <p className="max-w-md text-steel-200">
            Choosing the right PET packaging manufacturer is an important decision for businesses
            that depend on consistent packaging supply. Geopacks combines manufacturing experience
            with a broad product range covering both PET bottles and jars.
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
        <Reveal>
          <p className="mx-auto mb-10 max-w-2xl text-center text-ink-800/65">
            Geopacks supplies PET bottles and jars to businesses across several industries, with
            packaging requirements varying according to the product and application.
          </p>
        </Reveal>
        <Stagger className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {industryDetails.map((ind) => (
            <StaggerItem
              key={ind.name}
              className="rounded-2xl border border-steel-100 bg-steel-50 p-6"
            >
              <h3 className="mb-2 font-display text-base font-bold text-ink-900">{ind.name}</h3>
              <p className="text-sm leading-relaxed text-ink-800/65">{ind.desc}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>

    {/* Clients */}
    <section className="section-shell bg-steel-50">
      <div className="container-x mb-10">
        <SectionTitle alignment="center" subtitle="In good company" title="Trusted by Leading Brands" />
        <Reveal>
          <p className="mx-auto mb-6 max-w-2xl text-center text-ink-800/65">
            Bisleri, Apex, Sakthi, UUTRU and Presso are among the brands associated with Geopacks.
            Our focus remains on consistent product quality, dependable supply and responsive service
            across PET bottle, PET jar, preform and packaging requirements.
          </p>
        </Reveal>
      </div>
      <ClientMarquee />
    </section>

    <FAQ />

    <CTASection />

    {/* Contact preview */}
    <section className="section-shell bg-white">
      <div className="container-x">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl border border-steel-100 bg-steel-50 shadow-card">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 md:p-12">
              <AccentBar className="mb-5" />
              <h2 className="font-display text-2xl font-bold text-ink-900 md:text-3xl">
                PET Bottles &amp; Jars for Your Packaging Requirements
              </h2>
              <p className="mt-3 text-ink-800/70">
                Whether you are looking for a PET bottle manufacturer, PET jar manufacturer, PET
                preform supplier or a packaging partner for custom requirements, Geopacks offers a
                range of PET packaging solutions from its manufacturing facility in Pollachi, Tamil
                Nadu.
              </p>
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

  </>
);

export default HomePage;
