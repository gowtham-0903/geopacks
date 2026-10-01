import { Link } from 'react-router-dom';
import { ArrowUpRight, Phone, Mail, MapPin } from 'lucide-react';
import { FloatingShapes, GridPattern } from '../ui/Decor';
import { Reveal } from '../ui/Motion';
import { business, whatsappUrl } from '../../config/site';

const CTASection = ({
  title = 'Request a Quote from Geopacks Today',
  subtitle = 'If you are looking for a PET bottle supplier or PET jar supplier for your business, contact Geopacks to discuss your requirements.',
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
        <div className="mt-6 flex flex-wrap justify-center gap-6 text-sm text-steel-300">
          <a href={`tel:${business.phoneRaw}`} className="flex items-center gap-2 hover:text-white">
            <Phone className="h-4 w-4 text-accent-bright" /> {business.phone}
          </a>
          <a href={`mailto:${business.email}`} className="flex items-center gap-2 hover:text-white">
            <Mail className="h-4 w-4 text-accent-bright" /> {business.email}
          </a>
          <span className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-accent-bright" /> {business.address.city},{' '}
            {business.address.region}
          </span>
        </div>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link to="/contact" className="btn-accent">
            Request a Quote <ArrowUpRight className="h-5 w-5" />
          </Link>
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 px-6 py-3 font-semibold text-white transition-colors hover:bg-white/10"
          >
            WhatsApp Us
          </a>
        </div>
      </Reveal>
    </div>
  </section>
);

export default CTASection;
