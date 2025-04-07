import Image from "next/image";
export default function Banner() {
    return (
        <div className="w-full h-[200px] relative rounded-lg overflow-hidden">
            <Image
                src="/images/about-banner.jpeg"
                alt="banner"
                fill
                className="object-cover"
            />
        </div>
    )
}
