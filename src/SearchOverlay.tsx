import { useState, useMemo, useEffect, useRef } from 'react';
import { Search, X, Star, Clock } from 'lucide-react';
import { featuredGames } from '@/data/games';
import { useApp } from '@/context/AppContext';

export default function SearchOverlay() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const { openGameDetail } = useApp();

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsOpen(true);
      }
      if (e.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  const results = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();
    return featuredGames.filter(
      (g) =>
        g.title.toLowerCase().includes(q) ||
        g.genre.toLowerCase().includes(q) ||
        g.developer.toLowerCase().includes(q)
    );
  }, [query]);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);
  const handleSelect = (id: number) => {
    openGameDetail(id);
    handleClose();
  };

  return (
    <>
      {/* Trigger */}
      <button
        onClick={handleOpen}
        className="flex h-10 w-10 items-center justify-center rounded-xl text-slate-300 transition-all hover:text-white hover:bg-white/5"
        aria-label="Rechercher"
      >
        <Search className="h-5 w-5" />
      </button>

      {/* Overlay */}
      <div
        className={`fixed inset-0 z-[80] bg-night-900/80 backdrop-blur-md transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={handleClose}
      />

      {/* Panel */}
      <div
        className={`fixed left-1/2 top-24 z-[90] w-full max-w-2xl -translate-x-1/2 px-4 transition-all duration-300 ${
          isOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0 pointer-events-none'
        }`}
      >
        <div className="glass-strong rounded-2xl shadow-2xl overflow-hidden">
          {/* Search bar */}
          <div className="flex items-center gap-3 border-b border-white/10 px-5 py-4">
            <Search className="h-5 w-5 text-slate-400" />
            <input
              ref={inputRef}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Rechercher un jeu, un genre, un studio..."
              className="flex-1 bg-transparent text-base text-white placeholder:text-slate-500 outline-none"
            />
            <button
              onClick={handleClose}
              className="flex h-8 w-8 items-center justify-center rounded-lg text-slate-400 transition-colors hover:text-white hover:bg-white/5"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Results */}
          <div className="max-h-[400px] overflow-y-auto p-3">
            {query.trim() === '' ? (
              <div className="px-4 py-8 text-center text-sm text-slate-500">
                Tapez pour rechercher parmi nos jeux.
              </div>
            ) : results.length === 0 ? (
              <div className="px-4 py-8 text-center text-sm text-slate-500">
                Aucun résultat pour « {query} ».
              </div>
            ) : (
              <div className="space-y-2">
                {results.map((game) => (
                  <button
                    key={game.id}
                    onClick={() => handleSelect(game.id)}
                    className="group flex w-full items-center gap-3 rounded-xl p-2 text-left transition-colors hover:bg-white/5"
                  >
                    <img
                      src={game.image}
                      alt={game.title}
                      className="h-14 w-20 shrink-0 rounded-lg object-cover"
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-bold text-white truncate group-hover:text-electric-50">
                        {game.title}
                      </h4>
                      <p className="text-xs text-slate-400 truncate">{game.genre}</p>
                      <div className="mt-1 flex items-center gap-3">
                        <span className="flex items-center gap-1 text-xs text-slate-400">
                          <Star className="h-3 w-3 fill-gold-300 text-gold-300" />
                          {game.rating}
                        </span>
                        <span className="flex items-center gap-1 text-xs text-slate-400">
                          <Clock className="h-3 w-3" />
                          {game.rentalPrice}€/sem
                        </span>
                      </div>
                    </div>
                    <span className="shrink-0 text-sm font-bold text-white">
                      {game.discount
                        ? (game.price * (1 - game.discount / 100)).toFixed(2)
                        : game.price.toFixed(2)}€
                    </span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
