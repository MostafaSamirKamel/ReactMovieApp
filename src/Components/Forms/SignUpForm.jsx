import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "./SignUpForm.css";

export default function SignUpForm() {

  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [phone, setPhone] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    if (password !== rePassword) {
      toast.error("Passwords do not match");
      return;
    }

    const inputValues = {
      name,
      email,
      password,
      rePassword,
      phone,
    };

    try {
      const response = await fetch(
        `https://ecommerce.routemisr.com/api/v1/auth/signup`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(inputValues),
        }
      );

      const data = await response.json();
      console.log("API Response:", data);

      if (data.message === "success") {
        toast.success("User created successfully");
        setTimeout(() => {
          navigate("/login");
        }, 2000);
      } else {
        toast.error(data.message || "Registration failed");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Something went wrong. Please try again.");
    }
  }

  return (
    <section className="signup-section">
      <div className="signup-card">
        {/* Header */}
        <div className="signup-header">
          <i className="bi bi-person-plus-fill signup-icon"></i>
          <h2 className="signup-title">Create Account</h2>
          <p className="signup-subtitle">
            Join MovieApp for unlimited entertainment
          </p>
        </div>

        {/* Form */}
        <form noValidate onSubmit={handleSubmit}>
          {/* Name Field */}
          <div className="form-group">
            <label className="form-label">
              <i className="bi bi-person"></i>
              Full Name
            </label>
            <div className="input-wrapper">
              <input
                type="text"
                name="name"
                className="form-input"
                placeholder="Enter your full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <i className="bi bi-person-fill input-icon"></i>
            </div>
          </div>

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

          {/* Phone Field */}
          <div className="form-group">
            <label className="form-label">
              <i className="bi bi-phone"></i>
              Phone Number
            </label>
            <div className="input-wrapper">
              <input
                type="tel"
                name="phone"
                className="form-input"
                placeholder="01xxxxxxxxx"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <i className="bi bi-phone-fill input-icon"></i>
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
                placeholder="Create a strong password"
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

          {/* Confirm Password Field */}
          <div className="form-group">
            <label className="form-label">
              <i className="bi bi-shield-lock"></i>
              Confirm Password
            </label>
            <div className="input-wrapper">
              <input
                type="password"
                name="repassword"
                className="form-input"
                placeholder="Confirm your password"
                value={rePassword}
                onChange={(e) => setRePassword(e.target.value)}
              />
              <i className="bi bi-shield-lock-fill input-icon"></i>
              <button
                type="button"
                className="password-toggle"
                aria-label="Toggle password visibility"
              >
                <i className="bi bi-eye"></i>
              </button>
            </div>
          </div>

          {/* Submit Button */}
          <button type="submit" className="signup-btn">
            <i className="bi bi-person-plus-fill"></i>
            Create Account
          </button>
        </form>

        {/* Divider */}
        <div className="divider">
          <span>or continue with</span>
        </div>

        {/* Social Login */}
        <div className="social-btns">
          <a href="#" className="social-btn google">
            <i className="bi bi-google"></i>
            Google
          </a>
          <a href="#" className="social-btn facebook">
            <i className="bi bi-facebook"></i>
            Facebook
          </a>
        </div>

        {/* Login Link */}
        <p className="login-link">
          Already have an account? <Link to="/login">Log In</Link>
        </p>
      </div>
    </section>
  );
}
