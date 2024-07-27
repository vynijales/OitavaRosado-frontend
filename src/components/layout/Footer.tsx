import Link from "next/link";

export default function Footer() {
    return (
        <footer className="w-full h-12 flex justify-end items-center gap-4 bg-gray-100 text-accent px-14">
            <Link href="#">Feedback</Link>
            <Link href="#">Centro de suporte</Link>
            <Link href="#">Contato</Link>
        </footer>
    );
}