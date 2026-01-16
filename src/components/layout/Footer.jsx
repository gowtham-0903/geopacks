import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-slate-900 text-white pt-16 pb-8">
            <div className="container mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    {/* Company Info */}
                    <div>
                        <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                            <span className="bg-primary text-white px-2 py-1 rounded text-lg">G</span>
                            GEOPACKS
                        </h3>
                        <p className="text-gray-400 mb-6 leading-relaxed">
                            Geopacks — Manufacturing PET bottles, jars, caps, and preforms since 2014.
                            Trusted by food, beverage, oil, and dairy brands for consistent, food-grade packaging solutions.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary transition-colors">
                                <Facebook size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary transition-colors">
                                <Instagram size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary transition-colors">
                                <Linkedin size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 text-white">Quick Links</h4>
                        <ul className="space-y-3">
                            {['Home', 'About Us', 'Services', 'Our Process', 'Contact Us'].map((item) => (
                                <li key={item}>
                                    <a href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-gray-400 hover:text-primary transition-colors flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 text-white">Products</h4>
                        <ul className="space-y-3">
                            {['PET Bottles', 'PET Jars', 'Caps & Closures', 'Custom Designs', 'Printing Services'].map((item) => (
                                <li key={item}>
                                    <a href="#services" className="text-gray-400 hover:text-primary transition-colors flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 text-white">Contact Us</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-gray-400">
                                <MapPin className="text-primary mt-1 shrink-0" size={18} />
                                <span>Poolankinar, Pollachi - Udumalpet Road, Tamil Nadu, India</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-400">
                                <Phone className="text-primary shrink-0" size={18} />
                                <span>+91 98435 46565</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-400">
                                <Mail className="text-primary shrink-0" size={18} />
                                <span>contact@geopacks.in</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
                    <p>© 2014–Present Geopacks. All Rights Reserved.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-primary">Privacy Policy</a>
                        <a href="#" className="hover:text-primary">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
