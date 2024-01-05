import React from 'react';
import { NavLink } from 'react-router-dom';
import pic from '../images/img3.svg';
const About = () => {
  return (
    <>
       <section id="about" className="d-flex align-items-center">
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-3 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h1>
                    <strong className="brand-name">About US</strong>
                  </h1>
                  <p className="my-3">
                  Welcome to TechWhiz, where innovation meets expertise! At TechWhiz, 
                  we are more than just a tech company – we are a community of excellent 
                  passionate developers,designers,and problem solvers on a mission to transform 
                  ideas into exceptional digital experiences.
                  </p>
                  <div className="mt-3">
                    <NavLink to="/service" className="btn">
                    What We Offer
                    </NavLink>
                  </div>
                </div>
                <div className="col-lg-6  order-1 order-lg-2 about-img">
                  <img
                    src={pic}
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
}

export default About;
