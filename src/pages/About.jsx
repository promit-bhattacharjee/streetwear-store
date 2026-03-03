import { motion } from 'framer-motion'

export default function About() {
    return (
        <div className="pt-24 min-h-screen bg-primary px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-3xl"
            >
                <h1 className="text-4xl sm:text-6xl font-bold tracking-tighter mb-8">OUR STORY</h1>
                <div className="space-y-6 text-lg text-text-muted leading-relaxed">
                    <p>
                        VOIDSTREET was founded in 2026 with a single mission: to create premium streetwear that defies expectations and gravity.
                    </p>
                    <p>
                        Born from the intersection of high-performance materials and underground aesthetics, our pieces are more than just clothing—they are equipment for the modern explorer.
                    </p>
                    <div className="py-8">
                        <img
                            src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=800&q=80"
                            alt="Studio"
                            className="rounded-2xl border border-white/5 shadow-2xl"
                        />
                    </div>
                    <p>
                        Every drop is strictly limited and never restocked. We believe in the transience of style and the permanence of quality.
                    </p>
                </div>
            </motion.div>
        </div>
    )
}
