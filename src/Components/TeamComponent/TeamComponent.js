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

const TeamComponent = () => {
  return (
    <>
      <section class="our_special_team_wrapper">
        <div class="our_team_overLay"></div>
        <div class="container">
          <div class="row">
            <div class="col-lg-6">
              <div class="our_special_team_title_outer">
                <div class="smal_title">
                  <h5>Our Special Team</h5>
                </div>
                <div class="our_team_title">
                  <h2>
                    <span>Our instructors regularly</span>
                    conduct master classes.
                  </h2>
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="our_team_btn">
                <div class="about_our_btn_2">
                  <button type="button" class="btn btn-primary">
                    <span>+</span>View All Member
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="our_team_box_wrapper">
        <div class="container">
          <div class="row">
            <div class="col-lg-3">
              <div class="our_team_box">
                <div class="our_team_img">
                  <img src={team1} alt="our_team_1" />
                </div>
                <div class="our_team_title">
                  <h4>Camiele James</h4>
                  <p>Founder & CEO</p>
                </div>
                <div class="hover_social_icon_team_box d-flex justify-content-center">
                  <div class="hover_social_icon_box">
                    <FaFacebookF />
                  </div>
                  <div class="hover_social_icon_box">
                    <FaTwitter />
                  </div>
                  <div class="hover_social_icon_box">
                    <FaInstagram />
                  </div>
                  <div class="hover_social_icon_box">
                    <FaLinkedinIn />
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-3">
              <div class="our_team_box">
                <div class="our_team_img">
                  <img src={team2} alt="our_team" />
                </div>
                <div class="our_team_title">
                  <h4>Filip Flekks</h4>
                  <p>Manager</p>
                </div>
                <div class="hover_social_icon_team_box d-flex justify-content-center">
                  <div class="hover_social_icon_box">
                    <FaFacebookF />
                  </div>
                  <div class="hover_social_icon_box">
                    <FaTwitter />
                  </div>
                  <div class="hover_social_icon_box">
                    <FaInstagram />
                  </div>
                  <div class="hover_social_icon_box">
                    <FaLinkedinIn />
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-3">
              <div class="our_team_box">
                <div class="our_team_img">
                  <img src={team3} alt="our_team" />
                </div>
                <div class="our_team_title">
                  <h4>Jenifer Kate</h4>
                  <p>Sr. Yoga Teacher</p>
                </div>
                <div class="hover_social_icon_team_box d-flex justify-content-center">
                  <div class="hover_social_icon_box">
                    <FaFacebookF />
                  </div>
                  <div class="hover_social_icon_box">
                    <FaTwitter />
                  </div>
                  <div class="hover_social_icon_box">
                    <FaInstagram />
                  </div>
                  <div class="hover_social_icon_box">
                    <FaLinkedinIn />
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-3">
              <div class="our_team_box">
                <div class="our_team_img">
                  <img src={team4} alt="our_team" />
                </div>
                <div class="our_team_title">
                  <h4>Sasha Briks</h4>
                  <p>Sr. Yoga Teacher</p>
                </div>
                <div class="hover_social_icon_team_box d-flex justify-content-center">
                  <div class="hover_social_icon_box">
                    <FaFacebookF />
                  </div>
                  <div class="hover_social_icon_box">
                    <FaTwitter />
                  </div>
                  <div class="hover_social_icon_box">
                    <FaInstagram />
                  </div>
                  <div class="hover_social_icon_box">
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
