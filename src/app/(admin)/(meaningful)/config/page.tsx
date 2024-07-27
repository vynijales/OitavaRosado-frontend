import Breadcrumbs from "@/components/layout/Breadcrumbs";

export default function Page() {
  const items = [
    { text: "Home", link: "/home" },
    { text: "Configuração", link: "/config" },
  ];

  return (
    <>
      <Breadcrumbs items={items} />
      <div>
        <h1>Configuration</h1>
      </div>
    </>
  );
}