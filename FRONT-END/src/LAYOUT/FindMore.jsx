import { motion, useTransform, useScroll } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { Parallax } from 'react-parallax';
import Vid from "../assets/Vid-pb.png";
import Img1 from "../imgs/1.jpg"
import Img2 from "../imgs/2.jpg"
import Img3 from "../imgs/3.jpg"
import Img4 from "../imgs/4.jpg"
import Img5 from "../imgs/5.jpg"
import Img6 from "../imgs/6.jpg"


const FindMore = () => {

  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleCardClick = (index) => {
    setExpandedIndex(index === expandedIndex ? -1 : index)
  }

  const cardVariants = {
    expanded: {
      width: "400px",
    },

    collapsed: {
      width: "200px"
    }
  }

  const cardImages = [Img1, Img2, Img3, Img4, Img5, Img6];

  const cardTitle = [
    "Richard, 2023",
    "Eli, 2023",
    "Baaba, 2023",
    "Leeford, 2023",
    "Selasi, 2023",
    "Emelia, 2023",
  ]

  const cardDes = [
    "Flyer Design",
    "Photo Retouching",
    "Image Compositing",
    "Photo Manipulation",
    "Typography Design",
    "Flyer Design",
  ]

  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);



  return (

    <section className="pt-8 bg-black">

      <div className="bg-[#000] py-12">
        <div className="flex h-48 items-center justify-center">
          <Parallax strength={800} className="step-para">
            <span className="font-semibold uppercase">
              <p className="text-2xl font-black uppercase text-center text-[#fff]">Are you ready to step up?</p>
              <h3 className="p-4 text-5xl font-black uppercase text-center text-[#fff]" >Don't take our word for it.<br />
                See works from previous users.
              </h3>
            </span>
          </Parallax>
        </div>
      </div>

      {/* <div className="max-w-7xl mx-auto py-12">
        <h1 className="text-2xl font-extrabold text-[#fff]">Featured Something</h1>
        <p className="mt-4 text-xl text-gray-300">Check out our works</p>
      </div> */}

      <div className="mb-8 flex flex-col md:flex-row justify-center items-center gap-5 pt-12">
        {[0, 1, 2, 3, 4, 5].map((index) => (
          <motion.div
            key={index}
            className={`card cursor-pointer h-[500px] bg-cover bg-center rounded-[20px] ${index === expandedIndex ? 'expanded' : ""}`}
            variants={cardVariants}
            initial='collapsed'
            animate={index === expandedIndex ? 'expanded' : 'collapsed'}
            transition={{ duration: 0.5 }}
            onMouseOver={() => { handleCardClick(index) }}
            style={{
              backgroundImage: `url(${cardImages[index]})`,
            }}>
            <div className="card-content h-full flex flex-col justify-end">
              <div className="card-footer  rounded-xl bg-black min-h-[90px] bg-opacity-90 flex flex-col items-center justify-center">
                <h2 className="text-xl font-semibold text-white text-center">{cardTitle[index]}</h2>
                {index === expandedIndex && (
                  <p className="text-gray-300 text-center">{cardDes[index]}</p>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <Parallax strength={800} >
        <div className="flex h-80 items-center justify-around p-36 mt-16 bg-[#ffc727]">
          <div className=""><img src={Vid} width={500} /></div>
          <span className="font-semibold uppercase text-white">
            <h3 className="p-4 text-4xl font-black uppercase text-white text-center playback">Get playback of recorded<br /> videos after
              each session.
            </h3>
          </span>

          <div onClick={() => { window.scrollTo({ top: 0, left: 0, behavior: 'smooth' }); }} class="down-arrow">
            <i class="fa-solid fa-angle-up"></i>
          </div>
        </div>
      </Parallax>


    </section>
  )
}

export default FindMore;


