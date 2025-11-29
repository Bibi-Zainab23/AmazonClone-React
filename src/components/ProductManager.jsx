import React from "react";
import Products from "./Products";

export default function ProductManager({ cart, setCart, searchQuery, products }) {
 const addToCart = (product) => {
  const existing = cart.find((item) => item.id === product.id);
  if (existing) {
    setCart(
      cart.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  } else {
    setCart([
      ...cart,
      {
        ...product,
        quantity: 1,
        
        img: product.img
      }
    ]);
  }
};

  const filtered = products.filter((p) =>
    p.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return <Products products={filtered} addToCart={addToCart} />;
}