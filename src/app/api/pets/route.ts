// src/app/api/pets/route.ts
import dbConnect from "@/lib/dbConnect";
import Pet from "@/models/Pet";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await dbConnect();
    const pets = await Pet.find({});
    const formattedPets = pets.map((pet) => ({
      id: pet._id.toString(), // Convert ObjectId to string
      name: pet.name,
    }));
    return NextResponse.json({ success: true, data: formattedPets });

  } catch (error) {
    return NextResponse.json({ success: false, error: "Failed to fetch pets" }, { status: 500 });
  }
}
