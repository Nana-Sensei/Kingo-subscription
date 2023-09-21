import React from 'react';
import { Parallax } from 'react-parallax';

const About = () => {
  return (
    <Parallax strength={800} className='abbt-para'>
      <div className="flex flex-col items-center w-full mx-auto text-center about-section">
        <div className="w-3/4">
          <h1>
            We teach you design <br/> and how to use it.
          </h1>
          <h2 className="about-sub-text mb-10">
           Learn the basics of graphic design, or refine your skills with one-on-one 
           tutorials tailored to inspire. Create anything you can imagine.
          </h2>
        </div>

        <div className="flex items-center w-full mx-auto text-center design-apps">

          <div className="des-app"><button className="app-name">Adobe Photoshop</button></div>
          <div className="des-app"><button className="app-name">Adobe Illustrator</button></div>
          <div className="des-app"><button className="app-name">Adobe InDesign</button></div>
          <div className="des-app"><button className="app-name">Adobe Lightroom</button></div>

        </div>
      </div>


      
    </Parallax>
  )
}

export default About