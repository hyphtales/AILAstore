import { Crown, Check, Sparkles } from 'lucide-react';

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
    features: ['200+ jeux', '1 profil', 'Location 7 jours', 'Qualité standard'],
    highlighted: false,
  },
  {
    name: 'Premium',
    price: '14,99',
    period: '/mois',
    features: ['500+ jeux', '3 profils', 'Location illimitée', 'Qualité 4K HDR', 'Jeux jour 1'],
    highlighted: true,
  },
  {
    name: 'Famille',
    price: '19,99',
    period: '/mois',
    features: ['800+ jeux', '5 profils', 'Location illimitée', 'Qualité 4K HDR', 'Jeux jour 1', 'Contrôle parental'],
    highlighted: false,
  },
];

export default function AILAPass() {
  return (
    <section id="aila-pass" className="relative py-24 lg:py-32">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/8 blur-[150px]" />
        <div className="absolute right-0 top-1/3 h-72 w-72 rounded-full bg-gold-300/6 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full glass-gold px-4 py-2 text-sm font-medium text-gold-100">
            <Crown className="h-4 w-4 text-gold-300" />
            AILA Pass
          </div>
          <h2 className="font-display text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            AILA Pass — La liberté de jouer
          </h2>
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

        {/* Plans */}
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

              <h3 className="font-display text-xl font-bold text-white">
                {plan.name}
              </h3>

              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-4xl font-extrabold text-white">{plan.price}€</span>
                <span className="text-lg text-slate-400">{plan.period}</span>
              </div>

              <ul className="mt-6 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm text-slate-300">
                    <span
                      className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                        plan.highlighted
                          ? 'bg-gold-300/20 text-gold-300'
                          : 'bg-electric-400/20 text-electric-50'
                      }`}
                    >
                      <Check className="h-3 w-3" strokeWidth={3} />
                    </span>
                    {feature}
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
                Sélectionner
              </button>
            </div>
          ))}
        </div>

        {/* Note */}
        <p className="mt-8 text-center text-sm text-slate-500">
          Sans engagement. Annulez à tout moment. Paiement sécurisé.
        </p>
      </div>
    </section>
  );
}
