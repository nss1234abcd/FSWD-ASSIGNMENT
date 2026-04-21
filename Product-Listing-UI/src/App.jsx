import { useState } from "react";
import "./App.css";
import productsData from "./data/products";
import Navbar from "./components/Navbar";
import Filters from "./components/Filters";
import ProductCard from "./components/ProductCard";

function App() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const filteredProducts = productsData.filter((p) => {
    return (
      p.name.toLowerCase().includes(search.toLowerCase()) &&
      (category === "All" || p.category === category)
    );
  });

  return (
    <>
      {/* FULL WIDTH NAVBAR */}
      <Navbar cartCount={cart.length} />

      {/* CENTER CONTENT */}
      <div className="app">
        <Filters
          search={search}
          setSearch={setSearch}
          setCategory={setCategory}
        />

        <div className="grid">
          {filteredProducts.map((p) => (
            <ProductCard key={p.id} product={p} addToCart={addToCart} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;