import { motion } from 'framer-motion';
import useCartStore from '../../store/cartStore';

export default function ProductCard({ product, index }) {
    const addItem = useCartStore((s) => s.addItem);
    const openCart = useCartStore((s) => s.openCart);

    const handleAdd = () => {
        addItem(product);
        openCart();
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            className="group relative bg-surface rounded-2xl overflow-hidden border border-white/5 hover:border-accent/20 transition-all duration-500"
        >
            {/* Image */}
            <div className="relative aspect-[3/4] overflow-hidden bg-surface-light">
                <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-6">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={handleAdd}
                        className="px-6 py-3 bg-accent text-primary font-semibold text-sm uppercase tracking-wider rounded-full shadow-lg shadow-accent/25 hover:shadow-accent/40 transition-shadow duration-300"
                    >
                        Add to Cart
                    </motion.button>
                </div>

                {/* Category badge */}
                <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 text-[10px] uppercase tracking-widest bg-primary/60 backdrop-blur-md text-text-muted rounded-full border border-white/10">
                        {product.category}
                    </span>
                </div>
            </div>

            {/* Info */}
            <div className="p-4 sm:p-5">
                <p className="text-[10px] uppercase tracking-[0.2em] text-accent mb-1">
                    {product.brand}
                </p>
                <h3 className="text-sm sm:text-base font-semibold text-text group-hover:text-accent transition-colors duration-300 truncate">
                    {product.name}
                </h3>
                <p className="mt-2 text-lg font-bold text-text">
                    ${product.price}
                    <span className="text-xs text-text-muted font-normal ml-1">.00</span>
                </p>
            </div>
        </motion.div>
    );
}
