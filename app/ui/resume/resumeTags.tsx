import { ResumeTag } from "@/app/lib/definitions";
import { Badge } from "@/components/ui/Badge";

export default function ResumeTags({
    tag
}: ResumeTag) {

    return (
        <Badge className="border-[1px] solid text-[12.8px] font-semibold py-[5.6px] px-[13.6px] rounded-[999px] bg-slate-50 border-gray-300 shadow-md hover:border-sky-500">
            {tag}
        </Badge>
    );
}