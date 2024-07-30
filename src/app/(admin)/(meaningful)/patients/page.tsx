"use client"

import { useEffect, useState } from "react";
import { PacienteDAO } from "@/api/PacienteDAO";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import DataTable from "@/components/ui/DataTable";

import { columns } from "./DataTablePatients";
import { Button } from "@/components/ui/button";
import { Paciente } from "@/types/paciente";
import Link from "next/link";

export default function Page() {
    const items = [
        { text: "Home", link: "/home" },
        { text: "Pacientes", link: "/patients" },
    ];

    const pacientes: Paciente[] = PacienteDAO.getAll();

    return (
        <>
            <Breadcrumbs items={items} />
            <div>
                <div className="flex justify-between items-center">
                    <div
                        id="text-header"
                        className="text-white py-4">
                        <h1 className="text-3xl font-semibold">Pacientes</h1>
                        <h2 className="text-slate-200">Gerencie com eficiência e segurança os dados do sistema</h2>
                    </div>
                    <div className="flex gap-4">
                        <Link
                            href="/patients/add"
                            className="bg-white hover:bg-white font-bold text-primary hover:opacity-90 border rounded-md p-2">
                            Novo Paciente
                        </Link>
                    </div>

                </div>
                <DataTable columns={columns} data={pacientes} />
            </div>
        </>
    );
}