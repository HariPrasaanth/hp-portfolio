import React from "react";

const Footer: React.FC = () => (
  <footer
    style={{
      background: "#00BFA6",
      color: "#fff",
      padding: "1.5rem 0",
      textAlign: "center",
      fontSize: "1rem",
    }}
    className="rounded"
  >
    <div>&copy; {new Date().getFullYear()} All rights reserved.</div>
    <div style={{ marginTop: "0.5rem", fontSize: "0.9rem" }}>
      Made with <span style={{ color: "#e25555" }}>♥</span> by Hari Prasaanth
    </div>
  </footer>
);

export default Footer;
