import React from "react";
import "./PricingPlan.css";
import pricingImg from "../../images/pricing_img.png"
import play from "../../images/Play Btn.png"
import { Link } from "react-router-dom";

const PricingPlan = () => {
  return (
    <section className="Pricing_wrapper">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6">
            <div className="pricing_left_side">
              <img src={pricingImg} alt="pricing_img" />
              <div className="play_btn">
                <a
                  href="https://www.youtube.com/watch?v=Cpmw25cSYow"
                  className="youtube"
                  target="_blank"
                >
                  <img src={play} alt="play_btn" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="pricing_right_side">
              <div className="our_special_team_title_outer">
                <div className="smal_title">
                  <h5>Pricing Plans</h5>
                </div>
                <div className="our_team_title">
                  <h2>
                    <span>Our Pricing Plan</span>
                  </h2>
                </div>
              </div>
              <div className="pricing_right_side_content">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam.
                </p>
              </div>
              <div className="pricing_table_outer">
                <div className="pricing_table_box d-flex justify-content-between align-items-center">
                  <div className="pricing_title">
                    <h5>Standard Pricing Plan</h5>
                  </div>
                  <div className="pricing_price">
                    <p>$35 Per week</p>
                  </div>
                </div>
                <div className="pricing_table_box d-flex justify-content-between align-items-center">
                  <div className="pricing_title">
                    <h5>Professional Pricing Plan</h5>
                  </div>
                  <div className="pricing_price">
                    <p>$150 Per week</p>
                  </div>
                </div>
                <div className="pricing_table_box last d-flex justify-content-between align-items-center">
                  <div className="pricing_title">
                    <h5>Private Pricing Plan</h5>
                  </div>
                  <div className="pricing_price">
                    <p>$200 Per week</p>
                  </div>
                </div>
              </div>
              <div className="pricing_btn">
                <Link to="/Home/Pricing_Table">
                <button type="button" className="btn btn-primary">
                  <span>+</span>View Our Services
                </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingPlan;
