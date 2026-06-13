import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { FloatingShapes, GridPattern } from '../ui/Decor';

const EASE = [0.22, 1, 0.36, 1];

const PageHero = ({ kicker, title, subtitle, breadcrumb }) => (
  <section className="relative overflow-hidden bg-ink-900 pb-16 pt-36 text-white md:pb-20 md:pt-44">
    <div className="absolute inset-0 bg-gradient-to-br from-ink-900 via-ink-800 to-ink-950" />
    <div className="absolute inset-0 bg-mesh-ink" />
    <GridPattern className="opacity-[0.05]" />
    <FloatingShapes />

    <div className="container-x relative z-10">
      {breadcrumb && (
        <motion.nav
          aria-label="Breadcrumb"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: EASE }}
          className="mb-6 flex items-center gap-1.5 text-sm text-steel-300"
        >
          <Link to="/" className="hover:text-accent-bright">
            Home
          </Link>
          <ChevronRight className="h-4 w-4 text-steel-400" />
          <span className="text-white">{breadcrumb}</span>
        </motion.nav>
      )}

      {kicker && (
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: EASE, delay: 0.05 }}
          className="kicker mb-4 text-accent-bright"
        >
          <span className="h-px w-6 bg-accent-bright" />
          {kicker}
        </motion.span>
      )}

      <motion.h1
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: EASE, delay: 0.1 }}
        className="max-w-3xl font-display text-4xl font-extrabold leading-[1.08] text-white md:text-5xl lg:text-6xl"
      >
        {title}
      </motion.h1>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.2 }}
          className="mt-6 max-w-2xl text-lg text-steel-200"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  </section>
);

export default PageHero;
