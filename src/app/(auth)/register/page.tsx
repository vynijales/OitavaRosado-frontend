"use client"

import Input from "@/components/form/Input";

export default function Register() {
    return (
        <form
            id="form"
            className="w-full h-full flex flex-col gap-4 justify-center"
        >
            <div
                id="form-header"
                className="flex flex-col gap-4"
            >
                <h1 className="text-5xl font-bold text-primary">Criar conta</h1>
                <p className="text-2xl text-accent">Preencha as informações abaixo para criar uma nova conta no sistema.</p>
            </div>
            <div
                id="form-inputs"
                className="w-full flex flex-col gap-3"
            >
                <Input
                    label="Nome"
                    type="text"
                    name="name"
                    value=""
                    required={true}
                />

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

                <Input
                    label="Confirmação de senha"
                    type="password"
                    name="confirm-password"
                    value=""
                    required={true}
                />

            </div>
            <div
                id="form-buttons"
                className="w-full flex flex-col justify-center items-center gap-4"
            >
                <button
                    id="submit-button"
                    type="submit"
                    className="w-full min-h-16 bg-primary hover:opacity-90 text-white text-2xl font-bold px-8 py-2 rounded mt-4"
                >
                    Finalizar cadastro
                </button>
                <button
                    id="cancel-button"
                    onClick={() => history.back()}
                    className=" text-red-600 hover:opacity-90 text-xl mt-2"
                >
                    Cancelar
                </button>
            </div>

        </form>)
}