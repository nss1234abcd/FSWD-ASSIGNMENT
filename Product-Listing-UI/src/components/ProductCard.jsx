function ProductCard({ product, addToCart }) {
  return (
    <div className="card">
      <img src={product.image} alt={product.name} />

      <h3>{product.name}</h3>
      <p className="price">₹{product.price}</p>
      <p className="category">{product.category}</p>

      <button onClick={() => addToCart(product)}>
        Add to Cart 🛒
      </button>
    </div>
  );
}

export default ProductCard;