import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// IMPORT ALL IMAGES
import img1 from "../../assets/Snapchat-1034245975.jpg";
import img2 from "../../assets/Snapchat-1059345659.jpg";
import img3 from "../../assets/Snapchat-1081251612.jpg";
import img4 from "../../assets/Snapchat-1208600906.jpg";
import img5 from "../../assets/Snapchat-1256204860.jpg";
import img6 from "../../assets/Snapchat-127768062.jpg";
import img7 from "../../assets/Snapchat-1413817022.jpg";
import img8 from "../../assets/Snapchat-1419465838.jpg";
import img9 from "../../assets/Snapchat-1852451824.jpg";
import img10 from "../../assets/Snapchat-1898650029.jpg";
import img11 from "../../assets/Snapchat-18999747.jpg";
import img12 from "../../assets/Snapchat-1919977668.jpg";
import img13 from "../../assets/Snapchat-1925610287.jpg";
import img14 from "../../assets/Snapchat-1939707654.jpg";
import img15 from "../../assets/Snapchat-1942665042.jpg";
import img16 from "../../assets/Snapchat-1985900138.jpg";
import img17 from "../../assets/Snapchat-2008387605.jpg";
import img18 from "../../assets/Snapchat-2068439798.jpg";
import img19 from "../../assets/Snapchat-2095416156.jpg";
import img20 from "../../assets/Snapchat-30312724.jpg";
import img21 from "../../assets/Snapchat-322822970.jpg";
import img22 from "../../assets/Snapchat-46512100.jpg";
import img23 from "../../assets/Snapchat-53974245.jpg";
import img24 from "../../assets/Snapchat-72880346.jpg";
import img25 from "../../assets/Snapchat-958051883.jpg";


export default function Memories() {
  const [visible, setVisible] = useState([]);
  const [showFinalCard, setShowFinalCard] = useState(false);
  const [showFinalBtn, setShowFinalBtn] = useState(false);
const [showPopup, setShowPopup] = useState(false);
const navigate = useNavigate();

  const memories = [
    { img: img1, text: "Our first memory 💖" },
    { img: img2, text: "That beautiful smile 😊" },
    { img: img3, text: "Unforgettable day 🌸" },
    { img: img4, text: "You + Me forever ❤️" },
    { img: img5, text: "Special moments ✨" },
    { img: img6, text: "Your happiness = mine 😍" },
    { img: img7, text: "That cute pose 😘" },
    { img: img8, text: "Endless love 💕" },
    { img: img9, text: "Memories we cherish 💭" },
    { img: img10, text: "Perfect together 💑" },
    { img: img11, text: "Sweet moments 🍫" },
    { img: img12, text: "Golden time 🌟" },
    { img: img13, text: "Forever us 💍" },
    { img: img14, text: "Laughs & love 😂❤️" },
    { img: img15, text: "You are my world 🌍" },
    { img: img16, text: "Every second matters ⏳" },
    { img: img17, text: "Beautiful you 🌹" },
    { img: img18, text: "My happiness 💫" },
    { img: img19, text: "Our journey 🚀" },
    { img: img20, text: "Pure love 💓" },
    { img: img21, text: "Special forever 💖" },
    { img: img22, text: "Moments of joy 😄" },
    { img: img23, text: "Dream together 🌙" },
    { img: img24, text: "Endless memories 📸" },
    { img: img25, text: " Cherished moments 📷" },
  ];

useEffect(() => {
  memories.forEach((_, i) => {
    setTimeout(() => {
      setVisible((prev) => [...prev, i]);

      // 👇 after last image
      if (i === memories.length - 1) {
        setTimeout(() => {
          setShowFinalBtn(true);
        }, 100);
      }

    }, i * 1300);
  });
}, []); 

  return (
    <div style={styles.container}>

     <button style={styles.backBtn} onClick={() => navigate(-1)}>
                    ← Back
                </button>

      {/* Title */}
      <h1 style={styles.title}>💖 Our Memories 💖</h1>

      {/* Grid */}
      <div style={styles.grid}>
        
        {memories.map((item, i) => (
          <div
            key={i}
            style={{
              ...styles.card,
              opacity: visible.includes(i) ? 1 : 0,
           transform: visible.includes(i)
  ? "translateY(0px) scale(1)"
  : "translateY(80px) scale(0.85)",
  filter: visible.includes(i) ? "blur(0px)" : "blur(8px)",
            }}
          >
            <img src={item.img} alt="" style={styles.image} />
            <p style={styles.text}>{item.text}</p>
          </div>
        ))}
      </div>
      {showFinalBtn && (
  <div style={styles.bottomBar}>
    <button
      style={styles.finalBtn}
      onClick={() => setShowPopup(true)}
    >
      Baat Yehi Khatam Nahi Hoti... ❤️
    </button>
  </div>
)}
     {showPopup && (
  <div style={styles.overlay}>
    <div style={styles.popup}>
      
      <h1 style={styles.loveText}>
        ❤️ I Love You Shona ❤️ <br />
      </h1>
      <h2 style={{ marginBottom: "30px", color: "#555" }}>
        Aage Aage Dekho Hota Hai Kya...
      </h2>

      <button
        style={styles.surpriseBtn}
        onClick={() => navigate("/reasons")}
      >
        Next Surprise 🎁
      </button>

    </div>
  </div>
)}
    </div>
  );
}

const styles = {
 bottomBar: {
  position: "fixed",
  bottom: "20px",
  width: "100%",
  display: "flex",
  justifyContent: "center",
  zIndex: 10,
},

finalBtn: {
  padding: "14px 30px",
  fontSize: "18px",
  background: "#ec4899",
  color: "white",
  border: "none",
  borderRadius: "30px",
  cursor: "pointer",
  boxShadow: "0 5px 20px rgba(0,0,0,0.3)",
  animation: "pulse 2s infinite",
},

overlay: {
  position: "fixed",
  inset: 0,
  background: "rgba(0,0,0,0.6)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 20,
},

popup: {
  background: "white",
  padding: "40px",
  borderRadius: "20px",
  textAlign: "center",
  boxShadow: "0 20px 50px rgba(0,0,0,0.4)",
  animation: "popIn 0.8s ease",
},

loveText: {
  fontSize: "34px",
  color: "#ec4899",
  marginBottom: "20px",
  animation: "glow 2s infinite",
},

surpriseBtn: {
  padding: "12px 25px",
  fontSize: "16px",
  background: "#ec4899",
  color: "white",
  border: "none",
  borderRadius: "10px",
  cursor: "pointer",
},
  container: {
    minHeight: "100vh",
    width: "100%",
    background: "linear-gradient(135deg, #ffe4e6, #fbcfe8)",
    padding: "20px",
  },

  logout: {
    position: "fixed",
    top: "20px",
    left: "20px",
    padding: "10px 15px",
    background: "#ef4444",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  },

  title: {
    textAlign: "center",
    fontSize: "32px",
    color: "#ec4899",
    marginBottom: "20px",
  },

  grid: {
    display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
  gap: "20px",
},

card: {
  background: "white",
  borderRadius: "15px",
  overflow: "hidden",
  boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
  transition: "all 1.4s cubic-bezier(0.22, 1, 0.36, 1)", // 🔥 cinematic easing
},

  image: {
    width: "100%",
    height: "400px",
    objectFit: "cover",
    transition: "transform 1.2s ease",
  },

  text: {
    padding: "10px",
    textAlign: "center",
    color: "#555",
    fontWeight: "500",
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
};