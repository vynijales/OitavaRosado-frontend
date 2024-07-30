"use client"

import { DataTableColumnHeader } from "@/components/ui/DataTableColumnHeader"
import { ActionsCell } from "@/components/ui/ActionsCell"

export const columns = [
    {
        accessorKey: "nome",
        header: ({ column }: { column: any }) => (
            <DataTableColumnHeader column={column} title="Nome" />
        ),
        cell: ({ row }: { row: any }) => {
            const name = row.getValue("nome")
            return <div className="w-60 font-semibold">{name}</div>
        },
    },
    {
        accessorKey: "id",
        header: ({ column }: { column: any }) => (
            <DataTableColumnHeader column={column} title="ID Médico" />
        ),
        cell: ({ row }: { row: any }) => {
            const id = row.getValue("id")
            return <div className="font-semibold">{String(id).padStart(4, "0")}</div>
        },
    },
    {
        accessorKey: "conselho_medico",
        header: ({ column }: { column: any }) => (
            <DataTableColumnHeader column={column} title="Conselho Médico" />
        ),
    },
    {
        accessorKey: "uf_conselho",
        header: ({ column }: { column: any }) => (
            <DataTableColumnHeader column={column} title="UF" />
        ),
    },
    {
        accessorKey: "num_conselho",
        header: ({ column }: { column: any }) => (
            <DataTableColumnHeader column={column} title="Nº Conselho" />
        ),
    },
    {
        accessorKey: "cbo",
        header: ({ column }: { column: any }) => (
            <DataTableColumnHeader column={column} title="CBO" />
        ),
    },
    {
        accessorKey: "cpf",
        header: ({ column }: { column: any }) => (
            <DataTableColumnHeader column={column} title="CPF" />
        ),
    },
    {
        accessorKey: "rqe",
        header: ({ column }: { column: any }) => (
            <DataTableColumnHeader column={column} title="RQE" />
        ),
    },
    {
        accessorKey: "clinica",
        header: ({ column }: { column: any }) => (
            <DataTableColumnHeader column={column} title="Clínica" />
        ),
    },
    {
        id: "actions",
        header: "Actions",
        cell: ({ row }: { row: any }) => {
            const id = row.getValue("id")
            return <ActionsCell row={row} />;
        },
    },
]