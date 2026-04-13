import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function WhyILovesYou() {
  const [openIndex, setOpenIndex] = useState(null);
  const navigate = useNavigate();

  const letters = [
    "I Love You Because You Are Prettiest Girl In This World ......💖",
    "I Love You Because You Are Namazi Parda Guzar Aur Islamic As I Like's......😊",
    "I Love You Because You Are My Cute Little Angry Bird 🥰",
    "I Love You When You Behaves Childish In Front Of Me 🤪",
    "I Love You Because You Respects Every One 🫶",
    "I Love You Because I Can't Live Without You 🥹",
    "I Love You When You Calls Me Shonaa I Love You My Tayyuuuu.....😘",
    "I Love You When You Becomes More Romantic Than Meeh...... 💋🫦",
  ];

  return (
    <>
      {/* MAIN */}
      <div
        style={{
          ...styles.container,
          filter: openIndex !== null ? "blur(8px)" : "blur(0px)",
          transition: "filter 0.3s ease",
        }}
      >
        {/* 🔙 Back */}
        <button style={styles.backBtn} onClick={() => navigate(-1)}>
          ← Back
        </button>

        {/* 💌 Title */}
        <h1 style={styles.title}>💌 Why I Love You 💌</h1>

        {/* 📩 GRID */}
        <div style={styles.grid}>
          {letters.map((_, i) => (
            <div
              key={i}
              style={styles.card}
              onClick={() => setOpenIndex(i)}
            >
              <div style={styles.envelope}>
                <div style={styles.flap}></div>
                <p style={styles.envelopeText}>Open Me 💖</p>
              </div>
            </div>
          ))}
        </div>

        {/* 🎁 Next */}
        <button
          style={styles.surpriseBtn}
          onClick={() => navigate("/final")}
        >
          Next Surprise 🎁
        </button>
      </div>

      {/* 💖 POPUP */}
      {openIndex !== null && (
        <div style={styles.overlay}>
          <div style={styles.popup}>
            <button
              style={styles.popupBack}
              onClick={() => setOpenIndex(null)}
            >
              ← Back
            </button>

            <p style={styles.message}>
              {letters[openIndex]}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
const styles = {

  container: {
    minHeight: "100vh",
    width: "100%",
    background: "linear-gradient(135deg, #ffe4e6, #fbcfe8)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "40px 20px",
  },

  backBtn: {
    position: "absolute",
    top: "20px",
    left: "20px",
    padding: "8px 15px",
    background: "#ec4899",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  },

  title: {
    fontSize: "32px",
    color: "#ec4899",
    marginBottom: "40px",
    textAlign: "center",
  },

  /* 🔥 FIXED GRID */
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(4, minmax(220px, 1fr))",
    gap: "40px",
    width: "100%",
    maxWidth: "1100px", // 👈 prevents overflow
    justifyItems: "center",
  },

  card: {
    cursor: "pointer",
  },

  envelope: {
    width: "240px", // 👈 reduced (important)
    height: "150px",
    background: "#fff",
    position: "relative",
    borderRadius: "12px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "0.3s",
  },

  flap: {
    position: "absolute",
    top: 0,
    width: "100%",
    height: "50%",
    background: "#fda4af",
    clipPath: "polygon(0 0, 50% 100%, 100% 0)",
  },

  envelopeText: {
    zIndex: 1,
    color: "#ec4899",
    fontWeight: "bold",
  },

  /* 🎁 Button */
  surpriseBtn: {
    marginTop: "50px",
    padding: "12px 25px",
    fontSize: "16px",
    background: "#ec4899",
    color: "white",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
  },

  /* 💖 POPUP */
  overlay: {
    position: "fixed",
    inset: 0,
    background: "rgba(0,0,0,0.6)",
    backdropFilter: "blur(8px)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

popup: {
  background: "white",
  padding: "40px",
  borderRadius: "15px",
  width: "400px",
  textAlign: "center",
  position: "relative", // ✅ IMPORTANT FIX
},

popupBack: {
  position: "absolute",
  top: "12px",
  left: "12px",

  background: "linear-gradient(135deg, #ec4899, #f43f5e)",
  color: "white",
  border: "none",
  cursor: "pointer",

  padding: "6px 14px",
  borderRadius: "20px",
  fontSize: "12px",
  fontWeight: "bold",

  boxShadow: "0 8px 20px rgba(236,72,153,0.4)",
},

  message: {
    fontSize: "20px",
    color: "#444",
    lineHeight: "1.6",
  },
};