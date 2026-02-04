"use client";
import { useState } from "react";
import PageWrapper from "./PageWrapper";
import { motion, AnimatePresence } from "framer-motion";

const messages = ["you", "are", "a", "cutie"];

export default function BalloonPage({ next }) {
  const [opened, setOpened] = useState([]);

  const handleClick = (index) => {
    if (!opened.includes(index)) {
      setOpened((prev) => [...prev, index]);
    }
  };

  return (
    <PageWrapper>

      {/* 🎈 BALLOONS */}
      <div
        style={{
          display: "flex",
          gap: "clamp(12px, 5vw, 22px)",
          flexWrap: "wrap",
          justifyContent: "center",
          maxWidth: "100%",
          marginTop: "10px",
        }}
      >
        {messages.map((_, index) => (
          <AnimatePresence key={index}>
            {!opened.includes(index) && (
              <motion.img
                src="/assets/balloon.png"
                alt="balloon"
                width={120}
                style={{
                  cursor: "pointer",
                  maxWidth: "22vw",
                  height: "auto",
                  userSelect: "none",
                }}
                initial={{ y: 0 }}
                animate={{ y: [-10, 10] }}
                transition={{
                  repeat: Infinity,
                  repeatType: "mirror",
                  duration: 2 + index * 0.2,
                }}
                whileTap={{ scale: 0.85 }}
                exit={{
                  scale: 0,
                  opacity: 0,
                  rotate: 360,
                  transition: { duration: 0.4 },
                }}
                onClick={() => handleClick(index)}
              />
            )}
          </AnimatePresence>
        ))}
      </div>

      {/* 💌 MESSAGE CARDS */}
      <div
        style={{
          marginTop: "clamp(22px, 5vh, 32px)",
          maxWidth: "90%",
        }}
      >
        {opened.map((i, order) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: order * 0.15 }}
            style={{
              background: "#ffffff",
              padding: "clamp(12px, 3vw, 16px)",
              marginBottom: "12px",
              borderRadius: 14,
              width: "clamp(240px, 80%, 280px)",
              fontSize: "clamp(14px, 4vw, 16px)",
              marginLeft: "auto",
              marginRight: "auto",
              boxShadow: "0 8px 20px rgba(255, 182, 193, 0.4)",
              textAlign: "center",
            }}
          >
            💌 {messages[i]}
          </motion.div>
        ))}
      </div>

      {/* ➜ NEXT BUTTON */}
      {opened.length === messages.length && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
          style={{ marginTop: "clamp(22px, 5vh, 32px)" }}
        >
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={next}
            style={{
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

      {/* ℹ️ HELPER TEXT */}
      {opened.length < messages.length && (
        <p
          style={{
            marginTop: "clamp(18px, 4vh, 26px)",
            fontSize: "clamp(14px, 4vw, 16px)",
            opacity: 0.8,
          }}
        >
          Tap balloons one by one 🎈
        </p>
      )}
    </PageWrapper>
  );
}
