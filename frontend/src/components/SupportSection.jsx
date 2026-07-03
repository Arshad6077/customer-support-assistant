import "../styles/SupportSection.css";
import { Link } from "react-router-dom";

function SupportSection() {
  return (
    <section className="support-section">

      <h2>Need Customer Support?</h2>

      <p>
        Have an issue with your order, payment,
        delivery, or account?
      </p>

      <p>
        Our AI-powered customer support system
        helps you submit complaints and track
        them in real time.
      </p>

      <div className="support-buttons">

        <Link to="/complaint">
          <button>Raise a Complaint</button>
        </Link>

        <Link to="/track-ticket">
          <button>Track Your Ticket</button>
        </Link>

      </div>

    </section>
  );
}

export default SupportSection;