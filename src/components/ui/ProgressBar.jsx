export default function ProgressBar({ label, value, icon: Icon }) {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between gap-4 text-sm font-semibold text-navyGray">
        <span className="flex items-center gap-2">
          {Icon && <Icon size={18} className="text-primaryDeep" />}
          {label}
        </span>
        <span>{value}%</span>
      </div>
      <div className="h-3 rounded-full bg-primarySoft ring-1 ring-borderSoft">
        <div className="h-full rounded-full bg-gradient-to-r from-primaryDark to-ribbonDark" style={{ width: `${value}%` }} />
      </div>
    </div>
  );
}
