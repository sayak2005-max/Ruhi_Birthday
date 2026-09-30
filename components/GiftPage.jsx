"use client";
import { useState } from "react";
import PageWrapper from "./PageWrapper";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";

export default function GiftPage({ next }) {
  const [open, setOpen] = useState(false);

  const openGift = () => {
    setOpen(true);

    // 🎊 Confetti burst
    setTimeout(() => {
      confetti({
        particleCount: 90,
        spread: 100,
        origin: { y: 0.6 },
        colors: ["#ff8fab", "#ffd166", "#ffb3c6", "#e9a8ff"],
      });
    }, 300);
  };

  return (
    <PageWrapper>

      {/* ❤️ Floating Hearts after opening */}
      {open &&
        [...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            style={{
              position: "absolute",
              bottom: -30,
              left: `${Math.random() * 100}%`,
              fontSize: "clamp(18px, 4vw, 26px)",
              opacity: 0.6,
              pointerEvents: "none",
            }}
            animate={{ y: -700, opacity: 0 }}
            transition={{
              duration: 6 + i,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            💖
          </motion.div>
        ))}

      <AnimatePresence mode="wait">

        {/* 🎁 CLOSED GIFT */}
        {!open && (
          <motion.div
            key="closed"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.85 }}
            transition={{ duration: 0.4 }}
            style={{ textAlign: "center" }}
          >
            <motion.img
              src="/assets/gift.gif"
              alt="gift"
              width={220}
              style={{ cursor: "pointer" }}
              animate={{ y: [-8, 8] }}
              transition={{ repeat: Infinity, duration: 2 }}
              whileTap={{ scale: 0.9 }}
              onClick={openGift}
            />

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              style={{
                marginTop: 10,
                fontSize: "clamp(14px, 4vw, 16px)",
              }}
            >
              Tap the gift 🎁
            </motion.p>
          </motion.div>
        )}

        {/* 🎉 OPENED GIFT */}
        {open && (
          <motion.div
            key="open"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            style={{ textAlign: "center", maxWidth: 360 }}
          >
            <motion.img
              src="/assets/surprise.gif"
              alt="surprise"
              width={220}
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
            />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              style={{
                background: "#ffffff",
                padding: "clamp(16px, 4vw, 20px)",
                borderRadius: 18,
                marginTop: 18,
                width: "100%",
                boxShadow: "0 12px 30px rgba(255,182,193,0.45)",
                fontSize: "clamp(14px, 4vw, 16px)",
                lineHeight: 1.5,
              }}
            >
              <p>
                💖 <b>Surpriseee!</b>
                <br /><br />
                Here's to the one who's been my confidante, 
                and my favorite person to share laughs with. May your special day
                be as bright and beautiful as you are! 🎂
                <br /><br />
                Wishing you a year filled with love, adventures, and all your
                heart's desires. Enjoy every moment! 😊
                <br /><br />
                I’m so lucky to have <b>you</b> in my life ❤️
              </p>
            </motion.div>

            {/* ➜ NEXT BUTTON */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={next}
              style={{
                marginTop: 22,
                fontSize: "clamp(14px, 4vw, 16px)",
                padding: "12px 30px",
                borderRadius: 999,
                background: "#ffccd3",
                border: "none",
                fontWeight: 600,
                cursor: "pointer",
              }}
            >
              Next ➜
            </motion.button>
          </motion.div>
        )}

      </AnimatePresence>
    </PageWrapper>
  );
}
