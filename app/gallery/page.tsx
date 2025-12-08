"use client";

import { useState } from 'react';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { galleryData } from '@/lib/galleryData';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import Image from 'next/image';

export default function GalleryPage() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    return (
        <div className="min-h-screen pt-24 pb-12 bg-background relative">
            <div className="container mx-auto px-4 md:px-6 lg:px-8 xl:px-12">
                <div className="text-center mb-12">
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">Gallery</h1>
                    <p className="text-xl text-white/60 max-w-2xl mx-auto">
                        A visual journey through our ambience and culinary creations.
                    </p>
                </div>

                {/* Masonry Grid using standard Columns for simplicity */}
                <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
                    {galleryData.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className="break-inside-avoid relative group cursor-pointer rounded-xl overflow-hidden"
                            onClick={() => setSelectedImage(item.src)}
                        >
                            {/* Optimized Next.js Image */}
                            <div className="relative w-full aspect-[4/3]">
                                <Image
                                    src={item.src}
                                    alt={item.alt}
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                            </div>
                            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                                <span className="text-white text-lg font-medium tracking-wider uppercase border-b border-primary">
                                    {item.category}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[60] bg-black/95 flex items-center justify-center p-4"
                        onClick={() => setSelectedImage(null)}
                    >
                        <button
                            className="absolute top-4 right-4 text-white hover:text-primary transition-colors p-2"
                            onClick={() => setSelectedImage(null)}
                        >
                            <X className="w-8 h-8" />
                        </button>
                        <motion.img
                            src={selectedImage}
                            alt="Enlarged view"
                            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
                            initial={{ scale: 0.9 }}
                            animate={{ scale: 1 }}
                            onClick={(e) => e.stopPropagation()}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
