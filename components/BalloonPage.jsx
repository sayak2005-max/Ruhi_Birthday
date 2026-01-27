"use client";
import { useState } from "react";
import PageWrapper from "./PageWrapper";
import { motion, AnimatePresence } from "framer-motion";

const messages = [
  "you",
  "are",
  "a",
  "cutie"
];

export default function BalloonPage({ next }) {
  const [opened, setOpened] = useState([]);

  const handleClick = (index) => {
    if (!opened.includes(index)) {
      setOpened([...opened, index]);
    }
  };

  return (
    <PageWrapper>

      {/* BALLOONS */}
      <div style={{ 
        display: "flex", 
        gap: "clamp(10px, 5vw, 20px)",
        flexWrap: "wrap",
        justifyContent: "center",
        maxWidth: "100%",
      }}>
        {messages.map((_, index) => (
          <AnimatePresence key={index}>
            {!opened.includes(index) && (
              <motion.img
                src="/assets/balloon.png"
                width={120}
                style={{ 
                  cursor: "pointer",
                  maxWidth: "22vw",
                  height: "auto",
                }}
                initial={{ y: 0 }}
                animate={{ y: [-10, 10] }}
                transition={{ repeat: Infinity, duration: 2 }}
                whileTap={{ scale: 0.8 }}
                exit={{ scale: 0, opacity: 0, rotate: 360 }}
                onClick={() => handleClick(index)}
              />
            )}
          </AnimatePresence>
        ))}
      </div>

      {/* LETTER MESSAGES */}
      <div style={{ marginTop: "clamp(20px, 5vh, 30px)", maxWidth: "90%" }}>
        {opened.map((i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            style={{
              background: "white",
              padding: "clamp(10px, 3vw, 14px)",
              marginBottom: "10px",
              borderRadius: 12,
              width: "clamp(250px, 80%, 280px)",
              fontSize: "clamp(14px, 4vw, 16px)",
              margin: "0 auto 10px auto",
            }}
          >
            💌 {messages[i]}
          </motion.div>
        ))}
      </div>

      {/* NEXT BUTTON */}
      {opened.length === 4 && (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          whileTap={{ scale: 0.9 }}
          onClick={next}
          style={{ 
            marginTop: "clamp(20px, 5vh, 30px)",
            fontSize: "clamp(14px, 4vw, 16px)", 
            padding: "10px 15px" 
          }}
        >
          Next ➜
        </motion.button>
      )}

      {/* HELPER TEXT */}
      {opened.length < 4 && <p style={{ fontSize: "clamp(14px, 4vw, 16px)" }}>Tap balloons one by one 🎈</p>}

    </PageWrapper>
  );
}
