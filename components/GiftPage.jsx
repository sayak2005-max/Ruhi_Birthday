"use client";
import { useState } from "react";
import PageWrapper from "./PageWrapper";
import { motion } from "framer-motion";

export default function GiftPage({ next }) {
  const [open, setOpen] = useState(false);

  return (
    <PageWrapper>

      {/* GIFT BOX */}
      {!open && (
        <>
          <motion.img
            src="/assets/gift.gif"
            width={220}
            style={{ cursor: "pointer" }}
            animate={{ y: [-8, 8] }}
            transition={{ repeat: Infinity, duration: 2 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setOpen(true)}
          />
          <p>Tap the gift 🎁</p>
        </>
      )}

      {/* SURPRISE MESSAGE */}
      {open && (
        <>
          <motion.img
            src="/assets/surprise.gif"
            width={220}
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            style={{
              background: "white",
              padding: 20,
              borderRadius: 16,
              marginTop: 16,
              width: 300,
            }}
          >
            <p>
              💖 <b>Surpriseee!</b><br /><br />
              You are not just special,  
              you are my favorite feeling.<br /><br />
              Your smile makes my bad days better,  
              your voice feels like home,  
              and your presence is my biggest gift 🎁<br /><br />
              I’m so lucky to have <b>you</b> in my life ❤️
            </p>
          </motion.div>

          <motion.button
            style={{ marginTop: 20 }}
            whileTap={{ scale: 0.9 }}
            onClick={next}
          >
            Next ➜
          </motion.button>
        </>
      )}

    </PageWrapper>
  );
}
