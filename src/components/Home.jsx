import React from "react";
import { Link } from "react-router-dom";
// import web from "../bg.jpeg";
import "./Home.css";

const Home = () => {
  return (
    <section id="#header" className="home">
      <div className="container-fluid nav_bg">
        <div className="row">
          <div
            className="col-lg-12 order-1 order-lg-2 header-img"
            style={{
              backgroundSize: "cover",
              height: "100vh",
              paddingTop: "50px",
            }}
          >
            <nav>
              <div class="navicon">
                <div></div>
              </div>

              <a>Welcome To Virtual Wardrobe</a>
            </nav>
            <div className="txt">
              <h1>
                Feel Organized without the Effort with{" "}
                <strong className="bn">Virtual Wardrobe</strong>{" "}
              </h1>
              <div className="my-3">
                <Link to="/wardrobe">
                  <button className="button">
                    <div className="pattern">
                      <div className="target inner bg4"></div>
                    </div>
                    <div className="text">Get Started</div>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;