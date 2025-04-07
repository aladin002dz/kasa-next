import CardLogement from "@/components/CardLogement";
import { Suspense } from "react";

// Define the Logement type
interface Logement {
  id: string;
  title: string;
  cover: string;
  pictures: string[];
  description: string;
  host: {
    name: string;
    picture: string;
  };
  rating: string;
  location: string;
  equipments: string[];
  tags: string[];
}

// Function to fetch logements from the API
async function getLogements(): Promise<Logement[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || ''}/api/logements`, {
    cache: 'no-store' // Disable caching to always get fresh data
  });

  if (!res.ok) {
    throw new Error('Failed to fetch logements');
  }

  return res.json();
}

// Loading component for Suspense
function LogementsLoading() {
  return <div className="text-center p-4">Loading logements...</div>;
}

// Logements list component
async function LogementsList() {
  const logements = await getLogements();

  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {logements.map((logement: Logement) => (
        <CardLogement key={logement.id} logement={logement} />
      ))}
    </ul>
  );
}

export default function Home() {
  return (
    <div>
      <h1>Hello World</h1>
      <Suspense fallback={<LogementsLoading />}>
        <LogementsList />
      </Suspense>
    </div>
  );
}
