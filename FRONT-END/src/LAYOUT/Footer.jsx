import React from 'react';
import Logo from "../assets/kingo-02.png";

const Footer = () => {
  return (
    <div>
      <div className="flex justify-between items-center w-full px-6 h-36 bg-[#000] footer">
        <div className="text-white ml-24">
          <img src={Logo} alt='logo' width={200}/>
        </div>

        <div className="siteNav">
          <ul className='space-x-4'>
            <li><a href='/'>Terms of use</a></li>
            <span className='text-white'>&#183;</span>
            <li><a href='/'>Privacy Policy</a></li>
            <span className='text-white'>&#183;</span>
            <li><a href='/'>Help Center</a></li>
            <span className='text-white'>&#183;</span>
            <li><a href='/'>FAQ</a></li>
            <span className='text-white'>&#183;</span>
            <li><a href='/'>Contact</a></li>
          </ul>
        </div>

        <div className="text-white justify-center items-center gap-2 mr-24">
          <div className="text-white justify-center items-start space-x-3">
            <a href="#" className="font-sans font-bold">Follow us:</a>
            <a href="#" className="fa fa-facebook hover:text-gray-400"></a>
            <a href="#" className="fa fa-twitter hover:text-gray-400"></a>
            <a href="#" className="fa fa-instagram hover:text-gray-400"></a>
            <a href="#" className="fa fa-linkedin hover:text-gray-400"></a>
          </div>
          <p>&#169; Ravillo Studios. 2023</p>
        </div>
      </div>
    </div>
  )
}

export default Footer