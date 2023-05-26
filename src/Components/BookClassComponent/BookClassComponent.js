import React from "react";
import "./BookClassComponent.css";
import bookClass1 from "../../images/book_clas_pg_img_1.png"
import bookClass2 from "../../images/book_clas_pg_img_2.png"

const BookClassComponent = () => {
  return (
    <section class="form_wrapper book_class_pg_form_wrapper">
      <div class="book_clas_pg_img_1">
        <img
          src={bookClass1}
          alt="book_clas_pg_img_1"
        />
      </div>
      <div class="book_clas_pg_img_2">
        <img
            src={bookClass2}
          alt="book_clas_pg_img_1"
        />
      </div>
      <div class="container">
        <form>
          <h2>Application Form</h2>
          <div class="form-row d-flex">
            <div class="form-group col-lg-6">
              <label for="inputname">First Name</label>
              <input
                type="text"
                class="form-control"
                id="inputname"
                placeholder="John"
              />
            </div>
            <div class="form-group col-lg-6">
              <label for="inputlname">Last Name</label>
              <input
                type="text"
                class="form-control"
                id="inputlname"
                placeholder="Doe"
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
              <label for="inputnumber">Phone No</label>
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
              <label for="inputcat">Category</label>
              <input
                type="text"
                class="form-control"
                id="inputcat"
                placeholder="Stress Reduction"
              />
            </div>
            <div class="form-group col-lg-6">
              <label for="inputcity">Your City</label>
              <input
                type="text"
                class="form-control"
                id="inputcity"
                placeholder="London"
              />
            </div>
          </div>
          <div class="form-row d-flex">
            <div class="form-group col-lg-6">
              <label for="inputper">How Many Person?</label>
              <input
                type="text"
                class="form-control"
                id="inputper"
                placeholder="5+"
              />
            </div>
            <div class="form-group col-lg-6">
              <label for="inputintrest">Interest In</label>
              <input
                type="text"
                class="form-control"
                id="inputintrest"
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
  );
};

export default BookClassComponent;
