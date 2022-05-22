import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaRegAddressCard } from "react-icons/fa";
import {
  BsFacebook,
  BsYoutube,
  BsLinkedin,
  BsGithub,
  BsWhatsapp,
} from "react-icons/bs";
import logo from "../../Images/favicon.png"

const Footer = () => {
  return (
    <div className="footer ">
      <div className="row">
      <div className="footer-text col-6">
        <h6 className="d-flex align-items-center my-0 py-0">
        <img className="site-logo" src={logo} alt="" />
        <p className="ps-1 pt-3">Halal Food</p>
        </h6>
        <p className="mb-0 pb-1 footer-font-size">
          {" "}
          <span className="icons me-2">
            <FaRegAddressCard />
          </span>{" "}
            Jatrabari,Dhaka-1232,Bangladesh
        </p>
        <p className="mb-0 pb-1 footer-font-size">
          {" "}
          <span className="icons me-2">
            <FaRegAddressCard />
          </span>{" "}
          vagdi,Narsingdi Sadar,Narsingdi
        </p>
        <p className="footer-font-size">
          {" "}
          <BsFillTelephoneFill className="me-2" /> +88 01831535473
        </p>
        
        <a
          className="icons-social "
          href="https://www.facebook.com/mdmahbubor.rahman.94 "
        >
          <BsFacebook />
        </a>
        <a className="icons-social" href="https://www.youtube.com/">
          <BsYoutube />
        </a>
        <a
          className="icons-social"
          href="https://www.linkedin.com/in/md-mahbubor-rahman-a2870723b/"
        >
          <BsLinkedin />
        </a>
        <a className="icons-social" href="https://github.com/mahbubur1">
          <BsGithub />
        </a>
        <a className="icons-social" href="https://web.whatsapp.com/">
          <BsWhatsapp />
        </a>
      </div>
      <div className=" col-3 footer-text">
        <h6>Quick Links</h6>
        <Link className="links mb-0 pb-1 footer-font-size" to="/products">
          {" "}
          Products
        </Link>
        <br />
        <Link className="links mb-0 pb-1 footer-font-size" to="/blogs">
          {" "}
          Blogs
        </Link>
        <br />
        <Link className="links mb-0 pb-1 footer-font-size" to="/about">
          {" "}
          About
        </Link>
        <br />
        <Link className="links mb-0 pb-1 footer-font-size" to="/signup">
          Sign Up
        </Link>
        <br />
        <Link className="links mb-0 pb-1 footer-font-size" to="/login">
          Login
        </Link>
      </div>
      <div className="col-3 footer-text pe-0 me-0">
        <h6>Our Services</h6>
        <Link className="links mb-0 pb-1 footer-font-size" to="/about">
          {" "}
          Selling
        </Link>
        <br />
        <Link className="links mb-0 pb-1 footer-font-size" to="/about">
          {" "}
          About Us
        </Link>
        <br />
        <Link className="links mb-0 pb-1 footer-font-size" to="/about">
          {" "}
          Tutorial
        </Link>
      </div>
      </div>
      <div className="form ">
          <input type="email" name="Email" id="" placeholder="Email" />
          <input type="submit" value="Send" />
        </div>
    </div>
  );
};

export default Footer;
