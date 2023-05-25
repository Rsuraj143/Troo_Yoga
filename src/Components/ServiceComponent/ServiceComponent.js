import React from 'react'
import "./ServiceComponent.css"
import class1 from "../../images/classes_1.png"
import class2 from "../../images/classes_2.png"
import class3 from "../../images/classes_3.png"
import class4 from "../../images/classes_4.png"
import class5 from "../../images/classes_5.png"
import class6 from "../../images/classes_6.png"


const ServiceComponent = () => {
  return (
    <section class="classes_workshop_wrapper">
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                <div class="classes_workshop_title_outer m-auto text-center">
                    <div class="smal_title smal_mid">
                        <h5>Classes & Workshops</h5>
                    </div>
                    <div class="classes_workshop_title">
                        <h2>Classes Ranging From
                            <span>Beginner to Advanced</span>
                        </h2>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-4">
                <div class="class_workshop_box">
                    <div class="class_workshop_img">
                        <img src={class1} alt="classes_1"/>
                    </div>
                    <div class="class_workshop_detail_outer">
                        <div class="class_workshop_detail_box_title text-center">
                            <h4>Yoga To Realize And Love Yourself</h4>
                        </div>
                        <div class="class_workshop_detail_box_sub_detail d-flex justify-content-center">
                            <div class="lass_workshop_detail_box_sub_1">
                                <p>5 Classes</p>
                            </div>
                            <div class="lass_workshop_detail_box_sub_1">
                                <p>15 Days</p>
                            </div>
                            <div class="lass_workshop_detail_box_sub_1">
                                <p>Beginner </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div class="col-lg-4">
                <div class="class_workshop_box">
                    <div class="class_workshop_img">
                    <img src={class2} alt="classes_1"/>
                    </div>
                    <div class="class_workshop_detail_outer">
                        <div class="class_workshop_detail_box_title text-center">
                            <h4>Free Style Yoga For Stress Relieves</h4>
                        </div>
                        <div class="class_workshop_detail_box_sub_detail d-flex justify-content-center">
                            <div class="lass_workshop_detail_box_sub_1">
                                <p>5 Classes</p>
                            </div>
                            <div class="lass_workshop_detail_box_sub_1">
                                <p>15 Days</p>
                            </div>
                            <div class="lass_workshop_detail_box_sub_1">
                                <p>Beginner </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div class="col-lg-4">
                <div class="class_workshop_box">
                    <div class="class_workshop_img">
                    <img src={class3} alt="classes_1"/>
                    </div>
                    <div class="class_workshop_detail_outer">
                        <div class="class_workshop_detail_box_title text-center">
                            <h4>Yoga Poses For Inner Acceptance</h4>
                        </div>
                        <div class="class_workshop_detail_box_sub_detail d-flex justify-content-center">
                            <div class="lass_workshop_detail_box_sub_1">
                                <p>5 Classes</p>
                            </div>
                            <div class="lass_workshop_detail_box_sub_1">
                                <p>15 Days</p>
                            </div>
                            <div class="lass_workshop_detail_box_sub_1">
                                <p>Beginner </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-4">
                <div class="class_workshop_box">
                    <div class="class_workshop_img">
                    <img src={class4} alt="classes_1"/>
                    </div>
                    <div class="class_workshop_detail_outer">
                        <div class="class_workshop_detail_box_title text-center">
                            <h4>Flow Yoga To Energize Our Body</h4>
                        </div>
                        <div class="class_workshop_detail_box_sub_detail d-flex justify-content-center">
                            <div class="lass_workshop_detail_box_sub_1">
                                <p>5 Classes</p>
                            </div>
                            <div class="lass_workshop_detail_box_sub_1">
                                <p>15 Days</p>
                            </div>
                            <div class="lass_workshop_detail_box_sub_1">
                                <p>Beginner </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div class="col-lg-4">
                <div class="class_workshop_box">
                    <div class="class_workshop_img">
                    <img src={class5} alt="classes_1"/>
                    </div>
                    <div class="class_workshop_detail_outer">
                        <div class="class_workshop_detail_box_title text-center">
                            <h4>Welcome To The World Of Yoga</h4>
                        </div>
                        <div class="class_workshop_detail_box_sub_detail d-flex justify-content-center">
                            <div class="lass_workshop_detail_box_sub_1">
                                <p>5 Classes</p>
                            </div>
                            <div class="lass_workshop_detail_box_sub_1">
                                <p>15 Days</p>
                            </div>
                            <div class="lass_workshop_detail_box_sub_1">
                                <p>Beginner </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div class="col-lg-4">
                <div class="class_workshop_box">
                    <div class="class_workshop_img">
                    <img src={class6} alt="classes_1"/>
                    </div>
                    <div class="class_workshop_detail_outer">
                        <div class="class_workshop_detail_box_title text-center">
                            <h4>Yoga For Better And Healthy Living</h4>
                        </div>
                        <div class="class_workshop_detail_box_sub_detail d-flex justify-content-center">
                            <div class="lass_workshop_detail_box_sub_1">
                                <p>5 Classes</p>
                            </div>
                            <div class="lass_workshop_detail_box_sub_1">
                                <p>15 Days</p>
                            </div>
                            <div class="lass_workshop_detail_box_sub_1">
                                <p>Beginner </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        <div class="classes_workshop_btn text-center">
            <button type="button" class="btn btn-primary"><span>+</span>View All Classes</button>
        </div>
    </div>
</section>
  )
}

export default ServiceComponent