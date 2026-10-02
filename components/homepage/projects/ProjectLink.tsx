import Link from "next/link";
import { Button } from "@/components/ui/button";
import {ProjectLinkData} from '@/lib/definitions';

export default function ProjectLink({
    url,
    btnText
}: ProjectLinkData) {

    return (
        <div>
                <Link href={url}>
                    <Button className="h-auto p-0 text-base text-blue-500 font-semibold after:ml-2 after:content-['→'] hover:text-blue-600">
                        {btnText}
                    </Button>
                </Link>
            </div>
    );
}