"use client";
import { useState } from "react";
import PageWrapper from "./PageWrapper";
import { motion, AnimatePresence } from "framer-motion";

export default function CakePage({ next }) {
  const [blown, setBlown] = useState(false);

  return (
    <PageWrapper>

      {/* CAKE WITH CANDLE */}
      <div style={{ position: "relative", display: "inline-block" }}>
        {/* CAKE */}
        <img 
          src="/assets/cake.png" 
          width={260}
          style={{
            maxWidth: "85vw",
            height: "auto",
            display: "block",
          }}
        />

        {/* CANDLE - ON TOP OF CAKE */}
        <div style={{ 
          position: "absolute", 
          top: 40, 
          left: "50%", 
          transform: "translateX(-50%)",
          zIndex: 10,
        }}>
          <AnimatePresence>
            {!blown && (
              <motion.div
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                style={{
                  width: 60,
                  height: 70,
                  position: "relative",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <svg width="60" height="70" viewBox="0 0 60 70" style={{ position: "absolute", zIndex: 1 }}>
                  {/* Number 1 - Pink */}
                  <line x1="10" y1="10" x2="10" y2="60" stroke="#080808" strokeWidth="6" strokeLinecap="round" />
                  <line x1="5" y1="60" x2="15" y2="60" stroke="#0a0a0a" strokeWidth="6" strokeLinecap="round" />
                  
                  {/* Number 9 - Blue */}
                  <circle cx="40" cy="25" r="12" fill="none" stroke="#0c0c0c" strokeWidth="6" strokeLinecap="round" />
                  <line x1="52" y1="25" x2="52" y2="60" stroke="#0b0b0b" strokeWidth="6" strokeLinecap="round" />
                  <line x1="47" y1="60" x2="57" y2="60" stroke="#0a0a0a" strokeWidth="6" strokeLinecap="round" />
                </svg>
                
                {/* FLAME */}
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                  style={{
                    width: 18,
                    height: 18,
                    background: "radial-gradient(circle, #FFD700 0%, #FFA500 50%, #FF6347 100%)",
                    borderRadius: "50%",
                    position: "absolute",
                    top: -20,
                    left: "30%",
                    transform: "translateX(-50%)",
                    boxShadow: "0 0 15px rgb(251, 7, 7), 0 0 30px rgba(243, 84, 31, 0.94), 0 0 45px rgba(255, 69, 0, 0.4)",
                    filter: "drop-shadow(0 0 8px rgba(255, 0, 0, 0.8))",
                    zIndex: 2,
                  }}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* BUTTON AND TEXT BELOW CAKE */}
      <div style={{ marginTop: "clamp(30px, 8vh, 50px)" }}>
        {/* BUTTON TO BLOW CANDLE */}
        {!blown && (
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setBlown(true)}
            style={{ 
              marginTop: 0,
              fontSize: "clamp(14px, 4vw, 16px)",
              padding: "10px 15px"
            }}
          >
            Blow Candle 🕯️
          </motion.button>
        )}

        {/* AFTER BLOW */}
        {blown && (
          <>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              style={{ fontSize: "clamp(14px, 4vw, 16px)", padding: "0 15px" }}
            >
              ✨ Wish made! May all your dreams come true 💖
            </motion.p>

            <motion.button
              style={{ 
                marginTop: "clamp(15px, 3vh, 20px)",
                fontSize: "clamp(14px, 4vw, 16px)",
                padding: "10px 15px"
              }}
              whileTap={{ scale: 0.9 }}
              onClick={next}
            >
              Next ➜
            </motion.button>
          </>
        )}
      </div>

    </PageWrapper>
  );
}
