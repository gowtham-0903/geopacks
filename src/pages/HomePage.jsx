import React from 'react';
import { ArrowRight, CheckCircle2, Mail, MapPin, Package, Phone } from 'lucide-react';
import Hero from '../components/sections/Hero';
import RouteLink from '../components/ui/RouteLink';
import SectionTitle from '../components/ui/SectionTitle';
import aboutPreviewBottle from '../assets/about-preview-bottle.jpg';
import clientLogo01 from '../assets/clients/client-logo-01.gif';
import clientLogo02 from '../assets/clients/client-logo-02.jpg';
import clientLogo03 from '../assets/clients/client-logo-03.jpeg';
import clientLogo04 from '../assets/clients/client-logo-04.jpeg';
import clientLogo05 from '../assets/clients/client-logo-05.png';
import clientLogo06 from '../assets/clients/client-logo-06.png';
import clientLogo07 from '../assets/clients/client-logo-07.jpeg';

const productCards = [
    {
        title: 'PET Bottles',
        desc: 'High quality bottles available from 200 ml to 2 litre for water, juice, and oil applications.',
    },
    {
        title: 'PET Jars',
        desc: 'Wide mouth jars ideal for dairy products, pickles, powders, and food storage.',
    },
    {
        title: 'Caps & Closures',
        desc: 'Tamper proof caps designed for secure sealing and durability.',
    },
    {
        title: 'PET Preforms',
        desc: 'Strong and consistent preforms for reliable bottle blowing.',
    },
    {
        title: 'Custom Designs',
        desc: 'Unique bottle shapes tailored to your brand identity.',
    },
    {
        title: 'Printing Services',
        desc: 'High quality branding with screen and offset printing.',
    },
];

const trustPoints = [
    'Over 10 years of manufacturing experience',
    'Consistent production quality across batches',
    '100% food grade PET materials',
    'Industry specific packaging solutions',
    'Custom design and molding capability',
    'Reliable supply and on time delivery',
];

const industries = [
    'Packaged Drinking Water',
    'Juice & Beverages',
    'Edible Oil',
    'Dairy & Ghee',
    'Food Products',
];

const clientImages = [clientLogo01, clientLogo02, clientLogo03, clientLogo04, clientLogo05, clientLogo06, clientLogo07];
const marqueeImages = [...clientImages, ...clientImages];
const logoScrollDuration = '22s';

