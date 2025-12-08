"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Award, Heart, Leaf, Sparkles } from 'lucide-react';

export default function AboutPage() {
    const values = [
        {
            icon: Leaf,
            title: 'Sustainability',
            desc: 'Zero-waste practices and ethical sourcing from local farms'
        },
        {
            icon: Sparkles,
            title: 'Innovation',
            desc: 'Blending molecular gastronomy with time-honored techniques'
        },
        {
            icon: Heart,
            title: 'Passion',
            desc: 'Every dish crafted with dedication and artistic vision'
        },
        {
            icon: Award,
            title: 'Excellence',
            desc: 'Michelin-level quality in every aspect of dining'
        },
    ];

    const milestones = [
        { year: '2010', event: 'NovaFlame Founded', desc: 'Our journey begins' },
        { year: '2015', event: 'First Michelin Star', desc: 'Recognition of excellence' },
        { year: '2020', event: 'Expansion & Renovation', desc: 'Modern luxury redesign' },
        { year: '2024', event: 'Culinary Innovation Award', desc: 'Industry leadership' },
    ];

    return (
        <div className="min-h-screen bg-black">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[150px]" />

                <div className="container mx-auto px-4 md:px-6 lg:px-8 xl:px-12 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center max-w-4xl mx-auto"
                    >
                        <div className="flex items-center justify-center gap-3 mb-6">
                            <div className="w-12 h-px bg-primary" />
                            <span className="text-primary text-sm tracking-[0.3em] uppercase">About Us</span>
                            <div className="w-12 h-px bg-primary" />
                        </div>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white mb-6 leading-tight">
                            Our Story
                        </h1>
                        <p className="text-xl md:text-2xl text-white/60 leading-relaxed">
                            Where culinary tradition meets futuristic innovation
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Story Section - Editorial Layout */}
            <section className="py-20 relative overflow-hidden">
                <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-[150px]" />

                <div className="container mx-auto px-4 md:px-6 lg:px-8 xl:px-12 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-7xl mx-auto">

                        {/* Left: Image */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative order-2 lg:order-1"
                        >
                            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                                <Image
                                    src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1200&auto=format&fit=crop"
                                    alt="Restaurant Interior"
                                    fill
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                            </div>
                        </motion.div>

                        {/* Right: Content */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="space-y-6 order-1 lg:order-2"
                        >
                            <h2 className="text-4xl md:text-5xl font-display font-bold text-white leading-tight">
                                A Vision of the <span className="text-primary italic">Future</span>
                            </h2>
                            <div className="space-y-4 text-white/60 md:text-white/70 text-base md:text-lg leading-relaxed">
                                <p>
                                    NovaFlame was born from a desire to reimagine the fine dining experience.
                                    We believe that food is not just sustenance, but an art form that should
                                    stimulate all senses.
                                </p>
                                <p>
                                    Our journey began in 2010, with a team of visionary chefs and designers
                                    coming together to create a space where culinary tradition meets futuristic
                                    innovation.
                                </p>
                                <p>
                                    Every dish is a masterpiece, crafted with precision using the finest
                                    ingredients sourced from sustainable farms. Our kitchen is a laboratory
                                    of flavors, constantly pushing the boundaries of what is possible.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Values Section - Flat Design */}
            <section className="py-20 bg-gradient-to-b from-black via-secondary/10 to-black">
                <div className="container mx-auto px-4 md:px-6 lg:px-8 xl:px-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
                            Our Philosophy
                        </h2>
                        <p className="text-white/60 text-lg">
                            The principles that guide every decision we make
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
                        {values.map((value, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="group text-center"
                            >
                                {/* Icon */}
                                <div className="mb-6 flex justify-center">
                                    <div className="w-16 h-16 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-500">
                                        <value.icon className="w-8 h-8 text-primary" strokeWidth={1.5} />
                                    </div>
                                </div>

                                {/* Title */}
                                <h3 className="text-2xl font-display font-semibold text-white mb-3">
                                    {value.title}
                                </h3>

                                {/* Description */}
                                <p className="text-white/60 leading-relaxed">
                                    {value.desc}
                                </p>

                                {/* Bottom line */}
                                <div className="mt-6 w-0 h-px bg-primary/50 mx-auto group-hover:w-full transition-all duration-700" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Timeline Section */}
            <section className="py-20 relative overflow-hidden">
                <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[150px]" />

                <div className="container mx-auto px-4 md:px-6 lg:px-8 xl:px-12 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
                            Our Journey
                        </h2>
                        <p className="text-white/60 text-lg">
                            Milestones that shaped NovaFlame
                        </p>
                    </motion.div>

                    <div className="max-w-4xl mx-auto">
                        {milestones.map((milestone, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="relative pl-8 md:pl-12 pb-12 border-l border-white/10 last:border-l-0 last:pb-0"
                            >
                                {/* Dot */}
                                <div className="absolute left-0 top-0 w-3 h-3 -translate-x-[7px] bg-primary rounded-full ring-4 ring-black" />

                                {/* Content */}
                                <div className="space-y-2">
                                    <span className="text-primary text-sm font-medium tracking-wider uppercase">
                                        {milestone.year}
                                    </span>
                                    <h3 className="text-2xl md:text-3xl font-display font-bold text-white">
                                        {milestone.event}
                                    </h3>
                                    <p className="text-white/60 text-lg">
                                        {milestone.desc}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
