import React, { useState } from 'react'
import { useForm, ValidationError } from '@formspree/react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactForm = () => {
    const [state, handleSubmit] = useForm("xkgwaelv");
    const [sentState, setSentState] = useState(0);

    const isValidEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

    if (state.succeeded) {
        const emailInput = document.getElementById("email");
        const textInput = document.getElementById("message");
        emailInput.value = '';
        textInput.value = '';
    }

    const onClickHandler = () =>{
        const emailInput = document.getElementById("email");
        const textInput = document.getElementById("message");
        if(textInput != '' && emailInput.value.match(isValidEmail)){
            toast.success("Thanks! We'll get in touch ASAP!");
        }
  }
  return (
    <div className="bg-sunnyOffWhite flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center w-full">
            <h1 className="font-Fraunces mt-10 text-2xl text-sunnyGrayishBlue font-bold tracking-widest text-center">Contact Us</h1>
            <p className="font-Barlow text-sunnyDarkGrayishBlue text-center font-medium text-lg my-8 px-6 md:w-1/3">
                Let us know what your looking for in a few short sentences and we'll contact you as soon as possible!
            </p>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center py-12 lg:w-1/4 md:w-2/4 w-3/4" action='https://formspree.io/f/xkgwaelv' method='POST'>
            <input
                id="email"
                type="email" 
                name="email"
                placeholder='Email address...'
                className="border-2 border-sunnyGrayishBlue px-4 py-2 rounded-full w-full mb-10"
            />
            <ValidationError 
                prefix="Email" 
                field="email"
                errors={state.errors}
            />
            <textarea
                id="message"
                name="message"
                placeholder='Your message...'
                className="border-2 border-sunnyGrayishBlue rounded px-4 py-2 w-full mb-10"
                rows="5"
            />
            <ValidationError 
                prefix="Message" 
                field="message"
                errors={state.errors}
            />
            <button onClick={onClickHandler} className="text-sunnyVeryDarkGrayishBlue border-sunnyGrayishBlue px-4 py-2 rounded-full mb-10 hover:border-sunnyOffWhite hover:text-white hover:bg-sunnySkyBlueHover" type="submit" disabled={state.submitting}>
                Submit
            </button>
        </form>
    </div>
  )
}

export default ContactForm
