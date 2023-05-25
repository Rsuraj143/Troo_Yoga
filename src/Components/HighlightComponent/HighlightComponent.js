import React from "react";
import "./HighlightComponent.css";
import highlight1 from "../../images/why_choose_bg_2.png"
import highlight2 from "../../images/why_choose_bg_1.png"
import highlight3 from "../../images/why_choose_img.png"
import highlight4 from "../../images/why_choose_bg_3.png"


const HighlightComponent = () => {
  return (
    <section class="why_choose_wrapper">
      <div class="why_choose_bg_1">
        <img src={highlight1} alt="why_choose_bg_2" />
      </div>
      <div class="why_choose_bg_2">
        <img src={highlight2} alt="why_choose_bg_1" />
      </div>
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="classes_workshop_title_outer m-auto text-center">
              <div class="smal_title smal_mid">
                <h5>Why Choose TrooYoga</h5>
              </div>
              <div class="classes_workshop_title">
                <h2>
                  <span>TrooYoga</span> Benefits & Outcomes
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-4">
            <div class="why_choose_box one">
              <div class="why_choose_box_title d-flex">
                <div class="why_choose_box_content">
                  <h4>Improve Health</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetuar adipiscing elit.
                  </p>
                </div>
                <div class="count_box">
                  <div class="count_box_inner">
                    <h2>01</h2>
                  </div>
                </div>
              </div>
              <div class="why_choose_box_title d-flex">
                <div class="why_choose_box_content">
                  <h4>Balance Your Mind</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetuar adipiscing elit.
                  </p>
                </div>
                <div class="count_box">
                  <div class="count_box_inner">
                    <h2>02</h2>
                  </div>
                </div>
              </div>
              <div class="why_choose_box_title d-flex">
                <div class="why_choose_box_content">
                  <h4>Weight Loss</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetuar adipiscing elit.
                  </p>
                </div>
                <div class="count_box">
                  <div class="count_box_inner">
                    <h2>03</h2>
                  </div>
                </div>
              </div>
              <div class="why_choose_box_title d-flex">
                <div class="why_choose_box_content">
                  <h4>Sleep Better</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetuar adipiscing elit.
                  </p>
                </div>
                <div class="count_box">
                  <div class="count_box_inner">
                    <h2>04</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="why_choose_box_img">
              <img
                src={highlight3}
                alt="why_choose_box_img"
              />
              <div class="why_choose_bg_3">
                <img
                  src={highlight4}
                  alt="why_choose_bg_3"
                />
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="why_choose_box two">
              <div class="why_choose_box_title d-flex">
                <div class="count_box">
                  <div class="count_box_inner">
                    <h2>05</h2>
                  </div>
                </div>
                <div class="why_choose_box_content choose_cont_rept">
                  <h4>Improve Health</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetuar adipiscing elit.
                  </p>
                </div>
              </div>
              <div class="why_choose_box_title d-flex">
                <div class="count_box">
                  <div class="count_box_inner">
                    <h2>06</h2>
                  </div>
                </div>
                <div class="why_choose_box_content choose_cont_rept">
                  <h4>Balance Your Mind</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetuar adipiscing elit.
                  </p>
                </div>
              </div>
              <div class="why_choose_box_title d-flex">
                <div class="count_box">
                  <div class="count_box_inner">
                    <h2>07</h2>
                  </div>
                </div>
                <div class="why_choose_box_content choose_cont_rept">
                  <h4>Weight Loss</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetuar adipiscing elit.
                  </p>
                </div>
              </div>
              <div class="why_choose_box_title d-flex">
                <div class="count_box">
                  <div class="count_box_inner">
                    <h2>08</h2>
                  </div>
                </div>
                <div class="why_choose_box_content choose_cont_rept">
                  <h4>Sleep Better</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetuar adipiscing elit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HighlightComponent;
