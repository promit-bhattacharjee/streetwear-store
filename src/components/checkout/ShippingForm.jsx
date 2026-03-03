export default function ShippingForm({ data, onChange, onNext }) {
    const handleSubmit = (e) => {
        e.preventDefault();
        onNext();
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                    <label className="block text-xs uppercase tracking-widest text-text-muted mb-2">First Name</label>
                    <input
                        required
                        type="text"
                        value={data.firstName}
                        onChange={(e) => onChange('firstName', e.target.value)}
                        className="w-full bg-primary border border-white/10 rounded-lg p-3 focus:border-accent outline-none transition-colors"
                    />
                </div>
                <div>
                    <label className="block text-xs uppercase tracking-widest text-text-muted mb-2">Last Name</label>
                    <input
                        required
                        type="text"
                        value={data.lastName}
                        onChange={(e) => onChange('lastName', e.target.value)}
                        className="w-full bg-primary border border-white/10 rounded-lg p-3 focus:border-accent outline-none transition-colors"
                    />
                </div>
            </div>

            <div>
                <label className="block text-xs uppercase tracking-widest text-text-muted mb-2">Street Address</label>
                <input
                    required
                    type="text"
                    value={data.address}
                    onChange={(e) => onChange('address', e.target.value)}
                    className="w-full bg-primary border border-white/10 rounded-lg p-3 focus:border-accent outline-none transition-colors"
                />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="sm:col-span-1">
                    <label className="block text-xs uppercase tracking-widest text-text-muted mb-2">City</label>
                    <input
                        required
                        type="text"
                        value={data.city}
                        onChange={(e) => onChange('city', e.target.value)}
                        className="w-full bg-primary border border-white/10 rounded-lg p-3 focus:border-accent outline-none transition-colors"
                    />
                </div>
                <div className="sm:col-span-1">
                    <label className="block text-xs uppercase tracking-widest text-text-muted mb-2">Postal Code</label>
                    <input
                        required
                        type="text"
                        value={data.postalCode}
                        onChange={(e) => onChange('postalCode', e.target.value)}
                        className="w-full bg-primary border border-white/10 rounded-lg p-3 focus:border-accent outline-none transition-colors"
                    />
                </div>
                <div className="sm:col-span-1">
                    <label className="block text-xs uppercase tracking-widest text-text-muted mb-2">Country</label>
                    <input
                        required
                        type="text"
                        value={data.country}
                        onChange={(e) => onChange('country', e.target.value)}
                        className="w-full bg-primary border border-white/10 rounded-lg p-3 focus:border-accent outline-none transition-colors"
                    />
                </div>
            </div>

            <button className="w-full py-4 bg-accent text-primary font-bold uppercase tracking-wider rounded-lg hover:scale-[1.02] active:scale-[0.98] transition-all">
                CONTINUE TO PAYMENT
            </button>
        </form>
    );
}
