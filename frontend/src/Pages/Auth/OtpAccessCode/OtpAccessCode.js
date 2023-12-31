import React, { useState } from "react";
import "../Login/Login.css";
import coingLogos from "../../../Asset/coin_profile_image-removebg-preview.png";
import { NavLink } from "react-router-dom";
import "./OtpAccessCode.css"

const initialState = {
  email: "",
};

const OtpAccessCode = () => {
  const [formData, setFormData] = useState(initialState);
  const { loginCode } = formData;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const loginUser = () => {};

  return (
    <div className="otpAccessCode">
      <div className="myLogins">
        <NavLink to="/">
          <img src={coingLogos} alt="coinprofile logo" />
        </NavLink>

        <p className="sign-in">Enter Access Code</p>

        <form onSubmit={loginUser} className="loginForm">
          <input
            className="emailInput"
            type="text"
            placeholder="Access Code"
            required
            name="loginCode"
            value={loginCode}
            onChange={handleInputChange}
          />
          <p className="emailAccessCode">
            Check your email for login access code
          </p>
          <button className="signInButton">Proceed To Login</button>
        </form>

        <p className="emailRespond">
          Didn't get the email? <b>Click to respond</b>
        </p>

        <p className="PrivacyPolicy">
          By creating an account, you accept our <NavLink target="_blank" to="https://base.coinprofile.com/legal/terms-of-service">Terms of use</NavLink> and <NavLink target="_blank" to="https://base.coinprofile.com/legal/privacy-policy">Privacy Policy</NavLink>
        </p>
      </div>
    </div>
  );
};

export default OtpAccessCode;

