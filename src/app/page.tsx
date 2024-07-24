import Link from "next/link";

export default function Home() {
    return (
      <div className="min-h-screen flex flex-col gap-2 items-center justify-center bg-primary text-white ">
        <h1 className="text-6xl font-bold">Oitava Rosado</h1>

        <Link href="/login" className="bg-secondary text-white px-8 py-2 rounded mt-4">
            Login
        </Link>

        <p className="text-black mt-2">Página inicial temporária</p>
      </div>
    )
  }
  