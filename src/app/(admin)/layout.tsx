import Header from "@/components/layout/Header";
import SideBar from "@/components/layout/SideBar";

export default function AdminLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    
    return (
      <>
      <Header/>
      <SideBar/>

        <main>
            {children}
        </main>
      </>
    )
  }