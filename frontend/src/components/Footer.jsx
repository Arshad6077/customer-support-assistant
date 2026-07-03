import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-column">
          <h2>SkyKart</h2>

          <p>
            A marketplace with limitless possibilities.
          </p>
        </div>

        <div className="footer-column">
          <h3>Quick Links</h3>

          <p>Home</p>
          <p>Shop</p>
          <p>Categories</p>
          <p>Support</p>
        </div>

        <div className="footer-column">
          <h3>Customer Support</h3>

          <p>Email: support@skykart.com</p>
          <p>Phone: +91 98765 43210</p>
          <p>Available: 24/7</p>
        </div>

      </div>

      <hr />

      <p className="copyright">
        © 2026 SkyKart. All Rights Reserved.
      </p>

    </footer>
  );
}

export default Footer;