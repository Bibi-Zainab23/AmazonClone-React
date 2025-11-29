import React, { useState } from "react";
import AddProduct from "./AddProducts";
import Spinner from "./Spinner";
import "./AddProductsPage.css";

export default function AddProductsPage({ products, setProducts }) {
  const [loading, setLoading] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [editTitle, setEditTitle] = useState("");
  const [editPrice, setEditPrice] = useState("");

  //  Update product
  const updateProduct = async (id) => {
    setLoading(true);
    try {
      const res = await fetch(`https://fakestoreapi.com/products/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: editTitle,
          price: parseFloat(editPrice),
        }),
      });
      const updated = await res.json();
      setProducts(products.map((p) => (p.id === id ? updated : p)));
      setEditingId(null);
      setEditTitle("");
      setEditPrice("");
    } finally {
      setLoading(false);
    }
  };

  //  Delete product
  const deleteProduct = async (id) => {
    setLoading(true);
    try {
      await fetch(`https://fakestoreapi.com/products/${id}`, {
        method: "DELETE",
      });
      setProducts(products.filter((p) => p.id !== id));
    } finally {
      setLoading(false);
    }
  };

  //  Start editing
  const startEditing = (product) => {
    setEditingId(product.id);
    setEditTitle(product.title);
    setEditPrice(product.price.toString());
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Add New Product</h2>
      <AddProduct products={products} setProducts={setProducts} />

      <h2 style={{ marginTop: "40px" }}>Existing Products</h2>
      {loading ? (
        <Spinner />
      ) : (
        <table className="products-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Price</th>
              <th>Image</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((p) => (
              <tr key={p.id}>
                <td data-label="ID">{p.id}</td>
                <td data-label="Title">
                  {editingId === p.id ? (
                    <input
                      value={editTitle}
                      onChange={(e) => setEditTitle(e.target.value)}
                    />
                  ) : (
                    p.title
                  )}
                </td>
                <td data-label="Price">
                  {editingId === p.id ? (
                    <input
                      type="number"
                      value={editPrice}
                      onChange={(e) => setEditPrice(e.target.value)}
                    />
                  ) : (
                    `$${p.price}`
                  )}
                </td>
                <td data-label="Image">
                  <img
                    src={p.image ? p.image : `/media/${p.img}`}
                    alt={p.title}
                    width="50"
                    height="50"
                  />
                </td>
                <td data-label="Actions">
                  {editingId === p.id ? (
                    <>
                      <button onClick={() => updateProduct(p.id)}>Save</button>
                      <button
                        onClick={() => setEditingId(null)}
                        style={{ marginLeft: "8px" }}
                      >
                        Cancel
                      </button>
                    </>
                  ) : (
                    <>
                      <button onClick={() => startEditing(p)}>Update</button>
                      <button
                        onClick={() => deleteProduct(p.id)}
                        style={{ marginLeft: "8px" }}
                      >
                        Delete
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
