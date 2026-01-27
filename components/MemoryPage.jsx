"use client";
import PageWrapper from "./PageWrapper";

export default function MemoryPage({ next }) {
  return (
    <PageWrapper>
      <img src="/assets/1.jpeg" width={260} />
      <img src="/assets/2.jpeg" width={260} style={{ marginTop: 16 }} />
      <button onClick={next}>Next ➜</button>
    </PageWrapper>
  );
}
