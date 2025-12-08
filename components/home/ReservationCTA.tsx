"use client";

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function ReservationCTA() {
    return (
        <section className="relative pt-20 pb-32 md:pb-40 overflow-hidden bg-black">
            {/* Minimal Background - Just subtle glow */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/30 rounded-full blur-[200px]" />
            </div>

            {/* Single horizontal line */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

            <div className="container mx-auto px-4 md:px-6 lg:px-8 xl:px-12 relative z-10">
                <div className="max-w-5xl mx-auto">

                    {/* Pure Typography Layout - NO CARDS */}
                    <div className="text-center space-y-12">

                        {/* Eyebrow - Simple line */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="flex items-center justify-center gap-4"
                        >
                            <div className="w-16 h-px bg-primary/50" />
                            <span className="text-primary/80 text-sm tracking-[0.4em] uppercase font-light">
                                Join Us
                            </span>
                            <div className="w-16 h-px bg-primary/50" />
                        </motion.div>

                        {/* Giant Headline - Editorial */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="space-y-4"
                        >
                            <h2 className="text-6xl md:text-7xl lg:text-8xl font-display font-bold text-white leading-[0.95]">
                                Reserve
                                <br />
                                Your Table
                            </h2>
                            <p className="text-2xl md:text-3xl text-white/40 font-light italic">
                                Tonight
                            </p>
                        </motion.div>

                        {/* Single CTA Button - Centered */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <Link href="/reservations">
                                <Button
                                    size="lg"
                                    className="group bg-primary text-black hover:bg-primary/90 px-10 py-7 text-lg font-semibold"
                                >
                                    Book Now
                                    <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </Link>
                        </motion.div>

                        {/* Info - Pure Text, NO Cards */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="pt-12 space-y-6 border-t border-white/5"
                        >
                            {/* Opening Hours - Flat */}
                            <div className="space-y-2">
                                <p className="text-white/50 text-sm tracking-wider uppercase">
                                    Opening Hours
                                </p>
                                <p className="text-white/80 text-lg">
                                    Tuesday – Sunday, 6:00 PM – 11:00 PM
                                </p>
                            </div>

                            {/* Divider */}
                            <div className="w-12 h-px bg-white/10 mx-auto" />

                            {/* Note - Flat */}
                            <div className="space-y-2">
                                <p className="text-white/50 text-sm tracking-wider uppercase">
                                    Advance Booking Recommended
                                </p>
                                <p className="text-white/60 text-base max-w-md mx-auto leading-relaxed">
                                    For the best experience, reserve 2-3 days ahead.
                                    Walk-ins welcome based on availability.
                                </p>
                            </div>
                        </motion.div>

                        {/* Bottom Link - Minimal */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="pt-8"
                        >
                            <Link
                                href="/menu"
                                className="inline-flex items-center gap-2 text-white/40 hover:text-primary transition-colors text-sm tracking-wide group"
                            >
                                <span>View Our Menu</span>
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Bottom line */}
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        </section>
    );
}
