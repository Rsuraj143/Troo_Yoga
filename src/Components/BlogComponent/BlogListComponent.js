import React from "react";
import "./BlogComponent.css";
import { BlogData } from "./BlogData";
import { Link, createSearchParams } from "react-router-dom";

const BlogListComponent = () => {
  return (
    <section class="class_List_wrapper blog_list_pg mob">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="classes_workshop_title_outer m-auto text-center">
              <div class="smal_title smal_mid">
                <h5>Check Our News and Blogs</h5>
              </div>
              <div class="classes_workshop_title">
                <h2>
                  We Are Sharing Our
                  <span>Knowledge & Experience</span>
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          {BlogData.map((e, i) => (
            <div class="col-lg-12" key={i}>
              <div class="class_list_box d-flex">
                <div class="clas_list_img">
                  <img src={e.img2} alt="Blogs" />
                </div>
                <div class="class_list_date">
                  <p>{e.date} </p>
                </div>
                <div class="class_list_detail_outer">
                  <div class="class_list_title">
                    <h4>{e.name}</h4>
                  </div>
                  <div class="class_list_content">
                    <p>{e.para2}</p>
                  </div>
                  <div class="class_list_detial">
                    <div class="class_workshop_detail_box_sub_detail d-flex">
                      <div class="lass_workshop_detail_box_sub_1">
                        <p>{e.by} </p>
                      </div>
                    </div>
                  </div>
                 <Link to={`/Home/Blogs/Blog_Details?${createSearchParams({id : e.id})}`}>
                 <div class="class_list_btn">
                    <button type="button" class="btn btn-primary">
                      <span>+</span>
                      {e.btn}
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

export default BlogListComponent;
