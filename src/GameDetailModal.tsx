import { useState, useEffect } from 'react';
import {
  X, Star, ShoppingCart, Clock, Download, Check,
  Monitor, Gamepad2, Calendar, Building2,
} from 'lucide-react';
import { featuredGames } from '@/data/games';
import { useCart } from '@/context/CartContext';
import { useApp } from '@/context/AppContext';

export default function GameDetailModal() {
  const { selectedGameId, closeGameDetail } = useApp();
  const { addToCart } = useCart();
  const [activeImage, setActiveImage] = useState(0);
  const [addedType, setAddedType] = useState<'achat' | 'location' | null>(null);

  const game = featuredGames.find((g) => g.id === selectedGameId);

  useEffect(() => {
    setActiveImage(0);
    setAddedType(null);
  }, [selectedGameId]);

  useEffect(() => {
    if (addedType) {
      const timer = setTimeout(() => setAddedType(null), 2000);
      return () => clearTimeout(timer);
    }
  }, [addedType]);

  if (!game) return null;

  const discountedPrice = game.discount
    ? (game.price * (1 - game.discount / 100)).toFixed(2)
    : null;

  const handleAdd = (type: 'achat' | 'location') => {
    addToCart(game, type);
    setAddedType(type);
  };

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 z-[80] bg-night-900/80 backdrop-blur-md transition-opacity duration-300"
        onClick={closeGameDetail}
      />

      {/* Modal */}
      <div className="fixed inset-0 z-[90] flex items-center justify-center p-4 pointer-events-none">
        <div
          className="pointer-events-auto relative w-full max-w-4xl max-h-[90vh] overflow-y-auto glass-strong rounded-3xl shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <button
            onClick={closeGameDetail}
            className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-xl glass-strong text-slate-300 transition-colors hover:text-white"
          >
            <X className="h-5 w-5" />
          </button>

          {/* Gallery */}
          <div className="relative h-72 sm:h-96 overflow-hidden rounded-t-3xl">
            <img
              src={game.gallery[activeImage]}
              alt={game.title}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-night-400 via-night-400/30 to-transparent" />

            {/* Thumbnails */}
            <div className="absolute bottom-4 left-4 flex gap-2">
              {game.gallery.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImage(i)}
                  className={`h-14 w-20 overflow-hidden rounded-lg border-2 transition-all ${
                    activeImage === i
                      ? 'border-gold-300 scale-105'
                      : 'border-white/20 opacity-60 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt="" className="h-full w-full object-cover" />
                </button>
              ))}
            </div>

            {/* Badge */}
            {game.badge && (
              <span className="absolute left-4 top-4 rounded-lg bg-gradient-to-r from-electric-300 to-violet-300 px-3 py-1 text-xs font-bold text-white shadow-lg">
                {game.badge}
              </span>
            )}
          </div>

          {/* Content */}
          <div className="p-6 sm:p-8">
            {/* Title + rating */}
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <span className="text-xs font-medium uppercase tracking-wide text-electric-50/60">
                  {game.genre}
                </span>
                <h2 className="mt-1 font-display text-2xl font-bold text-white sm:text-3xl">
                  {game.title}
                </h2>
                <div className="mt-2 flex items-center gap-4">
                  <span className="flex items-center gap-1.5 text-sm text-slate-300">
                    <Star className="h-4 w-4 fill-gold-300 text-gold-300" />
                    {game.rating} / 5
                  </span>
                  {game.includedInPass && (
                    <span className="rounded-md bg-gold-300/15 px-2.5 py-1 text-xs font-semibold text-gold-200">
                      Inclus dans AILA Pass
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Meta info */}
            <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
              <div className="flex items-center gap-2.5">
                <Building2 className="h-4 w-4 text-slate-500" />
                <div>
                  <div className="text-xs text-slate-500">Studio</div>
                  <div className="text-sm font-medium text-slate-200">{game.developer}</div>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <Calendar className="h-4 w-4 text-slate-500" />
                <div>
                  <div className="text-xs text-slate-500">Sortie</div>
                  <div className="text-sm font-medium text-slate-200">
                    {new Date(game.releaseDate).toLocaleDateString('fr-FR', { day: 'numeric', month: 'short', year: 'numeric' })}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <Monitor className="h-4 w-4 text-slate-500" />
                <div>
                  <div className="text-xs text-slate-500">Plateformes</div>
                  <div className="text-sm font-medium text-slate-200">{game.platforms.join(', ')}</div>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <Gamepad2 className="h-4 w-4 text-slate-500" />
                <div>
                  <div className="text-xs text-slate-500">Genre</div>
                  <div className="text-sm font-medium text-slate-200">{game.genre}</div>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="mt-6">
              <h3 className="font-display text-sm font-bold text-white">Description</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">
                {game.description}
              </p>
            </div>

            {/* Actions */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              {/* Buy */}
              <div className="flex-1 rounded-2xl glass p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xs text-slate-400">Achat définitif</span>
                    <div className="mt-1 flex items-baseline gap-2">
                      {discountedPrice ? (
                        <>
                          <span className="text-2xl font-bold text-white">{discountedPrice}€</span>
                          <span className="text-sm text-slate-500 line-through">{game.price}€</span>
                        </>
                      ) : (
                        <span className="text-2xl font-bold text-white">{game.price}€</span>
                      )}
                    </div>
                  </div>
                  <button
                    onClick={() => handleAdd('achat')}
                    className={`flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-bold transition-all ${
                      addedType === 'achat'
                        ? 'bg-emerald-500/20 text-emerald-300'
                        : 'bg-gradient-to-r from-electric-300 to-violet-300 text-white shadow-lg shadow-electric-500/20 hover:scale-105'
                    }`}
                  >
                    {addedType === 'achat' ? (
                      <><Check className="h-4 w-4" /> Ajouté</>
                    ) : (
                      <><ShoppingCart className="h-4 w-4" /> Acheter</>
                    )}
                  </button>
                </div>
              </div>

              {/* Rent */}
              <div className="flex-1 rounded-2xl glass p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xs text-slate-400">Location / semaine</span>
                    <div className="mt-1 flex items-baseline gap-1">
                      <span className="text-2xl font-bold text-gold-300">{game.rentalPrice}€</span>
                      <span className="text-sm text-slate-400">/sem</span>
                    </div>
                  </div>
                  <button
                    onClick={() => handleAdd('location')}
                    className={`flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-bold transition-all ${
                      addedType === 'location'
                        ? 'bg-emerald-500/20 text-emerald-300'
                        : 'bg-gold-300/15 text-gold-200 border border-gold-300/30 hover:bg-gold-300/25'
                    }`}
                  >
                    {addedType === 'location' ? (
                      <><Check className="h-4 w-4" /> Ajouté</>
                    ) : (
                      <><Clock className="h-4 w-4" /> Louer</>
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Pass CTA */}
            {game.includedInPass && (
              <div className="mt-4 flex items-center gap-3 rounded-xl glass-gold p-4">
                <Download className="h-5 w-5 text-gold-300" />
                <p className="text-sm text-slate-300">
                  Ce jeu est inclus dans l'AILA Pass.{' '}
                  <span className="font-semibold text-gold-200">Abonnez-vous dès 9,99€/mois pour y jouer sans limite.</span>
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
