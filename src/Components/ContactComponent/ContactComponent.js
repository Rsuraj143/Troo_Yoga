import React from "react";
import "./ContactComponent.css";
import call from "../../images/footer_call.png"
import mail from "../../images/footer_mail.png"
import location from "../../images/form_locations.png"

const ContactComponent = () => {
  return (
    <section className="quick_help_wrapper hp">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="quick_help_title text-center">
              <div className="classNamees_workshop_title">
                <h2>
                  Need a <span>Quick Help </span>or Have Questions?
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3">
            <div className="quick_help_detail_box">
              <h5>Call</h5>
              <div className="quick_help_detail_outer d-flex">
                <div className="quick_help_call">
                  <img src={call} alt="call" />
                </div>
                <div className="quick_help_call_right">
                  <p>
                    <a href="tel:+44 123 456 7890">+44 123 456 7890</a>
                  </p>
                  <a href="tel:+44 987 654 1230">+44 987 654 1230</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="quick_help_detail_box">
              <h5>Email</h5>
              <div className="quick_help_detail_outer d-flex">
                <div className="quick_help_call">
                  <img src={mail} alt="mail" />
                </div>
                <div className="quick_help_call_right">
                  <p>
                    <a href="mailto:trooyoga@email.com">trooyoga@email.com</a>
                  </p>
                  <a href="mailto:info@trootheme.com">info@trootheme.com</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="quick_help_detail_box">
              <h5>Adress</h5>
              <div className="quick_help_detail_outer d-flex">
                <div className="quick_help_call">
                  <img
                    src={location}
                    alt="Location"
                  />
                </div>
                <div className="quick_help_call_right">
                  <address>8 Clarence Court,Geraldton, 2506, Australia</address>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="form_wrapper">
        <div className="container">
          <form>
            <h2>Send Us a Message</h2>
            <div className="form-row d-flex">
              <div className="form-group col-lg-6">
                <label for="inputname">Enter Your Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="inputname"
                  placeholder="John Doe"
                />
              </div>
              <div className="form-group col-lg-6">
                <label for="inputnumber">Enter Your Phone</label>
                <input
                  type="text"
                  className="form-control"
                  id="inputnumber"
                  placeholder="+44 123 456 7890"
                />
              </div>
            </div>
            <div className="form-row d-flex">
              <div className="form-group col-lg-6">
                <label for="inputemail">Enter Your Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="inputemail"
                  placeholder="iamjohndoe@email.com"
                />
              </div>
              <div className="form-group col-lg-6">
                <label for="inputmember">Interest In</label>
                <input
                  type="text"
                  className="form-control"
                  id="inputmember"
                  placeholder="Take A membership"
                />
              </div>
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
      </section>
    </section>
  );
};

export default ContactComponent;
