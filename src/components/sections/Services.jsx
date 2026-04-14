import React from 'react';
import { Box, Package, Droplet, Layers, Settings, Printer, Truck, ArrowRight } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import RouteLink from '../ui/RouteLink';

const serviceItems = [
    {
        icon: Box,
        title: 'PET Bottle Manufacturing',
        desc: 'We manufacture high-quality PET bottles in multiple sizes and shapes suitable for beverages, oils, and dairy products.',
    },
    {
        icon: Package,
        title: 'PET Preforms',
        desc: 'Precision-engineered preforms designed for strength, clarity, and optimal blowing performance.',
    },
    {
        icon: Droplet,
        title: 'PET Jars',
        desc: 'Wide-mouth jars ideal for food products such as pickles, powders, and pastes.',
    },
    {
        icon: Layers,
        title: 'Caps & Closures',
        desc: 'Durable and tamper-proof caps available in various sizes and colors.',
    },
    {
        icon: Settings,
        title: 'Custom Molding',
        desc: 'We design and develop custom bottle shapes tailored to your brand and filling requirements.',
    },
    {
        icon: Printer,
        title: 'Printing Services',
        desc: 'Branding solutions including screen and offset printing for product identity.',
    },
    {
        icon: Truck,
        title: 'Logistics & Delivery',
        desc: 'Safe and timely delivery with proper packaging to ensure product integrity.',
    },
];

const Services = () => {
    return (
        <section className="section-shell pt-32 bg-white">
            <div className="container mx-auto px-4 md:px-8">
                <div className="text-center max-w-4xl mx-auto mb-14 reveal">
                    <SectionTitle alignment="center" subtitle="Our Services" title="Complete PET Packaging Solutions Under One Roof" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
                    {serviceItems.map((service, index) => (
                        <div key={service.title} className="reveal premium-card group p-6 rounded-2xl border border-gray-100 shadow-sm" data-delay={String(70 * index)}>
                            <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                                <service.icon size={22} />
                            </div>
                            <span className="text-sm font-semibold text-primary/70">0{index + 1}</span>
                            <h3 className="text-xl font-bold mt-2 mb-2">{service.title}</h3>
                            <p className="text-gray-600">{service.desc}</p>
                        </div>
                    ))}
                </div>

                <RouteLink
                    to="/contact"
                    className="reveal inline-flex items-center justify-center px-6 py-3 rounded-xl font-semibold bg-primary text-white hover:bg-primary-dark shadow-lg shadow-primary/30 transition-all hover:scale-[1.03]"
                >
                    Contact Us <ArrowRight className="ml-2 w-5 h-5" />
                </RouteLink>
            </div>
        </section>
    );
};

export default Services;
