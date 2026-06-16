import { MessageCircle } from 'lucide-react';
import { invitationData } from '../../data/invitationData.js';
import GlassCard from '../ui/GlassCard.jsx';
import SectionTitle from '../ui/SectionTitle.jsx';
import { PrimaryButton } from '../ui/Button.jsx';

export default function WhatsAppAssistant() {
  const { event } = invitationData;
  return (
    <section id="assistant" className="bg-white py-24 sm:py-28">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <GlassCard className="mx-auto max-w-3xl text-center">
          <SectionTitle title="WhatsApp Assistant" subtitle="I’m your personal WhatsApp assistant. I can help you get your invitation back if you lose it, and much more." />
          <div className="mt-8 flex justify-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-green-50 text-green-600 ring-1 ring-green-100">
              <MessageCircle size={38} />
            </div>
          </div>
          <a href={event.whatsappLink} target="_blank" rel="noreferrer" className="mt-8 inline-flex">
            <PrimaryButton>Access Here</PrimaryButton>
          </a>
        </GlassCard>
      </div>
    </section>
  );
}
