import Breadcrumbs from "@/components/layout/Breadcrumbs";

export default function Page() {
    const items = [
        { text: "Home", link: "/home" },
        { text: "Agendamentos médicos", link: "/schedules" },
    ];

    return (
        <>
            <Breadcrumbs items={items} />
            <div>
                <h1>Schedules</h1>
            </div>
        </>
    );
}