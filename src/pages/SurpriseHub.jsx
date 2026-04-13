import { useNavigate } from "react-router-dom";
import "./SurpriseHub.css";

export default function SurpriseHub() {
  const navigate = useNavigate();

  return (
    <div className="hub-container">

      {/* 💖 LOVE CARD */}
      <div className="love-card">
        <h1 className="title">I Love You....</h1>

        <p className="message">
          You know I am not a magician...<br />
          And I don’t know how to plan perfect surprises…<br />
          You already know how bad I am at choosing gifts <br />
          But I am a web developer…<br />
          So this is my first try to making you feel special 💖 <br />
          Choose any of the options below to see how much I love you!
        </p>

        {/* 🌹 BUTTONS */}
        <div className="buttons">
          <button onClick={() => navigate("/love-letter")}>💌 Love Letter</button>
          <button onClick={() => navigate("/memories")}>📸 Our Memories</button>
          <button onClick={() => navigate("/reasons")}>💖 Why I Love You</button>
          <button onClick={() => navigate("/final")}>🌹 My Confession</button>
        </div>
      </div>

      {/*  HEARTS */}
      <div className="hearts">
        <span>💖</span>
        <span>💕</span>
        <span>❤️</span>
        <span>💗</span>
        <span>💓</span>
      </div>

    </div>
  );
}