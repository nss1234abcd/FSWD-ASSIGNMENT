function Navbar({ cartCount }) {
  return (
    <div className="navbar">
      <h2>🛍️ New Me</h2>
      <div>Cart 🛒 ({cartCount})</div>
    </div>
  );
}

export default Navbar;