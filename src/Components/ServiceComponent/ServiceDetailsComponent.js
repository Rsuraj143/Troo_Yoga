import React from "react";
import "./ServiceDetailsComponent.css";
import yoga_begneer from "../../images/Yoga_begniner.png"
import yoga_begneer2 from "../../images/Yoga_begniner_2.png"
import verification from "../../images/verification.png"
import traineer from "../../images/Professional_trainner.png"
import {
    FaTwitter,
    FaFacebookF,
    FaLinkedinIn,
    FaInstagram,
  } from "react-icons/fa";
import related1 from "../../images/related_img_1.png"
import related2 from "../../images/related_img_2.png"
import related3 from "../../images/related_img_3.png"
import related4 from "../../images/related_img_4.png"


const ServiceDetailsComponent = () => {
  return (
    <section class="yoga_beginners_wrapper">
      <div class="container">
        <div class="row">
          <div class="col-lg-8">
            <div class="yoga_beginners_left_side">
              <div class="yoga_beginners_img">
                <img
                  src={yoga_begneer}
                  alt="yoga_beginners_img"
                />
              </div>
              <div class="yoga_beginners_title">
                <h4>Yoga Class for Beginners</h4>
              </div>
              <div class="yoga_beginners_content">
                <p>
                  Lorem Ipsum is simply dummy text of the printin and
                  typesetting industry. Lorem Ipsum has been the industry’s
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged.
                </p>
                <p>
                  Lorem Ipsum is simply dummy text of the printin and
                  typesetting industry. Lorem Ipsum has been the industry’s
                  standard dummy text ever since the 1500s.
                </p>
              </div>
              <div class="yoga_beginners_verify_box d-flex">
                <div class="yoga_beginners_verify_outer d-flex">
                  <div class="yoga_beginners_verify_img">
                    <img
                      src={verification}
                      alt="verification"
                    />
                  </div>
                  <div class="yoga_beginners_right_side_box">
                    <div class="yoga_beginners_subtitle">
                      <p>Advanced Training</p>
                    </div>
                    <div class="yoga_beginners_right_content">
                      <p>
                        Lorem ipsum dolor and it sit amet, consetetur
                        thsadipscing elitr, sed diam nonumy eirmod tempor{" "}
                      </p>
                    </div>
                  </div>
                </div>
                <div class="yoga_beginners_verify_outer second d-flex">
                  <div class="yoga_beginners_verify_img">
                    <img
                      src={traineer}
                      alt="verification"
                    />
                  </div>
                  <div class="yoga_beginners_right_side_box">
                    <div class="yoga_beginners_subtitle">
                      <p>Professional Trainers</p>
                    </div>
                    <div class="yoga_beginners_right_content">
                      <p>
                        Lorem ipsum dolor and it sit amet, consetetur
                        thsadipscing elitr, sed diam nonumy eirmod tempor{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="yoga_sec_content">
                <p>
                  Lorem Ipsum is simply dummy text of the printin and
                  typesetting industry. Lorem Ipsum has been the industry’s
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries.
                </p>
              </div>
              <div class="yoga_begginer_checklist_outer d-flex">
                <div class="yoga_begginer_checklist_img">
                  <img src={yoga_begneer2} alt="Yoga" />
                </div>
                <div class="yoga_begginer_checkList_content">
                  <div class="about_our_scholl_list">
                    <ul class="about_our_schol_ul">
                      <li>
                        Lorem ipsum dolor sit amet, consectetur and it
                        adipiscing elit.
                      </li>
                      <li>
                        Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit.Lorem ipsum dolor sit amet.
                      </li>
                      <li>Lorem ipsum dolor sit amet.</li>
                      <li>Lorem ipsum dolor sit amet, consectetur.</li>
                      <li>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </li>
                      <li>Lorem ipsum dolor sit, adipiscing amet</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="yoga_begginer_content_bottom">
                <p>
                  Lorem Ipsum is simply dummy text of the printin and
                  typesetting industry. Lorem Ipsum has been the industry’s
                  standard dummy text ever since the 1500s.Lorem Ipsum is simply
                  dummy text of the printin and typesetting industry. Lorem
                  Ipsum has been.
                </p>
              </div>
              <div class="yoga_begginer_social_icon">
                <div class="hover_social_icon_team_box d-flex">
                  <span>Share:</span>
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
          <div class="col-lg-4">
            <div class="yoga_beginners_right_side">
              <div class="yoga_beginners_right_side_box_1">
                <h4>Class Information</h4>
                <div class="yoga_begginer_name_list">
                  <p>
                    <span>Trainer</span>:Jack Hakman
                  </p>
                  <p>
                    <span>Days</span>:Monday and Tuesday
                  </p>
                  <p>
                    <span>Time</span>: 10:00 - 11:00
                  </p>
                  <p>
                    <span>Location</span>: Any Our School
                  </p>
                </div>
                <div class="yoga_beginner_right_side_box_1_btn">
                  <button type="button" class="btn btn-primary">
                    <span>+</span> Register Now
                  </button>
                </div>
              </div>
              <div class="yoga_beginners_right_side_box_1 box_2">
                <h4>Related Class</h4>
                <div class="yoga_beginners_right_side_box_2 d-flex">
                  <div class="yoga_beginners_right_side_box_2_img">
                    <img
                      src={related1}
                      alt="related_img_1"
                    />
                  </div>
                  <div class="yoga_beginners_right_side_box_2_content">
                    <p>Free Style Yoga For Stress Relieves</p>
                    <span>By: Elina Ekman</span>
                  </div>
                </div>
                <div class="yoga_beginners_right_side_box_2 d-flex">
                  <div class="yoga_beginners_right_side_box_2_img">
                    <img
                      src={related2}
                      alt="related_img_1"
                    />
                  </div>
                  <div class="yoga_beginners_right_side_box_2_content">
                    <p>Yoga Poses For Inner Acceptance</p>
                    <span>By: Lily Garner</span>
                  </div>
                </div>
                <div class="yoga_beginners_right_side_box_2 d-flex">
                  <div class="yoga_beginners_right_side_box_2_img">
                    <img
                      src={related3}
                      alt="related_img_1"
                    />
                  </div>
                  <div class="yoga_beginners_right_side_box_2_content">
                    <p>Flow Yoga To Energize Our Body</p>
                    <span>By: Erick Roven</span>
                  </div>
                </div>
                <div class="yoga_beginners_right_side_box_2 d-flex">
                  <div class="yoga_beginners_right_side_box_2_img">
                    <img
                     src={related4}
                      alt="related_img_1"
                    />
                  </div>
                  <div class="yoga_beginners_right_side_box_2_content">
                    <p>Welcome To The World Of Yoga</p>
                    <span>By: Razan Smith</span>
                  </div>
                </div>
                <div class="yoga_beginner_right_side_box_1_btn">
                  <button type="button" class="btn btn-primary">
                    <span>+</span> View All Classes
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetailsComponent;
