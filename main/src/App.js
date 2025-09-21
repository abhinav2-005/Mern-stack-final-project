import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Signup from "./pages/signup";
import Login from "./pages/login";
import './App.css';

function App() {
  return (
    <Router>
      <nav style={{ margin: "10px" }}>
        <label>Welcome to TaskHive</label>
        <Link to="/signup" className="signup" style={{ marginRight: "10px" }}>Signup</Link>
        <Link to="/login" className="login">Login</Link>
      </nav>

      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
