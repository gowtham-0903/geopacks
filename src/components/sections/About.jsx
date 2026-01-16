import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SectionTitle from '../ui/SectionTitle';
import Button from '../ui/Button';
import { CheckCircle, Shield, Award } from 'lucide-react';
import aboutImage from '../../assets/about-main.jpg';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".about-content > *", {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                },
                y: 30,
                opacity: 0,
                duration: 0.8,
                stagger: 0.2
            });

            gsap.from(".about-image", {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 70%",
                },
                x: -50,
                opacity: 0,
                duration: 1
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} id="about" className="py-20 bg-gray-50 overflow-hidden">
            <div className="container mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Image Side */}
                    <div className="about-image relative">
                        <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl h-[500px]">
                            <img
                                src={aboutImage}
                                alt="Geopacks Manufacturing Plant"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        {/* Decoration */}
                        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary/20 rounded-full z-0"></div>
                        <div className="absolute -top-10 -right-10 w-20 h-20 bg-primary/10 rounded-full z-0"></div>
                    </div>

                    {/* Content Side */}
                    <div className="about-content">
                        <SectionTitle
                            subtitle="About Geopacks"
                            title="A Decade of Reliable PET Packaging Manufacturing"
                        />
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            Founded in 2014, Geopacks is a well-established PET bottle and preform manufacturer serving industries such as juice, packaged drinking water, edible oil, and ghee. With over a decade of manufacturing experience, we have built a reputation for consistency, quality, and dependable delivery.
                        </p>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            Our long-term presence in the market allows us to understand real-world production challenges—filling line compatibility, leakage prevention, material optimization, and cost efficiency.
                        </p>

                        <div className="bg-primary/5 p-4 rounded-lg border-l-4 border-primary mb-8">
                            <h4 className="font-bold text-primary mb-2">Our Mission</h4>
                            <p className="text-sm text-gray-700 italic">
                                "To manufacture high-quality, food-safe PET bottles and preforms while driving continuous improvement in sustainability, efficiency, and product design."
                            </p>
                        </div>

                        <div className="space-y-4 mb-8">
                            <h4 className="font-bold text-lg border-b border-gray-200 pb-2 mb-4">Why Geopacks?</h4>

                            <div className="flex items-start gap-4">
                                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary mt-1 shrink-0">
                                    <Award size={16} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-md mb-1">Proven Experience</h4>
                                    <p className="text-sm text-gray-500">Operating continuously since 2014, serving repeat customers across multiple industries.</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary mt-1 shrink-0">
                                    <Shield size={16} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-md mb-1">Manufacturing Consistency</h4>
                                    <p className="text-sm text-gray-500">Stable processes refined over years of production—not experiments.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary mt-1 shrink-0">
                                    <CheckCircle size={16} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-md mb-1">Industry-Focused Solutions</h4>
                                    <p className="text-sm text-gray-500">Packaging designed specifically for juice, water, oil, and ghee applications.</p>
                                </div>
                            </div>
                        </div>

                        <Button>Learn More</Button>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;
