import React, { useEffect, useState } from 'react'
import "./BackToTop.css"
import {BsArrowUpShort} from "react-icons/bs"

const BackToTop = () => {
  const [backToTopButton, setBackToTopButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if(window.scrollY > 100) {
        setBackToTopButton(true)
      }else{
        setBackToTopButton(false)
      }
    })
  }, [])

  const srollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }
  return (
    <div className='backToTop'>
      {backToTopButton && (
        <button className='backButton' onClick={srollUp}>
          <BsArrowUpShort />
        </button>
      )}
    </div>
  )
}

export default BackToTop
