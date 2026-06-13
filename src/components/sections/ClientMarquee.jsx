import { clients } from '../../config/clients';

// Duplicated once for a seamless -50% loop.
const loop = [...clients, ...clients];

const ClientMarquee = () => (
  <div className="marquee-mask relative overflow-hidden">
    <div className="animate-marquee flex w-max gap-4 pause-on-hover">
      {loop.map((client, i) => (
        <div
          key={`${client.name}-${i}`}
          className="flex h-28 w-56 shrink-0 items-center justify-center rounded-2xl border border-steel-100 bg-white p-6 shadow-sm transition-all duration-300 hover:border-accent/30 hover:shadow-card"
        >
          <img
            src={client.src}
            alt={`${client.name} — Geopacks client`}
            loading="lazy"
            className="max-h-full max-w-full object-contain opacity-80 transition-opacity duration-300 hover:opacity-100"
          />
        </div>
      ))}
    </div>
  </div>
);

export default ClientMarquee;
