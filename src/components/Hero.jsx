import React from "react";
import "./hero.css";
import playImage from "./assets/image/play.gif";
import grainIcon from "./assets/image/google.png";
import profile from "./assets/image/farmer_a.png";
import calendarIcon from "./assets/image/calendar.png";
import tech from "./assets/image/tech.png";
import marketIcon from "./assets/image/market.gif";
import correctIcon from "./assets/image/correct.svg";
import infectionIcon from "./assets/image/sum.png";
// import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div>
      <div className="hero_container">
        <section className="welcome_sctn">
          <div className="extra-img-bg"></div>

          <div className="section_container">
            <div className=" home-text">
              <div className="slogan_sctn text-wrap">
                <span className="dark-slogan-text">
                  Find your next top tech job in 1 week.
                </span>
                <br />
                <span className="light-slogan-text">
                  {" "}
                  Are you a top 2% Software Engineer, Product Manager or Data
                  Scientist?
                </span>
              </div>

              <div className="mission-text">
                <p>
                  <br />
                  Let leading Indian technology companies compete to hire you.
                </p>
              </div>

              <button className="btn btn-primary btn-gradient">
                <span>Find your</span>{" "}
                <span className="fw-bolder">next job</span>
              </button>
              <img src={playImage} alt="Play" className="play-btn" />
            </div>
            <div className="img-bg"></div>
          </div>

          <div className="hero-card-ishubh">
            <div className="card-ishubh">
              <div className="card-icon-ishub">
                <img src={profile} alt="/" />
              </div>
              <div className="card-content-ishub">
                <h3 className="card-heading-ishub">
                  <a href="/Phome" style={{ textDecoration: "none" }}>
                    COMPLETE PROFILE
                  </a>{" "}
                </h3>
                <p className="card-info-ishub">
                  Once you are approved, we showcase you to leading Indian
                  technology startups
                </p>
              </div>
            </div>

            <div className="card-ishubh">
              <div className="card-icon-ishub">
                <img src={calendarIcon} alt="/" />
              </div>
              <div className="card-content-ishub">
                <h3 className="card-heading-ishub">RECEIVE JOB OFFERS</h3>
                <p className="card-info-ishub">
                  Companies start sending interview requests. Talk to only the
                  ones you like.
                </p>
              </div>
            </div>

            <div className="card-ishubh">
              <div className="card-icon-ishub">
                <img src={marketIcon} alt="/" />
              </div>
              <div className="card-content-ishub">
                <h3 className="card-heading-ishub"> ACCEPT DREAM JOB</h3>
                <p className="card-info-ishub">
                  Compare your offers and accept the best one. Hired!
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="second-section">
          {/* <h1 className="fw-bolder  text-center"></h1> */}
          <div className="section_container">
            <div className="overview-page">
              <div className="card-body">
                <p
                  className="fw-bold h3"
                  style={{ color: "var(  --primary-color)" }}
                >
                  30,00,000+ professionals from 16,500
                </p>
                <p>companies are cutting short their path to success</p>

                <div
                  className="card-ishubh sub-card mb-1 border-bottom"
                  style={{ boxShadow: "none" }}
                >
                  <div className="card-icon-ishub">
                    <img src={correctIcon} alt="" />
                  </div>
                  <div className="card-content-ishub">
                    <h3 className="card-heading-ishub">130K + Tech Jobs</h3>
                    <p className="card-info-ishub">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                      Sit accusantium, dignissimos nostrum ullam animi ut?
                    </p>
                  </div>
                </div>

                <div
                  className="card-ishubh sub-card"
                  style={{ boxShadow: "none" }}
                >
                  <div className="card-icon-ishub">
                    <img src={correctIcon} alt="" />
                  </div>
                  <div className="card-content-ishub">
                    <h3 className="card-heading-ishub">
                      8M + Startup-ready candidates
                    </h3>
                    <p className="card-info-ishub">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Quaerat vero culpa dolores mi repellendus!
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="sub-option">
              {/* cards for crop info */}

              <div className="card-sctn">
                <div className="img-icon d-flex justify-content-center align-items-center mb-3">
                  <img
                    className="card-img "
                    src={grainIcon}
                    alt="/"
                    style={{ height: "80px", width: "80px" }}
                  />
                </div>
                <p className="card-text text-center text-white">
                  <h5 className="card-title mb-3 fw-bolder">
                    <a
                      href="/fff"
                      style={{
                        textDecoration: "none",
                        color: "white",
                        fontWeight: "bold",
                        fontSize: "20px",
                      }}
                    >
                      Google
                    </a>
                  </h5>
                  Concise crop overview: essential details and characteristics
                  provided.ergfwse
                </p>
              </div>

              <div className="card-sctn">
                <div className="img-icon d-flex justify-content-center align-items-center mb-3">
                  <img
                    className="card-img "
                    src={infectionIcon}
                    alt="/"
                    style={{ height: "80px", width: "80px" }}
                  />
                </div>
                <p className="card-text text-center text-white">
                  <h5 className="card-title mb-3 fw-bolder">Samsung</h5>
                  detection, prevention, and treatment strategies implemented.
                </p>
              </div>

              <div className="card-sctn">
                <div className="img-icon d-flex justify-content-center align-items-center mb-3">
                  <img
                    className="card-img "
                    src={tech}
                    alt="/" 
                    style={{ height: "80px", width: "80px" }}
                  />
                </div>
                <p className="card-text text-center text-white">
                  <h5 className="card-title mb-3 fw-bolder">Tech</h5>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>    
        </section>
      </div>
    </div>
  );
}
