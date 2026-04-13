import { useEffect, useState } from "react";

export default function FinalLove() {
  const [showCenterHeart, setShowCenterHeart] = useState(false);
  const [blast, setBlast] = useState(false);
  const [showText, setShowText] = useState(false);
  const [showFinalPopup, setShowFinalPopup] = useState(false);
  const [hasOpenedOnce, setHasOpenedOnce] = useState(false);

useEffect(() => {
  setTimeout(() => setShowCenterHeart(true), 3000);
  setTimeout(() => setBlast(true), 6000);
  setTimeout(() => setShowText(true), 6500);

  // 👇 auto open
  setTimeout(() => {
    setShowFinalPopup(true);
    setHasOpenedOnce(true); // ✅ mark opened
  }, 9000);
}, []);

  return (
    <div style={styles.container}>
      {/* 💖 Falling Hearts */}
      <div style={styles.hearts}>
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            style={{
              ...styles.heart,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          >
            ❤️
          </div>
        ))}
      </div>

      {/* 💓 Center Heart */}
      {showCenterHeart && (
  <div
    style={{
      ...styles.centerHeart,
      transform: blast
        ? "translate(-50%, -50%) scale(40)" // 🔥 BIG enough to fill screen
        : "translate(-50%, -50%) scale(1)",
      opacity: blast ? 0 : 1,
    }}
  />
)}

{/* 💥 Blast Effect */}
{blast && <div style={styles.blast} />}

{/* 💖 Final Text */}
{showText && (
  <h1 style={styles.text}>
   ❤️ I Love You Meri Jaan ❤️
  </h1>
)}
{showFinalPopup && (
  <div style={styles.finalOverlay}>
    <div style={styles.finalPopup}>

      <h2 style={styles.finalTitle}>Clarification Of Mine </h2>
      
     <p style={styles.finalMessage}>
  Meri Pyaari Cutie Tayyaba Fatema... 💖 <br /><br />

  Main pichle 20 days se jab jab time milta tha, tab tab aapke liye yeh website bana raha tha. <br />
  Jo Monday ko aapko call nahi aaya na… tbh uss waqt bhi main isi pe kaam kar raha tha, sirf aapko surprise dene ke liye. <br /><br />

  Aapko pata hai maine kitni mehnat ki hai iske liye… <br />
  Late tak jaag ke, jaldi uth ke, sirf aapke liye. <br />
  Last 2 Saturdays raat tak kaam kiya, aur Sundays bhi almost pura din isi pe diya. <br /><br />

  Jab aapko laga ki main badal gaya hoon… ya call nahi kar raha… <br />
  Sach bolu toh jab sab lunch ke liye bahar jaate the, main akela rehkar isi pe kaam karta tha. <br />
  Is wajah se mera lunch bhi late hota tha… but mujhe sirf yeh complete karna tha — aapke liye. ❤️ <br /><br />

  Jab main ispe kaam kar raha tha, tab aapne mujhe kuch baatein boli… <br />
  Lekin main surprise reveal karke aapka special day kharab nahi karna chahta tha. <br /><br />

  Aur jo maine kaha tha na ek “bachi” hai jisme main time invest kar raha hoon… <br />
  Woh bachi koi aur nahi… sirf aap thi, Tayyaba Fatema. 💕 <br /><br />

  Ab Smjhe Q Maine Apse Share Nai kiya Kaunsi Bachi hai vo <br />
  And Apne Mujhe Sir Ka Naam Leke Tease Kiya <br /><br />

  Aur Haan Jb Apni Fight hui thi tb mai baar baar bolra tha ki <br />
  kuch din mat kro baat Mujhse , Because Meko Yeh Banana tha Meri Jaan Ke Liye <br />
  Yeh Surprise Plan Krna tha aur apka snap aaya toh mai khudko control nai kr skta <br />
  Jis se Meku Time nai mil paata and meri Surprise Adhuura Reh Jata <br /><br />  

  1) Apka Pehla Blame Mai badal gaya Time Nai dee Paa raha : <br />
  Ans : - Mai Apke Liye Surprise Plan Kar raha tha jiske Wajah Se Mai Time Nai De Paa Raha Tha <br /><br />
  2) Dusra Blame Mai aapku baar baar bolra tha baat band kr denge : <br />
  Ans : - Mujhe Time Chaiye tha Surprise Plan Karne Because Office Me Sbke Samne Nai kr skta tha <br /><br />
  3) Teesra Blame Maine Aapse Share Nahi Kiya: <br />
  Ans : - Because Its A Surprise If I Reveal Than You Should Not Happy How You Are Right Now <br /><br />
  And Mind One Thing Naa Mai Kabhi Badla Naa Kabhi Badlunga Jaisa Tha Waisa hu And Waisa hi Rahunga <br />
  Mere Life me ek hi bachi thi ek hi bachi hai aur ek hi Rahengi Hamesha Hamesha Ke Liye vo Hai One And Only Tayyaba Fatema <br /><br />
  Bas ek baat kehna chahta hoon… <br />
  Jo bhi kiya, jitni bhi mehnat ki… sab sirf aapke liye kiya hai. ❤️ <br />
  I Hope You Like It Very Well Meri Almost 3/4 Month Ki Mehnat hai Isme And I Hope <br />
  You Likes It Very Well <br /><br /><br />

  Itna Bolte Huye Mai Apni Baate Aur Mera Surprise Dono Yaha End Krta hu Mera Bachaa Mera Shona <br />
  I Love You More More More And More Than Anything In This World ❤️❤️❤️
