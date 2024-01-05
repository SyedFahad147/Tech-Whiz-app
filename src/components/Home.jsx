import React from "react";
import { NavLink } from 'react-router-dom';
import web from "../images/img2.svg";
const Home = () => {
  return (
    <>
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-3 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h1>
                    Grow Your Business with <strong className="brand-name">TechWhiz</strong>
                  </h1>
                  <h2 className="my-3">
                    We are the team of talented developers making websites
                  </h2>
                  <div className="mt-3">
                    <NavLink to="/about" className="btn">
                    Get Started
                    </NavLink>
                  </div>
                </div>
                <div className="col-lg-6  order-1 order-lg-2 header-img">
                  <img
                    src={web}
                    className="image-fluid animated"
                    alt="home img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
