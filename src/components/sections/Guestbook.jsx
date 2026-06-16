import { useState } from 'react';
import { BookOpen, Send } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle.jsx';
import GlassCard from '../ui/GlassCard.jsx';
import { PrimaryButton } from '../ui/Button.jsx';
import ToastMessage from '../ui/ToastMessage.jsx';

export default function Guestbook() {
  const [message, setMessage] = useState('');
  const [toast, setToast] = useState({ type: '', message: '' });

  function handleSubmit(event) {
    event.preventDefault();
    if (!message.trim()) {
      setToast({ type: 'error', message: 'Message cannot be empty.' });
      return;
    }
    setToast({ type: 'success', message: 'Your message has been sent successfully.' });
    setMessage('');
  }

  return (
    <section id="guestbook" className="bg-ivory py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <GlassCard className="bg-white/85">
          <SectionTitle title="Guestbook" subtitle="Leave a message in the event’s guestbook. They’ll be delighted to read it. Thank you!" />
          <div className="mt-8 flex justify-center text-primaryDeep"><BookOpen size={40} /></div>
          <form onSubmit={handleSubmit} className="mx-auto mt-8 max-w-4xl">
            <textarea
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              placeholder="Write your message here…"
              rows={5}
              className="w-full resize-y rounded-[1.5rem] border border-borderSoft bg-white/85 p-5 text-sm leading-7 text-navyGray outline-none transition focus:border-primaryDark focus:ring-4 focus:ring-primary/30"
            />
            <div className="mt-6 flex justify-center">
              <PrimaryButton type="submit"><span className="inline-flex items-center gap-2"><Send size={16} /> Send</span></PrimaryButton>
            </div>
            <ToastMessage type={toast.type} message={toast.message} onClose={() => setToast({ type: '', message: '' })} />
          </form>
        </GlassCard>
      </div>
    </section>
  );
}
