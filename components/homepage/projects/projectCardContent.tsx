import ProjectTags from "./ProjectTags";
import {CardContentData} from '@/lib/definitions';
import ProjectLink from "./ProjectLink";

export default function CardContent({
    tags,
    url,
    title,
    text,
    btnText
}: CardContentData) {

    return (
        <div id="card-content" className="flex flex-col gap-4 items-start">
            {/* Card Title */}
            <h3 className="text-2xl font-semibold tracking-tight text-slate-950">{title}</h3>
            {/* Card text */}
            <p className="max-w-md text-base leading-7 text-slate-600">{text}</p>
            {/* Project tags */}
            <div id="project-card-tags" className="flex flex-wrap items-center gap-x-4 gap-y-1">
                {/* Tags */}
                {
                    tags.map((tag) => (
                        <ProjectTags key={tag.id} tag={tag.name} />
                    ))
                }

            </div>
            {/* Project Link */}
            <ProjectLink url={url} btnText={btnText}/>
        </div>
    );
}