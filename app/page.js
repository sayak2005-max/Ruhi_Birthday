"use client";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";

import CoverPage from "../components/CoverPage";
import IntroPage from "../components/IntroPage";
import MemoryPage from "../components/MemoryPage";
import CakePage from "../components/CakePage";       // 🎂 moved up
import BalloonPage from "../components/BalloonPage"; // 🎈 after cake
import GiftPage from "../components/GiftPage";
import FinalPage from "../components/FinalPage";

export default function Home() {
  const [step, setStep] = useState(0);
  const next = () => setStep((s) => s + 1);

  return (
    <AnimatePresence mode="wait">
      {step === 0 && <CoverPage next={next} />}
      {step === 1 && <IntroPage next={next} />}
      {step === 2 && <MemoryPage next={next} />}

      {/* 🎂 CAKE & CANDLE FIRST */}
      {step === 3 && <CakePage next={next} />}

      {/* 🎈 BALLOONS AFTER CAKE */}
      {step === 4 && <BalloonPage next={next} />}

      {/* 🎁 GIFT */}
      {step === 5 && <GiftPage next={next} />}

      {/* ❤️ FINAL */}
      {step === 6 && <FinalPage />}
    </AnimatePresence>
  );
}
