import "../styles/WhyChooseUs.css";

function WhyChooseUs() {
  return (
    <section className="why-choose-us">

      <h2>Why Choose SkyKart?</h2>

      <div className="features-grid">

        <div className="feature-card">
          <h3>🤖 AI Complaint Analysis</h3>
          <p>Automatically categorizes customer complaints using AI.</p>
        </div>

        <div className="feature-card">
          <h3>🎫 Instant Ticket Creation</h3>
          <p>Every complaint receives a unique ticket instantly.</p>
        </div>

        <div className="feature-card">
          <h3>📍 Real-Time Ticket Tracking</h3>
          <p>Customers can track the status of their complaints anytime.</p>
        </div>

        <div className="feature-card">
          <h3>📧 Automatic Email Updates</h3>
          <p>Receive notifications whenever your ticket status changes.</p>
        </div>

        <div className="feature-card">
          <h3>🛡️ Secure Customer Data</h3>
          <p>Your complaint information is stored securely.</p>
        </div>

        <div className="feature-card">
          <h3>⏰ 24/7 Customer Support</h3>
          <p>Our support team is available around the clock to help you.</p>
        </div>

      </div>

    </section>
  );
}

export default WhyChooseUs;