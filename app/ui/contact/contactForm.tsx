"use client";

import { ContactFormData } from "@/app/lib/definitions";
import { Textarea } from "../../../components/ui/Textarea";
// import { FieldGroup,Field, FieldLabel } from "@/app/ui/shad-cn/field";
import { FieldGroup, Field, FieldLabel } from "../../../components/ui/Field";
import { Input } from "../../../components/ui/Input";
import { Button } from "@/components/ui/Button";


export default function ContactForm({
    submitHandler,
    handleChange,
    handleBlur,
    inputs,
    errors
}: ContactFormData){

    return (
        <form onSubmit={submitHandler} className="flex flex-col w-full">
                <FieldGroup className="gap-7">
                    {/* Name input */}
                    <Field className="gap-2">
                        <FieldLabel htmlFor="name" className="text-sm font-medium text-slate-700">Your name</FieldLabel>
                        <Input 
                            className="h-11 w-full rounded-none border-0 border-b border-slate-300 bg-transparent px-0 shadow-none focus-visible:border-blue-500 focus-visible:ring-0" 
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Enter your name" 
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={inputs.name}
                            tabIndex={1}
                            />
                    {
                        errors.nameError && (
                            <h4 className="text-red-500 text-[15px] italic ">
                                {errors.nameError}
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
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={inputs.email}
                            placeholder="example@gmail.com" 
                            tabIndex={2}
                        />
                    {
                        errors.emailError && (
                            <h4 className="text-red-500 text-[15px] italic">
                                {errors.emailError}
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
                            placeholder="Enter Subject" 
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={inputs.subject}
                            tabIndex={3}
                            />
                    {
                        errors.subjectError && (
                            <h4 className="text-red-500 text-[15px] italic">
                                {errors.subjectError}
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
                            placeholder="Start typing..." 
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={inputs.message}
                            tabIndex={4}
                            />
                    {
                        errors.messageError && (
                            <h4 className="text-red-500 text-[15px] italic">
                                {errors.messageError}
                            </h4>
                        )
                    }
                    </Field>
                </FieldGroup>

                <Button type="submit" disabled={errors.isValid} className={`mt-8 h-11 w-fit rounded-full bg-sky-500 px-8 text-sm font-semibold text-white hover:bg-sky-600 ${errors.isValid ? "bg-slate-300" : ""}`}>Send Message</Button>                                                                      
            </form>
    );
}