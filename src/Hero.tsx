import { Sparkles, ArrowRight, Crown } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="accueil"
      className="relative flex min-h-screen items-center justify-center overflow-hidden pt-24"
    >
      {/* Background gradient — bleu nuit → bleu-violet */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-night-500 via-night-400 to-violet-900" />
        <div className="absolute inset-0 bg-gradient-to-t from-night-700 via-transparent to-night-500/50" />
      </div>

      {/* Subtle pattern */}
      <div
        className="absolute inset-0 z-0 opacity-[0.02]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(124,138,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(124,138,255,1) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      {/* Glowing orbs — subtle */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute left-[15%] top-[25%] h-80 w-80 rounded-full bg-electric-400/12 blur-[120px]" />
        <div className="absolute right-[12%] top-[35%] h-72 w-72 rounded-full bg-violet-400/10 blur-[110px]" />
        <div className="absolute left-[45%] bottom-[8%] h-64 w-64 rounded-full bg-gold-300/8 blur-[100px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          {/* Badge */}
          <div className="animate-fade-in mb-8 inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-sm font-medium text-slate-200">
            <Sparkles className="h-4 w-4 text-gold-300" />
            <span>La plateforme de jeux pour tous</span>
          </div>

          {/* Title */}
          <h1 className="animate-fade-in-delay-1 font-display text-5xl font-extrabold leading-[1.1] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
            <span className="bg-gradient-to-r from-electric-50 via-violet-100 to-gold-300 bg-clip-text text-transparent">
              AILA Store
            </span>
          </h1>

          {/* Subtitle */}
          <p className="animate-fade-in-delay-2 mt-6 max-w-2xl text-lg font-medium leading-relaxed text-slate-300 sm:text-xl md:text-2xl">
            La plateforme de jeux pour tous.{' '}
            <span className="text-white">Achat</span>
            <span className="mx-2 text-slate-500">·</span>
            <span className="text-white">Location</span>
            <span className="mx-2 text-slate-500">·</span>
            <span className="text-white">Abonnement</span>
          </p>

          {/* CTAs */}
          <div className="animate-fade-in-delay-3 mt-12 flex flex-col items-center gap-4 sm:flex-row">
            <a
              href="#boutique"
              className="group flex items-center gap-3 rounded-2xl bg-gradient-to-r from-gold-200 to-gold-400 px-8 py-4 text-base font-bold text-night-700 shadow-xl shadow-gold-500/25 transition-all hover:brightness-110 hover:shadow-gold-400/40"
            >
              Découvrir la boutique
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#aila-pass"
              className="group flex items-center gap-3 rounded-2xl border-2 border-gold-300/40 bg-transparent px-8 py-4 text-base font-bold text-gold-100 transition-all hover:border-gold-300/70 hover:bg-gold-300/10"
            >
              <Crown className="h-5 w-5 text-gold-300" />
              AILA Pass — dès 9,99€/mois
            </a>
          </div>

          {/* Stats */}
          <div className="animate-fade-in-delay-4 mt-16 flex flex-wrap items-center justify-center gap-8 sm:gap-14">
            {[
              { value: '12K+', label: 'Jeux disponibles' },
              { value: '850K', label: 'Joueurs actifs' },
              { value: '4.8★', label: 'Note moyenne' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-display text-3xl font-bold text-white">
                  {stat.value}
                </div>
                <div className="mt-1 text-sm text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-float">
        <div className="flex h-10 w-6 justify-center rounded-full border-2 border-slate-500/30 pt-2">
          <div className="h-2 w-1 rounded-full bg-slate-400/50" />
        </div>
      </div>
    </section>
  );
}
