"use client";

import Breadcrumbs from "@/components/layout/Breadcrumbs";
import { LabeledInput } from "@/components/widgets/LabeledInput";
import { LabeledSelect } from "@/components/widgets/LabeledSelect";
import { LabeledTextArea } from "@/components/widgets/LabeledTextArea";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Medico } from "@/types/medico";
import { MedicoDAO } from "@/api/MedicoDAO";
import { PacienteDAO } from "@/api/PacienteDAO";
import { Paciente } from "@/types/paciente";
import { FormEvent } from "react";
import { AgendamentoIn } from "@/types/agendamento";
import { AgendamentoDAO } from "@/api/AgendamentoDAO";

export default function Page() {
    const items = [
        { text: "Home", link: "/home" },
        { text: "Agendamentos médicos", link: "/schedules" },
        { text: "Criar novo agendamento médico", link: "/schedules/add" },
    ];

    const medicos: Medico[] = MedicoDAO.getAll();
    const pacientes: Paciente[] = PacienteDAO.getAll();

    return (<>
        <Breadcrumbs items={items} />
        <form
            id="form"
            onSubmit={submitForm}
        >
            <div
                className="flex justify-between items-center">
                <div
                    id="text-header"
                    className="text-white py-4">
                    <h1 className="text-3xl font-semibold">Criar novo agendamento médico </h1>
                    <h2 className="text-slate-200">Preencha os campos abaixo para criar um novo agendamento médico no sistema</h2>
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
                    <div
                        className="grid grid-cols-1 xl:grid-cols-3 justify-between gap-7"
                    >
                        <LabeledSelect
                            name="medico_id"
                            label="Médico"
                            options={medicos.map((medico) => ({
                                value: medico.id.toString() || '', label: `${medico.id.toString().padStart(4, "0")} - ${medico.nome}`
                            }))}
                        />

                        <LabeledSelect
                            name="paciente_id"
                            label="Paciente"
                            options={pacientes.map((paciente) => ({
                                value: paciente.id.toString() || '', label: `${paciente.id.toString().padStart(4, "0")} - ${paciente.nome}`
                            }) || [])
                            }
                        />

                        <LabeledInput
                            name="motivo"
                            label="Motivo da consulta"
                            type="text"
                            placeholder="Informe o motivo da consulta"
                        />

                        <LabeledInput
                            name="data"
                            label="Data"
                            type="date"
                            placeholder="Informe a data da consulta"
                        />

                        <LabeledInput
                            name="hora"
                            label="Hora"
                            type="time"
                            placeholder="Informe o horario da consulta"
                        />

                        <LabeledInput
                            name="local"
                            label="Local"
                            type="text"
                            placeholder="Informe o local da consulta"
                        />

                        <LabeledTextArea
                            name="observacoes"
                            label="Observações"
                            placeholder="Informe observações adicionais"
                        />

                    </div>
                    <Separator className="mt-4" />
                </section>
            </div >
            <div
                className="flex justify-end items-center gap-8 mt-8"
            >
                <Button
                    className="w-full xl:w-auto xl:px-6"
                    variant={"cancel"}
                    onClick={() => window.location.href = "/schedules"}
                >
                    Cancelar
                </Button>

                <Button
                    type="submit"
                    className="w-full xl:w-auto xl:px-12"
                    variant={"save"}
                >
                    Salvar
                </Button>

            </div>


        </form >
    </>
    );
}

function submitForm(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    const data = Object.fromEntries(formData.entries());
    const payload: AgendamentoIn = data as AgendamentoIn;
    AgendamentoDAO.create(payload);
    window.location.href = "/schedules";
    
}