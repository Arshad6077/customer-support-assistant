import "../styles/Services.css";

function Services() {
  return (
    <section className="services">

      <h2>Why Shop with SkyKart?</h2>

      <div className="service-grid">

        <div className="service-card">
          <h3>🚚 Fast Delivery</h3>
          <p>Quick and reliable delivery across the country.</p>
        </div>

        <div className="service-card">
          <h3>🔒 Secure Payments</h3>
          <p>Safe and trusted payment methods for every purchase.</p>
        </div>

        <div className="service-card">
          <h3>↩ Easy Returns</h3>
          <p>Simple return process with customer-friendly policies.</p>
        </div>

        <div className="service-card">
          <h3>🤖 AI Customer Support</h3>
          <p>Get instant support powered by AI and real-time ticket tracking.</p>
        </div>

      </div>

    </section>
  );
}

export default Services;