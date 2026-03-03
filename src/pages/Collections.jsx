import { motion } from 'framer-motion'
import products from '../data/products'
import ProductCard from '../components/products/ProductCard'

export default function Collections() {
    // Get unique categories
    const categories = ['All', ...new Set(products.map(p => p.category))]

    return (
        <div className="pt-24 min-h-screen bg-primary px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-12"
            >
                <h1 className="text-4xl sm:text-6xl font-bold tracking-tighter mb-4">COLLECTIONS</h1>
                <p className="text-text-muted max-w-2xl">Browse our curated drops by category. Each piece is designed to push the boundaries of streetwear.</p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
                {products.map((product, index) => (
                    <ProductCard key={product.id} product={product} index={index} />
                ))}
            </div>
        </div>
    )
}
