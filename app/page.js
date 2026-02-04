"use client";
import { useState, useEffect, useRef } from "react";
import { AnimatePresence } from "framer-motion";

import CoverPage from "../components/CoverPage";
import IntroPage from "../components/IntroPage";
import MemoryPage from "../components/MemoryPage";
import CakePage from "../components/CakePage";
import BalloonPage from "../components/BalloonPage";
import GiftPage from "../components/GiftPage";
import FinalPage from "../components/FinalPage";

const MAX_STEP = 6;

export default function Home() {
  const [step, setStep] = useState(0);
  const isTransitioning = useRef(false);

  const next = () => {
    if (isTransitioning.current) return;
    isTransitioning.current = true;
    setStep((s) => Math.min(s + 1, MAX_STEP));
    setTimeout(() => (isTransitioning.current = false), 800);
  };

  const prev = () => {
    if (isTransitioning.current) return;
    isTransitioning.current = true;
    setStep((s) => Math.max(s - 1, 0));
    setTimeout(() => (isTransitioning.current = false), 800);
  };

  useEffect(() => {
    let scrollTimeout;

    const handleWheel = (e) => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        if (e.deltaY > 0) next();
        else if (e.deltaY < 0) prev();
      }, 350);
    };

    const handleKeyDown = (e) => {
      if (e.key === "ArrowDown" || e.key === " ") {
        e.preventDefault();
        next();
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        prev();
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: true });
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("keydown", handleKeyDown);
      clearTimeout(scrollTimeout);
    };
  }, []);

  return (
    <AnimatePresence mode="wait">
      {step === 0 && <CoverPage key="cover" next={next} />}
      {step === 1 && <IntroPage key="intro" next={next} />}
      {step === 2 && <MemoryPage key="memory" next={next} />}
      {step === 3 && <CakePage key="cake" next={next} />}
      {step === 4 && <BalloonPage key="balloon" next={next} />}
      {step === 5 && <GiftPage key="gift" next={next} />}
      {step === 6 && (
        <FinalPage
          key="final"
          restart={() => {
            isTransitioning.current = false;
            setStep(0);
          }}
        />
      )}
    </AnimatePresence>
  );
}
