import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Golden_Shoe.png"

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row row__column">
          <Link to="/">
            <figure className="footer__logo">
              <img src={Logo} className="footer__logo--img" alt="" />
            </figure>
          </Link>
          <div className="footer__list">
            <Link to="/" className="footer__link">
              Home
            </Link>
            <Link to="/shoes" className="footer__link">
              Shoes
            </Link>
            <Link to="/cart" className="footer__link">
              Cart
            </Link>
            <Link to="/cart" className="footer__link">
              Delivery
            </Link>
            <Link to="/cart" className="footer__link">
              Returns
            </Link>
            <Link to="/cart" className="footer__link">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
