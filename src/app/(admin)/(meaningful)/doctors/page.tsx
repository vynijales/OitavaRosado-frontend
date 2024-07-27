import Breadcrumbs from "@/components/layout/Breadcrumbs";
import DataTable from "@/components/DataTable";

import { Payment, columns } from "./columns"


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
        email: "example@example.com",
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