
import { ProjectCardData } from "@/app/lib/definitions";

import ProjectImage from "./projectImage";

import CardContent from "./projectCardContent";

export default function ProjectCard({
    imgUrl,
    title,
    text,
    tags,
    url
}: ProjectCardData){

    return (
            <div id="project-card" className="flex flex-col content-between gap-[20px] justify-between border border-gray-300 rounded-xl max-w-80 bg-slate-50 shadow-lg">
                {/* Image */}
                <ProjectImage imgUrl={imgUrl} />
                {/* Card content */}
                <CardContent tags={tags} url={url} title={title} text={text} />
            </div>
    );
}