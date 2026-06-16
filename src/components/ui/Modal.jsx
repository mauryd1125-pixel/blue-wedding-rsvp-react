import { X } from 'lucide-react';

export default function Modal({ open, onClose, children, title }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-navyGray/60 p-4 backdrop-blur-sm" role="dialog" aria-modal="true">
      <div className="relative w-full max-w-lg rounded-[2rem] bg-white p-6 shadow-soft sm:p-8">
        <button
          type="button"
          onClick={onClose}
          className="absolute right-5 top-5 rounded-full bg-primarySoft p-2 text-navyGray transition hover:bg-primary"
          aria-label="Close modal"
        >
          <X size={20} />
        </button>
        {title && <h3 className="mb-6 pr-12 text-2xl font-semibold text-navyGray">{title}</h3>}
        {children}
      </div>
    </div>
  );
}
