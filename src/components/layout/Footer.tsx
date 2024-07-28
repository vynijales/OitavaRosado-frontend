import Link from "next/link";

export default function Footer() {
    return (
        <footer className="w-full h-12 flex justify-between items-center bg-gray-100 text-accent pl-28 pr-20">
                © 2024 Clínica Oitava Rosado
            <div className="flex justify-end items-center gap-4">
                <Link href="#">Feedback</Link>
                <Link href="#">Centro de suporte</Link>
                <Link href="#">Contato</Link>
            </div>
        </footer>
    );
}