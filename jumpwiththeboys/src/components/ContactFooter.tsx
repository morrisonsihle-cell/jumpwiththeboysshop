import React, { useState } from 'react';
import { Clock, MapPin, CircleCheck, Instagram, Facebook } from 'lucide-react';
import { SOCIAL_LINKS, STORE_ADDRESS, WhatsAppIcon } from './Navbar';

export function TikTokIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M16.6 5.82c-.9-.6-1.5-1.55-1.62-2.65h-2.85v13.06c0 1.4-1.14 2.53-2.53 2.53a2.53 2.53 0 1 1 0-5.06c.26 0 .5.04.73.1V10.9a5.36 5.36 0 0 0-.73-.05 5.35 5.35 0 1 0 5.35 5.35V9.28a7.5 7.5 0 0 0 4.35 1.4V7.8a4.85 4.85 0 0 1-2.7-1.98z" />
    </svg>
  );
}

const SCHEDULE = [
  { day: 'Monday', hours: '08:00 â€“ 17:00', start: 8, end: 17 },
  { day: 'Tuesday', hours: '08:00 â€“ 17:00', start: 8, end: 17 },
  { day: 'Wednesday', hours: '08:00 â€“ 17:00', start: 8, end: 17 },
  { day: 'Thursday', hours: '08:00 â€“ 17:00', start: 8, end: 17 },
  { day: 'Friday', hours: '08:00 â€“ 17:00', start: 8, end: 17 },
  { day: 'Saturday', hours: '08:00 â€“ 13:00', start: 8, end: 13 },
  { day: 'Sunday', hours: 'Closed', start: null, end: null },
];

function isStoreOpen(): boolean {
  const now = new Date();
  const day = now.getDay();
  const time = now.getHours() + now.getMinutes() / 60;
  const hoursMap: Record<number, { start: number; end: number } | null> = {
    0: null,
    1: { start: 8, end: 17 },
    2: { start: 8, end: 17 },
    3: { start: 8, end: 17 },
    4: { start: 8, end: 17 },
    5: { start: 8, end: 17 },
    6: { start: 8, end: 13 },
  };
  const slot = hoursMap[day];
  return slot ? time >= slot.start && time < slot.end : false;
}

