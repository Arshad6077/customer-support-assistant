import "../styles/Hero.css";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="hero">
      <h1>SkyKart</h1>

      <h2>A marketplace with limitless possibilities</h2>

      <p>
        Experience seamless shopping with AI-powered customer support,
        instant complaint management, and real-time ticket tracking.
      </p>

      <div className="hero-buttons">
        <button>Shop Now</button>

        <Link to="/complaint">
          <button>Get Support</button>
        </Link>
      </div>
    </section>
  );
}

export default Hero;