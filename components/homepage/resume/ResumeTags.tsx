import { ResumeTag } from "@/lib/definitions";

export default function ResumeTags({
    tag
}: ResumeTag) {

    return (
        <span className="text-sm font-medium text-blue-500">
            {tag}
        </span>
    );
}