import React, { useEffect, useState } from 'react';
import Basic from '../assets/Basic.png';
import Pro from '../assets/Pro.png';
import Business from '../assets/Business.png';
import firebase from "../FIREBASE/FirebaseConfig"
import Footer from './Footer';
import Logo from "../assets/kingo-02.png";



const data = [
  {
    id: 1,
    src: Basic,
    title: "Unavailable",
    subtitle: "1 Session/wk",
    info: "Perfect for the clock chasers. This plan affords you the liberty to take on a session when and where it’s most convenient for you.",
    price: "99"
  },

  {
    id: 2,
    src: Pro,
    title: "Manager",
    subtitle: "3 Sessions/wk",
    info: "For you who have just enough time to spare. An asynchronous plan, providing the flexibility to learn at your optimal time. ",
    price: "129"
  },

  {
    id: 3,
    src: Business,
    title: "EyeRed",
    subtitle: "4 Sessions/wk",
    info: "You have time and you have it in abundance. Let's make maximum use of it. This plan could see you become a Pro in less time.",
    price: "149"
  },
]

const Pricing = () => {

  const [userId, setUserId] = useState("");
  const [userName, setUserName] = useState("");
  const [planType, setPlanType] = useState("");


  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setUserId(user.uid);
        setUserName(user.displayName);
      }
      else {
        setUserId("");
        setUserName("");
      }
    })

  }, [userId]);


  const checkout = (plan) => {
    fetch("http://localhost:5000/api/v1/create-subscription-checkout-session", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      mode: "cors",
      body: JSON.stringify({ plan: plan, customerId: userId })
    })
      .then((res) => {
        if (res.ok) return res.json();
        console.log(res);
        return res.json().then((json) => Promise.reject(json));
      })
      .then(({ session }) => {
        window.location = session.url;
      })
      .catch((e) => {
        console.log(e.error);
      })
  }


  return (

    <>
      <div className="flex flex-col items-center w-full mx-auto min-h-screen overflow-x-hidden plan-pg">

        <div className="flex justify-between items-center w-full px-6 h-20 navbar-plan nav-menu">

          <div className="flex justify-center navbar-logo">
            <a className="nav-logo" href='/'><img src={Logo} alt='' className="logo" /></a>
          </div>

          <div className="nav-bar">
            <button className="nav-btn"><a className="mx-2" href='/pricing'>Plans</a></button>
            <button className="nav-btn"><a className="mx-2" href='/contact'>Contact</a></button>
          </div>

          <div className="flex justify-center items-center gap-2">
            {
              !userId ? (<div className='login-bar'><a href="/login" className="bg-white px-4 py-2 w-auto rounded-lg text-[#000] font-semibold nav-login nav-btn">
                Login
              </a></div>) : (

                <div className="flex justify-center items-center space-x-4 login-bar">
                  <span className="text-white text-xl ml-2">{userName}</span>
                  <button onClick={() => firebase.auth().signOut()} className="bg-white px-4 py-2 w-auto rounded-lg text-base font-semibold text-[#000] nav-btn">
                    Logout
                  </button>
                </div>)
            }
          </div>
        </div>

        <div className="items-center text-center justify-center mt-24 mx-auto w-2/4">
          <h1 className="text-5xl font-extrabold">There's a place for you here, just find the right time.</h1>
          <p className="text-xl pt-4">Choose a plan that's suitable for your availability</p>
        </div>

        <div className="grid lg:grid-cols-3 sm:grid-cols-2  grid-cols-1 gap-6 z-50 place-items-center w-9/12 mx-auto mt-16 mb-24">
          {data.map((item, idx) => (
            <div key={idx}
              className="bg-white px-6 py-8 rounded-xl w-full mx-auto grid place-items-center shadow-2xl">
              <img src={item.src} alt="" className="h-40 mb-8" />
              <div className="text-4xl text-white text-center py-4 font-bold bg-[#2b3436] shadow-xl py-4 px-8 rounded-full">{item.title}</div>
              <p className="lg:text text-center text-xl px-6 pb-6 pt-8 text-slate-500 font-bold sub-t">
                {item.subtitle}
              </p>

              <p className="lg:text-sm text-xs text-center px-6 text-slate-500">
                <span className='text-green-500'> &#10003; </span> {item.info}
              </p>

              <div className="text-6xl text-blue text-center font-bold py-4">
                <sup className='sup-txt'>$</sup>{item.price}<sup className='sup-txt'>.00/m</sup>
              </div>

              <div className="mx-auto flex text-center justify-center items-center my-3">
                <button onClick={() => checkout(Number(item.price))} className="text-base w-24 py-2 select-btn">
                  Select
                </button>

              </div>
            </div>
          ))}
        </div>

        <div className='grid grid-cols-3 place-items-center gap-5 mb-24 bg-white py-10 w-3/4 shadow-xl rounded-2xl'>
          <div className='font-bold text-3xl pb-[10rem]'>
            All Plans include:
          </div>

          <div>
            <div className="flex justify-center items-center pb-4">
              <div className=" w-8 h-8 text-white bg-black flex rounded-full justify-center items-center mr-2">&#10003;</div>
              <div className="flex-initial w-64 ">Latest Software</div>
            </div>

            <div className="flex justify-center items-center pb-4">
              <div className=" w-8 h-8 text-white bg-black flex rounded-full justify-center items-center mr-2">&#10003;</div>
              <div className="flex-initial w-64 ">Playback of Recorded Sessions</div>
            </div>

            <div className="flex justify-center items-center pb-4">
              <div className=" w-8 h-8 text-white bg-black flex rounded-full justify-center items-center mr-2">&#10003;</div>
              <div className="flex-initial w-64 ">Relevant Design Resources</div>
            </div>

            <div className="flex justify-center items-center pb-4">
              <div className=" w-8 h-8 text-white bg-black flex rounded-full justify-center items-center mr-2">&#10003;</div>
              <div className="flex-initial w-64 ">Relevant Learning Resources</div>
            </div>

          </div>


          <div>
            <div className="flex justify-center items-center pb-4">
              <div className=" w-8 h-8 text-white bg-black flex rounded-full justify-center items-center mr-2">&#10003;</div>
              <div className="flex-initial w-64 ">Priority support</div>
            </div>

            <div className="flex justify-center items-center pb-4">
              <div className=" w-8 h-8 text-white bg-black flex rounded-full justify-center items-center mr-2">&#10003;</div>
              <div className="flex-initial w-64 ">Personalized plan for you</div>
            </div>

            <div className="flex justify-center items-center pb-4">
              <div className=" w-8 h-8 text-white bg-black flex rounded-full justify-center items-center mr-2">&#10003;</div>
              <div className="flex-initial w-64 ">Creative Support</div>
            </div>

            <div className="flex justify-center items-center pb-4">
              <div className=" w-8 h-8 text-white bg-black flex rounded-full justify-center items-center mr-2">&#10003;</div>
              <div className="flex-initial w-64 ">Best Practice Handbook</div>
            </div>

          </div>

        </div>

      </div>

      <Footer />
    </>
  )
}




export default Pricing