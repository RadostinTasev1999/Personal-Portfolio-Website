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

export type LinkUrl = {
    url: string
}

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
    stat: string
}

export type ContactFormData = {
    name: string,
    email: string,
    subject: string,
    message: string,
    inputError: {
                    nameError: string,
                    emailError: string,
                    subjectError: string,
                    messageError: string
                },
    isValid: boolean,
    isLoading: boolean,
    successState: {
        isSent: boolean,
        error: boolean
    },
    handleChange: () => void,
    formAction: () => void
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
    text: string,
    url?: string
}[]

export type ItemData = {
    text: string,
    id: number,
    url?:string
}

export type ProjectCardData = {
    imgUrl: string,
    title: string,
    text: string,
    tags: Tags,
    url: string,
    reversed: boolean
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

export type HeroData = {
    firstName: string,
    lastName: string,
    bioText: string
}

export type AboutData = {
    heading: string,
    header: string,
    text: string,
    aboutBioText: AboutText
}

type AboutText = {
    id: number,
    text: string
}[]

export type SkillData = {
    heading: string,
    header: string,
    text: string,
    skillTypes: SkillDataTypes
}

type SkillDataTypes = {
    id: number,
    skillType: string,
    skills: Skills
}[]

type Skills = {
    id: number,
    name: string
}[]

export type ExperienceData = {
    experienceHeading: string,
    experienceHeader: string,
    experienceText: string,
    timelineItems: TimeLineData
}

type TimeLineData = {
    id: number,
    year: string,
    position: string,
    company: string,
    bullets: BulletsData,
    url: string
}[]

type BulletsData = {
    id: number,
    name: string
} []

export type ProjectsData = {
    projectsHeading: string,
    projectsHeader: string,
    projectsText: string,
    projectCardsData: ProjectData
}

type ProjectData = {
    id: number,
    img: string,
    title: string,
    text: string,
    tags: ProjectTags,
    url: string
}[]

type ProjectTags = {
    id: number,
    name: string
}[]

export type ResumeData = {
    resumeHeading: string,
    resumeHeader: string,
    resumeText: string,
    resumeTags: ResumeTags,
    resumeHighlights: resumeHighlightsData

}

type ResumeTags = {
    id: number,
    tag: string
}[]

type resumeHighlightsData = {
    id: number,
    heading: string,
    items:resumeItemData
} []

type resumeItemData = {
    id: number,
    text: string
}[]

export type ContactData = {
    contactHeading: string,
    contactHeader: string,
    contactText: string
}
