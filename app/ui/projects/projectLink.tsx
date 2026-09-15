import Link from "next/link";
import { Button } from "@/components/ui/button";
import { LinkUrl } from "@/app/lib/definitions";

export default function ProjectLink({
    url
}: LinkUrl) {

    return (
        <div className="ml-4 mt-4 mb-5">
                <Link href={url}>
                    <Button className="text-indigo-500 text-[15px] font-semibold border border-indigo-500 rounded-xl bg-slate-50 after:content-['->'] hover:bg-indigo-50">
                        View on Github
                    </Button>
                </Link>
            </div>
    );
}