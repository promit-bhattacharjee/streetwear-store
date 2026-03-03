import { motion } from 'framer-motion'

export default function FAQ() {
    const faqs = [
        { q: "How long does shipping take?", a: "Standard shipping takes 3-5 business days. International shipping takes 7-14 days." },
        { q: "What is your return policy?", a: "We offer 30-day returns on all items. Items must be in original condition with tags attached." },
        { q: "Do you restock items?", a: "No. Every drop is strictly limited edition to maintain exclusivity." },
        { q: "What sizes do you offer?", a: "Most items are oversized unisex fit, ranging from XS to XXL. Check the size guide on product pages." }
    ]

    return (
        <div className="pt-24 min-h-screen bg-primary px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl sm:text-6xl font-bold tracking-tighter mb-12 text-center"
            >
                FREQUENTLY ASKED <span className="text-accent">QUESTIONS</span>
            </motion.h1>

            <div className="space-y-4">
                {faqs.map((faq, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="bg-surface p-6 rounded-2xl border border-white/5"
                    >
                        <h3 className="text-lg font-bold mb-2 text-text">{faq.q}</h3>
                        <p className="text-text-muted">{faq.a}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}
