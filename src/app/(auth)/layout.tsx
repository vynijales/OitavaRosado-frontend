import Image from "next/image";

import Logo from "/public/logo.png";

export const metadata = {
    title: 'Oitava Rosado',
    description: 'Um projeto criado para o processo seletivo da Oitava Rosado.',
}

export default function AuthLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <main className="flex h-screen w-full items-center justify-center">

            <div
                id="container"
                className="h-full xl:h-[80vh] w-full xl:w-[75vw] min-w-[500px] flex flex-col xl:flex-row overflow-hidden rounded-md shadow-lg"
            >
                <section
                    id="login-aside-logo"
                    className={`h-1/5 xl:h-full xl:w-3/5 flex flex-row-reverse xl:flex-col items-center justify-center gap-4 bg-primary text-white select-none p-4`}
                >
                    <Image
                        src={Logo}
                        className="select-none"
                        alt="Logo da Oitavo Rosado"
                    />
                </section>

                <section
                    id="form-login"
                    className="flex h-full w-auto flex-grow flex-col items-center justify-center gap-1 bg-white p-20"
                >
                    {children}

                </section>

            </div>
        </main>
    )
}