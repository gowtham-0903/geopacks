import React from 'react';
import { ArrowRight, MapPin, Phone, Mail, Clock } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import InquiryForm from '../forms/InquiryForm';

const Contact = () => {
    return (
        <section className="section-shell pt-32 bg-white">
            <div className="container mx-auto px-4 md:px-8">
                <div className="text-center max-w-4xl mx-auto mb-14 reveal">
                    <SectionTitle alignment="center" subtitle="Contact Us" title="Let us build your packaging solution" />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    <div className="space-y-5">
                        <div className="reveal premium-card bg-gray-50 border border-gray-100 rounded-xl p-5 flex items-start gap-4">
                            <MapPin className="text-primary mt-1 shrink-0" />
                            <div>
                                <h3 className="font-bold text-lg mb-1">Address</h3>
                                <p className="text-gray-600">GEO PACKS<br />Pollachi - Udumalpet Road,<br />Poolankinar, Tamil Nadu, India</p>
                            </div>
                        </div>
                        <div className="reveal premium-card bg-gray-50 border border-gray-100 rounded-xl p-5 flex items-start gap-4" data-delay="60">
                            <Phone className="text-primary mt-1 shrink-0" />
                            <div>
                                <h3 className="font-bold text-lg mb-1">Phone</h3>
                                <p className="text-gray-600">+91 9751546565</p>
                            </div>
                        </div>
                        <div className="reveal premium-card bg-gray-50 border border-gray-100 rounded-xl p-5 flex items-start gap-4" data-delay="120">
                            <Mail className="text-primary mt-1 shrink-0" />
                            <div>
                                <h3 className="font-bold text-lg mb-1">Email</h3>
                                <p className="text-gray-600">geopacks2015@gmail.com</p>
                            </div>
                        </div>
                        <div className="reveal premium-card bg-gray-50 border border-gray-100 rounded-xl p-5 flex items-start gap-4" data-delay="180">
                            <Clock className="text-primary mt-1 shrink-0" />
                            <div>
                                <h3 className="font-bold text-lg mb-1">Working Hours</h3>
                                <p className="text-gray-600">Monday - Saturday: 9:00 AM - 5:00 PM</p>
                            </div>
                        </div>
                        <a
                            href="https://share.google/E7CzVLaD94KBhXlP4"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="reveal inline-flex items-center text-primary font-semibold hover:underline"
                            data-delay="220"
                        >
                            Open Office Location in Google Maps <ArrowRight className="ml-2 w-4 h-4" />
                        </a>
                    </div>

                    <div className="reveal premium-card bg-gray-50 p-8 rounded-2xl border border-gray-100 shadow-sm" data-delay="80">
                        <h3 className="text-2xl font-bold mb-6">Send Inquiry</h3>
                        <InquiryForm submitLabel="Send Inquiry" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
