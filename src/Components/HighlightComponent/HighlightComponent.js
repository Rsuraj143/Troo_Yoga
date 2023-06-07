import React from "react";
import "./HighlightComponent.css";
import highlight1 from "../../images/why_choose_bg_2.png"
import highlight2 from "../../images/why_choose_bg_1.png"
import highlight3 from "../../images/why_choose_img.png"
import highlight4 from "../../images/why_choose_bg_3.png"


const HighlightComponent = () => {
  return (
    <section className="why_choose_wrapper">
      <div className="why_choose_bg_1">
        <img src={highlight1} alt="why_choose_bg_2" />
      </div>
      <div className="why_choose_bg_2">
        <img src={highlight2} alt="why_choose_bg_1" />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="classes_workshop_title_outer m-auto text-center">
              <div className="smal_title smal_mid">
                <h5>Why Choose TrooYoga</h5>
              </div>
              <div className="classes_workshop_title">
                <h2>
                  <span>TrooYoga</span> Benefits & Outcomes
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <div className="why_choose_box one">
              <div className="why_choose_box_title d-flex">
                <div className="why_choose_box_content">
                  <h4>Improve Health</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetuar adipiscing elit.
                  </p>
                </div>
                <div className="count_box">
                  <div className="count_box_inner">
                    <h2>01</h2>
                  </div>
                </div>
              </div>
              <div className="why_choose_box_title d-flex">
                <div className="why_choose_box_content">
                  <h4>Balance Your Mind</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetuar adipiscing elit.
                  </p>
                </div>
                <div className="count_box">
                  <div className="count_box_inner">
                    <h2>02</h2>
                  </div>
                </div>
              </div>
              <div className="why_choose_box_title d-flex">
                <div className="why_choose_box_content">
                  <h4>Weight Loss</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetuar adipiscing elit.
                  </p>
                </div>
                <div className="count_box">
                  <div className="count_box_inner">
                    <h2>03</h2>
                  </div>
                </div>
              </div>
              <div className="why_choose_box_title d-flex">
                <div className="why_choose_box_content">
                  <h4>Sleep Better</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetuar adipiscing elit.
                  </p>
                </div>
                <div className="count_box">
                  <div className="count_box_inner">
                    <h2>04</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="why_choose_box_img">
              <img
                src={highlight3}
                alt="why_choose_box_img"
              />
              <div className="why_choose_bg_3">
                <img
                  src={highlight4}
                  alt="why_choose_bg_3"
                />
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="why_choose_box two">
              <div className="why_choose_box_title d-flex">
                <div className="count_box">
                  <div className="count_box_inner">
                    <h2>05</h2>
                  </div>
                </div>
                <div className="why_choose_box_content choose_cont_rept">
                  <h4>Improve Health</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetuar adipiscing elit.
                  </p>
                </div>
              </div>
              <div className="why_choose_box_title d-flex">
                <div className="count_box">
                  <div className="count_box_inner">
                    <h2>06</h2>
                  </div>
                </div>
                <div className="why_choose_box_content choose_cont_rept">
                  <h4>Balance Your Mind</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetuar adipiscing elit.
                  </p>
                </div>
              </div>
              <div className="why_choose_box_title d-flex">
                <div className="count_box">
                  <div className="count_box_inner">
                    <h2>07</h2>
                  </div>
                </div>
                <div className="why_choose_box_content choose_cont_rept">
                  <h4>Weight Loss</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetuar adipiscing elit.
                  </p>
                </div>
              </div>
              <div className="why_choose_box_title d-flex">
                <div className="count_box">
                  <div className="count_box_inner">
                    <h2>08</h2>
                  </div>
                </div>
                <div className="why_choose_box_content choose_cont_rept">
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
