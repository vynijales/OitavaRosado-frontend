"use client"

import Input from "@/components/form/Input";

export default function ConfirmToken() {
    return (
        <form
            id="form"
            className="w-full h-full flex flex-col gap-4 justify-start"
        >
            <div
                id="form-header"
                className="flex flex-col gap-4"
            >
                <h1 className="text-5xl font-bold text-primary">Recuperar acesso</h1>
                <p className="xl:max-w-lg text-2xl text-accent">Informe o código de recuperação enviado para o seu e-mail e recupere o acesso a sua conta.</p>
            </div>
            <div
                id="form-inputs"
                className="w-full flex flex-col gap-3"
            >
                <Input
                    label="Código de recuperação"
                    type="text"
                    name="code"
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
                    Recuperar acesso
                </button>
                <button
                    id="cancel-button"
                    onClick={() => history.back()}
                    className=" text-red-600 hover:opacity-90 text-xl mt-2"
                >
                    Cancelar
                </button>
            </div>

        </form>
    );
}
