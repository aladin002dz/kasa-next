import Image from "next/image";
import Link from "next/link";

interface Logement {
    id: string;
    title: string;
    location: string;
    description: string;
    cover: string;
}

/*
type Logement = {
    id: number;
    title: string;
    location: string;
    description: string;
}*/

export default function CardLogement({ logement }: { logement: Logement }) {
    return (
        <Link
            href={`/logement/${logement.id}`}
            className="relative aspect-square rounded-lg overflow-hidden group"
        >
            <Image
                src={logement.cover || "/placeholder.svg"}
                alt={logement.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-80" />
            <div className="absolute bottom-0 left-0 p-4 text-white">
                <h2 className="text-lg font-medium">{logement.title}</h2>
                <p className="text-sm">{logement.location}</p>
            </div>
        </Link>
    )
}
