import { Link } from 'react-router-dom';
import {
  ArrowUpRight,
  Factory,
  Target,
  Eye,
  CheckCircle2,
  Award,
  MapPin,
} from 'lucide-react';
import Seo from '../components/seo/Seo';
import PageHero from '../components/sections/PageHero';
import CTASection from '../components/sections/CTASection';
import SectionTitle from '../components/ui/SectionTitle';
import { Reveal, Stagger, StaggerItem } from '../components/ui/Motion';
import { videos } from '../config/media';
import aboutImage from '../assets/about-main.jpg';
import { business, organizationSchema } from '../config/site';
import { breadcrumbSchema } from '../config/schema';

const whyPoints = [
  '10+ years of proven manufacturing experience',
  'Consistent production quality across batches',
  'Industry-specific packaging solutions',
  'Custom design capability',
  'Reliable delivery timelines',
];

const timeline = [
  { year: '2014', title: 'Founded', desc: 'Geopacks begins manufacturing PET bottles and preforms.' },
  { year: '2017', title: 'Range expansion', desc: 'Added water, juice, oil, and dairy bottle lines.' },
  { year: '2020', title: 'Preform scale-up', desc: 'Grew to 27 preform specifications across categories.' },
  { year: 'Today', title: 'Trusted partner', desc: 'Supplying consistent, food-grade packaging to leading brands.' },
];

const pillars = [
  {
    icon: Factory,
    title: 'Who We Are',
    desc: 'A specialized PET packaging manufacturer delivering reliable, food-grade solutions at scale with precision molding and dependable supply.',
  },
  {
    icon: Target,
    title: 'Mission',
    desc: 'To manufacture high quality, food safe PET bottles and preforms while continuously improving sustainability, efficiency, and product design.',
  },
  {
    icon: Eye,
    title: 'Vision',
    desc: 'To be the most dependable PET packaging partner for growing food and beverage brands across India.',
  },
];

