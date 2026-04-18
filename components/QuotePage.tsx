'use client';

import { useState, FormEvent } from 'react';
import { Icon } from './Icon';
import type { Locale, TranslationSet } from '@/lib/i18n';

interface Props { t: TranslationSet; lang: Locale; }

export default function QuotePage({ t, lang }: Props) {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '', company: '', email: '', phone: '',
    type: t.quote.types[0] as string, message: '',
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    // For production: connect to Web3Forms, Formspree, or your own API
    // For now, show success confirmation
    setSubmitted(true);
  };

  return (
    <section className="min-h-[80vh] py-[72px] px-4 md:px-8" style={{ background: '#F7F8FA' }}>
      <div className="max-w-[960px] mx-auto grid grid-cols-1 md:grid-cols-[1fr_1.4fr] gap-12">
        <div>
          <div className="text-xs font-semibold mb-4 uppercase" style={{ letterSpacing: '0.22em', color: '#1B4FA0' }}>{t.nav.quote}</div>
          <h1 className="font-barlow text-5xl font-bold text-navy m-0" style={{ lineHeight: 1.05, letterSpacing: '-0.02em' }}>{t.quote.title}</h1>
          <p className="text-base mt-4" style={{ lineHeight: 1.6, color: '#4A5265' }}>{t.quote.sub}</p>

          <div className="mt-8 p-5 bg-white rounded-lg" style={{ border: '1px solid #D9DEE6' }}>
            <div className="text-xs font-bold uppercase mb-3" style={{ color: '#4A5265', letterSpacing: '0.1em' }}>
              {lang === 'es' ? 'Contacto directo' : 'Direct contact'}
            </div>
            <div className="flex flex-col gap-2.5 text-sm text-navy">
              <div className="flex items-center gap-2.5"><Icon name="phone" size={15} /> (305) 863-7417</div>
              <div className="flex items-center gap-2.5"><Icon name="whatsapp" size={15} /> (786) 679-6741</div>
              <div className="flex items-center gap-2.5"><Icon name="mail" size={15} /> info@kobetradingusa.com</div>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="bg-white p-9 rounded-xl" style={{ border: '1px solid #D9DEE6' }}>
          {submitted ? (
            <div className="p-8 text-center">
              <div className="w-16 h-16 mx-auto rounded-full flex items-center justify-center" style={{ background: '#EBF2FC', color: '#1B4FA0' }}>
                <Icon name="check" size={32} stroke={2.5} />
              </div>
              <h3 className="font-barlow text-[26px] font-bold text-navy mt-5">{t.quote.success}</h3>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <Field label={t.quote.name} value={form.name} onChange={v => setForm({ ...form, name: v })} required />
                <Field label={t.quote.company} value={form.company} onChange={v => setForm({ ...form, company: v })} />
                <Field label={t.quote.email} value={form.email} onChange={v => setForm({ ...form, email: v })} type="email" required />
                <Field label={t.quote.phone} value={form.phone} onChange={v => setForm({ ...form, phone: v })} type="tel" />
              </div>
              <div className="mt-3.5">
                <Label>{t.quote.type}</Label>
                <select value={form.type} onChange={e => setForm({ ...form, type: e.target.value })}
                  className="w-full p-3 rounded-md text-sm text-navy bg-white" style={{ border: '1px solid #D9DEE6' }}>
                  {t.quote.types.map((tp, i) => <option key={i}>{tp}</option>)}
                </select>
              </div>
              <div className="mt-3.5">
                <Label>{t.quote.message}</Label>
                <textarea value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} rows={5}
                  className="w-full p-3 rounded-md text-sm text-navy font-[inherit] resize-y" style={{ border: '1px solid #D9DEE6' }} />
              </div>
              <button type="submit"
                className="mt-5 w-full bg-navy text-white px-6 py-3.5 font-semibold text-[15px] rounded-md flex items-center justify-center gap-2.5 hover:bg-navy-deep transition-colors cursor-pointer">
                {t.quote.submit} <Icon name="arrow" size={16} />
              </button>
            </>
          )}
        </form>
      </div>
    </section>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return <div className="text-xs font-semibold uppercase mb-1.5" style={{ color: '#4A5265', letterSpacing: '0.04em' }}>{children}</div>;
}

function Field({ label, value, onChange, type = 'text', required = false }: {
  label: string; value: string; onChange: (v: string) => void; type?: string; required?: boolean;
}) {
  return (
    <div>
      <Label>{label}</Label>
      <input type={type} value={value} onChange={e => onChange(e.target.value)} required={required}
        className="w-full p-3 rounded-md text-sm text-navy" style={{ border: '1px solid #D9DEE6' }} />
    </div>
  );
}
