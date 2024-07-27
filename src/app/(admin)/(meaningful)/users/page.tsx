import Breadcrumbs from "@/components/layout/Breadcrumbs";

export default function Page() {
    const items = [
        { text: "Home", link: "/home" },
        { text: "Usuários", link: "/users" },
    ];

    return (
        <>
            <Breadcrumbs items={items} />
            <div>
                <h1>Users</h1>
            </div>
        </>
    );
}