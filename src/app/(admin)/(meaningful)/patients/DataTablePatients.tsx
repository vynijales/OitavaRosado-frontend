"use client"

import { DataTableColumnHeader } from "@/components/ui/DataTableColumnHeader"
import ActionsCell from "@/components/widgets/DeleteAlert"
import { PacienteDAO } from "@/api/PacienteDAO"

export const columns = [
    {
        accessorKey: "id",
        header: ({ column }: { column: any }) => (
            <DataTableColumnHeader column={column} title="ID" />
        ),
        cell: ({ row }: { row: any }) => {
            const id = row.getValue("id")
            return <div className="font-semibold">{String(id).padStart(4, "0")}</div>
        },
    },
    {
        accessorKey: "nome",
        header: ({ column }: { column: any }) => (
            <DataTableColumnHeader column={column} title="Nome" />
        ),
        cell: ({ row }: { row: any }) => {
            const nome = row.getValue("nome")
            return <div className="w-80 font-semibold">{nome}</div>
        },
    },
    {
        accessorKey: "cpf",
        header: ({ column }: { column: any }) => (
            <DataTableColumnHeader column={column} title="CPF" />
        ),
    },
    {
        accessorKey: "telefone",
        header: ({ column }: { column: any }) => (
            <DataTableColumnHeader column={column} title="Telefone" />
        ),
    },
    {
        accessorKey: "sexo",
        header: ({ column }: { column: any }) => (
            <DataTableColumnHeader column={column} title="Sexo" />
        ),
    },
    {
        accessorKey: "data_nascimento",
        header: ({ column }: { column: any }) => (
            <DataTableColumnHeader column={column} title="Nascimento" />
        ),
    },
    {
        accessorKey: "observacoes",
        header: ({ column }: { column: any }) => (
            <DataTableColumnHeader column={column} title="Observacoes" />
        ),
    },
    {
        id: "actions",
        header: "Actions",
        cell: ({ row }: { row: any }) => {
            const id = row.getValue("id");
            return <ActionsCell row={row} onDelete={() => {
                PacienteDAO.delete(row.getValue("id"));
                window.location.reload();
            }} />;
        },
    },
]