</p>
      <button
        style={styles.closeBtn}
        onClick={() => setShowFinalPopup(false)}
      >
        Close 💖
      </button>


    </div>
  </div>
)}

{hasOpenedOnce && !showFinalPopup && (
  <button
    style={styles.reopenBtn}
    onClick={() => setShowFinalPopup(true)}
  >
    Read Again 💌
  </button>
)}
    </div>
  );
}

const styles = {
  
  reopenBtn: {
  position: "fixed",
  bottom: "30px",
  left: "50%",
  transform: "translateX(-50%)",
  padding: "12px 25px",
  background: "linear-gradient(135deg, #ec4899, #f472b6)",
  color: "white",
  border: "none",
  borderRadius: "25px",
  fontSize: "16px",
  cursor: "pointer",
  boxShadow: "0 5px 20px rgba(0,0,0,0.3)",
  animation: "pulse 2s infinite",
  zIndex: 5,
},
  finalOverlay: {
  position: "fixed",
  inset: 0,
  background: "rgba(0,0,0,0.75)",
  backdropFilter: "blur(8px)", // 🔥 background blur
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 50,
},

finalPopup: {
  background: "linear-gradient(135deg, #fff1f2, #ffe4e6)",
  padding: "50px 40px",
  borderRadius: "25px",
  width: "600px",
  maxWidth: "90%",
  textAlign: "center",
  boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
  animation: "popupEnter 1s ease",
  position: "relative",
},

finalTitle: {
  fontSize: "28px",
  color: "#ec4899",
  marginBottom: "20px",
  fontWeight: "bold",
  textShadow: "0 0 10px rgba(236,72,153,0.5)",
},

finalMessage: {
  fontSize: "18px",
  color: "#444",
  lineHeight: "1.9",
  textAlign: "left",
  fontFamily: "'Segoe UI', cursive",
  padding: "10px 20px",
  maxHeight: "300px",
  overflowY: "auto",
},
closeBtn: {
  marginTop: "25px",
  padding: "12px 25px",
  background: "linear-gradient(135deg, #ec4899, #f472b6)",
  color: "white",
  border: "none",
  borderRadius: "25px",
  cursor: "pointer",
  fontSize: "16px",
  transition: "all 0.3s ease",
  boxShadow: "0 5px 15px rgba(236,72,153,0.4)",
},
  container: {
    height: "100vh",
    width: "100vw",
    background: "black",
    overflow: "hidden",
    position: "relative",
  },

  hearts: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },

  heart: {
    position: "absolute",
    top: "-10px",
    fontSize: "20px",
    animation: "fall 5s linear infinite",
  },

centerHeart: {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%) scale(1)",
  fontSize: "60px", // slightly bigger start
  transition: "all 2.5s cubic-bezier(0.22, 1, 0.36, 1)", // cinematic growth
  zIndex: 2,
},
blast: {
  position: "absolute",
  top: "50%",
  left: "50%",
  width: "20px",
  height: "20px",
  borderRadius: "50%",
  background: "#ff4d88",
  transform: "translate(-50%, -50%) scale(1)",
  animation: "blastAnim 0.8s ease-out forwards",
  zIndex: 1,
},  

 text: {
  position: "absolute",
  top: "40%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  color: "#ff4d88",
  fontSize: "40px",
  textShadow: "0 0 40px #ff4d88",
  animation: "textPop 1.5s ease forwards",
  opacity: 0,
  zIndex: 3,
},
};