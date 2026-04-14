import React from 'react';
import { ArrowRight, Award, CheckCircle, Factory, Shield } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import RouteLink from '../ui/RouteLink';
import aboutImage from '../../assets/about-main.jpg';
import aboutOilJarsVideo from '../../assets/about-oil-jars-video.mp4';

const points = [
    '10+ years of proven manufacturing experience',
    'Consistent production quality across batches',
    'Industry specific packaging solutions',
    'Custom design capability',
    'Reliable delivery timelines',
];

const About = () => {
    return (
        <section className="section-shell pt-32 bg-gray-50">
            <div className="container mx-auto px-4 md:px-8">
                <div className="text-center max-w-4xl mx-auto mb-14 reveal">
                    <SectionTitle alignment="center" subtitle="About Geopacks" title="A Decade of Trusted PET Packaging Manufacturing" />
                    <p className="text-gray-600 leading-relaxed">
                        Since 2014, Geopacks has been manufacturing high quality PET bottles and preforms for industries including packaged drinking water, edible oil, juice, and dairy.
                        With over a decade of hands on production experience, we focus on consistency, safety, and performance.
                    </p>
                    <p className="text-gray-600 mt-4 leading-relaxed">
                        We understand real manufacturing challenges including filling compatibility, leakage control, material strength, and cost efficiency, and design our products to solve them.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-14">
                    <div className="reveal premium-card rounded-2xl overflow-hidden shadow-2xl border border-gray-100 h-[420px]">
                        <img src={aboutImage} alt="Geopacks facility" className="w-full h-full object-cover" />
                    </div>
                    <div className="space-y-8">
                        <div className="reveal premium-card bg-white rounded-2xl p-6 border border-gray-100 shadow-sm" data-delay="80">
                            <h3 className="text-2xl font-bold mb-3 flex items-center gap-2"><Factory className="text-primary" size={22} /> Who We Are</h3>
                            <p className="text-gray-600">
                                Geopacks is a specialized PET packaging manufacturer delivering reliable, food grade solutions at scale.
                                Our facility is built to ensure precision molding, uniform quality, and dependable supply for growing brands.
                            </p>
                        </div>

                        <div className="reveal premium-card bg-white rounded-2xl p-6 border border-gray-100 shadow-sm" data-delay="140">
                            <h3 className="text-2xl font-bold mb-3 flex items-center gap-2"><Shield className="text-primary" size={22} /> Mission</h3>
                            <p className="text-gray-600">
                                To manufacture high quality, food safe PET bottles and preforms while continuously improving sustainability, efficiency, and product design.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="reveal premium-card bg-white rounded-2xl p-8 md:p-10 border border-gray-100 shadow-sm">
                    <h3 className="text-2xl font-bold mb-6 flex items-center gap-2"><Award className="text-primary" size={22} /> Why Choose Us</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                        {points.map((item) => (
                            <div key={item} className="flex items-start gap-3">
                                <CheckCircle className="text-primary shrink-0 mt-0.5" size={18} />
                                <p className="text-gray-700">{item}</p>
                            </div>
                        ))}
                    </div>
                    <RouteLink
                        to="/contact"
                        className="inline-flex items-center justify-center px-6 py-3 rounded-md font-medium bg-primary text-white hover:bg-primary-dark shadow-lg shadow-primary/30 transition-all"
                    >
                        Contact Us
                    </RouteLink>
                </div>

                <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                    <div className="reveal premium-card rounded-2xl overflow-hidden border border-gray-100 shadow-2xl aspect-video bg-white">
                        <video
                            src={aboutOilJarsVideo}
                            autoPlay
                            muted
                            loop
                            playsInline
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <div className="reveal premium-card bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
                        <h3 className="text-2xl font-bold mb-4">Open Office Location in Google Maps</h3>
                        <p className="text-gray-600 mb-6">
                            Visit our office location directly using Google Maps for quick navigation.
                        </p>
                        <a
                            href="https://share.google/E7CzVLaD94KBhXlP4"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-primary font-semibold hover:underline"
                        >
                            Open Office Location in Google Maps <ArrowRight className="ml-2 w-4 h-4" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
