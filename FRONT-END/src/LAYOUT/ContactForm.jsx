import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();
  const [disabled, setDisabled] = useState(false);

  // Function that displays a success toast on bottom right of the page when form submission is successful
  const toastifySuccess = () => {
    toast('Form sent!', {
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
    <div className="container my-24 mx-auto md:px-6">

      <div className="mb-32">

        <div className="flex flex-wrap">

          <div class="mb-10 w-full shrink-0 grow-0 basis-auto md:mb-0 md:w-6/12 md:px-3 lg:px-6">
            <h2 class="mb-6 text-3xl font-bold">Contact us</h2>
            <p class="mb-6 text-neutral-500 dark:text-neutral-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium, modi accusantium ipsum corporis quia asperiores
              dolorem nisi corrupti eveniet dolores ad maiores repellendus enim
              autem omnis fugiat perspiciatis? Ad, veritatis.
            </p>
            <p class="mb-2 text-neutral-500 dark:text-neutral-300">
              New York, 94126, United States
            </p>
            <p class="mb-2 text-neutral-500 dark:text-neutral-300">
              + 01 234 567 89
            </p>
            <p class="mb-2 text-neutral-500 dark:text-neutral-300">
              info@gmail.com
            </p>
          </div>

          <div className="relative mb-6">
            <form id='contact-form' onSubmit={handleSubmit(onSubmit)} noValidate>

              {/* Row 1 of form */}
              <div className="peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0">
                <div className='col-md-6'>
                  <input
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
                    className='form-control formInput'
                    placeholder='Name'
                  ></input>
                  {errors.name && <span className='errorMessage'>{errors.name.message}</span>}
                </div>

                <div className="">
                  <input
                    type='email'
                    name='email'
                    {...register('email', {
                      required: true,
                      pattern:
                        /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
                    })}
                    className='form-control formInput'
                    placeholder='Email address'
                  ></input>
                  {errors.email && (
                    <span className='errorMessage'>Please enter a valid email address</span>
                  )}
                </div>
              </div>

              {/* Row 2 of form */}
              <div className="formRow">
                <div className='col'>
                  <input
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
                    className='form-control formInput'
                    placeholder='Subject'
                  ></input>
                  {errors.subject && (
                    <span className='errorMessage'>{errors.subject.message}</span>
                  )}
                </div>


              </div>
              {/* Row 3 of form */}
              <div className="formRow">
                <div className='col'>
                  <textarea
                    rows={3}
                    name='message'
                    {...register('message', {
                      required: true
                    })}
                    className='form-control formInput'
                    placeholder='Message'
                  ></textarea>
                  {errors.message && <span className='errorMessage'>Please enter a message</span>}
                </div>
              </div>

              <button className="submit-btn" disabled={disabled} type='submit'>
                Submit
              </button>
            </form>
          </div>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default ContactForm


