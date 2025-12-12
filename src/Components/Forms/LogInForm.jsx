import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { UserContext } from "../../Context/UserContext";
import "./LogInForm.css";

export default function LogInForm() {
  const navigate = useNavigate();
  const { login } = useContext(UserContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    const inputValues = {
      email,
      password,
    };

    try {
      const response = await fetch(
        `https://ecommerce.routemisr.com/api/v1/auth/signin`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(inputValues),
        }
      );

      const data = await response.json();

      if (data.message === "success") {
        // Save user data to context
        login(data.token, data.user);
        toast.success("User logged in successfully");
        setTimeout(() => {
          navigate("/");
        }, 2000);
      } else {
        toast.error(data.message || "Login failed");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Something went wrong. Please try again.");
    }
  }

  return (
    <section className="login-section">
      <div className="login-card">
        {/* Header */}
        <div className="login-header">
          <i className="bi bi-box-arrow-in-right login-icon"></i>
          <h2 className="login-title">Welcome Back</h2>
          <p className="login-subtitle">Sign in to continue to MovieApp</p>
        </div>

        {/* Form */}
        <form className="login-form" noValidate onSubmit={handleSubmit}>
          {/* Email Field */}
          <div className="form-group">
            <label className="form-label">
              <i className="bi bi-envelope"></i>
              Email Address
            </label>
            <div className="input-wrapper">
              <input
                type="email"
                name="email"
                className="form-input"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <i className="bi bi-envelope-fill input-icon"></i>
            </div>
          </div>

          {/* Password Field */}
          <div className="form-group">
            <label className="form-label">
              <i className="bi bi-lock"></i>
              Password
            </label>
            <div className="input-wrapper">
              <input
                type="password"
                name="password"
                className="form-input"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <i className="bi bi-lock-fill input-icon"></i>
              <button
                type="button"
                className="password-toggle"
                aria-label="Toggle password visibility"
              >
                <i className="bi bi-eye"></i>
              </button>
            </div>
          </div>

          {/* Remember Me & Forgot Password */}
          <div className="login-options">
            <label className="remember-me">
              <input type="checkbox" name="remember" />
              Remember me
            </label>
            <Link to="/forgot-password" className="forgot-password">
              Forgot Password?
            </Link>
          </div>

          {/* Submit Button */}
          <button type="submit" className="login-btn">
            <i className="bi bi-box-arrow-in-right"></i>
            Log In
          </button>
        </form>

        {/* Divider */}
        <div className="login-divider">
          <span>or continue with</span>
        </div>

        {/* Social Login */}
        <div className="login-social-btns">
          <a href="#" className="login-social-btn google">
            <i className="bi bi-google"></i>
            Google
          </a>
          <a href="#" className="login-social-btn facebook">
            <i className="bi bi-facebook"></i>
            Facebook
          </a>
        </div>

        {/* Signup Link */}
        <p className="signup-link">
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </p>
      </div>
    </section>
  );
}
