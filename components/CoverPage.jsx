"use client";
import PageWrapper from "./PageWrapper";
import { motion } from "framer-motion";

export default function CoverPage({ next }) {
  return (
    <PageWrapper>
      <motion.img
        src="/assets/cover.webp"
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: -1,
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      />
      <motion.button whileTap={{ scale: 0.9 }} onClick={next}>
        Start 💖
      </motion.button>
    </PageWrapper>
  );
}
