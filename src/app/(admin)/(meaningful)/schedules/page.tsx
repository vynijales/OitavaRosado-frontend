"use client"

import { AgendamentoDAO } from "@/api/AgendamentoDAO";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import DataTable from "@/components/ui/DataTable";

import { columns } from "./DataTableSchedules";
import { Button } from "@/components/ui/button";
import { Agendamento } from "@/types/agendamento";
import Link  from "next/link";

export default function Page() {
    const items = [
        { text: "Home", link: "/home" },
        { text: "Agendamentos médicos", link: "/schedules" },
    ];

    const agendamentos: Agendamento[] = AgendamentoDAO.getAll();

    return (
        <>
            <Breadcrumbs items={items} />
            <div>
                <div className="flex justify-between items-center">
                    <div
                        id="text-header"
                        className="text-white py-4">
                        <h1 className="text-3xl font-semibold">Agendamentos médicos</h1>
                        <h2 className="text-slate-200">Gerencie com eficiência e segurança os dados do sistema</h2>
                    </div>
                    <div className="flex gap-4">
                        <Link
                            href="/schedules/add"
                            className="bg-white hover:bg-white font-bold text-primary hover:opacity-90 border rounded-md p-2">
                            Novo agendamento
                        </Link>
                    </div>

                </div>
                <DataTable columns={columns} data={agendamentos} />
            </div>
        </>
    );
}