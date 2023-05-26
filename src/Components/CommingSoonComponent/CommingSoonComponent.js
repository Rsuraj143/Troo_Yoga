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
    <section class="coming_soon_wrapper">
      <div class="coming_soon_bg_1">
        <img src={commingBg1} alt="coming_soon_bg" />
      </div>
      <div class="coming_soon_bg_2">
        <img src={commingBg2} alt="coming_soon_bg" />
      </div>
      <div class="coming_soon_bg_3">
        <img src={commingBg3} alt="coming_soon_bg" />
      </div>
      <div class="coming_soon_bg_4">
        <img src={commingBg4} alt="coming_soon_bg" />
      </div>
      <div class="coming_soon_bg_5">
        <img src={commingBg5} alt="coming_soon_bg" />
      </div>
      <div class="coming_soon_bg_6">
        <img src={commingBg7} alt="coming_soon_bg" />
      </div>
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <div class="coming_soon_left_side">
              <div class="coming_soon_btn">
                <button type="button" class="btn btn-primary">
                  <span>+</span>Coming Soon!
                </button>
              </div>
              <div class="coming_soon_pg_title">
                <p>Our New Website Is on Its Way.</p>
              </div>
              <div class="coming_soon_left_side_form">
                <form class="form-inline">
                  <input
                    type="text"
                    readonly
                    class="form-control-plaintext"
                    id="staticEmail2"
                    value="Enter Your Email"
                  />

                  <button type="submit" class="btn btn-primary">
                    NOTIFY ME
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="coming_soon_form">
              <form>
                <h2>Contact Us</h2>
                <div class="form-group col-lg-12">
                  <label for="inputname">Enter Your Name</label>
                  <input
                    type="text"
                    class="form-control"
                    id="inputname"
                    placeholder="John Doe"
                  />
                </div>
                <div class="form-group col-lg-12">
                  <label for="inputemail">Enter Your Email</label>
                  <input
                    type="email"
                    class="form-control"
                    id="inputemail"
                    placeholder="iamjohndoe@email.com"
                  />
                </div>
                <div class="form-group col-lg-12">
                  <label for="inputphone">Enter Your Phone</label>
                  <input
                    type="email"
                    class="form-control"
                    id="inputphone"
                    placeholder="+44 123 456 7890"
                  />
                </div>
                <div class="form-group">
                  <label for="exampleFormControlTextarea1">Message</label>
                  <textarea
                    class="form-control msg"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    placeholder="Write somethings......."
                  ></textarea>
                </div>
                <div class="form_submit_btn">
                  <button type="submit" class="btn btn-primary">
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
