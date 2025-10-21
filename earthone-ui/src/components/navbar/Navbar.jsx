import { useState, useEffect } from "react";
import "./navbar.css";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toggleCartMenu } from "../../features/cartSlice";

const Navbar = () => {
  const [burgerClass, setBurgerClass] = useState("burger-bar unclicked");
  const [menuClass, setMenuClass] = useState("menu hidden");
  const [isMenuClicked, setIsMenuClicked] = useState(false);
  const dispatch = useDispatch();
  const { items, isCartMenuOpen, cartDetails } = useSelector(
    (state) => state.cart
  );

  const handleCartClick = () => {
    dispatch(toggleCartMenu());
  };

  const updateMenu = () => {
    if (!isMenuClicked) {
      setBurgerClass("burger-bar clicked");
      setMenuClass("menu visible");
    } else {
      setBurgerClass("burger-bar unclicked");
      setMenuClass("menu hidden");
    }
    setIsMenuClicked(!isMenuClicked);
  };

  const menuClosed = () => {
    setBurgerClass("burger-bar unclicked");
    setMenuClass("menu hidden");
    setIsMenuClicked(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector("nav");
      if (window.scrollY > 100) {
        navbar.style.backdropFilter = "blur(10px)";
        navbar.style.background = "#2c2c2c40";
      } else {
        navbar.style.backdropFilter = "none";
        navbar.style.backgroundColor = "transparent";
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div style={{ width: "100%" }}>
      <nav>
        <div className="burger-menu">
          {/* Burger menu toggle */}
          <div onClick={updateMenu}>
            <div className={burgerClass}></div>
            <div className={burgerClass} style={{ marginTop: "0.2em" }}></div>
            <div className={burgerClass} style={{ marginTop: "0.2em" }}></div>
          </div>

          {/* Logo */}
          <img
            className="logo"
            src="./images/white-full-logo.webp"
            alt="Logo"
          />

          {/* Icons */}
          <div className="icons">
            {/* Cart Icon */}
            <div
              onClick={handleCartClick}
              style={{ position: "relative", cursor: "pointer" }}
            >
              <i className="fa-solid fa-cart-shopping"></i>
              {items > 0 && (
                <span
                  style={{
                    position: "absolute",
                    top: "-8px",
                    right: "-10px",
                    backgroundColor: "red",
                    borderRadius: "50%",
                    color: "white",
                    padding: "3px 8px",
                    fontSize: "10px",
                  }}
                >
                  {items}
                </span>
              )}
            </div>
            <i className="fa-solid fa-user"></i>
          </div>
        </div>
      </nav>

      {/* Burger Menu */}
      <div className={menuClass}>
        <div className="close">
          <span style={{ fontSize: "1.5em" }} onClick={menuClosed}>
            <i className="fa-solid fa-xmark"></i>
          </span>
          <h2 style={{ margin: "0 auto" }}>Navigation</h2>
        </div>
        <ul>
          <NavLink
            to="/"
            style={{ textDecoration: "none", width: "100%" }}
            onClick={menuClosed}
          >
            <li>Home</li>
          </NavLink>
          <NavLink
            to="/shop"
            style={{ textDecoration: "none", width: "100%" }}
            onClick={menuClosed}
          >
            <li>Shop</li>
          </NavLink>
          <NavLink
            to="/membership"
            style={{ textDecoration: "none", width: "100%" }}
            onClick={menuClosed}
          >
            <li>Membership</li>
          </NavLink>
          <NavLink
            to="/pay-later"
            style={{ textDecoration: "none", width: "100%" }}
            onClick={menuClosed}
          >
            <li>Pay Later</li>
          </NavLink>
          <NavLink
            to="/blog"
            style={{ textDecoration: "none", width: "100%" }}
            onClick={menuClosed}
          >
            <li>Blog</li>
          </NavLink>
          <NavLink
            to="/plants"
            style={{ textDecoration: "none", width: "100%" }}
            onClick={menuClosed}
          >
            <li>Plants</li>
          </NavLink>
          <a
            href="#footer-section"
            onClick={menuClosed}
            style={{ textDecoration: "none", width: "100%" }}
          >
            <li>Contact Us</li>
          </a>
          <a
            href="#faq-section"
            onClick={menuClosed}
            style={{ textDecoration: "none", width: "100%" }}
          >
            <li>Help Center</li>
          </a>
        </ul>
      </div>

      {/* Cart Menu */}
      {isCartMenuOpen && (
        <div className="cart-menu">
          <div className="cart-header">
            <span className="close-cart" onClick={handleCartClick}>
              &times;
            </span>
            <h2>Your Cart ({items})</h2>
          </div>
          <div className="cart-body">
            <div className="bar">
              <p>
                Save ₹886.04 instantly! Get it for just ₹2,067.42 when you
                become a member
              </p>
              <button className="btn-1">Join Now</button>
            </div>

            {cartDetails.map((item, index) => (
              <div key={index} className="cart-item">
                <img src={item.image} alt={item.name} />
                <div className="cart-item-details">
                  <h4>{item.name}</h4>
                  <p>{item.description}</p>
                  <div className="cart-item-pricing">
                    <span className="current-price">
                      ₹{item.price.toFixed(2)}
                    </span>
                    <span className="original-price">
                      ₹{item.originalPrice.toFixed(2)}
                    </span>
                  </div>
                </div>
                <div className="cart-item-quantity">
                  <span>-</span>
                  <span>{item.quantity}</span>
                  <span>+</span>
                </div>
              </div>
            ))}
          </div>
          <div className="cart-footer">
            <div className="cart-summary">
              <div className="total">
                <span>Total </span>
                <span>
                  ₹
                  {cartDetails
                    .reduce(
                      (total, item) => total + item.price * item.quantity,
                      0
                    )
                    .toFixed(2)}
                </span>
              </div>
              <div className="savings">
                <span>Savings </span>
                <span>₹425.29</span>
              </div>
            </div>
            <button className="checkout-button">Checkout</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
