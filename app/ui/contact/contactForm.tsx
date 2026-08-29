"use client"

import { h4 } from "motion/react-client"
import { ContactFormData } from "@/app/lib/definitions"

export default function ContactForm({
    submitHandler,
    handleChange,
    handleBlur,
    valid,
    state:{
        name,
        email,
        subject,
        message
    },
    errors: {
        nameError,
        emailError,
        subjectError,
        messageError
    }
}: ContactFormData){

    return (
        <form onSubmit={submitHandler} className="flex flex-col items-center">
                <div id="name" className="my-[15px] mx-auto flex flex-col items-center gap-[15px] w-90 height-[40px]">
                    <label htmlFor="name" className="font-sans">
                        Your Name
                    </label>
                    <input 
                        type="text" 
                        id="name" 
                        name="name"
                        placeholder="Enter your name" 
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={name}
                        className="w-[80%] mb-[20px] p-[15px] border-[2px] border-sky-400 rounded-xl shadow-md bg-transparent"
                        tabIndex={1}
                         />
                         {
                        nameError && (
                            <h4 className="text-red-500 italic ">
                                {nameError}
                                </h4>
                        )
                    }
                         
                </div>
                <div id="email" className="my-[15px] mx-auto flex flex-col items-center gap-[15px] w-90 height-[40px]">
                    <label htmlFor="email" className="font-sans">
                        Your Email
                    </label>
                    <input 
                        type="email" 
                        id="email" 
                        name="email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={email}
                        className="w-[80%] mb-[20px] p-[15px] border-[2px] border-sky-400 rounded-xl shadow-md bg-transparent"
                        placeholder="example@gmail.com" 
                        tabIndex={2}
                         />
                         {
                        emailError && (
                            <h4 className="text-red-500 italic">
                                {emailError}
                            </h4>
                        )
                    }
                </div>
                <div id="subject" className="my-[15px] mx-auto flex flex-col items-center gap-[15px] w-90 height-[40px]">
                    <label htmlFor="subject" className="font-sans">
                        Subject
                    </label>
                    <input 
                        type="text" 
                        id="subject" 
                        name="subject"
                        placeholder="Enter Subject" 
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={subject}
                        className="w-[80%] mb-[20px] p-[15px] border-[2px] border-sky-400 rounded-xl shadow-md bg-transparent"
                        tabIndex={3}
                         />
                         {
                        subjectError && (
                            <h4 className="text-red-500 italic">
                                {subjectError}
                            </h4>
                        )
                    }
                </div>
                <div id="message" className="my-[15px] mx-auto flex flex-col items-center gap-[15px] w-90 height-[40px]">
                    
                    <label htmlFor="message" className="font-sans">
                        Your Message
                    </label>

                    <textarea 
                        name="message" 
                        id="message"
                        placeholder="Start typing..." 
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={message}
                        className="w-[80%] mx-[35px] h-[100px] p-[15px] border-[2px] border-sky-400 rounded-xl shadow-md bg-transparent"
                        tabIndex={4}
                        />
                        {
                        messageError && (
                            <h4 className="text-red-500 italic">
                                {messageError}
                            </h4>
                        )
                    }
                    
                </div>

                <button type="submit" disabled={valid} className="w-[150px] my-[30px] mx-[35px] h-[50px] border border-gray-300 rounded-xl bg-sky-400 text-slate-50 shadow-md cursor-pointer font-semibold">Send Message</button>
            </form>
    )
}