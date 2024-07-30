export type Paciente = {
    id: string
    nome?: string | null
    sexo?: string | null
    data_nascimento?: string | null
    cpf?: string | null
    rg?: string | null
    orgao_emissor?: string | null
    logradouro?: string | null
    bairro?: string | null
    cidade?: string | null
    uf?: string | null
    cep?: string | null
    telefone?: string | null
    email?: string | null
    observacoes?: string | null
}

export type PacienteIn = {
    nome?: string | null
    sexo: string | null
    data_nascimento?: string | null
    cpf?: string | null
    rg?: string | null
    orgao_emissor?: string | null
    logradouro?: string | null
    bairro?: string | null
    cidade?: string | null
    uf?: string | null
    cep?: string | null
    telefone?: string | null
    email?: string | null
    observacoes?: string | null
}