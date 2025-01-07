import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button/Button";
import Footer from "../components/Footer/Footer";
import "./LoginPage.css";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Mock user data
  const mockUser = {
    username: "testuser",
    password: "password123",
  };

  // Handle login
  const handleLogin = (e) => {
    e.preventDefault();
    if (username === mockUser.username && password === mockUser.password) {
      console.log("Login successful!");
      setError("");
      navigate("/app/HomePage"); // Navigate to the home page after login
    } else {
      setError("Invalid username or password!");
    }
  };

  return (
    <div className="login-container">
      {/* <Header /> */}
      <main>
        <h1>Welcome to HR App</h1>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <p className="error-message">{error}</p>}
          <button type="submit" className="button-primary">
            Login
          </button>
        </form>
      </main>
      {/* <Footer /> */}
    </div>
  );
}

export default LoginPage;
