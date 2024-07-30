"use client"

import { AgendamentoDAO } from "@/api/AgendamentoDAO"
import { DataTableColumnHeader } from "@/components/ui/DataTableColumnHeader"
import ActionsCell from "@/components/widgets/DeleteAlert"

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
        accessorKey: "medico",
        header: ({ column }: { column: any }) => (
            <DataTableColumnHeader column={column} title="Medico - CRM" />
        ),
        cell: ({ row }: { row: any }) => {
            const medico = row.getValue("medico")
            const nome = medico?.nome
            const id = medico?.id || ""

            return <div className="font-semibold">{nome} - {String(id).padStart(4, "0")}</div>
        },
    },
    {
        accessorKey: "paciente",
        header: ({ column }: { column: any }) => (
            <DataTableColumnHeader column={column} title="Paciente - ID" />
        ),
        cell: ({ row }: { row: any }) => {
            const paciente = row.getValue("paciente")
            const nome = paciente?.nome
            const id = paciente?.id || ""

            return <div className="font-semibold">{nome} - {String(id).padStart(4, "0")}</div>
        }
    },
    {
        accessorKey: "dataHora",
        header: ({ column }: { column: any }) => (
            <DataTableColumnHeader column={column} title="Data e hora" />
        ),
        cell: ({ row }: { row: any }) => {
            const data = row.original.data;
            const hora = row.original.hora;
            return <div>{data} - {hora}</div>;
        },
        sortingFn: (rowA: any, rowB: any) => {
            const dateA = new Date(`${rowA.original.data}T${rowA.original.hora}`);
            const dateB = new Date(`${rowB.original.data}T${rowB.original.hora}`);
            return dateA.getTime() - dateB.getTime();
        }
    },
    {
        accessorKey: "local",
        header: ({ column }: { column: any }) => (
            <DataTableColumnHeader column={column} title="Local" />
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
                AgendamentoDAO.delete(row.getValue("id"));
                window.location.reload();
            }} />;
        },
    },
]