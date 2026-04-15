import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoveLetter.css";

export default function LoveLetter() {
  const navigate = useNavigate();

  const fullText = `
My Love ❤️,

I don’t know if I’ve ever said this perfectly…
But you changed my life in ways I never imagined.
Every day with you feels like a blessing I never deserved.
You are my peace, my chaos, my happiness, my everything.
No matter where life takes us,
I just want you beside me.
You Are Not Just My Wife, You Are My Best Friend,
My Partner In Everything, My Soulmate.
You Are The Reason I Smile, The Reason I Believe In Love
With You, I’ve Found A Love That’s Deeper Than Words Can Express.
I Can’t Wait To Create More Beautiful Memories With You,
However Long It Takes, I’ll Always Be Here For You.
How much I Wrote is Not Enough To Express My Feelings For You.

Forever yours 💖
Altamashhhhhhhhh`;

  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [opened, setOpened] = useState(false);
  const [showNext, setShowNext] = useState(false);

  /* 💌 Open envelope first */
  useEffect(() => {
    setTimeout(() => {
      setOpened(true);
    }, 1500);
  }, []);

  /* ⌨️ Typing effect */
  useEffect(() => {
    if (opened && index < fullText.length) {
      const timer = setTimeout(() => {
        setText((prev) => prev + fullText[index]);
        setIndex(index + 1);
      }, 60);

      return () => clearTimeout(timer);
    }

    if (index === fullText.length) {
      setTimeout(() => setShowNext(true), 1600);
    }
  }, [index, opened]);

  /* 🎵 Auto music */
  useEffect(() => {
    const audio = new Audio("/music/love.mp3"); // put file in public/music
    audio.volume = 0.3;
    audio.play().catch(() => {});
  }, []);

  return (
    <div className="letter-container">

      <button style={styles.backBtn} onClick={() => navigate(-1)}>
                    ← Back
                </button>

      {/* 💌 Envelope */}
      {!opened && (
        <div className="envelope">
          <div className="flap"></div>
          <div className="body"></div>
        </div>
      )}

      {/* 💖 Letter */}
      {opened && (
        <div className="letter-card">
          <pre>{text}</pre>

          {showNext && (
            <button
              className="next-btn"
              onClick={() => navigate("/memories")}
            >
              Continue ❤️
            </button>
          )}
        </div>
      )}

    </div>
  );
}

const styles = {
  backBtn: {
    position: "absolute",
    top: "15px",
    left: "15px",
    padding: "6px 12px",
    fontSize: "0.85rem",
    background: "#ec4899",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    zIndex: 10
  },
};