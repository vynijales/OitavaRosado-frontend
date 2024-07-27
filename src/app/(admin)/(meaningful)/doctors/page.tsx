import Breadcrumbs from "@/components/layout/Breadcrumbs";
import DataTable from "@/components/ui/DataTable";

import { Payment, columns } from "../../../../components/ui/Columns"


// This is some fake data to show in the table.
const data: Payment[] = [
    {
        id: "1",
        amount: 100,
        status: "pending",
        email: "example@example.com",
    },
    {
        id: "2",
        amount: 200,
        status: "processing",
        email: "test@test.com",
    },
    {
        id: "3",
        amount: 300,
        status: "success",
        email: "nothing at all",
    },
];

export default function Page() {
    const items = [
        { text: "Home", link: "/home" },
        { text: "Médicos Solicitantes ou Coordenadores", link: "/doctors" },
    ];

    return (
        <>
            <Breadcrumbs items={items} />
            <div>
                <h1 className="text-3xl text-white">Médicos</h1>
                <DataTable columns={columns} data={data} />
            </div>
        </>
    );
}