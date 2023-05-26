import React from "react";
import "./BlogDetails.css"
import blogDetails from "../../images/blog_detail.png"
import quote from "../../images/blog_detail_quote.png"
import blogDetails2 from "../../images/blog_detail_img_2.png"
import blogDetails3 from "../../images/blog_detail_img_3.png"
import yoga1 from "../../images/blog_detail_yoga_1.png"
import yoga2 from "../../images/blog_detail_yoga_2.png"
import yoga3 from "../../images/blog_detail_yoga_3.png"
import yoga4 from "../../images/blog_detail_yoga_4.png"
import {
    FaTwitter,
    FaFacebookF,
    FaLinkedinIn,
    FaInstagram,
  } from "react-icons/fa";

const BlogDetailsComponent = () => {
  return (
    <section class="yoga_beginners_wrapper blog_detail_pg">
      <div class="container">
        <div class="row">
          <div class="col-lg-8">
            <div class="yoga_beginners_left_side">
              <div class="yoga_beginners_img">
                <img
                  src={blogDetails}
                  alt="yoga_beginners_img"
                />
              </div>
              <div class="yoga_beginners_title">
                <h4>Supplements & Herbs / When & Why to Take Them</h4>
              </div>
              <div class="yoga_beginners_content">
                <p>
                  Lorem Ipsum is simply dummy text of the printin and
                  typesetting industry. Lorem Ipsum has been the industry’s
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged.
                </p>

                <p>
                  Lorem Ipsum is simply dummy text of the printin and
                  typesetting industry. Lorem Ipsum has been the industry’s
                  standard dummy text ever since the 1500s.
                </p>
              </div>
              <div class="yoga_beginners_verify_box d-flex">
                <div class="yoga_beginners_verify_outer d-flex">
                  <div class="yoga_beginners_verify_img">
                    <img
                      src={quote}
                      alt="verification"
                    />
                  </div>
                  <div class="yoga_beginners_right_side_box">
                    <div class="yoga_beginners_subtitle">
                      <p>- John Doe</p>
                    </div>
                    <div class="yoga_beginners_right_content">
                      <p>
                        Lorem ipsum dolor and it sit amet, consetetur
                        thsadipscing elitr, sed diam nonumy eirmod tempor Lorem
                        ipsum dolor and it sit amet, consetetur thsadipscing
                        elitr, sed diam nonumy eirmod tempor Lorem ipsum dolor
                        and it sit amet{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="yoga_sec_content">
                <p>
                  Lorem Ipsum is simply dummy text of the printin and
                  typesetting industry. Lorem Ipsum has been the industry’s
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries.
                </p>
              </div>
              <div class="yoga_begginer_checklist_outer d-flex">
                <div class="yoga_begginer_checkList_content">
                  <div class="about_our_scholl_list">
                    <ul class="about_our_schol_ul">
                      <li>
                        Lorem ipsum dolor sit amet, consectetur and it
                        adipiscing elit.
                      </li>
                      <li>
                        Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit.Lorem ipsum dolor sit amet.
                      </li>
                      <li>Lorem ipsum dolor sit amet.</li>
                      <li>Lorem ipsum dolor sit amet, consectetur.</li>
                      <li>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </li>
                      <li>Lorem ipsum dolor sit, adipiscing amet</li>
                    </ul>
                  </div>
                </div>
                <div class="yoga_begginer_checklist_img">
                  <img src={blogDetails2} alt="Yoga" />
                </div>
              </div>
              <div class="yoga_begginer_content_bottom">
                <p>
                  Lorem Ipsum is simply dummy text of the printin and
                  typesetting industry. Lorem Ipsum has been the industry’s
                  standard dummy text ever since the 1500s.Lorem Ipsum is simply
                  dummy text of the printin and typesetting industry. Lorem
                  Ipsum has been.
                </p>
              </div>

              <div class="yoga_beginners_verify_box d-flex">
                <div class="yoga_beginners_verify_outer d-flex">
                  <div class="yoga_beginners_verify_img">
                    <img
                      src={blogDetails3}
                      alt="verification"
                    />
                  </div>
                  <div class="yoga_beginners_right_side_box">
                    <div class="yoga_beginners_subtitle">
                      <p>About Auther</p>
                    </div>
                    <div class="yoga_beginners_right_content">
                      <p>
                        Lorem ipsum dolor and it sit amet, consetetur
                        thsadipscing elitr, sed diam nonumy eirmod tempor Lorem
                        ipsum dolor and it sit amet, consetetur thsadipscing
                        elitr, sed diam nonumy eirmod tempor Lorem ipsum dolor
                        and it sit amet{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="yoga_begginer_social_icon">
                <div class="hover_social_icon_team_box d-flex align-items-center justify-content-center">
                  <span>Share This Article:</span>
                  <div class="hover_social_icon_box">
                  <FaFacebookF />
                  </div>
                  <div class="hover_social_icon_box">
                  <FaTwitter />
                  </div>
                  <div class="hover_social_icon_box">
                  <FaInstagram />
                  </div>
                  <div class="hover_social_icon_box">
                  <FaLinkedinIn />
                  </div>
                </div>
              </div>
              <div class="comt">
                <h4>Comments (0)</h4>
                <p>Submit a Comment</p>
              </div>
              <div class="yoga_begginer_left_side_form_parts">
                <form>
                  <div class="form-group col-lg-12">
                    <label for="inputname">Enter Your Name</label>
                    <input
                      type="text"
                      class="form-control"
                      id="inputname"
                      placeholder="John Doe"
                    />
                  </div>
                  <div class="form-group col-lg-12">
                    <label for="inputemail">Enter Your Email</label>
                    <input
                      type="email"
                      class="form-control"
                      id="inputemail"
                      placeholder="iamjohndoe@email.com"
                    />
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
                  <div class="col-lg-12 form-check">
                    <input
                      type="checkbox"
                      class="form-check-input"
                      id="exampleCheck1"
                    />
                    <label class="form-check-label" for="exampleCheck1">
                      {" "}
                      Save my name, email, and website in this browser for the
                      next time I comment.
                    </label>
                  </div>
                  <div class="form_submit_btn">
                    <button type="submit" class="btn btn-primary">
                      Add Comment +
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="yoga_beginners_right_side">
              <div class="yoga_beginners_right_side_box_1">
                <h4>Details</h4>
                <div class="yoga_begginer_name_list ">
                  <p>
                    Auther:<span>Admin</span>
                  </p>
                  <p>
                    Posted Date:<span>22 October, 2022</span>
                  </p>
                  <p>
                    Category:<span>Fitness</span>
                  </p>
                </div>
              </div>
              <div class="yoga_beginners_right_side_box_1 two">
                <h4>Blog Categories</h4>
                <div class="yoga_begginer_name_list">
                  <p>
                    Yoga:<span>33</span>
                  </p>
                  <p>
                    Fitness:<span>Trainer</span>10
                  </p>
                  <p>
                    Healthy Life:<span> 08</span>
                  </p>
                  <p>
                    Maditation:<span> 04</span>
                  </p>
                  <p>
                    Lifestyle:<span> 04</span>
                  </p>
                  <p>
                    Nature:<span>05</span>
                  </p>
                  <p>
                    Uncategorized:<span>20</span>
                  </p>
                </div>
              </div>
              <div class="yoga_beginners_right_side_box_1 two">
                <h4>Tags</h4>
                <div class="yoga_begginer_name_list d-flex">
                  <div class="yoga_begginer_name_side_box">
                    <p>Yoga</p>
                  </div>
                  <div class="yoga_begginer_name_side_box">
                    <p> Mental-Health</p>
                  </div>
                  <div class="yoga_begginer_name_side_box">
                    <p>Meditation</p>
                  </div>
                </div>
                <div class="yoga_begginer_name_list two d-flex">
                  <div class="yoga_begginer_name_side_box">
                    <p>Health</p>
                  </div>
                  <div class="yoga_begginer_name_side_box">
                    <p>Lifystyle</p>
                  </div>
                  <div class="yoga_begginer_name_side_box">
                    <p>Fitness</p>
                  </div>
                  <div class="yoga_begginer_name_side_box">
                    <p>Peace</p>
                  </div>
                </div>
              </div>
              <div class="yoga_beginners_right_side_box_1 box_2">
                <h4>Related Class</h4>
                <div class="yoga_beginners_right_side_box_2 d-flex">
                  <div class="yoga_beginners_right_side_box_2_img">
                    <img
                      src={yoga1}
                      alt="related_img_1"
                    />
                  </div>
                  <div class="yoga_beginners_right_side_box_2_content">
                    <p>Staying in Your Exercise Routine on Vacation</p>
                    <span>By: Elina Ekman</span>
                  </div>
                </div>
                <div class="yoga_beginners_right_side_box_2 d-flex">
                  <div class="yoga_beginners_right_side_box_2_img">
                    <img
                       src={yoga2}
                      alt="related_img_1"
                    />
                  </div>
                  <div class="yoga_beginners_right_side_box_2_content">
                    <p>Lessons in Love: Practical Advice from the Yoga Mat</p>
                    <span>By: Lily Garner</span>
                  </div>
                </div>
                <div class="yoga_beginners_right_side_box_2 d-flex">
                  <div class="yoga_beginners_right_side_box_2_img">
                    <img
                       src={yoga3}
                      alt="related_img_1"
                    />
                  </div>
                  <div class="yoga_beginners_right_side_box_2_content">
                    <p>Start Your Yoga Journey & Set Your Soul on Fiii-yahhh</p>
                    <span>By: Erick Roven</span>
                  </div>
                </div>
                <div class="yoga_beginners_right_side_box_2 d-flex">
                  <div class="yoga_beginners_right_side_box_2_img">
                    <img
                       src={yoga4}
                      alt="related_img_1"
                    />
                  </div>
                  <div class="yoga_beginners_right_side_box_2_content">
                    <p>Dr. Recognition of Yoga as a reatment for Anxiety</p>
                    <span>By: Razan Smith</span>
                  </div>
                </div>
                <div class="yoga_beginner_right_side_box_1_btn">
                  <button type="button" class="btn btn-primary">
                    <span>+</span> Go to Blog Page
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogDetailsComponent;
