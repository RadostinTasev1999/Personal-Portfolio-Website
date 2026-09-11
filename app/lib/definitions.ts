// -> This file will contain type definitions for data
// -> type definitions describe the shape of the data, and what data type each property should accept.

import { ChangeEvent, FC } from "react";

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
    header?: string,
    text?: string
}

export type SkillTypes = {
    skillType?: string,
    skills?: SkillSet,
    skill?: string
}

type SkillSet = {
    id: number,
    name: string
}[]

export type Statistics = {
    name: string,
    stat: string,
    index: number
}

export type ContactFormData = {
    submitHandler: (event: React.FormEvent<HTMLFormElement>) => void,
    handleChange: (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => void,
    handleBlur: (event: React.FocusEvent<HTMLInputElement> | React.FocusEvent<HTMLTextAreaElement>) => void,
    inputs: {
        name: string,
        email: string,
        subject: string,
        message: string
    },
    errors: {
        nameError: string,
        emailError: string,
        subjectError: string,
        messageError: string,
        isValid: boolean
    }
}

export type NavigationLinks = {
    name: string,
    link: string
}

export type ValueCards = {
    heading: string,
    text: string
}

export type TimeLineItems = {
    id?: number,
    year: string,
    position: string,
    company: string,
    bullets: Bullets,
    url: string
}

export type BulletText = {
    text: string
}

type Bullets = {
    id: number,
    name: string
}[];


export type Facts = {
    icon: FC,
    text: string
}

export type ResumeTag = {
    tag: string
}

export type ResumeHighlightItems = {
    heading: string,
    items: item,
    id: number
}

type item = {
    id: number,
    text: string
}[]

export type ItemData = {
    text: string,
    id: number,
    url:string
}

export type ProjectCardData = {
    imgUrl: string,
    title: string,
    text: string,
    tags: Tags,
    url: string
}

type Tags = {
    id: number,
    name: string
}[]

export type Tag = {
    tag: string
}


export type ImageUrl = {
    imgUrl: string
}

export type CardContentData = {
    tags: Tags,
    url: string,
    title: string,
    text: string
}

export type BiographyText = {
    text: string
}

export type VantaEffect = {
    destroy: () => void;
};

export type ToggleMenu = {
    toggleMenu: () => void;
}

export type NavLinks = {
    navLinks: Links
}
type Links = {
    name: string,
    link: string,
    id: number
}[]