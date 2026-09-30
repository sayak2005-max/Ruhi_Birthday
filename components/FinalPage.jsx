"use client";
import PageWrapper from "./PageWrapper";
import { motion } from "framer-motion";

export default function FinalPage({ restart }) {
  return (
    <PageWrapper>

      {/* ❤️ Floating Hearts Background */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          style={{
            position: "absolute",
            bottom: -40,
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
          ❤️
        </motion.div>
      ))}

      {/* 🎬 Main Content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{ textAlign: "center", zIndex: 2 }}
      >

        {/* 📸 Images */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "clamp(8px, 2vw, 14px)",
            maxWidth: "min(78vw, 560px)",
            width: "100%",
            marginBottom: 14,
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <img
            src="/assets/2.jpg"
            alt="Birthday memory"
            style={{
              width: "100%",
              height: "auto",
              borderRadius: 10,
              boxShadow: "0 8px 20px rgba(0,0,0,0.25)",
            }}
          />
        </motion.div>

        {/* 💌 Message */}
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          style={{
            fontSize: "clamp(18px, 5vw, 26px)",
            lineHeight: 1.4,
            marginTop: "clamp(16px, 3vh, 22px)",
            padding: "0 15px",
            color: "#7a1f3d",
            textShadow: "0 4px 12px rgba(255,182,193,0.4)",
          }}
        >
          Happy Birthday ❤️ MISS ❤️ CUTEY ❤️ AND MY FAVORITE BEST FRIEND .
          <br />
          Many Many Happy Returns of the Day 🎉🎂🎈
          <br />
          I’m always with you.
        </motion.h2>

        {/* 🔄 Restart Button */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          animate={{
            boxShadow: [
              "0 0 0 rgba(255,107,157,0)",
              "0 0 25px rgba(255,107,157,0.7)",
              "0 0 0 rgba(255,107,157,0)",
            ],
          }}
          transition={{ repeat: Infinity, duration: 2.2 }}
          onClick={restart}
          style={{
            marginTop: "clamp(22px, 5vh, 32px)",
            background: "#FF6B9D",
            color: "white",
            fontSize: "clamp(14px, 4vw, 16px)",
            padding: "12px 26px",
            borderRadius: 999,
            border: "none",
            fontWeight: 600,
            cursor: "pointer",
          }}
        >
          Restart 🔄
        </motion.button>

      </motion.div>
    </PageWrapper>
  );
}
