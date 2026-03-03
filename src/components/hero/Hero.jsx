import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Hero() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start start', 'end start'],
    });

    const y1 = useTransform(scrollYProgress, [0, 1], [0, -150]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, -250]);
    const y3 = useTransform(scrollYProgress, [0, 1], [0, -100]);
    const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

    return (
        <section
            ref={ref}
            id="home"
            className="relative min-h-screen flex items-center justify-center overflow-hidden"
        >
            {/* Gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary via-surface to-primary" />

            {/* Animated grid pattern */}
            <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: `linear-gradient(rgba(212,255,0,0.3) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(212,255,0,0.3) 1px, transparent 1px)`,
                    backgroundSize: '60px 60px',
                }}
            />

            {/* Floating product images — anti-gravity effect */}
            <motion.div
                style={{ y: y1 }}
                className="absolute top-[15%] left-[5%] sm:left-[10%] w-32 sm:w-48 h-40 sm:h-60 rounded-2xl overflow-hidden opacity-20 sm:opacity-30 rotate-[-8deg]"
            >
                <img
                    src="https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&q=80"
                    alt=""
                    className="w-full h-full object-cover"
                />
            </motion.div>

            <motion.div
                style={{ y: y2 }}
                className="absolute top-[25%] right-[5%] sm:right-[8%] w-36 sm:w-56 h-44 sm:h-72 rounded-2xl overflow-hidden opacity-20 sm:opacity-25 rotate-[6deg]"
            >
                <img
                    src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&q=80"
                    alt=""
                    className="w-full h-full object-cover"
                />
            </motion.div>

            <motion.div
                style={{ y: y3 }}
                className="absolute bottom-[20%] left-[15%] sm:left-[20%] w-28 sm:w-40 h-36 sm:h-52 rounded-2xl overflow-hidden opacity-15 sm:opacity-20 rotate-[12deg]"
            >
                <img
                    src="https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&q=80"
                    alt=""
                    className="w-full h-full object-cover"
                />
            </motion.div>

            {/* Glowing orbs */}
            <motion.div
                style={{ y: y1 }}
                className="absolute top-[30%] right-[30%] w-72 h-72 bg-accent/5 rounded-full blur-[120px]"
            />
            <motion.div
                style={{ y: y2 }}
                className="absolute bottom-[20%] left-[20%] w-96 h-96 bg-accent/3 rounded-full blur-[150px]"
            />

            {/* Main content */}
            <motion.div
                style={{ opacity, scale }}
                className="relative z-10 text-center px-4 max-w-5xl mx-auto"
            >
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <span className="inline-block px-4 py-1.5 text-xs uppercase tracking-[0.3em] text-accent border border-accent/30 rounded-full mb-8 backdrop-blur-sm">
                        New Collection 2026
                    </span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-5xl sm:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tighter leading-[0.9]"
                >
                    <span className="block">DEFY</span>
                    <span className="block text-accent">GRAVITY</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="mt-6 sm:mt-8 text-base sm:text-lg text-text-muted max-w-xl mx-auto leading-relaxed"
                >
                    Premium streetwear that moves with you. Crafted for those who refuse to stay grounded.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <a
                        href="#shop"
                        className="group relative px-8 py-4 bg-accent text-primary font-semibold uppercase tracking-widest text-sm rounded-full overflow-hidden transition-transform duration-300 hover:scale-105"
                    >
                        <span className="relative z-10">Shop Now</span>
                        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                    </a>
                    <a
                        href="#collections"
                        className="px-8 py-4 border border-white/10 text-text font-semibold uppercase tracking-widest text-sm rounded-full hover:border-accent/50 hover:text-accent transition-all duration-300"
                    >
                        Explore
                    </a>
                </motion.div>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <span className="text-[10px] uppercase tracking-[0.3em] text-text-muted">Scroll</span>
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="w-5 h-8 border border-white/20 rounded-full flex justify-center pt-1.5"
                >
                    <div className="w-1 h-1.5 bg-accent rounded-full" />
                </motion.div>
            </motion.div>
        </section>
    );
}
