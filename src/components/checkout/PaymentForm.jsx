import { motion } from 'framer-motion';

export default function PaymentForm({ onComplete, isLoading }) {
    const handleSubmit = (e) => {
        e.preventDefault();
        onComplete();
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="bg-surface-light p-4 rounded-xl border border-accent/20 mb-6">
                <p className="text-xs text-accent uppercase font-bold tracking-widest mb-1">Secure Transaction</p>
                <p className="text-[11px] text-text-muted">Your payment details are encrypted and never stored on our servers.</p>
            </div>

            <div>
                <label className="block text-xs uppercase tracking-widest text-text-muted mb-2">Card Number</label>
                <input
                    required
                    type="text"
                    placeholder="0000 0000 0000 0000"
                    className="w-full bg-primary border border-white/10 rounded-lg p-3 focus:border-accent outline-none transition-colors tracking-widest"
                />
            </div>

            <div className="grid grid-cols-2 gap-4">
                <div>
                    <label className="block text-xs uppercase tracking-widest text-text-muted mb-2">Expiry Date</label>
                    <input
                        required
                        type="text"
                        placeholder="MM/YY"
                        className="w-full bg-primary border border-white/10 rounded-lg p-3 focus:border-accent outline-none transition-colors"
                    />
                </div>
                <div>
                    <label className="block text-xs uppercase tracking-widest text-text-muted mb-2">CVV</label>
                    <input
                        required
                        type="password"
                        placeholder="***"
                        className="w-full bg-primary border border-white/10 rounded-lg p-3 focus:border-accent outline-none transition-colors"
                    />
                </div>
            </div>

            <button
                disabled={isLoading}
                className="w-full py-4 bg-accent text-primary font-bold uppercase tracking-wider rounded-lg hover:scale-[1.02] active:scale-[0.98] transition-all relative overflow-hidden"
            >
                {isLoading ? (
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
                        className="w-6 h-6 border-2 border-primary/30 border-t-primary rounded-full mx-auto"
                    />
                ) : (
                    'PLACE ORDER'
                )}
            </button>
        </form>
    );
}
