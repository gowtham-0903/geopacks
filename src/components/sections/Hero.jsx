import React from 'react';
import Button from '../ui/Button';
import { ArrowRight } from 'lucide-react';

const BLOWING_VIDEO_URL = 'https://res.cloudinary.com/dezbb3rn5/video/upload/v1772212687/blowing-video_lbs8dw.mp4';

const navigateTo = (path) => {
    window.history.pushState({}, '', path);
    window.dispatchEvent(new PopStateEvent('popstate'));
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

const Hero = () => {
    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center pt-24 pb-10 md:pb-14 overflow-hidden bg-gradient-to-br from-primary via-primary-dark to-slate-950"
        >
            {/* Background Decorations */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 rounded-l-[100px] skew-x-[-12deg] translate-x-20 z-0"></div>
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="floating-shape absolute top-32 left-10 w-12 h-12 border-4 border-primary/20 rounded-full"></div>
                <div className="floating-shape absolute bottom-20 right-20 w-24 h-24 bg-accent/20 rounded-full blur-xl"></div>
                <div className="floating-shape absolute top-1/2 right-1/3 w-8 h-8 bg-white/5 rotate-45"></div>
            </div>

            <div className="container mx-auto px-4 md:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Text Content */}
                    <div className="max-w-2xl">
                        <span className="hero-enter hero-delay-1 inline-block py-1 px-3 rounded-full bg-white/10 text-accent font-semibold mb-6">
                            Since 2014
                        </span>
                        <h1 className="hero-enter hero-delay-2 text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
                            PET Bottles & <br />
                            <span className="text-accent">Preform Manufacturer</span>
                        </h1>
                        <h2 className="hero-enter hero-delay-3 text-xl text-white font-medium mb-4">
                            Trusted manufacturer of food grade PET bottles, jars, caps, and preforms for juice, water, oil, and ghee industries.
                        </h2>
                        <p className="hero-enter hero-delay-4 text-slate-200 text-lg mb-8 max-w-lg">
                            Since 2014, Geopacks has been delivering reliable PET packaging solutions engineered for performance, safety, and scale. We support brands with consistent quality, custom designs, and dependable manufacturing.
                        </p>
                        <div className="hero-enter hero-delay-5 flex flex-wrap gap-4 mb-8">
                            <Button
                                icon={ArrowRight}
                                className="rounded-xl !py-3 !px-6 bg-accent hover:bg-accent-dark border border-accent hover:border-accent-dark"
                                onClick={() => navigateTo('/contact')}
                            >
                                Contact Us
                            </Button>
                        </div>

                        {/* Trust Strip */}
                        <div className="hero-enter hero-delay-5 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-100">
                            <div className="flex items-center gap-2">Manufacturing Expertise Since 2014</div>
                            <div className="flex items-center gap-2">100% Food Grade PET Materials</div>
                            <div className="flex items-center gap-2">Custom Bottles & Preforms</div>
                            <div className="flex items-center gap-2">Serving Beverage, Oil & Dairy Brands</div>
                        </div>
                    </div>

                    {/* Image/Visual Content */}
                    <div className="hero-enter hero-delay-4 relative hidden lg:block">
                        <div className="relative z-10">
                            <div className="w-full aspect-video rounded-2xl overflow-hidden border border-white/20 shadow-2xl relative group premium-card">
                                <video
                                    src={BLOWING_VIDEO_URL}
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                                />
                                {/* Overlay Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 to-transparent"></div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Hero;
