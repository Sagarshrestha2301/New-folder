// src/components/Login/Login.js
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { loginUser } from '../../utils/auth';
import "./Login.css";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);
  const navigate = useNavigate();

  const { email, password } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setIsError(false);

    try {
      const response = await axios.post("http://localhost:8080/api/auth/login", formData);
      console.log(response.data);
      const token = response.data.token;
      loginUser(token);  // Use the loginUser function from auth.js
      setMessage("Login successful!");
      setTimeout(() => {
        navigate("/dashboard");
      }, 2000); // Redirect to dashboard after 2 seconds
    } catch (err) {
      console.error(err.response.data);
      setMessage(err.response.data.msg || "Invalid email or password. Please try again.");
      setIsError(true);
    }
  };

  return (
    <>
      <div className="login-page">
        <div className="auth-container">
          <div className="auth-form">
            <h2>Welcome Back!</h2>
            <p>Please login to your account</p>
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={email}
                onChange={onChange}
                required
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={onChange}
                required
              />
              <button type="submit">Login</button>
            </form>
            {message && (
              <div className={`message ${isError ? 'error' : 'success'}`}>
                {message}
              </div>
            )}
            <p>
              Don't have an account? <Link to="/register">Register</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;