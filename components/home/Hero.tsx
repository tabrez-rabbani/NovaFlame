"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { HeroScene } from '@/components/three/HeroScene';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export function Hero() {
    return (
        <section className="relative h-screen w-full overflow-hidden bg-black">
            {/* 3D Scene Background */}
            <HeroScene />

            {/* Content Overlay */}
            <div className="absolute inset-0 flex items-center z-10 container mx-auto px-4 md:px-6 lg:px-8 xl:px-12">
                <div className="max-w-2xl">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                    >
                        <span className="text-primary font-bold tracking-[0.3em] uppercase mb-4 block">
                            The Future of Dining
                        </span>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold text-white mb-6 leading-tight">
                            <span className="tracking-wide">Taste the</span> <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-white">
                                Extraordinary
                            </span>
                        </h1>
                        <p className="text-lg md:text-xl text-white/70 mb-8 max-w-lg leading-relaxed">
                            Experience a culinary journey where tradition meets innovation.
                            Immerse yourself in flavors that tell a story.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link href="/reservations">
                                <Button size="lg" className="w-full sm:w-auto">
                                    Reserve a Table <ArrowRight className="ml-2 w-4 h-4" />
                                </Button>
                            </Link>
                            <Link href="/menu">
                                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                                    View Menu
                                </Button>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white/50 flex flex-col items-center gap-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
            >
                <span className="text-xs uppercase tracking-widest">Scroll</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-white/50 to-transparent" />
            </motion.div>
        </section>
    );
}
