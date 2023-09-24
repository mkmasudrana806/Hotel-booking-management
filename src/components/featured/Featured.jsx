import React from "react";
import "./featured.css";

const Featured = () => {
  return (
    <div>
      <div className="featured">
        <div className="featuredItem">
          <img
            className="featuredImg"
            src="https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
          />
          <div className="featuredtitles">
            <h1>Dublin</h1>
            <h2>123 properties</h2>
          </div>
        </div>
        <div className="featuredItem">
          <img
            className="featuredImg"
            src="https://images.pexels.com/photos/1370704/pexels-photo-1370704.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
          />
          <div className="featuredtitles">
            <h1>Austin</h1>
            <h2>99 properties</h2>
          </div>
        </div>
        <div className="featuredItem">
          <img
            className="featuredImg"
            src="https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
          />
          <div className="featuredtitles">
            <h1>Reno</h1>
            <h3>533 properties</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
