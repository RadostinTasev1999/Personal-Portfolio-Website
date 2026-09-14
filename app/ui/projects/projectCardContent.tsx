import Link from "next/link";
import ProjectTags from "./projectTags";
import { CardContentData } from "@/app/lib/definitions";
import { Button } from "@/components/ui/button";

export default function CardContent({
    tags,
    url,
    title,
    text
}: CardContentData) {

    return (
        <div id="card-content" className="flex flex-col gap-[10px] justify-center items-start rounded-b-xl">
            {/* Card Title */}
            <span className="ml-4 mt-2 text-sm font-bold">{title}</span>
            {/* Card text */}
            <p className="text-slate-600 text-sm font-normal ml-4 mr-2 mt-3">{text}</p>
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
                <Link href={url}>
                    <Button className="text-indigo-500 text-[15px] font-semibold border border-indigo-500 rounded-xl bg-slate-50 after:content-['->'] hover:bg-indigo-50">
                        View on Github
                    </Button>
                </Link>
            </div>
        </div>
    );
}