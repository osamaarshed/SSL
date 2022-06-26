import React from "react";
import "./Banner.css";
import banner from "../images/Banner.png";

function Banner(props) {
  // const bannerStyle = {
  //   filter: "opacity(0.5) drop-shadow(0 0 0 #06252c)",
  // };
  return (
    <>
      <div className="banner-pic">
        <img
          src={banner}
          className="img-fluid"
          alt="banner"
          // style={bannerStyle}
        />
      </div>
    </>
  );
}

export default Banner;
