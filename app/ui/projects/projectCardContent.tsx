import Link from "next/link";
import ProjectTags from "./projectTags";
import { CardContentData } from "@/app/lib/definitions";

export default function CardContent({
    tags,
    url,
    title,
    text
}: CardContentData) {

    return (
        <div id="card-content" className="flex flex-col gap-[10px] justify-center items-start rounded-b-xl">
            {/* Card Title */}
            <span className="text-slate-600 ml-4 mt-2 font-semibold">{title}</span>
            {/* Card text */}
            <p className="text-slate-500 text-sm ml-4 mr-2 mt-3">{text}</p>
            {/* Project tags */}
            <div id="project-card-tags" className="flex flex-wrap gap-[8px] ml-4 mt-3">
                {/* Tags */}
                {
                    tags.map((tag) => (
                        <ProjectTags key={tag.id} tag={tag.name} />
                    ))
                }

            </div>
            {/* Project Link */}
            <div className="ml-4 mt-4 mb-5">
                <Link href={url} className="text-indigo-500 text-[16px] font-semibold after:content-['->']">View on Github</Link>
            </div>
        </div>
    );
}