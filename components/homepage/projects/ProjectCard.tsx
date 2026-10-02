
import {ProjectCardData} from '@/lib/definitions';

import ProjectImage from "./ProjectImage";

import CardContent from "./ProjectCardContent";

export default function ProjectCard({
    imgUrl,
    title,
    text,
    tags,
    url,
    btnText,
    reversed
}: ProjectCardData){

    return (
            <article id="project-card" className={`grid items-center gap-8 border-t border-slate-200 py-12 first:border-t-0 first:pt-0 md:grid-cols-2 md:gap-16 ${reversed ? "md:[&>div:first-child]:order-2" : ""}`}>
                {/* Image */}
                <ProjectImage imgUrl={imgUrl} />
                {/* Card content */}
                <CardContent tags={tags} url={url} title={title} text={text} btnText={btnText} />
            </article>
    );
}