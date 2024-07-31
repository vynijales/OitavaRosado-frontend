"use client"

import Breadcrumbs from "@/components/layout/Breadcrumbs";
import { LabeledInput } from "@/components/widgets/LabeledInput";
import { LabeledSelect } from "@/components/widgets/LabeledSelect";
import { LabeledTextArea } from "@/components/widgets/LabeledTextArea";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { FormEvent } from "react";
import { PacienteDAO } from "@/api/PacienteDAO";
import { Paciente, PacienteIn } from "@/types/paciente";
import { sexo } from "@/utils/constants";

export default function Page({ params }: {
    params: {
        id: string
    }
}) {
    const paciente: Paciente = PacienteDAO.get(params.id);

    const items = [
        { text: "Home", link: "/home" },
        { text: "Pacientes", link: "/patients" },
        { text: "Editar paciente", link: "/patients/edit" },
    ];

    const convertDate = (date: string) => {
        const dateArray = date.split("-");
        return `${dateArray[2]}/${dateArray[1]}/${dateArray[0]}`;
    }

    return (
        <>
            <Breadcrumbs items={items} />
            <form
                id="form"
                onSubmit={(e) => submitForm(e)}
            >
                <div className="flex justify-between items-center">
                    <div
                        id="text-header"
                        className="text-white py-4">
                        <h1 className="text-3xl font-semibold">Editar paciente </h1>
                        <h2 className="text-slate-200">Preencha os campos abaixo para editar o paciente no sistema</h2>
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
                                defaultValue={paciente?.nome ?? ""
                                }
                            />

                            <LabeledSelect
                                name="sexo"
                                label="Sexo"
                                options={sexo}
                                value={paciente?.sexo ?? ""}
                            />

                            <LabeledInput
                                name="data_nascimento"
                                label="Data de Nascimento"
                                type="date"
                                placeholder="Informe a data de nascimento do paciente"
                                defaultValue={paciente?.data_nascimento ? convertDate(paciente.data_nascimento) : ""}
                            />
                            <LabeledInput
                                name="cpf"
                                label="CPF"
                                type="text"
                                placeholder="Informe o CPF do paciente"
                                defaultValue={paciente?.cpf ?? ""}
                            />
                            <LabeledInput
                                name="rg"
                                label="RG"
                                type="text"
                                placeholder="Informe o RG do paciente"
                                defaultValue={paciente?.rg ?? ""}
                            />
                            <LabeledInput
                                name="orgao_emissor"
                                label="Órgão Emissor"
                                type="text"
                                placeholder="Informe o órgão emissor do RG do paciente"
                                defaultValue={paciente?.orgao_emissor ?? ""}
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
                                name="logradouro"
                                label="Logradouro"
                                type="text"
                                placeholder="Informe o logradouro do paciente"
                                defaultValue={paciente?.logradouro ?? ""}
                            />
                            <LabeledInput
                                name="bairro"
                                label="Bairro"
                                type="text"
                                placeholder="Informe o bairro do paciente"
                                defaultValue={paciente?.bairro ?? ""}
                            />
                            <LabeledInput
                                name="cidade"
                                label="Cidade"
                                type="text"
                                placeholder="Informe a cidade do paciente"
                                defaultValue={paciente?.cidade ?? ""}
                            />
                            <LabeledInput
                                name="uf"
                                label="UF"
                                type="text"
                                placeholder="Informe o estado do paciente"
                                defaultValue={paciente?.uf ?? ""}
                            />
                            <LabeledInput
                                name="cep"
                                label="CEP"
                                type="text"
                                placeholder="Informe o CEP do paciente"
                                defaultValue={paciente?.cep ?? ""}
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
                                defaultValue={paciente?.telefone ?? ""}
                            />
                            <LabeledInput
                                name="email"
                                label="E-mail"
                                type="email"
                                placeholder="Informe o e-mail do paciente"
                                defaultValue={paciente?.email ?? ""}
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
                                defaultValue={paciente?.observacoes ?? ""}
                            />
                        </div>
                    </section>
                </div>
                <div
                    className="flex justify-end items-center gap-8 mt-8"
                >
                    <Button
                        className="w-full xl:w-auto xl:px-6"
                        variant={"cancel"}
                        onClick={() => window.location.href = "/patients"}
                    >
                        Cancelar
                    </Button>

                    <Button
                        type="submit"
                        className="w-full xl:w-auto xl:px-12"
                        variant={"save"}
                        onClick={() => submitForm}
                    >
                        Salvar
                    </Button>

                </div>
            </form >
        </>
    );

    function submitForm(e: FormEvent) {
        e.preventDefault();
        const form = document.getElementById("form") as HTMLFormElement;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData) as PacienteIn;
        PacienteDAO.update(parseInt(params.id).toString(), data);
        // window.location.href = "/patients";
        console.log(data);
    }
}

