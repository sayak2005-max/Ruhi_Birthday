
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
        particleCount: 120,
        spread: 110,
        origin: { y: 0.6 },
        colors: ["#ff8fab", "#ffd166", "#ffffff", "#8b4513"],
      });
    }, 400);
  };

  return (
    <PageWrapper>
      {/* 🍫 CHOCOLATE CAKE */}
      <div
        style={{
          position: "relative",
          width: "300px",
          maxWidth: "90vw",
          height: "310px",
          margin: "0 auto",
        }}
      >
        {/* 🕯️ 20 CANDLE */}
        <AnimatePresence>
          {!blown && (
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.7, y: 20 }}
              transition={{ duration: 0.4 }}
              style={{
                position: "absolute",
                top: 5,
                left: "50%",
                transform: "translateX(-50%)",
                width: 85,
                height: 100,
                zIndex: 30,
              }}
            >
              {/* 🔥 FLAME */}
              <motion.div
                animate={{
                  scale: [1, 1.15, 0.95, 1.1, 1],
                  rotate: [-4, 5, -4, 3, -4],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 0.8,
                }}
                style={{
                  position: "absolute",
                  top: -5,
                  left: "-10%",
                  transform: "translateX(-50%)",
                  width: 17,
                  height: 28,
                  borderRadius: "55% 45% 60% 40%",
                  background:
                    "radial-gradient(circle at 50% 70%, white 0%, #fff3a0 20%, #ffd166 42%, #ff8c00 68%, #ff4500 100%)",
                  boxShadow:
                    "0 0 10px #ffd166, 0 0 25px #ff8c00, 0 0 40px rgba(255,70,0,.5)",
                  zIndex: 40,
                }}
              />

              {/* WICK */}
              <div
                style={{
                  position: "absolute",
                  top: 21,
                  left: "-1%",
                  transform: "translateX(-50%)",
                  width: 4,
                  height: 13,
                  background: "#222",
                  borderRadius: 3,
                  zIndex: 35,
                }}
              />

              {/* 2 */}
              <div
                style={{
                  position: "absolute",
                  left: -30,
                  top: 33,
                  width: 27,
                  height: 53,
                  zIndex: 32,
                  background:
                    "linear-gradient(135deg,#ffb0bd,#ff4d6d 55%,#b82040)",
                  clipPath:
                    "polygon(0 0,75% 0,100% 20%,100% 43%,42% 62%,15% 80%,100% 80%,100% 100%,0 100%,0 78%,31% 52%,73% 35%,73% 22%,0 22%)",
                  boxShadow:
                    "inset 2px 2px 3px rgba(255,255,255,.55), 4px 5px 0 #921c36",
                }}
              />

              {/* 0 */}
              <div
                style={{
                  position: "absolute",
                  right: 50,
                  top: 33,
                  width: 34,
                  height: 54,
                  borderRadius: "50%",
                  border: "10px solid #ff4d6d",
                  boxSizing: "border-box",
                  background:
                    "linear-gradient(135deg,rgba(255,255,255,.3),transparent)",
                  boxShadow:
                    "inset 3px 3px 4px rgba(255,255,255,.5), inset -4px -4px 4px rgba(70,0,20,.3), 4px 5px 0 #921c36",
                }}
              />

              {/* CANDLE INSERTION SHADOW */}
              <div
                style={{
                  position: "absolute",
                  bottom: 7,
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: 60,
                  height: 10,
                  borderRadius: "50%",
                  background: "rgba(0,0,0,.4)",
                  filter: "blur(5px)",
                }}
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* 🍫 CAKE TOP */}
        <div
          style={{
            position: "absolute",
            top: 80,
            left: "50%",
            transform: "translateX(-50%)",
            width: 270,
            height: 65,
            borderRadius: "50%",
            background:
              "radial-gradient(ellipse at 35% 25%, #8b4a2f 0%, #5a2b19 45%, #32150d 100%)",
            boxShadow:
              "0 10px 20px rgba(0,0,0,.35), inset 0 8px 12px rgba(255,255,255,.08)",
            zIndex: 10,
          }}
        >
          {/* 🍫 GANACHE */}
          <div
            style={{
              position: "absolute",
              top: 15,
              left: 25,
              width: 220,
              height: 42,
              borderRadius: "50%",
              background:
                "radial-gradient(ellipse at 35% 25%, #a86442, #542716 65%, #32150d)",
              boxShadow: "inset 0 5px 8px rgba(255,255,255,.08)",
            }}
          />

          {/* 🍓 DECORATIONS */}
          {[35, 75, 115, 155, 195].map((x) => (
            <div
              key={x}
              style={{
                position: "absolute",
                left: x,
                top: 22,
                width: 12,
                height: 12,
                borderRadius: "50%",
                background:
                  "radial-gradient(circle at 30% 25%, #fff, #ff8fab 35%, #c9184a 75%)",
                boxShadow: "0 3px 4px rgba(0,0,0,.35)",
              }}
            />
          ))}
        </div>

        {/* 🍫 TOP CAKE BODY */}
        <div
          style={{
            position: "absolute",
            top: 115,
            left: "50%",
            transform: "translateX(-50%)",
            width: 250,
            height: 75,
            borderRadius: "0 0 22px 22px",
            background:
              "linear-gradient(90deg,#32150d,#6b321d 25%,#7b3f24 50%,#542515 75%,#2a1009)",
            boxShadow:
              "0 12px 16px rgba(0,0,0,.35), inset 5px 0 10px rgba(255,255,255,.08)",
            zIndex: 8,
          }}
        >
          {/* GANACHE DRIPS */}
          {[20, 55, 90, 125, 160, 195].map((x, i) => (
            <div
              key={i}
              style={{
                position: "absolute",
                left: x,
                top: -2,
                width: 22,
                height: 22 + (i % 3) * 9,
                background: "#32150d",
                borderRadius: "0 0 15px 15px",
              }}
            />
          ))}
        </div>

        {/* 🍰 CREAM LAYER */}
        <div
          style={{
            position: "absolute",
            top: 183,
            left: "50%",
            transform: "translateX(-50%)",
            width: 265,
            height: 25,
            borderRadius: "50%",
            background:
              "linear-gradient(180deg,#fff8f0,#ead8c8,#c9aa92)",
            boxShadow: "0 5px 8px rgba(0,0,0,.25)",
            zIndex: 12,
          }}
        />

        {/* 🍫 LOWER CAKE */}
        <div
          style={{
            position: "absolute",
            top: 195,
            left: "50%",
            transform: "translateX(-50%)",
            width: 260,
            height: 65,
            borderRadius: "0 0 25px 25px",
            background:
              "linear-gradient(90deg,#291009,#572716 25%,#713a22 50%,#542414 75%,#260d07)",
            boxShadow:
              "0 15px 18px rgba(0,0,0,.4), inset 5px 0 10px rgba(255,255,255,.06)",
            zIndex: 7,
          }}
        />

        {/* 🍫 CHOCOLATE SHAVINGS */}
        {[25, 65, 105, 145, 185, 225].map((x, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              left: `calc(50% - 120px + ${x}px)`,
              top: 202 + (i % 2) * 15,
              width: 15,
              height: 5,
              borderRadius: 5,
              background: "#9b5935",
              transform: `rotate(${i % 2 ? 15 : -15}deg)`,
              zIndex: 15,
            }}
          />
        ))}

        {/* 🍫 CAKE BASE */}
        <div
          style={{
            position: "absolute",
            top: 250,
            left: "50%",
            transform: "translateX(-50%)",
            width: 275,
            height: 32,
            borderRadius: "50%",
            background:
              "linear-gradient(180deg,#6d361f,#32140b)",
            boxShadow: "0 10px 12px rgba(238, 51, 51, 0.4)",
            zIndex: 6,
          }}
        />

        {/* ✨ CAKE GLOW */}
        <div
          style={{
            position: "absolute",
            top: 78,
            left: "50%",
            transform: "translateX(-50%)",
            width: 160,
            height: 35,
            borderRadius: "50%",
            background: "rgba(255,180,100,.08)",
            filter: "blur(12px)",
            zIndex: 5,
          }}
        />
      </div>

      {/* 🔽 BUTTONS */}
      <div
        style={{
          marginTop: "clamp(32px, 8vh, 52px)",
          textAlign: "center",
        }}
      >
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

