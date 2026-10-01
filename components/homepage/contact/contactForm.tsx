"use client";

import { Textarea } from "@/components/ui/textarea";
import { ClipLoader } from "react-spinners";
import { FieldGroup, Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {ContactFormData} from '@/lib/definitions';
import Alert from '@mui/material/Alert';


export default function ContactForm({
    name,
    email,
    subject,
    message,
    handleChange,
    formAction,
    inputError,
    isValid,
    isLoading,
    successState
}: ContactFormData){
    
   

    return (
        <form action={formAction} className="flex flex-col w-full">
                <FieldGroup className="gap-7">
                    {/* Name input */}
                    <Field className="gap-2">
                        <FieldLabel htmlFor="name" className="text-sm font-medium text-slate-700">Your name</FieldLabel>
                        <Input 
                            className="h-11 w-full rounded-none border-0 border-b border-slate-300 bg-transparent px-0 shadow-none focus-visible:border-blue-500 focus-visible:ring-0" 
                            type="text"
                            id="name"
                            name="name"
                            value={name}
                            onChange={handleChange}
                            placeholder="Enter your name"  
                            tabIndex={1}
                            />
                    {
                        inputError.nameError && (
                            <h4 className="text-red-500 text-[15px] italic ">
                                {inputError.nameError}
                            </h4>
                        )
                    }
                    
                    </Field>
                    {/* Email input */}
                    <Field className="gap-2">
                        <FieldLabel htmlFor="email" className="text-sm font-medium text-slate-700">Your email</FieldLabel>
                        <Input 
                            className="h-11 w-full rounded-none border-0 border-b border-slate-300 bg-transparent px-0 shadow-none focus-visible:border-blue-500 focus-visible:ring-0"
                            type="email"
                            id="email" 
                            name="email"
                            value={email}
                            onChange={handleChange}
                            placeholder="example@gmail.com" 
                            tabIndex={2}
                        />
                    {
                        inputError.emailError && (
                            <h4 className="text-red-500 text-[15px] italic">
                                {inputError.emailError}
                            </h4>
                        )
                    }

                    </Field>
                    {/* Subject input */}
                    <Field className="gap-2">
                        <FieldLabel htmlFor="subject" className="text-sm font-medium text-slate-700">Enter Subject</FieldLabel>
                        <Input 
                            className="h-11 w-full rounded-none border-0 border-b border-slate-300 bg-transparent px-0 shadow-none focus-visible:border-blue-500 focus-visible:ring-0"
                            type="text"
                            id="subject" 
                            name="subject"
                            value={subject}
                            onChange={handleChange}
                            placeholder="Enter Subject"   
                            tabIndex={3}
                            />
                    {
                        inputError.subjectError && (
                            <h4 className="text-red-500 text-[15px] italic">
                                {inputError.subjectError}
                            </h4>
                        )
                    }
                    </Field>
                    {/* Message Text area */}
                    <Field className="gap-2">
                        <FieldLabel htmlFor="message" className="text-sm font-medium text-slate-700">Enter Message</FieldLabel>
                        <Textarea 
                            className="mt-2 min-h-28 w-full rounded-none border-0 border-b border-slate-300 bg-transparent px-0 shadow-none focus-visible:border-blue-500 focus-visible:ring-0"
                            name="message" 
                            id="message"
                            value={message}
                            onChange={handleChange}
                            placeholder="Start typing..." 
                            tabIndex={4}
                            />
                    {
                        inputError.messageError && (
                            <h4 className="text-red-500 text-[15px] italic">
                                {inputError.messageError}
                            </h4>
                        )
                    }
                    </Field>
                </FieldGroup>
                        
                    {
                        successState.isSent && !successState.error && (
                            <Alert className="mt-8" variant="outlined" severity="success">Message successfully sent</Alert>
                        )
                    }
                    {
                        !successState.isSent && successState.error && (
                            <Alert className="mt-8" variant="outlined" severity="error">Error sending message</Alert>
                        )
                    }

                    {
                        isLoading ?
                            <ClipLoader className="mt-8" color="#00a6f4" />
                                    :
                            <Button type="submit" disabled={!isValid} className={`mt-8 h-11 w-fit rounded-full bg-sky-500 px-8 text-sm font-semibold text-white hover:bg-sky-600 ${!isValid ? 'bg-slate-400' : ''}`}>Send Message</Button>
                    } 
                            
            </form>
    );
}