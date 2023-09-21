import React from 'react';
import heroImg from "../assets/IM_01.png"
import { useNavigate } from 'react-router-dom';




const Hero = () => {

  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `/pricing`; 
    navigate(path);
  }

  return (
    <div className="container flex flex-col items-center w-full mx-auto min-h-screen overflow-x-hidden">
      <section id="heroSection" className="hero--section">
        <div className="hero--section--content--box pl-16">
          <div className="hero--section--content">
            <h1 className="hero--section--title">
              <span className="hero--section-title--color">
                You know what you want to accomplish.
              </span>{" "}
            </h1>
            <p className="hero--section-description">
              Let's teach you how.
            </p>
          </div>
          <button onClick={routeChange} className="start-btn btn btn-primary rounded-xl px-4 py-2 ">Get started <span className='arrow'>&#8594;</span></button>
        </div>
        <div className="hero--section--img">
          <img src={heroImg} alt="Hero Section" />
        </div>
      </section>
    </div >
  )
}

export default Hero