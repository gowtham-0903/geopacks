import { Link } from 'react-router-dom';
import {
  Box,
  Package,
  Droplet,
  Layers,
  Settings,
  Printer,
  Truck,
  ArrowUpRight,
} from 'lucide-react';
import Seo from '../components/seo/Seo';
import PageHero from '../components/sections/PageHero';
import CTASection from '../components/sections/CTASection';
import SectionTitle from '../components/ui/SectionTitle';
import { Stagger, StaggerItem, Reveal } from '../components/ui/Motion';
import { breadcrumbSchema } from '../config/schema';

const serviceItems = [
  {
    icon: Box,
    title: 'PET Bottle Manufacturing',
    desc: 'High-quality PET bottles in multiple sizes and shapes for beverages, oils, and dairy products.',
  },
  {
    icon: Package,
    title: 'PET Preforms',
    desc: 'Precision-engineered preforms designed for strength, clarity, and optimal blowing performance.',
  },
  {
    icon: Droplet,
    title: 'PET Jars',
    desc: 'Wide-mouth jars ideal for food products such as pickles, powders, and pastes.',
  },
  {
    icon: Layers,
    title: 'Caps & Closures',
    desc: 'Durable and tamper-proof caps available in various sizes and colors.',
  },
  {
    icon: Settings,
    title: 'Custom Molding',
    desc: 'Custom bottle shapes developed and tailored to your brand and filling requirements.',
  },
  {
    icon: Printer,
    title: 'Printing Services',
    desc: 'Branding solutions including screen and offset printing for product identity.',
  },
  {
    icon: Truck,
    title: 'Logistics & Delivery',
    desc: 'Safe and timely delivery with proper packaging to ensure product integrity.',
  },
];

const workflow = [
  { step: '01', title: 'Requirement', desc: 'Share product type, capacity, and quantity.' },
  { step: '02', title: 'Design & Mold', desc: 'We engineer the preform and bottle for your line.' },
  { step: '03', title: 'Production', desc: 'Consistent, food-grade batches at scale.' },
  { step: '04', title: 'Delivery', desc: 'Securely packed and delivered on schedule.' },
];

const ServicesPage = () => (
  <>
    <Seo
      title="Our Services — Complete PET Packaging Solutions"
      description="Geopacks offers PET bottle manufacturing, preforms, jars, caps & closures, custom molding, printing, and logistics — complete food-grade PET packaging solutions under one roof."
      path="/services"
      schema={breadcrumbSchema([
        { name: 'Home', path: '/' },
        { name: 'Services', path: '/services' },
      ])}
    />

    <PageHero
      kicker="Our Services"
      breadcrumb="Services"
      title="Complete PET packaging solutions under one roof"
      subtitle="From preform to printed bottle — every step of your packaging handled by one trusted manufacturer."
    />

    <section className="section-shell bg-white">
      <div className="container-x">
        <Stagger className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {serviceItems.map((service, i) => (
            <StaggerItem key={service.title}>
              <div className="group flex h-full flex-col rounded-2xl border border-steel-100 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/30 hover:shadow-card">
                <div className="mb-5 flex items-center justify-between">
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-accent/10 text-accent-dark transition-colors duration-300 group-hover:bg-accent group-hover:text-white">
                    <service.icon size={22} />
                  </div>
                  <span className="font-display text-2xl font-extrabold text-steel-200">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <h3 className="mb-2 font-display text-xl font-bold text-ink-900">{service.title}</h3>
                <p className="flex-1 text-ink-800/65">{service.desc}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>

    {/* Workflow */}
    <section className="section-shell bg-steel-50">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <SectionTitle alignment="center" subtitle="How we work" title="From brief to bottle in four steps" />
        </div>
        <Stagger className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {workflow.map((w) => (
            <StaggerItem key={w.step}>
              <div className="relative h-full rounded-2xl border border-steel-100 bg-white p-7 shadow-sm">
                <span className="font-display text-4xl font-extrabold text-gradient">{w.step}</span>
                <h3 className="mt-3 font-display text-lg font-bold text-ink-900">{w.title}</h3>
                <p className="mt-2 text-sm text-ink-800/65">{w.desc}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
        <Reveal className="mt-10 text-center">
          <Link to="/contact" className="btn-primary">
            Start your project <ArrowUpRight className="h-5 w-5" />
          </Link>
        </Reveal>
      </div>
    </section>

    <CTASection />
  </>
);

export default ServicesPage;
