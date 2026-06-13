import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, Phone, ShieldCheck, Factory, Recycle, BadgeCheck } from 'lucide-react';
import { videos } from '../../config/media';
import { business } from '../../config/site';
import { counts } from '../../config/products';
import { FloatingShapes, GridPattern } from '../ui/Decor';

const EASE = [0.22, 1, 0.36, 1];

const trustStrip = [
  { icon: Factory, label: `Manufacturing since ${business.foundedYear}` },
  { icon: ShieldCheck, label: '100% food-grade PET' },
  { icon: BadgeCheck, label: 'Custom bottles & preforms' },
  { icon: Recycle, label: 'Beverage, oil & dairy brands' },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

const Hero = () => {
  const reduce = useReducedMotion();

  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden bg-ink-900 pb-16 pt-32 text-white md:pt-36">
      {/* Layered background */}
      <div className="absolute inset-0 bg-gradient-to-br from-ink-900 via-ink-800 to-ink-950" />
      <div className="absolute inset-0 bg-mesh-ink" />
      <GridPattern className="opacity-[0.05]" />
      <FloatingShapes />
      <div className="absolute right-0 top-0 h-full w-1/2 -skew-x-12 translate-x-24 rounded-l-[120px] bg-white/[0.03]" />

      <div className="container-x relative z-10">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
          <motion.div variants={container} initial="hidden" animate="show" className="max-w-2xl">
            <motion.span
              variants={item}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-sm font-semibold text-accent-bright backdrop-blur-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-bright opacity-70" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-bright" />
              </span>
              Trusted PET packaging since {business.foundedYear}
            </motion.span>

            <motion.h1
              variants={item}
              className="mt-6 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl"
            >
              PET Bottles &amp; Preform
              <br />
              <span className="text-gradient">Manufacturer</span>
            </motion.h1>

            <motion.p variants={item} className="mt-6 max-w-xl text-lg leading-relaxed text-steel-200">
              Food-grade PET bottles, jars, caps, and preforms for juice, water, edible oil, and
              ghee brands. Engineered for performance, safety, and scale — with consistent quality
              and dependable delivery.
            </motion.p>

            <motion.div variants={item} className="mt-8 flex flex-wrap gap-4">
              <Link to="/contact" className="btn-accent">
                Get a Quote <ArrowUpRight className="h-5 w-5" />
              </Link>
              <a
                href={`tel:${business.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 px-6 py-3 font-semibold text-white transition-colors hover:bg-white/10"
              >
                <Phone className="h-4 w-4" /> {business.phone}
              </a>
            </motion.div>

            <motion.div
              variants={item}
              className="mt-10 grid grid-cols-2 gap-x-6 gap-y-3 text-sm text-steel-200"
            >
              {trustStrip.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2">
                  <Icon className="h-4 w-4 shrink-0 text-accent-bright" />
                  {label}
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Video visual */}
          <motion.div
            initial={reduce ? false : { opacity: 0, scale: 0.94, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, ease: EASE, delay: 0.25 }}
            className="relative"
          >
            <div className="group relative overflow-hidden rounded-3xl border border-white/15 shadow-lift">
              <video
                src={videos.heroBlowing}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                aria-label="PET bottle blow-moulding in the Geopacks facility"
                className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/70 via-transparent to-transparent" />

              {/* Floating stat card */}
              <motion.div
                initial={reduce ? false : { opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.6, ease: EASE }}
                className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-3 rounded-2xl border border-white/15 bg-ink-900/70 px-5 py-4 backdrop-blur-md"
              >
                <div>
                  <p className="text-2xl font-bold text-white">{counts.preforms}+</p>
                  <p className="text-xs text-steel-300">Preform specs</p>
                </div>
                <div className="h-9 w-px bg-white/15" />
                <div>
                  <p className="text-2xl font-bold text-white">{counts.bottles}+</p>
                  <p className="text-xs text-steel-300">Bottle variants</p>
                </div>
                <div className="h-9 w-px bg-white/15" />
                <div>
                  <p className="text-2xl font-bold text-white">10+</p>
                  <p className="text-xs text-steel-300">Years expertise</p>
                </div>
              </motion.div>
            </div>

            <div className="absolute -bottom-8 -right-8 -z-10 h-40 w-40 rounded-full bg-accent/30 blur-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
