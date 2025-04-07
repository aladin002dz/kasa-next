'use client'

import { redirect, useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

import Rating from './components/Rating';
import Slider from './components/Slider';

// Define the Logement type to fix the TypeScript error
interface Logement {
    pictures: string[];
    title: string;
    rating: string;
    location: string;
    description: string;
}

export default function Page() {
    const params = useParams();
    const id = params.id as string;
    const [isLoading, setIsLoading] = useState(true);
    const [logement, setLogement] = useState<Logement | null>(null)

    useEffect(() => {
        const fetchLogement = async () => {
            setIsLoading(true)
            const response = await fetch(process.env.NEXT_PUBLIC_BASE_URL + '/api/logement/' + id)
            if (!response.ok) {
                redirect('/not-found')
            }
            const data = await response.json()
            setLogement(data)
            setIsLoading(false)
        }
        fetchLogement()
    }, [id])

    if (!logement) {
        return <div className="p-4">Loading...</div>
    }

    if (isLoading) {
        return <div className="p-4">Loading...</div>
    }
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