"use client";
import { useState } from "react";
import PageWrapper from "./PageWrapper";
import { motion } from "framer-motion";

export default function FinalPage() {
  const [restart, setRestart] = useState(false);

  const handleRestart = () => {
    setRestart(true);
    setTimeout(() => {
      window.location.href = "/";
    }, 500);
  };

  return (
    <PageWrapper>
      <motion.div
        initial={{ opacity: 1 }}
        animate={restart ? { opacity: 0 } : { opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <img 
          src="/assets/3.jpeg" 
          width={260}
          style={{
            maxWidth: "85vw",
            height: "auto",
          }}
        />
        <img 
          src="/assets/4.jpeg" 
          width={260}
          style={{ 
            marginTop: "clamp(10px, 3vh, 16px)",
            maxWidth: "85vw",
            height: "auto",
          }}
        />
        <h2 style={{
          fontSize: "clamp(20px, 6vw, 28px)",
          marginTop: "clamp(15px, 3vh, 20px)",
          padding: "0 15px",
        }}>
          Happy Birthday ❤️ My Love❤️ Many Many Happy Returns of the Day! 🎉🎂🎈  
          <br />
          I'm always with you.
        </h2>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleRestart}
          style={{
            marginTop: "clamp(20px, 5vh, 30px)",
            background: "#FF6B9D",
            fontSize: "clamp(14px, 4vw, 16px)",
            padding: "10px 20px",
          }}
        >
          Restart 🔄
        </motion.button>
      </motion.div>
    </PageWrapper>
  );
}
