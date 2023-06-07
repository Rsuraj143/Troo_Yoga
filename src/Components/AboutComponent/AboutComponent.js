import React from "react";
import "./AboutComponent.css";
import about from "../../images/About_Us_img.png"
import aboutbg1 from "../../images/About_our_schol_bg_1.png"
import aboutbg2 from "../../images/About_our_schol_bg_2.png"
import { Link } from "react-router-dom";

const AboutComponent = () => {
  return (
    <section className="about_our_school">
      <div className="about_our_schol_bg_1">
        <img
          src={aboutbg1}
          alt="about_our_schol_bg_1"
        />
      </div>
      <div className="about_our_schol_bg_2">
        <img
          src={aboutbg2}
          alt="about_our_schol_bg2"
        />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="about_our_scholl_left_side">
              <div className="smal_title">
                <h5>About Our School</h5>
              </div>
              <div className="about_our_scholl_title">
                <h2>We Are Yoga School & Academy</h2>
              </div>
              <div className="about_our_scholl_sub_content">
                <h5>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus ultrices magna.
                </h5>
              </div>
              <div className="about_our_scholl_list">
                <ul className="about_our_schol_ul">
                  <li>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </li>
                  <li>
                    Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit.Lorem ipsum dolor sit amet.
                  </li>
                  <li>Lorem ipsum dolor sit amet.</li>
                  <li>Lorem ipsum dolor sit amet, consectetur.</li>
                </ul>
              </div>
              <div className="about_our_scholl_btn d-flex">
                <div className="about_our_btn_1">
                  <Link to="/Home/About_Us">
                  <button type="button" className="btn btn-primary">
                    <span>+</span>KNOW MORE
                  </button>
                  </Link>
                </div>
                <div className="about_our_btn_2">
                  <Link to="/Home/Contact_Us">
                  <button type="button" className="btn btn-primary">
                    <span>+</span>CONTACT US
                  </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about_our_schol_img">
              <img src={about} alt="about_us" />
              <div className="about_our_schol_year_outer">
                <div className="about_our_schol_year_inner">
                  <h2>
                    <span>25+ Year</span>
                    Experience
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutComponent;
