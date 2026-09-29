import { Tag } from "@/app/lib/definitions";

export default function ProjectTags({
    tag
}: Tag){
    
    return (
        <span className="text-sm font-medium text-blue-500">
            {tag}
        </span>
    );
}