import React from "react";
import "./ReviewComponent.css";
import review1 from "../../images/client_reviews_img_1.png"
import { Link } from "react-router-dom";

const ReviewComponent = () => {
  return (
    <section className="client_review_wrapper">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="classes_workshop_title_outer m-auto text-center">
              <div className="smal_title smal_mid">
                <h5>Clients Review</h5>
              </div>
              <div className="classes_workshop_title">
                <h2>
                  What Clients Say
                  <span>About Us</span>
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <div className="client_review_box">
              <div className="client_review_content">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled{" "}
                </p>
              </div>
              <div className="client_review_bottom_part">
                <div className="client_img">
                  <img
                    src={review1}
                    alt="client_img"
                  />
                </div>
                <div className="client_title">
                  <h4>Jasmine Hanna</h4>
                  <p>Business man, Clients</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="client_review_box">
              <div className="client_review_content">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled{" "}
                </p>
              </div>
              <div className="client_review_bottom_part">
                <div className="client_img">
                  <img
                     src={review1}
                    alt="client_img"
                  />
                </div>
                <div className="client_title">
                  <h4>Jasmine Hanna</h4>
                  <p>Business man, Clients</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="client_review_box">
              <div className="client_review_content">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled{" "}
                </p>
              </div>
              <div className="client_review_bottom_part">
                <div className="client_img">
                  <img
                     src={review1}
                    alt="client_img"
                  />
                </div>
                <div className="client_title">
                  <h4>Jasmine Hanna</h4>
                  <p>Business man, Clients</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="client_review_btn text-center">
          <Link to="/Home/Client_Reviews">
          <button type="button" className="btn btn-primary">
            <span>+</span>View All Review
          </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ReviewComponent;
