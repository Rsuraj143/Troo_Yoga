import React from "react";
import "./PricingPlan.css";
import pricingImg from "../../images/pricing_img.png"
import play from "../../images/Play Btn.png"

const PricingPlan = () => {
  return (
    <section class="Pricing_wrapper">
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-6">
            <div class="pricing_left_side">
              <img src={pricingImg} alt="pricing_img" />
              <div class="play_btn">
                <a
                  href="https://www.youtube.com/watch?v=Cpmw25cSYow"
                  class="youtube"
                  target="_blank"
                >
                  <img src={play} alt="play_btn" />
                </a>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="pricing_right_side">
              <div class="our_special_team_title_outer">
                <div class="smal_title">
                  <h5>Pricing Plans</h5>
                </div>
                <div class="our_team_title">
                  <h2>
                    <span>Our Pricing Plan</span>
                  </h2>
                </div>
              </div>
              <div class="pricing_right_side_content">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam.
                </p>
              </div>
              <div class="pricing_table_outer">
                <div class="pricing_table_box d-flex justify-content-between align-items-center">
                  <div class="pricing_title">
                    <h5>Standard Pricing Plan</h5>
                  </div>
                  <div class="pricing_price">
                    <p>$35 Per week</p>
                  </div>
                </div>
                <div class="pricing_table_box d-flex justify-content-between align-items-center">
                  <div class="pricing_title">
                    <h5>Professional Pricing Plan</h5>
                  </div>
                  <div class="pricing_price">
                    <p>$150 Per week</p>
                  </div>
                </div>
                <div class="pricing_table_box last d-flex justify-content-between align-items-center">
                  <div class="pricing_title">
                    <h5>Private Pricing Plan</h5>
                  </div>
                  <div class="pricing_price">
                    <p>$200 Per week</p>
                  </div>
                </div>
              </div>
              <div class="pricing_btn">
                <button type="button" class="btn btn-primary">
                  <span>+</span>View Our Services
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingPlan;
