"use client";
import PageWrapper from "./PageWrapper";
import { motion } from "framer-motion";

export default function CoverPage({ next }) {
  return (
    <>
      {/* 🌄 FULLSCREEN BACKGROUND (ONLY FOR COVER) */}
      <motion.div
        initial={{ scale: 1.08, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ opacity: 1, scale: 1.08 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "url('/assets/cover.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          zIndex: 0,
        }}
      />

      {/* 🌸 DARK OVERLAY */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.25), rgba(0,0,0,0.45))",
          zIndex: 1,
        }}
      />

      {/* 🎬 CONTENT */}
      <PageWrapper>
        <div
          style={{
            textAlign: "center",
            padding: "0 16px",
            zIndex: 2,
          }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            style={{
              color: "white",
              fontSize: "clamp(22px, 6vw, 32px)",
              fontWeight: 700,
              marginBottom: 12,
              textShadow: "0 6px 20px rgba(0,0,0,0.35)",
            }}
          >
            A Small Surprise 💖
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            style={{
              color: "rgba(255,255,255,0.85)",
              fontSize: "clamp(14px, 4vw, 16px)",
              marginBottom: 30,
            }}
          >
            Just for you ✨
          </motion.p>

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
              fontSize: "clamp(14px, 4vw, 18px)",
              padding: "14px 32px",
              borderRadius: 999,
              background: "#ffccd3",
              color: "#7a1f3d",
              border: "none",
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            Start 💖
          </motion.button>
        </div>
      </PageWrapper>
    </>
  );
}
