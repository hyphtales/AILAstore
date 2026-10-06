import { ShieldCheck, Handshake, MessageCircle } from 'lucide-react';

const trustItems = [
  {
    icon: ShieldCheck,
    title: 'Sécurisé',
    description: 'Paiements protégés, données respectées',
    accent: 'from-electric-300 to-violet-300',
  },
  {
    icon: Handshake,
    title: 'Équitable',
    description: 'Conditions justes pour les créateurs',
    accent: 'from-gold-300 to-gold-400',
  },
  {
    icon: MessageCircle,
    title: 'À votre écoute',
    description: 'Support réactif, quand vous en avez besoin',
    accent: 'from-emerald-400 to-teal-400',
  },
];

export default function Trust() {
  return (
    <section id="apropos" className="relative py-20 lg:py-28">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mb-14 text-center">
          <h2 className="font-display text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
            Pourquoi nous faire confiance
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {trustItems.map((item, i) => (
            <div
              key={item.title}
              className="animate-fade-in-up flex flex-col items-center rounded-2xl glass p-8 text-center opacity-0 transition-all duration-500 hover:-translate-y-1"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div
                className={`mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${item.accent} shadow-lg`}
              >
                <item.icon className="h-7 w-7 text-white" strokeWidth={1.8} />
              </div>
              <h3 className="font-display text-lg font-bold text-white">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
