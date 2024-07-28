import { Medico } from "./medico"
import { Paciente } from "./paciente"

export type Agendamentos = {
    id?: string | null
    medico?: Medico | null
    paciente?: Paciente | null
    motivo?: string | null
    data?: string | null
    hora?: string | null
    local?: string | null
    observacoes?: string | null
}

export type AgendamentosIn = {
    medico?: Medico | null
    paciente?: Paciente | null
    motivo?: string | null
    data?: string | null
    hora: string | null
    local?: string | null
    observacoes?: string | null
}