// FlowComparisonBefore.js
import React from "react";

const FlowComparisonBefore = () => {
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        background: "linear-gradient(180deg, #0f172a, #1e293b)",
        color: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Segoe UI, sans-serif",
      }}
    >
      <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>Before</h1>
      <p style={{ fontSize: "1.2rem", opacity: 0.8, maxWidth: "600px", textAlign: "center" }}>
        This section represents your previous flow or design.
        Scroll right to explore the enhanced version with Paytech API integration.
      </p>
    </div>
  );
};

export default FlowComparisonBefore;
