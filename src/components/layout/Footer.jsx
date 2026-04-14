import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';
import RouteLink from '../ui/RouteLink';
import logo from '../../assets/logo.png';

const Footer = () => {
    return (
        <footer className="bg-slate-900 text-white pt-16 pb-8">
            <div className="container mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {/* Company Info */}
                    <div>
                        <div className="mb-6">
                            <img src={logo} alt="Geopacks logo" className="h-12 w-auto object-contain" />
                        </div>
                        <p className="text-gray-400 mb-6 leading-relaxed">
                            Geopacks — Manufacturing PET bottles, jars, caps, and preforms since 2014.
                            Trusted by food, beverage, oil, and dairy brands for consistent, food grade packaging solutions.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 text-white">Quick Links</h4>
                        <ul className="space-y-3">
                            {[
                                { name: 'Home', href: '/' },
                                { name: 'About Us', href: '/about' },
                                { name: 'Services', href: '/services' },
                                { name: 'Products', href: '/products' },
                                { name: 'Contact Us', href: '/contact' },
                            ].map((item) => (
                                <li key={item.name}>
                                    <RouteLink to={item.href} className="text-gray-400 hover:text-accent transition-colors flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                                        {item.name}
                                    </RouteLink>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 text-white">Contact Us</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-gray-400">
                                <MapPin className="text-accent mt-1 shrink-0" size={18} />
                                <span>Poolankinar, Pollachi, Udumalpet Road, Tamil Nadu, India</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-400">
                                <Phone className="text-accent shrink-0" size={18} />
                                <span>+91 9751546565</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-400">
                                <Mail className="text-accent shrink-0" size={18} />
                                <span>geopacks2015@gmail.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
                    <p>© 2014–Present Geopacks. All Rights Reserved.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-accent">Privacy Policy</a>
                        <a href="#" className="hover:text-accent">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
