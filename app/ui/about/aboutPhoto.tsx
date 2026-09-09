import Image from "next/image";

export default function AboutPhoto() {

    return (
        <div id="about-photo-wrap" className="relative mx-auto max-w-md overflow-hidden rounded-2xl shadow-lg hover:shadow-xl">
            <Image
                src="/IMG_7282.jpg"
                alt="Profile picture"
                width={500}
                height={500}
                className="h-auto w-full object-cover"
            >

            </Image>
        </div>
    );
}