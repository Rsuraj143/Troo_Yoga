import React from "react";
import "./ReviewComponent.css";
import review1 from "../../images/client_reviews_img_1.png"

const ReviewComponent = () => {
  return (
    <section class="client_review_wrapper">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="classes_workshop_title_outer m-auto text-center">
              <div class="smal_title smal_mid">
                <h5>Clients Review</h5>
              </div>
              <div class="classes_workshop_title">
                <h2>
                  What Clients Say
                  <span>About Us</span>
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-4">
            <div class="client_review_box">
              <div class="client_review_content">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled{" "}
                </p>
              </div>
              <div class="client_review_bottom_part">
                <div class="client_img">
                  <img
                    src={review1}
                    alt="client_img"
                  />
                </div>
                <div class="client_title">
                  <h4>Jasmine Hanna</h4>
                  <p>Business man, Clients</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="client_review_box">
              <div class="client_review_content">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled{" "}
                </p>
              </div>
              <div class="client_review_bottom_part">
                <div class="client_img">
                  <img
                     src={review1}
                    alt="client_img"
                  />
                </div>
                <div class="client_title">
                  <h4>Jasmine Hanna</h4>
                  <p>Business man, Clients</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="client_review_box">
              <div class="client_review_content">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled{" "}
                </p>
              </div>
              <div class="client_review_bottom_part">
                <div class="client_img">
                  <img
                     src={review1}
                    alt="client_img"
                  />
                </div>
                <div class="client_title">
                  <h4>Jasmine Hanna</h4>
                  <p>Business man, Clients</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="client_review_btn text-center">
          <button type="button" class="btn btn-primary">
            <span>+</span>View All Review
          </button>
        </div>
      </div>
    </section>
  );
};

export default ReviewComponent;
