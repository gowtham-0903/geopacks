import { MapPin, Phone, Mail, Clock, ArrowUpRight, MessageCircle } from 'lucide-react';
import Seo from '../components/seo/Seo';
import PageHero from '../components/sections/PageHero';
import InquiryForm from '../components/forms/InquiryForm';
import { Reveal, Stagger, StaggerItem } from '../components/ui/Motion';
import { business, whatsappUrl } from '../config/site';
import { breadcrumbSchema } from '../config/schema';

const contactCards = [
  {
    icon: MapPin,
    title: 'Address',
    lines: [
      business.name.toUpperCase(),
      `${business.address.line1},`,
      `${business.address.line2}, ${business.address.region}, ${business.address.country}`,
    ],
  },
  { icon: Phone, title: 'Phone', lines: [business.phone], href: `tel:${business.phoneRaw}` },
  { icon: Mail, title: 'Email', lines: [business.email], href: `mailto:${business.email}` },
  { icon: Clock, title: 'Working Hours', lines: [business.hours] },
];

const ContactPage = () => (
  <>
    <Seo
      title="Contact Geopacks — Request a PET Packaging Quote"
      description="Contact Geopacks for food-grade PET bottles, jars, caps, and preforms. Call +91 9751546565, email geopacks2015@gmail.com, or send an inquiry. Located in Poolankinar, Pollachi, Tamil Nadu."
      path="/contact"
      schema={breadcrumbSchema([
        { name: 'Home', path: '/' },
        { name: 'Contact', path: '/contact' },
      ])}
    />

    <PageHero
      kicker="Contact Us"
      breadcrumb="Contact"
      title="Let us build your packaging solution"
      subtitle="Tell us your requirement — product type, capacity, and quantity — and we'll respond with specifications and pricing."
    />

    <section className="section-shell bg-white">
      <div className="container-x grid grid-cols-1 gap-10 lg:grid-cols-2">
        {/* Info */}
        <div>
          <Stagger className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {contactCards.map((card) => {
              const Inner = (
                <>
                  <div className="mb-4 grid h-11 w-11 place-items-center rounded-xl bg-accent/10 text-accent-dark">
                    <card.icon size={20} />
                  </div>
                  <h3 className="mb-1.5 font-display text-lg font-bold text-ink-900">{card.title}</h3>
                  {card.lines.map((line) => (
                    <p key={line} className="text-sm text-ink-800/70">
                      {line}
                    </p>
                  ))}
                </>
              );
              return (
                <StaggerItem key={card.title}>
                  {card.href ? (
                    <a
                      href={card.href}
                      className="block h-full rounded-2xl border border-steel-100 bg-steel-50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-card"
                    >
                      {Inner}
                    </a>
                  ) : (
                    <div className="h-full rounded-2xl border border-steel-100 bg-steel-50 p-6">
                      {Inner}
                    </div>
                  )}
                </StaggerItem>
              );
            })}
          </Stagger>

          <Reveal delay={0.1} className="mt-6 overflow-hidden rounded-2xl border border-steel-100">
            <iframe
              src={business.mapsEmbedUrl}
              width="100%"
              height="260"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Geopacks office location on Google Maps"
            />
          </Reveal>

          <Reveal delay={0.15} className="mt-6 flex flex-wrap gap-3">
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp Us
            </a>
            <a
              href={business.mapsShareUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
            >
              Open in Maps <ArrowUpRight className="h-4 w-4" />
            </a>
          </Reveal>
        </div>

        {/* Form */}
        <Reveal delay={0.1}>
          <div className="rounded-3xl border border-steel-100 bg-steel-50 p-7 shadow-card md:p-9">
            <h2 className="mb-1.5 font-display text-2xl font-bold text-ink-900">Send Inquiry</h2>
            <p className="mb-6 text-sm text-ink-800/60">
              Your message goes straight to {business.email}.
            </p>
            <InquiryForm submitLabel="Send Inquiry" />
          </div>
        </Reveal>
      </div>
    </section>
  </>
);

export default ContactPage;
