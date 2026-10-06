import { Crown, Check, Sparkles, Star, Clock, ShoppingCart, Download } from 'lucide-react';
import { ailaPassGames, type Game } from '@/data/games';
import { useCart } from '@/context/CartContext';
import { useApp } from '@/context/AppContext';

const benefits = [
  { icon: '🎮', text: 'Accès à +500 jeux' },
  { icon: '✨', text: 'Nouveautés chaque semaine' },
  { icon: '💰', text: 'Réductions exclusives' },
  { icon: '🔓', text: 'Sans engagement' },
];

const plans = [
  {
    name: 'Essentiel',
    price: '9,99',
    period: '/mois',
    features: [
      { label: '200+ jeux', included: true },
      { label: '1 profil', included: true },
      { label: 'Location 7 jours', included: true },
      { label: 'Qualité standard', included: true },
      { label: '4K HDR', included: false },
      { label: 'Jeux jour 1', included: false },
      { label: 'Partage familial', included: false },
    ],
    highlighted: false,
  },
  {
    name: 'Premium',
    price: '14,99',
    period: '/mois',
    features: [
      { label: '500+ jeux', included: true },
      { label: '3 profils', included: true },
      { label: 'Location illimitée', included: true },
      { label: 'Qualité 4K HDR', included: true },
      { label: 'Jeux jour 1', included: true },
      { label: 'Réductions exclusives', included: true },
      { label: 'Partage familial', included: false },
    ],
    highlighted: true,
  },
  {
    name: 'Famille',
    price: '19,99',
    period: '/mois',
    features: [
      { label: '800+ jeux', included: true },
      { label: '5 profils', included: true },
      { label: 'Location illimitée', included: true },
      { label: 'Qualité 4K HDR', included: true },
      { label: 'Jeux jour 1', included: true },
      { label: 'Réductions exclusives', included: true },
      { label: 'Contrôle parental', included: true },
    ],
    highlighted: false,
  },
];

