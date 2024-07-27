import Breadcrumbs from "@/components/layout/Breadcrumbs";

export default function Page() {
    const items = [
        { text: "Home", link: "/home" },
        { text: "Médicos Solicitantes ou Coordenadores", link: "/doctors" },
    ];

    return (
        <>
            <Breadcrumbs items={items} />
            <div>
                <h1>Doctors</h1>
            </div>
        </>
    );
}