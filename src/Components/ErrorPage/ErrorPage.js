import React from "react";
import "./ErrorPage.css";
import errorBg1 from "../../images/error_bg_1.png";
import errorBg2 from "../../images/error_bg_2.png";
import errorBg3 from "../../images/error_bg_3.png";
import errorBg4 from "../../images/error_bg_4.png";
import errorBg5 from "../../images/error_bg_5.png";
import errorBg6 from "../../images/error_bg_6.png";
import error from "../../images/erroe.png";

const ErrorPage = () => {
  return (
    <section className="error_wrapper text-center">
      <div className="error_bg_1">
        <img src={errorBg1} alt="error_bg_1" />
      </div>
      <div className="error_bg_2">
        <img src={errorBg2} alt="error_bg_1" />
      </div>
      <div className="error_bg_3">
        <img src={errorBg3} alt="error_bg_1" />
      </div>
      <div className="error_bg_4">
        <img src={errorBg4} alt="error_bg_1" />
      </div>
      <div className="error_bg_5">
        <img src={errorBg5} alt="error_bg_1" />
      </div>
      <div className="error_bg_6">
        <img src={errorBg6} alt="error_bg_1" />
      </div>
      <div className="container">
        <div className="error_img">
          <img src={error} alt="Error" />
        </div>
        <div className="error_title">
          <h2>Oops! That page can’t be found.</h2>
        </div>
        <div className="error_btn">
          <button type="button" className="btn btn-primary">
            <span>+</span> GO to homepage
          </button>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
