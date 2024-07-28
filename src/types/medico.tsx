export type Medico = {
    id? : string | null
    nome? : string | null
    conselho_medico?: string | null
    uf_conselho?: string | null
    num_conselho?: string | null
    cbo?: string | null
    cpf?: string | null
    lagradouro?: string | null
    bairro?: string | null
    cidade?: string | null
    uf?: string | null
    cep?: string | null
    telefone?: string | null
    email?: string | null
    clinica?: string | null
}

export type MedicoIn = {
    nome? : string | null
    conselho_medico?: string | null
    uf_conselho?: string | null
    num_conselho?: string | null
    cbo?: string | null
    lagradouro?: string | null
    bairro?: string | null
    cidade?: string | null
    uf?: string | null
    cep?: string | null
    telefone?: string | null
    email?: string | null
    clinica?: string | null
}