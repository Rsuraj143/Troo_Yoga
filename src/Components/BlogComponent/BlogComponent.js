import React from 'react'
import "./BlogComponent.css"
import blogBg1 from "../../images/news_blogs_bg_1.png"
import blogBg2 from "../../images/news_blogs_bg_2.png"
import blogImg from "../../images/news_blogs+img_1.png"

const BlogComponent = () => {
  return (
    <section class="news_blogs_wrapper">
        <div class="news_blogs_bg_1">
            <img src={blogBg1} alt="news_bg"/>
        </div>
        <div class="news_blogs_bg_2">
            <img src={blogBg2} alt="news_bg"/>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="classes_workshop_title_outer m-auto text-center">
                        <div class="smal_title smal_mid">
                            <h5>Check Our News and Blogs</h5>
                        </div>
                        <div class="classes_workshop_title">
                            <h2>We Are Sharing Our
                                <span>Knowledge &
                                    Experience</span>
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-4">
                    <div class="news_blogs_box">
                        <div class="news_blogs_detail_box">
                            <h5>Supplements & Herbs / When & Why to Take Them</h5>
                            <p>Lorem ipsum dolor sit or it isamet, consectetur
                                adipiscing elit, sed do  and this eiusmod tempor
                                incididunt.
                            </p>
                        </div>
                        <div class="news_blogs_img_box">
                            <p>18 Aug, 2022</p>
                        </div>
                        <div class="news_blogs_img">
                            <img src={blogImg} alt="news_blogs"/>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="news_blogs_box second">
                        <div class="news_blogs_img">
                            <img src={blogImg} alt="news_blogs"/>
                        </div>
                        <div class="news_blogs_detail_box second">
                            <h5>Staying in Your Exercise  Routine on Vacation</h5>
                            <p>Lorem ipsum dolor sit or it isamet, consectetur
                                adipiscing elit, sed do  and this eiusmod tempor
                                incididunt.
                            </p>
                        </div>
                        <div class="news_blogs_img_box">
                            <p>17 Aug, 2022</p>
                        </div>
                       
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="news_blogs_box">
                        <div class="news_blogs_detail_box">
                            <h5>Start Your Yoga Journey &   Set Your Soul on Fiii-yahhh</h5>
                            <p>Lorem ipsum dolor sit or it isamet, consectetur
                                adipiscing elit, sed do  and this eiusmod tempor
                                incididunt.
                            </p>
                        </div>
                        <div class="news_blogs_img_box">
                            <p>16 Aug, 2022</p>
                        </div>
                        <div class="news_blogs_img">
                            <img src={blogImg} alt="news_blogs"/>
                        </div>
                    </div>
                </div>
            </div>
            <div class="news_blogs_btn text-center ">
                <button type="button" class="btn btn-primary"><span>+</span>Read All Our Blogs</button>
            </div>
        </div>
    </section>
  )
}

export default BlogComponent