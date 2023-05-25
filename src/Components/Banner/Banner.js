import React from "react";
import "./Banner.css";
import herobg1 from "../../images/hero_bg_1.png";
import herobg2 from "../../images/hero_bg_2.png";
import herobg3 from "../../images/hero_bg_3.png";

const Banner = () => {
  return (
    <section class="troo_da_wrapper">
      <div class="hero_bg_1">
        <img src={herobg1} alt="hero_bg_1" />
      </div>
      <div class="hero_bg_2">
        <img src={herobg2} alt="hero_bg_2" />
      </div>
      <div class="hero_bg_3">
        <img src={herobg3} alt="hero_bg_5" />
      </div>

      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="hero_outer">
              <div class="hero_img">
                {/* <img src="./assets/images/hero_img.png" alt="hero_img"/> */}
              </div>
              <div class="hero_detail">
                <div class="smal_title">
                  <h5>Find your tranquility</h5>
                </div>
                <div class="hero_title">
                  <h1>
                    <span>Enhance your ability</span> to concentrate with{" "}
                    <span>Yoga!</span>
                  </h1>
                </div>
                <div class="hero_content">
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled{" "}
                  </p>
                </div>
                <div class="hero_btn">
                  <button type="button" class="btn btn-primary">
                    <span>+</span>VIEW ALL CLASSES
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

export default Banner;
