import Header from "@/components/layout/Header";
import SideBar from "@/components/layout/SideBar";
import Footer from "@/components/layout/Footer";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <>
      <Header />
      <SideBar />
      <main
        id="container"
        className="w-full min-h-[calc(100vh-3rem)] flex flex-col bg-gray-100 py-20 pl-20"
      >
        {children}
      </main>
      <Footer></Footer>
    </>
  )
}