function PassGameCard({ game }: { game: Game }) {
  const { openGameDetail } = useApp();

  return (
    <button
      onClick={() => openGameDetail(game.id)}
      className="group relative overflow-hidden rounded-2xl glass text-left transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-electric-500/10"
    >
      <div className="relative h-40 overflow-hidden">
        <img
          src={game.image}
          alt={game.title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-night-400 via-night-400/30 to-transparent" />
        <div className="absolute bottom-3 left-3 flex items-center gap-1.5 rounded-lg glass-strong px-2.5 py-1">
          <Star className="h-3.5 w-3.5 fill-gold-300 text-gold-300" />
          <span className="text-xs font-semibold text-white">{game.rating}</span>
        </div>
        <div className="absolute right-3 top-3 rounded-lg bg-gold-300/90 px-2.5 py-1 text-[10px] font-bold text-night-700">
          Pass
        </div>
      </div>
      <div className="p-4">
        <h4 className="text-sm font-bold text-white transition-colors group-hover:text-electric-50">
          {game.title}
        </h4>
        <p className="mt-0.5 text-xs text-slate-400">{game.genre}</p>
      </div>
    </button>
  );
}

export default function AILAPassPage() {
  const { addToCart } = useCart();

  return (
    <div className="relative pt-32 pb-20">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-20 h-[500px] w-[600px] -translate-x-1/2 rounded-full bg-violet-500/8 blur-[150px]" />
        <div className="absolute right-0 top-1/3 h-72 w-72 rounded-full bg-gold-300/6 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full glass-gold px-4 py-2 text-sm font-medium text-gold-100">
            <Crown className="h-4 w-4 text-gold-300" />
            AILA Pass
          </div>
          <h1 className="font-display text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
            AILA Pass — La liberté de jouer
          </h1>
          <p className="mt-6 text-lg text-slate-400">
            Accédez à un catalogue premium, louez sans limite et profitez d'avantages exclusifs.
          </p>
        </div>

        {/* Benefits */}
        <div className="mb-14 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {benefits.map((benefit, i) => (
            <div
              key={benefit.text}
              className="animate-fade-in-up flex items-center gap-3 rounded-2xl glass px-5 py-4 opacity-0"
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <span className="text-xl">{benefit.icon}</span>
              <span className="text-sm font-medium text-slate-200">{benefit.text}</span>
            </div>
          ))}
        </div>

        {/* Included games gallery */}
        <div className="mb-20">
          <div className="mb-8 flex items-end justify-between">
            <div>
              <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">
                Jeux inclus dans le Pass
              </h2>
              <p className="mt-2 text-sm text-slate-400">
                Une sélection qui s'élargit chaque semaine.
              </p>
            </div>
            <span className="rounded-lg glass px-3 py-1.5 text-xs font-semibold text-slate-300">
              {ailaPassGames.length} jeux affichés
            </span>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {ailaPassGames.map((game) => (
              <PassGameCard key={game.id} game={game} />
            ))}
          </div>
        </div>

        {/* Comparison table */}
        <div className="mb-14">
          <h2 className="mb-8 text-center font-display text-3xl font-bold text-white">
            Comparez les formules
          </h2>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {plans.map((plan, i) => (
              <div
                key={plan.name}
                className={`animate-fade-in-up relative rounded-3xl p-8 opacity-0 transition-all duration-500 hover:-translate-y-1 ${
                  plan.highlighted
                    ? 'border-2 border-gold-300/50 bg-night-400/60 backdrop-blur-xl glow-gold lg:scale-105'
                    : 'glass'
                }`}
                style={{ animationDelay: `${i * 0.15}s` }}
              >
                {plan.highlighted && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 flex items-center gap-1.5 rounded-full bg-gradient-to-r from-gold-300 to-gold-400 px-4 py-1.5 text-xs font-bold text-night-700 shadow-lg">
                    <Sparkles className="h-3 w-3" />
                    Recommandé
                  </div>
                )}

                <h3 className="font-display text-xl font-bold text-white">{plan.name}</h3>

                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold text-white">{plan.price}€</span>
                  <span className="text-lg text-slate-400">{plan.period}</span>
                </div>

                <ul className="mt-6 space-y-3">
                  {plan.features.map((feat) => (
                    <li key={feat.label} className="flex items-center gap-3 text-sm">
                      {feat.included ? (
                        <span
                          className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                            plan.highlighted ? 'bg-gold-300/20 text-gold-300' : 'bg-electric-400/20 text-electric-50'
                          }`}
                        >
                          <Check className="h-3 w-3" strokeWidth={3} />
                        </span>
                      ) : (
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/5 text-slate-600">
                          <span className="text-xs">—</span>
                        </span>
                      )}
                      <span className={feat.included ? 'text-slate-300' : 'text-slate-600'}>
                        {feat.label}
                      </span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`mt-8 w-full rounded-xl py-3.5 text-sm font-bold transition-all ${
                    plan.highlighted
                      ? 'bg-gradient-to-r from-gold-300 to-gold-400 text-night-700 shadow-lg shadow-gold-500/25 hover:brightness-110'
                      : 'bg-white/5 text-white hover:bg-white/10'
                  }`}
                >
                  S'abonner
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Detailed comparison table */}
        <div className="mb-14 overflow-hidden rounded-2xl glass">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/10">
                <th className="px-6 py-4 text-left text-sm font-semibold text-slate-400">Fonctionnalité</th>
                <th className="px-6 py-4 text-center text-sm font-bold text-slate-300">Essentiel</th>
                <th className="px-6 py-4 text-center text-sm font-bold text-gold-300">Premium</th>
                <th className="px-6 py-4 text-center text-sm font-bold text-slate-300">Famille</th>
              </tr>
            </thead>
            <tbody>
              {[
                { feat: 'Nombre de jeux', e: '200+', p: '500+', f: '800+' },
                { feat: 'Profils', e: '1', p: '3', f: '5' },
                { feat: 'Durée de location', e: '7 jours', p: 'Illimitée', f: 'Illimitée' },
                { feat: 'Qualité', e: 'Standard', p: '4K HDR', f: '4K HDR' },
                { feat: 'Jeux jour 1', e: false, p: true, f: true },
                { feat: 'Réductions exclusives', e: false, p: true, f: true },
                { feat: 'Contrôle parental', e: false, p: false, f: true },
              ].map((row, i) => (
                <tr key={row.feat} className={i % 2 === 0 ? 'bg-white/[0.02]' : ''}>
                  <td className="px-6 py-3.5 text-sm text-slate-300">{row.feat}</td>
                  {[row.e, row.p, row.f].map((val, j) => (
                    <td key={j} className="px-6 py-3.5 text-center">
                      {typeof val === 'boolean' ? (
                        val ? (
                          <Check className={`mx-auto h-5 w-5 ${j === 1 ? 'text-gold-300' : 'text-emerald-400'}`} />
                        ) : (
                          <span className="text-slate-600">—</span>
                        )
                      ) : (
                        <span className={`text-sm font-medium ${j === 1 ? 'text-gold-300' : 'text-slate-300'}`}>
                          {val}
                        </span>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Note */}
        <p className="text-center text-sm text-slate-500">
          Sans engagement. Annulez à tout moment. Paiement sécurisé.
        </p>
      </div>
    </div>
  );
}
