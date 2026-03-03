import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import ShippingForm from '../components/checkout/ShippingForm';
import PaymentForm from '../components/checkout/PaymentForm';
import useCartStore from '../store/cartStore';
import useAuthStore from '../store/authStore';

export default function Checkout() {
    const [step, setStep] = useState(1); // 1: Shipping, 2: Payment, 3: Success
    const [isLoading, setIsLoading] = useState(false);
    const [shippingData, setShippingData] = useState({
        firstName: '',
        lastName: '',
        address: '',
        city: '',
        postalCode: '',
        country: ''
    });

    const cart = useCartStore();
    const addOrder = useAuthStore((s) => s.addOrder);
    const navigate = useNavigate();

    const handleShippingChange = (field, value) => {
        setShippingData(prev => ({ ...prev, [field]: value }));
    };

    const handlePaymentComplete = async () => {
        setIsLoading(true);
        // Simulate payment processing
        await new Promise(r => setTimeout(r, 2000));

        const order = {
            items: cart.items,
            total: cart.totalPrice,
            shipping: shippingData
        };

        addOrder(order);
        cart.clearCart();
        setStep(3);
        setIsLoading(false);
    };

    return (
        <div className="min-h-screen bg-primary pt-32 pb-20 px-4 max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                {/* Main Content */}
                <div className="lg:col-span-2">
                    <div className="mb-12">
                        <h1 className="text-4xl font-bold tracking-tighter mb-4">CHECKOUT</h1>
                        <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-[0.2em]">
                            <span className={step >= 1 ? 'text-accent' : 'text-text-muted'}>01 Shipping</span>
                            <span className="text-text-muted">/</span>
                            <span className={step >= 2 ? 'text-accent' : 'text-text-muted'}>02 Payment</span>
                            <span className="text-text-muted">/</span>
                            <span className={step >= 3 ? 'text-accent' : 'text-text-muted'}>03 Confirm</span>
                        </div>
                    </div>

                    <AnimatePresence mode="wait">
                        {step === 1 && (
                            <motion.div
                                key="shipping"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 20 }}
                            >
                                <ShippingForm
                                    data={shippingData}
                                    onChange={handleShippingChange}
                                    onNext={() => setStep(2)}
                                />
                            </motion.div>
                        )}

                        {step === 2 && (
                            <motion.div
                                key="payment"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 20 }}
                            >
                                <PaymentForm
                                    onComplete={handlePaymentComplete}
                                    isLoading={isLoading}
                                />
                            </motion.div>
                        )}

                        {step === 3 && (
                            <motion.div
                                key="success"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="text-center py-12"
                            >
                                <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-accent/20">
                                    <svg className="w-10 h-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <h2 className="text-3xl font-bold tracking-tighter mb-4 text-text">ORDER CONFIRMED</h2>
                                <p className="text-text-muted mb-8">Your order has been placed successfully and is being processed.</p>
                                <button
                                    onClick={() => navigate('/profile')}
                                    className="px-8 py-4 bg-accent text-primary font-bold uppercase tracking-wider rounded-lg"
                                >
                                    VIEW YOUR DASHBOARD
                                </button>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* Sidebar Summary */}
                {step < 3 && (
                    <div className="lg:col-span-1">
                        <div className="bg-surface p-6 rounded-2xl border border-white/5 sticky top-24">
                            <h3 className="text-lg font-bold mb-6">Order Summary</h3>
                            <div className="space-y-4 mb-6 max-h-60 overflow-y-auto pr-2 custom-scrollbar">
                                {cart.items.map((item) => (
                                    <div key={item.id} className="flex gap-4">
                                        <div className="w-12 h-16 bg-surface-light rounded-lg overflow-hidden flex-shrink-0">
                                            <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                                        </div>
                                        <div className="min-w-0">
                                            <p className="text-xs font-bold truncate">{item.name}</p>
                                            <p className="text-[10px] text-text-muted mt-0.5">Qty {item.quantity} • ${item.price}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="space-y-2 pt-4 border-t border-white/5">
                                <div className="flex justify-between text-sm text-text-muted">
                                    <span>Subtotal</span>
                                    <span>${cart.totalPrice}.00</span>
                                </div>
                                <div className="flex justify-between text-sm text-text-muted">
                                    <span>Shipping</span>
                                    <span className="text-accent">FREE</span>
                                </div>
                                <div className="flex justify-between text-lg font-bold pt-2">
                                    <span>Total</span>
                                    <span className="text-accent">${cart.totalPrice}.00</span>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
