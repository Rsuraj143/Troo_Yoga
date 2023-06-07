import React from "react";
import "./BlogComponent.css";
import blogBg1 from "../../images/news_blogs_bg_1.png";
import blogBg2 from "../../images/news_blogs_bg_2.png";
import { BlogData } from "./BlogData";
import { Link, createSearchParams } from "react-router-dom";

const BlogComponent = () => {
  return (
    <section className="news_blogs_wrapper">
      <div className="news_blogs_bg_1">
        <img src={blogBg1} alt="news_bg" />
      </div>
      <div className="news_blogs_bg_2">
        <img src={blogBg2} alt="news_bg" />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="classes_workshop_title_outer m-auto text-center">
              <div className="smal_title smal_mid">
                <h5>Check Our News and Blogs</h5>
              </div>
              <div className="classes_workshop_title">
                <h2>
                  We Are Sharing Our
                  <span>Knowledge & Experience</span>
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          {BlogData.slice(0, 3).map((e, i) => (
            <div className="col-lg-4" key={i}>
              <Link
                to={`/Home/Blogs/Blog_Details?${createSearchParams({
                  id: e.id,
                })}`}
              >
                <div className={e.classname}>
                  <div className="news_blogs_detail_box">
                    <h5>{e.name} </h5>
                    <p>{e.para}</p>
                  </div>
                  <div className="news_blogs_img_box">
                    <p>{e.date} </p>
                  </div>
                  <div className="news_blogs_img">
                    <img src={e.img} alt="news_blogs" />
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
        <div className="news_blogs_btn text-center ">
          <Link to="/Home/Blog_Lists">
          <button type="button" className="btn btn-primary">
            <span>+</span>Read All Our Blogs
          </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogComponent;
