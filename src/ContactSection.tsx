import { useState } from 'react';
import { Mail, MessageCircle, Send, Check, Loader2, User, Tag } from 'lucide-react';
import { supabase } from '@/lib/supabase';

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const { error } = await supabase.from('contact_messages').insert(form);
      if (error) throw error;
      setStatus('success');
      setForm({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 4000);
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 4000);
    }
  };

  return (
    <section id="contact-form" className="relative py-24 lg:py-32">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/3 top-1/4 h-72 w-72 rounded-full bg-electric-400/6 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          {/* Left — info */}
          <div>
            <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
              Contactez-nous
            </h2>
            <p className="mt-4 max-w-md text-base text-slate-400 leading-relaxed">
              Une question, une suggestion ou un problème ? Notre équipe vous répond sous 24h.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-4 rounded-2xl glass p-5">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-electric-300 to-violet-300">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="text-xs text-slate-500">Email</div>
                  <div className="text-sm font-semibold text-white">support@ailastore.com</div>
                </div>
              </div>
              <div className="flex items-center gap-4 rounded-2xl glass p-5">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-gold-300 to-gold-400">
                  <MessageCircle className="h-6 w-6 text-night-700" />
                </div>
                <div>
                  <div className="text-xs text-slate-500">Chat en direct</div>
                  <div className="text-sm font-semibold text-white">Disponible 7j/7, 9h — 22h</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right — form */}
          <div className="rounded-3xl glass-strong p-8">
            {status === 'success' ? (
              <div className="flex h-full flex-col items-center justify-center py-12 text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/20">
                  <Check className="h-8 w-8 text-emerald-400" />
                </div>
                <h3 className="font-display text-lg font-bold text-white">Message envoyé !</h3>
                <p className="mt-2 text-sm text-slate-400">Nous vous répondrons sous 24h.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-xs font-medium text-slate-400">Nom</label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
                      <input
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        className="w-full rounded-xl glass-strong py-3 pl-10 pr-4 text-sm text-white placeholder:text-slate-500 outline-none transition-all focus:ring-2 focus:ring-electric-400/50"
                        placeholder="Votre nom"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="mb-1.5 block text-xs font-medium text-slate-400">Email</label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        className="w-full rounded-xl glass-strong py-3 pl-10 pr-4 text-sm text-white placeholder:text-slate-500 outline-none transition-all focus:ring-2 focus:ring-electric-400/50"
                        placeholder="vous@email.com"
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <label className="mb-1.5 block text-xs font-medium text-slate-400">Sujet</label>
                  <div className="relative">
                    <Tag className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
                    <input
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      required
                      className="w-full rounded-xl glass-strong py-3 pl-10 pr-4 text-sm text-white placeholder:text-slate-500 outline-none transition-all focus:ring-2 focus:ring-electric-400/50"
                      placeholder="Objet de votre message"
                    />
                  </div>
                </div>
                <div>
                  <label className="mb-1.5 block text-xs font-medium text-slate-400">Message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Votre message..."
                    className="w-full rounded-xl glass-strong px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none transition-all focus:ring-2 focus:ring-electric-400/50 resize-none"
                  />
                </div>

                {status === 'error' && (
                  <p className="text-sm text-red-400">Une erreur est survenue. Veuillez réessayer.</p>
                )}

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-electric-300 to-violet-300 py-3.5 text-sm font-bold text-white shadow-lg shadow-electric-500/25 transition-all hover:brightness-110 disabled:opacity-50"
                >
                  {status === 'loading' ? (
                    <><Loader2 className="h-4 w-4 animate-spin" /> Envoi...</>
                  ) : (
                    <><Send className="h-4 w-4" /> Envoyer le message</>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
