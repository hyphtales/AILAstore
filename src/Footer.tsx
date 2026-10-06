import { useState } from 'react';
import { Gamepad2, Mail, Twitter, Youtube, Instagram, Send, Check, Loader2 } from 'lucide-react';
import { supabase } from '@/lib/supabase';
import { useApp } from '@/context/AppContext';

const footerColumns = [
  {
    title: 'Boutique',
    links: ['Boutique', 'AILA Pass', 'Promotions'],
  },
  {
    title: 'Infos',
    links: [
      { label: 'À propos', action: 'home' as const },
      { label: 'Contact', action: 'home' as const },
      { label: 'Presse', action: 'home' as const },
    ],
  },
  {
    title: 'Légal',
    links: ['CGU', 'Confidentialité', 'Mentions légales'],
  },
];

export default function Footer() {
  const { navigate } = useApp();
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setStatus('loading');
    try {
      const { error } = await supabase
        .from('newsletter_subscriptions')
        .insert({ email });
      if (error) {
        if (error.code === '23505') {
          setStatus('success');
        } else {
          throw error;
        }
      } else {
        setStatus('success');
      }
      setEmail('');
      setTimeout(() => setStatus('idle'), 4000);
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 4000);
    }
  };

  return (
    <footer id="contact" className="relative border-t border-white/5 pt-20 pb-8">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-0 bottom-0 h-64 w-96 rounded-full bg-electric-400/5 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Top section */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-4">
            <button
              onClick={() => navigate('home')}
              className="flex items-center gap-2.5"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-electric-300 to-violet-400 shadow-lg">
                <Gamepad2 className="h-6 w-6 text-white" strokeWidth={2.5} />
              </div>
              <span className="font-display text-xl font-extrabold text-white">
                AILA<span className="text-gradient-gold">Store</span>
              </span>
            </button>
            <p className="mt-4 max-w-xs font-display text-lg font-semibold text-slate-300">
              Jouez librement
            </p>
            <p className="mt-2 max-w-xs text-sm text-slate-400 leading-relaxed">
              La plateforme de gaming nouvelle génération. Achetez, louez et jouez à des milliers de titres.
            </p>
            <div className="mt-5 flex gap-3">
              {[Twitter, Youtube, Instagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-xl glass text-slate-400 transition-all hover:text-white hover:bg-white/10"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {footerColumns.map((col) => (
            <div key={col.title} className="lg:col-span-2">
              <h4 className="font-display text-sm font-bold text-white">{col.title}</h4>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => {
                  if (typeof link === 'string') {
                    return (
                      <li key={link}>
                        <a href="#" className="text-sm text-slate-400 transition-colors hover:text-electric-50">
                          {link}
                        </a>
                      </li>
                    );
                  }
                  return (
                    <li key={link.label}>
                      <button
                        onClick={() => navigate(link.action)}
                        className="text-sm text-slate-400 transition-colors hover:text-electric-50"
                      >
                        {link.label}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}

          {/* Newsletter */}
          <div className="lg:col-span-2">
            <h4 className="font-display text-sm font-bold text-white">Newsletter</h4>
            <p className="mt-4 text-sm text-slate-400">
              Offres exclusives et nouveautés.
            </p>
            <form onSubmit={handleSubscribe} className="mt-4">
              <div className="flex items-center gap-2">
                <div className="relative flex-1">
                  <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    required
                    className="w-full rounded-xl glass-strong py-3 pl-10 pr-3 text-sm text-white placeholder:text-slate-500 outline-none transition-all focus:ring-2 focus:ring-electric-400/50"
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-gold-300 to-gold-400 text-night-700 shadow-lg shadow-gold-500/20 transition-all hover:scale-105 hover:brightness-110 disabled:opacity-50"
                  aria-label="S'abonner"
                >
                  {status === 'loading' ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : status === 'success' ? (
                    <Check className="h-4 w-4" />
                  ) : (
                    <Send className="h-4 w-4" />
                  )}
                </button>
              </div>
              {status === 'success' && (
                <p className="mt-2 text-xs text-emerald-400">Inscription confirmée !</p>
              )}
              {status === 'error' && (
                <p className="mt-2 text-xs text-red-400">Une erreur est survenue.</p>
              )}
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 md:flex-row">
          <p className="text-xs text-slate-500">
            © 2026 AILA Store — Tous droits réservés.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-slate-500 transition-colors hover:text-white">CGU</a>
            <a href="#" className="text-xs text-slate-500 transition-colors hover:text-white">Confidentialité</a>
            <a href="#" className="text-xs text-slate-500 transition-colors hover:text-white">Mentions légales</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