const HomePage = () => {
    return (
        <>
            <Hero />

            <section className="section-shell bg-gray-50">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="reveal">
                            <SectionTitle subtitle="About Geopacks" title="Trusted PET packaging expertise since 2014" />
                            <p className="text-gray-600 mb-4 leading-relaxed">
                                Since 2014, Geopacks has been a trusted manufacturer of PET bottles and preforms, serving industries such as packaged drinking water, edible oil, juice, and dairy.
                                With years of hands on manufacturing experience, we focus on delivering consistent quality, food safety, and production reliability.
                            </p>
                            <p className="text-gray-600 mb-8 leading-relaxed">
                                We design our packaging solutions to meet real world requirements including filling compatibility, leakage prevention, durability, and cost efficiency.
                            </p>
                            <RouteLink
                                to="/about"
                                className="inline-flex items-center justify-center px-6 py-3 rounded-xl font-semibold bg-primary text-white hover:bg-primary-dark shadow-lg shadow-primary/30 transition-all hover:scale-[1.03]"
                            >
                                Learn More <ArrowRight className="ml-2 w-5 h-5" />
                            </RouteLink>
                        </div>
                        <div className="reveal premium-card rounded-2xl overflow-hidden border border-gray-100 shadow-2xl aspect-video bg-white" data-delay="100">
                            <img
                                src={aboutPreviewBottle}
                                alt="Transparent water bottle"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-shell bg-white">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <SectionTitle alignment="center" subtitle="Comprehensive PET Packaging Solutions" title="Our Products" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {productCards.map((item, index) => (
                            <div key={item.title} className="reveal premium-card bg-gray-50 rounded-2xl p-6 border border-gray-100" data-delay={String(60 * index)}>
                                <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4">
                                    <Package size={20} />
                                </div>
                                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                                <p className="text-gray-600">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section-shell bg-slate-900 text-white">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="max-w-4xl reveal">
                        <SectionTitle subtitle="Why Choose Geopacks" title="Built on consistency, quality, and delivery trust" subtitleClassName="text-primary" titleClassName="text-white" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {trustPoints.map((point, index) => (
                            <div key={point} className="reveal premium-card bg-white/5 border border-white/10 rounded-xl p-4 flex items-start gap-3" data-delay={String(50 * index)}>
                                <CheckCircle2 className="text-primary shrink-0 mt-0.5" size={18} />
                                <p className="text-gray-200">{point}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section-shell bg-gray-50">
                <div className="container mx-auto px-4 md:px-8">
                    <SectionTitle alignment="center" title="Industries We Serve" />
                    <div className="flex flex-wrap justify-center gap-3 mb-6">
                        {industries.map((industry, index) => (
                            <span key={industry} className="reveal bg-white border border-gray-200 rounded-full px-4 py-2 text-sm font-medium text-slate-700" data-delay={String(40 * index)}>
                                {industry}
                            </span>
                        ))}
                    </div>
                    <p className="reveal text-center text-gray-600 max-w-3xl mx-auto" data-delay="160">
                        We design packaging specifically suited for each industry&apos;s storage, safety, and transportation needs.
                    </p>
                </div>
            </section>

            <section className="section-shell bg-gray-50 overflow-hidden">
                <div className="container mx-auto px-4 md:px-8 mb-8">
                    <SectionTitle alignment="center" title="Clients" />
                </div>
                <div className="relative client-marquee-viewport">
                    <div className="client-marquee-track" style={{ animationDuration: logoScrollDuration }}>
                        {marqueeImages.map((image, index) => (
                            <div key={`${image}-${index}`} className="client-marquee-item">
                                <img src={image} alt={`Client logo ${index + 1}`} className="w-full h-full object-contain p-4 bg-white" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section-shell bg-primary text-white">
                <div className="container mx-auto px-4 md:px-8 text-center max-w-4xl reveal">
                    <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-slate-200">Looking for Reliable PET Packaging?</h2>
                    <p className="text-white/90 mb-8 text-lg">
                        Get high quality, food grade PET bottles and preforms manufactured with precision and delivered on time.
                    </p>
                    <RouteLink
                        to="/contact"
                        className="inline-flex items-center justify-center px-6 py-3 rounded-xl font-semibold bg-accent text-white hover:bg-accent-dark transition-all hover:scale-[1.03] shadow-xl shadow-accent/20"
                    >
                        Contact Us <ArrowRight className="ml-2 w-5 h-5" />
                    </RouteLink>
                </div>
            </section>

            <section className="section-shell bg-white">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="max-w-6xl mx-auto bg-gray-50 border border-gray-100 rounded-2xl p-8 md:p-10 reveal">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                            <div>
                                <SectionTitle subtitle="Get in Touch" title="We are ready to support your packaging needs" />
                                <div className="space-y-5 mb-8">
                                    <div className="flex items-start gap-3">
                                        <MapPin className="text-primary shrink-0 mt-1" size={20} />
                                        <p className="text-gray-700">Pollachi,  Udumalpet Road, Poolankinar, Tamil Nadu</p>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <Phone className="text-primary shrink-0 mt-1" size={20} />
                                        <p className="text-gray-700">+91 9751546565</p>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <Mail className="text-primary shrink-0 mt-1" size={20} />
                                        <p className="text-gray-700">geopacks2015@gmail.com</p>
                                    </div>
                                </div>
                                <RouteLink
                                    to="/contact"
                                    className="inline-flex items-center justify-center px-6 py-3 rounded-md font-medium bg-primary text-white hover:bg-primary-dark shadow-lg shadow-primary/30 transition-all"
                                >
                                    Contact Us <ArrowRight className="ml-2 w-5 h-5" />
                                </RouteLink>
                            </div>
                            <div>
                                <div className="w-full h-80 bg-gray-200 rounded-2xl overflow-hidden shadow-md border border-gray-200">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.486236772718!2d77.08182737480834!3d10.6698669894732!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8362677945d8b%3A0x6b80145260100f!2sPoolankinar%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1705384600000!5m2!1sen!2sin"
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0 }}
                                        allowFullScreen=""
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        title="Geopacks Office Location"
                                    />
                                </div>
                                <a
                                    href="https://share.google/E7CzVLaD94KBhXlP4"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center mt-4 text-primary font-semibold hover:underline"
                                >
                                    Open in Google Maps <ArrowRight className="ml-2 w-4 h-4" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default HomePage;
