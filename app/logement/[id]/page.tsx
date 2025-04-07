import { redirect } from "next/navigation";
import Rating from "./components/Rating";
import Slider from "./components/Slider";

type Logement = {
    id: string;
    title: string;
    location: string;
    description: string;
    cover: string;
    pictures: string[];
    host: {
        name: string;
        picture: string;
    };
    rating: string;
    equipments: string[];
    tags: string[];
}

export default async function Page({
    params,
}: {
    params: Promise<{ id: string }>
}) {
    const { id } = await params
    //const logement: Logement | undefined = logements.find((logement) => logement.id === id)
    const response = await fetch(process.env.NEXT_PUBLIC_BASE_URL + '/api/logement/' + id)
    if (!response.ok) {
        redirect('/not-found')
    }
    const logement = await response.json()
    /*     if (!logement) {
            redirect('/not-found')
        } */
    return <div className="p-4">
        <Slider pictures={logement.pictures} />
        <h1 className="text-2xl font-bold mt-4">{logement.title}</h1>
        <div className="flex items-center mt-2">
            <Rating rating={logement.rating} />
            <span className="ml-2 text-gray-600">{logement.location}</span>
        </div>
        <p className="mt-4">{logement.description}</p>
    </div>
}