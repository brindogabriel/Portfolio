"use client";
import { useForm } from "@formspree/react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ContactForm() {
    const [state, handleSubmit] = useForm("xgejjgra"); // Reemplaza con tu ID de formspree

    return (
        <div
            className={`bg-[#1a1410] border-[#8c6d4b] rounded-md overflow-hidden ${
                state.submitting ? "cursor-submitting" : ""
            }`}
        >
            {state.succeeded ? (
                <div className="p-6 border-2 border-[#c19a49] bg-[#2a1e18] text-[#e8d0b0] rounded-md">
                    <div className="flex items-center gap-3 mb-3">
                        <div className="w-8 h-8 rounded-full bg-[#c19a49]/20 flex items-center justify-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 text-[#c19a49]"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-[#c19a49]">
                            ¡Mensaje Enviado!
                        </h3>
                    </div>
                    <p className="text-[#e8d0b0]/80">
                        Tu mensaje ha sido enviado correctamente. Como un veloz
                        jinete mongol, te responderé lo antes posible.
                    </p>
                </div>
            ) : (
                <form
                    onSubmit={handleSubmit}
                    className={`space-y-4 p-6 ${
                        state.submitting ? "cursor-submitting" : ""
                    }`}
                >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <label
                                htmlFor="nombre"
                                className="text-sm font-medium text-[#e8d0b0]"
                            >
                                Nombre
                            </label>
                            <input
                                id="nombre"
                                name="nombre"
                                required
                                className="w-full px-3 py-2 bg-[#3d2e24] border border-[#8c6d4b] rounded-md focus:outline-none focus:ring-2 focus:ring-[#c19a49] text-[#e8d0b0]"
                                placeholder="Tu nombre"
                            />
                        </div>
                        <div className="space-y-2">
                            <label
                                htmlFor="email"
                                className="text-sm font-medium text-[#e8d0b0]"
                            >
                                Email
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                required
                                className="w-full px-3 py-2 bg-[#3d2e24] border border-[#8c6d4b] rounded-md focus:outline-none focus:ring-2 focus:ring-[#c19a49] text-[#e8d0b0]"
                                placeholder="tu@email.com"
                            />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <label
                            htmlFor="asunto"
                            className="text-sm font-medium text-[#e8d0b0]"
                        >
                            Asunto
                        </label>
                        <input
                            id="asunto"
                            name="asunto"
                            className="disabled w-full px-3 py-2 bg-[#3d2e24] border border-[#8c6d4b] rounded-md focus:outline-none focus:ring-2 focus:ring-[#c19a49] text-[#e8d0b0]"
                            placeholder="Asunto del mensaje"
                            value="Propuesta de trabajo"
                            readOnly
                        />
                    </div>
                    <div className="space-y-2">
                        <label
                            htmlFor="message"
                            className="text-sm font-medium text-[#e8d0b0]"
                        >
                            Mensaje
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            rows={5}
                            required
                            className="w-full px-3 py-2 bg-[#3d2e24] border border-[#8c6d4b] rounded-md focus:outline-none focus:ring-2 focus:ring-[#c19a49] text-[#e8d0b0] resize-none"
                            placeholder="Escribe tu mensaje aquí..."
                        ></textarea>
                    </div>
                    <Button
                        type="submit"
                        disabled={state.submitting}
                        className="w-full bg-[#c19a49] hover:bg-[#a17a29] text-[#1a1410] font-bold disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                        {state.submitting ? "Enviando..." : "Enviar Mensaje"}
                        <Send className="ml-2 h-4 w-4" />
                    </Button>
                </form>
            )}
        </div>
    );
}
