import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./HomeSectionTwo.css"
import {BsSendFill} from "react-icons/bs"
import {AiOutlineCreditCard} from "react-icons/ai"
import {FiPercent} from "react-icons/fi"



const data = [
  {
    id: 1,
    icon: <BsSendFill/>,
    title: "Send",
    description: "Pay anyone, instantly"
  },
  {
    id: 2,
    icon: <AiOutlineCreditCard/>,
    title: "Spend",
    description:`Get a debit card to spend anywhere`
  },
  {
    id: 3 ,
    icon: <FiPercent/>,
    title: "Earn",
    description: "Receive Dollar payments at a go"
  },
]

const HomeSectionTwo = () => {
  return (
    <section className='homeSectionTwo'>
      <div className='sendSpend' data-aos="zoom-in">
        <p className='earn'>Send, spend and earn <br/> with crypto and cash</p>
        <p className='crypto'>Live your life on crypto. Make day-to-day spending a <br/> breeze with cash any time you need it</p>
      </div>
      <div className='myContainer' data-aos="fade-up">
        {data.map(({id, icon, title, description}, index) => {
          return (
            <div className='card' key={index}>
              <div className='icon'>
                {icon}
              </div>
              <div className='title'>
                {title}
              </div>
              <div className='description'>
                {description}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default HomeSectionTwo