import React, { useState } from "react";
import "./header.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link, useNavigate } from "react-router-dom";

export default function Header({
  cart,
  clearCart,
  searchQuery,
  setSearchQuery,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
}) {
  const [sideMenuOpen, setSideMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const navigate = useNavigate();

  const toggleSideMenu = () => setSideMenuOpen(!sideMenuOpen);
  const toggleCart = () => setCartOpen(!cartOpen);

  return (
    <>
      <header>
        <div className="navbar">
          <div className="nav-logo border">
            <a href="/"></a>
          </div>

          <div className="nav-add border">
            <p className="add1">Deliver to</p>
            <div className="add-icon">
              <i className="fa-solid fa-location-dot"></i>
              <p className="add2">India</p>
            </div>
          </div>

          {/* SEARCH BAR */}
          <div className="nav-search">
            <select className="search-select">
              <option>All</option>
            </select>
            <input
              placeholder="Search Amazon"
              className="search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyUp={(e) => {
                if (e.key === "Enter") window.location.href = "/products";
              }}
            />
            <div className="search-icon">
              <i className="fa-solid fa-magnifying-glass"></i>
            </div>
          </div>

          <div className="nav-signin border">
            <p>
              <span className="common">Hello, sign in</span>
            </p>
            <p className="add2">Account & Lists</p>
          </div>

          <div className="nav-orders border">
            <p>
              <span className="common">Returns</span>
            </p>
            <p className="add2">& Orders</p>
          </div>

          {/* CART */}
          <div
            className="cart"
            style={{ cursor: "pointer" }}
            onClick={toggleCart}
          >
            <i className="fa fa-shopping-cart" style={{ fontSize: 22 }}></i>
            <span className="cart-badge">
              {cart.reduce((acc, item) => acc + item.quantity, 0)}
            </span>
          </div>
        </div>

        {/* PANEL */}
        <div className="panel">
          <div className="panel-all border">
            <button className="hamburger" onClick={toggleSideMenu}>
              ☰ All
            </button>
          </div>

          <div className="panel-ops">
            <p>
              <Link to="/products">Today's Deals</Link>
            </p>
            <p>
              <a
                href="https://www.amazon.com/Amazon-Video/b/?ie=UTF8&node=2858778011&ref_=nav_cs_prime_video"
                target="_blank"
                rel="noreferrer"
              >
                Prime Video
              </a>
            </p>
            <p>
              <Link to="/products">Registry</Link>
            </p>
            <p>
              <Link to="/products">Gift Card</Link>
            </p>
            <p>
              <Link to="/#">Customer Service</Link>
            </p>
            <p>
              <Link to="/addproducts">Add Products</Link>
            </p>
          </div>

          <div className="panel-deals border">
            <abbr title="Shop now">
              <Link to="/products">Shop deals in Electronics</Link>
            </abbr>
          </div>
        </div>
      </header>

      {/* SIDE MENU */}
      {/* SIDE MENU */}
      <div className={`side-menu ${sideMenuOpen ? "open" : ""}`}>
        <div className="menu-header">
          <h3>
            <i className="fa-solid fa-user"></i> Hello, Sign in
          </h3>
        </div>

        <div className="menu-section">
          <h4>Digital Content & Devices</h4>
          <a
            href="https://www.amazon.com/Amazon-Video/b/?ie=UTF8&node=2858778011&ref_=nav_cs_prime_video"
            target="_blank"
            rel="noreferrer"
            onClick={() => setSideMenuOpen(false)}
          >
            Prime Video
          </a>
          <a
            href="https://music.amazon.in/"
            target="_blank"
            rel="noreferrer"
            onClick={() => setSideMenuOpen(false)}
          >
            Amazon Music
          </a>
          <a
            href="https://www.amazon.com/gp/browse.html?node=6669702011"
            target="_blank"
            rel="noreferrer"
            onClick={() => setSideMenuOpen(false)}
          >
            Kindle E-readers & Books
          </a>
          <a
            href="https://www.amazon.com/mobile-apps/b/"
            target="_blank"
            rel="noreferrer"
            onClick={() => setSideMenuOpen(false)}
          >
            Amazon Appstore
          </a>
        </div>

        <div className="menu-section">
          <h4>Shop by Department</h4>
          <Link to="/products" onClick={() => setSideMenuOpen(false)}>
            Electronics
          </Link>
          <Link to="/products" onClick={() => setSideMenuOpen(false)}>
            Fashion
          </Link>
          <Link to="/products" onClick={() => setSideMenuOpen(false)}>
            Home Decore
          </Link>
        </div>

        <div className="menu-section">
          <h4>Help & Settings</h4>
          <a>Your Account</a>
          <a>Customer Service</a>
          <a>English</a>
          <a>United States</a>
          <a>Sign in</a>
        </div>
      </div>

      {/* Overlay */}
      {sideMenuOpen && (
        <div
          className="overlay show"
          onClick={() => setSideMenuOpen(false)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0,0,0,0.4)",
            zIndex: 1000,
          }}
        />
      )}

      {/* CART DRAWER */}
      <aside className={`cart-drawer ${cartOpen ? "open" : ""}`} role="dialog">
        <div className="cart-header">
          <strong>Your Cart</strong>
          <button
            onClick={toggleCart}
            style={{ border: 0, cursor: "pointer", fontSize: 16 }}
          >
            <i className="fa fa-times"></i>
          </button>
        </div>

        <div className="cart-items">
          {cart.length === 0
            ? "No items added yet."
            : cart.map((item) => (
                <div key={item.id} className="cart-item">
                  <img
                    src={item.image ? item.image : `/media/${item.img}`}
                    alt={item.title}
                    className="cart-img"
                  />

                  <div>
                    <h4>{item.title}</h4>
                    <p>${item.price}</p>
                    <div className="quantity-controls">
                      <button onClick={() => decreaseQuantity(item.id)}>
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button onClick={() => increaseQuantity(item.id)}>
                        +
                      </button>
                      <button onClick={() => removeFromCart(item.id)}>
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
        </div>

        <div className="cart-footer">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: 8,
            }}
          >
            <div style={{ fontWeight: 700 }}>Subtotal</div>
            <div style={{ fontWeight: 700 }}>
              $
              {cart
                .reduce((acc, item) => acc + item.price * item.quantity, 0)
                .toFixed(2)}
            </div>
          </div>

          <div style={{ display: "flex", gap: 8 }}>
            <button className="checkout" onClick={() => navigate("/checkout")}>
              Proceed to checkout
            </button>
            <button className="clear" onClick={clearCart}>
              Clear
            </button>
          </div>
        </div>
      </aside>

      {cartOpen && <div className="overlay" onClick={toggleCart}></div>}
    </>
  );
}
