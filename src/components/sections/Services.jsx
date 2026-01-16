import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SectionTitle from '../ui/SectionTitle';
import { Package, Droplet, Layers, Printer, Settings, Truck, Check } from 'lucide-react';
import oilVideo from '../../assets/process-video.mp4';

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".service-card", {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 75%",
                },
                y: 50,
                opacity: 0,
                duration: 0.6,
                stagger: 0.1
            });
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    const services = [
        { icon: Package, title: 'PET Bottles', desc: 'Various shapes and sizes for beverages, oils, and more.' },
        { icon: Droplet, title: 'PET Jars', desc: 'Wide-mouth jars perfect for pickles, powders, and pastes.' },
        { icon: Layers, title: 'Caps & Closures', desc: 'Secure and tamper-proof caps in multiple colors.' },
        { icon: Printer, title: 'Printing Services', desc: 'High-quality screen and offset printing for your brand.' },
        { icon: Settings, title: 'Custom Molding', desc: 'Design your unique bottle shape with our expert team.' },
        { icon: Truck, title: 'Logistics', desc: 'Timely delivery across the region with safe packaging.' },
    ];

    const capacities = ["200 ml", "300 ml", "500 ml", "1 Litre", "2 Litre"];

    return (
        <section ref={sectionRef} id="services" className="py-20 bg-white">
            <div className="container mx-auto px-4 md:px-8">
                <div className="text-center mb-16">
                    <SectionTitle
                        alignment="center"
                        subtitle="Our Products & Services"
                        title="PET Bottles & Preforms for All Industries"
                    />
                    <p className="text-gray-600 max-w-3xl mx-auto mt-4 text-lg">
                        We manufacture PET bottles and perform for all types of Juice, Water, Oil, and Ghee industries.
                        Available in various capacities from 200 ml to 2 litre.
                    </p>
                </div>

                {/* Video & Capacities Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
                    <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl border border-gray-100 relative group">
                        <video
                            src={oilVideo}
                            autoPlay
                            muted
                            loop
                            playsInline
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/10"></div>
                        <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur px-4 py-2 rounded-lg shadow-lg">
                            <p className="font-bold text-primary">Oil Filling Process</p>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-2xl font-bold mb-6 text-slate-800">Versatile Packaging Solutions</h3>
                        <p className="text-gray-600 mb-8 leading-relaxed">
                            Our state-of-the-art manufacturing facility ensures high-precision molding for consistent volume and durability. Whether you need small SKU packaging or large volume containers, we have you covered.
                        </p>

                        <h4 className="font-bold text-lg mb-4 text-primary">Available Capacities:</h4>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                            {capacities.map((cap) => (
                                <div key={cap} className="flex items-center gap-2 bg-gray-50 px-4 py-3 rounded-lg border border-gray-100">
                                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                        <Check size={14} strokeWidth={3} />
                                    </div>
                                    <span className="font-medium text-gray-700">{cap}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="service-card group p-8 rounded-2xl bg-white border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                        >
                            <div className="w-14 h-14 rounded-xl bg-primary/5 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                <service.icon size={28} />
                            </div>
                            <span className="text-primary font-bold text-lg mb-2 block opacity-50">0{index + 1}</span>
                            <h3 className="text-xl font-bold mb-3 text-slate-800">{service.title}</h3>
                            <p className="text-gray-500 leading-relaxed mb-4">
                                {service.desc}
                            </p>
                            <a href="#" className="inline-flex items-center text-primary font-semibold group-hover:tracking-wide transition-all">
                                Learn More <span className="ml-2">→</span>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
