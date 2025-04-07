import CardLogement from "@/components/CardLogement";
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

// Fetch logements data
/*async function getLogements(): Promise<Logement[]> {
  const response = await fetch(process.env.NEXT_PUBLIC_BASE_URL + '/data/logements.json');
  if (!response.ok) {
    throw new Error('Failed to fetch logements data');
  }
  return response.json();
}*/

export default async function Home() {
  //const logements = await getLogements();
  /* const response = await fetch(process.env.NEXT_PUBLIC_BASE_URL + '/data/logements.json');
  const logements = await response.json(); */
  const response = await fetch(process.env.NEXT_PUBLIC_BASE_URL + '/api/logements');
  const logements = await response.json();

  return (
    <div>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {logements.map((logement: Logement) => (
          <CardLogement key={logement.id} logement={logement} />
        ))}
      </ul>
    </div>
  );
}
