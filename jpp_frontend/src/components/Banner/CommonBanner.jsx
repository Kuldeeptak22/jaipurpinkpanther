import React from "react";
import "./CommonBanner.scss";

const CommonBanner = (props) => {
  return (
    <div className="commonBannerRow">
      <div className="commonBanner">
        <h1>{props.Title}</h1>
      </div>
    </div>
  );
};

export default CommonBanner;
