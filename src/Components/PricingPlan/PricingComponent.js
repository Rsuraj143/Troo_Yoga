import React from 'react'
import "./PricingComponent.css"
import call from "../../images/call.png"
import mail from "../../images/mail.png"

const PricingComponent = () => {
  return (
    <section class="best_price_plane">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="classes_workshop_title_outer m-auto text-center">
                        <div class="smal_title smal_mid">
                            <h5>Pricing Packages</h5>
                        </div>
                        <div class="classes_workshop_title">
                            <h2>Choose your best price plan
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-4">
                    <div class="best_price_box">
                       <div class="best_price_box_title text-center">
                            <h4>Standard Plan</h4>
                            <p><span>$</span>34.00<span>/ Per Session</span></p>
                       </div>
                       <div class="best_price_box_list">
                        <ul class="about_our_schol_ul">
                            <li>36 LIVE Personal Yoga Training sessions.</li>
                            <li>3-Months Premium Access to the Our App.</li>
                        </ul>
                       </div>
                       <div class="best_price_box_btn">
                            <button type="button" class="btn btn-primary"><span>+</span>Get Started Now</button>
                       </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="best_price_box">
                       <div class="best_price_box_title text-center">
                            <h4>Professional Plan</h4>
                            <p><span>$</span>79.99<span>/ Per Session</span></p>
                       </div>
                       <div class="best_price_box_list">
                        <ul class="about_our_schol_ul">
                            <li>72 LIVE Personal Yoga Training sessions.</li>
                            <li>6-Months Premium Access to the Our App.</li>
                            <li>Customized Diet Plans as Per Your Body
                                Type and Lifestyle.</li>
                        </ul>
                       </div>
                       <div class="best_price_box_btn">
                            <button type="button" class="btn btn-primary"><span>+</span>Get Started Now</button>
                       </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="best_price_box">
                       <div class="best_price_box_title text-center">
                            <h4>Private Plan</h4>
                            <p><span>$</span>120.99<span>/ Per Session</span></p>
                       </div>
                       <div class="best_price_box_list">
                        <ul class="about_our_schol_ul">
                            <li>72 LIVE Personal Yoga Training sessions.</li>
                            <li>6-Months Premium Access to the Our App.</li>
                            <li>Customized Diet Plans as Per Your Body
                                Type and Lifestyle.</li>
                                <li>Money-back Guarantee During the First 30
                                    Days of the Plan.</li>
                            </ul>
                       </div>
                       <div class="best_price_box_btn">
                            <button type="button" class="btn btn-primary"><span>+</span>Get Started Now</button>
                       </div>
                    </div>
                </div>
            </div>
            <div class="faq_bottom_title text-center">
               
                <div class="faq_bottom_title text-center">
                    <h4>Get More Information</h4>
                    <div class="faq_bottom_title_box d-flex justify-content-between">
                        <div class="faq_call_outer first d-flex">
                            <div class="faq_call">
                                <img src={call} alt="call"/>
                            </div>
                            <div class="faq_call_detail">
                               
                                <p><a href="tel:+44 123 456 7890" class="number_faq"><span class="call_us">Call Us on</span> +44 123 456 7890</a></p>
                            </div>
                        </div>
                        <div class="faq_call_outer  d-flex">
                            <div class="faq_call">
                                <img src={mail} alt="call"/>
                            </div>
                            <div class="faq_call_detail">
                              
                               <p><a href="mailto:trooyoga@email.com"><span class="email_us">Email Us on</span>trooyoga@email.com</a></p> 
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