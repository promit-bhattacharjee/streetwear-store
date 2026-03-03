import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import useCartStore from '../../store/cartStore';
import useAuthStore from '../../store/authStore';

export default function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const toggleCart = useCartStore((s) => s.toggleCart);
    const items = useCartStore((s) => s.items);
    const totalItems = items.reduce((sum, i) => sum + i.quantity, 0);

    const { isAuthenticated, user } = useAuthStore();

    const links = [
        { name: 'Home', path: '/' },
        { name: 'Collections', path: '/collections' },
        { name: 'About', path: '/about' },
        { name: 'Contact', path: '/contact' }
    ];

    return (
        <motion.nav
            initial={{ y: -80 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-primary/70 border-b border-white/5"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 sm:h-20">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-2 group">
                        <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center">
                            <span className="text-primary font-bold text-sm">VS</span>
                        </div>
                        <span className="text-lg sm:text-xl font-bold tracking-wider text-text group-hover:text-accent transition-colors duration-300">
                            VOID<span className="text-accent">STREET</span>
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-8">
                        {links.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className="text-sm uppercase tracking-widest text-text-muted hover:text-accent transition-colors duration-300 relative group"
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
                            </Link>
                        ))}
                    </div>

                    {/* Right side */}
                    <div className="flex items-center gap-4">
                        {/* Auth link */}
                        <Link
                            to={isAuthenticated ? "/profile" : "/login"}
                            className="p-2 text-text-muted hover:text-accent transition-colors duration-300 flex items-center gap-2"
                        >
                            {isAuthenticated ? (
                                <div className="w-8 h-8 rounded-full overflow-hidden border border-accent/20">
                                    <img src={user?.avatar} alt="Profile" className="w-full h-full object-cover" />
                                </div>
                            ) : (
                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                                </svg>
                            )}
                        </Link>

                        {/* Cart button */}
                        <button
                            onClick={toggleCart}
                            className="relative p-2 text-text-muted hover:text-accent transition-colors duration-300"
                            aria-label="Open cart"
                        >
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                            </svg>
                            <AnimatePresence>
                                {totalItems > 0 && (
                                    <motion.span
                                        key="badge"
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        exit={{ scale: 0 }}
                                        className="absolute -top-1 -right-1 bg-accent text-primary text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center"
                                    >
                                        {totalItems}
                                    </motion.span>
                                )}
                            </AnimatePresence>
                        </button>

                        {/* Mobile hamburger */}
                        <button
                            onClick={() => setMobileOpen(!mobileOpen)}
                            className="md:hidden p-2 text-text-muted hover:text-accent transition-colors"
                            aria-label="Toggle menu"
                        >
                            <div className="w-5 flex flex-col gap-1.5">
                                <motion.span
                                    animate={mobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                                    className="block h-0.5 w-full bg-current"
                                />
                                <motion.span
                                    animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
                                    className="block h-0.5 w-full bg-current"
                                />
                                <motion.span
                                    animate={mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                                    className="block h-0.5 w-full bg-current"
                                />
                            </div>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden overflow-hidden bg-surface/95 backdrop-blur-xl border-t border-white/5"
                    >
                        <div className="px-4 py-6 flex flex-col gap-4">
                            {links.map((link, i) => (
                                <motion.div
                                    key={link.name}
                                    initial={{ x: -20, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ delay: i * 0.1 }}
                                >
                                    <Link
                                        to={link.path}
                                        onClick={() => setMobileOpen(false)}
                                        className="text-lg uppercase tracking-widest text-text-muted hover:text-accent transition-colors block"
                                    >
                                        {link.name}
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
