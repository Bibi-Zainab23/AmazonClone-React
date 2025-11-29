import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Shop from "./components/Shop";
import ProductManager from "./components/ProductManager";
import Checkout from "./components/Checkout";
import AddProductsPage from "./components/AddProductsPage";
import Spinner from "./components/Spinner";

function App() {
  const [cart, setCart] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  // ✅ Fetch products from Fake Store API on load
  useEffect(() => {
    setLoading(true);
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const clearCart = () => setCart([]);

  const increaseQuantity = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  return (
    <>
      <Header
        cart={cart}
        clearCart={clearCart}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        increaseQuantity={increaseQuantity}
        decreaseQuantity={decreaseQuantity}
        removeFromCart={removeFromCart}
      />

      {loading ? (
        <Spinner /> 
      ) : (
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Shop />
              </>
            }
          />
          <Route
            path="/products"
            element={
              <ProductManager
                cart={cart}
                setCart={setCart}
                searchQuery={searchQuery}
                products={products}
              />
            }
          />
          <Route path="/checkout" element={<Checkout />} />
          <Route
            path="/addproducts"
            element={
              <AddProductsPage products={products} setProducts={setProducts} />
            }
          />
        </Routes>
      )}
    </>
  );
}

export default App;