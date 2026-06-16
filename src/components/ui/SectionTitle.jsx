import { motion } from 'framer-motion';

export default function SectionTitle({ eyebrow, title, subtitle, centered = true }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.6 }}
      className={centered ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}
    >
      {eyebrow && <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-primaryDeep">{eyebrow}</p>}
      <div className="mb-5 flex items-center justify-center gap-4">
        <span className="h-px w-16 bg-gold" />
        <span className="h-2 w-2 rotate-45 border border-gold" />
        <span className="h-px w-16 bg-gold" />
      </div>
      <h2 className="text-4xl font-semibold tracking-tight text-navyGray sm:text-5xl">{title}</h2>
      {subtitle && <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-mutedText">{subtitle}</p>}
    </motion.div>
  );
}
