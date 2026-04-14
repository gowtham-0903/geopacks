import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../../assets/logo.png';
import RouteLink from '../ui/RouteLink';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [path, setPath] = useState(window.location.pathname);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        const handlePath = () => setPath(window.location.pathname);
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('popstate', handlePath);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('popstate', handlePath);
        };
    }, []);

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Services', href: '/services' },
        { name: 'Products', href: '/products' },
    ];

    const isHome = path === '/';
    const useSolidHeader = scrolled;
    const textClass = useSolidHeader ? 'text-slate-700 hover:text-primary' : (isHome ? 'text-white/90 hover:text-white' : 'text-primary hover:text-primary-dark');
    const lineClass = useSolidHeader || !isHome ? 'bg-accent' : 'bg-white';

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${useSolidHeader ? 'bg-white/95 backdrop-blur-md py-4 shadow-xl border-b border-gray-100' : 'bg-transparent py-6'
            }`}>
            <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
                {/* Logo */}
                <div className="flex items-center">
                    <RouteLink to="/" className="flex items-center">
                        <img
                            src={logo}
                            alt="Geopacks logo"
                            className="h-12 w-auto object-contain"
                        />
                    </RouteLink>
                </div>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <RouteLink
                            key={link.name}
                            to={link.href}
                            className={`${textClass} font-semibold transition-colors relative group`}
                        >
                            {link.name}
                            <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all group-hover:w-full ${lineClass}`}></span>
                        </RouteLink>
                    ))}
                    <RouteLink to="/contact" className="inline-flex items-center justify-center px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300 bg-accent text-white border border-accent hover:bg-accent-dark hover:scale-[1.03] shadow-lg shadow-accent/20">
                        Contact
                    </RouteLink>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className={`${useSolidHeader ? 'text-slate-700' : (isHome ? 'text-white' : 'text-primary')} focus:outline-none`}
                    >
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Nav */}
            <div className={`md:hidden absolute top-full left-0 w-full bg-white shadow-xl transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                <div className="flex flex-col px-4 py-4 space-y-4">
                    {navLinks.map((link) => (
                        <RouteLink
                            key={link.name}
                            to={link.href}
                            className="text-slate-700 font-medium hover:text-primary block border-b border-gray-100 pb-2"
                            onClick={() => setIsOpen(false)}
                        >
                            {link.name}
                        </RouteLink>
                    ))}
                    <RouteLink to="/contact" className="inline-flex items-center justify-center px-6 py-3 rounded-md font-medium bg-primary text-white border-2 border-primary hover:bg-primary-dark transition-all w-full" onClick={() => setIsOpen(false)}>
                        Contact
                    </RouteLink>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