export function ContactFooter() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const openNow = isStoreOpen();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus('error');
      setErrorMsg('Please fill in every field.');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setStatus('error');
      setErrorMsg('Please enter a valid email address.');
      return;
    }

    setStatus('sending');
    try {
      const res = await fetch('/api/inquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error('Failed to send');
      setStatus('success');
      setForm({ name: '', email: '', message: '' });
    } catch {
      setStatus('error');
      setErrorMsg('Something went wrong. Please try again or reach us on WhatsApp.');
    }
  };

  return (
    <footer id="contact" className="bg-[#0a0a0a] border-t border-white/10 pt-16 sm:pt-20 pb-8 px-4 sm:px-10 lg:px-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-10 lg:gap-12 mb-12 sm:mb-16">
        <div>
          <h3 className="font-display text-2xl uppercase text-bone mb-3">
            jumpwiththeboys<sup className="text-[10px]">Â®</sup>
          </h3>
          <p className="font-mono text-xs text-[#9a9584] leading-relaxed mb-6">
            Home for DIRTY FROG. Luxury underground streetwear. Connected to JUMP WITH THE BOYS for production & business enquiries.
          </p>
          <div className="flex items-center gap-2">
            <a
              href={SOCIAL_LINKS.instagram}
              target="_blank"
              rel="noreferrer"
              className="text-[#c8c3b3] active:text-[#b6ff3c] sm:hover:text-[#b6ff3c] transition-colors p-2.5 border border-white/10 active:border-[#b6ff3c]/40 sm:hover:border-[#b6ff3c]/40"
              aria-label="Instagram"
            >
              <Instagram size={18} strokeWidth={1.6} />
            </a>
            <a
              href={SOCIAL_LINKS.tiktok}
              target="_blank"
              rel="noreferrer"
              className="text-[#c8c3b3] active:text-[#b6ff3c] sm:hover:text-[#b6ff3c] transition-colors p-2.5 border border-white/10 active:border-[#b6ff3c]/40 sm:hover:border-[#b6ff3c]/40"
              aria-label="TikTok"
            >
              <TikTokIcon size={18} />
            </a>
            <a
              href={SOCIAL_LINKS.facebook}
              target="_blank"
              rel="noreferrer"
              className="text-[#c8c3b3] active:text-[#b6ff3c] sm:hover:text-[#b6ff3c] transition-colors p-2.5 border border-white/10 active:border-[#b6ff3c]/40 sm:hover:border-[#b6ff3c]/40"
              aria-label="Facebook"
            >
              <Facebook size={18} strokeWidth={1.6} />
            </a>
            <a
              href={SOCIAL_LINKS.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="text-[#c8c3b3] active:text-[#b6ff3c] sm:hover:text-[#b6ff3c] transition-colors p-2.5 border border-white/10 active:border-[#b6ff3c]/40 sm:hover:border-[#b6ff3c]/40"
              aria-label="WhatsApp"
            >
              <WhatsAppIcon size={18} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-mono text-xs uppercase tracking-[0.3em] text-[#b6ff3c] mb-4 flex items-center gap-2">
            <Clock size={14} /> Operating Hours
          </h4>
          <ul className="space-y-2 font-mono text-xs text-[#c8c3b3]">
            {SCHEDULE.map((s) => (
              <li key={s.day} className="flex justify-between gap-4">
                <span>{s.day}</span>
                <span className={s.hours === 'Closed' ? 'text-[#6f6a5c]' : ''}>{s.hours}</span>
              </li>
            ))}
          </ul>
          <div
            className={`mt-4 inline-flex items-center gap-2 px-3 py-1.5 font-mono text-[10px] uppercase tracking-widest ${
              openNow ? 'bg-[#b6ff3c]/15 text-[#b6ff3c]' : 'bg-[#ff3b1f]/15 text-[#ff3b1f]'
            }`}
          >
            <span className={`w-1.5 h-1.5 rounded-full ${openNow ? 'bg-[#b6ff3c] pulse-ring' : 'bg-[#ff3b1f]'}`} />
            {openNow ? 'Open Now' : 'Currently Closed'}
          </div>
        </div>

        <div>
          <h4 className="font-mono text-xs uppercase tracking-[0.3em] text-[#b6ff3c] mb-4 flex items-center gap-2">
            <MapPin size={14} /> Visit Us
          </h4>
          <p className="font-mono text-xs text-[#c8c3b3] leading-relaxed mb-4">{STORE_ADDRESS}</p>
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(STORE_ADDRESS)}`}
            target="_blank"
            rel="noreferrer"
            className="inline-block font-mono text-[10px] uppercase tracking-[0.2em] text-[#4be3ff] active:text-[#b6ff3c] sm:hover:text-[#b6ff3c] transition-colors py-1"
          >
            Get Directions â†’
          </a>
        </div>

        <div>
          <h4 className="font-mono text-xs uppercase tracking-[0.3em] text-[#b6ff3c] mb-4">
            Business Enquiries
          </h4>
          {status === 'success' ? (
            <div className="flex items-center gap-2 text-[#b6ff3c] font-mono text-xs">
              <CircleCheck size={16} /> Message sent. We'll be in touch.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-2.5">
              <input
                type="text"
                placeholder="Name"
                autoComplete="name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full bg-[#111109] border border-white/10 px-3 py-2 text-xs font-mono text-bone placeholder:text-[#6f6a5c] focus:border-[#b6ff3c] outline-none"
              />
              <input
                type="email"
                placeholder="Email"
                autoComplete="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full bg-[#111109] border border-white/10 px-3 py-2 text-xs font-mono text-bone placeholder:text-[#6f6a5c] focus:border-[#b6ff3c] outline-none"
              />
              <textarea
                placeholder="Message"
                rows={3}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full bg-[#111109] border border-white/10 px-3 py-2 text-xs font-mono text-bone placeholder:text-[#6f6a5c] focus:border-[#b6ff3c] outline-none resize-none"
              />
              {status === 'error' && (
                <p className="font-mono text-[11px] text-[#ff3b1f]">{errorMsg}</p>
              )}
              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full py-2.5 bg-[#b6ff3c] text-[#0a0a0a] font-mono text-xs uppercase tracking-[0.2em] active:bg-[#f3efe4] sm:hover:bg-[#f3efe4] transition-colors disabled:opacity-60 cursor-pointer"
              >
                {status === 'sending' ? 'Sendingâ€¦' : 'Send Enquiry'}
              </button>
            </form>
          )}
        </div>
      </div>

      <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-2 text-center sm:text-left">
        <p className="font-mono text-[10px] text-[#6f6a5c] uppercase tracking-widest">
          Â© {new Date().getFullYear()} jumpwiththeboysÂ® - All Rights Reserved
        </p>
        <p className="font-mono text-[10px] text-[#6f6a5c] uppercase tracking-widest">
          Apparel & Clothing â€¢ Shopping & Retail
        </p>
      </div>
      <div className="pt-5 flex justify-center">
        <p className="font-mono text-[10px] text-[#6f6a5c] uppercase tracking-widest">
          Built by{' '}
          <a
            href="https://khuladigitalsolutions.co.za/"
            target="_blank"
            rel="noreferrer"
            className="text-[#b6ff3c] underline underline-offset-2 decoration-[#b6ff3c]/40 hover:decoration-[#b6ff3c] hover:text-[#f3efe4] transition-colors duration-300"
          >
            Khula Digital Solutions
          </a>
        </p>
      </div>
    </footer>
  );
}