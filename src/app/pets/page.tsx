// src/app/pets/page.tsx
import { IPet } from "@/models/Pet";

const fetchPets = async (): Promise<IPet[]> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/pets`, {
    cache: "no-store",
  });
  const data = await res.json();
  return data.data;
};

export default async function PetsPage() {
  const pets = await fetchPets();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Pets</h1>
      <ul className="mt-4 space-y-2">
        {pets.map((pet) => (
          <li key={pet.id} className="border p-4 rounded-lg">
            <h2 className="font-semibold">{pet.name}</h2>
            <p>ID: {pet.id}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
