import { Mail, MapPin, Phone, ArrowUpRight, Instagram, Facebook, Linkedin, MapPinned } from 'lucide-react';
import { Link } from 'react-router-dom';
import RouteLink from '../ui/RouteLink';
import { MeshGlow, GridPattern } from '../ui/Decor';
import logo from '../../assets/logo.png';
import { business, whatsappUrl } from '../../config/site';

const quickLinks = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Products', href: '/products' },
  { name: 'Contact Us', href: '/contact' },
];

const productLinks = [
  'PET Bottles',
  'PET Jars',
  'PET Preforms',
  'Caps & Closures',
  'Custom Designs',
];

const socials = [
  { key: 'googleBusiness', label: 'Google Business', Icon: MapPinned },
  { key: 'instagram', label: 'Instagram', Icon: Instagram },
  { key: 'facebook', label: 'Facebook', Icon: Facebook },
  { key: 'linkedin', label: 'LinkedIn', Icon: Linkedin },
];

const Footer = () => {
  const year = new Date().getFullYear();
  const activeSocials = socials.filter((s) => business.social[s.key]);

  return (
    <footer className="relative overflow-hidden bg-ink-900 text-steel-100">
      <MeshGlow className="opacity-60" />
      <GridPattern className="opacity-[0.04]" />

      {/* CTA strip */}
      <div className="container-x relative">
        <div className="-mt-px flex flex-col items-start justify-between gap-6 border-b border-white/10 py-12 md:flex-row md:items-center">
          <div>
            <h2 className="text-2xl font-bold text-white md:text-3xl">
              Ready to package your product right?
            </h2>
            <p className="mt-2 max-w-xl text-steel-300">
              Tell us your bottle, jar, or preform requirement — we&apos;ll get back with specs and
              pricing.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link to="/contact" className="btn-accent">
              Request a Quote <ArrowUpRight className="h-4 w-4" />
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
        </div>
      </div>

      <div className="container-x relative grid grid-cols-1 gap-10 py-14 md:grid-cols-2 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <img src={logo} alt="Geopacks logo" className="h-12 w-auto object-contain " />
          <p className="mt-5 max-w-sm leading-relaxed text-steel-300">
            {business.name} — manufacturing food-grade PET bottles, jars, caps, and preforms since{' '}
            {business.foundedYear}. Trusted by water, juice, edible oil, and dairy brands across India.
          </p>
          {activeSocials.length > 0 && (
            <div className="mt-6 flex gap-3">
              {activeSocials.map(({ key, label, Icon }) => (
                <a
                  key={key}
                  href={business.social[key]}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 text-steel-200 transition-colors hover:border-accent-bright/50 hover:bg-accent/15 hover:text-white"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          )}
        </div>

        <div className="lg:col-span-2">
          <h3 className="mb-5 text-sm font-bold uppercase tracking-wider text-white">Quick Links</h3>
          <ul className="space-y-3">
            {quickLinks.map((item) => (
              <li key={item.name}>
                <RouteLink
                  to={item.href}
                  className="group inline-flex items-center gap-2 text-steel-300 transition-colors hover:text-accent-bright"
                >
                  <span className="h-1 w-1 rounded-full bg-accent transition-all group-hover:w-3" />
                  {item.name}
                </RouteLink>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <h3 className="mb-5 text-sm font-bold uppercase tracking-wider text-white">Products</h3>
          <ul className="space-y-3">
            {productLinks.map((item) => (
              <li key={item}>
                <RouteLink
                  to="/products"
                  className="group inline-flex items-center gap-2 text-steel-300 transition-colors hover:text-accent-bright"
                >
                  <span className="h-1 w-1 rounded-full bg-accent transition-all group-hover:w-3" />
                  {item}
                </RouteLink>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <h3 className="mb-5 text-sm font-bold uppercase tracking-wider text-white">Contact</h3>
          <ul className="space-y-4 text-steel-300">
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 shrink-0 text-accent-bright" size={18} />
              <span>
                {business.address.line1}, {business.address.line2}, {business.address.city},{' '}
                {business.address.region}, {business.address.country}
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="shrink-0 text-accent-bright" size={18} />
              <a href={`tel:${business.phoneRaw}`} className="hover:text-white">
                {business.phone}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="shrink-0 text-accent-bright" size={18} />
              <a href={`mailto:${business.email}`} className="hover:text-white">
                {business.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="container-x relative flex flex-col items-center justify-between gap-4 border-t border-white/10 py-6 text-sm text-steel-400 md:flex-row">
        <p>
          © {business.foundedYear}–{year} {business.name}. All Rights Reserved.
        </p>
        <div className="flex gap-6">
          <RouteLink to="/privacy-policy" className="transition-colors hover:text-accent-bright">
            Privacy Policy
          </RouteLink>
          <RouteLink to="/terms" className="transition-colors hover:text-accent-bright">
            Terms of Service
          </RouteLink>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
