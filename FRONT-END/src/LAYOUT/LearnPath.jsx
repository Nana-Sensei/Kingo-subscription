import React from 'react';
import {Link} from "react-router-dom"
import Px1 from "../assets/AI-01.jpg";
import Px2 from "../assets/AI-02.jpg";
import Px3 from "../assets/AI-03.jpg";
import Px4 from "../assets/AI-04.jpg";

const LearnPath = () => {
  return (
    <section className="hover-section w-full">
      <div className="hover-header">
        <h3 >Learning Paths</h3>
        <button style={{width:"230px"}} className="start-btn btn btn-primary rounded-xl px-4 py-2 my-16">
          <a href="https://calendly.com/">Book a discovery call<span className='arrow'>&#8594;</span></a></button>
      </div>

      <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-30 z-50 place-items-center hover">
        <div className="hover-card">
          <div className="hover-image">
            <img src={Px1} alt="" />
          </div>
          <div className="hover-text">
            <h4>TYPOGRAPHY</h4>
            <p>Smaller text goes here too</p>
          </div>
        </div>

        <div className="hover-card">
          <div className="hover-image">
            <img src={Px2} alt="" />
          </div>
          <div className="hover-text">
            <h4>COLOURS</h4>
            <p>Smaller text goes here too</p>
          </div>
        </div>

        <div className="hover-card">
          <div className="hover-image">
            <img src={Px3} alt="" />
          </div>
          <div className="hover-text">
            <h4>WORKING WITH IMAGES</h4>
            <p>Smaller text goes here too</p>
          </div>
        </div>

        <div className="hover-card">
          <div className="hover-image">
            <img src={Px4} alt="" />
          </div>
          <div className="hover-text">
            <h4>LAYOUT & COMPOSITION</h4>
            <p>Smaller text goes here too</p>
          </div>
        </div>

      </div>
    </section>
  )
}

export default LearnPath