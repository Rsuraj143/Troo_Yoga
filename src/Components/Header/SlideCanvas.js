import React, { useState } from "react";
import toggleMenu from "../../images/Toggle_menu.png";
import logo from "../../images/Logo.png";
import call from "../../images/call_canvas.png";
import mail from "../../images/email_canvas.png";
import location from "../../images/location_canvas.png";
import { Link } from "react-router-dom";
import {
  FaTwitter,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import Offcanvas from "react-bootstrap/Offcanvas";
import Button from "react-bootstrap/Button";

const SlideCanvas = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="hamburger_menu_header">
      <Button onClick={handleShow} className="hum-btn">
        <img src={toggleMenu} alt="humburger" />
      </Button>
      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <h5 id="offcanvasRightLabel">
            <img src={logo} alt="Logo" />
          </h5>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <h4>About Us</h4>
          <p>
            Lorem, ipsum dolor and it so sit amet consectetur adipisicing elit.
            Tempore ipsam alias and quae cupiditate quas, neque eum magni.
          </p>
          <div className="contact_us_canvans">
            <h4>Contact Us</h4>
            <div className="call_canvas">
              <h5>Call</h5>
              <div className="canvas_call_outer d-flex">
                <div className="call_img">
                  <img src={call} alt="call" />
                </div>
                <div className="call_canvas_detail">
                  <h5>
                    <a href="tel:+44 123 456 7890">+44 123 456 7890</a>
                  </h5>
                  <h5>
                    <a href="tel:+44 987 654 1230">+44 987 654 1230</a>
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <div className="call_canvas email">
            <h5>Email</h5>
            <div className="canvas_call_outer d-flex">
              <div className="call_img">
                <img src={mail} alt="Email" />
              </div>
              <div className="call_canvas_detail">
                <h5>
                  <a href="mailto:trooyoga@email.com">trooyoga@email.com</a>
                </h5>
                <h5>
                  <a href="mailto:info@trootheme.com">info@trootheme.com</a>
                </h5>
              </div>
            </div>
          </div>
          <div className="call_canvas email">
            <h5>Adress</h5>
            <div className="canvas_call_outer d-flex">
              <div className="call_img">
                <img src={location} alt="location_canvas" />
              </div>
              <div className="call_canvas_detail">
                <address className="canvas_addres">
                  8 Clarence Court,Geraldton, 2506, Australia
                </address>
              </div>
            </div>
          </div>
          <div className="contact_us_canvans social_network">
            <h4>Social Network</h4>
          </div>
          <div className="scial_network_canvas">
            <ul className="social_network_canvas_ul d-flex">
              <li>
                <Link to="#">
                  <FaFacebookF />
                </Link>
              </li>
              <li>
                <Link to="#">
                  <FaTwitter />
                </Link>
              </li>
              <li>
                <Link to="#">
                  <FaInstagram />
                </Link>
              </li>
              <li>
                <Link to="#">
                  <FaLinkedinIn />
                </Link>
              </li>
            </ul>
          </div>
        </Offcanvas.Body>
      </Offcanvas>

    </div>
  );
};

export default SlideCanvas;
