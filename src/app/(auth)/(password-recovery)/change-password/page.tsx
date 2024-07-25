"use client"

import Input from "@/components/form/Input";

export default function ChangePassword() {
    return (
        <form
            id="form"
            className="max-w-full h-full flex flex-col gap-4 justify-start"
        >
            <div
                id="form-header"
                className="flex flex-col gap-4"
            >
                <h1 className="text-5xl font-bold text-primary">Alterar senha</h1>
                <p className="text-2xl text-accent">Altere sua senha e recupere o acesso ao sistema.</p>
            </div>
            <div
                id="form-inputs"
                className="w-full flex flex-col gap-3"
            >
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
                    Alterar senha
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
                