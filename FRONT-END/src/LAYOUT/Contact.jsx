import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import emailjs from '@emailjs/browser';

const Contact = () => {

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();
  const [disabled, setDisabled] = useState(false);

  // Function that displays a success toast on bottom right of the page when form submission is successful
  const toastifySuccess = () => {
    toast('Message sent!', {
      position: 'bottom-right',
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      className: 'submit-feedback success',
      toastId: 'notifyToast'
    });
  };

  // Function called on submit that uses emailjs to send email of valid contact form
  const onSubmit = async (data) => {
    const { name, email, subject, message } = data;
    try {
      const templateParams = {
        name,
        email,
        subject,
        message
      };
      await emailjs.send(
        "service_qitv3wu",
        "template_soif9ss",
        templateParams,
        "XMIDz5ECfOS5aBxxD"
      );
      reset();
      toastifySuccess();
    } catch (e) {
      console.log(e);
    }
  };



  return (
    < section className="bg-black">
      <Navbar />

      <div className="items-center pt-32">

        <div className="flex grid-cols-2 items-center mx-auto h-4/5 w-10/12 bg-[#ebebeb] rounded-3xl py-24 overflow-hideen">

          <form id='contact-form' onSubmit={handleSubmit(onSubmit)} noValidate className="place-items-center h-min lg:w-8/12 sm:w-8/12 w-10/12 sm:mx-auto" >

            <div className="items-start text-center">
              <h2 className="font-bold text-4xl mb-8">Like what you see? <br /> We’d love to hear from you.</h2>
              <p className="mb-8">We’re glad something here has caught your attention. Let’s connect to say hello, talk about all the juicy
                details of how you can step up your design and explore if we are the right fit for you.</p>
            </div>

            <div className="w-full my-4 flex items-center gap-4 ">
              <div className="relative w-full min-w-[400px] h-10 min-w-[72px] rounded-2xl bg-none ">
                <input className="w-full h-full border bg-transparent border-black rounded-lg px-3 py-3 mt-1 text-lg outline-none"
                  type='text'
                  name='name'
                  {...register('name', {
                    required: {
                      value: true,
                      message: 'Please enter your name'
                    },
                    maxLength: {
                      value: 30,
                      message: 'Please use 30 characters or less'
                    }
                  })}
                  placeholder='Your fullname'
                />
                {errors.name && <span className='errorMessage'>{errors.name.message}</span>}
              </div>

              <div className="relative w-full min-w-[400px] h-10 min-w-[72px] ">
                <input className="w-full h-full bg-transparent border border-black rounded-lg px-3 py-3 mt-1 text-lg outline-none"
                  type='email'
                  name='email'
                  {...register('email', {
                    required: true,
                    pattern:
                      /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
                  })}
                  placeholder='Email Address'
                />
                {errors.email && (
                  <span className='errorMessage'>Please enter a valid email address</span>
                )}
              </div>

            </div>

            <div className="relative w-full min-w-[200px] h-10 rounded">
              <input className="w-full bg-transparent h-full border border-black rounded-lg px-3 py-3 mt-1 text-lg outline-none"
                type='text'
                name='subject'
                {...register('subject', {
                  required: {
                    value: true,
                    message: 'Please enter a subject'
                  },
                  maxLength: {
                    value: 75,
                    message: 'Subject cannot exceed 75 characters'
                  }
                })}
                placeholder='Subject'
              />
              {errors.subject && (
                <span className='errorMessage'>{errors.subject.message}</span>
              )}
            </div>

            <div className="relative w-full min-w-[200px] h-40 py-4 mx-auto rounded">
              <textarea className="bg-transparent w-full h-full border border-black rounded-lg px-3 py-3 mt-1 text-lg outline-none"
                rows={3}
                name='message'
                {...register('message', {
                  required: true
                })}
                placeholder='Message'
              />
              {errors.message && <span className='errorMessage'>Please enter a message</span>}
            </div>

            <div className="flex mx-auto items-center justify-center">
              <button disabled={disabled} type="submit" className="bg-transparent border border-black text-black rounded-md text-base w-full py-3 hover:bg-black hover:text-white">
                Send
              </button>
            </div>

          </form>
        </div>
        <ToastContainer />
      </div>

      <Footer />

    </section>
  )
}

export default Contact