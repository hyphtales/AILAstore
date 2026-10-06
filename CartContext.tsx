import { createContext, useContext, useState, useCallback, type ReactNode } from 'react';
import type { Game } from '@/data/games';

export interface CartItem {
  game: Game;
  type: 'achat' | 'location';
  quantity: number;
}

interface CartContextType {
  items: CartItem[];
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  addToCart: (game: Game, type: 'achat' | 'location') => void;
  removeFromCart: (id: number, type: 'achat' | 'location') => void;
  updateQuantity: (id: number, type: 'achat' | 'location', delta: number) => void;
  clearCart: () => void;
  total: number;
  itemCount: number;
}

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const openCart = useCallback(() => setIsOpen(true), []);
  const closeCart = useCallback(() => setIsOpen(false), []);

  const addToCart = useCallback((game: Game, type: 'achat' | 'location') => {
    setItems((prev) => {
      const existing = prev.find((i) => i.game.id === game.id && i.type === type);
      if (existing) {
        return prev.map((i) =>
          i.game.id === game.id && i.type === type
            ? { ...i, quantity: i.quantity + 1 }
            : i
        );
      }
      return [...prev, { game, type, quantity: 1 }];
    });
    setIsOpen(true);
  }, []);

  const removeFromCart = useCallback((id: number, type: 'achat' | 'location') => {
    setItems((prev) => prev.filter((i) => !(i.game.id === id && i.type === type)));
  }, []);

  const updateQuantity = useCallback((id: number, type: 'achat' | 'location', delta: number) => {
    setItems((prev) =>
      prev.map((i) => {
        if (i.game.id === id && i.type === type) {
          const newQty = Math.max(1, i.quantity + delta);
          return { ...i, quantity: newQty };
        }
        return i;
      })
    );
  }, []);

  const clearCart = useCallback(() => setItems([]), []);

  const total = items.reduce((sum, i) => {
    const price = i.type === 'achat'
      ? i.game.discount
        ? i.game.price * (1 - i.game.discount / 100)
        : i.game.price
      : i.game.rentalPrice;
    return sum + price * i.quantity;
  }, 0);

  const itemCount = items.reduce((sum, i) => sum + i.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        items,
        isOpen,
        openCart,
        closeCart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        total,
        itemCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within CartProvider');
  return ctx;
}
