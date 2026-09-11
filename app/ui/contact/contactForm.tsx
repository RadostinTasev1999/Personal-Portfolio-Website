"use client";

import { ContactFormData } from "@/app/lib/definitions";
import { Textarea } from "@/components/ui/textarea";
import { FieldGroup,Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";


export default function ContactForm({
    submitHandler,
    handleChange,
    handleBlur,
    inputs,
    errors
}: ContactFormData){

    console.log('Errors are:', errors.isValid);

    return (
        <form onSubmit={submitHandler} className="flex flex-col items-center shrink">
                <FieldGroup>
                    {/* Name input */}
                    <Field className="my-[15px] w-auto mx-auto flex flex-col items-center gap-[15px] height-[40px] shrink basis-auto">
                        <FieldLabel htmlFor="name">Your name</FieldLabel>
                        <Input 
                            className="w-[80%] mb-[1px] p-[15px] border-[2px] border-sky-400 rounded-xl shadow-md bg-transparent" 
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
                    <Field className="my-[15px] w-auto mx-auto flex flex-col items-center gap-[15px] height-[40px] shrink basis-auto">
                        <FieldLabel htmlFor="email">Your email</FieldLabel>
                        <Input 
                            className="w-[80%] mb-[1px] p-[15px] border-[2px] border-sky-400 rounded-xl shadow-md bg-transparent"
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
                    <Field className="my-[15px] w-auto mx-auto flex flex-col items-center gap-[15px] height-[40px] shrink basis-auto">
                        <FieldLabel htmlFor="subject">Enter Subject</FieldLabel>
                        <Input 
                            className="w-[80%] mb-[1px] p-[15px] border-[2px] border-sky-400 rounded-xl shadow-md bg-transparent"
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
                    <Field className="my-[15px] w-auto mx-auto flex flex-col items-center gap-[15px] height-[40px] shrink basis-auto">
                        <FieldLabel htmlFor="message">Enter Message</FieldLabel>
                        <Textarea 
                            className="w-[80%] mx-[35px] h-[100px] p-[15px] border-[2px] border-sky-400 rounded-xl shadow-md bg-transparent"
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

                <Button type="submit" disabled={errors.isValid} className={`w-[150px] my-[30px] mx-[35px] h-[45px] border border-gray-300 rounded-xl bg-sky-400 text-slate-50 shadow-md cursor-pointer font-semibold ${errors.isValid ? "bg-slate-300 cursor-pointer"  : ""}`}>Send Message</Button>
            </form>
    );
}