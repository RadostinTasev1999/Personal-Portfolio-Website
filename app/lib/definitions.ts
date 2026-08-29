// -> This file will contain type definitions for data
// -> type definitions describe the shape of the data, and what data type each property should accept.

import { ChangeEvent } from "react"

export type TimelineItems = {
    year: string,
    position: string,
    company: string,
    bullets: string [],
    url: string
}
// 

export type SectionHeaders = {
    heading: string,
    header: string,
    text: string
}

export type skillTypes = {
    skillType?: string,
    skill?: string[]
}

export type Statistics = {
    name: string,
    stat: string,
    index: number
}

export type ContactFormData = {
    submitHandler: (e: SubmitEvent) => void,
    handleChange: (e: ChangeEvent) => void,
    handleBlur: (e: Event) => void,
    valid: boolean,
    state: {
        name: string,
        email: string,
        subject: string,
        message: string
    },
    errors: {
        nameError: string,
        emailError: string,
        subjectError: string,
        messageError: string
    }
}