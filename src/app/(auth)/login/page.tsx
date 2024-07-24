"use client"

import Image from "next/image";
import Link from "next/link";

import Logo from "/public/logo.png";
import Input from "@/components/form/Input";

export default function Login() {
    return (
        <main className="flex h-screen w-full items-center justify-center">

            <div
                id="container"
                className="h-full lg:h-[80vh] w-full lg:w-[75vw] min-w-[500px] flex flex-col lg:flex-row overflow-hidden rounded-md shadow-lg"
            >
                <section
                    id="login-aside-logo"
                    className={`h-1/5 lg:h-full lg:w-3/5 flex flex-row-reverse lg:flex-col items-center justify-center gap-4 bg-primary lg:bg-login-background bg-right-bottom bg-no-repeat text-white select-none p-4`}
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
                    <form
                        id="form"
                        className="w-full h-full flex flex-col gap-8 justify-around"
                    >
                        <div
                            id="form-header"
                            className="flex flex-col gap-4"
                        >
                            <h1 className="text-5xl font-bold text-primary">Acessar conta</h1>
                            <p className="text-2xl text-accent">Bem-vindo(a)! Por favor, digite suas credenciais para ter acesso ao sistema.</p>
                        </div>
                        <div
                            id="form-inputs"
                            className="w-full flex flex-col gap-8"
                        >
                            <Input
                                label="E-mail"
                                type="email"
                                name="email"
                                value=""
                                required={true}
                            />

                            <Input
                                label="Senha"
                                type="password"
                                name="password"
                                value=""
                                required={true}
                            />


                            <div
                                id="form-checkbox"
                                className="flex flex-row gap-2 items-center"
                            >
                                <input
                                    id="manter-conectado"
                                    name="manter-conectado"
                                    type="checkbox"
                                    className="h-6 w-6"
                                />
                                <label
                                    htmlFor="manter-conectado"
                                    className="text-xl text-accent">
                                    Deixar-me conectado
                                </label>
                            </div>

                        </div>
                        <div
                            id="form-buttons"
                            className="w-full flex flex-col justify-center items-center gap-4"
                        >
                            <button
                                id="login-button"
                                className="w-full min-h-16 bg-primary hover:opacity-90 text-white text-2xl font-bold px-8 py-2 rounded mt-4"
                            >
                                Entrar
                            </button>
                            <Link
                                href=""
                                className=" text-primary hover:opacity-90 text-xl mt-2"
                            >
                                Esqueceu a senha?
                            </Link>
                        </div>

                    </form>

                </section>

            </div>
        </main>
    )
}