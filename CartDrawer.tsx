import { X, ShoppingCart, Trash2, Minus, Plus, Clock, Check } from 'lucide-react';
import { useState } from 'react';
import { useCart } from '@/context/CartContext';

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeFromCart, updateQuantity, total, clearCart } = useCart();
  const [checkoutDone, setCheckoutDone] = useState(false);

  const handleCheckout = () => {
    setCheckoutDone(true);
    setTimeout(() => {
      clearCart();
      setCheckoutDone(false);
      closeCart();
    }, 2500);
  };

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-[60] bg-night-900/70 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={closeCart}
      />

      {/* Drawer */}
      <aside
        className={`fixed right-0 top-0 z-[70] flex h-full w-full max-w-md flex-col glass-strong shadow-2xl transition-transform duration-400 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
          <div className="flex items-center gap-2.5">
            <ShoppingCart className="h-5 w-5 text-electric-50" />
            <h2 className="font-display text-lg font-bold text-white">Panier</h2>
            {items.length > 0 && (
              <span className="rounded-full bg-electric-400/20 px-2 py-0.5 text-xs font-semibold text-electric-50">
                {items.length}
              </span>
            )}
          </div>
          <button
            onClick={closeCart}
            className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-400 transition-colors hover:text-white hover:bg-white/5"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {checkoutDone ? (
            <div className="flex h-full flex-col items-center justify-center text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/20">
                <Check className="h-8 w-8 text-emerald-400" />
              </div>
              <h3 className="font-display text-lg font-bold text-white">Commande confirmée !</h3>
              <p className="mt-2 text-sm text-slate-400">Merci pour votre achat. Vous recevrez vos clés par email.</p>
            </div>
          ) : items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-white/5">
                <ShoppingCart className="h-8 w-8 text-slate-500" />
              </div>
              <p className="text-sm text-slate-400">Votre panier est vide.</p>
              <button
                onClick={closeCart}
                className="mt-4 rounded-xl glass px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-white/10"
              >
                Continuer mes achats
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => {
                const price =
                  item.type === 'achat'
                    ? item.game.discount
                      ? item.game.price * (1 - item.game.discount / 100)
                      : item.game.price
                    : item.game.rentalPrice;

                return (
                  <div
                    key={`${item.game.id}-${item.type}`}
                    className="flex gap-3 rounded-xl glass p-3"
                  >
                    <img
                      src={item.game.image}
                      alt={item.game.title}
                      className="h-20 w-28 shrink-0 rounded-lg object-cover"
                    />
                    <div className="flex flex-1 flex-col">
                      <div className="flex items-start justify-between">
                        <div>
                          <h4 className="text-sm font-bold text-white">{item.game.title}</h4>
                          <span className={`mt-0.5 inline-flex items-center gap-1 text-xs ${
                            item.type === 'location' ? 'text-gold-300' : 'text-electric-50'
                          }`}>
                            {item.type === 'location' && <Clock className="h-3 w-3" />}
                            {item.type === 'achat' ? 'Achat' : 'Location / semaine'}
                          </span>
                        </div>
                        <button
                          onClick={() => removeFromCart(item.game.id, item.type)}
                          className="text-slate-500 transition-colors hover:text-red-400"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                      <div className="mt-auto flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => updateQuantity(item.game.id, item.type, -1)}
                            className="flex h-7 w-7 items-center justify-center rounded-lg glass text-slate-300 transition-colors hover:text-white"
                          >
                            <Minus className="h-3.5 w-3.5" />
                          </button>
                          <span className="text-sm font-semibold text-white">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.game.id, item.type, 1)}
                            className="flex h-7 w-7 items-center justify-center rounded-lg glass text-slate-300 transition-colors hover:text-white"
                          >
                            <Plus className="h-3.5 w-3.5" />
                          </button>
                        </div>
                        <span className="text-sm font-bold text-gold-300">
                          {(price * item.quantity).toFixed(2)}€
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Footer */}
        {!checkoutDone && items.length > 0 && (
          <div className="border-t border-white/10 px-6 py-5">
            <div className="mb-4 flex items-center justify-between">
              <span className="text-sm text-slate-400">Total</span>
              <span className="font-display text-2xl font-bold text-white">{total.toFixed(2)}€</span>
            </div>
            <button
              onClick={handleCheckout}
              className="w-full rounded-xl bg-gradient-to-r from-gold-300 to-gold-400 py-3.5 text-sm font-bold text-night-700 shadow-lg shadow-gold-500/25 transition-all hover:brightness-110"
            >
              Passer commande
            </button>
            <button
              onClick={clearCart}
              className="mt-2 w-full text-center text-xs text-slate-500 transition-colors hover:text-slate-300"
            >
              Vider le panier
            </button>
          </div>
        )}
      </aside>
    </>
  );
}
