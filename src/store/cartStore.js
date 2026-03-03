import { create } from 'zustand';

const useCartStore = create((set, get) => ({
    items: [],
    isOpen: false,

    toggleCart: () => set((state) => ({ isOpen: !state.isOpen })),
    openCart: () => set({ isOpen: true }),
    closeCart: () => set({ isOpen: false }),

    addItem: (product) =>
        set((state) => {
            const existing = state.items.find((item) => item.id === product.id);
            if (existing) {
                return {
                    items: state.items.map((item) =>
                        item.id === product.id
                            ? { ...item, quantity: item.quantity + 1 }
                            : item
                    ),
                };
            }
            return { items: [...state.items, { ...product, quantity: 1 }] };
        }),

    removeItem: (productId) =>
        set((state) => ({
            items: state.items.filter((item) => item.id !== productId),
        })),

    updateQuantity: (productId, quantity) =>
        set((state) => ({
            items:
                quantity <= 0
                    ? state.items.filter((item) => item.id !== productId)
                    : state.items.map((item) =>
                        item.id === productId ? { ...item, quantity } : item
                    ),
        })),

    get totalItems() {
        return get().items.reduce((sum, item) => sum + item.quantity, 0);
    },

    get totalPrice() {
        return get().items.reduce(
            (sum, item) => sum + item.price * item.quantity,
            0
        );
    },

    clearCart: () => set({ items: [] }),
}));

export default useCartStore;
