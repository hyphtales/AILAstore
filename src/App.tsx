import { useEffect } from 'react';
import { AppProvider, useApp } from './AppContext';
import { CartProvider } from './CartContext';
import Header from './Header';
import Hero from './Hero';
import FeaturedGames from './FeaturedGames';
import Categories from './Categories';
import AILAPass from './AILAPass';
import Trust from './Trust';
import ContactSection from './ContactSection';
import Footer from './Footer';
import AILAPassPage from './AILAPassPage';
import PartnerPage from './PartnerPage';
import CartDrawer from './CartDrawer';
import GameDetailModal from './GameDetailModal';

function AppContent() {
  const { view, theme } = useApp();
  
  useEffect(() => {
    document.body.className = theme === 'light' ? 'theme-light' : '';
  }, [theme]);
  
  return (
    <div className={`relative min-h-screen ${theme === 'light' ? 'bg-slate-100' : 'bg-night-700'}`}>
      {/* Fond fixe */}
      <div className="pointer-events-none fixed inset-0 z-0">
        {theme === 'dark' ? (
          <>
            <div className="absolute inset-0 bg-gradient-to-b from-night-600 via-night-700 to-night-900" />
            <div
              className="absolute inset-0 opacity-[0.02]"
              style={{
                backgroundImage:
                  'linear-gradient(rgba(124,138,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(124,138,255,1) 1px, transparent 1px)',
                backgroundSize: '80px 80px',
              }}
            />
          </>
        ) : (
          <>
            <div className="absolute inset-0 bg-gradient-to-b from-slate-100 via-slate-200 to-slate-300" />
            <div
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage:
                  'linear-gradient(rgba(60,80,180,1) 1px, transparent 1px), linear-gradient(90deg, rgba(60,80,180,1) 1px, transparent 1px)',
                backgroundSize: '80px 80px',
              }}
            />
          </>
        )}
      </div>

      <div className="relative z-10">
        <Header />
        <main>
          {view === 'home' && (
            <>
              <Hero />
              <FeaturedGames />
              <Categories />
              <AILAPass />
              <Trust />
              <ContactSection />
            </>
          )}
          {view === 'aila-pass' && <AILAPassPage />}
          {view === 'partner' && <PartnerPage />}
        </main>
        <Footer />
      </div>

      {/* Composants superposés */}
      <CartDrawer />
      <GameDetailModal />
    </div>
  );
}

function App() {
  return (
    <AppProvider>
      <CartProvider>
        <AppContent />
      </CartProvider>
    </AppProvider>
  );
}

export default App;
