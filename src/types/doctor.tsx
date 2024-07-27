export type Doctor = {
    id: string
    name: string
    council: string
    council_uf: string
    council_number: string
    cbo: string
    cpf: string
    address: string
    neighborhood: string
    city: string
    uf: string
    cep: string
    phone: string
    email: string
}

export type DoctorIn = {
    name: string
    council: string
    council_uf: string
    council_number: string
    cbo: string
    cpf: string
    address: string
    neighborhood: string
    city: string
    uf: string
    cep: string
    phone: string
    email: string
}

// - Nome completo;
// - Conselho médico;
// - UF conselho;
// - Nº do conselho;
// - Classificação brasileira de ocupações (CBO);
// - CPF;
// - Logradouro;
// - Bairro;
// - Cidade;
// - UF;
// - CEP;
// - Telefone;
// - E-mail.