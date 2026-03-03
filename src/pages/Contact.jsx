import { motion } from 'framer-motion'

export default function Contact() {
    return (
        <div className="pt-24 min-h-screen bg-primary px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                >
                    <h1 className="text-4xl sm:text-6xl font-bold tracking-tighter mb-8">GET IN TOUCH</h1>
                    <p className="text-text-muted mb-8 text-lg">
                        Questions about a drop? Need help with an order? Our team is standing by.
                    </p>
                    <div className="space-y-4">
                        <div>
                            <p className="text-accent text-sm uppercase tracking-widest font-bold">Email</p>
                            <p className="text-xl">support@voidstreet.com</p>
                        </div>
                        <div>
                            <p className="text-accent text-sm uppercase tracking-widest font-bold">Base</p>
                            <p className="text-xl">Neo-Tokyo, Sector 7</p>
                        </div>
                    </div>
                </motion.div>

                <motion.form
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="bg-surface p-8 rounded-2xl border border-white/5 space-y-4"
                >
                    <div>
                        <label className="block text-xs uppercase tracking-widest text-text-muted mb-2">Name</label>
                        <input type="text" className="w-full bg-primary border border-white/10 rounded-lg p-3 focus:border-accent outline-none transition-colors" />
                    </div>
                    <div>
                        <label className="block text-xs uppercase tracking-widest text-text-muted mb-2">Email</label>
                        <input type="email" className="w-full bg-primary border border-white/10 rounded-lg p-3 focus:border-accent outline-none transition-colors" />
                    </div>
                    <div>
                        <label className="block text-xs uppercase tracking-widest text-text-muted mb-2">Message</label>
                        <textarea rows="4" className="w-full bg-primary border border-white/10 rounded-lg p-3 focus:border-accent outline-none transition-colors"></textarea>
                    </div>
                    <button className="w-full py-4 bg-accent text-primary font-bold uppercase tracking-wider rounded-lg hover:scale-[1.02] transition-transform">
                        Send Message
                    </button>
                </motion.form>
            </div>
        </div>
    )
}
