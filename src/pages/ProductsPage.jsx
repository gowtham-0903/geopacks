import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Milk, Container, FlaskConical } from 'lucide-react';
import Seo from '../components/seo/Seo';
import PageHero from '../components/sections/PageHero';
import CTASection from '../components/sections/CTASection';
import { Reveal } from '../components/ui/Motion';
import {
  bottleRows,
  roundJarRows,
  squareJarRows,
  waterPreforms,
  juiceAndCsdPreforms,
  roppPreforms,
  jarPreforms,
  counts,
} from '../config/products';
import { breadcrumbSchema, productCatalogSchema } from '../config/schema';

const categories = [
  { id: 'bottles', label: 'Bottles', Icon: Milk, count: counts.bottles },
  { id: 'jars', label: 'Jars', Icon: Container, count: counts.jars },
  { id: 'preforms', label: 'Preforms', Icon: FlaskConical, count: counts.preforms },
];

const SpecTable = ({ rows }) => (
  <div className="overflow-x-auto rounded-2xl border border-steel-100">
    <table className="w-full min-w-[680px] border-collapse text-left text-sm [font-variant-numeric:tabular-nums]">
      <thead>
        <tr className="bg-ink-800 text-white">
          <th className="px-5 py-4 font-semibold">S.No</th>
          <th className="px-5 py-4 font-semibold">Product Type</th>
          <th className="px-5 py-4 font-semibold">Capacity (ml)</th>
          <th className="px-5 py-4 font-semibold">Weight (g)</th>
          <th className="px-5 py-4 font-semibold">Neck (mm)</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row, i) => (
          <tr
            key={`${row.type}-${row.sn}`}
            className={`border-b border-steel-100 transition-colors last:border-none hover:bg-accent/5 ${
              i % 2 ? 'bg-steel-50/50' : 'bg-white'
            }`}
          >
            <td className="px-5 py-3.5 font-semibold text-accent-dark">
              {String(row.sn).padStart(2, '0')}
            </td>
            <td className="px-5 py-3.5 font-medium text-ink-900">{row.type}</td>
            <td className="px-5 py-3.5 text-ink-800/75">{row.capacity}</td>
            <td className="px-5 py-3.5 text-ink-800/75">{row.weight}</td>
            <td className="px-5 py-3.5 text-ink-800/75">{row.neck}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const PreformTable = ({ rows, title }) => (
  <div className="rounded-2xl border border-steel-100 bg-white p-6 shadow-sm md:p-8">
    <h3 className="mb-5 font-display text-xl font-bold text-ink-900">{title}</h3>
    <div className="overflow-x-auto rounded-xl border border-steel-100">
      <table className="w-full min-w-[520px] border-collapse text-left text-sm [font-variant-numeric:tabular-nums]">
        <thead>
          <tr className="bg-ink-800 text-white">
            <th className="px-5 py-4 font-semibold">Item No.</th>
            <th className="px-5 py-4 font-semibold">Preform Type</th>
            <th className="px-5 py-4 font-semibold">Neck Dia (mm)</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={`${row.itemNo}-${row.name}`}
              className={`border-b border-steel-100 transition-colors last:border-none hover:bg-accent/5 ${
                i % 2 ? 'bg-steel-50/50' : 'bg-white'
              }`}
            >
              <td className="px-5 py-3.5 font-semibold text-accent-dark">{row.itemNo}</td>
              <td className="px-5 py-3.5 font-medium text-ink-900">{row.name}</td>
              <td className="px-5 py-3.5 text-ink-800/75">{row.neckDia}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

const ProductsPage = () => {
  const [active, setActive] = useState('bottles');

  // Highlight the category in view as the user scrolls.
  useEffect(() => {
    const ids = categories.map((c) => c.id);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 110;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <>
      <Seo
        title="Available Products — PET Bottles, Jars & Preforms"
        description="Browse the full Geopacks catalog: 16 PET bottle variants, round & square jars, and 27 preform specifications across water, juice/CSD, ROPP, and jar categories with capacity, weight, and neck dimensions."
        path="/products"
        schema={[
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Products', path: '/products' },
          ]),
          productCatalogSchema,
        ]}
      />

      <PageHero
        kicker="Products"
        breadcrumb="Products"
        title="Available Products"
        subtitle="Our complete PET catalog — bottles, jars, and preforms with exact capacity, weight, and neck specifications for every application."
      />

      {/* Sticky category filter — smooth-scrolls; all sections stay in the DOM */}
      <div className="sticky top-[68px] z-30 border-b border-steel-100 bg-white/85 backdrop-blur-md md:top-[76px]">
        <div className="container-x flex flex-wrap justify-center gap-3 py-4">
          {categories.map(({ id, label, Icon, count }) => {
            const isActive = active === id;
            return (
              <button
                key={id}
                type="button"
                onClick={() => scrollTo(id)}
                aria-current={isActive ? 'true' : undefined}
                className={`inline-flex items-center gap-2.5 rounded-xl px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
                  isActive
                    ? 'bg-ink-800 text-white shadow-card'
                    : 'border border-steel-200 bg-white text-ink-800 hover:border-accent/40 hover:bg-steel-50'
                }`}
              >
                <Icon className={`h-5 w-5 ${isActive ? 'text-accent-bright' : 'text-accent'}`} />
                {label}
                <span
                  className={`rounded-full px-2 py-0.5 text-xs ${
                    isActive ? 'bg-white/15 text-white' : 'bg-steel-100 text-ink-800/70'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <section className="section-shell bg-white">
        <div className="container-x space-y-16">
          {/* Bottles */}
          <div id="bottles" className="scroll-mt-28">
            <Reveal>
              <div className="rounded-3xl border border-steel-100 bg-white p-6 shadow-card md:p-8">
                <h2 className="mb-5 font-display text-2xl font-bold text-ink-900">Bottles</h2>
                <SpecTable rows={bottleRows} />
              </div>
            </Reveal>
          </div>

          {/* Jars */}
          <div id="jars" className="scroll-mt-28 space-y-8">
            <Reveal>
              <div className="rounded-3xl border border-steel-100 bg-white p-6 shadow-card md:p-8">
                <h2 className="mb-5 font-display text-2xl font-bold text-ink-900">Round Jar</h2>
                <SpecTable rows={roundJarRows} />
              </div>
            </Reveal>
            <Reveal>
              <div className="rounded-3xl border border-steel-100 bg-white p-6 shadow-card md:p-8">
                <h2 className="mb-5 font-display text-2xl font-bold text-ink-900">Square Jar</h2>
                <SpecTable rows={squareJarRows} />
              </div>
            </Reveal>
          </div>

          {/* Preforms */}
          <div id="preforms" className="scroll-mt-28 space-y-8">
            <Reveal>
              <h2 className="font-display text-2xl font-bold text-ink-900">Preforms</h2>
            </Reveal>
            <Reveal>
              <PreformTable rows={waterPreforms} title="Water Preforms" />
            </Reveal>
            <Reveal>
              <PreformTable rows={juiceAndCsdPreforms} title="Juice and CSD Preforms" />
            </Reveal>
            <Reveal>
              <PreformTable rows={roppPreforms} title="ROPP Preforms" />
            </Reveal>
            <Reveal>
              <PreformTable rows={jarPreforms} title="Jar Preforms" />
            </Reveal>
          </div>

          <Reveal className="flex flex-wrap items-center gap-4">
            <Link to="/contact" className="btn-primary">
              Request these products <ArrowUpRight className="h-5 w-5" />
            </Link>
            <p className="text-sm text-ink-800/60">
              Need a custom size or weight? We design to your filling line.
            </p>
          </Reveal>
        </div>
      </section>

      <CTASection
        title="Need a specific bottle or preform?"
        subtitle="Share your capacity, weight, and quantity — we'll confirm specs and pricing fast."
      />
    </>
  );
};

export default ProductsPage;
