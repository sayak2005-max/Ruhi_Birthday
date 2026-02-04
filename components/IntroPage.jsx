"use client";
import PageWrapper from "./PageWrapper";
import { motion } from "framer-motion";

export default function IntroPage({ next }) {
  return (
    <PageWrapper>

      {/* 🎞️ Intro GIF */}
      <motion.img
        src="/assets/intro.gif"
        alt="intro"
        width={220}
        style={{
          maxWidth: "90%",
          height: "auto",
          userSelect: "none",
        }}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{
          opacity: 1,
          scale: 1,
          y: [-6, 6],
        }}
        transition={{
          opacity: { duration: 0.8 },
          scale: { duration: 0.8 },
          y: { repeat: Infinity, duration: 2, ease: "easeInOut" },
        }}
      />

      {/* 💬 Text */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        style={{
          fontSize: "clamp(16px, 5vw, 24px)",
          marginTop: "clamp(18px, 4vh, 26px)",
          marginBottom: "clamp(18px, 4vh, 26px)",
          padding: "0 14px",
          textAlign: "center",
          lineHeight: 1.4,
          color: "#7a1f3d",
        }}
      >
        I have something special for you 🥺💖
      </motion.p>

      {/* ➜ Next Button */}
      <motion.button
        whileTap={{ scale: 0.9 }}
        animate={{
          boxShadow: [
            "0 0 0 rgba(255,192,203,0)",
            "0 0 25px rgba(255,192,203,0.6)",
            "0 0 0 rgba(255,192,203,0)",
          ],
        }}
        transition={{ repeat: Infinity, duration: 2 }}
        onClick={next}
        style={{
          padding: "14px 32px",
          fontSize: "clamp(14px, 4vw, 18px)",
          borderRadius: 999,
          background: "#ffccd3",
          color: "#7a1f3d",
          border: "none",
          fontWeight: 600,
          cursor: "pointer",
        }}
      >
        Next ➜
      </motion.button>

    </PageWrapper>
  );
}
