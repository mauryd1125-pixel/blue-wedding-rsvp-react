import { Clock3, Heart, XCircle } from "lucide-react";
import { motion } from "framer-motion";
import { invitationData } from "../../data/invitationData.js";
import SectionTitle from "../ui/SectionTitle.jsx";
import GlassCard from "../ui/GlassCard.jsx";
import ProgressBar from "../ui/ProgressBar.jsx";
import FloralDecoration from "../ui/FloralDecoration.jsx";

const iconMap = {
  confirmed: Heart,
  hold: Clock3,
  cancelled: XCircle,
};

export default function Interactions() {
  const { stats } = invitationData;

  return (
    <section
      id="interactions"
      className="relative overflow-hidden bg-primarySoft py-20 sm:py-24"
    >
      {/* Left floral decoration */}
      <motion.div
        animate={{ y: [0, -16, 0], rotate: [0, 2, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -left-28 top-10 z-0 hidden opacity-25 md:block"
      >
        <FloralDecoration />
      </motion.div>

      {/* Right floral decoration */}
      <motion.div
        animate={{ y: [0, 18, 0], rotate: [0, -2, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -right-28 bottom-0 z-0 hidden opacity-25 md:block"
      >
        <FloralDecoration position="right" />
      </motion.div>

      {/* Soft background glow */}
      <div className="absolute -left-24 top-20 h-80 w-80 rounded-full bg-white/80 blur-3xl" />
      <div className="absolute -right-24 bottom-10 h-80 w-80 rounded-full bg-primary/35 blur-3xl" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 lg:px-8">
        <GlassCard className="relative overflow-hidden bg-white/90">
          {/* Inner soft decorations */}
          <div className="absolute -left-16 -top-16 h-56 w-56 rounded-full bg-primary/20 blur-3xl" />
          <div className="absolute -right-16 -bottom-16 h-56 w-56 rounded-full bg-gold/15 blur-3xl" />

          <div className="relative z-10 grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            {/* Left content */}
            <motion.div
              initial={{ opacity: 0, x: -35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.75 }}
            >
              <SectionTitle
                title="Interactions"
                subtitle="Thank you for your interactions. You made our big day special and unforgettable."
                centered={false}
              />

              <div className="mt-8 flex items-center gap-3">
                <span className="h-px w-20 bg-gold" />
                <Heart size={16} className="fill-gold text-gold" />
                <span className="h-px w-20 bg-gold" />
              </div>

              <p className="mt-6 max-w-md text-sm leading-7 text-mutedText">
                Every confirmation, message, and response helps us prepare a
                beautiful celebration for all our loved ones.
              </p>
            </motion.div>

            {/* Right progress bars */}
            <motion.div
              initial={{ opacity: 0, x: 35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.75 }}
              className="space-y-8"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08, duration: 0.5 }}
                  className="rounded-3xl border border-borderSoft bg-white/80 p-5 shadow-card backdrop-blur"
                >
                  <ProgressBar
                    label={stat.label}
                    value={stat.value}
                    icon={iconMap[stat.type]}
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </GlassCard>
      </div>
    </section>
  );
}