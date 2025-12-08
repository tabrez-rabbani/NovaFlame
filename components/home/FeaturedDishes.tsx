"use client";

import { SectionTitle } from '@/components/ui/SectionTitle';
import { Button } from '@/components/ui/Button';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { menuData } from '@/lib/menuData';
import Link from 'next/link';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { MouseEvent } from 'react';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

function PremiumDishCard({ item, index }: { item: typeof menuData[0]; index: number }) {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    // Helper to get demo images
    const getDishImage = (i: number) => {
        const images = [
            "https://images.unsplash.com/photo-1541529086526-db283c563270?q=80&w=1000&auto=format&fit=crop", // Clean Arancini/Starter
            "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1000&auto=format&fit=crop", // BBQ/Main
            "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1000&auto=format&fit=crop", // Salad/Bowl
            "https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=1000&auto=format&fit=crop"  // Curry/Indian
        ];
        return images[i % images.length];
    };

    return (
        <ScrollReveal mode="fade-up" delay={index * 0.15}>
            <div
                className="group relative h-[400px] w-full overflow-hidden rounded-2xl border border-white/10 bg-black/40 shadow-2xl"
                onMouseMove={handleMouseMove}
            >
                {/* Spotlight - Subtle now */}
                <motion.div
                    className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100 z-10"
                    style={{
                        background: useMotionTemplate`
              radial-gradient(
                400px circle at ${mouseX}px ${mouseY}px,
                rgba(255, 255, 255, 0.08),
                transparent 80%
              )
            `,
                    }}
                />

                {/* Full Background Image with Scale Effect */}
                <div className="absolute inset-0 z-0">
                    <motion.div
                        className="w-full h-full"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                    >
                        <Image
                            src={getDishImage(index)}
                            alt={item.name}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                            className="object-cover transition-all duration-500 opacity-90 group-hover:opacity-100"
                            priority={index < 4}
                        />
                    </motion.div>
                    {/* Gradient Overlay: Transparent top -> Black bottom (for text legibility) */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent/20 opacity-90" />
                </div>

                {/* Content Overlay */}
                <div className="absolute inset-0 p-5 flex flex-col justify-end z-20">
                    {/* Top Badge */}
                    <div className="absolute top-4 right-4 translate-y-[-10px] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                        <span className="px-3 py-1 bg-white/10 backdrop-blur-md text-white text-[10px] tracking-[0.2em] uppercase border border-white/20 rounded-full shadow-lg">
                            {item.category}
                        </span>
                    </div>

                    {/* Main Content */}
                    <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500 relative">
                        <div className="flex items-end justify-between mb-2 border-b border-white/10 pb-2">
                            <h3 className="text-xl font-display font-medium text-white group-hover:text-primary transition-colors duration-300 truncate mr-2">
                                {item.name}
                            </h3>
                            <span className="text-base font-bold text-primary italic whitespace-nowrap">
                                {item.price}
                            </span>
                        </div>

                        {/* Description - Ensure no clipping by using height constraints if needed or line clamp */}
                        <p className="text-gray-300 text-xs leading-[1.6] mb-3 line-clamp-2 min-h-[3em]">
                            {item.description}
                        </p>

                        <div className="flex items-center justify-between mt-1 opacity-80 group-hover:opacity-100 transition-opacity">
                            <span className={cn(
                                "text-[10px] tracking-widest uppercase font-medium border px-2 py-0.5 rounded",
                                item.isVeg ? "border-green-500/50 text-green-400" : "border-red-500/50 text-red-400"
                            )}>
                                {item.isVeg ? 'Veg' : 'Non-Veg'}
                            </span>

                            <div className="flex items-center text-white text-[10px] font-bold tracking-widest uppercase group-hover:text-primary transition-colors cursor-pointer">
                                View
                                <ArrowRight className="w-3 h-3 ml-2 group-hover:translate-x-1 transition-transform" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </ScrollReveal>
    );
}

export function FeaturedDishes() {
    const featuredItems = menuData.slice(0, 4);

    return (
        <section className="pt-16 pb-32 relative bg-black overflow-hidden">
            {/* Background Ambience - Reduced intensity */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[150px] pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-900/5 rounded-full blur-[150px] pointer-events-none" />

            <div className="container mx-auto px-4 md:px-6 lg:px-8 xl:px-12 relative z-10">
                <ScrollReveal mode="fade-up">
                    <SectionTitle
                        title="Culinary Masterpieces"
                        subtitle="A Symphony of Flavors"
                        center
                        className="mb-16"
                    />
                </ScrollReveal>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    {featuredItems.map((item, index) => (
                        <PremiumDishCard key={item.id} item={item} index={index} />
                    ))}
                </div>

                <div className="text-center">
                    <ScrollReveal mode="fade-in" delay={0.4}>
                        <Link href="/menu">
                            <Button variant="outline" size="lg" className="border-primary/50 text-primary hover:bg-primary hover:text-black">
                                View Full Menu
                            </Button>
                        </Link>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
}
