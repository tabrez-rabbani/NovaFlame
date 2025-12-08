"use client";

import { useState } from 'react';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { Card } from '@/components/ui/Card';
import { menuData } from '@/lib/menuData';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils'; // Assuming you have a cn utility

const categories = ['All', 'Starters', 'Mains', 'Desserts', 'Beverages'];

export default function MenuPage() {
    const [activeCategory, setActiveCategory] = useState('All');

    const filteredItems = activeCategory === 'All'
        ? menuData
        : menuData.filter(item => item.category === activeCategory);

    return (
        <div className="min-h-screen pt-24 pb-12 bg-background relative">
            <div className="fixed inset-0 bg-[url('https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-5 pointer-events-none" />
            <div className="container mx-auto px-4 md:px-6 lg:px-8 xl:px-12 relative z-10">
                <div className="text-center mb-12 md:mb-16">
                    <h1 className="text-4xl md:text-7xl font-bold text-white mb-4 md:mb-6">Our Menu</h1>
                    <p className="text-base md:text-xl text-white/60 max-w-2xl mx-auto">
                        A curated selection of flavours prepared with passion and precision.
                    </p>
                </div>

                {/* Category Tabs */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={cn(
                                "px-6 py-2 rounded-full text-sm uppercase tracking-widest transition-all duration-300 border border-transparent",
                                activeCategory === cat
                                    ? "bg-primary text-black font-bold"
                                    : "bg-white/5 text-white hover:bg-white/10 hover:border-white/20"
                            )}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Menu Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 max-w-5xl mx-auto"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredItems.map((item) => (
                            <motion.div
                                key={item.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="flex justify-between items-baseline mb-2 group cursor-default">
                                    <h3 className="text-lg md:text-2xl font-bold text-white group-hover:text-primary transition-colors">
                                        {item.name}
                                    </h3>
                                    <div className="flex-grow mx-2 md:mx-4 border-b border-white/10 border-dotted opacity-50 relative top-[-6px]" />
                                    <span className="text-lg md:text-xl font-semibold text-primary">{item.price}</span>
                                </div>
                                <div className="flex items-start gap-2">
                                    <p className="text-white/50 md:text-white/60 text-sm md:text-base leading-relaxed flex-grow">
                                        {item.description}
                                    </p>
                                    <span className={cn(
                                        "text-[10px] uppercase px-1.5 py-0.5 rounded border opacity-50 mt-1",
                                        item.isVeg ? "border-green-500 text-green-500" : "border-red-500 text-red-500"
                                    )}>
                                        {item.isVeg ? 'VEG' : 'NV'}
                                    </span>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {filteredItems.length === 0 && (
                    <div className="text-center text-white/40 py-12">
                        No items found in this category.
                    </div>
                )}
            </div>
        </div>
    );
}
