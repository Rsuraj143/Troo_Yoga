import React from "react";
import "./CommingSoon.css";
import commingBg1 from "../../images/coming_soon_bg_1.png"
import commingBg2 from "../../images/coming_soon_bg_2.png"
import commingBg3 from "../../images/coming_soon_bg_3.png"
import commingBg4 from "../../images/coming_soon_bg_4.png"
import commingBg5 from "../../images/coming_soon_bg_5.png"
import commingBg7 from "../../images/coming_soon_bg_7.png"

const CommingSoonComponent = () => {
  return (
    <section className="coming_soon_wrapper">
      <div className="coming_soon_bg_1">
        <img src={commingBg1} alt="coming_soon_bg" />
      </div>
      <div className="coming_soon_bg_2">
        <img src={commingBg2} alt="coming_soon_bg" />
      </div>
      <div className="coming_soon_bg_3">
        <img src={commingBg3} alt="coming_soon_bg" />
      </div>
      <div className="coming_soon_bg_4">
        <img src={commingBg4} alt="coming_soon_bg" />
      </div>
      <div className="coming_soon_bg_5">
        <img src={commingBg5} alt="coming_soon_bg" />
      </div>
      <div className="coming_soon_bg_6">
        <img src={commingBg7} alt="coming_soon_bg" />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="coming_soon_left_side">
              <div className="coming_soon_btn">
                <button type="button" className="btn btn-primary">
                  <span>+</span>Coming Soon!
                </button>
              </div>
              <div className="coming_soon_pg_title">
                <p>Our New Website Is on Its Way.</p>
              </div>
              <div className="coming_soon_left_side_form">
                <form className="form-inline">
                  <input
                    type="text"
                    readonly
                    className="form-control-plaintext"
                    id="staticEmail2"
                    value="Enter Your Email"
                  />

                  <button type="submit" className="btn btn-primary">
                    NOTIFY ME
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="coming_soon_form">
              <form>
                <h2>Contact Us</h2>
                <div className="form-group col-lg-12">
                  <label for="inputname">Enter Your Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputname"
                    placeholder="John Doe"
                  />
                </div>
                <div className="form-group col-lg-12">
                  <label for="inputemail">Enter Your Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="inputemail"
                    placeholder="iamjohndoe@email.com"
                  />
                </div>
                <div className="form-group col-lg-12">
                  <label for="inputphone">Enter Your Phone</label>
                  <input
                    type="email"
                    className="form-control"
                    id="inputphone"
                    placeholder="+44 123 456 7890"
                  />
                </div>
                <div className="form-group">
                  <label for="exampleFormControlTextarea1">Message</label>
                  <textarea
                    className="form-control msg"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    placeholder="Write somethings......."
                  ></textarea>
                </div>
                <div className="form_submit_btn">
                  <button type="submit" className="btn btn-primary">
                    Submite Form +
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommingSoonComponent;
