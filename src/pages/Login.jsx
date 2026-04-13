import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../services/authService";
import "./Login.css";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  // 🔥 refs for focus control
  const passwordRef = useRef(null);
  const buttonRef = useRef(null);

  const handleLogin = (e) => {
    e.preventDefault();

    const success = loginUser(username, password);

    if (success) {
      navigate("/surprise");
    } else {
      setError("Only special people allowed 💔");
    }
  };
return (
  <div className="login-container">
    
    {/* floating hearts background */}
    <div className="hearts-bg">
      {[...Array(20)].map((_, i) => (
        <span key={i}>💖</span>
      ))}
    </div>

    <form className="login-card" onSubmit={handleLogin}>
      
      <h1 className="title">💖 Welcome 💖</h1>

      <input
        type="text"
        placeholder="Username ❤️"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault();
            passwordRef.current.focus();
          }
        }}
      />

      <input
        ref={passwordRef}
        type="password"
        placeholder="Password 🔒"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault();
            buttonRef.current.focus();
          }
        }}
      />

      <button ref={buttonRef} type="submit">
        Unlock Now And Feel 💕
      </button>

      <p className="error">{error}</p>

    </form>
  </div>
);}