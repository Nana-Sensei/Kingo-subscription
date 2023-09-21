import React, { useEffect, useState } from 'react';
import firebase from "../FIREBASE/FirebaseConfig"
import Logo from "../assets/kingo-02.png";


const Navbar = () => {


  const [userId, setUserId] = useState("");
  const [userName, setUserName] = useState("");

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

  const handleLogOut = () => {
    firebase.auth().signOut()
  }

  return (
    <>

      <div>
        <nav className="flex fixed w-full pt-10 nav-menu">

          <div className="flex justify-center navbar-logo">
            <a className="nav-logo" href='/'><img src={Logo} alt='' className="logo" /></a>
          </div>

          <div className="nav-bar">
            <button className="nav-btn"><a className="mx-2" href='/pricing'>Plans</a></button>
            <button className="nav-btn"><a className="mx-2" href='/contact'>Contact</a></button>
          </div>

          <div className="flex justify-center">
            {
              !userId ? (<div className="login-bar"><a href="/login" className="w-auto rounded-lg text-[#4f7cff] font-semibold nav-login nav-btn">
                Login</a>
                </div>) : (

                <div className="flex justify-center items-center space-x-1 login-bar">
                  <span className="text-white text-xl ml-2">{userName}</span>
                  <button onClick={handleLogOut} className="bg-white px-4 py-2 w-auto rounded-lg text-base nav-btn">
                    Logout
                  </button>
                </div>)
            }
          </div>
        </nav>
      </div>

      {/* <div className="flex justify-between items-center w-full px-6 h-20 bg-[#000]">
        <div className="text-4xl font-bold text-white logo pl-16">
          Logo
        </div>

        <div className="flex justify-center items-center gap-2 pr-16">
          {
            !userId ? (<a href="/login" className="bg-white px-4 py-2 uppercase w-auto rounded-lg text-xl text-[#4f7cff] font-semibold">
              Login
            </a>) : (

              <div className="flex justify-center items-center space-x-4">
                <span className="text-white text-xl">{userName}</span>
                <button onClick={handleLogOut} className="bg-white px-4 py-2 w-auto rounded-lg text-base uppercase font-semibold text-[4f7cff]">
                  Logout
                </button>
              </div>)
          }
        </div>
      </div> */}

    </>
  )
}

export default Navbar
