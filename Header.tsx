import { useEffect, useState } from 'react';
import { Gamepad2, Menu, X, ShoppingBag, User, Sun, Moon, Handshake } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { useApp } from '@/context/AppContext';
import SearchOverlay from '@/components/SearchOverlay';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { itemCount, openCart } = useCart();
  const { view, navigate, theme, toggleTheme } = useApp();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { label: 'Accueil', action: () => navigate('home') },
    { label: 'Boutique', action: () => navigate('home') },
    { label: 'AILA Pass', action: () => navigate('aila-pass') },
    { label: 'Partenaires', action: () => navigate('partner') },
    { label: 'Contact', action: () => navigate('home') },
  ];

  const handleNav = (action: () => void) => {
    action();
    setMobileOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'glass-strong shadow-lg shadow-night-900/50'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        {/* Logo */}
        <button
          onClick={() => navigate('home')}
          className="flex items-center gap-2.5 group shrink-0"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-electric-400/30 blur-lg group-hover:bg-electric-400/50 transition-all duration-500" />
            <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-electric-300 to-violet-400 shadow-lg">
              <Gamepad2 className="h-6 w-6 text-white" strokeWidth={2.5} />
            </div>
          </div>
          <span className="font-display text-xl font-extrabold tracking-tight text-white">
            AILA<span className="text-gradient-gold">Store</span>
          </span>
        </button>

        {/* Desktop Nav — centered */}
        <div className="hidden items-center gap-7 lg:flex absolute left-1/2 -translate-x-1/2">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={link.action}
              className="group relative text-sm font-medium text-slate-300 transition-colors hover:text-white"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gradient-to-r from-electric-300 to-gold-300 transition-all duration-300 group-hover:w-full" />
            </button>
          ))}
        </div>

        {/* Actions */}
        <div className="hidden items-center gap-2 lg:flex shrink-0">
          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            className="flex h-10 w-10 items-center justify-center rounded-xl text-slate-300 transition-all hover:text-white hover:bg-white/5"
            aria-label="Changer de thème"
          >
            {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>

          {/* Search */}
          <SearchOverlay />

          {/* Cart */}
          <button
            onClick={openCart}
            className="relative flex h-10 w-10 items-center justify-center rounded-xl text-slate-300 transition-all hover:text-white hover:bg-white/5"
            aria-label="Panier"
          >
            <ShoppingBag className="h-5 w-5" />
            {itemCount > 0 && (
              <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-gold-300 text-[10px] font-bold text-night-700">
                {itemCount}
              </span>
            )}
          </button>

          {/* Login */}
          <button className="flex items-center gap-2 rounded-xl bg-white/5 px-4 py-2.5 text-sm font-semibold text-white transition-all hover:bg-white/10">
            <User className="h-4 w-4" />
            Connexion
          </button>
        </div>

        {/* Mobile actions */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={openCart}
            className="relative flex h-10 w-10 items-center justify-center rounded-xl text-slate-300"
            aria-label="Panier"
          >
            <ShoppingBag className="h-5 w-5" />
            {itemCount > 0 && (
              <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-gold-300 text-[10px] font-bold text-night-700">
                {itemCount}
              </span>
            )}
          </button>
          <button
            className="flex h-10 w-10 items-center justify-center rounded-xl text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden transition-all duration-400 lg:hidden ${
          mobileOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="glass-strong flex flex-col gap-1 px-6 py-4">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNav(link.action)}
              className="rounded-lg px-4 py-3 text-left text-sm font-medium text-slate-300 transition-colors hover:bg-white/5 hover:text-white"
            >
              {link.label}
            </button>
          ))}
          <div className="mt-2 flex items-center gap-3">
            <button
              onClick={() => { toggleTheme(); }}
              className="flex h-10 flex-1 items-center justify-center gap-2 rounded-xl glass text-sm font-medium text-slate-300"
            >
              {theme === 'dark' ? <><Sun className="h-4 w-4" /> Clair</> : <><Moon className="h-4 w-4" /> Sombre</>}
            </button>
            <button className="flex h-10 flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-electric-300 to-violet-300 text-sm font-semibold text-white">
              <User className="h-4 w-4" />
              Connexion
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
