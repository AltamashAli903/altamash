import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function WhyILovesYou() {
  const [openIndex, setOpenIndex] = useState(null);
  const navigate = useNavigate();

  // 📱 Mobile detection
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
        <h1
          style={{
            ...styles.title,
            fontSize: isMobile ? "24px" : "32px",
          }}
        >
          💌 Why I Love You 💌
        </h1>

        {/* 📩 GRID */}
        <div
          style={{
            ...styles.grid,
            gridTemplateColumns: isMobile
              ? "1fr"
              : "repeat(4, minmax(220px, 1fr))",
            gap: isMobile ? "20px" : "40px",
          }}
        >
          {letters.map((_, i) => (
            <div key={i} style={styles.card} onClick={() => setOpenIndex(i)}>
              <div
                style={{
                  ...styles.envelope,
                  width: isMobile ? "90%" : "240px",
                  height: isMobile ? "140px" : "150px",
                }}
              >
                <div style={styles.flap}></div>
                <p style={styles.envelopeText}>Open Me 💖</p>
              </div>
            </div>
          ))}
        </div>

        {/* 🎁 Next */}
        <button
          style={{
            ...styles.surpriseBtn,
            padding: isMobile ? "10px 20px" : "12px 25px",
            fontSize: isMobile ? "14px" : "16px",
          }}
          onClick={() => navigate("/final")}
        >
          Next Surprise 🎁
        </button>
      </div>

      {/* 💖 POPUP */}
      {openIndex !== null && (
        <div style={styles.overlay}>
          <div
            style={{
              ...styles.popup,
              padding: isMobile ? "25px 15px" : "40px",
              width: isMobile ? "90%" : "400px",
            }}
          >
            <button
              style={styles.popupBack}
              onClick={() => setOpenIndex(null)}
            >
              ← Back
            </button>

            <p
              style={{
                ...styles.message,
                fontSize: isMobile ? "16px" : "20px",
              }}
            >
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
    color: "#ec4899",
    marginBottom: "30px",
    textAlign: "center",
  },

  grid: {
    display: "grid",
    width: "100%",
    maxWidth: "1100px",
    justifyItems: "center",
  },

  card: {
    cursor: "pointer",
    width: "100%",
    display: "flex",
    justifyContent: "center",
  },

  envelope: {
    background: "#fff",
    position: "relative",
    borderRadius: "12px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
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

  surpriseBtn: {
    marginTop: "40px",
    background: "#ec4899",
    color: "white",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
  },

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
    borderRadius: "15px",
    textAlign: "center",
    position: "relative",
  },

  popupBack: {
    position: "absolute",
    top: "2px",
    left: "12px",
    background: "linear-gradient(135deg, #ec4899, #f43f5e)",
    color: "white",
    border: "none",
    cursor: "pointer",
    padding: "6px 14px",
    borderRadius: "20px",
    fontSize: "12px",
    fontWeight: "bold",
  },

  message: {
    color: "#444",
    lineHeight: "1.5",
  },
};