"use client"
import * as motion from "motion/react-client";
import ContactForm from "./contactForm"
import SectionHeader from "../section-header/sectionHeader"
import { useState } from "react"
import { sectionHeadings } from "@/app/lib/placeholder-data"

export default function Contact(){

    const { heading, header, text } =  sectionHeadings.contact

    // -> state to track each field value
    const [name, setName] = useState('');
    const [email,setEmail] = useState('');
    const [subject,setSubject] = useState('');
    const [message, setMesasge] = useState('');

    // -> state to track input field errors
    const [nameError, setNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [subjectError, setSubjectError] = useState('');
    const [messageError, setMessageError] = useState('');

    // -> state to enable/disable Send button

    const [valid, setIsValid] = useState(false)

    // -> Callback handlers
    const submitHandler = (e) => {

        e.preventDefault()

        console.log(e.target)

    }

    const handleChange = (e) => {


        switch (e.target.name) {
            case 'name':
                setName(e.target.value)
                break;
            case 'email':
                setEmail(e.target.value)
                break;
            case 'subject':
                setSubject(e.target.value)
                break;
            case 'message':
                setMesasge(e.target.value)
                break;
        
            default:
                break;
        }
    }

    const buttonUpdate = (newState) => {
        
        setIsValid(newState)
        
    }

    const handleBlur = (e) => {

        const nameRegExp = /^[A-Za-z\s]*$/
        const emailRegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        const textRegExp = /^[A-Za-z0-9!@#$%^&*()_+=\-[\]{};':"\\|,.<>/? ]{1,150}$/

        switch (e.target.name) {
            case 'name':

                if (!name) {
                    setNameError('Please enter name')
                    buttonUpdate(true) // disable send button
                }else if (!nameRegExp.test(name)) {
                    setNameError('Please enter valid name')
                     buttonUpdate(true)
                } else{
                    setNameError('')
                    buttonUpdate(false)
                }
                // setNameTouched(true)
                break;
            case 'email':
                
                if (!email) {
                    setEmailError('Please enter email')
                    buttonUpdate(true)
                } else if (!emailRegExp.test(email)) {
                    setEmailError('Please enter valid email')
                    buttonUpdate(true)
                } else{
                    setEmailError('')
                    buttonUpdate(false)
                }
                break;
            case 'subject':
                if (!subject) {
                    setSubjectError('Please enter subject')
                    buttonUpdate(true)
                } else if (!textRegExp.test(subject)) {
                    setSubjectError('Please enter valid subject')
                    buttonUpdate(true)
                } else{
                    setSubjectError('');
                    buttonUpdate(false)
                }
                break;
            case 'message':
                if (!message) {
                    setMessageError('Please enter message')
                    buttonUpdate(true)
                } else if (!textRegExp.test(message)) {
                    setMessageError('Please enter valid message')
                    buttonUpdate(true)
                } else{
                    setMessageError('')
                    buttonUpdate(false)
                }
                break;
        
            default:
                break;
        }
        
    }


    return (
        // -> Main Section container
        <motion.section 
            id="contact-section" 
            className="py-20 px-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.2 }}
            >
            <SectionHeader heading={heading} header={header} text={text} />
            <div id="container" className="w-[50vw] my-[50px] mx-auto border p-4 border-gray-300 bg-slate-50 rounded-lg shadow-md">
                <h2 className="text-center my-[30px] text-sky-500 text-[26px] font-semibold">Contact me</h2>
                {/* Contact form */}
                <ContactForm
                    submitHandler={submitHandler}
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                    state={
                        {
                            name,
                            email,
                            subject,
                            message
                        }
                    }
                    errors={
                        {
                            nameError,
                            emailError,
                            subjectError,
                            messageError
                        }
                    }
                    valid={valid}
                />
            </div>
        </motion.section>
    )
}