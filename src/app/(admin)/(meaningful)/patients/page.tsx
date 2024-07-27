import Breadcrumbs from "@/components/layout/Breadcrumbs";

export default function Page() {
    const items = [
        { text: "Home", link: "/home" },
        { text: "Pacientes", link: "/patients" },
    ];

    return (
        <>
            <Breadcrumbs items={items} />
            <div>
                <h1>Patients</h1>
            </div>
        </>
    );
}