import React from "react";
import "./Banner.css";
import herobg1 from "../../images/hero_bg_1.png";
import herobg2 from "../../images/hero_bg_2.png";
import herobg3 from "../../images/hero_bg_3.png";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <section className="troo_da_wrapper">
      <div className="hero_bg_1">
        <img src={herobg1} alt="hero_bg_1" />
      </div>
      <div className="hero_bg_2">
        <img src={herobg2} alt="hero_bg_2" />
      </div>
      <div className="hero_bg_3">
        <img src={herobg3} alt="hero_bg_5" />
      </div>

      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="hero_outer">
              <div className="hero_img">
              </div>
              <div className="hero_detail">
                <div className="smal_title">
                  <h5>Find your tranquility</h5>
                </div>
                <div className="hero_title">
                  <h1>
                    <span>Enhance your ability</span> to concentrate with{" "}
                    <span>Yoga!</span>
                  </h1>
                </div>
                <div className="hero_content">
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled{" "}
                  </p>
                </div>
                <div className="hero_btn">
                 <Link to="/Home/Classes">
                 <button type="button" className="btn btn-primary">
                    <span>+</span>VIEW ALL CLASSES
                  </button>
                 </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
