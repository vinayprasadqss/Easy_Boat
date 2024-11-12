import React from "react";
import img from "../../../assets/img/icons/success.png";
import "../../../assets/scss/pop.scss";

const SuccessPopup = () => {
  return (
    <div className="successPop">
      <div className="msg">
        <img src={img} alt="success" />
        <h4>Success !</h4>
        <p>You are now logged into your Account.</p>
        <button>Continue</button>
      </div>
    </div>
  );
};

export default SuccessPopup;
