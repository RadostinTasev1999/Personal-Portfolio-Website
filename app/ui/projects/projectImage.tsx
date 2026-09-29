import Image from "next/image";
import { ImageUrl } from "@/app/lib/definitions";

export default function ProjectImage({
    imgUrl
}: ImageUrl) {

    return (
        
        <div id="image-container" className="overflow-hidded">
            <Image
                src={imgUrl}
                className="h-72 w-full rounded-3xl object-cover"
                width={500}
                height={500}
                alt="Profile image"
            />
        </div>
        
    );
}