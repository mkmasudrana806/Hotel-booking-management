import React from "react";
import "./featuredProperties.css";
const FeaturedProperties = () => {
  return (
    <div className="fp">
      <div className="fpItem">
        <img
          src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=400"
          alt=""
          className="fpImg"
        />
        <h3 className="fpName">Aparthotel Stare Miasto</h3>
        <span className="fpCity">Old Town, Poland, Kraków</span>
        <span className="fpPrice">Starting from BDT 15, 089</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>

      <div className="fpItem">
        <img
          src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=400"
          alt=""
          className="fpImg"
        />
        <h3 className="fpName">Aparthotel Stare Miasto</h3>
        <span className="fpCity">Old Town, Poland, Kraków</span>
        <span className="fpPrice">Starting from BDT 15, 089</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=400"
          alt=""
          className="fpImg"
        />
        <h3 className="fpName">Aparthotel Stare Miasto</h3>
        <span className="fpCity">Old Town, Poland, Kraków</span>
        <span className="fpPrice">Starting from BDT 15, 089</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProperties;
