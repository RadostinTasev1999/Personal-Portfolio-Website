"use client";
import * as motion from "motion/react-client";
import ContactForm from "./contactForm";;
import { FieldLegend } from '@/components/ui/field';
import SectionHeader from "../section-header/sectionHeader";
import { sectionHeadings } from "@/app/lib/placeholder-data";
import { useReducer } from "react";

const inputReducer = (state, action) => {

    /*
        {
                    type: "HANDLE_CHANGE",
                    payload: e.target.value
                }
    */

    switch (action.type) {

        case "ON_NAME_CHANGE":
            
        return {
            ...state,
            name: action.payload
        };

        case "ON_EMAIL_CHANGE":
            
        return {
            ...state,
            email: action.payload
        };

        case "ON_SUBJECT_CHANGE":

        return {
            ...state,
            subject: action.payload
        };

        case "ON_MESSAGE_CHANGE":

        return {
            ...state,
            message: action.payload
        };
    
        default:
            break;
    }
};

const errorReducer = (state, action) => {

    switch (action.type) {

        case "EMPTY_NAME":
            
        return {
            ...state,
            nameError: action.payload,
            isValid: true // disable send button
        };

        case "INVALID_NAME":

            return {
                ...state,
                nameError: action.payload,
                isValid: true // disable send button
            };

        case "REFRESH_NAME_ERROR":

            return {
                ...state,
                nameError: action.payload,
                isValid: false // enable send button
            };

        case "EMPTY_EMAIL":

            return {
                ...state,
                emailError: action.payload,
                isValid: true // disable send button
            };

        case "INVALID_EMAIL":

            return {
                ...state,
                emailError: action.payload,
                isValid: true
            };

        case "REFRESH_EMAIL":

            return {
                ...state,
                emailError: action.payload,
                isValid: false
            };

        case "EMPTY_SUBJECT":

            return {
                ...state,
                subjectError: action.payload,
                isValid: true
            };
        
        case "INVALID_SUBJECT":

            return {
                ...state,
                subjectError: action.payload,
                isValid: true
            };

        case "REFRESH_SUBJECT":

            return {
                ...state,
                subjectError: action.payload,
                isValid: false
            };

        case "EMPTY_MESSAGE":

            return {
                ...state,
                messageError: action.payload,
                isValid: true
            };

        case "INVALID_MESSAGE":

            return {
                ...state,
                messageError: action.payload,
                isValid: true
            };

        case "REFRESH_MESSAGE":

            return {
                ...state,
                messageError: action.payload, // null
                isValid: false
            };
    
        default:
            break;
    }
};

export default function Contact(){

    const { heading, header, text } =  sectionHeadings.contact;

    // -> state to track each field value

    const [inputs, dispatchInputs] = useReducer(
        inputReducer,
        {name: '', email: '', subject: '', message: ''}
        );


    // -> state to track input field errors
    const [errors, dispatchErrors] = useReducer(
        errorReducer,
        {nameError: '', emailError: '', subjectError: '', messageError: '', isValid: false}
    );

    // -> Callback handlers
    const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {

        event.preventDefault();

        console.log(event.target);

    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {


        switch (e.target?.name) {

            case 'name':
                dispatchInputs({
                    type: "ON_NAME_CHANGE",
                    payload: e.target.value
                });
                // dispatch
                break;
            case 'email':
                dispatchInputs({
                    type: "ON_EMAIL_CHANGE",
                    payload: e.target.value
                });
                // dispatch
                break;
            case 'subject':
                dispatchInputs({
                    type: "ON_SUBJECT_CHANGE",
                    payload: e.target.value
                });
                // dispatch
                break;
            case 'message':
                dispatchInputs({
                    type: "ON_MESSAGE_CHANGE",
                    payload: e.target.value
                });
                // dispatch
                break;
        
            default:
                break;
        }
    };


    const handleBlur = (e: React.FocusEvent<HTMLInputElement> | React.FocusEvent<HTMLTextAreaElement>) => {

        const nameRegExp = /^[A-Za-z\s]*$/;
        const emailRegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const textRegExp = /^[A-Za-z0-9!@#$%^&*()_+=\-[\]{};':"\\|,.<>/? ]{1,150}$/;

        switch (e.target.name) {
            
            case 'name':

                if (!inputs.name) {
                    dispatchErrors({
                        type: 'EMPTY_NAME',
                        payload: 'Please Enter Name'
                    });
                    // disable send button
                }else if (!nameRegExp.test(inputs.name)) {
                    dispatchErrors({
                        type: 'INVALID_NAME',
                        payload: 'Please Enter Valid Name'
                    });
                } else{
                    dispatchErrors({
                        type: 'REFRESH_NAME_ERROR',
                        payload: null
                    });
                }
                // setNameTouched(true)
                break;
            case 'email':
                
                if (!inputs.email) {
                    dispatchErrors({
                        type: 'EMPTY_EMAIL',
                        payload: 'Please Enter Email',
                    });
                    
                } else if (!emailRegExp.test(inputs.email)) {
                    dispatchErrors({
                        type: 'INVALID_EMAIL',
                        payload: 'Please Enter Valid Email'
                    });
                    
                } else{
                    dispatchErrors({
                        type: 'REFRESH_EMAIL',
                        payload: null
                    });
                    
                }
                break;
            case 'subject':
                if (!inputs.subject) {
                    dispatchErrors({
                        type: 'EMPTY_SUBJECT',
                        payload: 'Please Enter Subject'
                    });
                  
                } else if (!textRegExp.test(inputs.subject)) {
                    dispatchErrors({
                        type: 'INVALID_SUBJECT',
                        payload: 'Please Enter Valid Subject'
                    });
                } else{
                    dispatchErrors({
                        type: 'REFRESH_SUBJECT',
                        payload: null
                    });
                }
                break;
            case 'message':
                if (!inputs.message) {
                    dispatchErrors({
                        type: 'EMPTY_MESSAGE',
                        payload: 'Please Enter Message'
                    });
                } else if (!textRegExp.test(inputs.message)) {
                    dispatchErrors({
                        type: 'INVALID_MESSAGE',
                        payload: 'Please Enter Valid Message'
                    });
                } else{
                    dispatchErrors({
                        type: 'REFRESH_MESSAGE',
                        payload: null
                    });
                }
                break;
        
            default:
                break;
        }
        
    };


    return (
        // -> Main Section container
        <motion.section 
            id="contact-section" 
            className="flex flex-col items-center py-20 px-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.2 }}
            >
            {/* Section Header */}

            <SectionHeader heading={heading} header={header} text={text} />

            <div id="container" className="flex flex-col w-[30vw] py-[10px] px-[30px] border border-gray-300 bg-[#f5f8ff] rounded-2xl shadow-md">

                <FieldLegend className="text-center my-[30px] text-sky-500 font-extrabold shrink">Contact me</FieldLegend>
                {/* Contact form */}
                <ContactForm
                    submitHandler={submitHandler}
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                    inputs={inputs}
                    errors={errors}
                />
            </div>
        </motion.section>
    );
}