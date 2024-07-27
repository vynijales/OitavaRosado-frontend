"use client"
import Image from 'next/image';

import Logo from "/public/logo2.png";

export default function Home() {
    return (
        <div className="w-full h-full flex flex-col grow justify-center items-center gap-4">
            <Image
                src={Logo}
                alt='Logo'
                className="w-28 aspect-square"
            >

            </Image>
            <h1 className="text-3xl">Seja bem-vindo(a) ao sistema da Clínica Oitava Rosado</h1>
            <h3 className='text-base'>Navegue pelos itens no menu para ter acesso às funcionalidades</h3>
        </div>
    );
}