const AboutPage = () => (
  <>
    <Seo
      title="About Geopacks — A Decade of Trusted PET Packaging"
      description="Since 2014, Geopacks has manufactured high-quality, food-grade PET bottles and preforms for water, edible oil, juice, and dairy brands. Learn about our mission, process, and quality commitment."
      path="/about"
      schema={[
        breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'About', path: '/about' },
        ]),
        organizationSchema,
      ]}
    />

    <PageHero
      kicker="About Geopacks"
      breadcrumb="About"
      title="A decade of trusted PET packaging manufacturing"
      subtitle="Since 2014, manufacturing high-quality PET bottles and preforms for packaged water, edible oil, juice, and dairy — focused on consistency, safety, and performance."
    />

    {/* Intro + image */}
    <section className="section-shell bg-white">
      <div className="container-x grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <Reveal className="relative">
          <div className="overflow-hidden rounded-3xl border border-steel-100 shadow-card">
            <img
              src={aboutImage}
              alt="Geopacks PET manufacturing facility"
              width="640"
              height="480"
              loading="lazy"
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
          <div className="absolute -right-5 -top-5 -z-10 h-32 w-32 rounded-2xl bg-accent/15 blur-2xl" />
        </Reveal>
        <Reveal delay={0.12}>
          <SectionTitle subtitle="Our Story" title="Real manufacturing experience, by design" />
          <p className="mb-4 leading-relaxed text-ink-800/70">
            With over a decade of hands-on production experience, we understand real manufacturing
            challenges  filling compatibility, leakage control, material strength, and cost
            efficiency  and design our products to solve them.
          </p>
          <p className="leading-relaxed text-ink-800/70">
            Our facility is built to ensure precision molding, uniform quality, and dependable
            supply for growing brands.
          </p>
        </Reveal>
      </div>
    </section>

    {/* Pillars */}
    <section className="section-shell bg-steel-50">
      <div className="container-x">
        <Stagger className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {pillars.map((p) => (
            <StaggerItem key={p.title}>
              <div className="h-full rounded-2xl border border-steel-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card">
                <div className="mb-5 grid h-12 w-12 place-items-center rounded-xl bg-accent/10 text-accent-dark">
                  <p.icon size={22} />
                </div>
                <h3 className="mb-3 font-display text-xl font-bold text-ink-900">{p.title}</h3>
                <p className="text-ink-800/65">{p.desc}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>

    {/* Timeline */}
    <section className="section-shell bg-white">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <SectionTitle alignment="center" subtitle="Our Journey" title="A decade of steady growth" />
        </div>
        <div className="relative">
          <div className="absolute left-0 right-0 top-6 hidden h-px bg-steel-200 lg:block" />
          <Stagger className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {timeline.map((t) => (
              <StaggerItem key={t.year} className="relative">
                <div className="mb-5 grid h-12 w-12 place-items-center rounded-full border-2 border-accent bg-white font-display text-sm font-bold text-accent-dark shadow-sm">
                  {t.year === 'Today' ? '★' : t.year.slice(2)}
                </div>
                <p className="font-display text-lg font-bold text-ink-900">
                  {t.year} · {t.title}
                </p>
                <p className="mt-2 text-sm text-ink-800/65">{t.desc}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>

    {/* Why choose + certifications */}
    <section className="section-shell bg-steel-50">
      <div className="container-x grid grid-cols-1 gap-12 lg:grid-cols-2">
        <Reveal>
          <SectionTitle subtitle="Why Choose Us" title="Reasons brands rely on Geopacks" />
          <Stagger className="space-y-3">
            {whyPoints.map((point) => (
              <StaggerItem key={point} className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                <p className="text-ink-800/75">{point}</p>
              </StaggerItem>
            ))}
          </Stagger>
          <Link to="/contact" className="btn-primary mt-8">
            Contact Us <ArrowUpRight className="h-5 w-5" />
          </Link>
        </Reveal>

        {/* Certifications slot — ready to fill */}
        <Reveal delay={0.1}>
          <div className="h-full rounded-3xl border border-dashed border-steel-300 bg-white/60 p-8">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent-dark">
              <Award className="h-4 w-4" /> Quality & Compliance
            </div>
            <h3 className="font-display text-xl font-bold text-ink-900">
              Food-grade manufacturing standards
            </h3>
            <p className="mt-3 text-ink-800/65">
              We manufacture using 100% food-grade PET suitable for water, juice, oil, and dairy.
              Certification badges (ISO, FSSAI, BIS) can be displayed here once added.
            </p>
            <div className="mt-6 grid grid-cols-3 gap-3">
              {['ISO', 'FSSAI', 'BIS'].map((c) => (
                <div
                  key={c}
                  className="grid h-16 place-items-center rounded-xl border border-steel-200 bg-steel-50 text-sm font-semibold text-ink-800/50"
                >
                  {c}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>

    {/* Process video + map */}
    <section className="section-shell bg-white">
      <div className="container-x grid grid-cols-1 items-stretch gap-8 lg:grid-cols-2">
        <Reveal className="overflow-hidden rounded-3xl border border-steel-100 shadow-card">
          <video
            src={videos.process}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-label="Geopacks PET bottle production process"
            className="aspect-video h-full w-full object-cover"
          />
        </Reveal>
        <Reveal delay={0.1} className="flex flex-col rounded-3xl border border-steel-100 bg-steel-50 p-8">
          <h3 className="font-display text-2xl font-bold text-ink-900">Visit our facility</h3>
          <p className="mt-3 text-ink-800/65">
            Find us on the Pollachi – Udumalpet Road, Poolankinar, Tamil Nadu. Open our location
            directly in Google Maps for quick navigation.
          </p>
          <div className="mt-6 flex-1 overflow-hidden rounded-2xl border border-steel-100">
            <iframe
              src={business.mapsEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '240px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Geopacks office location on Google Maps"
            />
          </div>
          <a
            href={business.mapsShareUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 font-semibold text-accent-dark hover:underline"
          >
            <MapPin className="h-4 w-4" /> Open in Google Maps <ArrowUpRight className="h-4 w-4" />
          </a>
        </Reveal>
      </div>
    </section>

    <CTASection />
  </>
);

export default AboutPage;
