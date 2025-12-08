"use client";

import { useEffect, useState, useRef } from 'react';
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';

function AnimatedCounter({ value, suffix = '' }: { value: number; suffix?: string }) {
    const ref = useRef<HTMLSpanElement>(null);
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { duration: 3000 });
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [displayValue, setDisplayValue] = useState(0);

    useEffect(() => {
        if (isInView) {
            motionValue.set(value);
        }
    }, [isInView, motionValue, value]);

    useEffect(() => {
        springValue.on("change", (latest) => {
            setDisplayValue(Math.floor(latest));
        });
    }, [springValue]);

    return <span ref={ref}>{displayValue.toLocaleString()}{suffix}</span>;
}

export function Stats() {
    const stats = [
        { value: 15, suffix: '+', label: 'Years', sublabel: 'of Excellence' },
        { value: 5000, suffix: '+', label: 'Happy', sublabel: 'Guests' },
        { value: 75, suffix: '+', label: 'Awards', sublabel: 'Won' },
        { value: 4.9, suffix: '/5', label: 'Guest', sublabel: 'Rating' },
    ];

    return (
        <section className="relative py-24 md:py-32 overflow-hidden bg-black">
            {/* Minimal Background */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

            <div className="container mx-auto px-4 md:px-6 lg:px-8 xl:px-12 relative z-10">
                {/* Editorial Layout - Asymmetric */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

                    {/* Left: Large Statement */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:col-span-5"
                    >
                        <div className="space-y-6">
                            {/* Small eyebrow */}
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-px bg-primary" />
                                <span className="text-primary text-sm font-medium tracking-[0.3em] uppercase">
                                    Since 2010
                                </span>
                            </div>

                            {/* Large Headline */}
                            <h2 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white leading-[0.9]">
                                Crafting
                                <br />
                                <span className="text-primary italic">Memories</span>
                            </h2>

                            {/* Body Text */}
                            <p className="text-lg md:text-xl text-white/60 leading-relaxed max-w-md">
                                Every dish tells a story. Every guest becomes family.
                                This is our legacy of culinary excellence.
                            </p>
                        </div>
                    </motion.div>

                    {/* Right: Stats Grid - Flat, Minimal */}
                    <div className="lg:col-span-7">
                        <div className="grid grid-cols-2 gap-8 md:gap-12">
                            {stats.map((stat, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    className="group relative"
                                >
                                    {/* Vertical Line Accent */}
                                    <div className="absolute left-0 top-0 w-px h-0 bg-primary group-hover:h-full transition-all duration-700" />

                                    <div className="pl-4 md:pl-6 lg:pl-8">
                                        {/* Big Number */}
                                        <div className="mb-3">
                                            <h3 className="text-4xl md:text-7xl lg:text-8xl font-display font-bold text-white/10 group-hover:text-white/20 transition-colors duration-500 leading-none">
                                                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                                            </h3>
                                        </div>

                                        {/* Label - Stacked */}
                                        <div className="space-y-1">
                                            <p className="text-xl md:text-2xl font-display font-medium text-white">
                                                {stat.label}
                                            </p>
                                            <p className="text-sm md:text-base text-white/50 tracking-wide">
                                                {stat.sublabel}
                                            </p>
                                        </div>

                                        {/* Horizontal line under */}
                                        <div className="mt-4 w-0 h-px bg-primary/50 group-hover:w-full transition-all duration-700" />
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom Quote - Editorial Touch */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="mt-20 lg:mt-32 text-center"
                >
                    <p className="text-white/40 text-sm md:text-base font-light italic tracking-wide">
                        "Where passion meets perfection on every plate"
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
