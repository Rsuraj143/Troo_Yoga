import React from "react";
import "./ContactComponent.css"

const GoogleMap = () => {
  return (
    <section class="contact_us_map_wrapper">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="contct_form_map text-center">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.8850349918985!2d72.49642611542339!3d23.027993021903114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9b278e046fa5%3A0xd837def63555f791!2sTRooInbound%20Private%20Limited!5e0!3m2!1sen!2sin!4v1674649284683!5m2!1sen!2sin"
                width="600"
                height="450"
                style={{ border: "0" }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                title="gmap"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoogleMap;
