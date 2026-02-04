"use client";
import { motion } from "framer-motion";

export default function PageWrapper({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.04 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      style={{
        minHeight: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        position: "relative",
        padding: "clamp(14px, 4vw, 24px)",
        boxSizing: "border-box",
        background:
          "linear-gradient(180deg, #fff0f6 0%, #ffe4ec 50%, #fff0f6 100%)",
        overflow: "hidden",
      }}
    >
      {/* 🌸 Soft vignette overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at center, transparent 55%, rgba(0,0,0,0.08))",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* 🎬 Page Content */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          width: "100%",
          maxWidth: "900px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {children}
      </div>
    </motion.div>
  );
}
