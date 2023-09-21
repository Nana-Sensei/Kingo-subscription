import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import About from './About'
import LearnPath from './LearnPath'
import AboutPara from './Parallax/AboutPara'
import WhyPara from './Parallax/WhyPara'
import FindMore from './FindMore'
import Footer from './Footer'


const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutPara />
      <About />
      <WhyPara />
      <LearnPath />
      <FindMore />
      <Footer />

    </>
  )
}

export default Home