import React, { useState } from "react";

export default function AddProduct({ products, setProducts }) {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [img, setImg] = useState("");
  const [loading, setLoading] = useState(false);

  const addProduct = async () => {
    if (!title || !price || !img) return alert("Fill all fields!");
    setLoading(true);

    try {
      const res = await fetch("https://fakestoreapi.com/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title,
          price: parseFloat(price),
          image: img,
        }),
      });
      const saved = await res.json();
      setProducts([saved, ...products]); // update state so Products page sees it
      setTitle("");
      setPrice("");
      setImg("");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: "20px", background: "#f3f3f3", marginBottom: "20px" }}>
      <h2>Add Product</h2>
      <input
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      /><br /><br />
      <input
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      /><br /><br />
      <input
        placeholder="Image URL"
        value={img}
        onChange={(e) => setImg(e.target.value)}
      /><br /><br />
      <button onClick={addProduct} disabled={loading}>
        {loading ? "Adding..." : "Add Product"}
      </button>
    </div>
  );
}