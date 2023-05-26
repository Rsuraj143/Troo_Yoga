import React from 'react'
import "./Banner.css"

const BannerGlobal = () => {
  return (
    <section class="breadcrumb_wrapper">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="./index.html">Home</a></li>
                        <li class="breadcrumb-item active" aria-current="page">About Us</li>
                      </ol>
                      <div class="breadcrumb_outer">
                        <h2>TRooYoga School and Academy</h2>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default BannerGlobal