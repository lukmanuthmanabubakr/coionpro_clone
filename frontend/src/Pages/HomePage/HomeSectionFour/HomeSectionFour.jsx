import React from "react";
import "./HomeSectionFour.css";
import { LuTwitter } from "react-icons/lu";
import solaAkindolu from "../../../Asset/solaakidolu.webp";
import anthony from "../../../Asset/arinze_coin.webp";
import michael from "../../../Asset/michael_coin.webp";
import abubakr from "../../../Asset/abubakr_image-removebg-preview.png";
import { NavLink } from "react-router-dom";

const data = [
  {
    id: 1,
    description:
      "Coinprofile is a very well designed product.Love it, and recommend to anyone moving cash from US to NG",
    Name: "Sola Akindolu",
    subName: "@akindolu",
    twitter: <LuTwitter />,
    image: solaAkindolu,
    link: "https://twitter.com/akindolu/status/1625861912834482181?s=20",
  },
  {
    id: 2,
    description:
      "Coinprofile is an amazing service that has been invaluable to me as Nigerian in the NFT space, allowing me to sell quickly without hassle.",
    Name: "Anthony Azekwoh",
    subName: "@AnthonyAzekwoh",
    twitter: <LuTwitter />,
    image: anthony,
    link: "https://twitter.com/AnthonyAzekwoh/status/1467538304446914563?s=20&t=TPerr0sAXwighVKZuhdg1g",
  },
  {
    id: 3,
    description:
      "Using Coinprofile, I can send money from the U.K. to Nigeria in about 5-10 minutes.",
    Name: "Michael Ugwu",
    subName: "@iam_metamike",
    twitter: <LuTwitter />,
    image: michael,
    link: "https://twitter.com/iam_metamike/status/1426231073676083202",
  },
  {
    id: 4,
    description: "The new Coinprofile send flow feels like magic!!",
    Name: "Abubakr Lukman",
    subName: "@D__dEv__DiMEjI",
    twitter: <LuTwitter />,
    image: abubakr,
    link: "https://twitter.com/D__dEv__DiMEjI/status/1712202993267781800",
  },
];

const HomeSectionFour = () => {
  return (
    <section className="homeSectionFour">
      <p className="ourWord">
        <div data-aos="zoom-in">
        Don’t just take our <br /> word for it
        </div>
      </p>

      <div className="myDatalynis" data-aos="fade-up">
        {data.map(
          ({ id, Name, subName, twitter, image, link, description }, index) => {
            return (
              <div className="myDatalynisCard" key={index}>
                <NavLink target="_blank" to={link}>
                  <p className="description">{description}</p>

                  <div className="twiteere">
                    <div className="myImageContent">
                      <div>
                        <img src={image} />
                      </div>
                      <div className="nameSub">
                        <p className="name">{Name}</p>
                        <p className="subName">{subName}</p>
                      </div>
                    </div>
                    <div className="mytweet">{twitter}</div>
                  </div>
                </NavLink>
              </div>
            );
          }
        )}
      </div>
    </section>
  );
};

export default HomeSectionFour;
