import React, { useState } from "react";
import coingLogos from "../../../Asset/coin_profile_image-removebg-preview.png";
import { NavLink } from "react-router-dom";
import "./Verify.css"


const Verify = () => {


  return (
    <div className="verify">
      <div className="myLogins">
        <NavLink to="/">
          <img src={coingLogos} alt="coinprofile logo" />
        </NavLink>

        <p className="sign-in">Very Account</p>

        <div className="loginForm">
          <button className="signInButton">Verify Account</button>
        </div>
      </div>
    </div>
  );
};

export default Verify;

