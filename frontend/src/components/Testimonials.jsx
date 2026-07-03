import "../styles/Testimonials.css";

function Testimonials() {
  return (
    <section className="testimonials">

      <h2>What Our Customers Say</h2>

      <div className="testimonial-grid">

        <div className="testimonial-card">
          <h3>★★★★★</h3>
          <p>
            "The AI support resolved my payment issue within minutes.
            The ticket tracking feature kept me updated throughout."
          </p>
          <h4>- Rahul Sharma</h4>
        </div>

        <div className="testimonial-card">
          <h3>★★★★★</h3>
          <p>
            "Submitting a complaint was very simple, and I received
            email updates instantly."
          </p>
          <h4>- Priya Nair</h4>
        </div>

        <div className="testimonial-card">
          <h3>★★★★★</h3>
          <p>
            "SkyKart's customer support is fast, professional, and
            extremely easy to use."
          </p>
          <h4>- Ahmed Khan</h4>
        </div>

      </div>

    </section>
  );
}

export default Testimonials;