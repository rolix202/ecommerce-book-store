import React from "react";
import "../header/Header.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Header = () => {
  return (
    <section>
      <header className="header">
        <div className="header__logo">
          <span className="header__logo-image">
            <img src="./images/logo.png" alt="Logo" />
          </span>
          <span className="header__tagline">
            We love <br /> books</span>
        </div>
        <div className="header__search">
          <input
            type="text"
            className="header__search-input"
            placeholder="Search"
          />
          <button className="header__search-button">
            <i className="fa fa-search header__search-icon"></i>
          </button>
        </div>
        <nav className="header__nav">
          <a href="/" className="header__nav-link">Home</a>
          <a href="/product-page" className="header__nav-link">Product Page</a>
          <a href="#privacy-policy" className="header__nav-link">
            Privacy Policy
          </a>
          <a href="#warranty" className="header__nav-link">
            Warranty
          </a>
          <a href="#shipping" className="header__nav-link">
            Shipping
          </a>
          <a href="#returns" className="header__nav-link">
            Returns
          </a>
        </nav>
        <div className="header__icons">
          <button className="header__icon-button header__icon-button--cart">
            <i className="fa fa-shopping-cart"></i>
          </button>
          <button className="header__icon-button header__icon-button--login">
            <i className="fa fa-user"></i>
          </button>
        </div>
      </header>

      <div className="secondary-header">
        <nav className="secondary-header__nav">
          <a href="#must-read" className="secondary-header__link">The must read</a>
          <a href="#news" className="secondary-header__link">News</a>
          <a href="#promotion" className="secondary-header__link">Promotion of the month</a>
          <a href="#publish" className="secondary-header__link">Publish</a>
          <a href="#newsletter" className="secondary-header__link">Subscribe to the newsletter</a>
        </nav>
        <div className="secondary-header__right">
          <span className="secondary-header__contact">
            <i className="fa fa-phone"></i> +234 807 999 000
          </span>
          <button className="secondary-header__call-btn">Request a call</button>
        </div>
      </div>
    </section>
  );
};

export default Header;
