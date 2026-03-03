import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import useAuthStore from '../../store/authStore';

export default function AuthForm({ type = 'login' }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const login = useAuthStore((s) => s.login);
    const signup = useAuthStore((s) => s.signup);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');

        // Simulate API delay
        await new Promise(r => setTimeout(r, 800));

        try {
            if (type === 'login') {
                const success = login(email, password);
                if (success) navigate(from, { replace: true });
            } else {
                const success = signup(name, email, password);
                if (success) navigate(from, { replace: true });
            }
        } catch (err) {
            setError('Authentication failed. Please check your credentials.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-surface p-8 rounded-2xl border border-white/5 w-full max-w-md mx-auto shadow-2xl"
        >
            <h1 className="text-3xl font-bold tracking-tighter mb-2 text-center">
                {type === 'login' ? 'WELCOME BACK' : 'JOIN THE VOID'}
            </h1>
            <p className="text-text-muted text-center mb-8 text-sm uppercase tracking-widest">
                {type === 'login' ? 'Enter your credentials' : 'Create your digital identity'}
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
                {type === 'signup' && (
                    <div>
                        <label className="block text-xs uppercase tracking-widest text-text-muted mb-2">FullName</label>
                        <input
                            required
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full bg-primary border border-white/10 rounded-lg p-3 focus:border-accent outline-none transition-colors text-text"
                            placeholder="J. Doe"
                        />
                    </div>
                )}

                <div>
                    <label className="block text-xs uppercase tracking-widest text-text-muted mb-2">Email Address</label>
                    <input
                        required
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-primary border border-white/10 rounded-lg p-3 focus:border-accent outline-none transition-colors text-text"
                        placeholder="explorer@voidstreet.com"
                    />
                </div>

                <div>
                    <label className="block text-xs uppercase tracking-widest text-text-muted mb-2">Password</label>
                    <input
                        required
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full bg-primary border border-white/10 rounded-lg p-3 focus:border-accent outline-none transition-colors text-text"
                        placeholder="••••••••"
                    />
                </div>

                {error && <p className="text-red-500 text-xs text-center uppercase tracking-wider">{error}</p>}

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
                        type === 'login' ? 'LOGIN' : 'SIGN UP'
                    )}
                </button>
            </form>

            <div className="mt-8 text-center">
                <p className="text-text-muted text-sm">
                    {type === 'login' ? "Don't have an account?" : "Already have an account?"}
                    <Link
                        to={type === 'login' ? '/signup' : '/login'}
                        className="text-accent ml-2 font-bold hover:underline"
                    >
                        {type === 'login' ? 'SIGN UP' : 'LOGIN'}
                    </Link>
                </p>
            </div>
        </motion.div>
    );
}
