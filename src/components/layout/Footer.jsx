import { motion } from 'framer-motion';

export default function Footer() {
    return (
        <footer className="bg-primary border-t border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
                    {/* Brand */}
                    <div className="md:col-span-1">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center">
                                <span className="text-primary font-bold text-sm">VS</span>
                            </div>
                            <span className="text-xl font-bold tracking-wider">
                                VOID<span className="text-accent">STREET</span>
                            </span>
                        </div>
                        <p className="text-text-muted text-sm leading-relaxed">
                            Premium streetwear for those who move against the current. Designed for the bold.
                        </p>
                    </div>

                    {/* Links */}
                    {[
                        { title: 'Shop', items: ['New Arrivals', 'T-Shirts', 'Hoodies', 'Jackets', 'Accessories'] },
                        { title: 'Company', items: ['About Us', 'Careers', 'Press', 'Sustainability'] },
                        { title: 'Support', items: ['Contact', 'Shipping', 'Returns', 'Size Guide'] },
                    ].map((col) => (
                        <div key={col.title}>
                            <h4 className="text-sm font-semibold uppercase tracking-widest text-accent mb-4">
                                {col.title}
                            </h4>
                            <ul className="space-y-2">
                                {col.items.map((item) => (
                                    <li key={item}>
                                        <a
                                            href="#"
                                            className="text-sm text-text-muted hover:text-text transition-colors duration-300"
                                        >
                                            {item}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom bar */}
                <div className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-xs text-text-muted">
                        © 2026 VOIDSTREET. All rights reserved.
                    </p>
                    <div className="flex items-center gap-6">
                        {['Instagram', 'Twitter', 'TikTok'].map((social) => (
                            <motion.a
                                key={social}
                                href="#"
                                whileHover={{ y: -2 }}
                                className="text-xs text-text-muted hover:text-accent uppercase tracking-widest transition-colors duration-300"
                            >
                                {social}
                            </motion.a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
