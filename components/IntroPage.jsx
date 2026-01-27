"use client";
import PageWrapper from "./PageWrapper";

export default function IntroPage({ next }) {
  return (
    <PageWrapper>
      <img 
        src="/assets/intro.gif" 
        width={220}
        style={{
          maxWidth: "90%",
          height: "auto",
        }}
      />
      <p style={{
        fontSize: "clamp(16px, 5vw, 24px)",
        marginTop: "20px",
        marginBottom: "20px",
      }}>
        I have something special for you 🥺💖
      </p>
      <button onClick={next} style={{
        padding: "10px 20px",
        fontSize: "clamp(14px, 4vw, 18px)",
      }}>
        Next ➜
      </button>
    </PageWrapper>
  );
}
