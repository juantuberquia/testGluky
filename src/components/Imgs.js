import React from "react";
import like from "../images/like.png";

const Imgs = ({ url, text, likes }) => {
  return (
    <div className="w-50 w-50 mx-auto mb-3 mt-3">
      <div className="card">
        <p className="text-center font-weight-bold text-capitalize">{text}</p>
        <div>
          <img src={url} alt="img" className="card-img-top w-100" />
        </div>
        <div className="card-body">
          <img src={like} alt="img-like"></img>
          <span className="card-text"> {likes} </span>
        </div>
      </div>
    </div>
  );
};

export default Imgs;
