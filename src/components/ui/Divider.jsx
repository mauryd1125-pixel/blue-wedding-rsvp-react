export default function Divider({ className = '' }) {
  return (
    <div className={`my-5 flex items-center justify-center gap-3 ${className}`}>
      <span className="h-px w-16 bg-gold" />
      <span className="h-2 w-2 rotate-45 bg-gold/80" />
      <span className="h-px w-16 bg-gold" />
    </div>
  );
}
