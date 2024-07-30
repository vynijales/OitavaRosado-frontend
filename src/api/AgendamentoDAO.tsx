import APIConsumer from "./APIConsumer";
import { Agendamento, AgendamentoIn } from "@/types/agendamento"

export const AgendamentoDAO = new APIConsumer<AgendamentoIn, Agendamento>("/agendamentos");
