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


export default function Home() {
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
