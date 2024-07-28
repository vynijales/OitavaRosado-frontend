"use client";

import Breadcrumbs from "@/components/layout/Breadcrumbs";
import { LabeledInput } from "@/components/widgets/LabeledInput";
import { LabeledSelect } from "@/components/widgets/LabeledSelect";
import { LabeledTextArea } from "@/components/widgets/LabeledTextArea";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Link } from "lucide-react";

export default function Page() {
    const items = [
        { text: "Home", link: "/home" },
        { text: "Pacientes", link: "/patients" },
        { text: "Criar novo paciente", link: "/patients/add" },
    ];
    return (<>
        <Breadcrumbs items={items} />
        <div>
            <div className="flex justify-between items-center">
                <div
                    id="text-header"
                    className="text-white py-4">
                    <h1 className="text-3xl font-semibold">Criar novo paciente </h1>
                    <h2 className="text-slate-200">Preencha os campos abaixo para criar um novo paciente no sistema</h2>
                </div>
            </div>
            <div
                id="container"
                className="w-full h-full flex flex-col gap-8 bg-white p-8 rounded-lg shadow-md"
            >

                <section
                    id="informacoes_gerais"
                    className="flex flex-col gap-6"
                >
                    <h3 className="w-full font-bold text-primary">Informações Gerais</h3>

                    <div
                        className="grid grid-cols-1 xl:grid-cols-3 justify-between gap-7"
                    >
                        <LabeledInput
                            name="nome"
                            label="Nome completo"
                            type="text"
                            placeholder="Informe o nome do paciente"
                        />

                        <LabeledSelect
                            name="sexo"
                            label="Sexo"
                            options={[
                                { value: "M", label: "Masculino" },
                                { value: "F", label: "Feminino" },
                            ]}
                        />

                        <LabeledInput
                            name="data_nascimento"
                            label="Data de Nascimento"
                            type="date"
                            placeholder="Informe a data de nascimento do paciente"
                        />
                        <LabeledInput
                            name="cpf"
                            label="CPF"
                            type="text"
                            placeholder="Informe o CPF do paciente"
                        />
                        <LabeledInput
                            name="rg"
                            label="RG"
                            type="text"
                            placeholder="Informe o RG do paciente"
                        />
                        <LabeledInput
                            name="orgao"
                            label="Órgão Emissor"
                            type="text"
                            placeholder="Informe o órgão emissor do RG do paciente"
                        />
                    </div>
                    <Separator className="mt-4" />
                </section>

                <section
                    id="endereco"
                    className="flex flex-col gap-6"
                >
                    <h3 className="w-full font-bold text-primary">Endereço</h3>

                    <div
                        className="grid grid-cols-1 xl:grid-cols-3 justify-between gap-7"
                    >
                        <LabeledInput
                            name="lagradouro"
                            label="Logradouro"
                            type="text"
                            placeholder="Informe o logradouro do paciente"
                        />
                        <LabeledInput
                            name="bairro"
                            label="Bairro"
                            type="text"
                            placeholder="Informe o bairro do paciente"
                        />

                        <LabeledInput
                            name="cidade"
                            label="Cidade"
                            type="text"
                            placeholder="Informe a cidade do paciente"
                        />
                        <LabeledInput
                            name="uf"
                            label="UF"
                            type="text"
                            placeholder="Informe o estado do paciente"
                        />

                        <LabeledInput
                            name="cep"
                            label="CEP"
                            type="text"
                            placeholder="Informe o CEP do paciente"
                        />

                    </div>
                    <Separator className="mt-4" />
                </section>

                <section
                    id="contato"
                    className="flex flex-col gap-6"
                >
                    <h3 className="w-full font-bold text-primary">Contato</h3>

                    <div
                        className="grid grid-cols-1 xl:grid-cols-3 justify-between gap-7"
                    >
                        <LabeledInput
                            name="telefone"
                            label="Telefone"
                            type="text"
                            placeholder="Informe o telefone do paciente"
                        />
                        <LabeledInput
                            name="celular"
                            label="Celular"
                            type="text"
                            placeholder="Informe o celular do paciente"
                        />
                        <LabeledInput
                            name="email"
                            label="E-mail"
                            type="email"
                            placeholder="Informe o e-mail do paciente"
                        />
                    </div>
                    <Separator className="mt-4" />
                </section>

                <section
                    id="observacoes"
                    className="flex flex-col gap-6"
                >
                    <h3 className="w-full font-bold text-primary">Observações</h3>

                    <div
                        className="grid grid-cols-1 justify-between gap-4"
                    >
                        <LabeledTextArea
                            name="observacoes"
                            label="Observações"
                            placeholder="Informe observações sobre o paciente"
                        />
                    </div>
                </section>
            </div >
            <div
                className="flex justify-end items-center gap-8 mt-8"
            >
                <Button
                    className="w-full xl:w-auto xl:px-6"
                    variant={"cancel"}
                    onClick={() => history.back()}
                >
                    Cancelar
                </Button>

                <Button
                    type="submit"
                    className="w-full xl:w-auto xl:px-12"
                    variant={"save"}
                    onClick={() => alert("Paciente criado com sucesso!")}
                >
                    Salvar
                </Button>

            </div>


        </div >
    </>
    );
}