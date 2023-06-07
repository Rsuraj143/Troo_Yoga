import React from "react";
import "./ServiceListComponent.css";
import { ServiceData } from "./ServiceData";
import { Link, createSearchParams } from "react-router-dom";

const ServiceListComponent = () => {
  return (
    <section className="class_List_wrapper">
      <div class="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="classes_workshop_title_outer m-auto text-center">
              <div className="smal_title smal_mid">
                <h5>Classes &amp; Workshops</h5>
              </div>
              <div className="classes_workshop_title">
                <h2>
                  Classes Ranging From
                  <span>Beginner to Advanced</span>
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          {ServiceData.map((e, i) => (
            <div className="col-lg-12" key={i}>
              <div className="class_list_box d-flex">
                <div className="clas_list_img">
                  <img src={e.img2} alt="class List" />
                </div>
                <div className="class_list_detail_outer">
                  <div className="class_list_title">
                    <h4>{e.name} </h4>
                  </div>
                  <div className="class_list_content">
                    <p>{e.para}</p>
                  </div>
                  <div className="class_list_detial">
                    <div className="class_workshop_detail_box_sub_detail d-flex">
                      <div className="lass_workshop_detail_box_sub_1">
                        <p>{e.cls} </p>
                      </div>
                      <div className="lass_workshop_detail_box_sub_1">
                        <p>{e.day} </p>
                      </div>
                      <div className="lass_workshop_detail_box_sub_1">
                        <p>{e.status} </p>
                      </div>
                    </div>
                  </div>
                  <Link to={`/Home/Classes/Classes_Details?${createSearchParams({id : e.id})}`}>
                  <div className="class_list_btn">
                    <button type="button" class="btn btn-primary">
                      <span>+</span> {e.btn}
                    </button>
                  </div>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceListComponent;
