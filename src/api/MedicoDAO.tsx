import APIConsumer from "./APIConsumer";
import { Medico, MedicoIn } from "@/types/medico"

export const MedicoDAO = new APIConsumer<MedicoIn, Medico>("/medicos");
