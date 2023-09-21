import React, { useEffect, useState } from 'react';
import firebase from '../FIREBASE/FirebaseConfig';
import { useNavigate } from 'react-router-dom';
import Morpheus from "../assets/Mor.png"

const Success = () => {

  const Navigate = useNavigate();

  const [userId, setUserId] = useState("");
  const [sessionId, setSessionId] = useState("");

  // useEffect(() => {
  //   firebase.auth().onAuthStateChanged((user) => {
  //     if (user) {
  //       setUserId(user.uid)
  //       const userRef = firebase.database().ref("users/"+ user.uid);
  //       userRef.on('value', (snapshot) => {
  //         const userVal = snapshot.val();
  //         if (userVal) {
  //           setSessionId(user.subscription.sessionId || "")
  //         }
  //       })
  //     }
  //   })

  // }, [userId, sessionId]);


  // const handlePaymentSuccess = () => {
  //   fetch("http://localhost:5000/api/v1/payment-success", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json"
  //     },
  //     body: JSON.stringify({ sessionId: sessionId, firebaseId: userId })
  //   })
  //     .then(res => {
  //       if (res.ok) return res.json();
  //       return res.json().then(json = Promise.reject(json));
  //     })
  //     .then(data => {
  //       alert(data.message);
  //       Navigate("/")
  //     })
  //     .catch(e => {
  //       console.log(e.error);
  //     })
  // }


  return (
    <div className="m-0 p-0">
      <div className="w-full min-h[80vh] flex flex-col justify-center items-center">
        <div className="my-32 text-green-600 text-2xl mx-auto  flex flex-col justify-center items-center">
          <img src={Morpheus} alt="success" width={220} height={220} />
          <span className='mb-12'>Payment Successfull</span>
          <h3 className="text-4xl pt-20 lg:pt-0 font-bold text-center  text-slate-700">
            WELCOME TO THE MATRIX
          </h3>
          <span>Your life just became more awesome!</span>

          <button onClick={() => Navigate("/")} className="w-40 bg-[#000] transform transition duration-500 hover:scale-110 text-white text-xl my-16 px-2 py-2 rounded">
            Proceed
          </button>
        </div>
      </div>
    </div>
  )
}

export default Success