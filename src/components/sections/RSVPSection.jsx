import { useState } from 'react';
import { CheckSquare, XCircle } from 'lucide-react';
import { invitationData } from '../../data/invitationData.js';
import SectionTitle from '../ui/SectionTitle.jsx';
import GlassCard from '../ui/GlassCard.jsx';
import { PrimaryButton, SecondaryButton } from '../ui/Button.jsx';
import ToastMessage from '../ui/ToastMessage.jsx';
import QRCodeCard from '../ui/QRCodeCard.jsx';

export default function RSVPSection() {
  const { event, guest } = invitationData;
  const [status, setStatus] = useState('idle');
  const [loading, setLoading] = useState(false);

  function handleStatus(nextStatus) {
    setLoading(true);
    setTimeout(() => {
      setStatus(nextStatus);
      setLoading(false);
    }, 550);
  }

  return (
    <section id="rsvp" className="relative bg-white py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionTitle title="RSVP & QR Code" subtitle="Confirm your attendance and keep your personal entrance QR code safe." />
        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <GlassCard className="flex flex-col justify-between">
            <div>
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primaryDark text-white shadow-glow">
                <CheckSquare size={30} />
              </div>
              <h3 className="text-center text-4xl font-semibold text-navyGray">RSVP</h3>
              <p className="mx-auto mt-5 max-w-md text-center leading-8 text-mutedText">Please confirm your attendance by clicking the <span className="font-semibold text-primaryDeep">confirm</span> button.</p>
              <p className="mt-6 text-center text-sm font-semibold uppercase tracking-[0.18em] text-goldDark">{event.deadline}</p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <PrimaryButton disabled={loading} onClick={() => handleStatus('confirmed')}>{loading ? 'Saving...' : 'Confirm Attendance'}</PrimaryButton>
                <SecondaryButton disabled={loading} onClick={() => handleStatus('cancelled')}>Cancel Attendance</SecondaryButton>
              </div>
            </div>
            <ToastMessage
              type={status === 'cancelled' ? 'warning' : 'success'}
              message={status === 'confirmed' ? 'Your attendance is confirmed.' : status === 'cancelled' ? 'Your attendance has been cancelled.' : ''}
              onClose={() => setStatus('idle')}
            />
          </GlassCard>

          <GlassCard>
            <div className="text-center">
              <h3 className="text-4xl font-semibold text-navyGray">QR Code</h3>
              <p className="mx-auto mt-5 max-w-md leading-8 text-mutedText">This QR code grants you access to the event. Please present it at the entrance.</p>
            </div>
            <div className="mt-8">
              <QRCodeCard value={event.qrUrl} guestCode={guest.qrCodeId} />
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}
