import React from "react";
import {NavLink} from "react-router-dom";


// instead of props we simply use destructuring for acces data from Sdata//
const Card = ({imgsrc, title}) => {
  return (
    <>
      <div className="col-md-4 col-10 mx-auto">
        <div className="card">
          <img src={imgsrc} className="card-img-top" alt={imgsrc} />
          <div className="card-body">
            <h5 className="card-title font-weight-bold">{title}</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <NavLink to="/contact" className="btn">
              Go somewhere
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
