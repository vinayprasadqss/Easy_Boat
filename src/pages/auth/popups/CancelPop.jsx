import React from "react";
import img from "../../../assets/img/icons/cancel.png";
import "../../../assets/scss/pop.scss";

const CancelPopup = () => {
  return (
    <div className="cancelPop">
      <div className="msg">
        <img src={img} alt="success" />
        <h4>Failed!</h4>
        <p>Your Email Address or Password is wrong.</p>
        <button>Try Again</button>
      </div>
    </div>
  );
};

export default CancelPopup;
