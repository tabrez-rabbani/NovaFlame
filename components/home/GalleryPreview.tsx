"use client";

import { SectionTitle } from '@/components/ui/SectionTitle';
import { Button } from '@/components/ui/Button';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { galleryData } from '@/lib/galleryData';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Eye, ArrowRight } from 'lucide-react';

export function GalleryPreview() {
    const images = galleryData.slice(0, 6); // Using 6 images for better Bento layout

    return (
        <section className="py-20 bg-gradient-to-b from-black to-secondary/20 relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-1/3 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[150px]" />

            <div className="container mx-auto px-4 md:px-6 lg:px-8 xl:px-12 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16">
                    <ScrollReveal mode="slide-right">
                        <SectionTitle
                            title="Visual Journey"
                            subtitle="Moments & Memories"
                            center={false}
                            className="mb-0"
                        />
                    </ScrollReveal>
                    <ScrollReveal mode="fade-in" delay={0.2} className="hidden md:block">
                        <Link href="/gallery">
                            <Button variant="outline" className="group">
                                Explore Gallery
                                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </Link>
                    </ScrollReveal>
                </div>

                {/* Bento Grid Layout */}
                <div className="grid grid-cols-4 md:grid-cols-8 gap-4 mb-12">
                    {/* Large Hero Image - Takes 2x2 on mobile, 4x2 on desktop */}
                    <ScrollReveal
                        mode="fade-up"
                        className="col-span-4 row-span-2 relative group overflow-hidden rounded-2xl"
                    >
                        <motion.div
                            className="relative h-[400px] md:h-[500px]"
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                        >
                            <Image
                                src={images[0]?.src || ''}
                                alt={images[0]?.alt || ''}
                                fill
                                sizes="(max-width: 768px) 100vw, 50vw"
                                className="object-cover"
                                priority
                            />
                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />

                            {/* Content Overlay */}
                            <div className="absolute inset-0 p-8 flex flex-col justify-end">
                                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    <span className="inline-block px-4 py-1.5 bg-primary/90 backdrop-blur-sm text-black text-xs font-bold tracking-wider uppercase rounded-full mb-3">
                                        {images[0]?.category}
                                    </span>
                                    <div className="flex items-center gap-2 text-white/80 group-hover:text-white transition-colors">
                                        <Eye className="w-4 h-4" />
                                        <span className="text-sm font-medium">View Details</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </ScrollReveal>

                    {/* Medium Image 1 - Top Right */}
                    <ScrollReveal
                        mode="fade-up"
                        delay={0.1}
                        className="col-span-2 md:col-span-4 row-span-1 relative group overflow-hidden rounded-2xl"
                    >
                        <motion.div
                            className="relative h-[200px] md:h-[240px]"
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                        >
                            <Image
                                src={images[1]?.src || ''}
                                alt={images[1]?.alt || ''}
                                fill
                                sizes="(max-width: 768px) 50vw, 33vw"
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                                <span className="text-white font-display text-lg tracking-wider border-b-2 border-primary pb-1">
                                    {images[1]?.category}
                                </span>
                            </div>
                        </motion.div>
                    </ScrollReveal>

                    {/* Small Image 1 */}
                    <ScrollReveal
                        mode="fade-up"
                        delay={0.15}
                        className="col-span-2 md:col-span-2 row-span-1 relative group overflow-hidden rounded-2xl"
                    >
                        <motion.div
                            className="relative h-[200px] md:h-[240px]"
                            whileHover={{ scale: 1.05, rotate: 1 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                        >
                            <Image
                                src={images[2]?.src || ''}
                                alt={images[2]?.alt || ''}
                                fill
                                sizes="(max-width: 768px) 50vw, 25vw"
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <div className="absolute bottom-3 left-3 right-3">
                                <span className="inline-block px-3 py-1 bg-black/70 backdrop-blur-sm text-white text-xs font-medium rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    {images[2]?.category}
                                </span>
                            </div>
                        </motion.div>
                    </ScrollReveal>

                    {/* Small Image 2 */}
                    <ScrollReveal
                        mode="fade-up"
                        delay={0.2}
                        className="col-span-2 md:col-span-2 row-span-1 relative group overflow-hidden rounded-2xl"
                    >
                        <motion.div
                            className="relative h-[200px] md:h-[240px]"
                            whileHover={{ scale: 1.05, rotate: -1 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                        >
                            <Image
                                src={images[3]?.src || ''}
                                alt={images[3]?.alt || ''}
                                fill
                                sizes="(max-width: 768px) 50vw, 25vw"
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-bl from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <div className="absolute bottom-3 left-3 right-3">
                                <span className="inline-block px-3 py-1 bg-black/70 backdrop-blur-sm text-white text-xs font-medium rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    {images[3]?.category}
                                </span>
                            </div>
                        </motion.div>
                    </ScrollReveal>

                    {/* Medium Image 2 - Bottom */}
                    {images[4] && (
                        <ScrollReveal
                            mode="fade-up"
                            delay={0.25}
                            className="col-span-4 md:col-span-4 row-span-1 relative group overflow-hidden rounded-2xl hidden md:block"
                        >
                            <motion.div
                                className="relative h-[240px]"
                                whileHover={{ scale: 1.02 }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                            >
                                <Image
                                    src={images[4]?.src || ''}
                                    alt={images[4]?.alt || ''}
                                    fill
                                    sizes="50vw"
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                                    <span className="text-white font-display text-lg tracking-wider border-b-2 border-primary pb-1">
                                        {images[4]?.category}
                                    </span>
                                </div>
                            </motion.div>
                        </ScrollReveal>
                    )}

                    {/* Small Image 3 - Bottom Right */}
                    {images[5] && (
                        <ScrollReveal
                            mode="fade-up"
                            delay={0.3}
                            className="col-span-4 md:col-span-4 row-span-1 relative group overflow-hidden rounded-2xl hidden md:block"
                        >
                            <motion.div
                                className="relative h-[240px]"
                                whileHover={{ scale: 1.02 }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                            >
                                <Image
                                    src={images[5]?.src || ''}
                                    alt={images[5]?.alt || ''}
                                    fill
                                    sizes="50vw"
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                                    <span className="text-white font-display text-lg tracking-wider border-b-2 border-primary pb-1">
                                        {images[5]?.category}
                                    </span>
                                </div>
                            </motion.div>
                        </ScrollReveal>
                    )}
                </div>

                {/* Mobile CTA */}
                <div className="text-center md:hidden mt-8">
                    <Link href="/gallery">
                        <Button variant="outline" className="group">
                            Explore Gallery
                            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    );
}
