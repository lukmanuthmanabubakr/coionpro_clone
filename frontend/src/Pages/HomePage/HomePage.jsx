import React from 'react'
import Navbar from './Navbar/Navbar'
import HomeSectionOne from './HomeSectionOne/HomeSectionOne'
import HomeSectionTwo from './HomeSectionTwo/HomeSectionTwo'
import HomeSectionThree from './HomeSectionThree/HomeSectionThree'
import HomeSectionFour from './HomeSectionFour/HomeSectionFour'
import HomeSectionFive from './HomeSectionFive/HomeSectionFive'
import Footer from './Footer/Footer'
import BackToTop from '../../BackToTop/BackToTop'

const HomePage = () => {
  return (
    <div>
        <Navbar />
        <HomeSectionOne />
        <HomeSectionTwo/>
        <HomeSectionThree/>
        <HomeSectionFour/>
        <HomeSectionFive/>
        <Footer/>
        <BackToTop/>
    </div>
  )
}

export default HomePage