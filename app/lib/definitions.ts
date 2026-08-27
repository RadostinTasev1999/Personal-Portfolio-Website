// -> This file will contain type definitions for data
// -> type definitions describe the shape of the data, and what data type each property should accept.

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