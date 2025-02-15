// src/models/Pet.ts
import mongoose, { Schema, Document, model } from "mongoose";

export interface IPet extends Document {
  id: string;
  name: string;
}

const PetSchema = new Schema<IPet>({
  id: { type: String, required: true, unique: true },
  name: { type: String, required: true },
});

export default mongoose.models.Pet || model<IPet>("Pet", PetSchema);
