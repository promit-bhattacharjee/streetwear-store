import { motion } from 'framer-motion';
import useAuthStore from '../store/authStore';

export default function Profile() {
    const { user, orders, logout } = useAuthStore();

    return (
        <div className="min-h-screen bg-primary pt-32 pb-20 px-4 max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                {/* Sidebar / Info */}
                <div className="md:col-span-1">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="text-center md:text-left"
                    >
                        <div className="w-24 h-24 rounded-full overflow-hidden mx-auto md:mx-0 mb-6 border-2 border-accent">
                            <img src={user?.avatar} alt={user?.name} className="w-full h-full object-cover" />
                        </div>
                        <h1 className="text-2xl font-bold tracking-tighter mb-1">{user?.name}</h1>
                        <p className="text-text-muted text-sm mb-8">{user?.email}</p>

                        <button
                            onClick={logout}
                            className="w-full py-3 border border-white/10 text-xs font-bold tracking-widest uppercase rounded-lg hover:border-red-500 hover:text-red-500 transition-colors"
                        >
                            Log Out
                        </button>
                    </motion.div>
                </div>

                {/* Content / Orders */}
                <div className="md:col-span-3">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <h2 className="text-3xl font-bold tracking-tighter mb-8">ORDER HISTORY</h2>

                        {orders.length === 0 ? (
                            <div className="bg-surface p-12 rounded-3xl border border-white/5 text-center">
                                <p className="text-text-muted">No orders found.</p>
                            </div>
                        ) : (
                            <div className="space-y-6">
                                {orders.map((order) => (
                                    <div key={order.id} className="bg-surface p-6 rounded-2xl border border-white/5 hover:border-accent/20 transition-colors">
                                        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                                            <div>
                                                <p className="text-[10px] uppercase tracking-widest text-text-muted font-bold mb-1">Order ID</p>
                                                <p className="font-bold text-accent">{order.id}</p>
                                            </div>
                                            <div>
                                                <p className="text-[10px] uppercase tracking-widest text-text-muted font-bold mb-1">Date</p>
                                                <p className="font-medium">{order.date}</p>
                                            </div>
                                            <div>
                                                <p className="text-[10px] uppercase tracking-widest text-text-muted font-bold mb-1">Status</p>
                                                <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-[10px] uppercase font-bold tracking-widest rounded-full border border-accent/20">
                                                    {order.status}
                                                </span>
                                            </div>
                                            <div>
                                                <p className="text-[10px] uppercase tracking-widest text-text-muted font-bold mb-1">Total</p>
                                                <p className="font-bold text-lg">${order.total}.00</p>
                                            </div>
                                        </div>

                                        <div className="flex gap-4 overflow-x-auto pb-2 custom-scrollbar">
                                            {order.items.map((item, i) => (
                                                <div key={i} className="flex-shrink-0 w-16 h-20 bg-surface-light rounded-lg overflow-hidden border border-white/5">
                                                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
