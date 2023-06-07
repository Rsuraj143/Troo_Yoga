import React from "react";
import "./Footer.css";
import img1 from "../../images/footer_bg_1.png";
import img2 from "../../images/footer_bg_2.png";
import img3 from "../../images/footer_bg_3.png";
import img4 from "../../images/footer_bg_4.png";
import img5 from "../../images/footer_bg_5.png";
import img6 from "../../images/footer_bg_6.png";
import img7 from "../../images/footer_bg_7.png";
import foterLogo from "../../images/Footer_Logo.png";
import { Link } from "react-router-dom";
import {
  FaTwitter,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="footer_bg_1">
        <img src={img1} alt="Footer" />
      </div>
      <div className="footer_bg_2">
        <img src={img2} alt="Footer" />
      </div>
      <div className="footer_bg_3">
        <img src={img3} alt="Footer" />
      </div>
      <div className="footer_bg_4">
        <img src={img4} alt="Footer" />
      </div>
      <div className="footer_bg_5">
        <img src={img5} alt="Footer" />
      </div>
      <div className="footer_bg_6">
        <img src={img6} alt="Footer" />
      </div>
      <div className="footer_bg_7">
        <img src={img7} alt="Footer" />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="footer_logo text-center">
              <img src={foterLogo} alt="footer_logo" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="footer_menu_box">
              <ul className="footer_menu_ul d-flex justify-content-center">
                <li>
                  <Link>Home</Link>
                </li>
                <li>
                  <Link>About Us</Link>
                </li>
                <li>
                  <Link>classNamees </Link>
                </li>
                <li>
                  <Link>Blogs</Link>
                </li>
                <li>
                  <Link>Contact Us</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-5">
            <div className="footer_copyright">
              <p>
                © 2022 Medical Theme by <span>Troo Theme</span>. All rights
                reserved
              </p>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="footer_box_social_icon d-flex justify-content-center">
              <div className="footer_social_icon_box">
                <FaFacebookF />
              </div>
              <div className="footer_social_icon_box">
                <FaTwitter />
              </div>
              <div className="footer_social_icon_box">
                <FaInstagram />
              </div>
              <div className="footer_social_icon_box">
                <FaLinkedinIn />
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="footer_policy">
              <p>Privacy Policy / Terms & Conditions</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
