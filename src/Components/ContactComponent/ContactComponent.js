import React from "react";
import "./ContactComponent.css";
import call from "../../images/footer_call.png"
import mail from "../../images/footer_mail.png"
import location from "../../images/form_locations.png"

const ContactComponent = () => {
  return (
    <section class="quick_help_wrapper hp">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="quick_help_title text-center">
              <div class="classes_workshop_title">
                <h2>
                  Need a <span>Quick Help </span>or Have Questions?
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-3">
            <div class="quick_help_detail_box">
              <h5>Call</h5>
              <div class="quick_help_detail_outer d-flex">
                <div class="quick_help_call">
                  <img src={call} alt="call" />
                </div>
                <div class="quick_help_call_right">
                  <p>
                    <a href="tel:+44 123 456 7890">+44 123 456 7890</a>
                  </p>
                  <a href="tel:+44 987 654 1230">+44 987 654 1230</a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-3">
            <div class="quick_help_detail_box">
              <h5>Email</h5>
              <div class="quick_help_detail_outer d-flex">
                <div class="quick_help_call">
                  <img src={mail} alt="mail" />
                </div>
                <div class="quick_help_call_right">
                  <p>
                    <a href="mailto:trooyoga@email.com">trooyoga@email.com</a>
                  </p>
                  <a href="mailto:info@trootheme.com">info@trootheme.com</a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="quick_help_detail_box">
              <h5>Adress</h5>
              <div class="quick_help_detail_outer d-flex">
                <div class="quick_help_call">
                  <img
                    src={location}
                    alt="Location"
                  />
                </div>
                <div class="quick_help_call_right">
                  <address>8 Clarence Court,Geraldton, 2506, Australia</address>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section class="form_wrapper">
        <div class="container">
          <form>
            <h2>Send Us a Message</h2>
            <div class="form-row d-flex">
              <div class="form-group col-lg-6">
                <label for="inputname">Enter Your Name</label>
                <input
                  type="text"
                  class="form-control"
                  id="inputname"
                  placeholder="John Doe"
                />
              </div>
              <div class="form-group col-lg-6">
                <label for="inputnumber">Enter Your Phone</label>
                <input
                  type="text"
                  class="form-control"
                  id="inputnumber"
                  placeholder="+44 123 456 7890"
                />
              </div>
            </div>
            <div class="form-row d-flex">
              <div class="form-group col-lg-6">
                <label for="inputemail">Enter Your Email</label>
                <input
                  type="email"
                  class="form-control"
                  id="inputemail"
                  placeholder="iamjohndoe@email.com"
                />
              </div>
              <div class="form-group col-lg-6">
                <label for="inputmember">Interest In</label>
                <input
                  type="text"
                  class="form-control"
                  id="inputmember"
                  placeholder="Take A membership"
                />
              </div>
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
      </section>
    </section>
  );
};

export default ContactComponent;
