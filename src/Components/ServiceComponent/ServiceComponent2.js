import React from "react";
import "./ServiceComponent.css";
import { ServiceData } from "./ServiceData";
import { Link, createSearchParams } from "react-router-dom";

const ServiceComponent2 = () => {
  return (
    <section className="classes_workshop_wrapper">
      <div className="container">
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
          {ServiceData.slice(0, 3).map((e, i) => (
            <div className="col-lg-4" key={i}>
              <Link
                to={`/Home/Classes/Classes_Details?${createSearchParams({
                  id: e.id,
                })}`}
              >
                   <div className="class_workshop_box">
                  <div className="class_workshop_img">
                    <img src={e.img} alt="classes_1" />
                  </div>
                  <div className="class_workshop_detail_outer">
                    <div className="class_workshop_detail_box_title text-center">
                      <h4>{e.name} </h4>
                    </div>
                    <div className="class_workshop_detail_box_sub_detail d-flex justify-content-center">
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
                </div>
              </Link>
            </div>
          ))}
        </div>
        <div className="row">
          {ServiceData.slice(3, 6).map((e, i) => (
            <div className="col-lg-4" key={i}>
              <Link
                to={`/Home/Classes/Classes_Details?${createSearchParams({
                  id: e.id,
                })}`}
              >
                <div className="class_workshop_box">
                  <div className="class_workshop_img">
                    <img src={e.img} alt="classes_1" />
                  </div>
                  <div className="class_workshop_detail_outer">
                    <div className="class_workshop_detail_box_title text-center">
                      <h4>{e.name} </h4>
                    </div>
                    <div className="class_workshop_detail_box_sub_detail d-flex justify-content-center">
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
                </div>
              </Link>
            </div>
          ))}
        </div>
        <div className="row">
          {ServiceData.slice(6, 9).map((e, i) => (
            <div className="col-lg-4" key={i}>
              <Link
                to={`/Home/Classes/Classes_Details?${createSearchParams({
                  id: e.id,
                })}`}
              >
                <div className="class_workshop_box">
                  <div className="class_workshop_img">
                    <img src={e.img} alt="classes_1" />
                  </div>
                  <div className="class_workshop_detail_outer">
                    <div className="class_workshop_detail_box_title text-center">
                      <h4>{e.name} </h4>
                    </div>
                    <div className="class_workshop_detail_box_sub_detail d-flex justify-content-center">
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
                </div>
              </Link>
            </div>
          ))}
        </div>
        <div className="row">
          {ServiceData.slice(9, 12).map((e, i) => (
            <div className="col-lg-4" key={i}>
              <Link
                to={`/Home/Classes/Classes_Details?${createSearchParams({
                  id: e.id,
                })}`}
              >
                <div className="class_workshop_box">
                  <div className="class_workshop_img">
                    <img src={e.img} alt="classes_1" />
                  </div>
                  <div className="class_workshop_detail_outer">
                    <div className="class_workshop_detail_box_title text-center">
                      <h4>{e.name} </h4>
                    </div>
                    <div className="class_workshop_detail_box_sub_detail d-flex justify-content-center">
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
                </div>
              </Link>
            </div>
          ))}
        </div>
        <div className="row">
          {ServiceData.slice(12, 15).map((e, i) => (
            <div className="col-lg-4" key={i}>
              <Link
                to={`/Home/Classes/Classes_Details?${createSearchParams({
                  id: e.id,
                })}`}
              >
                <div className="class_workshop_box">
                  <div className="class_workshop_img">
                    <img src={e.img} alt="classes_1" />
                  </div>
                  <div className="class_workshop_detail_outer">
                    <div className="class_workshop_detail_box_title text-center">
                      <h4>{e.name} </h4>
                    </div>
                    <div className="class_workshop_detail_box_sub_detail d-flex justify-content-center">
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
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceComponent2;
