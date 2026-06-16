import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowDown,
  CalendarDays,
  Clock,
  Heart,
  MapPin,
  Sparkles,
} from "lucide-react";
import { invitationData } from "../../data/invitationData.js";
import { PrimaryButton, SecondaryButton } from "../ui/Button.jsx";
import FloralDecoration from "../ui/FloralDecoration.jsx";
import heroImage from "../../assets/images/heroImage.jpg";

function getRemainingTime(targetDate) {
  const target = new Date(targetDate).getTime();
  const now = Date.now();
  const difference = Math.max(target - now, 0);

  return {
    Days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    Hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    Minutes: Math.floor((difference / (1000 * 60)) % 60),
    Seconds: Math.floor((difference / 1000) % 60),
  };
}

export default function Hero() {
  const { couple, event, hero } = invitationData;

  const initialTime = useMemo(
    () => getRemainingTime(event.targetDate),
    [event.targetDate]
  );

  const [time, setTime] = useState(initialTime);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(getRemainingTime(event.targetDate));
    }, 1000);

    return () => clearInterval(timer);
  }, [event.targetDate]);

  const locationText =
    event.locationLabel ||
    event.location ||
    event.venue ||
    event.receptionVenue ||
    "Reception to follow";

  return (
    <section
      id="hero"
      className="relative min-h-[86vh] overflow-hidden bg-navyGray font-sans text-white"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <motion.img
          src={heroImage}
          alt="Wedding couple"
          initial={{ scale: 1.08 }}
          animate={{ scale: 1.02 }}
          transition={{ duration: 8, ease: "easeOut" }}
          className="h-full w-full object-cover"
        />

        {/* Elegant dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/35 to-black/75" />
        <div className="absolute inset-0 bg-gradient-to-r from-navyGray/55 via-transparent to-primaryDeep/25" />
      </div>

      {/* Soft wedding decorations */}
      <motion.div
        animate={{ y: [0, -12, 0], rotate: [0, 2, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-0 top-14 z-10 opacity-25"
      >
        <FloralDecoration />
      </motion.div>

      <motion.div
        animate={{ y: [0, 14, 0], rotate: [0, -2, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-0 top-16 z-10 opacity-25"
      >
        <FloralDecoration position="right" />
      </motion.div>

      {/* Floating small glow dots */}
      {[...Array(7)].map((_, index) => (
        <motion.span
          key={index}
          animate={{
            y: [0, -18, 0],
            opacity: [0.15, 0.75, 0.15],
            scale: [1, 1.35, 1],
          }}
          transition={{
            duration: 4 + index,
            repeat: Infinity,
            ease: "easeInOut",
            delay: index * 0.35,
          }}
          className="absolute z-10 h-2 w-2 rounded-full bg-gold shadow-[0_0_20px_rgba(214,181,109,0.9)]"
          style={{
            left: `${12 + index * 12}%`,
            top: `${18 + (index % 3) * 20}%`,
          }}
        />
      ))}

      <div className="relative z-20 mx-auto flex min-h-[86vh] max-w-6xl flex-col items-center justify-center px-6 py-16 text-center">
        {/* Hashtag / small label */}
        <motion.div
          initial={{ opacity: 0, y: -18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-[11px] font-medium uppercase tracking-[0.28em] text-white/90 backdrop-blur-md"
        >
          Digital Wedding RSVP
        </motion.div>

        {/* Save the Date title */}
        <motion.div
          initial={{ opacity: 0, y: -24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.8 }}
          className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1"
        >
          <span className="font-luxury text-3xl font-semibold uppercase tracking-[0.18em] text-white sm:text-5xl lg:text-6xl">
            Save
          </span>

          <motion.span
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
            className="font-save text-5xl leading-none text-primary drop-shadow-[0_8px_24px_rgba(0,0,0,0.35)] sm:text-7xl lg:text-8xl"
          >
            the
          </motion.span>

          <span className="font-luxury text-3xl font-semibold uppercase tracking-[0.18em] text-white sm:text-5xl lg:text-6xl">
            Date
          </span>
        </motion.div>

        {/* Couple names */}
        <motion.h1
          initial={{ opacity: 0, y: 28, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.35, duration: 0.9 }}
          className="mt-10 font-wedding text-6xl leading-none text-white drop-shadow-[0_10px_28px_rgba(0,0,0,0.45)] sm:text-7xl lg:text-8xl"
        >
          {couple.names}
        </motion.h1>

        {/* Romantic subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.75 }}
          className="mt-5 max-w-2xl text-sm leading-7 text-white/85 sm:text-base"
        >
          {hero.subtitle || "Two hearts, one promise, a lifetime of love."}
        </motion.p>

        {/* Event details */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.75 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/15 px-4 py-2 text-xs font-medium text-white shadow-card backdrop-blur-md sm:text-sm">
            <CalendarDays size={16} className="text-primary" />
            {event.dateLabel}
          </span>

          <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/15 px-4 py-2 text-xs font-medium text-white shadow-card backdrop-blur-md sm:text-sm">
            <Clock size={16} className="text-primary" />
            {event.timeLabel}
          </span>

          <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/15 px-4 py-2 text-xs font-medium text-white shadow-card backdrop-blur-md sm:text-sm">
            <MapPin size={16} className="text-primary" />
            {locationText}
          </span>
        </motion.div>

        {/* Mini countdown */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85, duration: 0.75 }}
          className="mt-8 grid w-full max-w-2xl grid-cols-4 gap-2 sm:gap-3"
        >
          {Object.entries(time).map(([label, value]) => (
            <div
              key={label}
              className="rounded-2xl border border-white/20 bg-white/12 px-3 py-3 text-center backdrop-blur-md"
            >
              <motion.p
                key={value}
                initial={{ opacity: 0.4, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="font-heading text-2xl font-semibold text-white sm:text-3xl"
              >
                {String(value).padStart(2, "0")}
              </motion.p>

              <p className="mt-1 text-[9px] font-semibold uppercase tracking-[0.22em] text-white/70 sm:text-[10px]">
                {label}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.05, duration: 0.75 }}
          className="mt-9 flex flex-wrap justify-center gap-4"
        >
          <motion.a
            whileHover={{ y: -4 }}
            whileTap={{ scale: 0.96 }}
            href="#invitation"
          >
            <PrimaryButton>View Invitation</PrimaryButton>
          </motion.a>

          <motion.a
            whileHover={{ y: -4 }}
            whileTap={{ scale: 0.96 }}
            href="#rsvp"
          >
            <SecondaryButton>RSVP Now</SecondaryButton>
          </motion.a>
        </motion.div>

        {/* Scroll down */}
        <motion.a
          href="#countdown"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.25, duration: 0.75 }}
          className="mt-8 inline-flex items-center gap-3 text-xs font-medium text-white/80 sm:text-sm"
        >
          Scroll down
          <ArrowDown size={17} className="animate-bounce text-primary" />
        </motion.a>
      </div>

      {/* Bottom fade */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/45 to-transparent" />
    </section>
  );
}