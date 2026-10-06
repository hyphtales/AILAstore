import { Star, ShoppingCart, Clock, ArrowRight } from 'lucide-react';
import { featuredGames, type Game } from '@/data/games';
import { useApp } from '@/context/AppContext';
import { useCart } from '@/context/CartContext';

const badgeStyles: Record<string, string> = {
  'Nouveau': 'bg-gradient-to-r from-electric-300 to-violet-300 text-white',
  'En promotion': 'bg-gold-300 text-night-700',
  'Exclusivité': 'bg-gradient-to-r from-violet-300 to-electric-400 text-white',
};

function GameCard({ game, index }: { game: Game; index: number }) {
  const { openGameDetail } = useApp();
  const { addToCart } = useCart();
  const discountedPrice = game.discount
    ? (game.price * (1 - game.discount / 100)).toFixed(2)
    : null;

  return (
    <article
      className="group animate-fade-in-up opacity-0"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div
        className="relative overflow-hidden rounded-2xl glass transition-all duration-500 hover:shadow-xl hover:shadow-electric-500/10 hover:-translate-y-1.5 hover:border-electric-400/30 cursor-pointer h-full"
        onClick={() => openGameDetail(game.id)}
      >
        {/* Image */}
        <div className="relative h-56 overflow-hidden">
          <img
            src={game.image}
            alt={game.title}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-night-400 via-night-400/30 to-transparent" />

          {/* Badge */}
          {game.badge && (
            <span
              className={`absolute left-3 top-3 rounded-lg px-3 py-1 text-xs font-bold shadow-lg ${badgeStyles[game.badge]}`}
            >
              {game.badge}
            </span>
          )}

          {/* Discount */}
          {game.discount && (
            <span className="absolute right-3 top-3 rounded-lg bg-night-700/80 px-3 py-1 text-xs font-bold text-gold-300 backdrop-blur-sm shadow-lg">
              -{game.discount}%
            </span>
          )}

          {/* Rating */}
          <div className="absolute bottom-3 left-3 flex items-center gap-1.5 rounded-lg glass-strong px-2.5 py-1">
            <Star className="h-3.5 w-3.5 fill-gold-300 text-gold-300" />
            <span className="text-xs font-semibold text-white">{game.rating}</span>
          </div>

          {/* Hover detail hint */}
          <div className="absolute bottom-3 right-3 translate-y-2 rounded-lg glass-strong px-3 py-1.5 text-xs font-medium text-electric-50 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
            Voir la fiche
          </div>
        </div>

        {/* Body */}
        <div className="p-5" onClick={(e) => e.stopPropagation()}>
          <span className="text-xs font-medium uppercase tracking-wide text-electric-50/60">
            {game.genre}
          </span>
          <h3 className="mt-1 font-display text-lg font-bold text-white transition-colors group-hover:text-electric-50">
            {game.title}
          </h3>

          {/* Pricing */}
          <div className="mt-4 flex items-end justify-between">
            <div className="flex flex-col gap-1">
              <div className="flex items-baseline gap-2">
                {discountedPrice ? (
                  <>
                    <span className="text-lg font-bold text-white">{discountedPrice}€</span>
                    <span className="text-sm text-slate-500 line-through">{game.price}€</span>
                  </>
                ) : (
                  <span className="text-lg font-bold text-white">{game.price}€</span>
                )}
              </div>
              <div className="flex items-center gap-1 text-xs text-slate-400">
                <Clock className="h-3.5 w-3.5" />
                Louer dès {game.rentalPrice}€/sem
              </div>
            </div>

            <button
              onClick={() => addToCart(game, 'achat')}
              className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-electric-300 to-violet-300 text-white shadow-lg shadow-electric-500/20 transition-all hover:scale-110 hover:shadow-electric-400/40"
            >
              <ShoppingCart className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Hover glow line */}
        <div className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-transparent via-electric-400/60 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      </div>
    </article>
  );
}

export default function FeaturedGames() {
  return (
    <section id="boutique" className="relative py-24 lg:py-32">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <h2 className="font-display text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              Sélection du moment
            </h2>
            <p className="mt-3 max-w-xl text-base text-slate-400">
              Les titres les plus populaires, disponibles à l'achat ou en location.
            </p>
          </div>

          <a
            href="#"
            className="group flex items-center gap-2 rounded-xl glass px-5 py-3 text-sm font-semibold text-white transition-all hover:bg-white/10"
          >
            Voir tout
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredGames.map((game, i) => (
            <GameCard key={game.id} game={game} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
