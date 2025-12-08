import { ContactForm } from '@/components/forms/ContactForm';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function ContactPage() {
    return (
        <div className="min-h-screen pt-24 pb-12 bg-background">
            <div className="container mx-auto px-4 md:px-6 lg:px-8 xl:px-12">
                <div className="text-center mb-12 md:mb-16">
                    <h1 className="text-4xl md:text-7xl font-bold text-white mb-4 md:mb-6">Contact Us</h1>
                    <p className="text-base md:text-xl text-white/60 max-w-2xl mx-auto">
                        Have a question or special request? We're here to help.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24 max-w-6xl mx-auto">
                    {/* Contact Info */}
                    <div className="space-y-8">
                        <div className="flex items-start gap-4">
                            <div className="bg-primary/20 p-3 rounded-full">
                                <MapPin className="w-6 h-6 text-primary" />
                            </div>
                            <div>
                                <h3 className="text-lg md:text-xl font-bold text-white mb-2">Visit Us</h3>
                                <p className="text-white/50 md:text-white/60 text-sm md:text-base leading-relaxed">
                                    123 Culinary Avenue, <br />
                                    Metro City, District 1
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="bg-primary/20 p-3 rounded-full">
                                <ContactFormIcon />
                            </div>
                            <div>
                                <h3 className="text-lg md:text-xl font-bold text-white mb-2">Get in Touch</h3>
                                <p className="text-white/50 md:text-white/60 text-sm md:text-base mb-1">+91 98765 43210</p>
                                <p className="text-white/50 md:text-white/60 text-sm md:text-base">reservations@novaflame.com</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="bg-primary/20 p-3 rounded-full">
                                <Clock className="w-6 h-6 text-primary" />
                            </div>
                            <div>
                                <h3 className="text-lg md:text-xl font-bold text-white mb-2">Opening Hours</h3>
                                <div className="space-y-2 md:grid md:grid-cols-2 md:gap-8 md:space-y-0 text-white/50 md:text-white/60 text-sm md:text-base">
                                    <div>
                                        <span className="block text-white mb-1">Mon - Thu</span>
                                        5:00 PM - 11:00 PM
                                    </div>
                                    <div>
                                        <span className="block text-white mb-1">Fri - Sat</span>
                                        5:00 PM - 1:00 AM
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Form */}
                    <div>
                        <ContactForm />
                    </div>
                </div>

                {/* Map Placeholder */}
                <div className="w-full h-96 bg-gray-900 rounded-xl overflow-hidden relative grayscale hover:grayscale-0 transition-all duration-500">
                    {/* Integrating Google Maps Embed would go here. Using a placeholder or iframe. */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-white/20 font-bold text-2xl">Google Maps Embed Placeholder</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

function ContactFormIcon() {
    return <Phone className="w-6 h-6 text-primary" />
}
