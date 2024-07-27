import Breadcrumbs from "@/components/layout/Breadcrumbs";
import DataTable from "@/components/ui/DataTable";
import { Doctor } from "@/types/doctor";

import { columns } from "./DataTableDoctors";
import { Button } from "@/components/ui/button";


// This is some fake data to show in the table.
const data: Doctor[] = [
    {
        id: "1",
        name: "Dr. João",
        email: "",
        council: "CRM",
        council_uf: "RN",
        council_number: "123456",
        cbo: "123456",
        cpf: "123456",
        address: "Rua 1",
        neighborhood: "Bairro 1",
        city: "Cidade 1",
        uf: "RN",
        cep: "123456",
        phone: "123456",
    },
    {
        id: "2",
        name: "Dr. Maria",
        email: "",
        council: "CRM",
        council_uf: "RN",
        council_number: "123456",
        cbo: "123456",
        cpf: "123456",
        address: "Rua 2",
        neighborhood: "Bairro 2",
        city: "Cidade 2",
        uf: "RN",
        cep: "123456",
        phone: "123456",
    },
    {
        id: "3",
        name: "Dr. José",
        email: "",
        council: "CRM",
        council_uf: "RN",
        council_number: "123456",
        cbo: "123456",
        cpf: "123456",
        address: "Rua 3",
        neighborhood: "Bairro 3",
        city: "Cidade 3",
        uf: "RN",
        cep: "123456",
        phone: "123456",
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
                <div className="flex justify-between items-center">
                    <div
                        id="text-header"
                        className="text-white py-4">
                        <h1 className="text-3xl font-semibold">Médicos</h1>
                        <h2 className="text-slate-200">Gerencie com eficiência e segurança os dados do sistema</h2>
                    </div>
                    <Button className="bg-white hover:bg-white font-bold text-primary hover:text-primary hover:opacity-90">Novo Médico</Button>

                </div>
                <DataTable columns={columns} data={data} />
            </div>
        </>
    );
}