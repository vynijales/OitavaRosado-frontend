"use client";

import Breadcrumbs from "@/components/layout/Breadcrumbs";
import { LabeledInput } from "@/components/widgets/LabeledInput";
import { LabeledSelect } from "@/components/widgets/LabeledSelect";
import { LabeledTextArea } from "@/components/widgets/LabeledTextArea";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Link } from "lucide-react";

import { estados, CBO, conselho } from "@/utils/constants";
import { MedicoIn } from "@/types/medico";
import { MedicoDAO } from "@/api/MedicoDAO";
import { FormEvent } from "react";

export default function Page() {
    const items = [
        { text: "Home", link: "/home" },
        { text: "Médicos", link: "/doctors" },
        { text: "Criar novo médico", link: "/doctors/add" },
    ];
    return (<>
        <Breadcrumbs items={items} />
        <div>
            <div className="flex justify-between items-center">
                <div
                    id="text-header"
                    className="text-white py-4">
                    <h1 className="text-3xl font-semibold">Criar novo médico </h1>
                    <h2 className="text-slate-200">Preencha os campos abaixo para criar um novo médico no sistema</h2>
                </div>
            </div>
            <form
                id="form"
                onSubmit={submitForm}
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
                            placeholder="Informe o nome do médico"
                        />

                        <LabeledSelect
                            name="conselho_medico"
                            label="Conselho_medico"
                            options={conselho}
                        />

                        <LabeledSelect
                            name="uf_conselho"
                            label="UF Conselho"
                            options={estados}
                        />

                        <LabeledInput
                            name="num_conselho"
                            label="N° do conselho"
                            type="text"
                            placeholder="Informe o número do conselho do médico"
                        />

                        <LabeledSelect
                            name="cbo"
                            label="CBO"
                            options={CBO}
                        />

                        <LabeledInput
                            name="cpf"
                            label="CPF"
                            type="text"
                            placeholder="Informe o CPF do médico"
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
                            type="text"
                            placeholder="Informe o logradouro do médico"
                        />
                        
                        <LabeledInput
                            name="bairro"
                            type="text"
                            placeholder="Informe o bairro do médico"
                        />

                        <LabeledInput
                            name="cidade"
                            type="text"
                            placeholder="Informe a cidade do médico"
                        />

                        <LabeledSelect
                            name="uf"
                            label="Estados"
                            options={estados}
                        />
                        
                        <LabeledInput
                            name="cep"
                            type="text"
                            placeholder="Informe o CEP do médico"
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
                            type="tel"
                            placeholder="Informe um número de telefone"
                        />

                        <LabeledInput
                            name="email"
                            type="email"
                            placeholder="Informe um e-mail válido"
                        />
                    </div>
                    <Separator className="mt-4" />
                </section>

                <div
                    id="buttons"
                    className="flex justify-end gap-4"
                >
                    <Button
                        className="w-full xl:w-auto xl:px-6"
                        variant={"cancel"}
                        onClick={() => alert("Operação cancelada!")}
                    >
                        Cancelar
                    </Button>
                    <Button
                        type="submit"
                        className="w-full xl:w-auto xl:px-12"
                        variant={"save"}
                        // onClick={() => }
                    >
                        Salvar
                    </Button>
                </div>
            </form>
        </div>
    </>
    );

}

function submitForm(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    const data = Object.fromEntries(formData.entries());
    const payload: MedicoIn = data as MedicoIn;
    console.log(payload);
    MedicoDAO.create(payload);
}