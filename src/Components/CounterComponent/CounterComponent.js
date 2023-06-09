import React, { useState } from "react";
import "./CounterComponent.css";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const CounterComponent = () => {
  const [counter, setCounter] = useState(false);
  return (
    <section className="counter_outer">
      <div className="container">
        <div className="counter">
          <div className="row">
            <div className="col-12 col-lg-3">
              <div className="counter_box">
                <div className="counter_img">
                  <svg
                    width="50"
                    height="50"
                    viewBox="0 0 50 50"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.6667 29.1665C16.6667 29.1665 19.7917 33.3332 25 33.3332C30.2083 33.3332 33.3333 29.1665 33.3333 29.1665M35.4167 19.2498C34.5937 20.2602 33.4687 20.8332 32.2917 20.8332C31.1146 20.8332 30.0208 20.2602 29.1667 19.2498M20.8333 19.2498C20.0104 20.2602 18.8854 20.8332 17.7083 20.8332C16.5312 20.8332 15.4375 20.2602 14.5833 19.2498M45.8333 24.9998C45.8333 36.5058 36.5059 45.8332 25 45.8332C13.4941 45.8332 4.16666 36.5058 4.16666 24.9998C4.16666 13.4939 13.4941 4.1665 25 4.1665C36.5059 4.1665 45.8333 13.4939 45.8333 24.9998Z"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <div className="count-up">
                  <ScrollTrigger
                    onEnter={() => setCounter(true)}
                    onExit={() => setCounter(false)}
                    className="counter-count"
                  >
                    {counter && (
                      <CountUp start={800} end={1260} duration={3} delay={0} />
                    )}
                    <span>+</span>
                  </ScrollTrigger>
                  {/* <p class="counter-count">1260</p>
                  <span>+</span> */}
                  <div class="counter_title">
                    <p>Happy Clients</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-3">
              <div className="counter_box">
                <div className="counter_img">
                  <svg
                    width="50"
                    height="50"
                    viewBox="0 0 50 50"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.393 32.208L14.5833 45.8332L24.1425 40.0977C24.4543 39.9106 24.6102 39.8171 24.7766 39.7805C24.9238 39.7482 25.0762 39.7482 25.2234 39.7805C25.3898 39.8171 25.5457 39.9106 25.8575 40.0977L35.4167 45.8332L33.6082 32.2021M34.2206 8.85167C34.5423 9.62984 35.1599 10.2484 35.9376 10.5713L38.6644 11.7008C39.4426 12.0232 40.0609 12.6415 40.3832 13.4197C40.7056 14.1979 40.7056 15.0724 40.3832 15.8506L39.2546 18.5756C38.9321 19.3541 38.9316 20.2294 39.2556 21.0076L40.3823 23.7318C40.5421 24.1173 40.6244 24.5304 40.6245 24.9477C40.6245 25.3649 40.5424 25.7781 40.3827 26.1636C40.223 26.5491 39.989 26.8994 39.6939 27.1944C39.3988 27.4894 39.0485 27.7233 38.6629 27.8829L35.9381 29.0116C35.1599 29.3334 34.5414 29.951 34.2185 30.7287L33.089 33.4556C32.7666 34.2338 32.1484 34.8521 31.3702 35.1745C30.592 35.4968 29.7176 35.4968 28.9394 35.1745L26.2145 34.0457C25.4363 33.7242 24.5622 33.7248 23.7845 34.0476L21.0576 35.1755C20.2799 35.4971 19.4063 35.4968 18.6287 35.1747C17.8511 34.8526 17.2332 34.2351 16.9106 33.4577L15.7808 30.7299C15.4591 29.9518 14.8415 29.3332 14.0638 29.0103L11.337 27.8808C10.5591 27.5585 9.94103 26.9406 9.61857 26.1629C9.29611 25.3851 9.29567 24.5111 9.61735 23.733L10.746 21.008C11.0676 20.2297 11.0669 19.3556 10.7442 18.5779L9.61714 15.849C9.45735 15.4635 9.37507 15.0504 9.375 14.6331C9.37493 14.2159 9.45708 13.8027 9.61675 13.4172C9.77643 13.0317 10.0105 12.6814 10.3056 12.3864C10.6007 12.0914 10.951 11.8575 11.3365 11.6979L14.0614 10.5692C14.8389 10.2477 15.457 9.63088 15.7802 8.85409L16.9097 6.12714C17.232 5.34892 17.8503 4.73062 18.6285 4.40827C19.4067 4.08592 20.281 4.08592 21.0592 4.40827L23.7841 5.537C24.5624 5.85855 25.4364 5.8579 26.2141 5.53517L28.9421 4.41002C29.7202 4.08785 30.5944 4.08791 31.3725 4.4102C32.1505 4.73249 32.7687 5.35061 33.0911 6.12863L34.2209 8.85639L34.2206 8.85167Z"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <div className="count-up">
                  <ScrollTrigger
                    onEnter={() => setCounter(true)}
                    onExit={() => setCounter(false)}
                    className="counter-count"
                  >
                    {counter && (
                      <CountUp start={0} end={25} duration={3} delay={0} />
                    )}
                    <span>+</span>
                  </ScrollTrigger>
                  {/* <p class="counter-count">25</p>
                  <span>+</span> */}
                  <div className="counter_title">
                    <p>Year Experience</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-3">
              <div className="counter_box">
                <div className="counter_img">
                  <svg
                    width="50"
                    height="50"
                    viewBox="0 0 50 50"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M25 26.0415C28.4518 26.0415 31.25 23.2433 31.25 19.7915C31.25 16.3397 28.4518 13.5415 25 13.5415C21.5482 13.5415 18.75 16.3397 18.75 19.7915C18.75 23.2433 21.5482 26.0415 25 26.0415Z"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M25 45.8332C29.1667 37.4998 41.6667 32.1212 41.6667 20.8332C41.6667 11.6284 34.2048 4.1665 25 4.1665C15.7953 4.1665 8.33334 11.6284 8.33334 20.8332C8.33334 32.1212 20.8333 37.4998 25 45.8332Z"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <div className="count-up">
                  <ScrollTrigger
                    onEnter={() => setCounter(true)}
                    onExit={() => setCounter(false)}
                    className="counter-count"
                  >
                    {counter && (
                      <CountUp start={10} end={60} duration={3} delay={0} />
                    )}
                    <span>+</span>
                  </ScrollTrigger>
                  {/* <p class="counter-count">13</p>
                  <span>+</span> */}
                  <div className="counter_title">
                    <p>World Wide Branches</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-3">
              <div className="counter_box">
                <div className="counter_img">
                  <svg
                    width="50"
                    height="50"
                    viewBox="0 0 50 50"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.0756 40.4965C12.343 37.5107 15.3019 35.4165 18.75 35.4165H31.25C34.6981 35.4165 37.657 37.5107 38.9244 40.4965M33.3334 19.7915C33.3334 24.3939 29.6024 28.1248 25 28.1248C20.3976 28.1248 16.6667 24.3939 16.6667 19.7915C16.6667 15.1891 20.3976 11.4582 25 11.4582C29.6024 11.4582 33.3334 15.1891 33.3334 19.7915ZM45.8334 24.9998C45.8334 36.5058 36.506 45.8332 25 45.8332C13.4941 45.8332 4.16669 36.5058 4.16669 24.9998C4.16669 13.4939 13.4941 4.1665 25 4.1665C36.506 4.1665 45.8334 13.4939 45.8334 24.9998Z"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <div className="count-up">
                  <ScrollTrigger
                    onEnter={() => setCounter(true)}
                    onExit={() => setCounter(false)}
                    className="counter-count"
                  >
                    {counter && (
                      <CountUp start={100} end={230} duration={3} delay={0} />
                    )}
                    <span>+</span>
                  </ScrollTrigger>
                  {/* <p class="counter-count">230</p>
                  <span>+</span> */}
                  <div className="counter_title">
                    <p>In-house Staffs</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CounterComponent;
