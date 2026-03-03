import { motion } from 'framer-motion';

export default function CartItem({ item, onUpdateQuantity, onRemove }) {
    return (
        <motion.div
            layout
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 30 }}
            className="flex gap-4 py-4 border-b border-white/5"
        >
            {/* Thumbnail */}
            <div className="w-20 h-24 rounded-xl overflow-hidden bg-surface-light flex-shrink-0">
                <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Details */}
            <div className="flex-1 min-w-0">
                <p className="text-[10px] uppercase tracking-[0.2em] text-accent">
                    {item.brand}
                </p>
                <h4 className="text-sm font-semibold text-text truncate">
                    {item.name}
                </h4>
                <p className="text-sm font-bold text-text mt-1">
                    ${item.price}.00
                </p>

                {/* Quantity controls */}
                <div className="flex items-center gap-3 mt-2">
                    <button
                        onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                        className="w-7 h-7 rounded-lg bg-surface-light text-text-muted hover:text-accent hover:bg-surface flex items-center justify-center transition-colors text-sm"
                    >
                        −
                    </button>
                    <span className="text-sm font-medium text-text w-4 text-center">
                        {item.quantity}
                    </span>
                    <button
                        onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                        className="w-7 h-7 rounded-lg bg-surface-light text-text-muted hover:text-accent hover:bg-surface flex items-center justify-center transition-colors text-sm"
                    >
                        +
                    </button>
                </div>
            </div>

            {/* Remove */}
            <button
                onClick={() => onRemove(item.id)}
                className="text-text-muted hover:text-red-400 transition-colors self-start p-1"
                aria-label="Remove item"
            >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
        </motion.div>
    );
}
