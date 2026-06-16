export default function ChipButton({ selected, children, ...props }) {
  return (
    <button
      type="button"
      className={`rounded-full border px-4 py-2 text-sm font-medium transition duration-300 ${selected ? 'border-primaryDark bg-primaryDark text-white shadow-glow' : 'border-borderSoft bg-white/75 text-navyGray hover:border-primaryDark hover:bg-primarySoft'}`}
      {...props}
    >
      {children}
    </button>
  );
}
