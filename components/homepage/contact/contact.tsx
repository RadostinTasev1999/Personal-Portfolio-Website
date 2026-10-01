"use client";

import * as motion from "motion/react-client";
import ContactForm from "./ContactForm";
import { FieldLegend } from "../../ui/field";
import SectionHeader from "../section-header/SectionHeader";
import { ContactData } from "@/lib/definitions";
import { useReducer, useState } from "react";
import { initialInputs } from '@/lib/placeholder-data';
import {
    nameRegExp,
    emailRegExp,
    textRegExp
} from '@/lib/placeholder-data';

function inputReducer(state, action){
    // TODO ...

    switch (action.type) {
        
        case 'UPDATE_FIELD':
            
            const name = action.name;
            const value = action.value;
            
            return {
                ...state,
                [name]: value
            };

        case 'RESET_INPUTS':
            
            return initialInputs;
            
    
        default:
            break;
    }

}

function errorReducer(state, action) {

    /*
        {
                type:'SET_ERROR',
                name: 'nameError',
                message: 'Please Enter Valid Name.'
            }
    */

    switch (action.type) {
        case 'SET_ERROR':
            
            return {
                ...state,
                [action.name]: action.message
            };
        
        case 'RESET_ERROR':

            return {
                ...state,
                [action.name]: action.message
            };

            
    
        default:
            break;
    }
    

}

function successReducer(state, action) {

    switch (action.type) {
        case 'SHOW_ERROR':
            
            return {
                isSent: false,
                error: true
            };
        
        case 'SHOW_SUCCESS':
            
            return {
                isSent: true,
                error: false
            };
            
    
        default:
            break;
    }

}

export default function Contact({
    contactHeading,
    contactHeader,
    contactText,
    initialInputs,
    initialErrors,
    initialState,
    contactFormHeading
}: ContactData){

    const [input, dispatchInput] = useReducer(inputReducer, initialInputs);
    
    const [inputError, dispatchError] = useReducer(errorReducer, initialErrors);
    
    const [isValid, setIsValid] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const [successState, dispatchSuccess] = useReducer(successReducer, initialState);

    const handleChange = (e) => {
        // TODO ...
        dispatchInput({
            type: 'UPDATE_FIELD',
            name: e.target.name,
            value: e.target.value
        });

        if (!isValid) {
            setIsValid(true);
        }

    };

    const resetInputs = () => {

        dispatchInput({
            type: 'RESET_INPUTS'
       });
    };

    const validateInputs = () => {

        let isValid = true;
        // Name input
        if (input.name.trim() === '') {
            isValid = false;
            dispatchError({
                type: 'SET_ERROR',
                name: 'nameError',
                message: 'Please Enter Name.'
            });
        } else if(!nameRegExp.test(input.name)) {
            isValid = false;
            dispatchError({
                type:'SET_ERROR',
                name: 'nameError',
                message: 'Please Enter Valid Name.'
            });
        } else {
            dispatchError({
                type: 'RESET_ERROR',
                name: 'nameError',
                message: ''
            });
        }

        // Email input
        if (input.email.trim() === '') {
            isValid = false;
            dispatchError({
                type: 'SET_ERROR',
                name: 'emailError',
                message: 'Please Enter Email'
            });
        } else if (!emailRegExp.test(input.email)) {
            isValid = false;
            dispatchError({
                type: 'SET_ERROR',
                name: 'emailError',
                message: 'Please Enter Valid Email'
            });
        } else {
            dispatchError({
                type: 'RESET_ERROR',
                name: 'emailError',
                message: ''
            });
        }

        // Subject Input

        if (input.subject.trim() === '') {
            isValid = false;
            dispatchError({
                type: 'SET_ERROR',
                name: 'subjectError',
                message: 'Please Enter Subject'
            });
        } else if (!textRegExp.test(input.subject)) {
            isValid = false;
            dispatchError({
                type: 'SET_ERROR',
                name: 'subjectError',
                message: 'Please Enter Valid Subject'
            });
        } else {
            dispatchError({
                type: 'RESET_ERROR',
                name: 'subjectError',
                message: ''
            });
        }

        // Message Input

        if (input.message.trim() === '') {
            isValid  = false;
            dispatchError({
                type: 'SET_ERROR',
                name: 'messageError',
                message: 'Please Enter Message.'
            });
        } else if (!textRegExp.test(input.message)) {
            isValid = false;
            dispatchError({
                type:'SET_ERROR',
                name: 'messageError',
                message: 'Please Enter Valid Message'
            });
        } else {
            dispatchError({
                type: 'RESET_ERROR',
                name: 'messageError',
                message: ''
            });
        }

        return isValid;

    };
    

    const formAction = async () => {

    //    Validate input fields
       if (!validateInputs()) {
            setIsValid(false);
            return; 
       } 

    //    Show loading indicator
       setIsLoading(true);
    //   Fetch API

        const data = JSON.stringify({
            name: input.name,
            email: input.email,
            subject: input.subject,
            message: input.message
        });

        try {

            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: data
            });



            if (response.status !== 200) {
                dispatchSuccess({
                    type: 'SHOW_ERROR'
                });
            } else if (response.status === 200) {
                dispatchSuccess({
                    type: 'SHOW_SUCCESS'
                });
            }

            setIsLoading(false);

            resetInputs();

        } catch (error) {
            console.error(error);
        }

    };

                                                    
    return (
        // -> Main Section container
        <motion.section 
            id="contact-section" 
            className="mx-auto grid max-w-6xl items-start gap-12 border-t border-slate-200 px-6 py-24 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.2 }}
            >
            {/* Section Header */}

            <SectionHeader heading={contactHeading} header={contactHeader} text={contactText} />

            <div id="container" className="flex flex-col gap-6">

                <FieldLegend className="text-lg font-semibold text-sky-500">
                    {contactFormHeading}
                </FieldLegend>
                {/* Contact form */}
                <ContactForm
                   name={input.name}
                   email={input.email}
                   subject={input.subject}
                   message={input.message}
                   handleChange={handleChange}
                   formAction={formAction}
                   inputError={inputError}
                   isValid={isValid}
                   isLoading={isLoading}
                   successState={successState}
                />
            </div>
        </motion.section>
    );
}