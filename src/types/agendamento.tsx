import { Medico } from "./medico"
import { Paciente } from "./paciente"

export type Agendamento = {
    id: string
    medico?: Medico | null
    paciente?: Paciente | null
    motivo?: string | null
    data?: string | null
    hora?: string | null
    local?: string | null
    observacoes?: string | null
}

export type AgendamentoIn = {
    medico_id: string
    paciente_id: string
    motivo?: string | null
    data?: string | null
    hora: string | null
    local?: string | null
    observacoes?: string | null
}