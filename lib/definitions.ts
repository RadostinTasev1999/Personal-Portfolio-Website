// -> This file will contain type definitions for data
// -> type definitions describe the shape of the data, and what data type each property should accept.

import { ChangeEvent } from "react";
import React from "react";


export type TimelineItems = {
    year: string,
    position: string,
    company: string,
    bullets: BulletsData,
    url: string,
    btnText?: string
}
// 

export type TimelineBtnData = {
    url: string,
    btnText?: string
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
    isSent: boolean | undefined,
    error: boolean | undefined,
    handleChange: (e: OnChangeInputEvent | OnChangeTextareaEvent) => void,
    formAction: () => void,
    buttonText: string
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


export interface Facts extends React.PropsWithChildren {
    text: string,
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
    btnText: string,
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
    text: string,
    btnText: string
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

// export type NavLinks = {
//     navLinks: Links
// }
// type Links = {
//     name: string,
//     link: string,
//     id: number
// }[]

export type HeroData = {
    firstName: string,
    lastName: string,
    bioText: string,
    heroBadgeText: string,
    jobRolesText: string,
    heroCtaButtons: HeroCtaBtns,
    statistics: HeroStatistics
}

type HeroStatistics = {    
    id: number,
    name: string,
    stat: string  
}[]

export type HeroStatsData = {
    statistics: HeroStatistics
}

export type HeroCtaBtns = {
    btnPrimary: string,
    btnSecondary: string
}

export type CtaBtns = {
    heroCtaButtons: HeroCtaBtns
}

export type AboutData = {
    heading: string,
    header: string,
    text: string,
    aboutBioText: AboutText,
    valueCards: AboutValueCards,
    aboutButtonsText: AboutButtonsTxt,
    aboutFacts: AboutFactsData
};

type AboutFactsData = {
    id: number,
    icon: React.ReactNode,
    text: string
} []

export type AboutFactsProp = {
    aboutFacts: AboutFactsData
}

type AboutButtonsTxt = {
        btnPrimary: string,
        btnSecondary: string
    }

export type AboutButtonsData = {
    aboutButtonsText: AboutButtonsTxt
}

type AboutValueCards = {
    id: number,
    heading: string,
    text: string
} []

export type AboutValuesData = {
    valueCards: AboutValueCards
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
    url: string,
    btnText?: string
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
    url: string,
    btnText: string
}[]

type ProjectTags = {
    id: number,
    name: string
}[]

export type ProjectLinkData = {
    url: string,
    btnText: string
}

export type ResumeData = {
    resumeHeading: string,
    resumeHeader: string,
    resumeText: string,
    resumeTags: ResumeTags,
    resumeHighlights: resumeHighlightsData,
    resumeData: AppResumeData

}

type AppResumeData = {
    headingText: string,
    paragraphText: string,
    btnPrimary: string,
    btnSecondary: string,
    resumeNote: string  
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

export type ResumeButtonsData = {
    btnPrimary: string,
    btnSecondary: string
}

export type ResumeNoteData = {
    resumeNote: string
};

export type ContactData = {
    contactHeading: string,
    contactHeader: string,
    contactText: string,
    initialInputs: InitialContactInputs,
    initialErrors: InitialContactErrors,
    initialState: InitialFormState,
    contactFormData: FormData
}

type FormData = {
    headingText: string,
    buttonText: string
}

type InitialContactInputs = {
    name: string,
    email: string,
    subject: string,
    message: string
}

type InitialContactErrors = {
    nameError: string,
    emailError: string,
    subjectError: string,
    messageError: string
}

type InitialFormState = {
    isSent: boolean, 
    error: boolean
}


export type HeaderData = {
    navigationLinks: NavLinks,
    logo: string
}

export type MobileLinksData = {
    navLinks: NavLinks
}

type NavLinks = {
    name: string,
    link: string,
    id: number
}[]

export type SiteLogo = {
    logo: string
}

export type AppFooterData = {
    socialLinks: SocialLinks,
    footerText: string
}

type SocialLinks = {
    id: number,
    url: string,
    icon: React.FC
}[]

export type HeroBadge = {
    heroBadgeText: string
}

export type JobRoleText = {
    jobRolesText: string
}

export type InputState = {
    name: string,
    email: string,
    subject: string,
    message: string
}

export type InputAction = {
    type: string,
    name?: string,
    value?: string
}

export type InputErrorState = {
    nameError: string,
    emailError: string,
    subjectError: string,
    messageError: string
}

export type InputErrorAction = {
    type: string,
    name: string,
    message: string
}

export type SuccessState = {
    isSent: boolean,
    error: boolean
}

export type SuccessStateAction = {
    type: string
}

export type OnChangeInputEvent = ChangeEvent<HTMLInputElement>
export type OnChangeTextareaEvent = ChangeEvent<HTMLTextAreaElement>