import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import SectionTitle from '../ui/SectionTitle';
import { Search, Database, Target, CheckSquare } from 'lucide-react';
import processImage from '../../assets/process-recycling.jpg';

const Process = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".process-step", {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 70%",
                },
                y: 30,
                opacity: 0,
                duration: 0.8,
                stagger: 0.2
            });
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    const steps = [
        {
            icon: Search,
            title: 'Our Research',
            desc: 'We research market trends and material science to best fit your needs.'
        },
        {
            icon: Database,
            title: 'Data Collection',
            desc: 'Gathering requirements and technical specifications for perfect molding.'
        },
        {
            icon: Target,
            title: 'Targeting',
            desc: 'Precision engineering to target the exact dimensions and quality.'
        },
        {
            icon: CheckSquare,
            title: 'Solve Problem',
            desc: 'Delivering the final product that solves your packaging challenges.'
        },
    ];

    return (
        <section ref={sectionRef} id="process" className="py-20 bg-slate-900 text-white relative overflow-hidden">
            {/* Background patterns */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                <div className="absolute right-0 top-0 w-96 h-96 bg-primary rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute left-0 bottom-0 w-64 h-64 bg-primary rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>
            </div>

            <div className="container mx-auto px-4 md:px-8 relative z-10">
                <div className="flex flex-col lg:flex-row gap-16">

                    <div className="lg:w-1/3">
                        <SectionTitle
                            subtitle="Our Work Flow"
                            title="We Are Truly Able To Help Our Clients Live Happier"
                            className="text-white"
                        />
                        <p className="text-gray-400 mb-8 leading-relaxed">
                            Backed by 10+ years of hands-on manufacturing experience, our process is built for quality and repeatability. We follow a strict workflow to maintain the highest standards in every batch we produce.
                        </p>

                        <div className="relative h-[300px] w-full rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                            <img
                                src={processImage}
                                alt="Manufacturing Process"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
                        {steps.map((step, index) => (
                            <div key={index} className="process-step bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center text-primary mb-4">
                                    <step.icon size={24} />
                                </div>
                                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    {step.desc}
                                </p>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Process;
