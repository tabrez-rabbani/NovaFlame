"use client";

import { motion, useInView, UseInViewOptions } from "framer-motion";
import { useRef } from "react";

interface ScrollRevealProps {
    children: React.ReactNode;
    width?: "fit-content" | "100%";
    mode?: "fade-up" | "fade-in" | "slide-right" | "zoom-in";
    delay?: number;
    duration?: number;
    className?: string;
    viewportOptions?: UseInViewOptions;
}

export function ScrollReveal({
    children,
    width = "100%",
    mode = "fade-up",
    delay = 0,
    duration = 0.8,
    className = "",
    viewportOptions = { once: true, margin: "-100px" }
}: ScrollRevealProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, viewportOptions);

    const getVariants = () => {
        switch (mode) {
            case "fade-up":
                return {
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0 }
                };
            case "slide-right":
                return {
                    hidden: { opacity: 0, x: -75 },
                    visible: { opacity: 1, x: 0 }
                };
            case "zoom-in":
                return {
                    hidden: { opacity: 0, scale: 0.8 },
                    visible: { opacity: 1, scale: 1 }
                };
            case "fade-in":
            default:
                return {
                    hidden: { opacity: 0 },
                    visible: { opacity: 1 }
                };
        }
    };

    return (
        <div ref={ref} style={{ width }} className={className}>
            <motion.div
                variants={getVariants()}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }} // Bezier for "premium" smooth feel
            >
                {children}
            </motion.div>
        </div>
    );
}
