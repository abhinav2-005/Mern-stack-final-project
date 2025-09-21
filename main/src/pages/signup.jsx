import { useState } from "react";
import axios from "axios";
import "./auth.css";  

export default function Signup() {
const [formData, setFormData] = useState({ username: "", email: "", password: "" });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
await axios.post("http://localhost:5000/api/auth/register", formData);      
alert("User registered successfully!");
    } catch (err) {
      alert(err.response?.data?.msg || "Error registering");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
<input type="text" name="username" placeholder="Username" onChange={handleChange} required />          <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
          <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
          <button type="submit">Sign Up</button>
        </form>
        <p>Already have an account? <a href="/login">Login</a></p>
      </div>
    </div>
  );
}
