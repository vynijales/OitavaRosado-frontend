import APIConsumer from "./APIConsumer";
import { Paciente, PacienteIn } from "@/types/paciente"

export const PacienteDAO = new APIConsumer<PacienteIn, Paciente>("/pacientes");
