export default function FloralDecoration({ position = 'left', className = '' }) {
  const isRight = position === 'right';
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 240 420"
      className={`pointer-events-none absolute w-44 opacity-35 sm:w-56 ${isRight ? 'right-0 top-10 scale-x-[-1]' : 'left-0 top-10'} ${className}`}
      fill="none"
    >
      <path d="M42 392 C70 318 70 222 166 82" stroke="#D8C9A4" strokeWidth="2" strokeLinecap="round" />
      <path d="M78 294 C44 286 25 262 15 229 C50 238 74 255 78 294Z" stroke="#8CCDE9" strokeWidth="2" />
      <path d="M102 248 C142 235 169 210 184 171 C142 180 111 205 102 248Z" stroke="#8CCDE9" strokeWidth="2" />
      <path d="M124 203 C91 188 76 161 78 126 C110 142 129 165 124 203Z" stroke="#8CCDE9" strokeWidth="2" />
      <path d="M153 145 C186 135 208 112 222 76 C184 84 158 107 153 145Z" stroke="#8CCDE9" strokeWidth="2" />
      <path d="M64 330 C96 324 122 304 138 274" stroke="#D8C9A4" strokeWidth="1.6" />
      <path d="M132 274 C101 260 86 236 86 205" stroke="#D8C9A4" strokeWidth="1.6" />
      <circle cx="150" cy="94" r="5" stroke="#D8C9A4" strokeWidth="2" />
      <circle cx="173" cy="78" r="4" stroke="#D8C9A4" strokeWidth="2" />
      <circle cx="188" cy="58" r="4" stroke="#D8C9A4" strokeWidth="2" />
      <circle cx="64" cy="318" r="4" stroke="#D8C9A4" strokeWidth="2" />
    </svg>
  );
}
