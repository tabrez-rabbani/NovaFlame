"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Award, Star } from 'lucide-react';

export function ChefStory() {
    const credentials = [
        { icon: Award, text: 'Michelin Star Chef' },
        { icon: Star, text: 'Best Chef 2023' },
        { icon: Award, text: 'Culinary Excellence Award' },
    ];

    return (
        <section className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-b from-black via-secondary/10 to-black">
            {/* Decorative Elements */}
            <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[150px]" />

            <div className="container mx-auto px-4 md:px-6 lg:px-8 xl:px-12 relative z-10">

                {/* Split Layout - Image Left, Content Right */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* Left: Large Editorial Photo */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative order-2 lg:order-1"
                    >
                        {/* Main Photo */}
                        <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
                            <Image
                                src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=1000&auto=format&fit=crop"
                                alt="Executive Chef"
                                fill
                                sizes="(max-width: 1024px) 100vw, 50vw"
                                className="object-cover"
                                priority
                            />
                            {/* Dark gradient overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                            {/* Floating accent box */}
                            <div className="absolute bottom-8 left-8 right-8 bg-black/80 backdrop-blur-md border border-primary/30 rounded-xl p-6">
                                <p className="text-white/90 text-sm md:text-base italic leading-relaxed">
                                    "Cooking is not just about ingredients. It's about passion, precision, and creating moments that last forever."
                                </p>
                            </div>
                        </div>

                        {/* Decorative line */}
                        <div className="absolute -bottom-4 -right-4 w-32 h-32 border-r-2 border-b-2 border-primary/20 rounded-br-3xl -z-10" />
                    </motion.div>

                    {/* Right: Story Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="space-y-8 order-1 lg:order-2"
                    >
                        {/* Eyebrow */}
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-px bg-primary" />
                            <span className="text-primary text-sm font-medium tracking-[0.3em] uppercase">
                                Meet the Maestro
                            </span>
                        </div>

                        {/* Headline */}
                        <div className="space-y-4">
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white leading-tight">
                                Chef Arjun Mehta
                            </h2>
                            <p className="text-xl md:text-2xl text-primary font-light italic">
                                Executive Chef & Founder
                            </p>
                        </div>

                        {/* Story */}
                        <div className="space-y-4 text-white/70 text-base md:text-lg leading-relaxed">
                            <p>
                                With over 15 years of culinary expertise spanning three continents,
                                Chef Arjun brings a unique fusion of traditional techniques and
                                modern innovation to every dish.
                            </p>
                            <p>
                                Trained under Michelin-starred chefs in Paris and Tokyo, his
                                philosophy centers on sourcing the finest local ingredients and
                                transforming them into unforgettable culinary experiences.
                            </p>
                        </div>

                        {/* Credentials - Flat List */}
                        <div className="space-y-3 pt-4">
                            {credentials.map((cred, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                                    className="flex items-center gap-3 group"
                                >
                                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                                        <cred.icon className="w-4 h-4 text-primary" strokeWidth={2} />
                                    </div>
                                    <span className="text-white/80 text-sm md:text-base font-medium">
                                        {cred.text}
                                    </span>
                                </motion.div>
                            ))}
                        </div>

                        {/* Signature */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="pt-6 border-t border-white/10"
                        >
                            <div className="relative w-48 h-16">
                                {/* Signature SVG/Image - Using text for now */}
                                <div className="text-4xl font-display italic text-primary/80">
                                    Arjun Mehta
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Bottom Decorative Quote */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="mt-20 text-center"
                >
                    <div className="inline-block relative">
                        <div className="absolute -top-4 -left-4 text-6xl text-primary/10 font-serif">"</div>
                        <p className="text-white/50 text-lg md:text-xl font-light italic max-w-3xl px-8">
                            Every plate is a canvas. Every ingredient tells a story.
                            This is my art, my passion, my legacy.
                        </p>
                        <div className="absolute -bottom-4 -right-4 text-6xl text-primary/10 font-serif">"</div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
