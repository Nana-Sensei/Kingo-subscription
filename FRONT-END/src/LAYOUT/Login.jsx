import React, { useState } from 'react';
import firebase from '../FIREBASE/FirebaseConfig';
import { useNavigate } from "react-router-dom";

export const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (!email || !password) {
        console.log("Please fill out all the fields")
        return;
      }
  
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        console.log("Please provide valid email")
        return;
      }
  
      const response = await firebase.auth().signInWithEmailAndPassword(email, password);
  
      if (response.user) {
        setEmail("");
        setPassword("");
        await navigate("/");
      }
      
    } catch (error) {
      console.log("Login Error", error);
    }
  }


  return (
    <div className="flex items-center w-full mx-auto h-screen diagonal-background">

      <form className="grid place-items-center h-min lg:w-4/12 sm:w-8/12 w-10/12 lg:ml-32 sm:mx-auto bg-white rounded-xl
      shadow-2xl" onSubmit={handleSubmit}>

        <div className="pt-16 text-3xl font-bold capitalize text-[#000]">
          Login
        </div>

        <div className="w-full flex flex-col px-14 pb-8">
          <label>Email</label>
          <input
            type="email"
            className="w-full border border-gray-300 rounded-lg px-3 py-3 mt-1 text-lg outline-none text-[#565656]"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="w-full flex flex-col px-14 pb-8">
          <label>Password</label>
          <input
            type="password"
            className="w-full border border-gray-300 rounded-lg px-3 py-3 mt-1 text-lg outline-none text-[#565656]"
            placeholder="Enter a strong password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div className="w-full flex items-center justify-between px-14 text-[#000] pb-10">
          <div className="flex items-center">
            <button type="submit" className="bg-[#000] text-white rounded-md text-base w-32 py-3 login-btn">
              Login
            </button>
          </div>
          <div>Don't have account?<span><a href="/register" className="hover:underline pl-2">Sign up</a></span></div>
        </div>

      </form>

    </div>

  )
}

export default Login;