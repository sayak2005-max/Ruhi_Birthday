"use client";
import PageWrapper from "./PageWrapper";
import Image from "next/image";
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
          gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
          gap: "clamp(8px, 2vw, 14px)",
          maxWidth: "min(92vw, 680px)",
          width: "100%",
          justifyContent: "center",
          marginBottom: "clamp(12px, 3vh, 18px)",
        }}
      >
        {["1.jpg", "3.jpg", "4.jpg"].map((img, i) => (
          <motion.div
            key={img}
            style={{
              borderRadius: 12,
              overflow: "hidden",
              boxShadow: "0 8px 20px rgba(0,0,0,0.25)",
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + i * 0.2 }}
            whileHover={{ scale: 1.03 }}
          >
            <Image
              src={`/assets/${img}`}
              alt={`Memory ${i + 1}`}
              width={1080}
              height={1440}
              sizes="(max-width: 740px) 30vw, 220px"
              style={{
                width: "100%",
                height: "clamp(120px, 24vh, 210px)",
                objectFit: "cover",
              }}
            />
          </motion.div>
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
