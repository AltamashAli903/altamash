import { useNavigate } from "react-router-dom";
import { logoutUser } from "../services/authService";
import "./Surprise.css";
import loveBg from "../assets/pexels-freestockpro-12955700.jpg";

export default function Surprise() {
  const navigate = useNavigate();

  const handleLogout = () => {
    logoutUser();
    localStorage.removeItem("loveName");
    localStorage.removeItem("loveImages");
    navigate("/");
  };

  return (
    <div
      className="surprise-container"
      style={{ backgroundImage: `url(${loveBg})` }}
    >
      {/* 🔥 Logout */}
      <button className="logout-btn" onClick={handleLogout}>
        LOG OUT
      </button>

      {/* 💖 Content */}
      <div className="overlay">
        <div className="content">
          <h1>
            Wish You Happy <br /> 💖 Anniversary 💖 <br />
            <span className="name">Tayyaba Fatema</span>
          </h1>

          <p className="subtitle">
            My Love, My Everything, My Hayatii 💕
          </p>

          <p className="subtitle">
            From the day we met , My life became more beautiful...<br />
            Every moment with you is a memory I cherish forever.<br />
            you are not just my love 
            you are my everything ❤️<br />
            I LOVE YOU MERA BACHHAAAA   
          </p>
          <div className="hearts">
  {[...Array(15)].map((_, i) => (
    <span key={i}>💖</span>
  ))}
</div>

          <button
            className="next-btn"
            onClick={() => navigate("/surprise-hub")}
          >
            Next Surprise 💖
          </button>
        </div>
      </div>
    </div>
  );
}