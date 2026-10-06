import {
  Users, Swords, Brain, BookOpen, Ghost, Infinity as InfinityIcon,
  type LucideIcon, ArrowRight,
} from 'lucide-react';
import { categoryUniverses, type CategoryUniverse } from '@/data/games';

const iconMap: Record<string, LucideIcon> = {
  Users,
  Swords,
  Brain,
  BookOpen,
  Ghost,
  Infinity: InfinityIcon,
};

function UniverseCard({ universe, index }: { universe: CategoryUniverse; index: number }) {
  const Icon = iconMap[universe.icon];
  const isHorror = universe.highlighted;

  return (
    <div
      className={`group animate-fade-in-up relative overflow-hidden rounded-2xl p-7 opacity-0 transition-all duration-500 hover:-translate-y-1 ${
        isHorror
          ? 'border border-red-900/40 bg-gradient-to-br from-red-950/30 to-night-400/60 backdrop-blur-xl'
          : 'glass'
      }`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Ambient glow */}
      <div
        className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full opacity-10 blur-3xl transition-opacity duration-500 group-hover:opacity-25"
        style={{ background: universe.glow }}
      />

      {/* Horror fog effect */}
      {isHorror && (
        <div className="pointer-events-none absolute inset-0 opacity-30">
          <div className="absolute bottom-0 left-0 h-24 w-full bg-gradient-to-t from-red-950/40 to-transparent" />
        </div>
      )}

      <div className="relative">
        {/* Icon */}
        <div
          className={`mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${universe.accent} shadow-lg`}
        >
          {Icon && <Icon className="h-7 w-7 text-white" strokeWidth={1.8} />}
        </div>

        {/* Title */}
        <h3 className="flex items-center gap-2 font-display text-lg font-bold text-white">
          {universe.title}
          {isHorror && (
            <span className="rounded-md bg-red-600/20 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-red-400">
              Mis en avant
            </span>
          )}
        </h3>

        {/* Tags */}
        <div className="mt-4 flex flex-wrap gap-2">
          {universe.tags.map((tag) => (
            <span
              key={tag}
              className={`rounded-lg px-2.5 py-1 text-xs font-medium ${
                isHorror
                  ? 'bg-red-950/40 text-red-300/80 border border-red-900/20'
                  : 'bg-white/5 text-slate-300 border border-white/5'
              }`}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Description */}
        <p className={`mt-4 text-sm leading-relaxed ${isHorror ? 'text-red-200/60' : 'text-slate-400'}`}>
          {universe.description}
        </p>

        {/* Link */}
        <a
          href="#boutique"
          className={`mt-5 inline-flex items-center gap-1.5 text-sm font-semibold transition-all group/link ${
            isHorror ? 'text-red-400 hover:text-red-300' : 'text-electric-50 hover:text-white'
          }`}
        >
          Explorer
          <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
        </a>
      </div>
    </div>
  );
}

export default function Categories() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mb-14 text-center">
          <h2 className="font-display text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Tous les mondes du jeu
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-400">
            Par univers de joueurs — trouvez celui qui vous correspond.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {categoryUniverses.map((uni, i) => (
            <UniverseCard key={uni.id} universe={uni} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
