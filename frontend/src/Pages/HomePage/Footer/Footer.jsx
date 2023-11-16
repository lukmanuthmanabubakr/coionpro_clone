import React from "react";
import { NavLink } from "react-router-dom";
import "./Footer.css";
import { LuTwitter } from "react-icons/lu";
import { BsInstagram } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";
import { HiOutlineArrowRight } from "react-icons/hi2";
import coinprofile_icon from "../../../Asset/coin_profile_image-removebg-preview.png";
const Footer = () => {
  return (
    <section className="footerSection">
      <div className="footerSectionOne">
        <div className="footerOne">
          <h2 className="easiest">
            The easiest way to save, spend and earn in Dollars
          </h2>

          <article className="myCommunityLink">
            <NavLink>
              <span className="iconArrow">
                <HiOutlineArrowRight size={35} />
              </span>
              <span className="myGotJob">Got questions? Talk to us</span>
            </NavLink>
            <NavLink>
              <span className="iconArrow">
                <HiOutlineArrowRight size={35} />
              </span>
              <span className="myGotJob">Join our community</span>
            </NavLink>
          </article>

          <article className="theMainCoin">
            <img src={coinprofile_icon} alt="coinprofile_icon" />
            <p className="coinprofileIc">coinprofile</p>
          </article>
        </div>
        <div className="footerTwo">
          <p className="learnMore">Learn more about Coinprofile</p>

          <div className="myAboutLegal">
            <ul>
              <NavLink><li>About Us</li></NavLink>
              <NavLink><li>Legal</li></NavLink>
              <NavLink><li>Resources</li></NavLink>
              <NavLink><li>Security</li></NavLink>
              <NavLink><li>Support</li></NavLink>
            </ul>
          </div>

          <p className="stayTouch">Stay in touch</p>

          <div className="myReachoutLink">
            <NavLink to="https://twitter.com/coinpHQ" target="_blank"> <LuTwitter size={50}/> </NavLink>
            <NavLink to="https://www.instagram.com/coinprofilehq/" target="_blank"> <BsInstagram size={50}/> </NavLink>
            <NavLink to="https://www.linkedin.com/company/coinprofile/" target="_blank"> <FaLinkedin size={50}/> </NavLink>
            <NavLink to="https://www.tiktok.com/@coinprofile" target="_blank"> <FaTiktok size={50}/> </NavLink>
          </div>

          <div className="addressNum">
              <p className="street">1209 Orange Street, Wilmington,</p>
              <p className="delwere">Delaware, United States.</p>
              <NavLink to="tel:+2349032024600">+2349032024600</NavLink>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Footer;
