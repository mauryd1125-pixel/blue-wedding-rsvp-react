import { useRef, useState } from 'react';
import QRCode from 'react-qr-code';
import { Download, Maximize2 } from 'lucide-react';
import { toPng } from 'html-to-image';
import Modal from './Modal.jsx';
import { PrimaryButton, SecondaryButton } from './Button.jsx';

export default function QRCodeCard({ value, guestCode }) {
  const qrRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  async function downloadQRCode() {
    if (!qrRef.current) return;
    const dataUrl = await toPng(qrRef.current, { cacheBust: true, pixelRatio: 2 });
    const link = document.createElement('a');
    link.download = `${guestCode || 'wedding-qr-code'}.png`;
    link.href = dataUrl;
    link.click();
  }

  return (
    <>
      <div className="mx-auto max-w-sm rounded-[2rem] border border-borderSoft bg-white p-5 shadow-card">
        <div ref={qrRef} className="rounded-[1.5rem] bg-white p-5">
          <div className="mx-auto flex aspect-square max-w-[230px] items-center justify-center rounded-2xl border border-primary/40 bg-white p-4">
            <QRCode value={value} size={190} bgColor="#FFFFFF" fgColor="#1F3742" level="M" />
          </div>
          <p className="mt-4 text-center text-sm font-semibold tracking-wide text-navyGray">Guest Code: {guestCode}</p>
        </div>
        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          <PrimaryButton onClick={downloadQRCode} className="px-4 py-3 text-xs">
            <span className="inline-flex items-center gap-2"><Download size={16} /> Download</span>
          </PrimaryButton>
          <SecondaryButton onClick={() => setIsOpen(true)} className="px-4 py-3 text-xs">
            <span className="inline-flex items-center gap-2"><Maximize2 size={16} /> Fullscreen</span>
          </SecondaryButton>
        </div>
        <p className="mt-4 text-center text-xs leading-6 text-mutedText">Please keep this QR code safe. It may be required at the entrance.</p>
      </div>

      <Modal open={isOpen} onClose={() => setIsOpen(false)} title="Entrance QR Code">
        <div className="mx-auto flex max-w-sm flex-col items-center rounded-[2rem] border border-borderSoft bg-white p-5">
          <QRCode value={value} size={280} bgColor="#FFFFFF" fgColor="#1F3742" level="M" />
          <p className="mt-5 text-sm font-semibold text-navyGray">Guest Code: {guestCode}</p>
        </div>
      </Modal>
    </>
  );
}
