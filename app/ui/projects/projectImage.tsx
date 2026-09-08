import Image from "next/image";
import { ImageUrl } from "@/app/lib/definitions";

export default function ProjectImage({
    imgUrl
}: ImageUrl) {

    return (
        
        <div id="image-container" className="overflow-hidded object-cover">
            <Image
                src={imgUrl}
                className="h-60 object-cover rounded-t-xl"
                width={500}
                height={500}
                alt="Profile image"
            />
        </div>
        
    );
}