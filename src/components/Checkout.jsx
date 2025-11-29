import React from "react";
import { Link } from "react-router-dom";  // ✅ import Link
import "./Checkout.css";

export default function Checkout() {
  return (
    <div className="checkouts">
      <h2>Order Successful 🎉</h2>
      <p>Thank you for your purchase! Your order has been placed successfully.</p>

      <Link to="/products" className="continue-btn">
        Continue Shopping
      </Link>
    </div>
  );
}