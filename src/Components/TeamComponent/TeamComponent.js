import React from "react";
import "./TeamComponent.css";
import team1 from "../../images/our_team_1.png";
import team2 from "../../images/our_team_2.png";
import team3 from "../../images/our_team_3.png";
import team4 from "../../images/our_team_4.png";
import {
  FaTwitter,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const TeamComponent = () => {
  return (
    <>
      <section className="our_special_team_wrapper">
        <div className="our_team_overLay"></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="our_special_team_title_outer">
                <div className="smal_title">
                  <h5>Our Special Team</h5>
                </div>y
                <div className="our_team_title">
                  <h2>
                    <span>Our instructors regularly</span>
                    conduct master classes.
                  </h2>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="our_team_btn">
                <div className="about_our_btn_2">
                 <Link to="/Home/Our_Team" >
                 <button type="button" className="btn btn-primary">
                    <span>+</span>View All Member
                  </button>
                 </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="our_team_box_wrapper">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="our_team_box">
                <div className="our_team_img">
                  <img src={team1} alt="our_team_1" />
                </div>
                <div className="our_team_title">
                  <h4>Camiele James</h4>
                  <p>Founder & CEO</p>
                </div>
                <div className="hover_social_icon_team_box d-flex justify-content-center">
                  <div className="hover_social_icon_box">
                    <FaFacebookF />
                  </div>
                  <div className="hover_social_icon_box">
                    <FaTwitter />
                  </div>
                  <div className="hover_social_icon_box">
                    <FaInstagram />
                  </div>
                  <div className="hover_social_icon_box">
                    <FaLinkedinIn />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="our_team_box">
                <div className="our_team_img">
                  <img src={team2} alt="our_team" />
                </div>
                <div className="our_team_title">
                  <h4>Filip Flekks</h4>
                  <p>Manager</p>
                </div>
                <div className="hover_social_icon_team_box d-flex justify-content-center">
                  <div className="hover_social_icon_box">
                    <FaFacebookF />
                  </div>
                  <div className="hover_social_icon_box">
                    <FaTwitter />
                  </div>
                  <div className="hover_social_icon_box">
                    <FaInstagram />
                  </div>
                  <div className="hover_social_icon_box">
                    <FaLinkedinIn />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="our_team_box">
                <div className="our_team_img">
                  <img src={team3} alt="our_team" />
                </div>
                <div className="our_team_title">
                  <h4>Jenifer Kate</h4>
                  <p>Sr. Yoga Teacher</p>
                </div>
                <div className="hover_social_icon_team_box d-flex justify-content-center">
                  <div className="hover_social_icon_box">
                    <FaFacebookF />
                  </div>
                  <div className="hover_social_icon_box">
                    <FaTwitter />
                  </div>
                  <div className="hover_social_icon_box">
                    <FaInstagram />
                  </div>
                  <div className="hover_social_icon_box">
                    <FaLinkedinIn />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="our_team_box">
                <div className="our_team_img">
                  <img src={team4} alt="our_team" />
                </div>
                <div className="our_team_title">
                  <h4>Sasha Briks</h4>
                  <p>Sr. Yoga Teacher</p>
                </div>
                <div className="hover_social_icon_team_box d-flex justify-content-center">
                  <div className="hover_social_icon_box">
                    <FaFacebookF />
                  </div>
                  <div className="hover_social_icon_box">
                    <FaTwitter />
                  </div>
                  <div className="hover_social_icon_box">
                    <FaInstagram />
                  </div>
                  <div className="hover_social_icon_box">
                    <FaLinkedinIn />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TeamComponent;
