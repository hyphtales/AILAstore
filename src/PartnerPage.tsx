import { useState } from 'react';
import {
  Handshake, TrendingUp, Eye, LifeBuoy, Check, ArrowRight,
  Send, Loader2, Building2,
} from 'lucide-react';
import { supabase } from '@/lib/supabase';

const advantages = [
  {
    icon: TrendingUp,
    title: 'Commission réduite à 20%',
    description: 'Gardez 80% de vos revenus, contre 70% chez les autres plateformes. Vous investissez plus dans vos jeux.',
    highlight: true,
  },
  {
    icon: Eye,
    title: 'Visibilité accrue',
    description: 'Mise en avant sur la page d\u2019accueil, newsletters dédiées et campagnes promotionnelles régulières.',
  },
  {
    icon: LifeBuoy,
    title: 'Accompagnement personnalisé',
    description: 'Un interlocuteur dédié, des conseils marketing et un support technique pour chaque lancement.',
  },
  {
    icon: Handshake,
    title: 'Conditions équitables',
    description: 'Contrats transparents, pas d\u2019exclusivité forcée. Vous restez propriétaire de vos œuvres.',
  },
];

const comparison = [
  { feature: 'Commission', aila: '20%', other: '30%' },
  { feature: 'Visibilité page d\u2019accueil', aila: true, other: false },
  { feature: 'Interlocuteur dédié', aila: true, other: false },
  { feature: 'Support marketing', aila: true, other: false },
  { feature: 'Exclusivité requise', aila: false, other: true },
  { feature: 'Paiement mensuel', aila: true, other: true },
];

