import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { FloatingShapes, GridPattern } from '../ui/Decor';
import { Reveal } from '../ui/Motion';
import { business, whatsappUrl } from '../../config/site';

const CTASection = ({
  title = 'Looking for reliable PET packaging?',
  subtitle = 'Get food-grade PET bottles and preforms manufactured with precision and delivered on time.',
}) => (
  <section className="section-shell relative overflow-hidden bg-ink-900 text-white">
    <div className="absolute inset-0 bg-mesh-ink" />
    <GridPattern className="opacity-[0.05]" />
    <FloatingShapes />
    <div className="container-x relative text-center">
      <Reveal className="mx-auto max-w-3xl">
        <h2 className="font-display text-3xl font-extrabold text-white md:text-4xl lg:text-5xl">
          {title}
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg text-steel-200">{subtitle}</p>
        <div className="mt-9 flex flex-wrap justify-center gap-4">
          <Link to="/contact" className="btn-accent">
            Contact Us <ArrowUpRight className="h-5 w-5" />
          </Link>
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 px-6 py-3 font-semibold text-white transition-colors hover:bg-white/10"
          >
            WhatsApp {business.phone}
          </a>
        </div>
      </Reveal>
    </div>
  </section>
);

export default CTASection;
