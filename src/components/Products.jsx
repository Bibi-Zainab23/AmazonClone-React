import React from "react";
import "./products.css";

export default function Products({ products, addToCart }) {
  return (
    <div className="layout">
      <section>
        <div className="grid">
          {products.map((p) => (
            <div key={p.id} className="card">
              <img
                src={p.image ? p.image : `/media/${p.img}`}
                alt={p.title}
                className="product-img"
              />
              <h4>{p.title}</h4>
              <p>${p.price}</p>
              <button className="add-btn" onClick={() => addToCart(p)}>
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
