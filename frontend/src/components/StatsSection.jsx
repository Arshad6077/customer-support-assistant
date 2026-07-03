import "../styles/StatsSection.css";

function StatsSection() {
  return (
    <section className="stats-section">

      <h2>Trusted by Millions</h2>

      <div className="stats-grid">

        <div className="stat-card">
          <h3>1M+</h3>
          <p>Happy Customers</p>
        </div>

        <div className="stat-card">
          <h3>50K+</h3>
          <p>Orders Every Day</p>
        </div>

        <div className="stat-card">
          <h3>99.9%</h3>
          <p>Customer Satisfaction</p>
        </div>

        <div className="stat-card">
          <h3>24/7</h3>
          <p>Customer Support</p>
        </div>

      </div>

    </section>
  );
}

export default StatsSection;