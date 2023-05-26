import React from "react";
import "./Header.css";
import Navbar from "react-bootstrap/Navbar";
import { Link, useNavigate } from "react-router-dom";
import { HeaderData } from "./HeaderData";
import NavMenu from "./NavMenu";
import SlideCanvas from "./SlideCanvas";
import Logo from "../../images/Header_Logo.svg";
import { Container } from "react-bootstrap";


const Header = () => {
  const navigate = useNavigate()
  return (
    <header>
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand>
            <Link to="/Home">
              <img src={Logo} alt="Logo" />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
              {HeaderData.slice(0, 6).map((item, i) => {
                return <NavMenu key={i} item={item} />;
              })}
            </ul>
            <div class="header_btn">
              {HeaderData.slice(-1).map((e, i) => {
                return (
                  <button type="button" class="btn btn-primary"  key={i} onClick={() => navigate(e.path)} >
                    <span>+</span>
                    {e.title}
                  </button>
                );
              })}
            </div>
            <SlideCanvas />
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
    </header>
  );
};

export default Header;
