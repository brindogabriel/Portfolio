/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Mail, Send } from "lucide-react";
import { useForm, ValidationError } from "@formspree/react";

export default function ContactForm() {
    const [state, handleSubmit] = useForm("xgejjgra");

    return (
        <div
            className="min-h-screen bg-gray-900 text-gray-100 py-6 px-4 sm:px-6 lg:px-8 overflow-x-hidden"
            id="contacto"
        >
            <div className="max-w-full sm:max-w-lg mx-auto p-4 sm:p-6 lg:p-8 dark:bg-gray-800 rounded-xl shadow-lg transition-colors duration-200">
                <div className="flex flex-col items-center justify-center mb-8">
                    <div className="flex items-center mb-4">
                        <Mail className="w-8 h-8 text-blue-600 dark:text-blue-400 mr-2" />
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
                            Contactame
                        </h2>
                    </div>
                    <ul className="flex flex-wrap justify-center gap-4">
                        <li>
                            <a
                                href="https://www.linkedin.com/in/gabrielsebastianbrindo"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="transition-transform transform hover:scale-105"
                            >
                                <img
                                    src="https://img.shields.io/badge/LinkedIn-GABRIELSEBASTIANBRINDO-0077B5?style=for-the-badge&logo=linkedin&logoColor=white"
                                    alt="badge linkedin"
                                />
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://github.com/brindogabriel"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="transition-transform transform hover:scale-105"
                            >
                                <img
                                    src="https://img.shields.io/badge/GitHub-BRINDOGABRIEL-100000?style=for-the-badge&logo=GitHub&logoColor=white"
                                    alt="badge GitHub"
                                />
                            </a>
                        </li>
                    </ul>
                </div>

                {state.succeeded ? (
                    <div className="mb-4 p-3 rounded-lg bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100">
                        ¡Mensaje enviado correctamente! Te responderé pronto.
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-2">
                            <label
                                htmlFor="email"
                                className="block text-sm sm:text-base font-medium text-gray-900 dark:text-gray-200"
                            >
                                Tu Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 
                                    bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                                    focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 
                                    focus:border-transparent transition-colors duration-200"
                                placeholder="name@example.com"
                            />
                            <ValidationError
                                prefix="Email"
                                field="email"
                                errors={state.errors}
                                className="text-red-500 text-sm mt-1"
                            />
                        </div>

                        <div className="space-y-2">
                            <label
                                htmlFor="message"
                                className="block text-sm sm:text-base font-medium text-gray-900 dark:text-gray-200"
                            >
                                Tu mensaje
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                required
                                rows={5}
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 
                                    bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                                    focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 
                                    focus:border-transparent transition-colors duration-200 resize-none field-sizing-content max-h-[5lh]"
                                placeholder="Escribí tu mensaje acá..."
                            ></textarea>
                            <ValidationError
                                prefix="Mensaje"
                                field="message"
                                errors={state.errors}
                                className="text-red-500 text-sm mt-1"
                            />
                        </div>
                        <button
                            type="submit"
                            disabled={state.submitting}
                            className="w-full flex items-center justify-center space-x-2 px-6 py-3 
                                bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 
                                text-white font-medium rounded-lg transition-colors duration-200
                                focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800
                                disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                            <span>
                                {state.submitting
                                    ? "Enviando..."
                                    : "Enviar Email"}
                            </span>
                            <Send className="w-5 h-5 ml-2" />
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
}
