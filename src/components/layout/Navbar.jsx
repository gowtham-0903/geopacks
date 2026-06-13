import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import logo from '../../assets/logo.png';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Products', href: '/products' },
  { name: 'Contact', href: '/contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setIsOpen(false), [pathname]);

  const isActive = (href) => (href === '/' ? pathname === '/' : pathname.startsWith(href));

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50 px-3 pt-3 md:px-5 md:pt-4"
    >
      <nav
        className={`container-x mx-auto flex items-center justify-between rounded-2xl px-4 transition-all duration-300 md:px-6 ${
          scrolled
            ? 'border border-white/70 bg-white/85 py-2.5 shadow-card backdrop-blur-md'
            : 'border border-transparent bg-transparent py-3.5'
        }`}
      >
        <Link to="/" className="flex items-center gap-2" aria-label="Geopacks home">
          <img src={logo} alt="Geopacks logo" className="h-10 w-auto object-contain md:h-11" />
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={`relative rounded-lg px-3.5 py-2 text-sm font-semibold transition-colors ${
                isActive(link.href)
                  ? scrolled ? 'text-accent-dark' : 'text-white'
                  : scrolled ? 'text-ink-800/75 hover:text-ink-900' : 'text-white/75 hover:text-white'
              }`}
            >
              {link.name}
              {isActive(link.href) && (
                <motion.span
                  layoutId="nav-underline"
                  className={`absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full ${
                    scrolled
                      ? 'bg-gradient-to-r from-accent to-accent-bright'
                      : 'bg-white'
                  }`}
                />
              )}
            </Link>
          ))}
        </div>

        <div className="hidden md:block">
          <Link to="/contact" className="btn-accent !py-2.5 !text-sm">
            Get a Quote
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((v) => !v)}
          className={`rounded-lg p-2 md:hidden ${scrolled ? 'text-ink-800' : 'text-white'}`}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="container-x mx-auto mt-2 overflow-hidden rounded-2xl border border-white/70 bg-white/95 p-3 shadow-card backdrop-blur-md md:hidden"
          >
            <div className="flex flex-col">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`rounded-xl px-4 py-3 text-base font-semibold transition-colors ${
                    isActive(link.href)
                      ? 'bg-accent/10 text-accent-dark'
                      : 'text-ink-800 hover:bg-steel-50'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link to="/contact" className="btn-accent mt-2 w-full">
                Get a Quote
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
