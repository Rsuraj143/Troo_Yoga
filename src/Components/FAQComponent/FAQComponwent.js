import React from "react";
import "./FAQComponent.css";
import call from "../../images/call.png"
import mail from "../../images//mail.png"
import Accordion from 'react-bootstrap/Accordion';
import { Link } from "react-router-dom";

const FAQComponwent = () => {
  return (
    <section className="faq_wrapper">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="our_special_team_title_outer">
              <div className="smal_title">
                <h5>Have You Question in Mind?</h5>
              </div>
              <div className="our_team_title">
                <h2>Frequently Asked Questions</h2>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="our_team_btn">
              <div className="about_our_btn_2">
               <Link to="/Home/FAQ">
               <button type="button" className="btn btn-primary">
                  <span>+</span>View All FAQ’s
                </button>
               </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4">
          <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                  <h5>I'm not fit - can I do yoga?</h5>
                  </Accordion.Header>
                  <Accordion.Body>
                  <p>Lorem Ipsum is simply dummy and is text of the printing and
                    typesetting industry. Lorem Ipsum has been is text of the
                    printing.</p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                  <h5>What should I wear?</h5>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>Lorem Ipsum is simply dummy and is text of the printing and
                    typesetting industry. Lorem Ipsum has been is text of the
                    printing.</p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>
                  <h5>What if I am late for a class?</h5>
                  </Accordion.Header>
                  <Accordion.Body>
                   <p> Lorem Ipsum is simply dummy and is text of the printing and
                    typesetting industry. Lorem Ipsum has been is text of the
                    printing.</p>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
           
          </div>
          <div class="col-lg-4">
          <Accordion>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>
                  <h5>I'm not fit - can I do yoga?</h5>
                  </Accordion.Header>
                  <Accordion.Body>
                  <p>Lorem Ipsum is simply dummy and is text of the printing and
                    typesetting industry. Lorem Ipsum has been is text of the
                    printing.</p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                  <Accordion.Header>
                  <h5>What should I wear?</h5>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>Lorem Ipsum is simply dummy and is text of the printing and
                    typesetting industry. Lorem Ipsum has been is text of the
                    printing.</p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="5">
                  <Accordion.Header>
                  <h5>What if I am late for a class?</h5>
                  </Accordion.Header>
                  <Accordion.Body>
                   <p> Lorem Ipsum is simply dummy and is text of the printing and
                    typesetting industry. Lorem Ipsum has been is text of the
                    printing.</p>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
           
          </div>
          <div class="col-lg-4">
          <Accordion defaultActiveKey="6">
                <Accordion.Item eventKey="6">
                  <Accordion.Header>
                  <h5>I'm not fit - can I do yoga?</h5>
                  </Accordion.Header>
                  <Accordion.Body>
                  <p>Lorem Ipsum is simply dummy and is text of the printing and
                    typesetting industry. Lorem Ipsum has been is text of the
                    printing.</p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="7">
                  <Accordion.Header>
                  <h5>What should I wear?</h5>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>Lorem Ipsum is simply dummy and is text of the printing and
                    typesetting industry. Lorem Ipsum has been is text of the
                    printing.</p>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
           
          </div>
        </div>
        <div className="faq_bottom_title text-center">
          <h4>Did Not Find Your Answer?</h4>
          <div className="faq_bottom_title_box d-flex justify-content-between">
            <div className="faq_call_outer first d-flex">
              <div className="faq_call">
                <img src={call} alt="call" />
              </div>
              <div className="faq_call_detail"> 
                <p>
                  <a href="tel:+44 123 456 7890" className="number_faq">
                    <span className="call_us">Call Us on</span> +44 123 456 7890
                  </a>
                </p>
              </div>
            </div>
            <div className="faq_call_outer  d-flex">
              <div className="faq_call">
                <img src={mail} alt="call" />
              </div>
              <div className="faq_call_detail">
                <p>
                  <a href="mailto:trooyoga@email.com">
                    <span className="email_us">Email Us on</span>trooyoga@email.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQComponwent;
