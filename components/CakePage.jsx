"use client";
import { useState } from "react";
import PageWrapper from "./PageWrapper";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";

export default function CakePage({ next }) {
  const [blown, setBlown] = useState(false);

  const blowCandle = () => {
    setBlown(true);

    setTimeout(() => {
      confetti({
        particleCount: 90,
        spread: 100,
        origin: { y: 0.6 },
        colors: ["#ff8fab", "#ffd166", "#ffb3c6"],
      });
    }, 400);
  };

  return (
    <PageWrapper>

      {/* 🎂 CAKE WRAPPER */}
      <div
        style={{
          position: "relative",
          display: "inline-block",
        }}
      >
        {/* 🎂 CAKE IMAGE */}
        <img
          src="/assets/cake.png"
          alt="cake"
          width={260}
          style={{
            maxWidth: "85vw",
            height: "auto",
            display: "block",
          }}
        />

        {/* 🕯️ 3D NUMBER CANDLE — CENTER OF ROUND CAKE */}
        <div
          style={{
            position: "absolute",
            top: "-1%",                      // 🎯 CENTER OF ROUND TOP
            left: "53%",
            transform: "translate(-50%, 4px) perspective(600px)",
            zIndex: 15,
            pointerEvents: "none",
            filter: "drop-shadow(0 6px 6px rgba(0,0,0,0.25))",
          }}
        >
          <AnimatePresence>
            {!blown && (
              <motion.div
                initial={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.75, y: 14 }}
                transition={{ duration: 0.45, ease: "easeInOut" }}
                style={{
                  position: "relative",
                  width: 110,
                  height: 125,
                  transformStyle: "preserve-3d",
                }}
              >
                {/* 🔻 INSERTION SHADOW (anchors candle to cake) */}
                <div
                  style={{
                    position: "absolute",
                    bottom: 14,
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: 72,
                    height: 12,
                    background:
                      "radial-gradient(ellipse at center, rgba(0,0,0,0.45), transparent)",
                    filter: "blur(6px)",
                    zIndex: -1,
                  }}
                />

                {/* 🔢 NUMBER 1 — 3D WAX */}
                <div
                  style={{
                    position: "absolute",
                    left: 22,
                    top: 22,
                    width: 18,
                    height: 82,
                    background:
                      "linear-gradient(90deg, #ff9aa9 0%, #ff4d6d 45%, #d92d4f 100%)",
                    borderRadius: 10,
                    boxShadow:
                      "inset 2px 0 rgba(255,255,255,0.5), inset -3px 0 rgba(0,0,0,0.25)",
                    transform: "rotateX(8deg)",
                  }}
                />

                {/* 🔢 NUMBER 9 — LOOP */}
                <div
                  style={{
                    position: "absolute",
                    right: 20,
                    top: 22,
                    width: 50,
                    height: 50,
                    borderRadius: "50%",
                    border: "9px solid #ff4d6d",
                    boxShadow:
                      "inset 3px 3px rgba(255,255,255,0.4), inset -4px -4px rgba(0,0,0,0.25)",
                    transform: "rotateX(8deg)",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    right: 34,
                    top: 56,
                    width: 18,
                    height: 48,
                    background:
                      "linear-gradient(90deg, #ff9aa9 0%, #ff4d6d 45%, #d92d4f 100%)",
                    borderRadius: 10,
                    boxShadow:
                      "inset 2px 0 rgba(255,255,255,0.5), inset -3px 0 rgba(0,0,0,0.25)",
                    transform: "rotateX(8deg)",
                  }}
                />

                {/* 🧵 WICK */}
                <div
                  style={{
                    position: "absolute",
                    top: 8,
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: 3,
                    height: 9,
                    background: "#222",
                    borderRadius: 2,
                    zIndex: 5,
                  }}
                />

                {/* 🔥 FLAME — VIDEO STYLE */}
                <motion.div
                  animate={{
                    scaleY: [1, 1.25, 1],
                    rotate: [42, 50, 42],
                    x: [-1, 1, -1],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 0.75,
                    ease: "easeInOut",
                  }}
                  style={{
                    position: "absolute",
                    top: -26,
                    left: "50%",
                    transform: "translateX(-50%) rotate(45deg)",
                    width: 16,
                    height: 30,
                    background:
                      "radial-gradient(circle at 30% 30%, #fffbe6 0%, #ffd166 35%, #ff8c00 65%, #ff4500 100%)",
                    borderRadius: "50% 50% 50% 50%",
                    boxShadow:
                      "0 0 22px rgba(255,140,0,0.9), 0 0 40px rgba(255,69,0,0.75)",
                    zIndex: 6,
                  }}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* 🔽 BUTTONS & MESSAGE */}
      <div style={{ marginTop: "clamp(32px, 8vh, 52px)" }}>
        {!blown ? (
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={blowCandle}
            style={{
              fontSize: "clamp(14px, 4vw, 16px)",
              padding: "12px 26px",
            }}
          >
            Blow Candle 🕯️
          </motion.button>
        ) : (
          <>
            <motion.p
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              style={{
                fontSize: "clamp(14px, 4vw, 16px)",
                padding: "0 16px",
              }}
            >
              ✨ Wish made! May all your dreams come true 💖
            </motion.p>

            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={next}
              style={{
                marginTop: 20,
                fontSize: "clamp(14px, 4vw, 16px)",
                padding: "12px 28px",
              }}
            >
              Next ➜
            </motion.button>
          </>
        )}
      </div>

    </PageWrapper>
  );
}
