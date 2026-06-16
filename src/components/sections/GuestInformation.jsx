import { BadgeCheck, Ticket, Users, Table2, Hash } from 'lucide-react';
import { invitationData } from '../../data/invitationData.js';
import GlassCard from '../ui/GlassCard.jsx';
import SectionTitle from '../ui/SectionTitle.jsx';

const infoIcons = [Users, Ticket, Table2, Hash, BadgeCheck];

export default function GuestInformation() {
  const { guest } = invitationData;
  const rows = [
    ['Guest Name', guest.name],
    ['Invitation Type', guest.invitationType],
    ['Table Number', guest.tableNumber],
    ['Seat Number', guest.seatNumber],
    ['QR Code ID', guest.qrCodeId],
  ];

  return (
    <section id="guest" className="bg-primarySoft py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <SectionTitle title="Guest Information" subtitle="Your personal invitation details are prepared for the entrance team." />
        <GlassCard className="mx-auto mt-12 max-w-3xl bg-white/85">
          <div className="grid gap-4 sm:grid-cols-2">
            {rows.map(([label, value], index) => {
              const Icon = infoIcons[index];
              return (
                <div key={label} className="rounded-2xl border border-borderSoft bg-white p-4">
                  <p className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-primaryDeep"><Icon size={16} />{label}</p>
                  <p className="text-lg font-semibold text-navyGray">{value}</p>
                </div>
              );
            })}
            <div className="rounded-2xl border border-successText/15 bg-successSoft p-4 sm:col-span-2">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-successText">Current Status</p>
              <p className="mt-2 text-lg font-semibold text-successText">{guest.status}</p>
            </div>
          </div>
        </GlassCard>
      </div>
    </section>
  );
}
