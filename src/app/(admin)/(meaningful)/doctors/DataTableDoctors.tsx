"use client"

import { DataTableColumnHeader } from "@/components/ui/DataTableColumnHeader"
import { ActionsCell } from "@/components/ui/ActionsCell"

export const columns = [
    {
        accessorKey: "name",
        header: ({ column }: { column: any }) => (
            <DataTableColumnHeader column={column} title="Nome" />
        ),
        cell: ({ row }: { row: any }) => {
            const name = row.getValue("name")
            return <div className="w-80 font-semibold">{name}</div>
        },
    },
    {
        accessorKey: "id",
        header: ({ column }: { column: any }) => (
            <DataTableColumnHeader column={column} title="ID Médico" />
        ),
        cell: ({ row }: { row: any }) => {
            const id = row.getValue("id")
            return <div className="font-semibold">{id.padStart(4, "0")}</div>
        },
    },
    {
        accessorKey: "council",
        header: ({ column }: { column: any }) => (
            <DataTableColumnHeader column={column} title="Conselho" />
        ),
    },
    {
        accessorKey: "council_number",
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
        accessorKey: "clinic",
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