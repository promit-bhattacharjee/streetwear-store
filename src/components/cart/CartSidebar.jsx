import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import useCartStore from '../../store/cartStore';
import CartItem from './CartItem';

export default function CartSidebar() {
    const isOpen = useCartStore((s) => s.isOpen);
    const closeCart = useCartStore((s) => s.closeCart);
    const items = useCartStore((s) => s.items);
    const updateQuantity = useCartStore((s) => s.updateQuantity);
    const removeItem = useCartStore((s) => s.removeItem);
    const clearCart = useCartStore((s) => s.clearCart);
    const navigate = useNavigate();

    const handleCheckout = () => {
        closeCart();
        navigate('/checkout');
    };

    const totalItems = items.reduce((sum, i) => sum + i.quantity, 0);
    const totalPrice = items.reduce((sum, i) => sum + i.price * i.quantity, 0);

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeCart}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
                    />

                    {/* Sidebar */}
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'spring', damping: 30, stiffness: 300 }}
                        className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-surface z-[70] flex flex-col shadow-2xl shadow-black/50"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between px-6 py-5 border-b border-white/5">
                            <div>
                                <h2 className="text-lg font-bold text-text">Your Cart</h2>
                                <p className="text-xs text-text-muted mt-0.5">
                                    {totalItems} {totalItems === 1 ? 'item' : 'items'}
                                </p>
                            </div>
                            <button
                                onClick={closeCart}
                                className="p-2 rounded-xl bg-surface-light text-text-muted hover:text-accent transition-colors"
                                aria-label="Close cart"
                            >
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        {/* Items */}
                        <div className="flex-1 overflow-y-auto px-6">
                            {items.length === 0 ? (
                                <div className="flex flex-col items-center justify-center h-full text-center">
                                    <div className="w-20 h-20 rounded-full bg-surface-light flex items-center justify-center mb-4">
                                        <svg className="w-8 h-8 text-text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                                        </svg>
                                    </div>
                                    <p className="text-text-muted text-sm">Your cart is empty</p>
                                    <button
                                        onClick={closeCart}
                                        className="mt-4 text-accent text-sm font-semibold uppercase tracking-wider hover:underline"
                                    >
                                        Continue Shopping
                                    </button>
                                </div>
                            ) : (
                                <AnimatePresence mode="popLayout">
                                    {items.map((item) => (
                                        <CartItem
                                            key={item.id}
                                            item={item}
                                            onUpdateQuantity={updateQuantity}
                                            onRemove={removeItem}
                                        />
                                    ))}
                                </AnimatePresence>
                            )}
                        </div>

                        {/* Footer */}
                        {items.length > 0 && (
                            <div className="border-t border-white/5 px-6 py-5 space-y-4">
                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-text-muted">Subtotal</span>
                                    <span className="text-lg font-bold text-text">
                                        ${totalPrice.toFixed(2)}
                                    </span>
                                </div>
                                <p className="text-[11px] text-text-muted">
                                    Shipping & taxes calculated at checkout
                                </p>
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    onClick={handleCheckout}
                                    className="w-full py-4 bg-accent text-primary font-bold uppercase tracking-wider rounded-full text-sm shadow-lg shadow-accent/20 hover:shadow-accent/40 transition-shadow duration-300"
                                >
                                    Checkout — ${totalPrice.toFixed(2)}
                                </motion.button>
                                <button
                                    onClick={clearCart}
                                    className="w-full text-center text-xs text-text-muted hover:text-red-400 uppercase tracking-wider transition-colors"
                                >
                                    Clear Cart
                                </button>
                            </div>
                        )}
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
