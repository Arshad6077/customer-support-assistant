import "../styles/CategorySection.css";

function CategorySection() {
  return (
    <section className="categories">

      <h2>Shop by Category</h2>

      <div className="category-grid">

        <div className="category-card">
          <h3>📱 Electronics</h3>
        </div>

        <div className="category-card">
          <h3>👕 Fashion</h3>
        </div>

        <div className="category-card">
          <h3>🛒 Groceries</h3>
        </div>

        <div className="category-card">
          <h3>🏠 Home & Kitchen</h3>
        </div>

        <div className="category-card">
          <h3>💄 Beauty</h3>
        </div>

        <div className="category-card">
          <h3>⚽ Sports</h3>
        </div>

      </div>

    </section>
  );
}

export default CategorySection;