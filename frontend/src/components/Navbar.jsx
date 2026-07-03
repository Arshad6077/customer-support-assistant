import "../styles/Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <h2>SkyKart</h2>
      </div>

      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><a href="#">Shop</a></li>
        <li><a href="#">Categories</a></li>
        <li><Link to="/complaint">Support</Link></li>
        <li><a href="#">Contact</a></li>
      </ul>

      <button className="login-btn">
        Login
      </button>
    </nav>
  );
}

export default Navbar;