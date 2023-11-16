import React from "react";
import "./HomeSectionThree.css";
import coinImg from "../../../Asset/coin_img.webp";
import coin_img_two from "../../../Asset/coin_img_two.webp";
import coin_img_three from "../../../Asset/coin_img_three.webp";

const HomeSectionThree = () => {
  return (
    <section className="homeSectionThree">
      <div className="homeSectionThreeContainer">
        <div className="homeSectionThreeFirst" data-aos="fade-right">
          <article>
            <p className="payOne">Pay anyone, instantly</p>
            <p className="anytime">Send and receive money anytime,</p>
            <p className="anyWhere"> anywhere it’s fast, free, and seamless.</p>
          </article>
          <article className="myCoinImage">
            <img src={coinImg} alt="coinImg" />
          </article>
        </div>

        <div className="homeSectionThreeSecond" data-aos="fade-left">
          <article>
            <img src={coin_img_two} alt="coinImg" />
          </article>
          <article>
            <p className="debitCard">
              Get a debit card to <br /> spend anywhere
            </p>
            <p className="spend">Spend effortlessly with your Coinprofile</p>
            <p className="currencies">card in 150+ currencies with no hidden</p>
            <p className="fees">fees</p>
          </article>
        </div>

        <div className="homeSectionThreeFirst" data-aos="fade-right">
          <article>
            <p  className="payOne">
              Receive Dollar <br /> payments at a go
            </p>
            <p className="anytime">Send and receive payments for</p>
            <p className="anyWhere">international gigs easy and fast.</p>
          </article>
          <article>
            <img src={coin_img_three} alt="coinImg" />
          </article>
        </div>
      </div>
    </section>
  );
};

export default HomeSectionThree;