export default function PartnerPage() {
  const [form, setForm] = useState({
    studio_name: '',
    contact_name: '',
    email: '',
    project_name: '',
    project_type: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const { error } = await supabase.from('partner_applications').insert(form);
      if (error) throw error;
      setStatus('success');
      setForm({
        studio_name: '', contact_name: '', email: '',
        project_name: '', project_type: '', message: '',
      });
      setTimeout(() => setStatus('idle'), 4000);
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 4000);
    }
  };

  return (
    <div className="relative pt-32 pb-20">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/4 top-20 h-80 w-80 rounded-full bg-electric-400/8 blur-[120px]" />
        <div className="absolute right-1/4 bottom-40 h-72 w-72 rounded-full bg-gold-300/6 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Hero */}
        <div className="mb-20 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full glass-gold px-4 py-2 text-sm font-medium text-gold-100">
            <Handshake className="h-4 w-4 text-gold-300" />
            Programme Partenaires
          </div>
          <h1 className="font-display text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
            Devenir Partenaire
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-400">
            Rejoignez AILA Store et bénéficiez d'une commission à <span className="text-gold-300 font-semibold">20%</span> seulement,
            d'une visibilité premium et d'un accompagnement sur-mesure pour vos jeux.
          </p>
        </div>

        {/* Advantages */}
        <div className="mb-20 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {advantages.map((adv, i) => (
            <div
              key={adv.title}
              className={`animate-fade-in-up relative overflow-hidden rounded-2xl p-7 opacity-0 ${
                adv.highlight ? 'glass-gold' : 'glass'
              }`}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl ${
                adv.highlight ? 'bg-gold-300/20' : 'bg-electric-400/20'
              }`}>
                <adv.icon className={`h-6 w-6 ${adv.highlight ? 'text-gold-300' : 'text-electric-50'}`} />
              </div>
              <h3 className="font-display text-lg font-bold text-white">{adv.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">{adv.description}</p>
            </div>
          ))}
        </div>

        {/* Comparison table */}
        <div className="mb-20">
          <h2 className="mb-8 text-center font-display text-3xl font-bold text-white">
            AILA Store vs les autres
          </h2>
          <div className="mx-auto max-w-2xl overflow-hidden rounded-2xl glass">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-400"></th>
                  <th className="px-6 py-4 text-center text-sm font-bold text-gold-300">AILA Store</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-slate-400">Autres</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, i) => (
                  <tr
                    key={row.feature}
                    className={i % 2 === 0 ? 'bg-white/[0.02]' : ''}
                  >
                    <td className="px-6 py-4 text-sm text-slate-300">{row.feature}</td>
                    <td className="px-6 py-4 text-center">
                      {typeof row.aila === 'boolean' ? (
                        row.aila ? (
                          <Check className="mx-auto h-5 w-5 text-emerald-400" />
                        ) : (
                          <span className="text-slate-600">—</span>
                        )
                      ) : (
                        <span className="text-sm font-bold text-gold-300">{row.aila}</span>
                      )}
                    </td>
                    <td className="px-6 py-4 text-center">
                      {typeof row.other === 'boolean' ? (
                        row.other ? (
                          <Check className="mx-auto h-5 w-5 text-slate-500" />
                        ) : (
                          <span className="text-slate-600">—</span>
                        )
                      ) : (
                        <span className="text-sm font-semibold text-slate-400">{row.other}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Contact form */}
        <div className="mx-auto max-w-2xl">
          <div className="rounded-3xl glass-strong p-8 sm:p-10">
            <div className="mb-6 text-center">
              <h2 className="font-display text-2xl font-bold text-white">Postulez maintenant</h2>
              <p className="mt-2 text-sm text-slate-400">
                Dites-nous en plus sur votre studio et votre projet. Nous reviendrons vers vous sous 48h.
              </p>
            </div>

            {status === 'success' ? (
              <div className="flex flex-col items-center py-8 text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/20">
                  <Check className="h-8 w-8 text-emerald-400" />
                </div>
                <h3 className="font-display text-lg font-bold text-white">Candidature envoyée !</h3>
                <p className="mt-2 text-sm text-slate-400">Nous vous contacterons très bientôt.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <FormField
                    label="Nom du studio"
                    name="studio_name"
                    value={form.studio_name}
                    onChange={handleChange}
                    required
                  />
                  <FormField
                    label="Nom du contact"
                    name="contact_name"
                    value={form.contact_name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <FormField
                  label="Email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <FormField
                    label="Nom du projet"
                    name="project_name"
                    value={form.project_name}
                    onChange={handleChange}
                    required
                  />
                  <div>
                    <label className="mb-1.5 block text-xs font-medium text-slate-400">Type de projet</label>
                    <select
                      name="project_type"
                      value={form.project_type}
                      onChange={handleChange}
                      required
                      className="w-full rounded-xl glass-strong px-4 py-3 text-sm text-white outline-none transition-all focus:ring-2 focus:ring-electric-400/50"
                    >
                      <option value="" className="bg-night-400">Sélectionner...</option>
                      <option value="indie" className="bg-night-400">Jeu indie</option>
                      <option value="aa" className="bg-night-400">Jeu AA</option>
                      <option value="aaa" className="bg-night-400">Jeu AAA</option>
                      <option value="dlc" className="bg-night-400">DLC / Extension</option>
                      <option value="other" className="bg-night-400">Autre</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="mb-1.5 block text-xs font-medium text-slate-400">Message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    placeholder="Parlez-nous de votre jeu..."
                    className="w-full rounded-xl glass-strong px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none transition-all focus:ring-2 focus:ring-electric-400/50 resize-none"
                  />
                </div>

                {status === 'error' && (
                  <p className="text-sm text-red-400">Une erreur est survenue. Veuillez réessayer.</p>
                )}

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-gold-300 to-gold-400 py-3.5 text-sm font-bold text-night-700 shadow-lg shadow-gold-500/25 transition-all hover:brightness-110 disabled:opacity-50"
                >
                  {status === 'loading' ? (
                    <><Loader2 className="h-4 w-4 animate-spin" /> Envoi en cours...</>
                  ) : (
                    <><Send className="h-4 w-4" /> Envoyer ma candidature <ArrowRight className="h-4 w-4" /></>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function FormField({
  label, name, value, onChange, type = 'text', required,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-xs font-medium text-slate-400">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full rounded-xl glass-strong px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none transition-all focus:ring-2 focus:ring-electric-400/50"
      />
    </div>
  );
}
