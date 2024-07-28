import Breadcrumbs from "@/components/layout/Breadcrumbs";
import DataTable from "@/components/ui/DataTable";
import { Medico } from "@/types/medico";

import { columns } from "./DataTableDoctors";
import { Button } from "@/components/ui/button";
import { fakeData } from "./fakeData";


// This is some fake data to show in the table.
const data: Medico[] = fakeData;

export default function Page() {
    const items = [
        { text: "Home", link: "/home" },
        { text: "Médicos Solicitantes ou Coordenadores", link: "/doctors" },
    ];

    return (
        <>
            <Breadcrumbs items={items} />
            <div>
                <div className="flex justify-between items-center">
                    <div
                        id="text-header"
                        className="text-white py-4">
                        <h1 className="text-3xl font-semibold">Médicos</h1>
                        <h2 className="text-slate-200">Gerencie com eficiência e segurança os dados do sistema</h2>
                    </div>
                    <div className="flex gap-4">
                    <Button className="bg-white hover:bg-white font-bold text-primary hover:text-primary hover:opacity-90">Novo Médico Solicitante</Button>
                    <Button className="bg-white hover:bg-white font-bold text-primary hover:text-primary hover:opacity-90">Novo Médico Executante</Button>
                    </div>

                </div>
                <DataTable columns={columns} data={data} />
            </div>
        </>
    );
}