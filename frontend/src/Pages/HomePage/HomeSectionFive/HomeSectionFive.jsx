import React from 'react'
import "./HomeSectionFive.css"
import coinpro_chat from "../../../Asset/coinpro_chat-removebg-preview.png"
import protection from "../../../Asset/protection_coin-removebg-preview.png"
import padlock from "../../../Asset/padlock_coin-removebg-preview.png"

const data = [
  {
    id: 1,
    customerImage: coinpro_chat,
    firstContent: "24/7 support",
    secondContent: "We're always here to help"
  },
  {
    id: 2,
    customerImage: protection,
    firstContent: "Fraud Protection",
    secondContent: "We follow AML/KYC standards"
  },
  {
    id: 3,
    customerImage: padlock,
    firstContent: "Secure",
    secondContent: "With 2FA, only you can access your account"
  },
]

const HomeSectionFive = () => {
  return (
    <section className='homeSectionFive'>
        <p className='countOnMe'>You can count on us</p>
        <p className='passionate'>We’re passionate about making everyday financial life of <br/> our customers as easy, seamless and delightful as possible.</p>
        <div className='homeFiveOne' data-aos="fade-up">
          {data.map(({id, customerImage, firstContent, secondContent}, index) => {
            return(
              <div key={index} className='myhomeFiveIndex'>
                <img src={customerImage} alt="images" />
                <p className='firstContent'>{firstContent}</p>
                <p className='secondContent'>{secondContent}</p>
              </div>
            )
          })}
        </div>
    </section>
  )
}

export default HomeSectionFive