import React from "react";
import "../../assets/scss/login.scss";
import img1 from "../../assets/img/Login_banner.png";
import img2 from "../../assets/img/login_circle.png";
import img3 from "../../assets/img/logo_login.png";
import SuccessPopup from "./popups/SuccessPopup";
import CancelPopup from "./popups/CancelPop";

const Login = () => {
  return (
    <section className="login">
      <div className="login_container">
        <div className="login_left">
          <div className="login_image">
            <img src={img1} alt="img" />
            <div className="layer"></div>
          </div>
          <div className="login-content">
            <img src={img3} />
            <div className="circle"></div>
            <h2>
              Why Choose <span>EASYBOAT</span>?
            </h2>
            <p>
              It allows boat owners to easily connect with authorized service
              providers for a variety of services, including same-day on-demand
              service, scheduled service for a future date, and recurring order
              options.{" "}
            </p>
          </div>
        </div>
        <div className="login_right">
          <div className="login_form">
            <div className="login_head">
              <h2>
                Welcome To <span>EASYBOAT</span>
              </h2>
              <h6>Login</h6>
            </div>
            <div className="login-form-control">
              <label>Email Address</label>
              <div className="input-group">
                <i className="bx bxs-envelope"></i>
                <input type="email" placeholder="Email Address" />
              </div>
            </div>
            <div className="login-form-control">
              <label>Password</label>
              <div className="input-group">
                <i class="bx bx-lock-alt"></i>
                <input type="password" placeholder="Password" />
              </div>
            </div>
            <div className="line">
              <div className="l1">
                <input className="checkbox" type="checkbox" />
                <p>Remember Me</p>
              </div>
              <div className="l2">
                <a href="#">Forgot Password?</a>
              </div>
            </div>
            <button>Sign In</button>
          </div>
        </div>
      </div>
      {/* <SuccessPopup /> */}
      {/* <CancelPopup /> */}
    </section>
  );
};

export default Login;
