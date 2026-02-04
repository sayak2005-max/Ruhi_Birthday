"use client";
import PageWrapper from "./PageWrapper";
import { motion } from "framer-motion";

export default function MemoryPage({ next }) {
  return (
    <PageWrapper>

      {/* 📸 MEMORY IMAGES */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(90px, 1fr))",
          gap: "clamp(8px, 2vw, 14px)",
          maxWidth: "52vw",
          width: "100%",
          justifyContent: "center",
          marginBottom: "clamp(12px, 3vh, 18px)",
        }}
      >
        {["1.jpeg", "2.jpeg"].map((img, i) => (
          <motion.img
            key={img}
            src={`/assets/${img}`}
            alt={`memory-${i}`}
            style={{
              width: "100%",
              height: "auto",
              borderRadius: 12,
              boxShadow: "0 8px 20px rgba(0,0,0,0.25)",
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + i * 0.2 }}
            whileHover={{ scale: 1.03 }}
          />
        ))}
      </motion.div>

      {/* 💌 CAPTION */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        style={{
          fontSize: "clamp(14px, 4vw, 18px)",
          marginBottom: "clamp(16px, 4vh, 24px)",
          padding: "0 14px",
          textAlign: "center",
          color: "#7a1f3d",
        }}
      >
        Moments that mean the world 💖
      </motion.p>

      {/* ➜ NEXT BUTTON */}
      <motion.button
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.2 }}
        whileTap={{ scale: 0.9 }}
        onClick={next}
        style={{
          padding: "12px 30px",
          fontSize: "clamp(14px, 4vw, 16px)",
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
