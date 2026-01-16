import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Button from '../ui/Button';
import { ArrowRight, Play } from 'lucide-react';
import videoFile from '../../assets/blowing-video.mp4';

const Hero = () => {
    const heroRef = useRef(null);
    const textRef = useRef(null);
    const imageRef = useRef(null);
    const shapesRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Text Animations
            const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

            tl.from(".hero-subtitle", {
                y: 20,
                opacity: 0,
                duration: 0.8,
                delay: 0.2
            })
                .from(".hero-title span", {
                    y: 50,
                    opacity: 0,
                    duration: 1,
                    stagger: 0.1,
                    className: "inline-block"
                }, "-=0.5")
                .from(".hero-desc", {
                    y: 20,
                    opacity: 0,
                    duration: 0.8
                }, "-=0.5")
                .from(".hero-btns", {
                    y: 20,
                    opacity: 0,
                    duration: 0.8
                }, "-=0.6")

                // Image Animation
                .from(imageRef.current, {
                    x: 50,
                    opacity: 0,
                    duration: 1.2,
                    scale: 0.9
                }, "-=1");

            // Floating Shapes Animation
            gsap.to(".floating-shape", {
                y: -20,
                duration: 2,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
                stagger: 0.5
            });

        }, heroRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={heroRef}
            id="home"
            className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-slate-900"
        >
            {/* Background Decorations */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/10 rounded-l-[100px] skew-x-[-12deg] translate-x-20 z-0"></div>
            <div ref={shapesRef} className="absolute inset-0 z-0 pointer-events-none">
                <div className="floating-shape absolute top-32 left-10 w-12 h-12 border-4 border-primary/20 rounded-full"></div>
                <div className="floating-shape absolute bottom-20 right-20 w-24 h-24 bg-primary/10 rounded-full blur-xl"></div>
                <div className="floating-shape absolute top-1/2 right-1/3 w-8 h-8 bg-white/5 rotate-45"></div>
            </div>

            <div className="container mx-auto px-4 md:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Text Content */}
                    <div ref={textRef} className="max-w-2xl">
                        <span className="hero-subtitle inline-block py-1 px-3 rounded-full bg-primary/20 text-primary font-semibold mb-6">
                            Since 2014
                        </span>
                        <h1 className="hero-title text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
                            <span>PET Bottles &</span> <br />
                            <span className="text-primary">Preform Manufacturer</span>
                        </h1>
                        <h2 className="text-xl text-white font-medium mb-4">
                            Trusted manufacturer of food-grade PET bottles, jars, caps, and preforms for juice, water, oil, and ghee industries.
                        </h2>
                        <p className="hero-desc text-gray-400 text-lg mb-8 max-w-lg">
                            Since 2014, Geopacks has been delivering reliable PET packaging solutions engineered for performance, safety, and scale. We support brands with consistent quality, custom designs, and dependable manufacturing.
                        </p>
                        <div className="hero-btns flex flex-wrap gap-4 mb-8">
                            <Button
                                icon={ArrowRight}
                                className="rounded-[25px] !py-2 !px-5 h-[46px] shadow-[0_0_15px_rgba(56,135,134,0.5)] hover:shadow-[0_0_25px_rgba(56,135,134,0.8)] hover:scale-105 transition-all duration-300"
                                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                            >
                                Get Started
                            </Button>
                        </div>

                        {/* Trust Strip */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-300">
                            <div className="flex items-center gap-2"><span>✅</span> Manufacturing Expertise Since 2014</div>
                            <div className="flex items-center gap-2"><span>✅</span> 100% Food-Grade PET Materials</div>
                            <div className="flex items-center gap-2"><span>✅</span> Custom Bottles & Preforms</div>
                            <div className="flex items-center gap-2"><span>✅</span> Serving Beverage, Oil & Dairy Brands</div>
                        </div>
                    </div>

                    {/* Image/Visual Content */}
                    <div ref={imageRef} className="relative hidden lg:block">
                        <div className="relative z-10">
                            <div className="w-full aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-2xl relative group">
                                <video
                                    src={videoFile}
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                                />
                                {/* Overlay Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Hero;
