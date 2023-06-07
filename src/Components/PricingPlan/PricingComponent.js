import React from 'react'
import "./PricingComponent.css"
import call from "../../images/call.png"
import mail from "../../images/mail.png"

const PricingComponent = () => {
  return (
    <section className="best_price_plane">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="classes_workshop_title_outer m-auto text-center">
                        <div className="smal_title smal_mid">
                            <h5>Pricing Packages</h5>
                        </div>
                        <div className="classes_workshop_title">
                            <h2>Choose your best price plan
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-4">
                    <div className="best_price_box">
                       <div className="best_price_box_title text-center">
                            <h4>Standard Plan</h4>
                            <p><span>$</span>34.00<span>/ Per Session</span></p>
                       </div>
                       <div className="best_price_box_list">
                        <ul className="about_our_schol_ul">
                            <li>36 LIVE Personal Yoga Training sessions.</li>
                            <li>3-Months Premium Access to the Our App.</li>
                        </ul>
                       </div>
                       <div className="best_price_box_btn">
                            <button type="button" className="btn btn-primary"><span>+</span>Get Started Now</button>
                       </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="best_price_box">
                       <div className="best_price_box_title text-center">
                            <h4>Professional Plan</h4>
                            <p><span>$</span>79.99<span>/ Per Session</span></p>
                       </div>
                       <div className="best_price_box_list">
                        <ul className="about_our_schol_ul">
                            <li>72 LIVE Personal Yoga Training sessions.</li>
                            <li>6-Months Premium Access to the Our App.</li>
                            <li>Customized Diet Plans as Per Your Body
                                Type and Lifestyle.</li>
                        </ul>
                       </div>
                       <div className="best_price_box_btn">
                            <button type="button" className="btn btn-primary"><span>+</span>Get Started Now</button>
                       </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="best_price_box">
                       <div className="best_price_box_title text-center">
                            <h4>Private Plan</h4>
                            <p><span>$</span>120.99<span>/ Per Session</span></p>
                       </div>
                       <div className="best_price_box_list">
                        <ul className="about_our_schol_ul">
                            <li>72 LIVE Personal Yoga Training sessions.</li>
                            <li>6-Months Premium Access to the Our App.</li>
                            <li>Customized Diet Plans as Per Your Body
                                Type and Lifestyle.</li>
                                <li>Money-back Guarantee During the First 30
                                    Days of the Plan.</li>
                            </ul>
                       </div>
                       <div className="best_price_box_btn">
                            <button type="button" className="btn btn-primary"><span>+</span>Get Started Now</button>
                       </div>
                    </div>
                </div>
            </div>
            <div className="faq_bottom_title text-center">
               
                <div className="faq_bottom_title text-center">
                    <h4>Get More Information</h4>
                    <div className="faq_bottom_title_box d-flex justify-content-between">
                        <div className="faq_call_outer first d-flex">
                            <div className="faq_call">
                                <img src={call} alt="call"/>
                            </div>
                            <div className="faq_call_detail">
                               
                                <p><a href="tel:+44 123 456 7890" className="number_faq"><span className="call_us">Call Us on</span> +44 123 456 7890</a></p>
                            </div>
                        </div>
                        <div className="faq_call_outer  d-flex">
                            <div className="faq_call">
                                <img src={mail} alt="call"/>
                            </div>
                            <div className="faq_call_detail">
                              
                               <p><a href="mailto:trooyoga@email.com"><span className="email_us">Email Us on</span>trooyoga@email.com</a></p> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default PricingComponent