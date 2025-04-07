
import logements from "@/data/logements.json";

export default function Home() {
  return (
    <div>
      <h1>Hello World</h1>
      <ul>
        {logements.map((logement) => (
          <li key={logement.id}>{logement.title}</li>
        ))}
      </ul>
    </div>
  );
}
