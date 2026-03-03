import { motion } from 'framer-motion';
import products from '../../data/products';
import ProductCard from './ProductCard';

export default function ProductGrid() {
    return (
        <section id="shop" className="relative py-20 sm:py-28 bg-primary">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12 sm:mb-16"
                >
                    <span className="text-xs uppercase tracking-[0.3em] text-accent">
                        Curated Selection
                    </span>
                    <h2 className="mt-3 text-3xl sm:text-5xl font-bold tracking-tight">
                        Latest <span className="text-accent">Drops</span>
                    </h2>
                    <p className="mt-4 text-text-muted max-w-lg mx-auto">
                        Handpicked pieces from the world's most forward-thinking streetwear labels.
                    </p>
                </motion.div>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
                    {products.map((product, index) => (
                        <ProductCard key={product.id} product={product} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}
