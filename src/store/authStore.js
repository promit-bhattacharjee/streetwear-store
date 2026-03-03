import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useAuthStore = create(
    persist(
        (set, get) => ({
            user: null,
            isAuthenticated: false,
            orders: [],

            login: (email, password) => {
                // Mock login - in a real app, this would be an API call
                const mockUser = {
                    id: 'usr_1',
                    name: 'Urban Explorer',
                    email: email,
                    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&q=80'
                };
                set({ user: mockUser, isAuthenticated: true });
                return true;
            },

            signup: (name, email, password) => {
                // Mock signup
                const mockUser = {
                    id: 'usr_' + Math.random().toString(36).substr(2, 9),
                    name: name,
                    email: email,
                    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&q=80'
                };
                set({ user: mockUser, isAuthenticated: true });
                return true;
            },

            logout: () => {
                set({ user: null, isAuthenticated: false });
            },

            addOrder: (orderData) => {
                const newOrder = {
                    id: 'ORD-' + Math.random().toString(36).toUpperCase().substr(2, 6),
                    date: new Date().toLocaleDateString(),
                    status: 'Processing',
                    ...orderData
                };
                set((state) => ({
                    orders: [newOrder, ...state.orders]
                }));
                return newOrder;
            }
        }),
        {
            name: 'voidstreet-auth-storage',
        }
    )
);

export default useAuthStore;
