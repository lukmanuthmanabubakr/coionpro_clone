import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./HomeSectionOne.css";
import { NavLink } from "react-router-dom";
import { GoVerified } from "react-icons/go";
import { MdOutlinePhoneAndroid, MdArrowRight } from "react-icons/md";
import celo from "../../../Asset/celomomo.webp"
import combinator from "../../../Asset/combine.webp"
import flori from "../../../Asset/flori.webp"

const HomeSectionOne = () => {
  useEffect(() => {
    AOS.init({duration: "1000", delay: "500"})
  }, [])
  return (
    <div className="homeSectionOne">
      <div className="homeSectionOneContainer">
        <div className="homeSectionOneSave" data-aos="fade-right">
          <p className="spend">
            Save, spend and earn in <br /> dollars
          </p>

          <div className="goVerified">
            <p className="money">
              <article className="myArticle">
                <GoVerified />
              </article>
              <span>Send</span> and receive money from anywhere
            </p>
            <p className="money">
              <article className="myArticle">
                <GoVerified />
              </article>
              <span>Spend </span> internationally with your USD card
            </p>
            <p className="money">
              <article className="myArticle">
                <GoVerified />
              </article>
              <span>Save </span> and stash your Dollars without worries
            </p>
          </div>

          <div className="getVid">
            <NavLink className="toGet">
              
              <span>
                
                <MdOutlinePhoneAndroid />
              </span>
              Get the app
            </NavLink>
            <NavLink className="works" >
              
              <span>
                
                <MdArrowRight />
              </span>
              See how it works
            </NavLink>
          </div>
        </div>
        <div className="secondContainer" data-aos="fade-left"></div>
      </div>
      
      <div className="backBy" data-aos="zoom-in">
        <p className="by">Backed by</p>
        <NavLink target="_blank" to="https://celo.org/alliance">
        <img src={celo} alt="celo" />
        </NavLink>
        <NavLink target="_blank" to="https://www.ycombinator.com/companies/payourse">
        <img src={combinator} alt="combinator" />
        </NavLink>
        <NavLink target="_blank" to="https://www.floriventures.com/community">
        <img src={flori} alt="flori" />
        </NavLink>
      </div>
    </div>
  );
};

export default HomeSectionOne;
