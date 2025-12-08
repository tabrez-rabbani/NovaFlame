"use client";

import { useState, useEffect } from 'react';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { testimonialsData } from '@/lib/testimonialsData';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import Image from 'next/image';

export function Testimonials() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    const next = () => setActiveIndex((prev) => (prev + 1) % testimonialsData.length);
    const prev = () => setActiveIndex((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);

    // Auto-play: 4 seconds interval
    useEffect(() => {
        if (isPaused) return;

        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % testimonialsData.length);
        }, 4000);

        return () => clearInterval(interval);
    }, [isPaused]);

    const activeTestimonial = testimonialsData[activeIndex];

    return (
        <section className="pt-16 pb-32 bg-gradient-to-b from-black via-secondary/20 to-black relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[150px]" />
            <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-[150px]" />

            <div className="container mx-auto px-4 md:px-6 lg:px-8 xl:px-12 relative z-10">
                <ScrollReveal mode="fade-up">
                    <SectionTitle title="Guest Experiences" subtitle="What People Say" center className="mb-20" />
                </ScrollReveal>

                <div
                    className="max-w-6xl mx-auto"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeIndex}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5 }}
                            className="relative"
                        >
                            {/* Unique Diagonal Split Layout */}
                            <div className="grid md:grid-cols-2 gap-8 items-center">
                                {/* Left: Image Section with Diagonal Cut */}
                                <ScrollReveal mode="slide-right" className="relative">
                                    <div className="relative h-[350px] md:h-[500px] group">
                                        {/* Diagonal background */}
                                        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent transform -skew-y-3 rounded-3xl" />

                                        {/* Image Container */}
                                        <div className="relative h-full flex items-center justify-center p-4 md:p-8">
                                            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/30 shadow-2xl group-hover:scale-105 transition-transform duration-700">
                                                <Image
                                                    src={activeTestimonial.image || ''}
                                                    alt={activeTestimonial.name}
                                                    fill
                                                    className="object-cover"
                                                    sizes="320px"
                                                />
                                                {/* Glow overlay */}
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                                            </div>

                                            {/* Floating Quote Icon */}
                                            <div className="absolute top-4 right-4 md:top-8 md:right-8 w-16 h-16 md:w-20 md:h-20 bg-primary/20 backdrop-blur-md rounded-full flex items-center justify-center border border-primary/30">
                                                <Quote className="w-8 h-8 md:w-10 md:h-10 text-primary" fill="currentColor" />
                                            </div>
                                        </div>
                                    </div>
                                </ScrollReveal>

                                {/* Right: Content Section */}
                                <ScrollReveal mode="fade-up" delay={0.2} className="space-y-6">
                                    {/* Stars */}
                                    <div className="flex gap-1">
                                        {[...Array(5)].map((_, i) => (
                                            <Star
                                                key={i}
                                                className={`w-6 h-6 ${i < activeTestimonial.rating ? 'text-primary fill-primary' : 'text-gray-600'
                                                    }`}
                                            />
                                        ))}
                                    </div>

                                    {/* Quote */}
                                    <p className="text-lg md:text-2xl lg:text-3xl font-light text-white/90 leading-relaxed italic">
                                        "{activeTestimonial.comment}"
                                    </p>

                                    {/* Author Info */}
                                    <div className="pt-6 border-t border-white/10">
                                        <h4 className="text-xl md:text-2xl font-display font-bold text-white mb-1">
                                            {activeTestimonial.name}
                                        </h4>
                                        <p className="text-primary text-sm font-medium tracking-wider uppercase">
                                            {activeTestimonial.role}
                                        </p>
                                        {activeTestimonial.location && (
                                            <p className="text-white/40 text-sm mt-1">
                                                {activeTestimonial.location}
                                            </p>
                                        )}
                                    </div>
                                </ScrollReveal>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Navigation */}
                    <div className="flex items-center justify-center gap-8 mt-16">
                        <button
                            onClick={prev}
                            className="w-14 h-14 rounded-full border border-primary/30 flex items-center justify-center hover:bg-primary/10 hover:border-primary transition-all group"
                            aria-label="Previous testimonial"
                        >
                            <ChevronLeft className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                        </button>

                        {/* Dots */}
                        <div className="flex gap-3">
                            {testimonialsData.map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setActiveIndex(idx)}
                                    className={`h-2 rounded-full transition-all ${idx === activeIndex ? 'w-12 bg-primary' : 'w-2 bg-white/20 hover:bg-white/40'
                                        }`}
                                    aria-label={`Go to testimonial ${idx + 1}`}
                                />
                            ))}
                        </div>

                        <button
                            onClick={next}
                            className="w-14 h-14 rounded-full border border-primary/30 flex items-center justify-center hover:bg-primary/10 hover:border-primary transition-all group"
                            aria-label="Next testimonial"
                        >
                            <ChevronRight className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
